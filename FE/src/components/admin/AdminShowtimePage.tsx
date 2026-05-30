import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, ArrowLeft, Plus, CheckCircle2, XCircle, Loader2, Film, Calendar, MapPin, Ticket, Image as ImageIcon, FileText, Star, Link as LinkIcon, ToggleLeft, ToggleRight, Trash2 } from "lucide-react";
import { quanLyPhimApi, quanLyRapApi, quanLyDatVeApi } from "@/lib/cinema-api";
import { api } from "@/lib/api-client";
import { AdminUsersTab } from "./AdminUsersTab";
import type { Phim } from "@/lib/cinema-api";

type Room = { maRap: number; tenRap: string; tenCumRap: string; tenHeThong: string };
type CurrentUser = { hoTen: string; email: string; maLoaiNguoiDung?: string };

function getCurrentUser(): CurrentUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem("currentUser");
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

// Convert YYYY-MM-DDTHH:mm to ISO for API
function formatToApiDateTime(dateLocalStr: string) {
  if (!dateLocalStr) return "";
  return new Date(dateLocalStr).toISOString();
}

// Convert YYYY-MM-DD to ISO for API
function formatToApiDate(dateStr: string) {
  if (!dateStr) return "";
  return new Date(dateStr).toISOString();
}

export function AdminShowtimePage() {
  const navigate = useNavigate();
  const user = useMemo(() => getCurrentUser(), []);
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Phim[]>([]);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ type: "ok" | "err"; msg: string } | null>(null);
  
  const [activeTab, setActiveTab] = useState<"showtime" | "movie" | "delete" | "updateMovie" | "updateShowtime" | "users">("showtime");

  // State for Showtime
  const [maPhim, setMaPhim] = useState("");
  const [maRap, setMaRap] = useState("");
  const [ngayGio, setNgayGio] = useState("");
  const [giaVe, setGiaVe] = useState("");
  const [maLichChieuUpdate, setMaLichChieuUpdate] = useState("");

  // State for Movie
  const [tenPhim, setTenPhim] = useState("");
  const [trailer, setTrailer] = useState("");
  const [moTa, setMoTa] = useState("");
  const [ngayKhoiChieu, setNgayKhoiChieu] = useState("");
  const [danhGia, setDanhGia] = useState("10");
  const [hinhAnh, setHinhAnh] = useState<File | null>(null);
  const [dangChieu, setDangChieu] = useState(false);
  const [sapChieu, setSapChieu] = useState(true);
  const [hot, setHot] = useState(false);
  const [theLoai, setTheLoai] = useState<string[]>([]);
  
  const GENRES = ["Action", "Drama", "Sci-Fi", "Thriller", "Horror", "Comedy"];
  const handleGenreToggle = (g: string) => {
    setTheLoai(prev => prev.includes(g) ? prev.filter(x => x !== g) : [...prev, g]);
  };

  const isAdmin = user?.maLoaiNguoiDung === "QuanTri";

  const fetchMoviesAndRooms = async () => {
    try {
      const [moviesData, systems] = await Promise.all([
        quanLyPhimApi.layDanhSachPhim("GP00"),
        quanLyRapApi.layThongTinHeThongRap(),
      ]);
      setMovies(moviesData);

      const clusterLists = await Promise.all(
        systems.map(async (system) => ({
          system,
          clusters: await quanLyRapApi.layThongTinCumRapTheoHeThong(system.maHeThongRap),
        }))
      );

      const flat: Room[] = [];
      for (const entry of clusterLists) {
        for (const cum of entry.clusters ?? []) {
          for (const rap of cum.danhSachRap ?? []) {
            flat.push({
              maRap: rap.maRap,
              tenRap: rap.tenRap,
              tenCumRap: cum.tenCumRap,
              tenHeThong: entry.system.tenHeThongRap,
            });
          }
        }
      }
      setRooms(flat);
    } catch {
      setResult({ type: "err", msg: "Không thể tải dữ liệu" });
    }
  };

  useEffect(() => {
    if (!user) {
      navigate({ to: "/login" });
      return;
    }
    if (!isAdmin) {
      setLoading(false);
      return;
    }

    fetchMoviesAndRooms().finally(() => setLoading(false));
  }, [user, isAdmin, navigate]);

  const handleShowtimeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult(null);
    setSubmitting(true);
    try {
      await quanLyDatVeApi.taoLichChieu({
        maPhim: Number(maPhim),
        maRap: Number(maRap),
        ngayChieuGioChieu: formatToApiDateTime(ngayGio),
        giaVe: Number(giaVe),
      });
      setResult({ type: "ok", msg: "Tạo lịch chiếu thành công!" });
      setMaPhim("");
      setMaRap("");
      setNgayGio("");
      setGiaVe("");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Tạo lịch chiếu thất bại";
      setResult({ type: "err", msg });
    } finally {
      setSubmitting(false);
    }
  };

  const handleMovieSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult(null);
    setSubmitting(true);
    try {
      if (!hinhAnh) throw new Error("Vui lòng chọn hình ảnh phim");
      
      const formData = new FormData();
      formData.append("tenPhim", tenPhim);
      formData.append("trailer", trailer);
      formData.append("moTa", moTa);
      formData.append("maNhom", "GP00");
      formData.append("ngayKhoiChieu", formatToApiDate(ngayKhoiChieu));
      formData.append("danhGia", danhGia);
      formData.append("dangChieu", dangChieu.toString());
      formData.append("sapChieu", sapChieu.toString());
      formData.append("hot", hot.toString());
      formData.append("theLoai", theLoai.join(","));
      formData.append("File", hinhAnh);

      await quanLyPhimApi.themPhimUploadHinh(formData);
      setResult({ type: "ok", msg: "Thêm phim mới thành công!" });
      
      // Refresh movies list
      await fetchMoviesAndRooms();
      
      // Reset form
      setTenPhim("");
      setTrailer("");
      setMoTa("");
      setNgayKhoiChieu("");
      setHinhAnh(null);
      setDanhGia("10");
      setTheLoai([]);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Thêm phim thất bại";
      setResult({ type: "err", msg });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteMovie = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!maPhim) return;
    setSubmitting(true);
    setResult(null);
    try {
      await api.delete("/QuanLyPhim/XoaPhim", { params: { MaPhim: maPhim } });
      setResult({ type: "ok", msg: "Xóa phim thành công (Soft delete)!" });
      setMaPhim("");
      await fetchMoviesAndRooms();
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Xóa phim thất bại";
      setResult({ type: "err", msg });
    } finally {
      setSubmitting(false);
    }
  };

  const handleSelectMovieToUpdate = (id: string) => {
    setMaPhim(id);
    const movie = movies.find(m => m.maPhim.toString() === id);
    if (movie) {
      setTenPhim(movie.tenPhim);
      setTrailer(movie.trailer);
      setMoTa(movie.moTa);
      setNgayKhoiChieu(movie.ngayKhoiChieu.substring(0, 10)); // simple yyyy-mm-dd
      setDanhGia(movie.danhGia.toString());
      setDangChieu(movie.dangChieu);
      setSapChieu(movie.sapChieu);
      setHot(movie.hot);
      setTheLoai(movie.theLoai ? movie.theLoai.split(",") : []);
    }
  };

  const handleUpdateMovieSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!maPhim) return;
    setResult(null);
    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("maPhim", maPhim);
      formData.append("tenPhim", tenPhim);
      formData.append("trailer", trailer);
      formData.append("moTa", moTa);
      formData.append("maNhom", "GP00");
      formData.append("ngayKhoiChieu", formatToApiDate(ngayKhoiChieu));
      formData.append("danhGia", danhGia);
      formData.append("dangChieu", dangChieu.toString());
      formData.append("sapChieu", sapChieu.toString());
      formData.append("hot", hot.toString());
      formData.append("theLoai", theLoai.join(","));
      if (hinhAnh) formData.append("File", hinhAnh);

      await quanLyPhimApi.capNhatPhimUpload(formData);
      setResult({ type: "ok", msg: "Cập nhật phim thành công!" });
      await fetchMoviesAndRooms();
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Cập nhật phim thất bại";
      setResult({ type: "err", msg });
    } finally {
      setSubmitting(false);
    }
  };

  const handleUpdateShowtimeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!maLichChieuUpdate) return;
    setResult(null);
    setSubmitting(true);
    try {
      await quanLyDatVeApi.capNhatLichChieu({
        maLichChieu: Number(maLichChieuUpdate),
        maPhim: maPhim ? Number(maPhim) : undefined,
        maRap: maRap ? Number(maRap) : undefined,
        ngayChieuGioChieu: ngayGio ? formatToApiDateTime(ngayGio) : undefined,
        giaVe: giaVe ? Number(giaVe) : undefined,
      });
      setResult({ type: "ok", msg: "Cập nhật lịch chiếu thành công!" });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Cập nhật lịch chiếu thất bại";
      setResult({ type: "err", msg });
    } finally {
      setSubmitting(false);
    }
  };

  if (!user) return null;

  if (!isAdmin) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center px-4">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md text-center">
          <Shield size={48} className="mx-auto text-accent-blood/60" />
          <h1 className="mt-6 font-display text-3xl tracking-wider text-text-primary">ACCESS DENIED</h1>
          <p className="mt-3 text-sm text-text-muted">Bạn không có quyền truy cập trang quản trị. Liên hệ admin để được cấp quyền.</p>
          <button onClick={() => navigate({ to: "/" })} className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent-blood px-5 py-2.5 font-display text-xs tracking-[0.2em] text-white">
            <ArrowLeft size={14} /> VỀ TRANG CHỦ
          </button>
        </motion.div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-accent-blood" />
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] px-4 py-24 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <button onClick={() => navigate({ to: "/" })} className="mb-6 inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary">
          <ArrowLeft size={14} /> Về trang chủ
        </button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="font-display text-xs tracking-[0.4em] text-accent-blood">/// QUẢN TRỊ</div>
            <h1 className="mt-2 font-display text-3xl sm:text-4xl text-text-primary">HỆ THỐNG</h1>
          </div>
          
          <div className="flex rounded-lg bg-black/40 p-1 border border-white/10">
            <button
              onClick={() => { setActiveTab("showtime"); setResult(null); }}
              className={`px-4 py-2 rounded-md font-display text-[11px] tracking-widest transition ${activeTab === "showtime" ? "bg-accent-blood text-white shadow-lg" : "text-text-muted hover:text-white"}`}
            >
              TẠO LỊCH CHIẾU
            </button>
            <button
              onClick={() => { setActiveTab("movie"); setResult(null); }}
              className={`px-4 py-2 rounded-md font-display text-[11px] tracking-widest transition ${activeTab === "movie" ? "bg-accent-blood text-white shadow-lg" : "text-text-muted hover:text-white"}`}
            >
              TẠO PHIM
            </button>
            <button
              onClick={() => { setActiveTab("delete"); setResult(null); setMaPhim(""); }}
              className={`px-4 py-2 rounded-md font-display text-[11px] tracking-widest transition ${activeTab === "delete" ? "bg-accent-blood text-white shadow-lg" : "text-text-muted hover:text-white"}`}
            >
              XÓA PHIM
            </button>
            <button
              onClick={() => { setActiveTab("updateMovie"); setResult(null); setMaPhim(""); }}
              className={`px-4 py-2 rounded-md font-display text-[11px] tracking-widest transition ${activeTab === "updateMovie" ? "bg-accent-blood text-white shadow-lg" : "text-text-muted hover:text-white"}`}
            >
              SỬA PHIM
            </button>
            <button
              onClick={() => { setActiveTab("updateShowtime"); setResult(null); setMaLichChieuUpdate(""); }}
              className={`px-4 py-2 rounded-md font-display text-[11px] tracking-widest transition ${activeTab === "updateShowtime" ? "bg-accent-blood text-white shadow-lg" : "text-text-muted hover:text-white"}`}
            >
              SỬA LỊCH CHIẾU
            </button>
            <button
              onClick={() => { setActiveTab("users"); setResult(null); }}
              className={`px-4 py-2 rounded-md font-display text-[11px] tracking-widest transition ${activeTab === "users" ? "bg-accent-blood text-white shadow-lg" : "text-text-muted hover:text-white"}`}
            >
              NGƯỜI DÙNG
            </button>
          </div>
        </motion.div>

        <div className="mt-10">
          <AnimatePresence mode="wait">
            {activeTab === "showtime" ? (
              <motion.form
                key="showtime"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={handleShowtimeSubmit}
                className="space-y-6 rounded-2xl border border-white/10 bg-black/30 p-6 md:p-8"
              >
                <div>
                  <label className="mb-2 flex items-center gap-2 font-display text-[10px] tracking-[0.3em] text-text-muted"><Film size={12} /> PHIM</label>
                  <select value={maPhim} onChange={(e) => setMaPhim(e.target.value)} required className="w-full rounded-lg border border-white/10 bg-bg-surface/70 px-3 py-2.5 text-sm text-text-primary outline-none focus:border-accent-blood focus:ring-2 focus:ring-accent-blood/30">
                    <option value="">-- Chọn phim --</option>
                    {movies.map((m) => (<option key={m.maPhim} value={m.maPhim}>{m.tenPhim} (ID: {m.maPhim})</option>))}
                  </select>
                </div>
                <div>
                  <label className="mb-2 flex items-center gap-2 font-display text-[10px] tracking-[0.3em] text-text-muted"><MapPin size={12} /> PHÒNG CHIẾU</label>
                  <select value={maRap} onChange={(e) => setMaRap(e.target.value)} required className="w-full rounded-lg border border-white/10 bg-bg-surface/70 px-3 py-2.5 text-sm text-text-primary outline-none focus:border-accent-blood focus:ring-2 focus:ring-accent-blood/30">
                    <option value="">-- Chọn phòng --</option>
                    {rooms.map((r) => (<option key={r.maRap} value={r.maRap}>{r.tenRap} — {r.tenCumRap} ({r.tenHeThong}) [ID: {r.maRap}]</option>))}
                  </select>
                </div>
                <div>
                  <label className="mb-2 flex items-center gap-2 font-display text-[10px] tracking-[0.3em] text-text-muted"><Calendar size={12} /> NGÀY GIỜ CHIẾU</label>
                  <input type="datetime-local" value={ngayGio} onChange={(e) => setNgayGio(e.target.value)} required className="w-full rounded-lg border border-white/10 bg-bg-surface/70 px-3 py-2.5 text-sm text-text-primary outline-none focus:border-accent-blood focus:ring-2 focus:ring-accent-blood/30" />
                </div>
                <div>
                  <label className="mb-2 flex items-center gap-2 font-display text-[10px] tracking-[0.3em] text-text-muted"><Ticket size={12} /> GIÁ VÉ (VNĐ)</label>
                  <input type="number" value={giaVe} onChange={(e) => setGiaVe(e.target.value)} placeholder="75000" required min="10000" step="5000" className="w-full rounded-lg border border-white/10 bg-bg-surface/70 px-3 py-2.5 text-sm text-text-primary outline-none focus:border-accent-blood focus:ring-2 focus:ring-accent-blood/30" />
                </div>
                {result && (
                  <div className={`flex items-center gap-2 rounded-lg px-4 py-3 text-sm ${result.type === "ok" ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400" : "border border-accent-blood/30 bg-accent-blood/10 text-accent-blood"}`}>
                    {result.type === "ok" ? <CheckCircle2 size={16} /> : <XCircle size={16} />} {result.msg}
                  </div>
                )}
                <button type="submit" disabled={submitting} className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent-blood px-5 py-3 font-display text-xs tracking-[0.25em] text-white shadow-[0_0_24px_rgba(229,9,20,0.55)] transition active:scale-95 disabled:opacity-50">
                  {submitting ? <Loader2 size={16} className="animate-spin" /> : <Plus size={16} />}
                  {submitting ? "ĐANG TẠO..." : "TẠO LỊCH CHIẾU"}
                </button>
              </motion.form>
            ) : activeTab === "movie" ? (
              <motion.form
                key="movie"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={handleMovieSubmit}
                className="space-y-6 rounded-2xl border border-white/10 bg-black/30 p-6 md:p-8"
              >
                <div>
                  <label className="mb-2 flex items-center gap-2 font-display text-[10px] tracking-[0.3em] text-text-muted"><Film size={12} /> TÊN PHIM</label>
                  <input type="text" value={tenPhim} onChange={(e) => setTenPhim(e.target.value)} required placeholder="VD: Avengers: Endgame" className="w-full rounded-lg border border-white/10 bg-bg-surface/70 px-3 py-2.5 text-sm text-text-primary outline-none focus:border-accent-blood focus:ring-2 focus:ring-accent-blood/30" />
                </div>
                
                <div>
                  <label className="mb-2 flex items-center gap-2 font-display text-[10px] tracking-[0.3em] text-text-muted"><ImageIcon size={12} /> HÌNH ẢNH (POSTER)</label>
                  <input type="file" accept="image/png, image/jpeg, image/jpg, image/gif" onChange={(e) => setHinhAnh(e.target.files?.[0] || null)} required className="w-full rounded-lg border border-white/10 bg-bg-surface/70 px-3 py-2.5 text-sm text-text-primary outline-none focus:border-accent-blood focus:ring-2 focus:ring-accent-blood/30 file:mr-4 file:rounded-md file:border-0 file:bg-white/10 file:px-4 file:py-1 file:text-sm file:font-semibold file:text-white hover:file:bg-white/20" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="mb-2 flex items-center gap-2 font-display text-[10px] tracking-[0.3em] text-text-muted"><Calendar size={12} /> NGÀY KHỞI CHIẾU</label>
                    <input type="date" value={ngayKhoiChieu} onChange={(e) => setNgayKhoiChieu(e.target.value)} required className="w-full rounded-lg border border-white/10 bg-bg-surface/70 px-3 py-2.5 text-sm text-text-primary outline-none focus:border-accent-blood focus:ring-2 focus:ring-accent-blood/30" />
                  </div>
                  <div>
                    <label className="mb-2 flex items-center gap-2 font-display text-[10px] tracking-[0.3em] text-text-muted"><Star size={12} /> ĐÁNH GIÁ (1-10)</label>
                    <input type="number" min="1" max="10" value={danhGia} onChange={(e) => setDanhGia(e.target.value)} required className="w-full rounded-lg border border-white/10 bg-bg-surface/70 px-3 py-2.5 text-sm text-text-primary outline-none focus:border-accent-blood focus:ring-2 focus:ring-accent-blood/30" />
                  </div>
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 font-display text-[10px] tracking-[0.3em] text-text-muted"><LinkIcon size={12} /> TRAILER URL</label>
                  <input type="url" value={trailer} onChange={(e) => setTrailer(e.target.value)} required placeholder="VD: https://www.youtube.com/watch?v=..." className="w-full rounded-lg border border-white/10 bg-bg-surface/70 px-3 py-2.5 text-sm text-text-primary outline-none focus:border-accent-blood focus:ring-2 focus:ring-accent-blood/30" />
                </div>
                
                <div className="space-y-3">
                  <label className="flex items-center gap-2 font-display text-[10px] tracking-[0.3em] text-text-muted"><Film size={12} /> PHÂN LOẠI (GENRE)</label>
                  <div className="flex flex-wrap gap-2">
                    {GENRES.map(g => (
                      <button
                        key={g}
                        type="button"
                        onClick={() => handleGenreToggle(g)}
                        className={`rounded-full px-4 py-1.5 text-xs font-display tracking-widest transition border ${
                          theLoai.includes(g) 
                            ? "border-accent-blood bg-accent-blood/20 text-accent-blood" 
                            : "border-white/10 bg-white/5 text-text-muted hover:border-white/20 hover:text-white"
                        }`}
                      >
                        {g.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 font-display text-[10px] tracking-[0.3em] text-text-muted"><FileText size={12} /> MÔ TẢ</label>
                  <textarea value={moTa} onChange={(e) => setMoTa(e.target.value)} required rows={4} className="w-full rounded-lg border border-white/10 bg-bg-surface/70 px-3 py-2.5 text-sm text-text-primary outline-none focus:border-accent-blood focus:ring-2 focus:ring-accent-blood/30" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-white/10 pt-6">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <button type="button" onClick={() => {
                      setDangChieu(!dangChieu);
                      if (!dangChieu) setSapChieu(false);
                    }} className="text-accent-blood transition hover:scale-110">
                      {dangChieu ? <ToggleRight size={28} /> : <ToggleLeft size={28} className="text-text-muted" />}
                    </button>
                    <span className="font-display text-[11px] tracking-widest text-text-primary">ĐANG CHIẾU</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <button type="button" onClick={() => {
                      setSapChieu(!sapChieu);
                      if (!sapChieu) setDangChieu(false);
                    }} className="text-accent-blood transition hover:scale-110">
                      {sapChieu ? <ToggleRight size={28} /> : <ToggleLeft size={28} className="text-text-muted" />}
                    </button>
                    <span className="font-display text-[11px] tracking-widest text-text-primary">SẮP CHIẾU</span>
                  </label>
                </div>

                {result && (
                  <div className={`flex items-center gap-2 rounded-lg px-4 py-3 text-sm ${result.type === "ok" ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400" : "border border-accent-blood/30 bg-accent-blood/10 text-accent-blood"}`}>
                    {result.type === "ok" ? <CheckCircle2 size={16} /> : <XCircle size={16} />} {result.msg}
                  </div>
                )}
                <button type="submit" disabled={submitting} className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent-blood px-5 py-3 font-display text-xs tracking-[0.25em] text-white shadow-[0_0_24px_rgba(229,9,20,0.55)] transition active:scale-95 disabled:opacity-50">
                  {submitting ? <Loader2 size={16} className="animate-spin" /> : <Plus size={16} />}
                  {submitting ? "ĐANG TẠO..." : "TẠO PHIM MỚI"}
                </button>
              </motion.form>
            ) : activeTab === "delete" ? (
              <motion.form
                key="delete"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={handleDeleteMovie}
                className="space-y-6 rounded-2xl border border-white/10 bg-black/30 p-6 md:p-8"
              >
                <div>
                  <label className="mb-2 flex items-center gap-2 font-display text-[10px] tracking-[0.3em] text-text-muted"><Film size={12} /> PHIM CẦN XÓA</label>
                  <select value={maPhim} onChange={(e) => setMaPhim(e.target.value)} required className="w-full rounded-lg border border-white/10 bg-bg-surface/70 px-3 py-2.5 text-sm text-text-primary outline-none focus:border-accent-blood focus:ring-2 focus:ring-accent-blood/30">
                    <option value="">-- Chọn phim --</option>
                    {movies.map((m) => (<option key={m.maPhim} value={m.maPhim}>{m.tenPhim} (ID: {m.maPhim})</option>))}
                  </select>
                  <p className="mt-2 text-[11px] text-text-muted">Khi xóa phim, phim sẽ không còn hiển thị trên trang chủ (IsDeleted = true).</p>
                </div>
                
                {result && (
                  <div className={`flex items-center gap-2 rounded-lg px-4 py-3 text-sm ${result.type === "ok" ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400" : "border border-accent-blood/30 bg-accent-blood/10 text-accent-blood"}`}>
                    {result.type === "ok" ? <CheckCircle2 size={16} /> : <XCircle size={16} />} {result.msg}
                  </div>
                )}
                
                <button type="submit" disabled={submitting || !maPhim} className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent-blood px-5 py-3 font-display text-xs tracking-[0.25em] text-white shadow-[0_0_24px_rgba(229,9,20,0.55)] transition active:scale-95 disabled:opacity-50">
                  {submitting ? <Loader2 size={16} className="animate-spin" /> : <Trash2 size={16} />}
                  {submitting ? "ĐANG XÓA..." : "XÓA PHIM"}
                </button>
              </motion.form>
            ) : activeTab === "updateMovie" ? (
              <motion.form
                key="updateMovie"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={handleUpdateMovieSubmit}
                className="space-y-6 rounded-2xl border border-white/10 bg-black/30 p-6 md:p-8"
              >
                <div>
                  <label className="mb-2 flex items-center gap-2 font-display text-[10px] tracking-[0.3em] text-text-muted"><Film size={12} /> CHỌN PHIM CẦN SỬA</label>
                  <select value={maPhim} onChange={(e) => handleSelectMovieToUpdate(e.target.value)} required className="w-full rounded-lg border border-white/10 bg-bg-surface/70 px-3 py-2.5 text-sm text-text-primary outline-none focus:border-accent-blood focus:ring-2 focus:ring-accent-blood/30">
                    <option value="">-- Chọn phim --</option>
                    {movies.map((m) => (<option key={m.maPhim} value={m.maPhim}>{m.tenPhim} (ID: {m.maPhim})</option>))}
                  </select>
                </div>
                
                <div>
                  <label className="mb-2 flex items-center gap-2 font-display text-[10px] tracking-[0.3em] text-text-muted"><Film size={12} /> TÊN PHIM</label>
                  <input type="text" value={tenPhim} onChange={(e) => setTenPhim(e.target.value)} placeholder="VD: Avengers: Endgame" className="w-full rounded-lg border border-white/10 bg-bg-surface/70 px-3 py-2.5 text-sm text-text-primary outline-none focus:border-accent-blood focus:ring-2 focus:ring-accent-blood/30" />
                </div>
                
                <div>
                  <label className="mb-2 flex items-center gap-2 font-display text-[10px] tracking-[0.3em] text-text-muted"><ImageIcon size={12} /> HÌNH ẢNH MỚI (BỎ TRỐNG NẾU GIỮ NGUYÊN)</label>
                  <input type="file" accept="image/png, image/jpeg, image/jpg, image/gif" onChange={(e) => setHinhAnh(e.target.files?.[0] || null)} className="w-full rounded-lg border border-white/10 bg-bg-surface/70 px-3 py-2.5 text-sm text-text-primary outline-none focus:border-accent-blood focus:ring-2 focus:ring-accent-blood/30 file:mr-4 file:rounded-md file:border-0 file:bg-white/10 file:px-4 file:py-1 file:text-sm file:font-semibold file:text-white hover:file:bg-white/20" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="mb-2 flex items-center gap-2 font-display text-[10px] tracking-[0.3em] text-text-muted"><Calendar size={12} /> NGÀY KHỞI CHIẾU</label>
                    <input type="date" value={ngayKhoiChieu} onChange={(e) => setNgayKhoiChieu(e.target.value)} className="w-full rounded-lg border border-white/10 bg-bg-surface/70 px-3 py-2.5 text-sm text-text-primary outline-none focus:border-accent-blood focus:ring-2 focus:ring-accent-blood/30" />
                  </div>
                  <div>
                    <label className="mb-2 flex items-center gap-2 font-display text-[10px] tracking-[0.3em] text-text-muted"><Star size={12} /> ĐÁNH GIÁ (1-10)</label>
                    <input type="number" min="1" max="10" value={danhGia} onChange={(e) => setDanhGia(e.target.value)} className="w-full rounded-lg border border-white/10 bg-bg-surface/70 px-3 py-2.5 text-sm text-text-primary outline-none focus:border-accent-blood focus:ring-2 focus:ring-accent-blood/30" />
                  </div>
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 font-display text-[10px] tracking-[0.3em] text-text-muted"><LinkIcon size={12} /> TRAILER URL</label>
                  <input type="url" value={trailer} onChange={(e) => setTrailer(e.target.value)} placeholder="VD: https://www.youtube.com/watch?v=..." className="w-full rounded-lg border border-white/10 bg-bg-surface/70 px-3 py-2.5 text-sm text-text-primary outline-none focus:border-accent-blood focus:ring-2 focus:ring-accent-blood/30" />
                </div>
                
                <div className="space-y-3">
                  <label className="flex items-center gap-2 font-display text-[10px] tracking-[0.3em] text-text-muted"><Film size={12} /> PHÂN LOẠI (GENRE)</label>
                  <div className="flex flex-wrap gap-2">
                    {GENRES.map(g => (
                      <button
                        key={g}
                        type="button"
                        onClick={() => handleGenreToggle(g)}
                        className={`rounded-full px-4 py-1.5 text-xs font-display tracking-widest transition border ${
                          theLoai.includes(g) 
                            ? "border-accent-blood bg-accent-blood/20 text-accent-blood" 
                            : "border-white/10 bg-white/5 text-text-muted hover:border-white/20 hover:text-white"
                        }`}
                      >
                        {g.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 font-display text-[10px] tracking-[0.3em] text-text-muted"><FileText size={12} /> MÔ TẢ</label>
                  <textarea value={moTa} onChange={(e) => setMoTa(e.target.value)} rows={4} className="w-full rounded-lg border border-white/10 bg-bg-surface/70 px-3 py-2.5 text-sm text-text-primary outline-none focus:border-accent-blood focus:ring-2 focus:ring-accent-blood/30" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-white/10 pt-6">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <button type="button" onClick={() => {
                      setDangChieu(!dangChieu);
                      if (!dangChieu) setSapChieu(false);
                    }} className="text-accent-blood transition hover:scale-110">
                      {dangChieu ? <ToggleRight size={28} /> : <ToggleLeft size={28} className="text-text-muted" />}
                    </button>
                    <span className="font-display text-[11px] tracking-widest text-text-primary">ĐANG CHIẾU</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <button type="button" onClick={() => {
                      setSapChieu(!sapChieu);
                      if (!sapChieu) setDangChieu(false);
                    }} className="text-accent-blood transition hover:scale-110">
                      {sapChieu ? <ToggleRight size={28} /> : <ToggleLeft size={28} className="text-text-muted" />}
                    </button>
                    <span className="font-display text-[11px] tracking-widest text-text-primary">SẮP CHIẾU</span>
                  </label>
                </div>

                {result && (
                  <div className={`flex items-center gap-2 rounded-lg px-4 py-3 text-sm ${result.type === "ok" ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400" : "border border-accent-blood/30 bg-accent-blood/10 text-accent-blood"}`}>
                    {result.type === "ok" ? <CheckCircle2 size={16} /> : <XCircle size={16} />} {result.msg}
                  </div>
                )}
                <button type="submit" disabled={submitting || !maPhim} className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent-blood px-5 py-3 font-display text-xs tracking-[0.25em] text-white shadow-[0_0_24px_rgba(229,9,20,0.55)] transition active:scale-95 disabled:opacity-50">
                  {submitting ? <Loader2 size={16} className="animate-spin" /> : <CheckCircle2 size={16} />}
                  {submitting ? "ĐANG LƯU..." : "CẬP NHẬT PHIM"}
                </button>
              </motion.form>
            ) : activeTab === "updateShowtime" ? (
              <motion.form
                key="updateShowtime"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={handleUpdateShowtimeSubmit}
                className="space-y-6 rounded-2xl border border-white/10 bg-black/30 p-6 md:p-8"
              >
                <div>
                  <label className="mb-2 flex items-center gap-2 font-display text-[10px] tracking-[0.3em] text-text-muted"><Calendar size={12} /> MÃ LỊCH CHIẾU CẦN SỬA</label>
                  <input type="number" value={maLichChieuUpdate} onChange={(e) => setMaLichChieuUpdate(e.target.value)} required placeholder="VD: 1" className="w-full rounded-lg border border-white/10 bg-bg-surface/70 px-3 py-2.5 text-sm text-text-primary outline-none focus:border-accent-blood focus:ring-2 focus:ring-accent-blood/30" />
                </div>
                <div>
                  <label className="mb-2 flex items-center gap-2 font-display text-[10px] tracking-[0.3em] text-text-muted"><Film size={12} /> PHIM (BỎ TRỐNG NẾU GIỮ NGUYÊN)</label>
                  <select value={maPhim} onChange={(e) => setMaPhim(e.target.value)} className="w-full rounded-lg border border-white/10 bg-bg-surface/70 px-3 py-2.5 text-sm text-text-primary outline-none focus:border-accent-blood focus:ring-2 focus:ring-accent-blood/30">
                    <option value="">-- Giữ nguyên phim --</option>
                    {movies.map((m) => (<option key={m.maPhim} value={m.maPhim}>{m.tenPhim} (ID: {m.maPhim})</option>))}
                  </select>
                </div>
                <div>
                  <label className="mb-2 flex items-center gap-2 font-display text-[10px] tracking-[0.3em] text-text-muted"><MapPin size={12} /> PHÒNG CHIẾU (BỎ TRỐNG NẾU GIỮ NGUYÊN)</label>
                  <select value={maRap} onChange={(e) => setMaRap(e.target.value)} className="w-full rounded-lg border border-white/10 bg-bg-surface/70 px-3 py-2.5 text-sm text-text-primary outline-none focus:border-accent-blood focus:ring-2 focus:ring-accent-blood/30">
                    <option value="">-- Giữ nguyên phòng --</option>
                    {rooms.map((r) => (<option key={r.maRap} value={r.maRap}>{r.tenRap} — {r.tenCumRap} ({r.tenHeThong}) [ID: {r.maRap}]</option>))}
                  </select>
                </div>
                <div>
                  <label className="mb-2 flex items-center gap-2 font-display text-[10px] tracking-[0.3em] text-text-muted"><Calendar size={12} /> NGÀY GIỜ CHIẾU MỚI (BỎ TRỐNG NẾU GIỮ NGUYÊN)</label>
                  <input type="datetime-local" value={ngayGio} onChange={(e) => setNgayGio(e.target.value)} className="w-full rounded-lg border border-white/10 bg-bg-surface/70 px-3 py-2.5 text-sm text-text-primary outline-none focus:border-accent-blood focus:ring-2 focus:ring-accent-blood/30" />
                </div>
                <div>
                  <label className="mb-2 flex items-center gap-2 font-display text-[10px] tracking-[0.3em] text-text-muted"><Ticket size={12} /> GIÁ VÉ MỚI (VNĐ) (BỎ TRỐNG NẾU GIỮ NGUYÊN)</label>
                  <input type="number" value={giaVe} onChange={(e) => setGiaVe(e.target.value)} placeholder="VD: 75000" min="10000" step="5000" className="w-full rounded-lg border border-white/10 bg-bg-surface/70 px-3 py-2.5 text-sm text-text-primary outline-none focus:border-accent-blood focus:ring-2 focus:ring-accent-blood/30" />
                </div>
                {result && (
                  <div className={`flex items-center gap-2 rounded-lg px-4 py-3 text-sm ${result.type === "ok" ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400" : "border border-accent-blood/30 bg-accent-blood/10 text-accent-blood"}`}>
                    {result.type === "ok" ? <CheckCircle2 size={16} /> : <XCircle size={16} />} {result.msg}
                  </div>
                )}
                <button type="submit" disabled={submitting || !maLichChieuUpdate} className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent-blood px-5 py-3 font-display text-xs tracking-[0.25em] text-white shadow-[0_0_24px_rgba(229,9,20,0.55)] transition active:scale-95 disabled:opacity-50">
                  {submitting ? <Loader2 size={16} className="animate-spin" /> : <CheckCircle2 size={16} />}
                  {submitting ? "ĐANG LƯU..." : "CẬP NHẬT LỊCH CHIẾU"}
                </button>
              </motion.form>
            ) : activeTab === "users" ? (
              <AdminUsersTab key="users" />
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
