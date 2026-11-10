import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MessageSquareText } from "lucide-react";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { waProductLink, BUSINESS, POSTERS } from "@/data/site";
import { PRODUCT_CATEGORIES } from "@/data/products";

export default function Products() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 150);
    }
  }, [hash]);

  return (
    <>
      <Seo
        title="CCTV & Security Products in Chandrapur | Shri Ganesh Infotech"
        description="CCTV cameras, DVR, NVR, cables, SMPS, biometric and access control products in Chandrapur. CP PLUS, DAICHI and other genuine compatible brands — enquire on WhatsApp."
      />
      <PageHero
        crumb="Products"
        eyebrow="Product Catalogue"
        title="Genuine security products,"
        highlight="properly installed"
        sub="We deal in CP PLUS, DAICHI and other available compatible genuine security brands. Enquire for availability, specifications and pricing."
      />

      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold text-slate-500">Brands we deal in:</span>
            {BUSINESS.brands.map((b) => (
              <span key={b} className="px-3.5 py-1.5 border border-navy/15 bg-cloud rounded-sm font-display font-extrabold italic text-navy text-sm">
                {b}
              </span>
            ))}
            <span className="text-sm text-slate-500">+ other available compatible brands</span>
          </div>

          <Reveal className="mt-12">
            <div className="flex items-center gap-4">
              <span className="h-10 w-1.5 bg-signal" aria-hidden="true" />
              <div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400">Brand Showcase</p>
                <h2 className="font-display font-extrabold text-navy text-2xl sm:text-3xl">DAICHI Poster Collection</h2>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl sm:max-w-4xl">
              {POSTERS.map((p) => (
                <a
                  key={p.slug}
                  href={waProductLink(p.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`brand-poster-${p.slug}`}
                  aria-label={`Enquire about ${p.name}`}
                  className="group block rounded-sm overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  <img src={p.src} alt={p.alt} loading="lazy" className="w-full h-auto" />
                </a>
              ))}
            </div>
          </Reveal>

          {PRODUCT_CATEGORIES.map((cat, ci) => (
            <div key={cat.id} id={cat.id} className={ci === 0 ? "mt-12" : "mt-16 scroll-mt-32"}>
              <Reveal className="flex items-center gap-4">
                <span className="h-10 w-1.5 bg-signal" aria-hidden="true" />
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400">Category {String(ci + 1).padStart(2, "0")}</p>
                  <h2 className="font-display font-extrabold text-navy text-2xl sm:text-3xl">{cat.name}</h2>
                </div>
              </Reveal>

              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {cat.items.map((p, i) => (
                  <Reveal key={p.name} delay={(i % 4) * 0.06}>
                    <div
                      className="group h-full bg-white border border-slate-100 rounded-sm overflow-hidden shadow-sm hover:shadow-xl hover:shadow-navy/10 hover:-translate-y-1 transition-all duration-300 flex flex-col"
                      data-testid={`product-card-${p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    >
                      <div className="aspect-square overflow-hidden bg-cloud">
                        <img
                          src={p.image}
                          alt={p.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <h3 className="font-display font-bold text-navy">{p.name}</h3>
                        <p className="mt-1.5 text-xs text-slate-500 leading-relaxed flex-1">{p.blurb}</p>
                        <a
                          href={waProductLink(p.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-testid={`product-enquire-${p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                          className="mt-4 inline-flex items-center justify-center gap-2 bg-navy hover:bg-signal text-white text-sm px-4 py-2.5 rounded-sm font-display font-bold transition-colors duration-200"
                        >
                          <MessageSquareText size={15} /> Enquire on WhatsApp
                        </a>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}

          <Reveal className="mt-16 bg-navy rounded-sm p-8 sm:p-10 text-center">
            <h2 className="font-display font-extrabold text-white text-2xl sm:text-3xl">
              Need help choosing the right product?
            </h2>
            <p className="mt-3 text-white/65 text-sm max-w-2xl mx-auto">
              Tell us your property and what you want to secure — we will
              recommend the right cameras, recorder and accessories.
            </p>
            <a
              href={waProductLink("a CCTV or security product")}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="products-help-whatsapp"
              className="mt-6 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1FAF54] text-white px-7 py-3.5 rounded-sm font-display font-bold transition-colors duration-200"
            >
              <WhatsAppIcon className="h-5 w-5" /> Chat With Us
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
