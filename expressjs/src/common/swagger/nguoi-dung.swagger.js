/**
 * Swagger documentation for NguoiDung routes
 */

export const nguoiDung = {
    "/nguoi-dung/me": {
        get: {
            tags: ["NguoiDung"],
            summary: "Get current user information",
            description: "Returns the authenticated user's profile information",
            security: [{ bearerAuth: [] }],
            responses: {
                200: {
                    description: "Success",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    status: { type: "string", example: "success" },
                                    statusCode: { type: "integer", example: 200 },
                                    message: { type: "string", example: "Lấy thông tin user thành công" },
                                    data: {
                                        type: "object",
                                        properties: {
                                            nguoi_dung_id: { type: "integer" },
                                            email: { type: "string" },
                                            ho_ten: { type: "string" },
                                            tuoi: { type: "integer" },
                                            anh_dai_dien: { type: "string", nullable: true }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                401: { description: "Unauthorized" }
            }
        }
    },
    "/nguoi-dung/anh-da-luu": {
        get: {
            tags: ["NguoiDung"],
            summary: "Get saved images",
            description: "Returns list of images saved by the user",
            security: [{ bearerAuth: [] }],
            parameters: [
                {
                    in: "query",
                    name: "page",
                    schema: { type: "integer", default: 1 }
                },
                {
                    in: "query",
                    name: "pageSize",
                    schema: { type: "integer", default: 10 }
                }
            ],
            responses: {
                200: {
                    description: "Success",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    status: { type: "string", example: "success" },
                                    statusCode: { type: "integer", example: 200 },
                                    message: { type: "string", example: "Lấy ảnh đã lưu thành công" },
                                    data: {
                                        type: "object",
                                        properties: {
                                            totalItem: { type: "integer" },
                                            totalPage: { type: "integer" },
                                            page: { type: "integer" },
                                            pageSize: { type: "integer" },
                                            items: {
                                                type: "array",
                                                items: { type: "object" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                401: { description: "Unauthorized" }
            }
        }
    },
    "/nguoi-dung/anh-da-tao": {
        get: {
            tags: ["NguoiDung"],
            summary: "Get user's created images",
            description: "Returns list of images created by the user",
            security: [{ bearerAuth: [] }],
            parameters: [
                {
                    in: "query",
                    name: "page",
                    schema: { type: "integer", default: 1 }
                },
                {
                    in: "query",
                    name: "pageSize",
                    schema: { type: "integer", default: 10 }
                }
            ],
            responses: {
                200: {
                    description: "Success"
                },
                401: { description: "Unauthorized" }
            }
        }
    },
    "/nguoi-dung/me": {
        put: {
            tags: ["NguoiDung"],
            summary: "Update user information",
            description: "Update the authenticated user's profile",
            security: [{ bearerAuth: [] }],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                ho_ten: { type: "string" },
                                tuoi: { type: "integer" },
                                anh_dai_dien: { type: "string" }
                            }
                        }
                    }
                }
            },
            responses: {
                200: {
                    description: "Success",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    status: { type: "string", example: "success" },
                                    statusCode: { type: "integer", example: 200 },
                                    message: { type: "string", example: "Cập nhật thông tin thành công" },
                                    data: { type: "object" }
                                }
                            }
                        }
                    }
                },
                401: { description: "Unauthorized" }
            }
        }
    }
};
