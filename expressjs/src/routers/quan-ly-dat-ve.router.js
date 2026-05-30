import express from "express";
import { protect } from "../common/middlewares/protect.middleware.js";
import { restrictTo } from "../common/middlewares/restrict-to.middleware.js";
import { quanLyDatVeController } from "../controllers/quan-ly-dat-ve.controller.js";

const quanLyDatVeRouter = express.Router();

quanLyDatVeRouter.post("/DatVe", protect, quanLyDatVeController.DatVe);
quanLyDatVeRouter.post("/LuuGiaoDich", protect, quanLyDatVeController.LuuGiaoDich);
quanLyDatVeRouter.get("/LayDanhSachPhongVe", quanLyDatVeController.LayDanhSachPhongVe);
quanLyDatVeRouter.post("/TaoLichChieu", protect, restrictTo("QuanTri"), quanLyDatVeController.TaoLichChieu);
quanLyDatVeRouter.post("/CapNhatLichChieu", protect, restrictTo("QuanTri"), quanLyDatVeController.CapNhatLichChieu);

export default quanLyDatVeRouter;
