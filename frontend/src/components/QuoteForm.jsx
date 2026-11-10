import { useState } from "react";
import { CheckCircle2, Send, ExternalLink } from "lucide-react";
import { waLink, BUSINESS } from "@/data/site";
import { SERVICES } from "@/data/services";

const SERVICE_OPTIONS = [...SERVICES.map((s) => s.title), "Annual Maintenance Contract (AMC)", "Other Security Requirement"];

export default function QuoteForm({ defaultService = "", tone = "light", idPrefix = "quote" }) {
  const [fields, setFields] = useState({
    name: "",
    phone: "",
    email: "",
    service: defaultService || SERVICE_OPTIONS[0],
    location: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [lastUrl, setLastUrl] = useState("");

  const dark = tone === "dark";

  const set = (k) => (e) => {
    setFields({ ...fields, [k]: e.target.value });
    if (errors[k]) setErrors({ ...errors, [k]: null });
  };

  const validate = () => {
    const errs = {};
    if (!fields.name.trim() || fields.name.trim().length < 2) errs.name = "Please enter your full name.";
    const digits = fields.phone.replace(/\D/g, "");
    const okPhone =
      (digits.length === 10) ||
      (digits.length === 11 && digits.startsWith("0")) ||
      (digits.length === 12 && digits.startsWith("91"));
    if (!okPhone) errs.phone = "Please enter a valid phone number (e.g. 074107 37766).";
    if (fields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errs.email = "Please enter a valid email address.";
    return errs;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;
    const lines = [
      `Hello SHRI GANESH INFOTECH, I am ${fields.name.trim()}.`,
      `Service Required: ${fields.service}`,
      `Phone: ${fields.phone.trim()}`,
      fields.location.trim() ? `Location: ${fields.location.trim()}` : "",
      fields.email.trim() ? `Email: ${fields.email.trim()}` : "",
      fields.message.trim() ? `Message: ${fields.message.trim()}` : "",
    ].filter(Boolean);
    const url = waLink(lines.join("\n"));
    setLastUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const labelCls = `block text-sm font-semibold mb-1.5 ${dark ? "text-white" : "text-navy"}`;
  const inputCls = `w-full px-4 py-3 rounded-sm border bg-white text-navy text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-signal/40 transition-shadow ${
    dark ? "border-white/20" : "border-slate-300"
  }`;

  return (
    <form onSubmit={onSubmit} noValidate data-testid={`${idPrefix}-form`}>
      {sent ? (
        <div className="bg-green-50 border border-green-200 rounded-sm p-6" data-testid={`${idPrefix}-success`}>
          <CheckCircle2 className="text-green-600" size={32} />
          <h3 className="mt-3 font-display font-bold text-navy text-lg">Your WhatsApp enquiry is ready</h3>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            We opened WhatsApp with your enquiry details — just press send and
            our team will reply. If WhatsApp did not open, use the button below.
          </p>
          <a
            href={lastUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-sm font-display font-bold text-sm"
            data-testid={`${idPrefix}-whatsapp-reopen`}
          >
            <ExternalLink size={16} /> Open WhatsApp Again
          </a>
          <button
            type="button"
            onClick={() => setSent(false)}
            className="ml-3 text-sm font-semibold text-navy underline underline-offset-4"
            data-testid={`${idPrefix}-send-another`}
          >
            Send another enquiry
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor={`${idPrefix}-name`} className={labelCls}>Full Name *</label>
              <input id={`${idPrefix}-name`} data-testid={`${idPrefix}-name`} className={inputCls} value={fields.name} onChange={set("name")} placeholder="Your name" />
              {errors.name && <p className="mt-1.5 text-xs font-semibold text-signal" data-testid={`${idPrefix}-name-error`}>{errors.name}</p>}
            </div>
            <div>
              <label htmlFor={`${idPrefix}-phone`} className={labelCls}>Phone Number *</label>
              <input id={`${idPrefix}-phone`} data-testid={`${idPrefix}-phone`} className={inputCls} value={fields.phone} onChange={set("phone")} placeholder="10-digit mobile number" inputMode="tel" />
              {errors.phone && <p className="mt-1.5 text-xs font-semibold text-signal" data-testid={`${idPrefix}-phone-error`}>{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor={`${idPrefix}-email`} className={labelCls}>Email Address (optional)</label>
              <input id={`${idPrefix}-email`} data-testid={`${idPrefix}-email`} className={inputCls} value={fields.email} onChange={set("email")} placeholder="you@example.com" inputMode="email" />
              {errors.email && <p className="mt-1.5 text-xs font-semibold text-signal" data-testid={`${idPrefix}-email-error`}>{errors.email}</p>}
            </div>
            <div>
              <label htmlFor={`${idPrefix}-service`} className={labelCls}>Service Required *</label>
              <select id={`${idPrefix}-service`} data-testid={`${idPrefix}-service`} className={inputCls} value={fields.service} onChange={set("service")}>
                {SERVICE_OPTIONS.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor={`${idPrefix}-location`} className={labelCls}>Location</label>
              <input id={`${idPrefix}-location`} data-testid={`${idPrefix}-location`} className={inputCls} value={fields.location} onChange={set("location")} placeholder="e.g. Rajnanda Road, Chandrapur" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor={`${idPrefix}-message`} className={labelCls}>Message</label>
              <textarea id={`${idPrefix}-message`} data-testid={`${idPrefix}-message`} rows={4} className={inputCls} value={fields.message} onChange={set("message")} placeholder="Tell us briefly about your requirement…" />
            </div>
          </div>
          <button
            type="submit"
            data-testid={`${idPrefix}-submit`}
            className="mt-5 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-signal hover:bg-signal-dark text-white px-8 py-3.5 rounded-sm font-display font-bold tracking-wide transition-colors duration-200"
          >
            <Send size={17} /> Send Enquiry on WhatsApp
          </button>
          <p className={`mt-3 text-xs ${dark ? "text-white/50" : "text-slate-500"}`}>
            Your enquiry opens in WhatsApp to {BUSINESS.phoneDisplay} — nothing is sent until you press send there.
          </p>
        </>
      )}
    </form>
  );
}
