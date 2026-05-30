import { prisma } from "../common/prisma/connect.prisma.js";
import { BadRequestException, NotfoundException } from "../common/helpers/exception.helper.js";
import { tokenService } from "./token.service.js";

export const authService = {
  async login(req) {
    // Basic placeholder for original auth login
    return { accessToken: "placeholder" };
  },
  async register(req) {
    return { success: true };
  },
  async refreshToken(req) {
    return { accessToken: "placeholder" };
  }
};
