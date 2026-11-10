import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Eye, Target } from "lucide-react";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { BUSINESS, IMAGES } from "@/data/site";

const CHOOSE = [
  "Professional installation by trained technicians",
  "Security-focused solutions, not one-size-fits-all",
  "Residential and commercial project experience",
  "Genuine branded products — CP PLUS, DAICHI & more",
  "Responsive technical support",
  "Maintenance services and AMC options",
];

export default function About() {
  return (
    <>
      <Seo
        title="About Us | Shri Ganesh Infotech — Security Systems in Chandrapur"
        description="Shri Ganesh Infotech provides CCTV surveillance, biometric attendance, access control and networking installation services in Chandrapur with 5+ years of experience and 1,000+ installations."
      />
      <PageHero
        crumb="About Us"
        eyebrow="About Us"
        title="SHRI GANESH INFOTECH"
        highlight=""
        sub="Your trusted security partner in Chandrapur — securing homes, businesses and institutions with genuine products and professional installation."
      />

      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Who We Are"
              title="A local security team that treats every premises like"
              highlight="its own"
            />
            <Reveal delay={0.1}>
              <p className="mt-5 text-slate-600 leading-relaxed">
                SHRI GANESH INFOTECH provides CCTV surveillance, security,
                biometric attendance, access control, networking and related
                installation services in Chandrapur, Maharashtra. With over{" "}
                <strong className="text-navy">5 years of experience</strong> and more than{" "}
                <strong className="text-navy">1,000 installations</strong>, we
                design systems around how your property actually lives and
                works — entrances, blind spots, stock, staff and visitors.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                We work on residential and commercial projects alike, dealing
                in genuine CP PLUS, DAICHI and other compatible security
                brands. From the first site visit to after-sales support and
                maintenance, our job is to make sure your system works on day
                one — and keeps working.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
                <div className="border-l-4 border-signal pl-4">
                  <p className="font-display font-extrabold text-navy text-3xl">{BUSINESS.stats.experience}</p>
                  <p className="text-sm text-slate-500">Years of Experience</p>
                </div>
                <div className="border-l-4 border-signal pl-4">
                  <p className="font-display font-extrabold text-navy text-3xl">{BUSINESS.stats.installations}</p>
                  <p className="text-sm text-slate-500">Installations</p>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal className="relative">
            <img
              src={IMAGES.aboutTeam}
              alt="Shri Ganesh Infotech technicians at an installation site"
              loading="lazy"
              className="rounded-sm w-full h-64 sm:h-[440px] object-cover shadow-lg"
            />
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-20 sm:py-24 bg-navy bg-blueprint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          {[
            {
              icon: Target,
              title: "Our Mission",
              text: "To make professional-grade security accessible to every home, shop, office and institution in Chandrapur — through genuine products, honest advice and installations done right the first time.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              text: "To be the security partner Chandrapur recommends by name — known for systems that stay reliable year after year and support that actually answers.",
            },
          ].map((m, i) => (
            <Reveal key={m.title} delay={i * 0.1} className="border border-white/15 bg-navy-800/60 rounded-sm p-8 sm:p-10">
              <m.icon size={30} className="text-signal" strokeWidth={1.7} />
              <h3 className="mt-4 font-display font-bold text-white text-2xl">{m.title}</h3>
              <p className="mt-3 text-white/65 leading-relaxed text-sm sm:text-base">{m.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why customers choose us */}
      <section className="py-20 sm:py-24 bg-cloud bg-blueprint-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="What customers get with"
            highlight="every installation"
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {CHOOSE.map((c, i) => (
              <Reveal key={c} delay={(i % 3) * 0.08} className="bg-white border border-slate-100 rounded-sm p-6 shadow-sm flex items-start gap-3">
                <CheckCircle2 size={20} className="text-signal shrink-0 mt-0.5" />
                <p className="font-semibold text-navy text-sm leading-relaxed">{c}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Link
              to="/services"
              data-testid="about-explore-services"
              className="inline-flex items-center gap-2 bg-signal hover:bg-signal-dark text-white px-8 py-3.5 rounded-sm font-display font-bold tracking-wide transition-colors duration-200"
            >
              Explore Our Services <ArrowRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
