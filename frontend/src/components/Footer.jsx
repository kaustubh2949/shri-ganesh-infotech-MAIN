import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import WhatsAppIcon from "./WhatsAppIcon";
import { BUSINESS, waLink, DEFAULT_WA_MESSAGE } from "@/data/site";
import { SERVICES } from "@/data/services";
import { PRODUCT_CATEGORIES } from "@/data/products";

const QUICK = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Industries", to: "/industries" },
  { label: "AMC", to: "/amc" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-5 text-sm leading-relaxed max-w-sm">
              Your trusted security partner in Chandrapur — delivering CCTV
              surveillance, solar CCTV, biometric attendance, access control
              and networking solutions for homes and businesses.
              <span className="block mt-3 font-hindi text-[13px] text-signal" data-testid="footer-hindi-slogan">
                सुरक्षा का भरोसा, हर पल आपके साथ।
              </span>
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              {BUSINESS.brands.map((b) => (
                <span key={b} className="px-3 py-1.5 border border-white/20 rounded-sm font-display font-extrabold italic text-white text-xs tracking-wide">
                  {b}
                </span>
              ))}
              <span className="text-xs">+ other genuine brands</span>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display font-bold text-white text-sm tracking-[0.18em] uppercase">Quick Links</h3>
            <ul className="mt-5 space-y-2.5">
              {QUICK.map((q) => (
                <li key={q.label}>
                  <Link to={q.to} className="text-sm hover:text-signal transition-colors duration-200" data-testid={`footer-link-${q.label.toLowerCase().replace(/\s/g, "-")}`}>
                    {q.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display font-bold text-white text-sm tracking-[0.18em] uppercase">Services</h3>
            <ul className="mt-5 space-y-2.5">
              {SERVICES.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-sm hover:text-signal transition-colors duration-200" data-testid={`footer-service-${s.slug}`}>
                    {s.title.replace(" Installation", "")}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-sm font-semibold text-signal inline-flex items-center gap-1">
                  All 12 services <ArrowUpRight size={14} />
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="font-display font-bold text-white text-sm tracking-[0.18em] uppercase">Products</h3>
            <ul className="mt-5 space-y-2.5">
              {PRODUCT_CATEGORIES.map((c) => (
                <li key={c.id}>
                  <Link to={`/products#${c.id}`} className="text-sm hover:text-signal transition-colors duration-200" data-testid={`footer-product-${c.id}`}>
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display font-bold text-white text-sm tracking-[0.18em] uppercase">Contact</h3>
            <div className="mt-5 space-y-4 text-sm">
              <p className="flex gap-3">
                <MapPin size={16} className="text-signal shrink-0 mt-0.5" />
                <span>
                  {BUSINESS.address.lines.map((l) => (
                    <span key={l} className="block">{l}</span>
                  ))}
                </span>
              </p>
              <a href={BUSINESS.phoneTel} className="flex items-center gap-3 hover:text-signal transition-colors" data-testid="footer-call">
                <Phone size={16} className="text-signal shrink-0" /> {BUSINESS.phoneDisplay}
              </a>
              <a href={waLink(DEFAULT_WA_MESSAGE)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-signal transition-colors" data-testid="footer-whatsapp">
                <WhatsAppIcon className="h-4 w-4 text-[#25D366] shrink-0" /> {BUSINESS.phoneDisplay}
              </a>
              <p className="flex gap-3">
                <Clock size={16} className="text-signal shrink-0 mt-0.5" />
                <span>
                  {BUSINESS.hours.map((h) => (
                    <span key={h.days} className="block">{h.days}: {h.time}</span>
                  ))}
                  <span className="block mt-1 text-white/50">{BUSINESS.hoursNote}</span>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50" data-testid="footer-copyright">
            © 2026 SHRI GANESH INFOTECH. All Rights Reserved.
          </p>
          <p className="text-xs text-white/50">CCTV • Solar CCTV • Biometric • Access Control • Networking — Chandrapur, Maharashtra</p>
        </div>
      </div>
    </footer>
  );
}
