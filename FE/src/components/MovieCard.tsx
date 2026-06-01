import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Clock, Ticket, ArrowRight, Play } from "lucide-react";
import type { Movie } from "@/data/movies";
import { TrailerModal } from "./TrailerModal";
import { useBooking } from "@/context/BookingContext";
import { useLocale } from "@/context/LocaleContext";

function ageClass(rating: string) {
  if (rating.startsWith("18")) return "bg-accent-blood/90 text-white";
  if (rating.startsWith("16")) return "bg-accent-ember/90 text-white";
  return "bg-accent-gold/90 text-black";
}

function MovieCardBase({ movie }: { movie: Movie }) {
  const [hovered, setHovered] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState<string | null>(null);
  const { dispatch } = useBooking();
  const { t } = useLocale();

  const book = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    dispatch({ type: "OPEN_SHOWTIMES", movie });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="group relative cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={book}
      data-cursor="card"
    >
      {/* Card container — fixed aspect ratio */}
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-xl border border-white/10">
        {/* Poster */}
        <img
          src={movie.poster}
          alt={movie.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://picsum.photos/seed/phim-${movie.id}/400/600`;
          }}
        />

        {/* Static gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        {/* Top badges */}
        <span
          className={`absolute left-3 top-3 rounded-md px-2 py-0.5 font-display text-[11px] tracking-widest ${ageClass(movie.rating)}`}
        >
          {movie.rating}
        </span>
        <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/70 px-2 py-1 text-xs backdrop-blur">
          <Star size={11} className="fill-accent-gold text-accent-gold" />
          <span className="font-semibold text-accent-gold">{movie.imdbScore}</span>
        </span>

        {/* Static bottom info — always visible */}
        <div className="absolute inset-x-0 bottom-0 p-4">
          <h3 className="font-display text-xl leading-tight text-white drop-shadow-lg">
            {movie.title}
          </h3>
          <div className="mt-1 flex items-center gap-2 text-xs text-white/60">
            <Clock size={11} />
            <span>{Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m</span>
            <span>·</span>
            <span>{movie.genre[0]}</span>
          </div>
        </div>

        {/* ── HOVER SLIDE-UP OVERLAY ── */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              key="overlay"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 340, damping: 34 }}
              className="absolute inset-x-0 bottom-0 flex flex-col gap-3 rounded-b-xl p-4"
              style={{
                background:
                  "linear-gradient(0deg, rgba(5,5,8,0.97) 0%, rgba(13,13,20,0.92) 60%, transparent 100%)",
                backdropFilter: "blur(8px)",
              }}
            >
              {/* Title */}
              <div className="font-display text-lg leading-tight text-white">
                {movie.title}
              </div>

              {/* Synopsis */}
              <p className="line-clamp-3 text-[12px] leading-relaxed text-white/70">
                {movie.synopsis}
              </p>

              {/* Cast avatars */}
              {movie.cast.length > 0 && (
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {movie.cast.slice(0, 3).map((c) => (
                      <img
                        key={c.name}
                        src={c.avatar}
                        alt={c.name}
                        className="h-6 w-6 rounded-full border-2 border-bg-surface object-cover"
                      />
                    ))}
                  </div>
                  <span className="text-[10px] tracking-wider text-white/50">
                    {movie.cast
                      .slice(0, 2)
                      .map((c) => c.name.split(" ").pop())
                      .join(", ")}
                  </span>
                </div>
              )}

              {/* Star rating */}
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={
                      i < Math.round(movie.imdbScore / 2)
                        ? "fill-accent-gold text-accent-gold"
                        : "fill-white/10 text-white/10"
                    }
                  />
                ))}
                <span className="ml-1 text-[10px] text-white/50">
                  {movie.imdbScore}/10
                </span>
              </div>

              {/* CTA buttons */}
              <div className="flex gap-2 pt-1">
                <button
                  type="button"
                  data-cursor="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    const url = movie.trailerUrl;
                    if (url && url !== "#") setTrailerUrl(url);
                    else window.alert(`Trailer for "${movie.title}" is coming soon.`);
                  }}
                  className="flex items-center gap-1.5 rounded-md border border-white/20 bg-white/5 px-3 py-2 font-display text-[10px] tracking-widest text-white/80 transition hover:border-white/40"
                >
                  <Play size={11} className="fill-current" />
                  TRAILER
                </button>
                <button
                  type="button"
                  data-cursor="button"
                  onClick={book}
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-md bg-accent-blood px-3 py-2 font-display text-[10px] tracking-widest text-white transition hover:brightness-110 active:scale-[0.98]"
                  style={{ boxShadow: "0 0 20px rgba(229,9,20,0.5)" }}
                >
                  <Ticket size={11} />
                  {t("movies.bookTickets")}
                  <ArrowRight size={10} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <TrailerModal url={trailerUrl} onClose={() => setTrailerUrl(null)} />
    </motion.div>
  );
}

export const MovieCard = memo(MovieCardBase);
