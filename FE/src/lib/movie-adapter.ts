import type { Movie, Showtime } from "@/data/movies";
import { DATES } from "@/data/movies";
import type { Phim, LichChieuPhimDetail } from "./cinema-api";

const TYPE_ORDER = ["STANDARD", "DOLBY", "IMAX", "4DX"] as const;
const GENRES = ["Action", "Drama", "Sci-Fi", "Thriller", "Horror", "Comedy"];

type ExtendedPhim = Phim & {
  id?: number | string;
  title?: string;
  tagline?: string;
  genre?: string[];
  rating?: string;
  imdbScore?: number;
  runtime?: number;
  language?: string;
  synopsis?: string;
  cast?: Movie["cast"];
  director?: string;
  status?: "now_showing" | "coming_soon";
  releaseDate?: string;
  trailerUrl?: string;
  poster?: string;
  backdrop?: string;
  accent?: string;
};

function seeded(seed: number) {
  let v = seed;
  return () => {
    v = (v * 1664525 + 1013904223) % 4294967296;
    return v / 4294967296;
  };
}

function buildSeatMap(seedBase: number): Movie["seatMap"] {
  const rand = seeded(seedBase);
  const rows = 12;
  const cols = 14;
  const letters = "ABCDEFGHIJKL";
  const takenSeats: string[] = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 1; c <= cols; c++) {
      if (rand() < 0.18) takenSeats.push(`${letters[r]}${c}`);
    }
  }

  return {
    rows,
    cols,
    takenSeats,
    vipRows: ["A", "B"],
    coupleSeats: ["L7-L8", "L9-L10"],
  };
}

function buildShowtimes(basePrice: number, seedBase: number): Movie["showtimes"] {
  const rand = seeded(seedBase);
  const out: Movie["showtimes"] = {};
  const cinemaIds = ["CGV", "LotteCinima", "BHDStar"];

  for (const c of cinemaIds) {
    out[c] = {};
    for (const d of DATES) {
      out[c][d.iso] = ["10:30", "13:15", "16:00", "18:45", "21:30", "23:15"].map((time, i) => {
        const type = TYPE_ORDER[(i + Math.floor(rand() * 4)) % TYPE_ORDER.length];
        const total = 120;
        const seatsAvailable = Math.max(0, Math.round(total * (0.15 + rand() * 0.8)));
        const mul = type === "IMAX" ? 1.5 : type === "4DX" ? 1.7 : type === "DOLBY" ? 1.25 : 1;

        return {
          time,
          type,
          price: Math.round(basePrice * mul),
          seatsAvailable,
          totalSeats: total,
        };
      });
    }
  }

  return out;
}

function inferType(tenRap: string): Showtime["type"] {
  const lower = tenRap.toLowerCase();
  if (lower.includes("imax")) return "IMAX";
  if (lower.includes("4dx")) return "4DX";
  if (lower.includes("dolby")) return "DOLBY";
  return "STANDARD";
}

function extractRealShowtimes(detail: LichChieuPhimDetail): Movie["showtimes"] | null {
  if (!detail.heThongRapChieu || detail.heThongRapChieu.length === 0) return null;

  const out: Movie["showtimes"] = {};
  let hasAny = false;

  for (const heThong of detail.heThongRapChieu) {
    const cinemaId = heThong.maHeThongRap;
    out[cinemaId] = {};

    for (const cumRap of heThong.cumRapChieu ?? []) {
      for (const rapPhim of cumRap.lichChieuPhim ?? []) {
        for (const lich of rapPhim.lichChieu ?? []) {
          const dt = new Date(lich.ngayGioChieu);
          const dateIso = dt.toISOString().slice(0, 10);
          const time = lich.time || `${String(dt.getHours()).padStart(2, "0")}:${String(dt.getMinutes()).padStart(2, "0")}`;
          const type = (lich.type as Showtime["type"] | undefined) || inferType(rapPhim.tenRap);
          const price = lich.giaVe || lich.price || 0;

          if (!out[cinemaId][dateIso]) out[cinemaId][dateIso] = [];

          out[cinemaId][dateIso].push({
            maLichChieu: lich.maLichChieu,
            maRap: lich.maRap ?? rapPhim.maRap,
            maPhim: lich.maPhim,
            ngayGioChieu: lich.ngayGioChieu,
            time,
            type,
            price,
            seatsAvailable: lich.seatsAvailable ?? 100,
            totalSeats: lich.totalSeats ?? 120,
          });
          hasAny = true;
        }
      }
    }
  }

  return hasAny ? out : null;
}

export function adaptPhimToMovie(item: Phim, lichChieuData?: LichChieuPhimDetail): Movie {
  const source = item as ExtendedPhim;
  const score = Number(source.imdbScore ?? item.danhGia ?? 0);
  const basePrice = 10 + Math.max(0, Math.min(10, score));
  const seedBase = Number((source.id ?? item.maPhim) || 1);

  const realShowtimes = lichChieuData ? extractRealShowtimes(lichChieuData) : null;
  const status: "now_showing" | "coming_soon" = source.status ?? (item.dangChieu ? "now_showing" : "coming_soon");
  const isSapChieu = item.sapChieu === true || status === "coming_soon";

  let hinhAnh = source.poster ?? item.hinhAnh;
  if (hinhAnh && !hinhAnh.startsWith("http")) {
    hinhAnh = hinhAnh.replace(/\\/g, "/");
    if (hinhAnh.startsWith("public/")) {
      hinhAnh = hinhAnh.replace("public/", "");
    }
    if (hinhAnh.startsWith("images/")) {
      hinhAnh = `http://localhost:5000/${hinhAnh}`;
    }
  }

  let releaseDate = source.releaseDate ?? (item.ngayKhoiChieu ? new Date(item.ngayKhoiChieu).toISOString() : null);
  if (isSapChieu && (!releaseDate || new Date(releaseDate) <= new Date())) {
    const daysAhead = 30 + (seedBase % 60);
    releaseDate = new Date(Date.now() + daysAhead * 86400000).toISOString();
  }
  if (!releaseDate) releaseDate = new Date().toISOString();

  return {
    id: String(source.id ?? item.maPhim),
    title: source.title ?? item.tenPhim,
    tagline: source.tagline ?? item.moTa ?? item.tenPhim,
    genre: item.theLoai ? item.theLoai.split(",") : (Array.isArray(source.genre) && source.genre.length > 0
      ? source.genre
      : [GENRES[seedBase % GENRES.length]]),
    rating: source.rating ?? (score >= 8 ? "18+" : score >= 6 ? "16+" : "13+"),
    imdbScore: score,
    runtime: Number(source.runtime ?? 120),
    language: source.language ?? "Vietnamese",
    synopsis: source.synopsis ?? item.moTa ?? "No synopsis",
    cast: Array.isArray(source.cast) ? source.cast : [],
    director: source.director ?? "Unknown",
    status,
    releaseDate,
    trailerUrl: source.trailerUrl ?? item.trailer ?? "#",
    poster: hinhAnh ?? `https://picsum.photos/seed/phim-${seedBase}/400/600`,
    backdrop: source.backdrop ?? hinhAnh ?? `https://picsum.photos/seed/phim-bg-${seedBase}/1600/900`,
    accent: source.accent ?? (item.hot ? "#e50914" : "#ff6b35"),
    showtimes: realShowtimes ?? {},
    seatMap: buildSeatMap(seedBase * 97),
  };
}
