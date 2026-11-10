import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import QuoteForm from "@/components/QuoteForm";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { BUSINESS, waLink, DEFAULT_WA_MESSAGE } from "@/data/site";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us | Shri Ganesh Infotech — Chandrapur"
        description="Contact Shri Ganesh Infotech, Chandrapur — CCTV and security solutions. Call or WhatsApp 074107 37766. Shop No. 4, Raghav Apartment, Shri Ram Ward, Near Ramala Talav Road, Bazar Ward, Chandrapur."
      />
      <PageHero
        crumb="Contact"
        eyebrow="Contact Us"
        title="Let's secure what"
        highlight="matters to you"
        sub="Call, WhatsApp or send an enquiry — we will suggest the right security setup for your property."
      />

      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-4">
            <Reveal className="bg-white border border-slate-100 rounded-sm p-6 shadow-sm flex gap-4">
              <span className="h-12 w-12 shrink-0 rounded-sm bg-signal/10 text-signal flex items-center justify-center">
                <MapPin size={22} />
              </span>
              <div>
                <h2 className="font-display font-bold text-navy">Business Address</h2>
                <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">
                  {BUSINESS.address.lines.map((l) => <span key={l} className="block">{l}</span>)}
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Ramala+Talav+Road+Bazar+Ward+Chandrapur+Maharashtra+442402"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-map-directions"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-signal"
                >
                  Get Directions <ExternalLink size={14} />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.06} className="bg-white border border-slate-100 rounded-sm p-6 shadow-sm flex gap-4">
              <span className="h-12 w-12 shrink-0 rounded-sm bg-signal/10 text-signal flex items-center justify-center">
                <Phone size={22} />
              </span>
              <div>
                <h2 className="font-display font-bold text-navy">Phone</h2>
                <a href={BUSINESS.phoneTel} data-testid="contact-call" className="mt-1.5 block text-sm font-semibold text-navy hover:text-signal transition-colors">
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="bg-white border border-slate-100 rounded-sm p-6 shadow-sm flex gap-4">
              <span className="h-12 w-12 shrink-0 rounded-sm bg-[#25D366]/15 text-[#1FAF54] flex items-center justify-center">
                <WhatsAppIcon className="h-6 w-6" />
              </span>
              <div>
                <h2 className="font-display font-bold text-navy">WhatsApp</h2>
                <a
                  href={waLink(DEFAULT_WA_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-whatsapp"
                  className="mt-1.5 block text-sm font-semibold text-navy hover:text-signal transition-colors"
                >
                  {BUSINESS.phoneDisplay} — chat with us
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.18} className="bg-navy rounded-sm p-6 shadow-sm flex gap-4">
              <span className="h-12 w-12 shrink-0 rounded-sm bg-white/10 text-signal flex items-center justify-center">
                <Clock size={22} />
              </span>
              <div>
                <h2 className="font-display font-bold text-white">Business Hours</h2>
                <div className="mt-1.5 text-sm text-white/70 space-y-1">
                  {BUSINESS.hours.map((h) => (
                    <p key={h.days}>
                      <span className="text-white/50">{h.days}:</span> {h.time}
                    </p>
                  ))}
                  <p className="font-semibold text-white">{BUSINESS.hoursNote}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.24} className="rounded-sm overflow-hidden border border-slate-100 shadow-sm">
              <iframe
                title="Shri Ganesh Infotech location — Shri Ram Ward, Near Ramala Talav Road, Bazar Ward, Chandrapur"
                src="https://www.google.com/maps?q=Ramala%20Talav%20Road%2C%20Bazar%20Ward%2C%20Chandrapur%2C%20Maharashtra%20442402&output=embed"
                className="w-full h-72 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                data-testid="contact-map"
              />
            </Reveal>
          </div>

          <div className="lg:col-span-3">
            <Reveal className="bg-cloud border border-slate-100 rounded-sm p-6 sm:p-10">
              <h2 className="font-display font-extrabold text-navy text-2xl sm:text-3xl">Send an enquiry</h2>
              <p className="mt-2 text-sm text-slate-500">
                Fill in your requirement — your message opens directly in
                WhatsApp so nothing gets lost in an inbox.
              </p>
              <div className="mt-8">
                <QuoteForm idPrefix="contact" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
