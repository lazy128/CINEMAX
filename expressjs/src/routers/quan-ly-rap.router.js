import express from "express";
import { quanLyRapController } from "../controllers/quan-ly-rap.controller.js";
import { protect, restrictTo } from "../common/middlewares/protect.middleware.js";

const quanLyRapRouter = express.Router();

quanLyRapRouter.get("/LayThongTinHeThongRap", quanLyRapController.LayThongTinHeThongRap);
quanLyRapRouter.get("/LayThongTinCumRapTheoHeThong", quanLyRapController.LayThongTinCumRapTheoHeThong);
quanLyRapRouter.get("/LayThongTinLichChieuHeThongRap", quanLyRapController.LayThongTinLichChieuHeThongRap);
quanLyRapRouter.get("/LayThongTinLichChieuPhim", quanLyRapController.LayThongTinLichChieuPhim);

quanLyRapRouter.post("/TaoHeThongRap", protect, restrictTo("QuanTri"), quanLyRapController.TaoHeThongRap);
quanLyRapRouter.post("/TaoCumRap", protect, restrictTo("QuanTri"), quanLyRapController.TaoCumRap);
quanLyRapRouter.post("/TaoRapPhim", protect, restrictTo("QuanTri"), quanLyRapController.TaoRapPhim);

export default quanLyRapRouter;
