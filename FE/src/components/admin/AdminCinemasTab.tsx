import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, XCircle, Plus, Building2, MapPin, MonitorPlay, Link as LinkIcon } from "lucide-react";
import { quanLyRapApi, type HeThongRap, type CumRap } from "@/lib/cinema-api";

export function AdminCinemasTab() {
  const [systems, setSystems] = useState<HeThongRap[]>([]);
  const [clusters, setClusters] = useState<CumRap[]>([]);
  
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ type: "ok" | "err"; msg: string } | null>(null);

  // Form Hệ Thong Rap
  const [htMa, setHtMa] = useState("");
  const [htTen, setHtTen] = useState("");
  const [htLogo, setHtLogo] = useState("");

  // Form Cum Rap
  const [crMaHeThong, setCrMaHeThong] = useState("");
  const [crMaCum, setCrMaCum] = useState("");
  const [crTenCum, setCrTenCum] = useState("");
  const [crDiaChi, setCrDiaChi] = useState("");

  // Form Rap Phim
  const [rpMaHeThong, setRpMaHeThong] = useState("");
  const [rpMaCum, setRpMaCum] = useState("");
  const [rpTenRap, setRpTenRap] = useState("");

  useEffect(() => {
    quanLyRapApi.layThongTinHeThongRap().then(setSystems).catch(console.error);
  }, []);

  useEffect(() => {
    if (rpMaHeThong) {
      quanLyRapApi.layThongTinCumRapTheoHeThong(rpMaHeThong).then(setClusters).catch(console.error);
    } else {
      setClusters([]);
    }
  }, [rpMaHeThong]);

  const handleTaoHeThong = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      await quanLyRapApi.taoHeThongRap({
        maHeThongRap: htMa,
        tenHeThongRap: htTen,
        logo: htLogo
      });
      setResult({ type: "ok", msg: "Tạo Hệ thống rạp thành công!" });
      setHtMa(""); setHtTen(""); setHtLogo("");
      // Refresh list
      quanLyRapApi.layThongTinHeThongRap().then(setSystems);
    } catch (err) {
      setResult({ type: "err", msg: err instanceof Error ? err.message : "Có lỗi xảy ra" });
    } finally {
      setLoading(false);
    }
  };

  const handleTaoCum = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      await quanLyRapApi.taoCumRap({
        maHeThongRap: crMaHeThong,
        maCumRap: crMaCum,
        tenCumRap: crTenCum,
        diaChi: crDiaChi
      });
      setResult({ type: "ok", msg: "Tạo Cụm rạp thành công!" });
      setCrMaCum(""); setCrTenCum(""); setCrDiaChi("");
    } catch (err) {
      setResult({ type: "err", msg: err instanceof Error ? err.message : "Có lỗi xảy ra" });
    } finally {
      setLoading(false);
    }
  };

  const handleTaoRap = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      await quanLyRapApi.taoRapPhim({
        maCumRap: rpMaCum,
        tenRap: rpTenRap
      });
      setResult({ type: "ok", msg: "Tạo Phòng chiếu thành công!" });
      setRpTenRap("");
    } catch (err) {
      setResult({ type: "err", msg: err instanceof Error ? err.message : "Có lỗi xảy ra" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="space-y-8"
    >
      {result && (
        <div className={`flex items-center gap-2 rounded-lg px-4 py-3 text-sm ${result.type === "ok" ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400" : "border border-accent-blood/30 bg-accent-blood/10 text-accent-blood"}`}>
          {result.type === "ok" ? <CheckCircle2 size={16} /> : <XCircle size={16} />} {result.msg}
        </div>
      )}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Form Tạo Hệ Thống */}
        <form onSubmit={handleTaoHeThong} className="space-y-4 rounded-2xl border border-white/10 bg-black/30 p-6">
          <h3 className="flex items-center gap-2 font-display text-sm tracking-widest text-accent-ice mb-4"><Building2 size={16} /> THÊM HỆ THỐNG RẠP</h3>
          <div>
            <label className="mb-2 block font-display text-[10px] tracking-[0.3em] text-text-muted">MÃ HỆ THỐNG (VD: BHDStar)</label>
            <input type="text" value={htMa} onChange={(e) => setHtMa(e.target.value)} required className="w-full rounded-lg border border-white/10 bg-bg-surface/70 px-3 py-2 text-sm text-text-primary outline-none focus:border-accent-ice" />
          </div>
          <div>
            <label className="mb-2 block font-display text-[10px] tracking-[0.3em] text-text-muted">TÊN HỆ THỐNG (VD: BHD Star Cineplex)</label>
            <input type="text" value={htTen} onChange={(e) => setHtTen(e.target.value)} required className="w-full rounded-lg border border-white/10 bg-bg-surface/70 px-3 py-2 text-sm text-text-primary outline-none focus:border-accent-ice" />
          </div>
          <div>
            <label className="mb-2 flex items-center gap-2 font-display text-[10px] tracking-[0.3em] text-text-muted"><LinkIcon size={12} /> LOGO URL</label>
            <input type="url" value={htLogo} onChange={(e) => setHtLogo(e.target.value)} className="w-full rounded-lg border border-white/10 bg-bg-surface/70 px-3 py-2 text-sm text-text-primary outline-none focus:border-accent-ice" />
          </div>
          <button type="submit" disabled={loading} className="w-full rounded-lg border border-accent-ice bg-accent-ice/10 px-4 py-2 font-display text-xs tracking-widest text-accent-ice transition hover:bg-accent-ice/20 active:scale-95 disabled:opacity-50 mt-4 flex items-center justify-center gap-2">
            {loading ? <Loader2 size={14} className="animate-spin" /> : <Plus size={14} />} TẠO HỆ THỐNG
          </button>
        </form>

        {/* Form Tạo Cụm Rạp */}
        <form onSubmit={handleTaoCum} className="space-y-4 rounded-2xl border border-white/10 bg-black/30 p-6">
          <h3 className="flex items-center gap-2 font-display text-sm tracking-widest text-emerald-400 mb-4"><MapPin size={16} /> THÊM CỤM RẠP</h3>
          <div>
            <label className="mb-2 block font-display text-[10px] tracking-[0.3em] text-text-muted">CHỌN HỆ THỐNG</label>
            <select value={crMaHeThong} onChange={(e) => setCrMaHeThong(e.target.value)} required className="w-full rounded-lg border border-white/10 bg-bg-surface/70 px-3 py-2 text-sm text-text-primary outline-none focus:border-emerald-500">
              <option value="">-- Chọn --</option>
              {systems.map(s => <option key={s.maHeThongRap} value={s.maHeThongRap}>{s.tenHeThongRap}</option>)}
            </select>
          </div>
          <div>
            <label className="mb-2 block font-display text-[10px] tracking-[0.3em] text-text-muted">MÃ CỤM (VD: bhd-bitexco)</label>
            <input type="text" value={crMaCum} onChange={(e) => setCrMaCum(e.target.value)} required className="w-full rounded-lg border border-white/10 bg-bg-surface/70 px-3 py-2 text-sm text-text-primary outline-none focus:border-emerald-500" />
          </div>
          <div>
            <label className="mb-2 block font-display text-[10px] tracking-[0.3em] text-text-muted">TÊN CỤM (VD: BHD Star - Bitexco)</label>
            <input type="text" value={crTenCum} onChange={(e) => setCrTenCum(e.target.value)} required className="w-full rounded-lg border border-white/10 bg-bg-surface/70 px-3 py-2 text-sm text-text-primary outline-none focus:border-emerald-500" />
          </div>
          <div>
            <label className="mb-2 block font-display text-[10px] tracking-[0.3em] text-text-muted">ĐỊA CHỈ</label>
            <input type="text" value={crDiaChi} onChange={(e) => setCrDiaChi(e.target.value)} required className="w-full rounded-lg border border-white/10 bg-bg-surface/70 px-3 py-2 text-sm text-text-primary outline-none focus:border-emerald-500" />
          </div>
          <button type="submit" disabled={loading} className="w-full rounded-lg border border-emerald-500 bg-emerald-500/10 px-4 py-2 font-display text-xs tracking-widest text-emerald-400 transition hover:bg-emerald-500/20 active:scale-95 disabled:opacity-50 mt-4 flex items-center justify-center gap-2">
            {loading ? <Loader2 size={14} className="animate-spin" /> : <Plus size={14} />} TẠO CỤM RẠP
          </button>
        </form>

        {/* Form Tạo Phòng Chiếu */}
        <form onSubmit={handleTaoRap} className="space-y-4 rounded-2xl border border-white/10 bg-black/30 p-6">
          <h3 className="flex items-center gap-2 font-display text-sm tracking-widest text-accent-blood mb-4"><MonitorPlay size={16} /> THÊM PHÒNG CHIẾU</h3>
          <div>
            <label className="mb-2 block font-display text-[10px] tracking-[0.3em] text-text-muted">1. CHỌN HỆ THỐNG</label>
            <select value={rpMaHeThong} onChange={(e) => setRpMaHeThong(e.target.value)} required className="w-full rounded-lg border border-white/10 bg-bg-surface/70 px-3 py-2 text-sm text-text-primary outline-none focus:border-accent-blood">
              <option value="">-- Chọn --</option>
              {systems.map(s => <option key={s.maHeThongRap} value={s.maHeThongRap}>{s.tenHeThongRap}</option>)}
            </select>
          </div>
          <div>
            <label className="mb-2 block font-display text-[10px] tracking-[0.3em] text-text-muted">2. CHỌN CỤM RẠP</label>
            <select value={rpMaCum} onChange={(e) => setRpMaCum(e.target.value)} required disabled={!rpMaHeThong} className="w-full rounded-lg border border-white/10 bg-bg-surface/70 px-3 py-2 text-sm text-text-primary outline-none focus:border-accent-blood">
              <option value="">-- Chọn --</option>
              {clusters.map(c => <option key={c.maCumRap} value={c.maCumRap}>{c.tenCumRap}</option>)}
            </select>
          </div>
          <div>
            <label className="mb-2 block font-display text-[10px] tracking-[0.3em] text-text-muted">TÊN PHÒNG CHIẾU (VD: Rạp 1, Rạp IMAX)</label>
            <input type="text" value={rpTenRap} onChange={(e) => setRpTenRap(e.target.value)} required className="w-full rounded-lg border border-white/10 bg-bg-surface/70 px-3 py-2 text-sm text-text-primary outline-none focus:border-accent-blood" />
          </div>
          <button type="submit" disabled={loading} className="w-full rounded-lg border border-accent-blood bg-accent-blood/10 px-4 py-2 font-display text-xs tracking-widest text-accent-blood transition hover:bg-accent-blood/20 active:scale-95 disabled:opacity-50 mt-4 flex items-center justify-center gap-2">
            {loading ? <Loader2 size={14} className="animate-spin" /> : <Plus size={14} />} TẠO PHÒNG CHIẾU
          </button>
        </form>

      </div>
    </motion.div>
  );
}
