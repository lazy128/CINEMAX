import { responseSuccess } from "../common/helpers/response.helper.js";
import { quanLyDatVeService } from "../services/quan-ly-dat-ve.service.js";

export const quanLyDatVeController = {
  async DatVe(req, res) {
    const result = await quanLyDatVeService.DatVe(req);
    const response = responseSuccess(result, "Đặt vé thành công");
    res.status(response.statusCode).json(response);
  },

  async LayDanhSachPhongVe(req, res) {
    const result = await quanLyDatVeService.LayDanhSachPhongVe(req);
    const response = responseSuccess(result, "Lấy danh sách phòng vé thành công");
    res.status(response.statusCode).json(response);
  },

  async TaoLichChieu(req, res) {
    const result = await quanLyDatVeService.TaoLichChieu(req);
    const response = responseSuccess(result, "Tạo lịch chiếu thành công");
    res.status(response.statusCode).json(response);
  },

  async LuuGiaoDich(req, res) {
    const result = await quanLyDatVeService.LuuGiaoDich(req);
    const response = responseSuccess(result, "Lưu giao dịch thành công");
    res.status(response.statusCode).json(response);
  },

  async CapNhatLichChieu(req, res) {
    const result = await quanLyDatVeService.CapNhatLichChieu(req);
    const response = responseSuccess(result, "Cập nhật lịch chiếu thành công");
    res.status(response.statusCode).json(response);
  },
};