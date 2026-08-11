"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CATEGORIES = [
  "Antibiotics",
  "Antidepressant",
  "Antifungal",
  "Bone & Joint",
  "Cardiac Care",
  "Chronic Care",
  "CNS",
  "Cough, Cold & Anti Allergy",
  "Derma Care",
  "Diabetic Care",
  "Female Care",
  "Gastro Care",
  "Gut Health",
  "Hematinic",
  "Infertility",
  "Laxatives",
  "Pain Management",
  "Anti-Infectives",
  "Lifestyle Care",
  "Gastrointestinal",
] as const;

export function Categories() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduce) return;

      gsap.from(".category-item", {
        y: 20,
        opacity: 0,
        duration: 0.55,
        stagger: 0.04,
        ease: "power2.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 80%" },
      });
    },
    { scope: rootRef },
  );

  return (
    <section
      id="products"
      ref={rootRef}
      className="relative section-pad scroll-mt-24 bg-navy/90 backdrop-blur-sm py-20 md:py-24"
    >
      <div className="relative z-20 mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-bright">
            Our Category
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Therapeutic segments we serve
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            A focused portfolio across key treatment areas—sourced for quality,
            compliance, and consistent global supply.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {CATEGORIES.map((name) => (
            <li
              key={name}
              className="category-item category-glass flex min-h-[88px] items-center justify-center px-3 py-4 text-center text-sm font-medium text-white/90"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
