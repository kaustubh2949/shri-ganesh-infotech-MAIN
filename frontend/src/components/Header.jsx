import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Phone, MapPin, ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";
import WhatsAppIcon from "./WhatsAppIcon";
import { BUSINESS, waLink, DEFAULT_WA_MESSAGE } from "@/data/site";
import { SERVICES } from "@/data/services";
import { PRODUCT_CATEGORIES } from "@/data/products";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services", dropdown: "services" },
  { label: "Products", to: "/products", dropdown: "products" },
  { label: "Industries", to: "/industries" },
  { label: "AMC", to: "/amc" },
  { label: "Contact", to: "/contact" },
];

function navCls({ isActive }) {
  return `nav-link ${isActive ? "active" : ""}`;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setMobileSection(null);
  }, [location.pathname]);

  const wa = waLink(DEFAULT_WA_MESSAGE);

  return (
    <header className="relative z-50">
      {/* Top information bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3 flex items-center justify-between gap-3 sm:gap-4">
          <Link to="/" className="flex items-center gap-3 sm:gap-4" data-testid="header-logo" aria-label="Shri Ganesh Infotech home">
            <Logo />
            <span className="hidden md:block h-10 w-px bg-slate-200" />
            <span className="hidden md:block font-hindi leading-snug max-w-[230px]">
              <span className="block text-[13px] font-semibold text-navy">सुरक्षा का भरोसा, हर पल आपके साथ।</span>
              <span className="block text-[11px] text-slate-500 mt-0.5">आपके घर और कारोबार की सुरक्षा का विश्वसनीय साथी।</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <a
              href={BUSINESS.phoneTel}
              data-testid="topbar-call"
              className="flex items-center gap-3 group"
              aria-label={`Call us on ${BUSINESS.phoneDisplay}`}
            >
              <span className="h-10 w-10 rounded-full bg-navy flex items-center justify-center text-white group-hover:bg-signal transition-colors duration-200">
                <Phone size={18} />
              </span>
              <span className="leading-tight">
                <span className="block text-xs text-slate-500">Call Us</span>
                <span className="block font-display font-bold text-navy">{BUSINESS.phoneDisplay}</span>
              </span>
            </a>
            <span className="h-8 w-px bg-slate-200" />
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="topbar-whatsapp"
              className="flex items-center gap-3 group"
              aria-label="Chat with us on WhatsApp"
            >
              <span className="h-10 w-10 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                <WhatsAppIcon className="h-5 w-5" />
              </span>
              <span className="leading-tight">
                <span className="block text-xs text-slate-500">WhatsApp</span>
                <span className="block font-display font-bold text-navy">{BUSINESS.phoneDisplay}</span>
              </span>
            </a>
            <span className="h-8 w-px bg-slate-200" />
            <div className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-full bg-signal/10 flex items-center justify-center text-signal">
                <MapPin size={18} />
              </span>
              <span className="leading-tight">
                <span className="block text-xs text-slate-500">Location</span>
                <span className="block font-display font-bold text-navy">Chandrapur, Maharashtra</span>
              </span>
            </div>
          </div>
          <a
            href={BUSINESS.phoneTel}
            data-testid="topbar-call-mobile"
            className="md:hidden flex items-center gap-1.5 bg-navy text-white px-2.5 py-2 rounded-sm min-[400px]:px-3.5"
            aria-label={`Call us on ${BUSINESS.phoneDisplay}`}
          >
            <Phone size={16} />
            <span className="hidden min-[400px]:block font-display text-[13px] font-bold">Call Now</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <div className="sticky top-0 z-50 bg-navy shadow-lg shadow-navy/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="relative group">
                  <NavLink to={item.to} className={navCls} end={item.to === "/"} data-testid={`nav-${item.label.toLowerCase().replace(/\s/g, "-")}`}>
                    <span className="nav-pill">
                      <span className="flex items-center gap-1">
                        {item.label}
                        <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                      </span>
                    </span>
                  </NavLink>
                  <div className="absolute left-0 top-full pt-3 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-200">
                    {item.dropdown === "services" ? (
                      <div className="w-[640px] bg-white shadow-2xl border-t-2 border-signal p-6 grid grid-cols-2 gap-1">
                        {SERVICES.map((s) => (
                          <Link
                            key={s.slug}
                            to={`/services/${s.slug}`}
                            data-testid={`dropdown-service-${s.slug}`}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-sm hover:bg-cloud group/item"
                          >
                            <span className="h-9 w-9 shrink-0 bg-signal/10 text-signal flex items-center justify-center group-hover/item:bg-signal group-hover/item:text-white transition-colors duration-200">
                              <s.icon size={17} />
                            </span>
                            <span className="text-sm font-semibold text-navy">{s.title}</span>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="w-[560px] bg-white shadow-2xl border-t-2 border-signal p-6 grid grid-cols-2 gap-6">
                        {PRODUCT_CATEGORIES.map((c) => (
                          <div key={c.id}>
                            <Link to={`/products#${c.id}`} data-testid={`dropdown-product-${c.id}`} className="block font-display font-bold text-navy text-sm border-b border-slate-100 pb-2 mb-2 hover:text-signal transition-colors">
                              {c.name}
                            </Link>
                            <ul className="space-y-1.5">
                              {c.items.slice(0, 4).map((p) => (
                                <li key={p.name}>
                                  <Link to={`/products#${c.id}`} className="text-[13px] text-slate-500 hover:text-signal transition-colors">
                                    {p.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <NavLink key={item.label} to={item.to} className={navCls} end={item.to === "/"} data-testid={`nav-${item.label.toLowerCase().replace(/\s/g, "-")}`}>
                  <span className="nav-pill">{item.label}</span>
                </NavLink>
              )
            )}
          </nav>

          <button
            className="lg:hidden flex items-center gap-2 text-white py-2.5 font-display font-semibold"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            data-testid="mobile-menu-toggle"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
            <span className="text-sm tracking-wide">MENU</span>
          </button>

          <div className="hidden lg:flex items-center gap-2.5">
            {BUSINESS.brands.map((b) => (
              <span
                key={b}
                className="px-3.5 py-1.5 border border-white/25 rounded-sm font-display font-extrabold italic tracking-wide text-white text-sm"
              >
                {b}
                <sup className="text-[9px] text-signal not-italic">®</sup>
              </span>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-navy-800 border-t border-white/10 max-h-[70vh] overflow-y-auto" data-testid="mobile-menu">
            <div className="px-4 py-4 flex flex-col gap-1">
              {NAV.map((item) =>
                item.dropdown ? (
                  <div key={item.label}>
                    <button
                      className="w-full flex items-center justify-between px-3 py-3 text-white/90 font-display font-semibold"
                      onClick={() => setMobileSection(mobileSection === item.dropdown ? null : item.dropdown)}
                      aria-expanded={mobileSection === item.dropdown}
                      data-testid={`mobile-${item.dropdown}-toggle`}
                    >
                      {item.label}
                      <ChevronDown size={16} className={`transition-transform duration-200 ${mobileSection === item.dropdown ? "rotate-180" : ""}`} />
                    </button>
                    {mobileSection === item.dropdown && (
                      <div className="pb-3 grid grid-cols-1 gap-0.5">
                        {item.dropdown === "services"
                          ? SERVICES.map((s) => (
                              <Link key={s.slug} to={`/services/${s.slug}`} className="px-5 py-2.5 text-sm text-white/75 hover:text-white hover:bg-white/5" data-testid={`mobile-service-${s.slug}`}>
                                {s.title}
                              </Link>
                            ))
                          : PRODUCT_CATEGORIES.map((c) => (
                              <Link key={c.id} to={`/products#${c.id}`} className="px-5 py-2.5 text-sm text-white/75 hover:text-white hover:bg-white/5" data-testid={`mobile-product-${c.id}`}>
                                {c.name}
                              </Link>
                            ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={item.label} to={item.to} className="px-3 py-3 text-white/90 font-display font-semibold" data-testid={`mobile-nav-${item.label.toLowerCase().replace(/\s/g, "-")}`}>
                    {item.label}
                  </Link>
                )
              )}
              <a href={wa} target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-sm font-display font-bold" data-testid="mobile-menu-whatsapp">
                <WhatsAppIcon className="h-5 w-5" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
