const ITEMS = [
  "CP PLUS",
  "DAICHI",
  "Genuine Products",
  "Expert Installation",
  "AMC Support",
  "After-Sales Service",
  "CCTV Surveillance",
  "Solar CCTV",
  "Biometric & Access Control",
  "Networking",
];

function Row({ hidden }) {
  return (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={hidden || undefined}
    >
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center">
          <span className="px-7 font-display text-sm sm:text-base font-semibold tracking-[0.18em] uppercase text-white/85 whitespace-nowrap">
            {item}
          </span>
          <span className="h-1.5 w-1.5 rotate-45 bg-signal" />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div
      className="bg-navy border-y border-white/10 overflow-hidden py-4"
      data-testid="brand-marquee"
    >
      <div className="marquee-track flex w-max animate-marquee">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
