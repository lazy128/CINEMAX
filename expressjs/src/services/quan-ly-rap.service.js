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
    const result = await prisma.he_thong_rap.findMany({
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
    return result;
  },

  async LayThongTinLichChieuPhim(req) {
    const maPhim = Number(req.query.MaPhim);
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
    return phim;
  }
};
