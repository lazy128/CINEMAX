import bcrypt from "bcrypt";
import { prisma } from "../common/prisma/connect.prisma.js";
import { tokenService } from "./token.service.js";
import { BadRequestException, NotfoundException } from "../common/helpers/exception.helper.js";

function mapNguoiDung(user) {
  return {
    taiKhoan: user.tai_khoan,
    matKhau: user.mat_khau,
    email: user.email,
    soDt: user.so_dt,
    maNhom: user.ma_nhom,
    maLoaiNguoiDung: user.loai_nguoi_dung,
    hoTen: user.ho_ten,
  };
}

function verifyPassword(plain, stored) {
  if (!stored) return false;
  if (stored.startsWith("$2a$") || stored.startsWith("$2b$") || stored.startsWith("$2y$")) {
    return bcrypt.compareSync(plain, stored);
  }
  return plain === stored;
}

function defaultTaiKhoan(email, hoTen) {
  if (email?.includes("@")) return email.split("@")[0];
  return hoTen?.replace(/\s+/g, "").toLowerCase().slice(0, 50) || "user";
}

async function findUserByTaiKhoanOrEmail(taiKhoan) {
  if (!taiKhoan?.trim()) return null;
  const key = taiKhoan.trim();
  return prisma.nguoi_dung.findFirst({
    where: {
      OR: [{ tai_khoan: key }, { email: key }],
    },
  });
}

export const quanLyNguoiDungService = {
  async LayDanhSachLoaiNguoiDung() {
    return [
      { maLoaiNguoiDung: "KhachHang", tenLoai: "Khách hàng" },
      { maLoaiNguoiDung: "QuanTri", tenLoai: "Quản trị" }
    ];
  },

  async DangNhap(req) {
    const { taiKhoan, matKhau } = req.body;
    const user = await findUserByTaiKhoanOrEmail(taiKhoan);

    if (!user || !verifyPassword(matKhau, user.mat_khau)) {
      throw new BadRequestException("Tài khoản hoặc mật khẩu không đúng!");
    }

    const token = tokenService.createAccessToken(user.tai_khoan);

    return {
      ...mapNguoiDung(user),
      accessToken: token,
    };
  },

  async DangKy(req) {
    const { taiKhoan, matKhau, email, soDt, maNhom, hoTen } = req.body;

    let existTaiKhoan = await prisma.nguoi_dung.findUnique({
      where: { tai_khoan: taiKhoan || "" },
    });
    if (existTaiKhoan) throw new BadRequestException("Tài khoản đã tồn tại!");

    let existEmail = await prisma.nguoi_dung.findFirst({
      where: { email: email || "" },
    });
    if (existEmail) throw new BadRequestException("Email đã tồn tại!");

    const userNew = await prisma.nguoi_dung.create({
      data: {
        tai_khoan: taiKhoan || defaultTaiKhoan(email, hoTen),
        mat_khau: bcrypt.hashSync(matKhau, 10),
        email: email,
        so_dt: soDt,
        ma_nhom: maNhom || "GP00",
        ho_ten: hoTen,
        loai_nguoi_dung: "KhachHang"
      },
    });

    return mapNguoiDung(userNew);
  },

  async LayDanhSachNguoiDung(req) {
    const tuKhoa = req.query.tuKhoa ? String(req.query.tuKhoa) : undefined;
    const users = await prisma.nguoi_dung.findMany({
      where: tuKhoa
        ? {
            OR: [
              { tai_khoan: { contains: tuKhoa } },
              { email: { contains: tuKhoa } },
              { ho_ten: { contains: tuKhoa } },
            ],
          }
        : undefined,
      orderBy: { tai_khoan: "asc" },
    });

    return users.map(mapNguoiDung);
  },

  async LayDanhSachNguoiDungPhanTrang(req) {
    const soTrang = Math.max(Number(req.query.soTrang) || 1, 1);
    const soPhanTuTrenTrang = Math.max(Number(req.query.soPhanTuTrenTrang) || 10, 1);
    const tuKhoa = req.query.tuKhoa ? String(req.query.tuKhoa) : undefined;
    const where = tuKhoa
      ? {
          OR: [
            { tai_khoan: { contains: tuKhoa } },
            { email: { contains: tuKhoa } },
            { ho_ten: { contains: tuKhoa } },
          ],
        }
      : undefined;

    const [items, totalCount] = await Promise.all([
      prisma.nguoi_dung.findMany({
        where,
        skip: (soTrang - 1) * soPhanTuTrenTrang,
        take: soPhanTuTrenTrang,
        orderBy: { tai_khoan: "asc" },
      }),
      prisma.nguoi_dung.count({ where }),
    ]);

    return {
      currentPage: soTrang,
      count: totalCount,
      totalPages: Math.ceil(totalCount / soPhanTuTrenTrang),
      totalCount,
      items: items.map(mapNguoiDung),
    };
  },

  async TimKiemNguoiDung(req) {
    return this.LayDanhSachNguoiDung(req);
  },

  async TimKiemNguoiDungPhanTrang(req) {
    return this.LayDanhSachNguoiDungPhanTrang(req);
  },

  async ThongTinTaiKhoan(req) {
    const userWithTickets = await prisma.nguoi_dung.findUnique({
      where: { tai_khoan: req.user.tai_khoan },
      include: {
        dat_ve: {
          include: {
            lich_chieu: {
              include: { phim: true, rap_phim: true }
            },
            ghe: true
          },
          orderBy: { ngay_dat: "desc" }
        }
      }
    });

    if (!userWithTickets) {
      throw new NotfoundException("Người dùng không tồn tại");
    }

    const groupedTickets = new Map();

    for (const ve of userWithTickets.dat_ve) {
      const minuteBucket = Math.floor(new Date(ve.ngay_dat).getTime() / 60000);
      const groupKey = `${ve.ma_lich_chieu}_${minuteBucket}`;

      if (!groupedTickets.has(groupKey)) {
        groupedTickets.set(groupKey, {
          maVe: ve.id,
          ngayDat: ve.ngay_dat,
          tenPhim: ve.lich_chieu?.phim?.ten_phim,
          hinhAnh: ve.lich_chieu?.phim?.hinh_anh,
          tenHeThongRap: "Cinemax", // Simplified for now
          tenCumRap: ve.lich_chieu?.rap_phim?.ten_rap,
          giaVe: ve.lich_chieu?.gia_ve,
          danhSachGhe: []
        });
      }

      groupedTickets.get(groupKey).danhSachGhe.push({
        maHethongRap: String(ve.lich_chieu?.rap_phim?.ma_rap),
        tenHeThongRap: "Cinemax",
        maCumRap: String(ve.lich_chieu?.rap_phim?.ma_rap),
        tenCumRap: ve.lich_chieu?.rap_phim?.ten_rap,
        maRap: ve.lich_chieu?.rap_phim?.ma_rap,
        tenRap: ve.lich_chieu?.rap_phim?.ten_rap,
        maGhe: ve.ghe?.ma_ghe,
        tenGhe: ve.ghe?.ten_ghe
      });
    }

    return {
      ...mapNguoiDung(userWithTickets),
      thongTinDatVe: Array.from(groupedTickets.values())
    };
  },

  async LayThongTinNguoiDung(req) {
    const { taiKhoan } = req.body;
    const user = await findUserByTaiKhoanOrEmail(taiKhoan);

    if (!user) {
      throw new NotfoundException("Người dùng không tồn tại");
    }

    return mapNguoiDung(user);
  },

  async ThemNguoiDung(req) {
    const { maLoaiNguoiDung } = req.body;
    const result = await this.DangKy(req);
    if (!maLoaiNguoiDung) return result;

    const updated = await prisma.nguoi_dung.update({
      where: { tai_khoan: result.taiKhoan },
      data: { loai_nguoi_dung: maLoaiNguoiDung },
    });

    return mapNguoiDung(updated);
  },

  async CapNhatThongTinNguoiDung(req) {
    const { taiKhoan, matKhau, email, soDt, maNhom, maLoaiNguoiDung, hoTen } = req.body;
    const user = await findUserByTaiKhoanOrEmail(taiKhoan);

    if (!user) {
      throw new NotfoundException("Người dùng không tồn tại");
    }

    const updated = await prisma.nguoi_dung.update({
      where: { tai_khoan: user.tai_khoan },
      data: {
        email: email ?? user.email,
        so_dt: soDt ?? user.so_dt,
        ma_nhom: maNhom ?? user.ma_nhom,
        loai_nguoi_dung: maLoaiNguoiDung ?? user.loai_nguoi_dung,
        ho_ten: hoTen ?? user.ho_ten,
        ...(matKhau ? { mat_khau: bcrypt.hashSync(matKhau, 10) } : {}),
      },
    });

    return mapNguoiDung(updated);
  },

  async XoaNguoiDung(req) {
    const taiKhoan = String(req.query.TaiKhoan || req.query.taiKhoan || "");
    const user = await findUserByTaiKhoanOrEmail(taiKhoan);

    if (!user) {
      throw new NotfoundException("Người dùng không tồn tại");
    }

    await prisma.dat_ve.deleteMany({ where: { tai_khoan: user.tai_khoan } });
    await prisma.nguoi_dung.delete({ where: { tai_khoan: user.tai_khoan } });
    return true;
  },
};