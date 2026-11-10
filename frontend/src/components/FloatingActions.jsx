import { BUSINESS, waLink, DEFAULT_WA_MESSAGE } from "@/data/site";
import WhatsAppIcon from "./WhatsAppIcon";

export default function FloatingActions() {
  return (
    <>
      <a
        href={waLink(DEFAULT_WA_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        data-testid="floating-whatsapp"
        className="fixed right-4 bottom-20 sm:bottom-6 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl shadow-black/25 hover:scale-105 transition-transform duration-200"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" aria-hidden="true" />
        <WhatsAppIcon className="h-7 w-7 relative" />
      </a>

      <div className="sm:hidden fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/10">
        <a
          href={BUSINESS.phoneTel}
          data-testid="sticky-call-now"
          className="bg-signal text-white flex items-center justify-center gap-2 py-3.5 font-display font-bold text-sm"
        >
          Call Now
        </a>
        <a
          href={waLink(DEFAULT_WA_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="sticky-whatsapp"
          className="bg-[#1FAF54] text-white flex items-center justify-center gap-2 py-3.5 font-display font-bold text-sm"
        >
          <WhatsAppIcon className="h-5 w-5" /> WhatsApp
        </a>
      </div>
    </>
  );
}
