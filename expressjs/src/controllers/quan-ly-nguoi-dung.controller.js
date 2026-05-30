import { responseSuccess } from "../common/helpers/response.helper.js";
import { quanLyNguoiDungService } from "../services/quan-ly-nguoi-dung.service.js";

export const quanLyNguoiDungController = {
  async LayDanhSachLoaiNguoiDung(req, res) {
    const result = await quanLyNguoiDungService.LayDanhSachLoaiNguoiDung(req);
    const response = responseSuccess(result, "Lấy danh sách loại người dùng thành công");
    res.status(response.statusCode).json(response);
  },

  async DangNhap(req, res) {
    const result = await quanLyNguoiDungService.DangNhap(req);
    const response = responseSuccess(result, "Đăng nhập thành công");
    res.status(response.statusCode).json(response);
  },

  async DangKy(req, res) {
    const result = await quanLyNguoiDungService.DangKy(req);
    const response = responseSuccess(result, "Đăng ký thành công");
    res.status(response.statusCode).json(response);
  },

  async LayDanhSachNguoiDung(req, res) {
    const result = await quanLyNguoiDungService.LayDanhSachNguoiDung(req);
    const response = responseSuccess(result, "Lấy danh sách người dùng thành công");
    res.status(response.statusCode).json(response);
  },

  async LayDanhSachNguoiDungPhanTrang(req, res) {
    const result = await quanLyNguoiDungService.LayDanhSachNguoiDungPhanTrang(req);
    const response = responseSuccess(result, "Lấy danh sách người dùng phân trang thành công");
    res.status(response.statusCode).json(response);
  },

  async TimKiemNguoiDung(req, res) {
    const result = await quanLyNguoiDungService.TimKiemNguoiDung(req);
    const response = responseSuccess(result, "Tìm kiếm người dùng thành công");
    res.status(response.statusCode).json(response);
  },

  async TimKiemNguoiDungPhanTrang(req, res) {
    const result = await quanLyNguoiDungService.TimKiemNguoiDungPhanTrang(req);
    const response = responseSuccess(result, "Tìm kiếm người dùng phân trang thành công");
    res.status(response.statusCode).json(response);
  },

  async ThongTinTaiKhoan(req, res) {
    const result = await quanLyNguoiDungService.ThongTinTaiKhoan(req);
    const response = responseSuccess(result, "Lấy thông tin tài khoản thành công");
    res.status(response.statusCode).json(response);
  },

  async LayThongTinNguoiDung(req, res) {
    const result = await quanLyNguoiDungService.LayThongTinNguoiDung(req);
    const response = responseSuccess(result, "Lấy thông tin người dùng thành công");
    res.status(response.statusCode).json(response);
  },

  async ThemNguoiDung(req, res) {
    const result = await quanLyNguoiDungService.ThemNguoiDung(req);
    const response = responseSuccess(result, "Thêm người dùng thành công");
    res.status(response.statusCode).json(response);
  },

  async CapNhatThongTinNguoiDung(req, res) {
    const result = await quanLyNguoiDungService.CapNhatThongTinNguoiDung(req);
    const response = responseSuccess(result, "Cập nhật thông tin người dùng thành công");
    res.status(response.statusCode).json(response);
  },

  async XoaNguoiDung(req, res) {
    const result = await quanLyNguoiDungService.XoaNguoiDung(req);
    const response = responseSuccess(result, "Xóa người dùng thành công");
    res.status(response.statusCode).json(response);
  }
};
