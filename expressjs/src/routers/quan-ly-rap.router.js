import express from "express";
import { quanLyRapController } from "../controllers/quan-ly-rap.controller.js";

const quanLyRapRouter = express.Router();

quanLyRapRouter.get("/LayThongTinHeThongRap", quanLyRapController.LayThongTinHeThongRap);
quanLyRapRouter.get("/LayThongTinCumRapTheoHeThong", quanLyRapController.LayThongTinCumRapTheoHeThong);
quanLyRapRouter.get("/LayThongTinLichChieuHeThongRap", quanLyRapController.LayThongTinLichChieuHeThongRap);
quanLyRapRouter.get("/LayThongTinLichChieuPhim", quanLyRapController.LayThongTinLichChieuPhim);

export default quanLyRapRouter;
