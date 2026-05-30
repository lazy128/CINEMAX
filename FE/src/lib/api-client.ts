import axios from "axios";

const baseURL =
  (import.meta.env.VITE_API_BASE_URL as string | undefined) ||
  "http://localhost:5000/api";

export const IMAGE_BASE_URL = baseURL.replace(/\/api\/?$/, "");

export const api = axios.create({
  baseURL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const serverMessage = error.response?.data?.message;

    // 401 Unauthorized → token invalid, force logout
    if (status === 401) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("currentUser");
      if (typeof window !== "undefined" && !window.location.pathname.includes("/login")) {
        window.location.href = "/login";
      }
    }

    // 403 Forbidden → token expired
    if (status === 403) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("currentUser");
      if (typeof window !== "undefined" && !window.location.pathname.includes("/login")) {
        window.location.href = "/login";
      }
    }

    // Throw with the BE's Vietnamese message when available
    const message = serverMessage || error.message || "Đã xảy ra lỗi";
    return Promise.reject(new Error(message));
  },
);

export type ApiEnvelope<T> = {
  status: string;
  statusCode: number;
  message: string;
  data: T;
};
