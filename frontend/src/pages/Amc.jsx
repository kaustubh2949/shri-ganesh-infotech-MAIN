import {
  Wrench,
  Cctv,
  HardDrive,
  Cable,
  SearchCheck,
  ShieldCheck,
  RefreshCcw,
} from "lucide-react";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import QuoteForm from "@/components/QuoteForm";
import { IMG } from "@/data/site";

const COVERED = [
  { icon: Wrench, title: "CCTV System Maintenance", text: "Complete system check-up to keep every camera and recorder working as it should." },
  { icon: Cctv, title: "Camera Inspection", text: "Position, focus, image quality and night-vision review for every camera on site." },
  { icon: HardDrive, title: "DVR / NVR Health Checks", text: "Recording, storage and playback verified so footage is there when you need it." },
  { icon: Cable, title: "Cable & Connection Inspection", text: "Cabling, connectors and power joints checked and corrected before they fail." },
  { icon: SearchCheck, title: "System Troubleshooting", text: "Fault-finding for video loss, storage errors, power issues and playback problems." },
  { icon: ShieldCheck, title: "Preventive Maintenance", text: "Scheduled visits with cleaning and adjustments to prevent failures, not just fix them." },
  { icon: RefreshCcw, title: "Security System Upgrades", text: "Advice and installation of upgrades so your system keeps pace with your needs." },
];

export default function Amc() {
  return (
    <>
      <Seo
        title="CCTV AMC Services in Chandrapur | Shri Ganesh Infotech"
        description="Annual Maintenance Contracts for CCTV and security systems in Chandrapur — camera inspection, DVR/NVR health checks, cabling review, troubleshooting and preventive maintenance."
      />
      <PageHero
        crumb="AMC"
        eyebrow="Annual Maintenance Contract"
        title="AMC & Maintenance"
        highlight="services"
        sub="A security system only protects you while it works. Our Annual Maintenance Contracts keep your CCTV and security systems dependable all year."
      />

      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal className="relative order-2 lg:order-1">
            <img
              src={`${IMG}507cd33c21105c48f59f5ec1e5241693a2820c3fe3753ae6ae91b4c09efe0952.jpeg`}
              alt="Engineer inspecting a CCTV camera during a maintenance visit"
              loading="lazy"
              className="rounded-sm w-full h-60 sm:h-[400px] object-cover shadow-lg"
            />
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="Why AMC"
              title="Prevent failures — don't wait for"
              highlight="blind spots"
            />
            <Reveal delay={0.1}>
              <p className="mt-5 text-slate-600 leading-relaxed">
                Cameras fail quietly: a loose connector, a full hard drive, a
                power supply that dies in summer. Under an Annual Maintenance
                Contract, our engineers inspect, clean and health-check your
                system on a schedule — so problems are caught before they leave
                you unrecorded.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                AMC contracts are available for systems installed by us and for
                existing installations of common makes. Request assistance
                below and we will propose a maintenance plan suited to your
                system and site.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-navy bg-blueprint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            dark
            eyebrow="AMC Coverage"
            title="What our maintenance"
            highlight="covers"
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {COVERED.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 0.07} className="bg-navy">
                <div className="h-full px-6 py-8 hover:bg-navy-800 transition-colors duration-300" data-testid={`amc-item-${i}`}>
                  <c.icon size={26} className="text-signal" strokeWidth={1.7} />
                  <h3 className="mt-4 font-display font-bold text-white text-[15px] leading-snug">{c.title}</h3>
                  <p className="mt-2 text-xs text-white/55 leading-relaxed">{c.text}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.21} className="bg-signal">
              <div className="h-full px-6 py-8 flex flex-col justify-center">
                <h3 className="font-display font-extrabold text-white text-xl leading-snug">Request AMC Assistance</h3>
                <p className="mt-2 text-white/80 text-xs leading-relaxed">
                  Fill the form below — our team will get in touch to assess your system.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-cloud bg-blueprint-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Request AMC Assistance"
            title="Tell us about your"
            highlight="system"
            sub="Share a few details and your enquiry opens directly in WhatsApp for a quick response."
          />
          <Reveal className="mt-10 bg-white border border-slate-100 rounded-sm shadow-sm p-6 sm:p-10">
            <QuoteForm defaultService="Annual Maintenance Contract (AMC)" idPrefix="amc" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
