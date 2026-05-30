import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, MapPin, ArrowRight, Star, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { CINEMAS } from "@/data/movies";
import { useBooking } from "@/context/BookingContext";
import { useFormatMoney } from "@/hooks/useFormatMoney";

const TYPE_ORDER = ["IMAX", "DOLBY", "4DX", "STANDARD"] as const;

const TYPE_BADGE: Record<string, string> = {
  IMAX: "from-accent-ice to-blue-500",
  DOLBY: "from-purple-500 to-fuchsia-500",
  "4DX": "from-accent-ember to-accent-blood",
  STANDARD: "from-white/30 to-white/10",
};

const WEEKDAYS = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];

/** Build a grid of day-cells for a given month */
function buildCalendarGrid(year: number, month: number) {
  const firstDay = new Date(year, month, 1);
  const startDow = firstDay.getDay(); // 0=Sun
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: Array<{ day: number; iso: string } | null> = [];

  // Leading blanks
  for (let i = 0; i < startDow; i++) cells.push(null);

  for (let d = 1; d <= daysInMonth; d++) {
    const iso = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    cells.push({ day: d, iso });
  }

  return cells;
}

function MiniCalendar({
  availableDates,
  selectedDate,
  onSelect,
}: {
  availableDates: Set<string>;
  selectedDate: string | null;
  onSelect: (iso: string) => void;
}) {
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const todayIso = useMemo(() => today.toISOString().slice(0, 10), [today]);

  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  // Auto-navigate to the month of the first available date
  useEffect(() => {
    if (availableDates.size > 0) {
      const sorted = Array.from(availableDates).sort();
      const first = sorted[0];
      const [y, m] = first.split("-").map(Number);
      setViewYear(y);
      setViewMonth(m - 1);
    }
  }, [availableDates]);

  const cells = useMemo(() => buildCalendarGrid(viewYear, viewMonth), [viewYear, viewMonth]);

  const monthLabel = useMemo(() => {
    const d = new Date(viewYear, viewMonth);
    return d.toLocaleDateString("vi-VN", { month: "long", year: "numeric" });
  }, [viewYear, viewMonth]);

  const goPrev = useCallback(() => {
    setViewMonth((m) => (m === 0 ? 11 : m - 1));
    setViewYear((y) => (viewMonth === 0 ? y - 1 : y));
  }, [viewMonth]);

  const goNext = useCallback(() => {
    setViewMonth((m) => (m === 11 ? 0 : m + 1));
    setViewYear((y) => (viewMonth === 11 ? y + 1 : y));
  }, [viewMonth]);

  return (
    <div className="w-full">
      {/* Month nav */}
      <div className="flex items-center justify-between mb-3">
        <button
          type="button"
          data-cursor="button"
          onClick={goPrev}
          className="rounded-lg p-1.5 text-text-muted transition hover:bg-white/10 hover:text-text-primary"
        >
          <ChevronLeft size={16} />
        </button>
        <span className="font-display text-sm tracking-[0.15em] text-text-primary capitalize">
          {monthLabel}
        </span>
        <button
          type="button"
          data-cursor="button"
          onClick={goNext}
          className="rounded-lg p-1.5 text-text-muted transition hover:bg-white/10 hover:text-text-primary"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 gap-1 mb-1">
        {WEEKDAYS.map((wd) => (
          <div
            key={wd}
            className="text-center font-display text-[10px] tracking-[0.2em] text-text-muted py-1"
          >
            {wd}
          </div>
        ))}
      </div>

      {/* Day cells */}
      <div className="grid grid-cols-7 gap-1">
        {cells.map((cell, i) => {
          if (!cell) {
            return <div key={`blank-${i}`} className="aspect-square" />;
          }

          const hasShowtimes = availableDates.has(cell.iso);
          const isSelected = cell.iso === selectedDate;
          const isToday = cell.iso === todayIso;
          const isPast = cell.iso < todayIso;

          return (
            <button
              key={cell.iso}
              type="button"
              data-cursor={hasShowtimes ? "button" : undefined}
              disabled={!hasShowtimes}
              onClick={() => onSelect(cell.iso)}
              className={`relative aspect-square flex items-center justify-center rounded-lg text-sm font-display transition-all duration-200 ${
                isSelected
                  ? "bg-accent-blood text-white shadow-[0_0_18px_rgba(229,9,20,0.5)] scale-110 z-10"
                  : hasShowtimes
                  ? "border border-white/10 bg-white/[0.04] text-text-primary hover:border-accent-ember hover:bg-accent-ember/10 hover:text-accent-ember"
                  : isPast
                  ? "text-white/15 cursor-not-allowed"
                  : "text-white/25 cursor-not-allowed"
              }`}
            >
              {cell.day}
              {/* Today dot */}
              {isToday && !isSelected && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-accent-ice" />
              )}
              {/* Has showtimes dot */}
              {hasShowtimes && !isSelected && (
                <span className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-accent-blood" />
              )}
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-3 flex items-center justify-center gap-4 text-[10px] text-text-muted">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-blood" />
          Có suất chiếu
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-1 w-1 rounded-full bg-accent-ice" />
          Hôm nay
        </span>
      </div>
    </div>
  );
}

export function ShowtimesModal() {
  const { state, dispatch } = useBooking();
  const { format } = useFormatMoney();
  const open = state.stage === "showtimes" && !!state.selectedMovie;
  const movie = state.selectedMovie;
  const cinema = state.selectedCinema;
  const showtime = state.selectedShowtime;
  const [activeCinema, setActiveCinema] = useState<string | null>(null);
  const chooseSeatsRef = useRef<HTMLDivElement>(null);

  const cinemaId = cinema ?? activeCinema ?? CINEMAS[0].id;

  // Compute available dates from the movie's actual showtime data for the selected cinema
  const availableDates = useMemo(() => {
    if (!movie) return new Set<string>();
    const dates = new Set<string>();
    const cinemaShowtimes = movie.showtimes[cinemaId];
    if (cinemaShowtimes) {
      for (const dateIso of Object.keys(cinemaShowtimes)) {
        if (cinemaShowtimes[dateIso].length > 0) {
          dates.add(dateIso);
        }
      }
    }
    return dates;
  }, [movie, cinemaId]);

  // Default to first available date for selected cinema, or state selected date
  const date = useMemo(() => {
    if (state.selectedDate && availableDates.has(state.selectedDate)) {
      return state.selectedDate;
    }
    if (availableDates.size > 0) {
      const sorted = Array.from(availableDates).sort();
      // Prefer today or the next available date
      const today = new Date().toISOString().slice(0, 10);
      const future = sorted.find((d) => d >= today);
      return future ?? sorted[0];
    }
    return null;
  }, [state.selectedDate, availableDates]);

  // Auto-set date when cinema changes and current date is invalid
  useEffect(() => {
    if (date && date !== state.selectedDate) {
      dispatch({ type: "SET_DATE", iso: date });
    }
  }, [date, state.selectedDate, dispatch]);

  useEffect(() => {
    if (!showtime || !chooseSeatsRef.current) return;
    const t = window.setTimeout(() => {
      chooseSeatsRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 120);
    return () => window.clearTimeout(t);
  }, [showtime]);

  const grouped = useMemo(() => {
    if (!movie || !date) return {};
    const slots = movie.showtimes[cinemaId]?.[date] ?? [];
    const g: Record<string, typeof slots> = {};
    for (const s of slots) (g[s.type] ??= []).push(s);
    return g;
  }, [movie, cinemaId, date]);

  if (!movie) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
          onClick={() => dispatch({ type: "CLOSE_SHOWTIMES" })}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto glass rounded-2xl"
          >
            {/* corner accents */}
            <span className="pointer-events-none absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent-blood to-transparent" />
            <span className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-l-2 border-t-2 border-accent-blood" />
            <span className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-r-2 border-t-2 border-accent-blood" />
            <span className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-l-2 border-b-2 border-accent-blood" />
            <span className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-r-2 border-b-2 border-accent-blood" />

            <button
              data-cursor="button"
              onClick={() => dispatch({ type: "CLOSE_SHOWTIMES" })}
              className="absolute right-5 top-5 z-10 rounded-full bg-black/60 p-2 text-text-primary transition hover:bg-accent-blood"
            >
              <X size={16} />
            </button>

            <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-[180px_1fr] md:p-8">
              <div className="flex sm:block">
                <img src={movie.poster} alt={movie.title} className="aspect-[2/3] w-32 rounded-lg object-cover sm:w-full" />
                <div className="ml-4 sm:ml-0 sm:mt-3">
                  <div className="font-display text-2xl leading-tight">{movie.title}</div>
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-text-primary/75">
                    <Star size={12} className="fill-accent-gold text-accent-gold" />
                    <span className="font-semibold text-accent-gold">{movie.imdbScore}</span>
                    <span className="text-text-muted">·</span>
                    <span className="flex items-center gap-1"><Clock size={11} />{Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m</span>
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-widest text-text-muted">{movie.genre.join(" / ")}</div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="font-display text-xs tracking-[0.3em] text-text-muted">CHỌN RẠP</div>
                  <div className="mt-3 grid grid-cols-1 gap-2 md:grid-cols-3">
                    {CINEMAS.map((c) => {
                      const active = c.id === cinemaId;
                      return (
                        <button
                          key={c.id}
                          data-cursor="button"
                          onClick={() => { setActiveCinema(c.id); dispatch({ type: "SET_CINEMA", id: c.id }); }}
                          className={`relative rounded-lg border p-3 text-left transition ${
                            active
                              ? "border-accent-blood bg-accent-blood/10 ring-1 ring-accent-blood/40"
                              : "border-white/10 bg-white/[0.03] hover:border-accent-ember"
                          }`}
                        >
                          <div className="flex items-start gap-2">
                            <motion.span animate={active ? { y: [0, -3, 0] } : { y: 0 }} transition={{ duration: 0.6, repeat: active ? Infinity : 0, repeatDelay: 1.5 }}>
                              <MapPin size={14} className={active ? "text-accent-blood" : "text-text-muted"} />
                            </motion.span>
                            <div>
                              <div className="font-display text-sm tracking-wider">{c.name}</div>
                              <div className="mt-0.5 text-[11px] text-text-muted">{c.address}</div>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <div className="font-display text-xs tracking-[0.3em] text-text-muted">LỊCH CHIẾU</div>
                  <div className="mt-3">
                    <MiniCalendar
                      availableDates={availableDates}
                      selectedDate={date}
                      onSelect={(iso) => dispatch({ type: "SET_DATE", iso })}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  {TYPE_ORDER.map((type) => {
                    const slots = grouped[type];
                    if (!slots || slots.length === 0) return null;
                    return (
                      <div key={type}>
                        <div className="flex items-center gap-2">
                          <span className={`rounded-md bg-gradient-to-r ${TYPE_BADGE[type]} px-2 py-0.5 font-display text-[11px] tracking-widest text-white`}>{type}</span>
                          <span className="h-px flex-1 bg-white/10" />
                        </div>
                        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                          {slots.map((s, i) => {
                            const soldOut = s.seatsAvailable === 0;
                            const fillingFast = !soldOut && s.seatsAvailable / s.totalSeats < 0.2;
                            const active = showtime?.time === s.time && showtime?.type === s.type;
                            return (
                              <button
                                key={i}
                                disabled={soldOut}
                                data-cursor={soldOut ? undefined : "button"}
                                onClick={() => {
                                  dispatch({ type: "SET_SHOWTIME", showtime: s });
                                }}
                                className={`group relative overflow-hidden rounded-lg border p-3 text-left transition ${
                                  active
                                    ? "border-emerald-400 bg-emerald-500/15 shadow-[0_0_20px_rgba(16,185,129,0.35)]"
                                    : soldOut
                                    ? "cursor-not-allowed border-white/5 bg-white/[0.02] opacity-40"
                                    : "border-white/10 bg-white/[0.03] hover:border-accent-ice hover:shadow-[0_0_16px_rgba(0,212,255,0.35)]"
                                }`}
                              >
                                <div className="font-display text-lg tracking-wider">{s.time}</div>
                                <div className="mt-0.5 flex items-center justify-between text-[11px]">
                                  <span className="text-accent-gold">{format(s.price)}</span>
                                  {soldOut ? (
                                    <span className="font-display tracking-widest text-text-muted line-through">SOLD OUT</span>
                                  ) : fillingFast ? (
                                    <span className="amber-pulse font-display tracking-widest text-accent-ember">FILLING</span>
                                  ) : (
                                    <span className="text-text-muted">{s.seatsAvailable} left</span>
                                  )}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div
                  ref={chooseSeatsRef}
                  className="flex scroll-mt-6 items-center justify-between border-t border-white/10 pt-4"
                >
                  <div className="text-xs text-text-muted">
                    {showtime ? (
                      <span>
                        Selected: <span className="text-text-primary">{showtime.type} · {showtime.time} · {format(showtime.price)}</span>
                      </span>
                    ) : (
                      "Pick a showtime to continue"
                    )}
                  </div>
                  <button
                    disabled={!showtime}
                    data-cursor={showtime ? "button" : undefined}
                    onClick={() => dispatch({ type: "GO_SEATS" })}
                    className={`inline-flex items-center gap-2 rounded-md px-5 py-3 font-display text-xs tracking-[0.25em] text-white transition active:scale-95 ${
                      showtime ? "bg-accent-blood shadow-[0_0_24px_rgba(229,9,20,0.5)]" : "cursor-not-allowed bg-white/10 text-white/40"
                    }`}
                  >
                    CHOOSE SEATS <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
