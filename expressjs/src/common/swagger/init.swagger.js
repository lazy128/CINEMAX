import { auth } from "./auth.swagger.js";
import { hinhAnh } from "./hinh-anh.swagger.js";
import { nguoiDung } from "./nguoi-dung.swagger.js";

export const swaggerDocument = {
    openapi: "3.0.4",
    info: {
        title: "Troll ExpressJS API",
        description: "Image sharing API with authentication",
        version: "1.0.0",
    },
    servers: [
        {
            url: "http://localhost:3069/api",
            description: "Development server",
        },
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT",
            }
        }
    },
    paths: {
        ...auth,
        ...hinhAnh,
        ...nguoiDung,
    },
};
