import express from "express";
import { protect } from "../common/middlewares/protect.middleware.js";
import { restrictTo } from "../common/middlewares/restrict-to.middleware.js";
import { quanLyPhimController } from "../controllers/quan-ly-phim.controller.js";
import { uploadDiskStorage } from "../common/multer/disk-storage.multer.js";

const quanLyPhimRouter = express.Router();

quanLyPhimRouter.get("/LayDanhSachBanner", quanLyPhimController.LayDanhSachBanner);
quanLyPhimRouter.get("/LayDanhSachPhim", quanLyPhimController.LayDanhSachPhim);
quanLyPhimRouter.get("/LayDanhSachPhimPhanTrang", quanLyPhimController.LayDanhSachPhimPhanTrang);
quanLyPhimRouter.get("/LayDanhSachPhimTheoNgay", quanLyPhimController.LayDanhSachPhimTheoNgay);
quanLyPhimRouter.post("/ThemPhimUploadHinh", protect, restrictTo("QuanTri"), uploadDiskStorage.single("File"), quanLyPhimController.ThemPhimUploadHinh);
quanLyPhimRouter.post("/CapNhatPhimUpload", protect, restrictTo("QuanTri"), uploadDiskStorage.single("File"), quanLyPhimController.CapNhatPhimUpload);
quanLyPhimRouter.post("/", protect, restrictTo("QuanTri"), quanLyPhimController.ThemPhim);
quanLyPhimRouter.delete("/XoaPhim", protect, restrictTo("QuanTri"), quanLyPhimController.XoaPhim);
quanLyPhimRouter.get("/LayThongTinPhim", quanLyPhimController.LayThongTinPhim);

export default quanLyPhimRouter;
