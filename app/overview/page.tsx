import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Company Overview | Zelnex Pharmaceuticals",
  description:
    "Learn about Zelnex Pharmaceuticals Pvt. Ltd.—an emerging Indian pharmaceutical company focused on high-quality, export-oriented healthcare solutions.",
};

const PARAGRAPHS = [
  "Zelnex Pharmaceuticals Pvt. Ltd. is an emerging pharmaceutical company based in India, focused on delivering high-quality, affordable, and globally compliant healthcare solutions. The company’s vision is to build a strong export-oriented premium brand and establish a trusted presence in international markets.",
  "Zelnex specializes in the marketing, sourcing, and global distribution of pharmaceutical formulations. The company offers a diverse product portfolio including tablets, capsules, syrups, and combination medicines across key therapeutic segments such as anti-infectives, pain management, anti-diabetics, gastrointestinal care, and lifestyle-related treatments.",
  "All products are sourced from WHO-GMP certified manufacturing facilities, ensuring strict adherence to international quality and regulatory standards. This approach enables Zelnex to consistently deliver safe, effective, and reliable medicines to global markets.",
  "The company operates with a flexible and scalable business model, allowing it to expand its product range efficiently while maintaining cost effectiveness and regulatory compliance.",
  "With a strong focus on pharmaceutical exports, Zelnex aims to build a solid presence in both emerging and regulated markets. The company is committed to reliable supply chains, competitive pricing, and consistent product quality to foster long-term partnerships with global clients.",
  "It is also building strong capabilities in regulatory documentation, dossier support, and international market registration to further strengthen its global footprint.",
  "Driven by a commitment to quality, innovation, and trust, Zelnex Pharmaceuticals is steadily progressing toward becoming a reliable and fast-growing name in the global pharmaceutical industry, delivering value to healthcare providers, distributors, and patients worldwide.",
] as const;

export default function OverviewPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-navy pt-28 pb-16 md:pt-32 md:pb-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(0,166,166,0.45), transparent)",
            }}
            aria-hidden
          />
          <div className="section-pad relative z-10 mx-auto max-w-3xl">
            <Link
              href="/#overview"
              className="inline-flex items-center gap-2 text-sm font-medium text-teal-bright transition-colors hover:text-white"
            >
              ← Back to home
            </Link>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-teal-bright">
              Caring for Life
            </p>
            <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
              Company Overview
            </h1>
            <p className="mt-4 text-lg text-white/75">
              Zelnex Pharmaceuticals Pvt. Ltd.
            </p>
          </div>
        </section>

        <section className="section-pad bg-white py-16 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_280px] lg:gap-16">
            <article className="max-w-3xl space-y-6">
              {PARAGRAPHS.map((text) => (
                <p
                  key={text.slice(0, 48)}
                  className="text-base leading-relaxed text-slate md:text-[1.05rem]"
                >
                  {text}
                </p>
              ))}
            </article>

            <aside className="lg:pt-2">
              <div className="sticky top-28 space-y-8">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-mist">
                  <Image
                    src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=80"
                    alt="Pharmaceutical laboratory quality environment"
                    fill
                    className="object-cover"
                    sizes="280px"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">
                    At a glance
                  </p>
                  <ul className="mt-4 space-y-3 text-sm text-muted">
                    <li>Based in India · Export-focused</li>
                    <li>WHO-GMP certified sourcing</li>
                    <li>Tablets, capsules, syrups & combinations</li>
                    <li>Regulatory & dossier support</li>
                  </ul>
                  <Link
                    href="/#contact"
                    className="btn-teal mt-6 inline-flex !px-5 !py-2.5 text-sm"
                  >
                    Partner with us →
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
