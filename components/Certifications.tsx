"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CERTIFICATIONS = [
  "WHO GMP",
  "ISO",
  "FSSAI",
  "NDA Uganda",
  "PPB Kenya",
  "MOH Cambodia",
  "DPM Ivory Coast",
  "MOH Iraq",
  "NAFDAC Nigeria",
  "MOH Vietnam",
  "MOH Yemen",
  "MOH Ghana",
] as const;

export function Certifications() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduce) return;

      gsap.from(".cert-item", {
        y: 24,
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 80%" },
      });
    },
    { scope: rootRef },
  );

  return (
    <section
      id="certifications"
      ref={rootRef}
      className="relative section-pad scroll-mt-24 bg-mist/80 backdrop-blur-sm py-20 md:py-24"
    >
      <div className="relative z-20 mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
            Certifications & Accreditations
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">
            Where quality meets regulatory compliance
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Products are sourced from WHO-GMP certified manufacturing facilities,
            with documentation support for international market registration.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {CERTIFICATIONS.map((name) => (
            <li
              key={name}
              className="cert-item cert-glass flex min-h-[100px] flex-col items-center justify-center rounded-2xl px-3 py-5 text-center"
            >
              <span className="font-display text-xs font-bold uppercase tracking-wider text-teal">
                {name.split(" ")[0]}
              </span>
              <span className="mt-1 text-sm font-medium text-navy">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
