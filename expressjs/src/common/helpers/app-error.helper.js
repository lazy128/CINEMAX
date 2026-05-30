import { responseError } from "./response.helper.js";
import jwt from "jsonwebtoken";
import { statusCodes } from "./status-code.helper.js";

export const appError = (err, req, res, next) => {
    console.log("mid đặc biệt bắt lỗi", err);

    if (err instanceof jwt.JsonWebTokenError) {
        // class JsonWebTokenError là bắt tất cả các lỗi liên quan tới token, không chừa bất kỳ một lỗi nào
        err.code = statusCodes.UNAUTHORIZED; // 401: FE sẽ logout người dùng
    }
    if (err instanceof jwt.TokenExpiredError) {
        // class TokenExpiredError chỉ bắt lỗi HẾT HẠN liên quan tới token
        err.code = statusCodes.FORBIDDEN; // 403: FE sẽ gọi api refresh-token
    }

    // console.log({
    //     cause: err?.cause,
    //     message: err?.message,
    //     name: err?.name,
    //     stack: err?.stack,
    //     code: err?.code,
    // });
    const response = responseError(err?.message, err?.code || statusCodes.INTERNAL_SERVER_ERROR, err?.stack);

    const status = typeof response.statusCode === 'number' ? response.statusCode : statusCodes.INTERNAL_SERVER_ERROR;
    res.status(status).json(response);
};
