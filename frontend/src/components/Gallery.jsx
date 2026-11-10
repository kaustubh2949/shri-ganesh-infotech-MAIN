import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery({ images, className = "" }) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (active === null) return;
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((a) => (a + 1) % images.length);
      if (e.key === "ArrowLeft") setActive((a) => (a - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, images.length]);

  return (
    <div>
      <div className={`grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 ${className}`}>
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setActive(i)}
            className="group relative overflow-hidden rounded-sm aspect-[4/3] focus:outline-none"
            data-testid={`gallery-item-${i}`}
            aria-label={`Open photo: ${img.caption}`}
          >
            <img
              src={img.src}
              alt={img.caption}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-colors duration-300" />
            <span className="absolute bottom-0 inset-x-0 bg-navy/85 text-white text-[11px] sm:text-xs px-3 py-2 text-left font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              {img.caption}
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy-900/95 flex items-center justify-center p-4"
            onClick={() => setActive(null)}
            data-testid="gallery-lightbox"
          >
            <button
              className="absolute top-5 right-5 h-11 w-11 rounded-sm bg-white/10 hover:bg-signal text-white flex items-center justify-center transition-colors"
              onClick={() => setActive(null)}
              aria-label="Close gallery"
              data-testid="lightbox-close"
            >
              <X size={20} />
            </button>
            <button
              className="absolute left-3 sm:left-8 h-11 w-11 rounded-sm bg-white/10 hover:bg-signal text-white flex items-center justify-center transition-colors"
              onClick={(e) => { e.stopPropagation(); setActive((active - 1 + images.length) % images.length); }}
              aria-label="Previous photo"
              data-testid="lightbox-prev"
            >
              <ChevronLeft size={22} />
            </button>
            <motion.figure
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={images[active].src} alt={images[active].caption} className="w-full max-h-[75vh] object-contain rounded-sm" />
              <figcaption className="mt-3 text-center text-white/80 text-sm">{images[active].caption}</figcaption>
            </motion.figure>
            <button
              className="absolute right-3 sm:right-8 h-11 w-11 rounded-sm bg-white/10 hover:bg-signal text-white flex items-center justify-center transition-colors"
              onClick={(e) => { e.stopPropagation(); setActive((active + 1) % images.length); }}
              aria-label="Next photo"
              data-testid="lightbox-next"
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
