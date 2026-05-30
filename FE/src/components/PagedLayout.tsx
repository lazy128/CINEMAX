/**
 * PagedLayout — full-screen pages with smooth slide transitions.
 * Wheel/arrow/swipe navigation, but allows internal scroll on overflowing pages.
 * Parent can control current page via the `currentPage` prop (controlled mode).
 */
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  pages: { id: string; label: string; node: ReactNode }[];
  /** Controlled: parent drives which page is shown */
  currentPage?: number;
  onPageChange?: (idx: number) => void;
}

const SLIDE = {
  enter: (dir: number) => ({ y: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { y: "0%", opacity: 1 },
  exit: (dir: number) => ({ y: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

export function PagedLayout({ pages, currentPage = 0, onPageChange }: Props) {
  const [direction, setDirection] = useState(0);
  const wheelLocked = useRef(false);
  const touchY = useRef(0);
  const pageRef = useRef<HTMLDivElement>(null);
  // Track the previous value to compute direction
  const prevPage = useRef(currentPage);

  // Compute direction whenever currentPage changes from parent
  useEffect(() => {
    if (currentPage !== prevPage.current) {
      setDirection(currentPage > prevPage.current ? 1 : -1);
      prevPage.current = currentPage;
    }
  }, [currentPage]);

  const goTo = useCallback(
    (next: number) => {
      if (next < 0 || next >= pages.length || next === currentPage) return;
      onPageChange?.(next);
    },
    [currentPage, pages.length, onPageChange]
  );

  const goNext = useCallback(() => goTo(currentPage + 1), [currentPage, goTo]);
  const goPrev = useCallback(() => goTo(currentPage - 1), [currentPage, goTo]);

  // Removed wheel, keydown, and touch swipe listeners per user request.
  // Navigation between pages will now only occur via the Navbar.

  // Reset scroll on page change
  useEffect(() => {
    if (pageRef.current) pageRef.current.scrollTop = 0;
  }, [currentPage]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentPage}
          custom={direction}
          variants={SLIDE}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          ref={pageRef}
          className="absolute inset-0 h-screen w-full overflow-y-auto overflow-x-hidden scrollbar-hide"
        >
          {pages[currentPage].node}
        </motion.div>
      </AnimatePresence>

      {/* Side dot-nav */}
      <nav
        className="fixed right-5 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-3"
        aria-label="Page navigation"
      >
        {pages.map((p, i) => (
          <button
            key={p.id}
            onClick={() => goTo(i)}
            aria-label={`Go to ${p.label}`}
            title={p.label}
            className="group relative flex items-center justify-end gap-2"
          >
            <span className="pointer-events-none absolute right-6 whitespace-nowrap rounded-md bg-black/80 px-2 py-1 font-mono text-[10px] tracking-[0.2em] text-white opacity-0 backdrop-blur transition-opacity duration-200 group-hover:opacity-100">
              {p.label.toUpperCase()}
            </span>
            <span
              className="block rounded-full transition-all duration-300"
              style={{
                width:  i === currentPage ? 8 : 6,
                height: i === currentPage ? 24 : 6,
                background: i === currentPage ? "var(--accent-blood)" : "rgba(255,255,255,0.25)",
                boxShadow: i === currentPage ? "0 0 12px rgba(229,9,20,0.8)" : "none",
              }}
            />
          </button>
        ))}
      </nav>

      {/* Removed scroll hint */ }
    </div>
  );
}
