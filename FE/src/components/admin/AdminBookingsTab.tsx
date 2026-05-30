import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Loader2, Ticket, Search } from "lucide-react";
import { quanLyDatVeApi, type AdminTicket } from "@/lib/cinema-api";

const formatDateTime = (dateStr: string) => {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
};

export function AdminBookingsTab() {
  const [tickets, setTickets] = useState<AdminTicket[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let mounted = true;
    const fetchTickets = async () => {
      try {
        const data = await quanLyDatVeApi.layDanhSachTatCaVe();
        if (mounted) setTickets(data);
      } catch (err: any) {
        if (mounted) setError(err.message || "Lỗi tải danh sách vé");
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchTickets();
    return () => { mounted = false; };
  }, []);

  const filteredTickets = useMemo(() => {
    if (!searchTerm) return tickets;
    const lower = searchTerm.toLowerCase();
    return tickets.filter(t => 
      t.hoTen?.toLowerCase().includes(lower) ||
      t.email?.toLowerCase().includes(lower) ||
      t.taiKhoan?.toLowerCase().includes(lower) ||
      t.tenPhim?.toLowerCase().includes(lower)
    );
  }, [tickets, searchTerm]);

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-accent-blood" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl border border-blood/20 bg-blood/10 p-4 text-blood">
        {error}
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="font-display tracking-widest text-text-primary text-xl flex items-center gap-2">
          <Ticket className="text-accent-blood" size={24} /> 
          LỊCH SỬ ĐẶT VÉ TOÀN HỆ THỐNG
        </h2>
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" size={16} />
          <input
            type="text"
            placeholder="Tìm theo tên, email, tên phim..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full rounded-full border border-white/10 bg-bg-surface/50 py-2 pl-10 pr-4 text-sm text-text-primary outline-none focus:border-accent-blood focus:ring-1 focus:ring-accent-blood transition-all"
          />
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-white/10 bg-bg-surface/30 backdrop-blur-md">
        <table className="w-full text-left text-sm text-text-primary">
          <thead className="bg-black/40 font-display text-[10px] tracking-widest text-text-muted">
            <tr>
              <th className="whitespace-nowrap px-4 py-4 font-medium">MÃ VÉ</th>
              <th className="whitespace-nowrap px-4 py-4 font-medium">NGƯỜI DÙNG</th>
              <th className="whitespace-nowrap px-4 py-4 font-medium">THÔNG TIN PHIM</th>
              <th className="whitespace-nowrap px-4 py-4 font-medium">SUẤT CHIẾU</th>
              <th className="whitespace-nowrap px-4 py-4 font-medium">GHẾ</th>
              <th className="whitespace-nowrap px-4 py-4 font-medium">TỔNG TIỀN</th>
              <th className="whitespace-nowrap px-4 py-4 font-medium">NGÀY ĐẶT</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {filteredTickets.map((t) => (
              <tr key={t.id} className="transition-colors hover:bg-white/5">
                <td className="px-4 py-4 font-mono text-accent-blood">#{t.id}</td>
                <td className="px-4 py-4">
                  <div className="flex flex-col">
                    <span className="font-medium text-white">{t.hoTen}</span>
                    <span className="text-xs text-text-muted">{t.email}</span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex flex-col gap-1">
                    <span className="font-medium text-white">{t.tenPhim}</span>
                    <span className="text-[11px] text-text-muted">{t.tenRap}</span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span className="rounded bg-white/10 px-2 py-1 text-xs">{formatDateTime(t.ngayGioChieu)}</span>
                </td>
                <td className="px-4 py-4">
                  <span className="font-mono text-accent-orange font-bold">{t.tenGhe}</span>
                </td>
                <td className="px-4 py-4 font-mono text-white">
                  {t.giaVe?.toLocaleString("vi-VN")} đ
                </td>
                <td className="px-4 py-4 text-xs text-text-muted">
                  {formatDateTime(t.ngayDat)}
                </td>
              </tr>
            ))}
            {filteredTickets.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-text-muted">
                  Không tìm thấy lịch sử đặt vé nào.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
