import { useRef } from "react";
import { motion } from "framer-motion";
import type { Movie } from "@/data/movies";
import { useCountdown } from "@/hooks/useCountdown";

function Digit({ char, position }: { char: string; position: number }) {
  const prevChar = useRef(char);
  const flipKey = useRef(0);

  if (char !== prevChar.current) {
    flipKey.current += 1;
    prevChar.current = char;
  }

  return (
    <motion.div
      key={flipKey.current}
      initial={{ rotateX: -90, opacity: 0 }}
      animate={{ rotateX: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="grid h-9 w-7 place-items-center rounded-md bg-black/80 font-display text-xl text-accent-gold shadow-inner"
      style={{ boxShadow: "inset 0 -6px 12px rgba(0,0,0,0.5)" }}
    >
      {char}
    </motion.div>
  );
}

function Pair({ value, label }: { value: number; label: string }) {
  const txt = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-0.5">
        {txt.split("").map((d, i) => (
          <Digit key={i} char={d} position={i} />
        ))}
      </div>
      <span className="mt-1 font-display text-[10px] tracking-widest text-text-muted">{label}</span>
    </div>
  );
}

export function ComingSoonCard({ movie }: { movie: Movie }) {
  const t = useCountdown(movie.releaseDate);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-xl border border-white/10"
      data-cursor="card"
    >
      <div className="relative aspect-2/3 overflow-hidden">
        <img
          src={movie.poster}
          alt={movie.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          style={{ filter: "sepia(0.5) saturate(0.7) brightness(0.85)" }}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://picsum.photos/seed/phim-${movie.id}/400/600`;
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
        <div
          className="absolute -right-12 top-6 rotate-45 bg-accent-blood px-12 py-1 font-display text-[11px] tracking-[0.3em] text-white"
          style={{ boxShadow: "0 0 18px rgba(229,9,20,0.5)" }}
        >
          COMING SOON
        </div>
        <div className="absolute inset-x-0 bottom-0 p-4">
          <h3 className="font-display text-2xl text-text-primary">{movie.title}</h3>
          <p className="line-clamp-2 text-xs text-text-primary/75">{movie.tagline}</p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 bg-bg-surface/80 p-3 backdrop-blur">
        <Pair value={t.d} label="DAYS" />
        <span className="font-display text-xl text-text-muted">:</span>
        <Pair value={t.h} label="HRS" />
        <span className="font-display text-xl text-text-muted">:</span>
        <Pair value={t.m} label="MIN" />
        <span className="font-display text-xl text-text-muted">:</span>
        <Pair value={t.s} label="SEC" />
      </div>
    </motion.div>
  );
}
