import { responseSuccess } from "../common/helpers/response.helper.js";
import { quanLyPhimService } from "../services/quan-ly-phim.service.js";

export const quanLyPhimController = {
  async LayDanhSachBanner(req, res) {
    const result = await quanLyPhimService.LayDanhSachBanner(req);
    const response = responseSuccess(result, "Lấy danh sách banner thành công");
    res.status(response.statusCode).json(response);
  },

  async LayDanhSachPhim(req, res) {
    const result = await quanLyPhimService.LayDanhSachPhim(req);
    const response = responseSuccess(result, "Lấy danh sách phim thành công");
    res.status(response.statusCode).json(response);
  },

  async LayDanhSachPhimPhanTrang(req, res) {
    const result = await quanLyPhimService.LayDanhSachPhimPhanTrang(req);
    const response = responseSuccess(result, "Lấy danh sách phim phân trang thành công");
    res.status(response.statusCode).json(response);
  },

  async LayDanhSachPhimTheoNgay(req, res) {
    const result = await quanLyPhimService.LayDanhSachPhimTheoNgay(req);
    const response = responseSuccess(result, "Lấy danh sách phim theo ngày thành công");
    res.status(response.statusCode).json(response);
  },

  async ThemPhimUploadHinh(req, res) {
    const result = await quanLyPhimService.ThemPhimUploadHinh(req);
    const response = responseSuccess(result, "Thêm phim upload hình thành công");
    res.status(response.statusCode).json(response);
  },

  async CapNhatPhimUpload(req, res) {
    const result = await quanLyPhimService.CapNhatPhimUpload(req);
    const response = responseSuccess(result, "Cập nhật phim upload thành công");
    res.status(response.statusCode).json(response);
  },

  async ThemPhim(req, res) {
    const result = await quanLyPhimService.ThemPhim(req);
    const response = responseSuccess(result, "Thêm phim thành công");
    res.status(response.statusCode).json(response);
  },

  async XoaPhim(req, res) {
    const result = await quanLyPhimService.XoaPhim(req);
    const response = responseSuccess(result, "Xóa phim thành công");
    res.status(response.statusCode).json(response);
  },

  async LayThongTinPhim(req, res) {
    const result = await quanLyPhimService.LayThongTinPhim(req);
    const response = responseSuccess(result, "Lấy thông tin phim thành công");
    res.status(response.statusCode).json(response);
  }
};
