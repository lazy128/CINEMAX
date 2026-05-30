import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookingProvider, useBooking } from "@/context/BookingContext";
import { useLocale } from "@/context/LocaleContext";
import { LoadingScreen } from "./LoadingScreen";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { MoviesSection } from "./MoviesSection";
import { OffersSection } from "./OffersSection";
import { ShowtimesModal } from "./ShowtimesModal";
import { SeatPicker } from "./SeatPicker";
import { Checkout } from "./Checkout";
import { PagedLayout } from "./PagedLayout";

function Footer() {
  const { t } = useLocale();
  return (
    <footer
      id="cinemas"
      className="border-t border-white/10 bg-bg-void px-5 py-12 lg:px-10"
    >
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="font-display text-2xl tracking-[0.2em]">
            CINE<span className="text-accent-blood">MAX</span>
          </div>
          <p className="mt-3 text-xs text-text-muted">{t("footer.tagline")}</p>
        </div>
        <div>
          <div className="font-display text-[11px] tracking-[0.3em] text-text-muted">
            {t("footer.cinemas")}
          </div>
          <ul className="mt-3 space-y-1 text-sm text-text-primary/80">
            <li>CGV Vincom Center</li>
            <li>Lotte Cinema Landmark 81</li>
            <li>BHD Star Bitexco</li>
          </ul>
        </div>
        <div>
          <div className="font-display text-[11px] tracking-[0.3em] text-text-muted">
            {t("footer.offers")}
          </div>
          <span className="mt-3 inline-block text-sm text-text-primary/80">
            {t("footer.offersLink")}
          </span>
        </div>
        <div>
          <div className="font-display text-[11px] tracking-[0.3em] text-text-muted">
            {t("footer.contact")}
          </div>
          <ul className="mt-3 space-y-1 text-sm text-text-primary/80">
            <li>hello@cinemax.vn</li>
            <li>+84 28 7300 0000</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-[11px] tracking-widest text-text-muted">
        {t("footer.copyright")}
      </div>
    </footer>
  );
}

/** OffersSection wrapped in its own full-screen page */
function OffersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1">
        <OffersSection />
      </div>
      <Footer />
    </div>
  );
}

function Inner() {
  const { state } = useBooking();
  const { t } = useLocale();
  const [pageIdx, setPageIdx] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [state.stage, state.checkoutStep]);

  // Listen to hash navigation from Navbar links
  useEffect(() => {
    const handleHash = () => {
      const h = window.location.hash;
      if (h === "#now-showing" || h === "") setPageIdx(1);
      else if (h === "#coming-soon") setPageIdx(2);
      else if (h === "#offers")      setPageIdx(3);
      else if (h === "#top" || h === "#hero") setPageIdx(0);
    };
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  // Listen for cinemax:set-tab events
  useEffect(() => {
    const onTabEvent = (e: Event) => {
      const tab = (e as CustomEvent<string>).detail;
      if (tab === "Now Showing") setPageIdx(1);
      if (tab === "Coming Soon") setPageIdx(2);
    };
    const onNewBooking = () => setPageIdx(1);
    window.addEventListener("cinemax:set-tab", onTabEvent);
    window.addEventListener("cinemax:new-booking", onNewBooking);
    return () => {
      window.removeEventListener("cinemax:set-tab", onTabEvent);
      window.removeEventListener("cinemax:new-booking", onNewBooking);
    };
  }, []);

  const pages = [
    { id: "hero",        label: "Home",        node: <Hero /> },
    { id: "now-showing", label: "Now Showing",  node: <MoviesSection tab="now_showing" /> },
    { id: "coming-soon", label: "Coming Soon",  node: <MoviesSection tab="coming_soon" /> },
    { id: "offers",      label: "Offers",       node: <OffersPage /> },
  ];

  return (
    <>
      <Navbar currentPage={pageIdx} onNavigate={setPageIdx} />
      <AnimatePresence mode="wait">
        {state.stage === "browse" || state.stage === "showtimes" ? (
          <motion.div
            key="browse"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <PagedLayout
              pages={pages}
              currentPage={pageIdx}
              onPageChange={setPageIdx}
            />
            <ShowtimesModal />
          </motion.div>
        ) : state.stage === "seats" ? (
          <motion.div
            key="seats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <SeatPicker />
          </motion.div>
        ) : (
          <motion.div
            key="checkout"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <Checkout />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function CinemaxApp() {
  const [loaded, setLoaded] = useState(() => {
    return sessionStorage.getItem("cinemax_loaded") === "true";
  });

  const handleDone = () => {
    sessionStorage.setItem("cinemax_loaded", "true");
    setLoaded(true);
  };

  return (
    <BookingProvider>
      {!loaded && <LoadingScreen onDone={handleDone} />}
      <AnimatePresence>
        {loaded && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Inner />
          </motion.main>
        )}
      </AnimatePresence>
    </BookingProvider>
  );
}
