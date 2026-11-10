import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  Wrench,
  Headset,
  BadgeCheck,
  Award,
  Cctv,
  MapPin,
  Clock,
  CheckCircle2,
  CalendarCheck,
  ClipboardCheck,
} from "lucide-react";
import Seo from "@/components/Seo";
import Reveal, { MaskedLine, EASE } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/Marquee";
import BrandCarousel from "@/components/BrandCarousel";
import Gallery from "@/components/Gallery";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { BUSINESS, waLink, DEFAULT_WA_MESSAGE, waServiceLink, IMG, IMAGES, HINDI } from "@/data/site";
import { SERVICES, FEATURED_SLUGS } from "@/data/services";
import { INDUSTRIES } from "@/data/industries";

const featured = FEATURED_SLUGS.map((slug) => SERVICES.find((s) => s.slug === slug));

const TRUST = [
  { icon: ShieldCheck, title: "Genuine Products", sub: "CP PLUS | DAICHI & More" },
  { icon: Wrench, title: "Expert Installation", sub: "By Trained Technicians" },
  { icon: Headset, title: "AMC Support", sub: "Annual Maintenance Contracts" },
  { icon: BadgeCheck, title: "After-Sales Service", sub: "Fast & Reliable Support" },
];

const WHY = [
  { icon: Award, title: "5+ Years of Experience", sub: "Security solutions expertise" },
  { icon: Cctv, title: "1,000+ Installations", sub: "Security installations completed" },
  { icon: BadgeCheck, title: "Genuine Branded Products", sub: "CP PLUS | DAICHI & compatible brands" },
  { icon: Wrench, title: "Expert Installation", sub: "Neat work by trained technicians" },
  { icon: ClipboardCheck, title: "AMC Available", sub: "Year-round system care" },
  { icon: Headset, title: "Reliable After-Sales Support", sub: "We stay available after installation" },
];

const GALLERY = [
  { src: IMAGES.hero, caption: "Commercial premises under watch" },
  { src: `${IMG}cfa0b8da9f0ce6b7b179745d2efe09dcd557cb99b1444f25ba559e08e5a7751e.jpeg`, caption: "CCTV camera installation" },
  { src: IMAGES.aboutTeam, caption: "Our technicians at work" },
  { src: `${IMG}c8812555f2750382b8253de39ba543eaa8e97bb282b9dd2dc6859b3a08265716.jpeg`, caption: "Solar CCTV setup" },
  { src: "https://images.unsplash.com/photo-1765366417030-16d9765d920a?crop=entropy&cs=srgb&fm=jpg&q=80", caption: "Office surveillance" },
  { src: "https://images.unsplash.com/photo-1771033834141-023d630b3965?crop=entropy&cs=srgb&fm=jpg&q=80", caption: "Retail store coverage" },
  { src: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?crop=entropy&cs=srgb&fm=jpg&q=80", caption: "Industrial surveillance" },
  { src: `${IMG}2a6c3c38c4c082bfc3a8286692bee65ac590f5c1686b09f1195bbc58c68542f4.jpeg`, caption: "Video door phone at a residence" },
];

function HeroContent() {
  return (
    <div className="md:max-w-[55%] lg:max-w-[46%]">
      <h1 className="font-display font-black tracking-tight text-white leading-[1.07] text-[1.6rem] sm:text-4xl lg:text-[3.35rem]">
        <MaskedLine delay={0.15}>Smart Security.</MaskedLine>
        <MaskedLine delay={0.3}>Complete Protection.</MaskedLine>
        <MaskedLine delay={0.45}>
          <span className="text-signal">Total Peace of Mind.</span>
        </MaskedLine>
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.75 }}
        className="mt-3.5 md:mt-5 text-sm sm:text-lg text-white/75 leading-relaxed"
      >
        Your trusted security partner in Chandrapur, delivering advanced CCTV
        surveillance, solar CCTV, biometric and access control solutions with
        5+ years of experience and 1,000+ installations.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.9 }}
        className="mt-4 md:mt-6 grid grid-cols-1 sm:flex gap-2.5 sm:gap-3"
      >
        <a
          href={BUSINESS.phoneTel}
          data-testid="hero-call-now"
          className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-signal hover:bg-signal-dark text-white px-5 md:px-7 py-3 md:py-3.5 rounded-sm font-display font-bold tracking-wide text-sm sm:text-base transition-colors duration-200"
        >
          <Phone size={17} /> Call Now
        </a>
        <a
          href={waLink(DEFAULT_WA_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="hero-whatsapp"
          className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-5 md:px-7 py-3 md:py-3.5 rounded-sm font-display font-bold tracking-wide text-sm sm:text-base transition-colors duration-200"
        >
          <WhatsAppIcon className="h-5 w-5" /> Chat on WhatsApp
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE, delay: 1.2 }}
        className="mt-4 md:mt-6 flex items-start gap-3"
        data-testid="hero-hindi-slogan"
      >
        <span className="mt-1 h-9 w-1 rounded-full bg-signal shrink-0" aria-hidden="true" />
        <div>
          <p className="font-hindi text-[15px] md:text-lg font-semibold text-white/90 leading-snug">{HINDI.slogan1}</p>
          <p className="font-hindi text-[12px] md:text-sm text-white/55 mt-0.5 leading-snug">{HINDI.slogan1sub}</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay: 1.05 }}
        className="mt-4 md:mt-6 grid grid-cols-2 gap-2.5 sm:gap-3 max-w-md"
      >
        {[
          { icon: Award, big: BUSINESS.stats.experience, label: "Years of Experience", sub: "Security solutions expertise" },
          { icon: Cctv, big: BUSINESS.stats.installations, label: "Installations", sub: "Security installations completed" },
        ].map((s) => (
          <div
            key={s.label}
            data-testid={`hero-stat-${s.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
            className="flex items-center gap-2.5 md:gap-4 border border-white/20 bg-navy-800/60 md:bg-white/5 px-3 md:px-5 py-2.5 md:py-4 rounded-sm backdrop-blur-[2px]"
          >
            <s.icon size={24} strokeWidth={1.8} className="text-signal shrink-0 md:hidden" />
            <s.icon size={34} strokeWidth={1.6} className="text-signal shrink-0 hidden md:block" />
            <div className="min-w-0">
              <p className="font-display font-extrabold text-white text-xl md:text-3xl leading-none">{s.big}</p>
              <p className="text-white font-semibold text-[11px] md:text-sm mt-0.5 md:mt-1 leading-tight">{s.label}</p>
              <p className="hidden lg:block text-white/55 text-xs mt-0.5">{s.sub}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 36]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1.16]);

  return (
    <section
      ref={ref}
      className="relative bg-navy overflow-hidden md:h-[620px] lg:h-[600px]"
      data-testid="hero"
    >
      {/* Desktop: dominant camera photo right, navy overlay left for text */}
      <div className="hidden md:block absolute inset-0">
        <motion.img
          src={IMAGES.heroDesktop}
          alt="Professional white bullet CCTV camera mounted on a modern commercial building at dusk"
          style={{ y, scale }}
          className="absolute inset-y-0 right-0 h-full w-[62%] object-cover object-right"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-navy from-38% via-navy/70 to-transparent"
          aria-hidden="true"
        />
        <div className="absolute inset-y-0 left-0 w-[42%] bg-blueprint opacity-60" aria-hidden="true" />
      </div>

      <div className="relative z-10 hidden md:block h-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="h-full flex flex-col justify-center pb-10">
          <HeroContent />
        </div>
      </div>

      {/* Mobile: camera band on top, solid navy text panel below — content never overlaps the camera */}
      <div className="md:hidden">
        <div className="relative h-64">
          <img
            src={IMAGES.heroMobile}
            alt="Professional white bullet CCTV camera mounted on a commercial building"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-navy/10 via-transparent to-navy"
            aria-hidden="true"
          />
        </div>
        <div className="relative px-5 pt-5 pb-10">
          <HeroContent />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Seo
        title="CCTV Camera Installation in Chandrapur | Shri Ganesh Infotech"
        description="Trusted CCTV camera installation in Chandrapur — solar CCTV, biometric attendance, access control, networking & AMC. 5+ years experience, 1,000+ installations."
      />
      <Hero />

      {/* Trust strip */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:-mt-10 lg:-mt-12">
        <Reveal className="bg-white shadow-xl shadow-navy/10 border border-slate-100 grid grid-cols-2 lg:grid-cols-4">
          {TRUST.map((t, i) => (
            <div
              key={t.title}
              data-testid={`trust-item-${t.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className={`flex items-center gap-3 sm:gap-4 px-4 py-4 sm:px-6 sm:py-6 ${i < TRUST.length - 1 ? "border-b lg:border-b-0 border-r border-slate-100" : ""} ${i === 2 ? "lg:border-r border-slate-100" : ""}`}
            >
              <span className="h-9 w-9 sm:h-12 sm:w-12 shrink-0 rounded-sm bg-signal/10 text-signal flex items-center justify-center">
                <t.icon size={18} className="sm:hidden" />
                <t.icon size={22} className="hidden sm:block" />
              </span>
              <div className="min-w-0">
                <p className="font-display font-bold text-navy text-[13px] sm:text-[15px] leading-tight">{t.title}</p>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 sm:mt-1 leading-tight">{t.sub}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>

      <div className="mt-6 sm:mt-10">
        <BrandCarousel />
      </div>

      {/* About teaser */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal className="relative mb-6 sm:mb-0">
            <img
              src={IMAGES.aboutTeam}
              alt="Shri Ganesh Infotech technicians installing a surveillance camera"
              loading="lazy"
              className="rounded-sm w-full h-64 sm:h-[420px] object-cover shadow-lg"
            />
            <div className="absolute bottom-4 right-4 bg-navy/95 text-white px-4 sm:px-6 py-2.5 sm:py-4 rounded-sm shadow-xl">
              <p className="font-display font-extrabold text-lg sm:text-2xl leading-none">{BUSINESS.stats.installations}</p>
              <p className="text-[10px] sm:text-xs text-white/70 mt-0.5 sm:mt-1">Installations completed</p>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="About Us"
              title="Security solutions Chandrapur trusts,"
              highlight="installed right the first time"
            />
            <Reveal delay={0.1}>
              <p className="mt-5 text-slate-600 leading-relaxed">
                SHRI GANESH INFOTECH provides CCTV surveillance, security,
                biometric attendance, access control, networking and related
                installation services in Chandrapur, Maharashtra. From a single
                home camera to multi-floor commercial systems, every project
                gets the same careful planning, genuine branded products and
                neat workmanship.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {["Professional installation", "Security-focused solutions", "Residential & commercial projects", "Genuine branded products", "Technical support", "Maintenance services"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-navy">
                    <CheckCircle2 size={17} className="text-signal shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                data-testid="home-about-more"
                className="mt-8 inline-flex items-center gap-2 bg-navy hover:bg-steel text-white px-7 py-3.5 rounded-sm font-display font-bold tracking-wide transition-colors duration-200"
              >
                More About Us <ArrowRight size={17} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 sm:py-20 lg:py-24 bg-cloud bg-blueprint-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Do"
            title="Our Security"
            highlight="Solutions"
            sub="Complete range of security and networking solutions for homes, businesses and institutions."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                <Link
                  to={`/services/${s.slug}`}
                  data-testid={`service-card-${s.slug}`}
                  className="group block bg-white border border-slate-100 rounded-sm overflow-hidden shadow-sm hover:shadow-xl hover:shadow-navy/10 hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <div className="relative h-40 sm:h-44 overflow-hidden">
                    <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span className="absolute bottom-3 left-3 h-10 w-10 rounded-sm bg-white text-signal flex items-center justify-center shadow-md">
                      <s.icon size={19} />
                    </span>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="font-display font-bold text-navy text-lg">{s.title}</h3>
                    <p className="mt-2 text-sm text-slate-500 leading-relaxed">{s.short}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-signal">
                      Learn More <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link
              to="/services"
              data-testid="home-all-services"
              className="inline-flex items-center gap-2 bg-navy hover:bg-steel text-white px-8 py-3.5 rounded-sm font-display font-bold tracking-wide transition-colors duration-200"
            >
              View All 12 Services <ArrowRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-14 sm:py-20 lg:py-24 bg-navy bg-blueprint relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10">
            <Reveal className="lg:col-span-4">
              <span className="flex items-center gap-3 text-xs font-bold tracking-[0.22em] uppercase text-signal">
                <span className="h-[2px] w-8 bg-signal" /> Why Choose Us
              </span>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Why Choose
                <br />
                SHRI GANESH INFOTECH?
              </h2>
              <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-xs">
                Local, established and accountable — we secure Chandrapur with
                genuine products and proper installation.
              </p>
            </Reveal>
            <div className="lg:col-span-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
              {WHY.map((w, i) => (
                <Reveal key={w.title} delay={i * 0.06} className="bg-navy">
                  <div className="h-full px-5 py-6 sm:px-6 sm:py-8 hover:bg-navy-800 transition-colors duration-300">
                    <w.icon size={26} className="text-signal" strokeWidth={1.7} />
                    <p className="mt-4 font-display font-bold text-white text-[15px] leading-snug">{w.title}</p>
                    <p className="mt-1.5 text-xs text-white/50 leading-relaxed">{w.sub}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* Industries preview */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Security for every kind of"
            highlight="property"
            sub="From homes and shops to factories and construction sites — the right surveillance for every environment."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.slice(0, 6).map((ind, i) => (
              <Reveal key={ind.title} delay={(i % 3) * 0.08}>
                <div className="group relative h-44 sm:h-56 rounded-sm overflow-hidden" data-testid={`industry-card-${i}`}>
                  <img src={ind.image} alt={ind.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                  <div className="absolute bottom-0 p-5">
                    <ind.icon size={20} className="text-signal" />
                    <h3 className="mt-2 font-display font-bold text-white">{ind.title}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link
              to="/industries"
              data-testid="home-all-industries"
              className="inline-flex items-center gap-2 border-2 border-navy text-navy hover:bg-navy hover:text-white px-8 py-3.5 rounded-sm font-display font-bold tracking-wide transition-colors duration-200"
            >
              All Industries We Serve <ArrowRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Project gallery */}
      <section className="py-14 sm:py-20 lg:py-24 bg-cloud bg-blueprint-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Project Gallery"
            title="Our work,"
            highlight="on the wall"
            sub="Installation and surveillance work across homes, businesses and industries."
          />
          <Reveal className="mt-12">
            <Gallery images={GALLERY} />
            <p className="mt-4 text-xs text-slate-400">
              Illustrative photographs shown for representation of our range of work.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Visit / hours / CTA */}
      <section className="pb-14 sm:pb-20 lg:pb-24 pt-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6">
          <Reveal className="bg-white border border-slate-100 rounded-sm p-5 sm:p-7 shadow-sm">
            <span className="h-12 w-12 rounded-sm bg-signal/10 text-signal flex items-center justify-center">
              <MapPin size={22} />
            </span>
            <h3 className="mt-4 font-display font-bold text-navy text-lg">Our Office</h3>
            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
              {BUSINESS.address.lines.map((l) => <span key={l} className="block">{l}</span>)}
            </p>
          </Reveal>
          <Reveal delay={0.08} className="bg-white border border-slate-100 rounded-sm p-5 sm:p-7 shadow-sm">
            <span className="h-12 w-12 rounded-sm bg-signal/10 text-signal flex items-center justify-center">
              <Clock size={22} />
            </span>
            <h3 className="mt-4 font-display font-bold text-navy text-lg">Business Hours</h3>
            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
              {BUSINESS.hours.map((h) => (
                <span key={h.days} className="block">{h.days}: {h.time}</span>
              ))}
              <span className="block mt-1 font-semibold text-navy">{BUSINESS.hoursNote}</span>
            </p>
          </Reveal>
          <Reveal delay={0.16} className="bg-signal rounded-sm p-5 sm:p-7 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-6 -top-6 h-24 w-24 border-4 border-white/15 rotate-45" aria-hidden="true" />
            <div>
              <CalendarCheck size={30} />
              <h3 className="mt-4 font-display font-bold text-2xl leading-snug">Get a Free Site Visit &amp; Quote</h3>
              <p className="mt-2 text-sm text-white/80">Tell us what you need to secure — we will suggest the right system.</p>
              <p className="mt-2 font-hindi text-[15px] text-white/95" data-testid="cta-hindi-slogan">{HINDI.slogan2}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={BUSINESS.phoneTel} data-testid="home-cta-call" className="bg-white text-signal hover:bg-navy hover:text-white px-5 py-3 rounded-sm font-display font-bold text-sm transition-colors duration-200">
                Call {BUSINESS.phoneDisplay}
              </a>
              <a href={waLink(DEFAULT_WA_MESSAGE)} target="_blank" rel="noopener noreferrer" data-testid="home-cta-whatsapp" className="bg-navy hover:bg-navy-800 text-white px-5 py-3 rounded-sm font-display font-bold text-sm transition-colors duration-200 flex items-center gap-2">
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
