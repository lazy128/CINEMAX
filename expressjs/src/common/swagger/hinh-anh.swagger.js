/**
 * Swagger documentation for HinhAnh routes
 */

export const hinhAnh = {
    "/hinh-anh": {
        get: {
            tags: ["HinhAnh"],
            summary: "Get list of images",
            description: "Returns paginated list of non-deleted images with user info",
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
                                    message: { type: "string", example: "Lấy danh sách ảnh thành công" },
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
                }
            }
        }
    },
    "/hinh-anh/tim-kiem": {
        get: {
            tags: ["HinhAnh"],
            summary: "Search images by name",
            description: "Search images with optional text query",
            parameters: [
                {
                    in: "query",
                    name: "ten",
                    schema: { type: "string" }
                },
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
                }
            }
        }
    },
    "/hinh-anh/{id}": {
        get: {
            tags: ["HinhAnh"],
            summary: "Get image details",
            description: "Get detailed information about a specific image",
            security: [{ bearerAuth: [] }],
            parameters: [
                {
                    in: "path",
                    name: "id",
                    required: true,
                    schema: { type: "integer" }
                }
            ],
            responses: {
                200: {
                    description: "Success"
                },
                400: {
                    description: "Bad Request - Invalid ID or image not found"
                },
                401: { description: "Unauthorized" }
            }
        }
    },
    "/hinh-anh/{id}/binh-luan": {
        get: {
            tags: ["HinhAnh"],
            summary: "Get comments for an image",
            description: "Returns paginated list of comments for an image",
            security: [{ bearerAuth: [] }],
            parameters: [
                {
                    in: "path",
                    name: "id",
                    required: true,
                    schema: { type: "integer" }
                },
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
                200: { description: "Success" },
                400: { description: "Bad Request" },
                401: { description: "Unauthorized" }
            }
        },
        post: {
            tags: ["HinhAnh"],
            summary: "Add comment to image",
            description: "Create a new comment for an image",
            security: [{ bearerAuth: [] }],
            parameters: [
                {
                    in: "path",
                    name: "id",
                    required: true,
                    schema: { type: "integer" }
                }
            ],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                noi_dung: { type: "string" }
                            },
                            required: ["noi_dung"]
                        }
                    }
                }
            },
            responses: {
                200: { description: "Success" },
                400: { description: "Bad Request" },
                401: { description: "Unauthorized" }
            }
        }
    },
    "/hinh-anh/{id}/da-luu": {
        get: {
            tags: ["HinhAnh"],
            summary: "Check if image is saved",
            description: "Check if the authenticated user has saved this image",
            security: [{ bearerAuth: [] }],
            parameters: [
                {
                    in: "path",
                    name: "id",
                    required: true,
                    schema: { type: "integer" }
                }
            ],
            responses: {
                200: { description: "Success" },
                401: { description: "Unauthorized" }
            }
        }
    },
    "/hinh-anh/": {
        post: {
            tags: ["HinhAnh"],
            summary: "Create new image",
            description: "Upload a new image with metadata",
            security: [{ bearerAuth: [] }],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                ten_hinh: { type: "string" },
                                duong_dan: { type: "string" },
                                mo_ta: { type: "string" }
                            },
                            required: ["ten_hinh", "duong_dan"]
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
                                    message: { type: "string", example: "Thêm ảnh thành công" },
                                    data: { type: "object" }
                                }
                            }
                        }
                    }
                },
                401: { description: "Unauthorized" }
            }
        }
    },
    "/hinh-anh/{id}": {
        delete: {
            tags: ["HinhAnh"],
            summary: "Delete image",
            description: "Soft delete an image (only owner can delete)",
            security: [{ bearerAuth: [] }],
            parameters: [
                {
                    in: "path",
                    name: "id",
                    required: true,
                    schema: { type: "integer" }
                }
            ],
            responses: {
                200: { description: "Success" },
                400: { description: "Bad Request" },
                401: { description: "Unauthorized" },
                403: { description: "Forbidden - Not owner" }
            }
        }
    },
    "/hinh-anh/{id}/luu": {
        post: {
            tags: ["HinhAnh"],
            summary: "Toggle save image",
            description: "Save or unsave an image",
            security: [{ bearerAuth: [] }],
            parameters: [
                {
                    in: "path",
                    name: "id",
                    required: true,
                    schema: { type: "integer" }
                }
            ],
            responses: {
                200: { description: "Success" },
                400: { description: "Bad Request" },
                401: { description: "Unauthorized" }
            }
        }
    }
};
