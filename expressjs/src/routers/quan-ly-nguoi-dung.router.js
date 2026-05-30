import express from "express";
import { protect } from "../common/middlewares/protect.middleware.js";
import { restrictTo } from "../common/middlewares/restrict-to.middleware.js";
import { quanLyNguoiDungController } from "../controllers/quan-ly-nguoi-dung.controller.js";

const quanLyNguoiDungRouter = express.Router();

quanLyNguoiDungRouter.get("/LayDanhSachLoaiNguoiDung", quanLyNguoiDungController.LayDanhSachLoaiNguoiDung);
quanLyNguoiDungRouter.post("/DangNhap", quanLyNguoiDungController.DangNhap);
quanLyNguoiDungRouter.post("/DangKy", quanLyNguoiDungController.DangKy);
quanLyNguoiDungRouter.get("/LayDanhSachNguoiDung", quanLyNguoiDungController.LayDanhSachNguoiDung);
quanLyNguoiDungRouter.get("/LayDanhSachNguoiDungPhanTrang", quanLyNguoiDungController.LayDanhSachNguoiDungPhanTrang);
quanLyNguoiDungRouter.get("/TimKiemNguoiDung", quanLyNguoiDungController.TimKiemNguoiDung);
quanLyNguoiDungRouter.get("/TimKiemNguoiDungPhanTrang", quanLyNguoiDungController.TimKiemNguoiDungPhanTrang);
quanLyNguoiDungRouter.post("/ThongTinTaiKhoan", protect, quanLyNguoiDungController.ThongTinTaiKhoan);
quanLyNguoiDungRouter.post("/LayThongTinNguoiDung", protect, restrictTo("QuanTri"), quanLyNguoiDungController.LayThongTinNguoiDung);
quanLyNguoiDungRouter.post("/ThemNguoiDung", protect, restrictTo("QuanTri"), quanLyNguoiDungController.ThemNguoiDung);
quanLyNguoiDungRouter.put("/CapNhatThongTinNguoiDung", protect, restrictTo("QuanTri"), quanLyNguoiDungController.CapNhatThongTinNguoiDung);
quanLyNguoiDungRouter.post("/CapNhatThongTinNguoiDung", protect, restrictTo("QuanTri"), quanLyNguoiDungController.CapNhatThongTinNguoiDung);
quanLyNguoiDungRouter.delete("/XoaNguoiDung", protect, restrictTo("QuanTri"), quanLyNguoiDungController.XoaNguoiDung);

export default quanLyNguoiDungRouter;
