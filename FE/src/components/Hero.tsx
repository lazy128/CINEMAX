import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Clock, Play, Star, Ticket } from "lucide-react";
import { MOVIES, type Movie } from "@/data/movies";
import { useBooking } from "@/context/BookingContext";
import { useLocale } from "@/context/LocaleContext";
import { useMoviesApi } from "@/hooks/useMoviesApi";
import { TrailerModal } from "./TrailerModal";

const FEATURED = MOVIES;

function TitleReveal({ text, key }: { text: string; key?: string }) {
  return (
    <motion.h1
      key={key}
      className="font-display text-5xl leading-[0.95] tracking-tight text-text-primary sm:text-6xl md:text-7xl lg:text-8xl"
      aria-label={text}
    >
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: i * 0.04, type: "spring", stiffness: 180, damping: 18 }}
          className="inline-block"
          style={{ marginRight: ch === " " ? "0.25em" : undefined }}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </motion.h1>
  );
}

function FeaturedPoster({ movie }: { movie: Movie }) {
  const { t } = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const target = useRef({ rx: 0, ry: 0 });
  const current = useRef({ rx: 0, ry: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      target.current.ry = px * 18;
      target.current.rx = -py * 18;
    };
    const onLeave = () => {
      target.current.rx = 0;
      target.current.ry = 0;
    };
    const loop = () => {
      current.current.rx += (target.current.rx - current.current.rx) * 0.12;
      current.current.ry += (target.current.ry - current.current.ry) * 0.12;
      if (el) {
        el.style.transform = `perspective(1000px) rotateX(${current.current.rx}deg) rotateY(${current.current.ry}deg)`;
      }
      raf = requestAnimationFrame(loop);
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(loop);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-sm preserve-3d">
      <div ref={ref} className="relative preserve-3d transition-transform duration-200 will-change-transform" data-cursor="card">
        <div className="absolute -inset-4 rounded-2xl bg-accent-blood/40 blur-3xl" />
        <motion.img
          key={movie.id}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          src={movie.poster}
          alt={movie.title}
          className="relative aspect-[2/3] w-full rounded-2xl object-cover shadow-[0_30px_80px_-20px_rgba(229,9,20,0.6)]"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://picsum.photos/seed/phim-${movie.id}/400/600`;
          }}
        />
        <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-accent-blood/90 px-3 py-1 font-display text-[11px] tracking-widest text-white pulse-ring">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          NOW SHOWING
        </div>
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/70 px-2 py-1 text-xs backdrop-blur-sm">
          <Star size={12} className="fill-accent-gold text-accent-gold" />
          <span className="font-semibold text-accent-gold">{movie.imdbScore}</span>
        </div>

        {/* genre rail — fixed on poster, no orbit */}
        <div className="absolute inset-x-0 bottom-0 rounded-b-2xl bg-gradient-to-t from-black via-black/85 to-transparent px-4 pb-4 pt-16">
          <div className="flex items-center gap-2 border-l-2 border-accent-blood pl-3">
            <span className="font-display text-[9px] tracking-[0.35em] text-accent-ember">{t("hero.genre")}</span>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={movie.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35 }}
              className="mt-2 flex flex-wrap gap-1.5"
            >
              {movie.genre.map((g, i) => (
                <span
                  key={g}
                  className="rounded border border-white/15 bg-white/5 px-2.5 py-0.5 font-display text-[10px] tracking-[0.2em] text-text-primary/90 backdrop-blur-sm"
                  style={{
                    boxShadow: i === 0 ? `0 0 20px ${movie.accent}40` : undefined,
                  }}
                >
                  {g.toUpperCase()}
                </span>
              ))}
              <span className="rounded border border-accent-blood/30 bg-accent-blood/10 px-2.5 py-0.5 font-display text-[10px] tracking-[0.2em] text-accent-blood">
                {movie.rating}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* film strip accent */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-3 top-8 bottom-8 w-1.5 rounded-full opacity-80"
          style={{
            background: `linear-gradient(180deg, transparent, ${movie.accent}, transparent)`,
            boxShadow: `0 0 24px ${movie.accent}66`,
          }}
        />
      </div>
      {/* reflection */}
      <div
        aria-hidden
        className="pointer-events-none mx-auto mt-2 h-24 w-[80%] rounded-full opacity-40 blur-2xl"
        style={{
          background: `radial-gradient(ellipse at top, ${movie.accent}, transparent 70%)`,
        }}
      />
    </div>
  );
}

function Embers() {
  const embers = useMemo(
    () =>
      Array.from({ length: 60 }).map((_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 8 + Math.random() * 10,
        drift: -50 + Math.random() * 100,
        scale: 0.5 + Math.random() * 1.4,
      })),
    []
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {embers.map((e, i) => (
        <span
          key={i}
          className="ember"
          style={{
            left: `${e.left}%`,
            animationDelay: `${e.delay}s`,
            animationDuration: `${e.duration}s`,
            ["--drift" as any]: `${e.drift}px`,
            transform: `scale(${e.scale})`,
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState<string | null>(null);
  const { featured } = useMoviesApi();
  const FEATURED = featured.length ? featured : MOVIES.filter((m) => m.status === "now_showing");
  const movie = FEATURED[idx % FEATURED.length];
  const { dispatch } = useBooking();

  useEffect(() => {
    if (paused || FEATURED.length <= 1) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % FEATURED.length), 6000);
    return () => clearInterval(t);
  }, [paused, FEATURED.length]);

  return (
    <section
      id="top"
      className="relative scroll-mt-24 min-h-[100svh] overflow-hidden bg-mesh grain vignette"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Embers />
      {/* giant decorative text */}
      <div className="pointer-events-none absolute inset-x-0 top-[18%] select-none text-center font-display tracking-tighter text-white/[0.04]" style={{ fontSize: "18vw", lineHeight: 0.9 }}>
        CINEMAX
      </div>

      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 items-center gap-10 px-5 pb-24 pt-28 md:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div className="order-2 md:order-1">
          <div className="flex items-center gap-2 font-display text-xs tracking-[0.4em] text-accent-blood">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-accent-blood/60" />
              <span className="relative inline-block h-2 w-2 rounded-full bg-accent-blood" />
            </span>
            NOW PLAYING · FEATURE PRESENTATION
          </div>

          <div className="mt-5">
            <AnimatePresence mode="wait">
              <TitleReveal key={movie.id} text={movie.title} />
            </AnimatePresence>
          </div>

          <motion.p
            key={movie.id + "-tag"}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-5 max-w-xl text-lg text-text-primary/70"
          >
            {movie.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-6 flex flex-wrap items-center gap-4 text-sm text-text-primary/80"
          >
            <span className="flex items-center gap-1">
              <Star size={14} className="fill-accent-gold text-accent-gold" />
              <span className="font-semibold text-accent-gold">{movie.imdbScore}</span>
              <span className="text-text-muted">/10</span>
            </span>
            <span className="text-text-muted">·</span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
            </span>
            <span className="text-text-muted">·</span>
            <div className="flex flex-wrap gap-2">
              {movie.genre.map((g) => (
                <span key={g} className="rounded-full border border-white/15 px-3 py-0.5 font-display text-[11px] tracking-widest">
                  {g}
                </span>
              ))}
            </div>
            <span className="rounded-md bg-accent-blood/15 px-2 py-0.5 font-display text-[11px] tracking-widest text-accent-blood">
              {movie.rating}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button
              data-cursor="button"
              onClick={() => dispatch({ type: "OPEN_SHOWTIMES", movie })}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-accent-blood px-6 py-3 font-display text-sm tracking-[0.25em] text-white transition active:scale-95"
              style={{ boxShadow: "0 0 30px rgba(229,9,20,0.55)" }}
            >
              <Ticket size={16} />
              BOOK TICKETS
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </button>
            <button
              data-cursor="button"
              type="button"
              onClick={() => {
                const url = movie.trailerUrl;
                if (url && url !== "#") setTrailerUrl(url);
                else window.alert(`Trailer for "${movie.title}" is coming soon.`);
              }}
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 py-3 font-display text-sm tracking-[0.25em] text-text-primary transition hover:border-accent-ember hover:text-accent-ember"
            >
              <Play size={14} className="fill-current" />
              WATCH TRAILER
            </button>
          </motion.div>

          {/* indicator dots */}
          <div className="mt-10 flex items-center gap-2">
            {FEATURED.map((m, i) => (
              <button
                key={m.id}
                onClick={() => setIdx(i)}
                data-cursor="button"
                aria-label={`Show ${m.title}`}
                className="h-1.5 overflow-hidden rounded-full bg-white/15 transition-all"
                style={{ width: i === idx ? 32 : 14 }}
              >
                <span
                  className="block h-full"
                  style={{
                    background: i === idx ? "var(--accent-blood)" : "transparent",
                    boxShadow: i === idx ? "0 0 12px var(--accent-blood)" : undefined,
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="order-1 md:order-2">
          <AnimatePresence mode="wait">
            <FeaturedPoster key={movie.id} movie={movie} />
          </AnimatePresence>
        </div>
      </div>

      <TrailerModal url={trailerUrl} onClose={() => setTrailerUrl(null)} />
    </section>
  );
}
