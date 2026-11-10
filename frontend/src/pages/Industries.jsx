import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { INDUSTRIES } from "@/data/industries";

export default function Industries() {
  return (
    <>
      <Seo
        title="Industries We Serve | Shri Ganesh Infotech — Chandrapur"
        description="CCTV and security solutions for homes, shops, offices, schools, hospitals, factories, warehouses, hotels, commercial buildings and construction sites in Chandrapur."
      />
      <PageHero
        crumb="Industries"
        eyebrow="Industries We Serve"
        title="The right security for every"
        highlight="environment"
        sub="Different properties need different surveillance. Here is where our solutions fit best across Chandrapur and nearby areas."
      />

      <section className="py-20 sm:py-24 bg-cloud bg-blueprint-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.title} delay={(i % 3) * 0.08}>
              <div
                className="group h-full bg-white border border-slate-100 rounded-sm overflow-hidden shadow-sm hover:shadow-xl hover:shadow-navy/10 transition-shadow duration-300"
                data-testid={`industry-card-${ind.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={ind.image} alt={ind.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 h-11 w-11 rounded-sm bg-white text-signal flex items-center justify-center shadow-md">
                    <ind.icon size={20} />
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="font-display font-bold text-navy text-lg">{ind.title}</h2>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">{ind.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-extrabold text-white text-2xl sm:text-3xl">
            Don't see your property type? Just ask.
          </h2>
          <p className="mt-3 text-white/65 text-sm max-w-xl mx-auto">
            Every premises is different. Tell us about yours and we will plan
            the coverage it actually needs.
          </p>
          <a
            href="/contact"
            data-testid="industries-contact"
            className="mt-6 inline-flex items-center gap-2 bg-signal hover:bg-signal-dark text-white px-7 py-3.5 rounded-sm font-display font-bold transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
