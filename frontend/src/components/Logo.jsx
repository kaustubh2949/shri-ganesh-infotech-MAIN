export default function Logo({ variant = "dark" }) {
  const light = variant === "light";
  return (
    <span className="flex items-center gap-3">
      <svg
        viewBox="0 0 64 64"
        className="shrink-0 h-11 w-11 sm:h-[46px] sm:w-[46px]"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="3"
          width="58"
          height="58"
          rx="16"
          fill="#071B32"
          stroke={light ? "#3D5A7A" : "none"}
          strokeWidth={light ? 1.5 : 0}
        />
        <rect
          x="6.5"
          y="6.5"
          width="51"
          height="51"
          rx="13"
          fill="none"
          stroke="#FFFFFF"
          strokeOpacity="0.18"
          strokeWidth="1.5"
        />
        <text
          x="32"
          y="41.5"
          textAnchor="middle"
          fontFamily="'Cabinet Grotesk','IBM Plex Sans',system-ui,sans-serif"
          fontSize="28"
          fontWeight="800"
          letterSpacing="-2"
          fill="#FFFFFF"
        >
          SG
        </text>
        <rect x="20" y="47.2" width="24" height="2.8" rx="1.4" fill="#F21F2B" />
      </svg>
      <span className="leading-none">
        <span
          className={`block font-display font-extrabold tracking-[0.02em] text-xl sm:text-lg ${
            light ? "text-white" : "text-navy"
          }`}
        >
          SHRI GANESH
        </span>
        <span className="flex items-center gap-1.5 mt-1">
          <span className="h-[2px] w-3 bg-signal" />
          <span className="block font-display font-bold text-[12px] tracking-[0.34em] text-signal">
            INFOTECH
          </span>
          <span className="h-[2px] w-3 bg-signal" />
        </span>
      </span>
    </span>
  );
}
