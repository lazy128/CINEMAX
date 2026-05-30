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
    return result;
  },

  async LayThongTinCumRapTheoHeThong(req) {
    const maHeThongRap = req.query.maHeThongRap;
    const result = await prisma.cum_rap.findMany({
      where: { ma_he_thong_rap: maHeThongRap },
      include: { rap_phim: true }
    });
    return result;
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
  }
};
