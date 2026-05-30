import { responseSuccess } from "../common/helpers/response.helper.js";
import { quanLyRapService } from "../services/quan-ly-rap.service.js";

export const quanLyRapController = {
  async LayThongTinHeThongRap(req, res) {
    const result = await quanLyRapService.LayThongTinHeThongRap(req);
    const response = responseSuccess(result, "Lấy thông tin hệ thống rạp thành công");
    res.status(response.statusCode).json(response);
  },
  async LayThongTinCumRapTheoHeThong(req, res) {
    const result = await quanLyRapService.LayThongTinCumRapTheoHeThong(req);
    const response = responseSuccess(result, "Lấy thông tin cụm rạp thành công");
    res.status(response.statusCode).json(response);
  },
  async LayThongTinLichChieuHeThongRap(req, res) {
    const result = await quanLyRapService.LayThongTinLichChieuHeThongRap(req);
    const response = responseSuccess(result, "Lấy thông tin lịch chiếu hệ thống rạp thành công");
    res.status(response.statusCode).json(response);
  },
  async LayThongTinLichChieuPhim(req, res) {
    const result = await quanLyRapService.LayThongTinLichChieuPhim(req);
    const response = responseSuccess(result, "Lấy thông tin lịch chiếu phim thành công");
    res.status(response.statusCode).json(response);
  }
};
