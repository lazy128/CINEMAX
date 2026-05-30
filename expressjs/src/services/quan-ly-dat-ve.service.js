import { prisma } from "../common/prisma/connect.prisma.js";
import { BadRequestException, NotfoundException } from "../common/helpers/exception.helper.js";

function mapLichChieu(item) {
  return {
    maLichChieu: item.ma_lich_chieu,
    maRap: item.ma_rap,
    maPhim: item.ma_phim,
    ngayGioChieu: item.ngay_gio_chieu,
    giaVe: item.gia_ve,
  };
}

export const quanLyDatVeService = {
  async DatVe(req) {
    const maLichChieu = Number(req.body.maLichChieu);
    const danhSachVe = Array.isArray(req.body.danhSachVe) ? req.body.danhSachVe : [];
    const danhSachMaGhe = danhSachVe.map((ve) => Number(ve.maGhe));

    if (!maLichChieu || danhSachVe.length === 0) {
      throw new BadRequestException("Dữ liệu đặt vé không hợp lệ");
    }

    if (danhSachMaGhe.some((maGhe) => !Number.isInteger(maGhe) || maGhe <= 0)) {
      throw new BadRequestException("Danh sách ghế không hợp lệ");
    }

    if (new Set(danhSachMaGhe).size !== danhSachMaGhe.length) {
      throw new BadRequestException("Danh sách ghế bị trùng");
    }

    const lichChieu = await prisma.lich_chieu.findUnique({ where: { ma_lich_chieu: maLichChieu } });
    if (!lichChieu) throw new NotfoundException("Lịch chiếu không tồn tại");

    for (const ve of danhSachVe) {
      const maGhe = Number(ve.maGhe);
      const ghe = await prisma.ghe.findUnique({ where: { ma_ghe: maGhe } });
      if (!ghe) throw new NotfoundException(`Ghế ${maGhe} không tồn tại`);
      if (ghe.ma_rap !== lichChieu.ma_rap) {
        throw new BadRequestException(`Ghế ${maGhe} không thuộc rạp của lịch chiếu`);
      }

      const veDaDat = await prisma.dat_ve.findFirst({
        where: {
          ma_lich_chieu: maLichChieu,
          ma_ghe: maGhe,
        },
      });
      if (veDaDat) throw new BadRequestException(`Ghế ${maGhe} đã được đặt`);
    }

    await prisma.$transaction(
      danhSachVe.map((ve) =>
        prisma.dat_ve.create({
          data: {
            tai_khoan: req.user.tai_khoan,
            ma_lich_chieu: maLichChieu,
            ma_ghe: Number(ve.maGhe),
          },
        }),
      ),
    );

    return true;
  },

  async LayDanhSachPhongVe(req) {
    const maLichChieu = Number(req.query.MaLichChieu || req.query.maLichChieu);
    const lichChieu = await prisma.lich_chieu.findUnique({
      where: { ma_lich_chieu: maLichChieu },
      include: {
        phim: true,
        rap_phim: {
          include: {
            ghe: true,
          },
        },
        dat_ve: true,
      },
    });

    if (!lichChieu) throw new NotfoundException("Lịch chiếu không tồn tại");

    const gheDaDat = new Set(lichChieu.dat_ve.map((x) => x.ma_ghe));

    return {
      thongTinPhim: {
        ...mapLichChieu(lichChieu),
        tenPhim: lichChieu.phim.ten_phim,
        hinhAnh: lichChieu.phim.hinh_anh,
        tenRap: lichChieu.rap_phim.ten_rap,
      },
      danhSachGhe: lichChieu.rap_phim.ghe.map((g) => ({
        maGhe: g.ma_ghe,
        tenGhe: g.ten_ghe,
        loaiGhe: g.loai_ghe,
        maRap: g.ma_rap,
        daDat: gheDaDat.has(g.ma_ghe),
        giaVe: lichChieu.gia_ve,
      })),
    };
  },

  async TaoLichChieu(req) {
    const { maPhim, ngayChieuGioChieu, maRap, giaVe } = req.body;

    const phim = await prisma.phim.findUnique({ where: { ma_phim: Number(maPhim) } });
    if (!phim) throw new NotfoundException("Phim không tồn tại");

    const rap = await prisma.rap_phim.findUnique({ where: { ma_rap: Number(maRap) } });
    if (!rap) throw new NotfoundException("Rạp không tồn tại");

    const created = await prisma.lich_chieu.create({
      data: {
        ma_phim: Number(maPhim),
        ma_rap: Number(maRap),
        ngay_gio_chieu: new Date(ngayChieuGioChieu),
        gia_ve: Number(giaVe),
      },
    });

    return mapLichChieu(created);
  },

  async LuuGiaoDich(req) {
    const { maLichChieu, tongTien, noiDungCk } = req.body;
    
    if (!maLichChieu || !tongTien) {
      throw new BadRequestException("Dữ liệu giao dịch không hợp lệ");
    }

    const created = await prisma.giao_dich.create({
      data: {
        tai_khoan: req.user.tai_khoan,
        ma_lich_chieu: Number(maLichChieu),
        tong_tien: Number(tongTien),
        noi_dung_ck: noiDungCk || "Thanh toan ve xem phim",
      }
    });

    return created;
  },

  async CapNhatLichChieu(req) {
    const { maLichChieu, maPhim, ngayChieuGioChieu, maRap, giaVe } = req.body;

    const updated = await prisma.lich_chieu.update({
      where: { ma_lich_chieu: Number(maLichChieu) },
      data: {
        ma_phim: maPhim ? Number(maPhim) : undefined,
        ma_rap: maRap ? Number(maRap) : undefined,
        ngay_gio_chieu: ngayChieuGioChieu ? new Date(ngayChieuGioChieu) : undefined,
        gia_ve: giaVe ? Number(giaVe) : undefined,
      },
    });

    return mapLichChieu(updated);
  }
};