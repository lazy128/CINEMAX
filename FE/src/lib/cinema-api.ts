import { api, type ApiEnvelope } from "./api-client";

export type NguoiDung = {
  taiKhoan: string;
  matKhau: string;
  email: string;
  soDt: string;
  maNhom: string;
  maLoaiNguoiDung: string;
  hoTen: string;
  accessToken?: string;
};

export type DangNhapPayload = {
  taiKhoan: string;
  matKhau: string;
};

export type DangKyPayload = {
  taiKhoan: string;
  matKhau: string;
  email: string;
  soDt: string;
  maNhom?: string;
  hoTen: string;
};

/** Body cho POST /auth/dang-nhap (email hoặc taiKhoan) */
export type AuthDangNhapPayload = {
  email?: string;
  taiKhoan?: string;
  matKhau: string;
};

/** Body cho POST /auth/dang-ky */
export type AuthDangKyPayload = {
  email: string;
  matKhau: string;
  hoTen: string;
  soDt?: string;
  taiKhoan?: string;
  maNhom?: string;
};

export type AuthToken = {
  accessToken: string;
};

export type Phim = {
  maPhim: number;
  tenPhim: string;
  trailer: string | null;
  hinhAnh: string | null;
  moTa: string | null;
  maNhom: string;
  ngayKhoiChieu: string | null;
  danhGia: number;
  hot: boolean;
  dangChieu: boolean;
  sapChieu: boolean;
  theLoai?: string;
};

export type Banner = {
  maBanner: number;
  maPhim: number;
  hinhAnh: string;
  phim: Phim;
};

/** Đăng nhập / đăng ký qua /auth (alias BE → QuanLyNguoiDung, cùng JWT) */
export const authApi = {
  async dangNhap(payload: AuthDangNhapPayload) {
    const { data } = await api.post<ApiEnvelope<AuthToken>>("/auth/dang-nhap", {
      ...(payload.email ? { email: payload.email } : { taiKhoan: payload.taiKhoan }),
      mat_khau: payload.matKhau,
    });
    return data.data;
  },

  async dangKy(payload: AuthDangKyPayload) {
    const { data } = await api.post<ApiEnvelope<boolean>>("/auth/dang-ky", {
      email: payload.email,
      mat_khau: payload.matKhau,
      ho_ten: payload.hoTen,
      so_dt: payload.soDt,
      taiKhoan: payload.taiKhoan,
      maNhom: payload.maNhom,
    });
    return data.data;
  },

  /** Đăng nhập bằng email hoặc username (một field) */
  async dangNhapTaiKhoan(account: string, matKhau: string) {
    const trimmed = account.trim();
    const payload: AuthDangNhapPayload = trimmed.includes("@")
      ? { email: trimmed, matKhau }
      : { taiKhoan: trimmed, matKhau };
    return this.dangNhap(payload);
  },

  /** Lưu token + lấy profile sau đăng nhập */
  async dangNhapVaLayThongTin(account: string, matKhau: string) {
    const { accessToken } = await this.dangNhapTaiKhoan(account, matKhau);
    localStorage.setItem("accessToken", accessToken);
    const user = await quanLyNguoiDungApi.thongTinTaiKhoan();
    localStorage.setItem("currentUser", JSON.stringify(user));
    return user;
  },
};

export const quanLyNguoiDungApi = {
  async dangNhap(payload: DangNhapPayload) {
    const { data } = await api.post<ApiEnvelope<NguoiDung>>("/QuanLyNguoiDung/DangNhap", payload);
    return data.data;
  },

  async dangKy(payload: DangKyPayload) {
    const { data } = await api.post<ApiEnvelope<NguoiDung>>("/QuanLyNguoiDung/DangKy", payload);
    return data.data;
  },

  async thongTinTaiKhoan() {
    const { data } = await api.post<ApiEnvelope<NguoiDung>>("/QuanLyNguoiDung/ThongTinTaiKhoan");
    return data.data;
  },

  async layDanhSachNguoiDung(tuKhoa?: string) {
    const { data } = await api.get<ApiEnvelope<NguoiDung[]>>("/QuanLyNguoiDung/LayDanhSachNguoiDung", {
      params: { tuKhoa },
    });
    return data.data;
  },

  async themNguoiDung(payload: Partial<NguoiDung> & { matKhau: string }) {
    const { data } = await api.post<ApiEnvelope<NguoiDung>>("/QuanLyNguoiDung/ThemNguoiDung", payload);
    return data.data;
  },

  async capNhatThongTinNguoiDung(payload: Partial<NguoiDung>) {
    const { data } = await api.put<ApiEnvelope<NguoiDung>>("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", payload);
    return data.data;
  },

  async xoaNguoiDung(taiKhoan: string) {
    const { data } = await api.delete<ApiEnvelope<boolean>>("/QuanLyNguoiDung/XoaNguoiDung", {
      params: { taiKhoan },
    });
    return data.data;
  },
};

export const quanLyPhimApi = {
  async layDanhSachBanner() {
    const { data } = await api.get<ApiEnvelope<Banner[]>>("/QuanLyPhim/LayDanhSachBanner");
    return data.data;
  },

  async layDanhSachPhim(maNhom = "GP00") {
    const { data } = await api.get<ApiEnvelope<Phim[]>>("/QuanLyPhim/LayDanhSachPhim", {
      params: { maNhom },
    });
    return data.data;
  },

  async layThongTinPhim(maPhim: number) {
    const { data } = await api.get<ApiEnvelope<Phim>>("/QuanLyPhim/LayThongTinPhim", {
      params: { maPhim },
    });
    return data.data;
  },

  async themPhimUploadHinh(formData: FormData) {
    const { data } = await api.post<ApiEnvelope<any>>("/QuanLyPhim/ThemPhimUploadHinh", formData);
    return data.data;
  },

  async capNhatPhimUpload(formData: FormData) {
    const { data } = await api.post<ApiEnvelope<any>>("/QuanLyPhim/CapNhatPhimUpload", formData);
    return data.data;
  },
  
  async xoaPhim(maPhim: number) {
    const { data } = await api.delete<ApiEnvelope<any>>("/QuanLyPhim/XoaPhim", { params: { MaPhim: maPhim } });
    return data.data;
  }
};

// ─── Quản lý rạp ───

export type HeThongRap = {
  maHeThongRap: string;
  tenHeThongRap: string;
  logo: string | null;
  id: string;
  name: string;
};

export type RapPhim = {
  maRap: number;
  tenRap: string;
};

export type CumRap = {
  maCumRap: string;
  tenCumRap: string;
  diaChi: string | null;
  danhSachRap: RapPhim[];
};

export type LichChieu = {
  maLichChieu: number;
  maRap: number;
  maPhim: number;
  ngayGioChieu: string;
  giaVe: number;
  time: string;
  type: string;
  price: number;
  seatsAvailable?: number;
  totalSeats?: number;
};

export type LichChieuPhimDetail = Phim & {
  heThongRapChieu: Array<{
    maHeThongRap: string;
    tenHeThongRap: string;
    logo: string | null;
    cumRapChieu: Array<{
      maCumRap: string;
      tenCumRap: string;
      diaChi: string | null;
      lichChieuPhim: Array<{
        maRap: number;
        tenRap: string;
        lichChieu: LichChieu[];
      }>;
    }>;
  }>;
};

export type HeThongRapLichChieu = {
  maHeThongRap: string;
  tenHeThongRap: string;
  logo: string | null;
  cumRapChieu: Array<{
    maCumRap: string;
    tenCumRap: string;
    diaChi: string | null;
    lichChieuPhim: Array<{
      maRap: number;
      tenRap: string;
      lichChieu: (LichChieu & { phim: Phim })[];
    }>;
  }>;
};

export const quanLyRapApi = {
  async layThongTinHeThongRap() {
    const { data } = await api.get<ApiEnvelope<HeThongRap[]>>("/QuanLyRap/LayThongTinHeThongRap");
    return data.data;
  },

  async layThongTinCumRapTheoHeThong(maHeThongRap: string) {
    const { data } = await api.get<ApiEnvelope<CumRap[]>>("/QuanLyRap/LayThongTinCumRapTheoHeThong", {
      params: { maHeThongRap },
    });
    return data.data;
  },

  async layThongTinLichChieuHeThongRap(maNhom = "GP00") {
    const { data } = await api.get<ApiEnvelope<HeThongRapLichChieu[]>>("/QuanLyRap/LayThongTinLichChieuHeThongRap", {
      params: { maNhom },
    });
    return data.data;
  },

  async layThongTinLichChieuPhim(maPhim: number) {
    const { data } = await api.get<ApiEnvelope<LichChieuPhimDetail>>("/QuanLyRap/LayThongTinLichChieuPhim", {
      params: { maPhim },
    });
    return data.data;
  }
};

// ─── Quản lý đặt vé ───

export type Ghe = {
  maGhe: number;
  tenGhe: string;
  loaiGhe: string;
  maRap: number;
  daDat: boolean;
  giaVe: number;
};

export type ThongTinPhimPhongVe = {
  maLichChieu: number;
  maRap: number;
  maPhim: number;
  ngayGioChieu: string;
  giaVe: number;
  tenPhim: string;
  hinhAnh: string | null;
  tenRap: string;
};

export type PhongVe = {
  thongTinPhim: ThongTinPhimPhongVe;
  danhSachGhe: Ghe[];
};

export type DatVePayload = {
  maLichChieu: number;
  danhSachVe: Array<{ maGhe: number; giaVe: number }>;
};

export type AdminTicket = {
  id: number;
  taiKhoan: string;
  hoTen: string;
  email: string;
  tenPhim: string;
  tenHeThong: string;
  tenCumRap: string;
  tenRap: string;
  ngayGioChieu: string;
  tenGhe: string;
  giaVe: number;
  ngayDat: string;
};

export const quanLyDatVeApi = {
  async layDanhSachPhongVe(maLichChieu: number) {
    const { data } = await api.get<ApiEnvelope<PhongVe>>("/QuanLyDatVe/LayDanhSachPhongVe", {
      params: { maLichChieu },
    });
    return data.data;
  },

  async datVe(payload: DatVePayload) {
    const { data } = await api.post<ApiEnvelope<boolean>>("/QuanLyDatVe/DatVe", payload);
    return data.data;
  },

  async taoLichChieu(payload: { maPhim: number; ngayChieuGioChieu: string; maRap: number; giaVe: number }) {
    const { data } = await api.post<ApiEnvelope<LichChieu>>("/QuanLyDatVe/TaoLichChieu", payload);
    return data.data;
  },

  async capNhatLichChieu(payload: { maLichChieu: number; maPhim?: number; ngayChieuGioChieu?: string; maRap?: number; giaVe?: number }) {
    const { data } = await api.post<ApiEnvelope<LichChieu>>("/QuanLyDatVe/CapNhatLichChieu", payload);
    return data.data;
  },

  async luuGiaoDich(payload: { maLichChieu: number; tongTien: number; noiDungCk?: string }) {
    const { data } = await api.post<ApiEnvelope<any>>("/QuanLyDatVe/LuuGiaoDich", payload);
    return data.data;
  },

  async layDanhSachTatCaVe() {
    const { data } = await api.get<ApiEnvelope<AdminTicket[]>>("/QuanLyDatVe/LayDanhSachTatCaVe");
    return data.data;
  },
};
