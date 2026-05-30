import { prisma } from "../common/prisma/connect.prisma.js";
import { responseSuccess } from "../common/helpers/response.helper.js";

export const quanLyRapService = {
  async LayThongTinHeThongRap(req) {
    const maHeThongRap = req.query.maHeThongRap;
    let where = {};
    if (maHeThongRap) {
      where.ma_he_thong_rap = maHeThongRap;
    }
    const result = await prisma.he_thong_rap.findMany({ where });
    return result.map(ht => ({
      maHeThongRap: ht.ma_he_thong_rap,
      tenHeThongRap: ht.ten_he_thong_rap,
      logo: ht.logo,
      biDanh: ht.bi_danh || ht.ma_he_thong_rap
    }));
  },

  async LayThongTinCumRapTheoHeThong(req) {
    const maHeThongRap = req.query.maHeThongRap;
    const result = await prisma.cum_rap.findMany({
      where: { ma_he_thong_rap: maHeThongRap },
      include: { rap_phim: true }
    });
    return result.map(cum => ({
      maCumRap: cum.ma_cum_rap,
      tenCumRap: cum.ten_cum_rap,
      diaChi: cum.dia_chi,
      danhSachRap: cum.rap_phim.map(rap => ({
        maRap: rap.ma_rap,
        tenRap: rap.ten_rap
      }))
    }));
  },

  async LayThongTinLichChieuHeThongRap(req) {
    const maHeThongRap = req.query.maHeThongRap;
    let where = {};
    if (maHeThongRap) {
      where.ma_he_thong_rap = maHeThongRap;
    }
    const heThongRaps = await prisma.he_thong_rap.findMany({
      where,
      include: {
        cum_rap: {
          include: {
            rap_phim: {
              include: {
                lich_chieu: {
                  include: { phim: true }
                }
              }
            }
          }
        }
      }
    });

    return heThongRaps.map(htr => ({
      maHeThongRap: htr.ma_he_thong_rap,
      tenHeThongRap: htr.ten_he_thong_rap,
      logo: htr.logo,
      cumRapChieu: htr.cum_rap.map(cum => ({
        maCumRap: cum.ma_cum_rap,
        tenCumRap: cum.ten_cum_rap,
        diaChi: cum.dia_chi,
        lichChieuPhim: cum.rap_phim.map(rap => ({
          maRap: rap.ma_rap,
          tenRap: rap.ten_rap,
          lichChieu: rap.lich_chieu.map(lc => ({
            maLichChieu: lc.ma_lich_chieu,
            maRap: lc.ma_rap,
            maPhim: lc.ma_phim,
            ngayGioChieu: lc.ngay_gio_chieu,
            giaVe: lc.gia_ve,
            tenPhim: lc.phim.ten_phim,
            hinhAnh: lc.phim.hinh_anh
          }))
        })).filter(rap => rap.lichChieu.length > 0)
      })).filter(cum => cum.lichChieuPhim.length > 0)
    }));
  },

  async LayThongTinLichChieuPhim(req) {
    const rawMaPhim = req.query.MaPhim || req.query.maPhim;
    const maPhim = Number(rawMaPhim);
    const phim = await prisma.phim.findUnique({
      where: { ma_phim: maPhim },
      include: {
        lich_chieu: {
          include: {
            rap_phim: {
              include: { cum_rap: { include: { he_thong_rap: true } } }
            }
          }
        }
      }
    });

    if (!phim) return null;

    const heThongRapMap = {};

    phim.lich_chieu.forEach(lc => {
      const rap = lc.rap_phim;
      const cum = rap.cum_rap;
      const htr = cum.he_thong_rap;

      if (!heThongRapMap[htr.ma_he_thong_rap]) {
        heThongRapMap[htr.ma_he_thong_rap] = {
          maHeThongRap: htr.ma_he_thong_rap,
          tenHeThongRap: htr.ten_he_thong_rap,
          logo: htr.logo,
          cumRapChieuMap: {}
        };
      }

      const htrMap = heThongRapMap[htr.ma_he_thong_rap].cumRapChieuMap;

      if (!htrMap[cum.ma_cum_rap]) {
        htrMap[cum.ma_cum_rap] = {
          maCumRap: cum.ma_cum_rap,
          tenCumRap: cum.ten_cum_rap,
          diaChi: cum.dia_chi,
          lichChieuPhimMap: {}
        };
      }

      const crMap = htrMap[cum.ma_cum_rap].lichChieuPhimMap;

      if (!crMap[rap.ma_rap]) {
        crMap[rap.ma_rap] = {
          maRap: rap.ma_rap,
          tenRap: rap.ten_rap,
          lichChieu: []
        };
      }

      crMap[rap.ma_rap].lichChieu.push({
        maLichChieu: lc.ma_lich_chieu,
        maRap: lc.ma_rap,
        maPhim: lc.ma_phim,
        ngayGioChieu: lc.ngay_gio_chieu,
        giaVe: lc.gia_ve
      });
    });

    const heThongRapChieu = Object.values(heThongRapMap).map(htr => ({
      maHeThongRap: htr.maHeThongRap,
      tenHeThongRap: htr.tenHeThongRap,
      logo: htr.logo,
      cumRapChieu: Object.values(htr.cumRapChieuMap).map(cum => ({
        maCumRap: cum.maCumRap,
        tenCumRap: cum.tenCumRap,
        diaChi: cum.diaChi,
        lichChieuPhim: Object.values(cum.lichChieuPhimMap)
      }))
    }));

    return {
      maPhim: phim.ma_phim,
      tenPhim: phim.ten_phim,
      biDanh: phim.bi_danh,
      trailer: phim.trailer,
      hinhAnh: phim.hinh_anh,
      moTa: phim.mo_ta,
      ngayKhoiChieu: phim.ngay_khoi_chieu,
      danhGia: phim.danh_gia,
      hot: phim.hot,
      dangChieu: phim.dang_chieu,
      sapChieu: phim.sap_chieu,
      heThongRapChieu
    };
  },

  async TaoHeThongRap(req) {
    const { maHeThongRap, tenHeThongRap, logo } = req.body;
    const exists = await prisma.he_thong_rap.findUnique({
      where: { ma_he_thong_rap: maHeThongRap }
    });
    if (exists) throw new Error("Mã hệ thống rạp đã tồn tại!");
    
    return await prisma.he_thong_rap.create({
      data: {
        ma_he_thong_rap: maHeThongRap,
        ten_he_thong_rap: tenHeThongRap,
        logo: logo || "https://s3img.vcdn.vn/123phim/2018/09/bhd-star-cineplex-15380164228308.png"
      }
    });
  },

  async TaoCumRap(req) {
    const { maCumRap, tenCumRap, diaChi, maHeThongRap } = req.body;
    const exists = await prisma.cum_rap.findUnique({
      where: { ma_cum_rap: maCumRap }
    });
    if (exists) throw new Error("Mã cụm rạp đã tồn tại!");

    return await prisma.cum_rap.create({
      data: {
        ma_cum_rap: maCumRap,
        ten_cum_rap: tenCumRap,
        dia_chi: diaChi || "",
        ma_he_thong_rap: maHeThongRap
      }
    });
  },

  async TaoRapPhim(req) {
    const { tenRap, maCumRap } = req.body;
    return await prisma.rap_phim.create({
      data: {
        ten_rap: tenRap,
        ma_cum_rap: maCumRap
      }
    });
  }
};
