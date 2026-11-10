import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { BUSINESS, waServiceLink } from "@/data/site";
import { SERVICES, getService } from "@/data/services";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);

  if (!service) {
    return (
      <div className="py-32 text-center">
        <h1 className="font-display font-extrabold text-navy text-3xl">Service not found</h1>
        <Link to="/services" className="mt-6 inline-block text-signal font-bold underline underline-offset-4">
          View all services
        </Link>
      </div>
    );
  }

  const related = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <Seo
        title={`${service.title} in Chandrapur | Shri Ganesh Infotech`}
        description={`${service.title} in Chandrapur by Shri Ganesh Infotech — ${service.short} Genuine products, expert installation and after-sales support. Call 074107 37766.`}
      />

      <section className="relative bg-navy bg-blueprint overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <nav className="flex items-center gap-1.5 text-xs text-white/50 font-medium" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-signal transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-signal transition-colors">Services</Link>
              <span>/</span>
              <span className="text-white/80">{service.title}</span>
            </nav>
            <div className="mt-6 flex items-center gap-3">
              <span className="h-12 w-12 rounded-sm bg-signal text-white flex items-center justify-center">
                <service.icon size={22} />
              </span>
              <span className="text-xs font-bold tracking-[0.22em] uppercase text-signal">Service</span>
            </div>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.08]">
              {service.title}
            </h1>
            <p className="mt-4 text-white/70 leading-relaxed max-w-xl">{service.short}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={BUSINESS.phoneTel} data-testid="service-call" className="inline-flex items-center gap-2 bg-signal hover:bg-signal-dark text-white px-6 py-3.5 rounded-sm font-display font-bold transition-colors duration-200">
                <Phone size={17} /> Call Now
              </a>
              <a
                href={waServiceLink(service.title)}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="service-whatsapp-enquiry"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/25 hover:bg-white/20 text-white px-6 py-3.5 rounded-sm font-display font-bold transition-colors duration-200"
              >
                <WhatsAppIcon className="h-5 w-5" /> Get a Quote
              </a>
            </div>
          </div>
          <Reveal className="relative">
            <img
              src={service.image}
              alt={service.title}
              className="rounded-sm w-full h-56 sm:h-[340px] object-cover shadow-lg"
            />
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-display font-extrabold text-navy text-2xl sm:text-3xl">
              About this service
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed text-lg">{service.description}</p>

            <h3 className="mt-10 font-display font-extrabold text-navy text-xl">Key benefits</h3>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 bg-cloud border border-slate-100 rounded-sm p-4">
                  <CheckCircle2 size={19} className="text-signal shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-navy leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 bg-cloud border-l-4 border-signal p-6 rounded-sm">
              <p className="text-navy font-semibold text-sm leading-relaxed">
                Every installation from SHRI GANESH INFOTECH uses genuine
                branded products with neat workmanship — and stays backed by
                our after-sales support and AMC options.
              </p>
            </div>
          </div>

          <aside>
            <div className="bg-navy rounded-sm p-7 sticky top-28">
              <h3 className="font-display font-bold text-white text-xl">Get a quote</h3>
              <p className="mt-2 text-white/60 text-sm leading-relaxed">
                Call or message us for {service.title.toLowerCase()} — we will
                suggest the right setup for your property.
              </p>
              <a href={BUSINESS.phoneTel} data-testid="service-sidebar-call" className="mt-5 flex items-center justify-center gap-2 bg-signal hover:bg-signal-dark text-white px-5 py-3.5 rounded-sm font-display font-bold transition-colors duration-200">
                <Phone size={16} /> {BUSINESS.phoneDisplay}
              </a>
              <a
                href={waServiceLink(service.title)}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="service-sidebar-whatsapp"
                className="mt-3 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1FAF54] text-white px-5 py-3.5 rounded-sm font-display font-bold transition-colors duration-200"
              >
                <WhatsAppIcon className="h-5 w-5" /> WhatsApp Enquiry
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-16 bg-cloud bg-blueprint-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-extrabold text-navy text-2xl">Explore other services</h2>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                to={`/services/${r.slug}`}
                data-testid={`related-service-${r.slug}`}
                className="group bg-white border border-slate-100 rounded-sm p-5 flex items-center gap-4 hover:shadow-lg hover:shadow-navy/10 transition-shadow duration-300"
              >
                <span className="h-11 w-11 shrink-0 rounded-sm bg-signal/10 text-signal flex items-center justify-center">
                  <r.icon size={19} />
                </span>
                <span className="font-display font-bold text-navy text-sm leading-snug">{r.title}</span>
                <ArrowRight size={16} className="ml-auto text-signal transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
