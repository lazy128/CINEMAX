import { ForbiddenException } from "../helpers/exception.helper.js";

export const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      throw new ForbiddenException("Bạn chưa đăng nhập");
    }
    if (!roles.includes(req.user.loai_nguoi_dung)) {
      throw new ForbiddenException("Bạn không có quyền thực hiện hành động này");
    }
    next();
  };
};
