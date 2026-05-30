/**
 * Swagger documentation for Auth routes
 */

export const auth = {
    "/auth/dang-ky": {
        post: {
            tags: ["Auth"],
            summary: "Register new user",
            description: "Create a new user account",
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                email: {
                                    type: "string",
                                    example: "user@example.com"
                                },
                                password: {
                                    type: "string",
                                    example: "123456"
                                },
                                ho_ten: {
                                    type: "string",
                                    example: "Nguyen Van A"
                                },
                                tuoi: {
                                    type: "integer",
                                    example: 20
                                },
                                anh_dai_dien: {
                                    type: "string",
                                    nullable: true
                                }
                            },
                            required: ["email", "password", "ho_ten"]
                        }
                    }
                }
            },
            responses: {
                200: {
                    description: "Registration successful",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    status: { type: "string", example: "success" },
                                    statusCode: { type: "integer", example: 200 },
                                    message: { type: "string", example: "Register auth successfully" },
                                    data: { type: "boolean" }
                                }
                            }
                        }
                    }
                },
                400: {
                    description: "Bad Request - User already exists"
                }
            }
        }
    },
    "/auth/dang-nhap": {
        post: {
            tags: ["Auth"],
            summary: "Login user",
            description: "Authenticate user and return access token",
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                email: {
                                    type: "string",
                                    example: "user@example.com"
                                },
                                password: {
                                    type: "string",
                                    example: "123456"
                                }
                            },
                            required: ["email", "password"]
                        }
                    }
                }
            },
            responses: {
                200: {
                    description: "Login successful",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    status: { type: "string", example: "success" },
                                    statusCode: { type: "integer", example: 200 },
                                    message: { type: "string", example: "Login all auths successfully" },
                                    data: {
                                        type: "object",
                                        properties: {
                                            accessToken: { type: "string" },
                                            refreshToken: { type: "string" }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                400: {
                    description: "Bad Request - Invalid credentials"
                }
            }
        }
    }
};
