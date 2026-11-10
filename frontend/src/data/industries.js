import {
  House,
  Store,
  Building2,
  GraduationCap,
  HeartPulse,
  Factory,
  Warehouse,
  Hotel,
  Building,
  HardHat,
} from "lucide-react";

const U = (id) =>
  `https://images.unsplash.com/${id}?crop=entropy&cs=srgb&fm=jpg&q=80`;

export const INDUSTRIES = [
  {
    title: "Residential Homes",
    icon: House,
    image: U("photo-1748063578185-3d68121b11ff"),
    description:
      "Keep your family, home and gate under watch with cameras and video door phones made for homes.",
  },
  {
    title: "Shops and Retail Stores",
    icon: Store,
    image: U("photo-1771033834141-023d630b3965"),
    description:
      "Watch counters, shelves and stock rooms to prevent theft and keep a record of every transaction.",
  },
  {
    title: "Offices",
    icon: Building2,
    image: U("photo-1765366417030-16d9765d920a"),
    description:
      "Secure entrances, work floors and server rooms with surveillance, access control and attendance.",
  },
  {
    title: "Schools and Colleges",
    icon: GraduationCap,
    image: U("photo-1524069290683-0457abfe42c3"),
    description:
      "Campus, corridor and gate monitoring along with biometric attendance for staff and students.",
  },
  {
    title: "Hospitals and Clinics",
    icon: HeartPulse,
    image: U("photo-1777269749032-d8d458ae594d"),
    description:
      "Monitor reception, wards and pharmacy areas while controlling access to sensitive rooms.",
  },
  {
    title: "Factories and Industries",
    icon: Factory,
    image: U("photo-1496247749665-49cf5b1022e9"),
    description:
      "Production floor surveillance, material movement records and shift attendance on one system.",
  },
  {
    title: "Warehouses",
    icon: Warehouse,
    image: U("photo-1771530789155-b1f03fbf82b5"),
    description:
      "Wide-area coverage of storage bays, loading points and perimeters to protect stock round the clock.",
  },
  {
    title: "Hotels and Restaurants",
    icon: Hotel,
    image: U("photo-1551016043-06ec2173531b"),
    description:
      "Lobby, kitchen and parking coverage that keeps guests safe and operations accountable.",
  },
  {
    title: "Commercial Buildings",
    icon: Building,
    image: U("photo-1603294278610-b5bd0506303e"),
    description:
      "Multi-floor surveillance, entry control and visitor management for managed commercial spaces.",
  },
  {
    title: "Construction Sites",
    icon: HardHat,
    image: U("photo-1527335988388-b40ee248d80c"),
    description:
      "Solar CCTV and site cameras that watch material and machinery even where power is not yet wired.",
  },
];
