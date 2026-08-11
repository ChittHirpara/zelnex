"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { GlassCard } from "@/components/ui/GlassCard";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CATEGORIES = [
  {
    title: "Tablets",
    description:
      "Solid oral dosage forms engineered for stability, bioavailability, and global market compliance.",
  },
  {
    title: "Capsules",
    description:
      "Hard and soft gelatin capsules tailored for precise dosing across therapeutic categories.",
  },
  {
    title: "Nutraceuticals",
    description:
      "Science-backed wellness formulations supporting preventive care and everyday health.",
  },
  {
    title: "Injectables",
    description:
      "Sterile injectable solutions manufactured under rigorous quality and aseptic standards.",
  },
] as const;

const THERAPEUTICS = [
  "Cardiology",
  "Anti-Infectives",
  "Diabetes Care",
  "CNS",
  "Gastroenterology",
  "Pain Management",
  "Dermatology",
  "Respiratory",
  "Vitamins & Supplements",
  "Women’s Health",
] as const;

export function ProductShowcase() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduce) return;

      gsap.from(".product-card", {
        y: 36,
        opacity: 0,
        duration: 0.75,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: rootRef },
  );

  return (
    <section
      id="products"
      ref={rootRef}
      className="section-pad relative scroll-mt-24 bg-gradient-to-b from-white via-mist to-white py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
            Our Products
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">
            Pharmaceutical categories we deliver worldwide
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            A focused range of high-quality products for distributors, importers,
            and healthcare institutions seeking reliable supply and regulatory
            readiness.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat) => (
            <GlassCard key={cat.title} className="product-card">
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-teal text-white shadow-md"
                aria-hidden
              >
                <span className="text-lg font-bold">{cat.title[0]}</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-navy">
                {cat.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {cat.description}
              </p>
            </GlassCard>
          ))}
        </div>

        <div id="therapeutics" className="mt-20 scroll-mt-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
            Therapeutic Areas
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold text-navy md:text-3xl">
            10+ therapeutic focus areas
          </h3>
          <div className="mt-8 flex flex-wrap gap-3">
            {THERAPEUTICS.map((area) => (
              <span
                key={area}
                className="rounded-full border border-navy/10 bg-white px-4 py-2 text-sm font-medium text-navy shadow-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        <div id="careers" className="mt-16 scroll-mt-28 rounded-3xl bg-navy/5 px-6 py-10 md:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
            Careers
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold text-navy">
            Build your career in global healthcare
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
            Join a team dedicated to quality, compliance, and expanding access to
            essential medicines. Reach out to explore opportunities with Zelnex.
          </p>
          <a
            href="#contact"
            className="btn-teal mt-6 inline-flex !px-6 !py-2.5 text-sm"
          >
            Enquire About Careers →
          </a>
        </div>
      </div>
    </section>
  );
}
