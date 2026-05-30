import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Ticket, Calendar, MapPin, Film, Loader2, CreditCard } from "lucide-react";
import { api, IMAGE_BASE_URL } from "@/lib/api-client";

export function TicketsModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [tickets, setTickets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;
    setLoading(true);
    api.post("/QuanLyNguoiDung/ThongTinTaiKhoan")
      .then((res) => {
        const content = res.data.content || res.data.data;
        setTickets(content?.thongTinDatVe || []);
      })
      .catch((err) => {
        setError("Không thể tải danh sách vé.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 z-[60] w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 p-4"
          >
            <div className="flex max-h-[85vh] flex-col overflow-hidden rounded-2xl border border-white/10 bg-bg-elevated shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 bg-black/40 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-accent-blood/20 text-accent-blood">
                    <Ticket size={20} />
                  </div>
                  <div>
                    <h2 className="font-display text-lg tracking-wide">VÉ CỦA TÔI</h2>
                    <p className="text-[10px] uppercase tracking-widest text-text-muted">MY TICKETS HISTORY</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="rounded-full p-2 text-text-muted transition hover:bg-white/10 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {loading ? (
                  <div className="flex py-12 justify-center"><Loader2 className="animate-spin text-accent-blood" /></div>
                ) : error ? (
                  <div className="text-center text-accent-blood">{error}</div>
                ) : tickets.length === 0 ? (
                  <div className="text-center py-12 text-text-muted">
                    <Ticket size={48} className="mx-auto mb-4 opacity-20" />
                    <p>Bạn chưa đặt vé nào cả.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {tickets.map((t) => (
                      <div key={t.maVe} className="flex flex-col sm:flex-row overflow-hidden rounded-xl border border-white/10 bg-black/20 transition hover:border-accent-blood/50">
                        {t.hinhAnh && (
                          <div className="sm:w-32 h-32 sm:h-auto bg-black/50 shrink-0">
                            <img src={t.hinhAnh.startsWith('public\\images') ? `${IMAGE_BASE_URL}/${t.hinhAnh.replace('public\\', '').replace(/\\/g, '/')}` : t.hinhAnh} alt="Poster" className="h-full w-full object-cover" />
                          </div>
                        )}
                        <div className="flex-1 p-4">
                          <h3 className="font-display text-lg text-accent-ember">{t.tenPhim || "Phim đã xóa"}</h3>
                          <div className="mt-2 grid grid-cols-2 gap-y-2 text-xs text-text-muted">
                            <div className="flex items-center gap-1.5"><Calendar size={12} /> {new Date(t.ngayDat).toLocaleString("vi-VN")}</div>
                            <div className="flex items-center gap-1.5"><MapPin size={12} /> {t.tenCumRap}</div>
                            <div className="flex items-center gap-1.5 col-span-2"><Film size={12} /> {t.danhSachGhe?.length || 1} vé (Ghế: {t.danhSachGhe?.map((g: any) => g.tenGhe).join(", ")})</div>
                            <div className="flex items-center gap-1.5"><Ticket size={12} /> Mã vé: #{t.maVe}</div>
                            <div className="flex items-center gap-1.5 text-accent-blood"><CreditCard size={12} /> {((t.giaVe || 0) * (t.danhSachGhe?.length || 1)).toLocaleString("vi-VN")}đ</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
