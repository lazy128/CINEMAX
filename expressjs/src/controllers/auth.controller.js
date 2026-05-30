import { responseSuccess } from "../common/helpers/response.helper.js";
import { authService } from "../services/auth.service.js";

export const authController = {
  async login(req, res) {
    const result = await authService.login(req);
    const response = responseSuccess(result, "Đăng nhập thành công");
    res.status(response.statusCode).json(response);
  },
  async register(req, res) {
    const result = await authService.register(req);
    const response = responseSuccess(result, "Đăng ký thành công");
    res.status(response.statusCode).json(response);
  },
  async refreshToken(req, res) {
    const result = await authService.refreshToken(req);
    const response = responseSuccess(result, "Refresh token thành công");
    res.status(response.statusCode).json(response);
  }
};
