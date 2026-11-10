import {
  Cctv,
  Sun,
  Camera,
  Wifi,
  Fingerprint,
  BellRing,
  LockKeyhole,
  Network,
  HardDrive,
  Wrench,
  RefreshCcw,
  ClipboardCheck,
} from "lucide-react";
import { IMG } from "./site";

export const SERVICES = [
  {
    slug: "cctv-camera-installation",
    title: "CCTV Camera Installation",
    icon: Cctv,
    image: `${IMG}cfa0b8da9f0ce6b7b179745d2efe09dcd557cb99b1444f25ba559e08e5a7751e.jpeg`,
    short: "High-quality surveillance for complete safety of your property.",
    description:
      "Professional CCTV camera installation for homes, shops, offices and industrial sites in Chandrapur. We plan camera positions for full coverage, install bullet and dome cameras with neat cabling, and set up live viewing on your mobile so you can watch your property from anywhere.",
    benefits: [
      "Site assessment and camera placement plan",
      "Neat cabling, drilling and finishing",
      "Live remote viewing on your smartphone",
      "Genuine CP PLUS, DAICHI and compatible cameras",
    ],
  },
  {
    slug: "solar-cctv-installation",
    title: "Solar CCTV Installation",
    icon: Sun,
    image: `${IMG}c8812555f2750382b8253de39ba543eaa8e97bb282b9dd2dc6859b3a08265716.jpeg`,
    short: "Reliable surveillance powered by the sun, even off the grid.",
    description:
      "Solar-powered CCTV systems keep watch where mains power is unreliable or unavailable — farms, open plots, construction sites and remote gates. The camera unit runs on a solar panel with battery backup, recording through the day and night without a power connection.",
    benefits: [
      "Works without a mains power connection",
      "Ideal for remote sites, farms and open land",
      "Battery-backed day and night operation",
      "Weatherproof outdoor units",
    ],
  },
  {
    slug: "ip-camera-solutions",
    title: "IP Camera Solutions",
    icon: Camera,
    image: `${IMG}4e8fb401eecd2fb6f619cca49c0a80819c86bd1c5e0be5310a909383572442d3.jpeg`,
    short: "Sharp, high-resolution network cameras for modern premises.",
    description:
      "IP cameras deliver sharper image detail and smarter management over your existing network. We design scalable multi-camera IP setups for offices, showrooms and institutions, with tidy PoE wiring and NVR-based recording that grows as your premises grow.",
    benefits: [
      "High-resolution image detail for identification",
      "Scalable multi-camera network setup",
      "PoE-based tidy single-cable wiring",
      "NVR recording with remote access",
    ],
  },
  {
    slug: "wireless-cctv-systems",
    title: "Wireless CCTV Systems",
    icon: Wifi,
    image: `${IMG}fa7ac966bc87cdb147547206c742852c285d9fcc02747dd74c019823b4b48948.jpeg`,
    short: "Quick, low-drilling camera setups for homes and small shops.",
    description:
      "Wireless CCTV systems are the fastest way to secure a home, flat, small shop or rented premises. With minimal drilling and no long cable runs, cameras connect over Wi-Fi and stream live footage straight to your phone.",
    benefits: [
      "Quick installation with minimal drilling",
      "No long cable runs across the property",
      "Suitable for homes and rented spaces",
      "App-based live view and playback",
    ],
  },
  {
    slug: "biometric-attendance-systems",
    title: "Biometric Attendance Systems",
    icon: Fingerprint,
    image: `${IMG}4099eebddbc71ef69566d53c96257ef67321f17fbcd6e94261bcdf7443f9a382.jpeg`,
    short: "Accurate, secure attendance for offices, schools and factories.",
    description:
      "Stop buddy-punching and manual register errors with biometric attendance. We install fingerprint and face recognition attendance machines for offices, schools, clinics and factories, and configure attendance reports that your HR or administration can use directly.",
    benefits: [
      "Accurate, punctual attendance records",
      "Fingerprint and face recognition options",
      "Ready attendance reports for administration",
      "Eliminates manual register errors",
    ],
  },
  {
    slug: "video-door-phone-installation",
    title: "Video Door Phone Installation",
    icon: BellRing,
    image: `${IMG}2a6c3c38c4c082bfc3a8286692bee65ac590f5c1686b09f1195bbc58c68542f4.jpeg`,
    short: "See, speak and confirm visitors before opening the door.",
    description:
      "A video door phone lets you see and speak with whoever is at your gate or door before you open it. We install outdoor camera door units with clear indoor monitors for homes, apartments and offices, so visitors are confirmed, not guessed.",
    benefits: [
      "See and speak with visitors before entry",
      "Clear indoor monitor units",
      "Two-way audio with the door station",
      "Added safety for children and elderly at home",
    ],
  },
  {
    slug: "access-control-systems",
    title: "Access Control Systems",
    icon: LockKeyhole,
    image: `${IMG}350b3ff08ee021c8c4d6212bc3565a265e10409a7055f6f9217f10ea279adc94.jpeg`,
    short: "Secure and manage entry to your premises with confidence.",
    description:
      "Access control keeps unauthorised people out of sensitive areas. We install RFID card, PIN and reader-based door access systems for offices, stores, godowns and institutions, with electric lock integration so entry stays controlled and accountable.",
    benefits: [
      "Entry restricted to authorised people only",
      "RFID card and PIN based access options",
      "Door-level access logs and accountability",
      "Electric lock and door closure integration",
    ],
  },
  {
    slug: "networking-solutions",
    title: "Networking Solutions",
    icon: Network,
    image: `${IMG}edb975af9db238a1dea0232a3d6e996c6a195672f5a6241bbb2de340209979b7.jpeg`,
    short: "Reliable and high-speed network setup for homes and businesses.",
    description:
      "Every modern security system rides on a healthy network. We provide structured cabling, switch and router configuration, and rack organisation for homes, offices and institutions — the dependable backbone your CCTV, access control and internet share.",
    benefits: [
      "Structured cabling done the right way",
      "Switch, router and rack configuration",
      "Organised, labelled network cabinets",
      "Support for CCTV, internet and office networks",
    ],
  },
  {
    slug: "dvr-nvr-installation",
    title: "DVR and NVR Installation",
    icon: HardDrive,
    image: `${IMG}4025f23aaa708dafe1375281c10c0524e2e2157a37f42c2b3b227c8230a0ec4e.jpeg`,
    short: "Dependable recording systems sized to your cameras.",
    description:
      "The recorder is the heart of every CCTV system. We install and configure DVRs and NVRs with the right storage for your camera count and retention needs, set up motion and continuous recording, and enable secure playback on mobile and desktop.",
    benefits: [
      "Recorder and storage sized to your cameras",
      "Motion and scheduled recording setup",
      "Mobile and desktop playback configured",
      "Secure recorder configuration",
    ],
  },
  {
    slug: "cctv-repair-maintenance",
    title: "CCTV Repair and Maintenance",
    icon: Wrench,
    image: `${IMG}5fe9075f700c9fc994ef33630adbd3b5114947e7a8b90eb09cd605369338a4bb.jpeg`,
    short: "Fast diagnosis and repair to bring your cameras back online.",
    description:
      "No display, night vision failure, storage errors or dead channels — we diagnose and repair CCTV systems of all common makes. Our technicians check cameras, cabling, connectors, power supplies and the recorder to restore full coverage quickly.",
    benefits: [
      "Complete fault diagnosis and repair",
      "Camera, cable and connector fixing",
      "Power supply and storage troubleshooting",
      "Support for existing systems of all common makes",
    ],
  },
  {
    slug: "security-system-upgrades",
    title: "Security System Upgrades",
    icon: RefreshCcw,
    image: `${IMG}5652a6f3c5460d2d7b961c88edce06a92647c1b73f2390c165606381214af5f8.jpeg`,
    short: "Move from old analogue systems to modern HD surveillance.",
    description:
      "Old, blurry analogue systems give false confidence. We upgrade ageing CCTV installations to modern HD and IP cameras with sharper coverage, better night vision and mobile viewing — reusing working cabling and equipment wherever possible.",
    benefits: [
      "Sharper HD and IP coverage replacing old systems",
      "Reuse of working cabling where possible",
      "Modern remote viewing on your phone",
      "Phased upgrade planning to suit your budget",
    ],
  },
  {
    slug: "annual-maintenance-contracts",
    title: "Annual Maintenance Contracts (AMC)",
    icon: ClipboardCheck,
    image: `${IMG}507cd33c21105c48f59f5ec1e5241693a2820c3fe3753ae6ae91b4c09efe0952.jpeg`,
    short: "Scheduled care that keeps your security system dependable.",
    description:
      "An Annual Maintenance Contract keeps your security system in working order all year. Our scheduled visits cover camera inspection, recorder health checks, cabling and connector review and preventive cleaning, so faults are caught before they leave you blind.",
    benefits: [
      "Scheduled preventive maintenance visits",
      "Camera, recorder and cabling health checks",
      "Priority support during the contract period",
      "Continued reliable performance, year round",
    ],
  },
];

export const FEATURED_SLUGS = [
  "cctv-camera-installation",
  "solar-cctv-installation",
  "biometric-attendance-systems",
  "video-door-phone-installation",
  "access-control-systems",
  "networking-solutions",
];

export function getService(slug) {
  return SERVICES.find((s) => s.slug === slug);
}
