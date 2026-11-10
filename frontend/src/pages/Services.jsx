import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { BUSINESS, waLink, DEFAULT_WA_MESSAGE } from "@/data/site";
import { SERVICES } from "@/data/services";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function Services() {
  return (
    <>
      <Seo
        title="CCTV & Security Services in Chandrapur | Shri Ganesh Infotech"
        description="CCTV installation, solar CCTV, IP cameras, biometric attendance, video door phone, access control, networking, DVR/NVR, repair and AMC services in Chandrapur."
      />
      <PageHero
        crumb="Services"
        eyebrow="Our Services"
        title="Complete security & networking"
        highlight="services"
        sub="Twelve specialised services — from a single home camera to full commercial surveillance, attendance and access control systems."
      />

      <section className="py-20 sm:py-24 bg-cloud bg-blueprint-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.08}>
              <Link
                to={`/services/${s.slug}`}
                data-testid={`service-card-${s.slug}`}
                className="group flex flex-col h-full bg-white border border-slate-100 rounded-sm overflow-hidden shadow-sm hover:shadow-xl hover:shadow-navy/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute bottom-3 left-3 h-10 w-10 rounded-sm bg-white text-signal flex items-center justify-center shadow-md">
                    <s.icon size={19} />
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="font-display font-bold text-navy text-lg">{s.title}</h2>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed flex-1">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-signal">
                    Learn More <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display font-extrabold text-white text-2xl sm:text-3xl">Not sure which service you need?</h2>
            <p className="mt-2 text-white/65 text-sm">Describe your property on a call — we will recommend the right system, no obligation.</p>
          </div>
          <div className="flex gap-3">
            <a href={BUSINESS.phoneTel} data-testid="services-call" className="inline-flex items-center gap-2 bg-signal hover:bg-signal-dark text-white px-6 py-3.5 rounded-sm font-display font-bold transition-colors duration-200">
              <Phone size={17} /> Call Now
            </a>
            <a href={waLink(DEFAULT_WA_MESSAGE)} target="_blank" rel="noopener noreferrer" data-testid="services-whatsapp" className="inline-flex items-center gap-2 bg-white/10 border border-white/25 hover:bg-white/20 text-white px-6 py-3.5 rounded-sm font-display font-bold transition-colors duration-200">
              <WhatsAppIcon className="h-5 w-5" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
