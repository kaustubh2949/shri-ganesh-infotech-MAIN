import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { MaskedLine } from "./Reveal";

export default function PageHero({ eyebrow, title, highlight, sub, crumb }) {
  return (
    <section className="relative bg-navy bg-blueprint overflow-hidden">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[24px] border-white/5" aria-hidden="true" />
      <div className="absolute right-32 bottom-0 h-40 w-40 bg-signal/10 rotate-45" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <nav className="flex items-center gap-1.5 text-xs text-white/50 font-medium" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-signal transition-colors">Home</Link>
          <ChevronRight size={12} />
          <span className="text-white/80">{crumb}</span>
        </nav>
        {eyebrow && (
          <span className="mt-6 flex items-center gap-3 text-xs font-bold tracking-[0.22em] uppercase text-signal">
            <span className="h-[2px] w-8 bg-signal" /> {eyebrow}
          </span>
        )}
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.08]">
          <MaskedLine delay={0.05}>{title}</MaskedLine>
          {highlight && <MaskedLine delay={0.18}><span className="text-signal">{highlight}</span></MaskedLine>}
        </h1>
        {sub && <p className="mt-5 max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed">{sub}</p>}
      </div>
    </section>
  );
}
