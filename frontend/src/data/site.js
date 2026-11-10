export const BUSINESS = {
  name: "SHRI GANESH INFOTECH",
  shortName: "Shri Ganesh Infotech",
  tagline: "Your Trusted Security Partner in Chandrapur",
  phoneDisplay: "074107 37766",
  phoneTel: "tel:07410737766",
  whatsappNumber: "917410737766",
  address: {
    lines: [
      "Shop No. 4, Raghav Apartment,",
      "Shri Ram Ward, Near Ramala Talav Road,",
      "Bazar Ward,",
      "Chandrapur, Maharashtra – 442402",
    ],
    locality: "Chandrapur, Maharashtra",
  },
  hours: [
    { days: "Monday – Saturday", time: "11:00 AM – 9:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  hoursNote: "Service Support Available Daily",
  stats: {
    experience: "5+",
    installations: "1,000+",
  },
  brands: ["CP PLUS", "DAICHI"],
};

const ASSETS = "https://customer-assets-39nsmqrw.emergentagent.net/job_shri-ganesh-infotech--676lpyb2/artifacts/";

export const BANNERS = [
  { src: `${ASSETS}7893551887838a38_herobanner5.webp`, alt: "DAICHI — The Complete Daichi Range is Here", ratio: "1600 / 433" },
  { src: `${ASSETS}1f738f064df7efc9_herobanner4.webp`, alt: "CP PLUS — Make surveillance smarter with the AI-enabled NVRs", ratio: "1900 / 568" },
  { src: `${ASSETS}8232c1d3248557aa_herobanner3.jpg`, alt: "CP PLUS illuMax Dual Light — Dekho Suno Bolo network cameras", ratio: "1900 / 568" },
];

export const POSTERS = [
  { slug: "daichi-dual-lens", name: "DAICHI Dual Lens 10X Zoom Camera", src: `${ASSETS}d0e5d98b489ac04c_herobanner6.webp`, alt: "DAICHI Dual Lens 10X Zoom Camera poster" },
  { slug: "daichi-nvr", name: "DAICHI Video Recorder NVR", src: `${ASSETS}c1e842fbf96c6559_herobanner7.webp`, alt: "DAICHI Video Recorder NVR poster" },
];

export const HINDI = {
  slogan1: "सुरक्षा का भरोसा, हर पल आपके साथ।",
  slogan1sub: "आपके घर और कारोबार की सुरक्षा का विश्वसनीय साथी।",
  slogan2: "आपकी सुरक्षा, हमारी जिम्मेदारी।",
};

export const DEFAULT_WA_MESSAGE =
  "Hello SHRI GANESH INFOTECH, I am interested in your CCTV and security solutions. Please share more details.";

export function waLink(message) {
  const text = message || DEFAULT_WA_MESSAGE;
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function waServiceLink(serviceTitle) {
  return waLink(
    `Hello SHRI GANESH INFOTECH, I am interested in your ${serviceTitle} service. Please share more details.`
  );
}

export function waProductLink(productName) {
  return waLink(
    `Hello SHRI GANESH INFOTECH, I want to enquire about ${productName}. Please share more details.`
  );
}

export const IMG = "https://static.prod-images.emergentagent.com/jobs/0b82dae3-34b4-4193-af68-a4e709cfcd99/images/";

export const IMAGES = {
  hero: `${IMG}58f225d7a4cb92d3d24f35e460fc4feddf9bbd0a0711a69a4fe74835c21c7771.jpeg`,
  heroDesktop: `${IMG}cbd410dd4e144968aedc7cefa1d28560a2801a8a772f076fb8c2e15dafb16f7e.jpeg`,
  heroMobile: `${IMG}f1e0779c3aefdb43df65ce9149b84e2946a9b6e574443b016f5764124b2c55fb.jpeg`,
  aboutTeam: `${IMG}b7dc809d20e0aa1e98726b0f317c7592fc8d0c67a351d0b3799ae174a9c99be8.jpeg`,
};
