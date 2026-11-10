import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  sub,
  align = "center",
  dark = false,
}) {
  const alignCls = align === "left" ? "text-left items-start" : "text-center items-center mx-auto";
  return (
    <Reveal className={`flex flex-col ${alignCls} max-w-3xl`}>
      <span
        className={`flex items-center gap-3 text-xs font-bold tracking-[0.22em] uppercase ${
          dark ? "text-signal" : "text-signal"
        }`}
      >
        <span className="h-[2px] w-8 bg-signal" />
        {eyebrow}
        {align === "center" && <span className="h-[2px] w-8 bg-signal" />}
      </span>
      <h2
        className={`mt-4 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight leading-[1.1] ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {title}{" "}
        {highlight && <span className="text-signal">{highlight}</span>}
      </h2>
      {sub && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            dark ? "text-white/70" : "text-slate-600"
          }`}
        >
          {sub}
        </p>
      )}
    </Reveal>
  );
}
