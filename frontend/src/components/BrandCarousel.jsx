import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BANNERS, POSTERS } from "@/data/site";

export default function BrandCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slides = [...BANNERS.map((b) => ({ type: "wide", ...b })), { type: "pair" }];
  const n = slides.length;

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((v) => (v + 1) % n), 4500);
    return () => clearInterval(t);
  }, [paused, n]);

  const go = (d) => setIndex((v) => (v + d + n) % n);
  const slide = slides[index];

  return (
    <section
      className="relative bg-white border-y border-slate-100"
      data-testid="brand-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Brand showcases"
    >
      <motion.div
        className={`relative w-full overflow-hidden bg-white cursor-grab active:cursor-grabbing ${
          slide.type === "pair" ? "h-[240px] sm:h-[300px] lg:h-[420px]" : ""
        }`}
        style={slide.type === "wide" ? { aspectRatio: slide.ratio } : undefined}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.08}
        onDragStart={() => setPaused(true)}
        onDragEnd={(e, info) => {
          setPaused(false);
          if (info.offset.x < -50) go(1);
          else if (info.offset.x > 50) go(-1);
        }}
      >
        <AnimatePresence initial={false}>
          {slide.type === "pair" ? (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 70 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -70 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex items-center justify-center gap-3 sm:gap-8 px-5"
            >
              {POSTERS.map((p) => (
                <img
                  key={p.src}
                  src={p.src}
                  alt={p.alt}
                  className="h-full w-auto object-contain"
                  draggable={false}
                />
              ))}
            </motion.div>
          ) : (
            <motion.img
              key={index}
              src={slide.src}
              alt={slide.alt}
              initial={{ opacity: 0, x: 70 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -70 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 w-full h-full object-contain"
              draggable={false}
            />
          )}
        </AnimatePresence>

        <button
          onClick={() => go(-1)}
          data-testid="carousel-prev"
          aria-label="Previous banner"
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/95 shadow-lg items-center justify-center text-navy hover:bg-signal hover:text-white transition-colors duration-200 z-10"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={() => go(1)}
          data-testid="carousel-next"
          aria-label="Next banner"
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/95 shadow-lg items-center justify-center text-navy hover:bg-signal hover:text-white transition-colors duration-200 z-10"
        >
          <ChevronRight size={22} />
        </button>
      </motion.div>

      <div className="flex items-center justify-center gap-2 bg-white py-2.5">
        {slides.map((s, bi) => (
          <button
            key={bi}
            onClick={() => setIndex(bi)}
            data-testid={`carousel-dot-${bi}`}
            aria-label={`Go to banner ${bi + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              bi === index ? "w-5 bg-signal" : "w-1.5 bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
