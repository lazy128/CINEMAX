import express from "express";
import { authController } from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/dang-nhap", authController.login);
authRouter.post("/dang-ky", authController.register);
authRouter.post("/refresh-token", authController.refreshToken);

export default authRouter;
