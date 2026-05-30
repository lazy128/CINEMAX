import { prisma } from "../common/prisma/connect.prisma.js";
import { BadRequestException, NotfoundException } from "../common/helpers/exception.helper.js";

function mapPhim(item) {
  const status = item.dang_chieu ? "now_showing" : "coming_soon";
  const releaseIso = item.ngay_khoi_chieu
    ? new Date(item.ngay_khoi_chieu).toISOString()
    : null;
  const poster = item.hinh_anh || `https://picsum.photos/seed/phim-${item.ma_phim}/400/600`;

  return {
    maPhim: item.ma_phim,
    tenPhim: item.ten_phim,
    trailer: item.trailer,
    hinhAnh: item.hinh_anh,
    moTa: item.mo_ta,
    maNhom: item.ma_nhom,
    ngayKhoiChieu: item.ngay_khoi_chieu,
    danhGia: item.danh_gia,
    hot: item.hot,
    dangChieu: item.dang_chieu,
    sapChieu: item.sap_chieu,
    id: String(item.ma_phim),
    title: item.ten_phim,
    tagline: item.mo_ta || item.ten_phim,
    genre: item.the_loai ? item.the_loai.split(",") : ["General"],
    rating: item.danh_gia >= 8 ? "18+" : item.danh_gia >= 6 ? "16+" : "13+",
    imdbScore: Number(item.danh_gia || 0),
    runtime: 120,
    theLoai: item.the_loai,
    language: "Vietnamese",
    synopsis: item.mo_ta || "No synopsis",
    cast: [],
    director: "Unknown",
    status,
    releaseDate: releaseIso,
    trailerUrl: item.trailer || "#",
    poster,
    backdrop: poster,
    accent: item.hot ? "#e50914" : "#ff6b35",
  };
}

export const quanLyPhimService = {
  async LayDanhSachBanner() {
    const items = await prisma.banner.findMany({
      include: { phim: true },
      orderBy: { ma_banner: "desc" },
    });

    // Nếu bảng banner chưa có dữ liệu, tự động lấy 3 phim đang chiếu làm banner (dữ liệu thật từ Admin)
    if (items.length === 0) {
      const activeMovies = await prisma.phim.findMany({
        where: { dang_chieu: true, is_deleted: false },
        take: 3,
        orderBy: { ma_phim: "desc" },
      });
      
      return activeMovies.map((x) => ({
        maBanner: x.ma_phim,
        maPhim: x.ma_phim,
        hinhAnh: x.hinh_anh,
        phim: mapPhim(x),
        image: x.hinh_anh,
        movieId: String(x.ma_phim),
      }));
    }

    return items.map((x) => ({
      maBanner: x.ma_banner,
      maPhim: x.ma_phim,
      hinhAnh: x.hinh_anh,
      phim: mapPhim(x.phim),
      image: x.hinh_anh,
      movieId: String(x.ma_phim),
    }));
  },

  async LayDanhSachPhim(req) {
    const maNhom = String(req.query.maNhom || req.query.MaNhom || "GP00");
    const tenPhim = req.query.tenPhim ? String(req.query.tenPhim) : undefined;

    const items = await prisma.phim.findMany({
      where: {
        ma_nhom: maNhom,
        is_deleted: false,
        ...(tenPhim ? { ten_phim: { contains: tenPhim } } : {}),
      },
      orderBy: { ma_phim: "desc" },
    });

    return items.map(mapPhim);
  },

  async LayDanhSachPhimPhanTrang(req) {
    const maNhom = String(req.query.maNhom || req.query.MaNhom || "GP00");
    const soTrang = Math.max(Number(req.query.soTrang) || 1, 1);
    const soPhanTuTrenTrang = Math.max(Number(req.query.soPhanTuTrenTrang) || 10, 1);
    const tuKhoa = req.query.tuKhoa ? String(req.query.tuKhoa) : undefined;
    const where = {
      ma_nhom: maNhom,
      is_deleted: false,
      ...(tuKhoa ? { ten_phim: { contains: tuKhoa } } : {}),
    };

    const [items, totalCount] = await Promise.all([
      prisma.phim.findMany({
        where,
        skip: (soTrang - 1) * soPhanTuTrenTrang,
        take: soPhanTuTrenTrang,
        orderBy: { ma_phim: "desc" },
      }),
      prisma.phim.count({ where }),
    ]);

    return {
      currentPage: soTrang,
      count: totalCount,
      totalPages: Math.ceil(totalCount / soPhanTuTrenTrang),
      totalCount,
      items: items.map(mapPhim),
    };
  },

  async LayDanhSachPhimTheoNgay(req) {
    // Optional implementation if needed
    return this.LayDanhSachPhim(req);
  },

  async ThemPhimUploadHinh(req) {
    const { tenPhim, trailer, moTa, maNhom, ngayKhoiChieu, danhGia, hot, dangChieu, sapChieu, theLoai } = req.body;
    const hinhAnh = req.file?.path || req.body.hinhAnh || null;

    const created = await prisma.phim.create({
      data: {
        ten_phim: tenPhim,
        trailer,
        hinh_anh: hinhAnh,
        mo_ta: moTa,
        ma_nhom: maNhom || "GP00",
        ngay_khoi_chieu: ngayKhoiChieu ? new Date(ngayKhoiChieu) : null,
        danh_gia: Number(danhGia) || 0,
        hot: hot === "true" || hot === true,
        dang_chieu: dangChieu === "true" || dangChieu === true,
        sap_chieu: sapChieu === "true" || sapChieu === true,
        the_loai: theLoai,
        created_by: req.user?.tai_khoan,
      },
    });

    return mapPhim(created);
  },

  async CapNhatPhimUpload(req) {
    const maPhim = Number(req.body.maPhim || req.body.MaPhim);
    if (!maPhim) throw new BadRequestException("Thiếu maPhim");

    const current = await prisma.phim.findUnique({ where: { ma_phim: maPhim } });
    if (!current || current.is_deleted) throw new NotfoundException("Phim không tồn tại");

    const updated = await prisma.phim.update({
      where: { ma_phim: maPhim },
      data: {
        ten_phim: req.body.tenPhim ?? current.ten_phim,
        trailer: req.body.trailer ?? current.trailer,
        hinh_anh: req.file?.path || req.body.hinhAnh || current.hinh_anh,
        mo_ta: req.body.moTa ?? current.mo_ta,
        ma_nhom: req.body.maNhom ?? current.ma_nhom,
        ngay_khoi_chieu: req.body.ngayKhoiChieu ? new Date(req.body.ngayKhoiChieu) : current.ngay_khoi_chieu,
        danh_gia: req.body.danhGia != null ? Number(req.body.danhGia) : current.danh_gia,
        hot: req.body.hot != null ? (req.body.hot === "true" || req.body.hot === true) : current.hot,
        dang_chieu: req.body.dangChieu != null ? (req.body.dangChieu === "true" || req.body.dangChieu === true) : current.dang_chieu,
        sap_chieu: req.body.sapChieu != null ? (req.body.sapChieu === "true" || req.body.sapChieu === true) : current.sap_chieu,
        the_loai: req.body.theLoai !== undefined ? req.body.theLoai : current.the_loai,
      },
    });

    return mapPhim(updated);
  },

  async ThemPhim(req) {
    const { tenPhim, trailer, hinhAnh, moTa, maNhom, ngayKhoiChieu, danhGia, hot, dangChieu, sapChieu, theLoai } = req.body;

    const created = await prisma.phim.create({
      data: {
        ten_phim: tenPhim,
        trailer,
        hinh_anh: hinhAnh,
        mo_ta: moTa,
        ma_nhom: maNhom || "GP00",
        ngay_khoi_chieu: ngayKhoiChieu ? new Date(ngayKhoiChieu) : null,
        danh_gia: Number(danhGia) || 0,
        hot: hot === "true" || hot === true,
        dang_chieu: dangChieu === "true" || dangChieu === true,
        sap_chieu: sapChieu === "true" || sapChieu === true,
        the_loai: theLoai,
        created_by: req.user?.tai_khoan,
      },
    });

    return mapPhim(created);
  },

  async XoaPhim(req) {
    const maPhim = Number(req.query.MaPhim || req.query.maPhim);
    if (!maPhim) throw new BadRequestException("Thiếu MaPhim");

    await prisma.phim.update({
      where: { ma_phim: maPhim },
      data: {
        is_deleted: true,
        deleted_at: new Date(),
        deleted_by: req.user.tai_khoan,
      },
    });
    return true;
  },

  async LayThongTinPhim(req) {
    const maPhim = Number(req.query.MaPhim || req.query.maPhim);
    const item = await prisma.phim.findUnique({ where: { ma_phim: maPhim } });
    if (!item || item.is_deleted) throw new NotfoundException("Phim không tồn tại");
    return mapPhim(item);
  },
};
