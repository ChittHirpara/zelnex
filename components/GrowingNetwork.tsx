"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { DynamicFlatMap } from "./DynamicFlatMap";
import { SectionDivider } from "./SectionDivider";
import { useLanguage } from "@/context/LanguageContext";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function GrowingNetwork() {
  const { t } = useLanguage();
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      // Header entrance
      gsap.fromTo(
        ".network-header",
        { y: -24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: rootRef.current, start: "top 80%" },
        }
      );

      // Metrics Row entrance
      gsap.fromTo(
        ".network-metrics",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: rootRef.current, start: "top 60%" },
        }
      );
    },
    { scope: rootRef }
  );

  return (
    <>
      {/* Wave Transition: White (Certifications) → Pure Black (Global Network) */}
      <SectionDivider from="#ffffff" to="#000000" />

      <section
        id="network"
        ref={rootRef}
        className="relative w-full bg-black text-white py-16 md:py-24 overflow-hidden"
      >
        <div className="relative z-20 w-full px-4 sm:px-8 max-w-7xl mx-auto">
          {/* Top Centered Section Header */}
          <div className="network-header flex flex-col items-center text-center mb-8">
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-white/50 mb-2 font-mono">
              {t.network.badge}
            </p>

            {/* Hero Headline */}
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-3">
              {t.network.title}
            </h2>

            {/* Sub-Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
              <span className="text-xs font-bold text-white/90 tracking-wide">
                {t.network.subtitle}
              </span>
            </div>
          </div>
        </div>

        {/* ── Full Screen Dynamic Vector Map Stage ── */}
        <div className="w-full">
          <DynamicFlatMap />
        </div>

        {/* Bottom 3-Column High-Impact Metrics Row */}
        <div className="relative z-20 w-full px-4 sm:px-8 max-w-5xl mx-auto">
          <div className="network-metrics grid grid-cols-1 sm:grid-cols-3 gap-8 text-center pt-10 border-t border-white/10">
            {/* Metric 1 */}
            <div className="flex flex-col items-center">
              <div className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                1.2<span className="text-[#00E5FF]">M+</span>
              </div>
              <p className="mt-1 text-xs sm:text-sm font-semibold text-white/50">
                Units Supplied Monthly
              </p>
            </div>

            {/* Metric 2 */}
            <div className="flex flex-col items-center">
              <div className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                800<span className="text-[#00B8F2]">+</span>
              </div>
              <p className="mt-1 text-xs sm:text-sm font-semibold text-white/50">
                Approved Formulations
              </p>
            </div>

            {/* Metric 3 */}
            <div className="flex flex-col items-center">
              <div className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                100<span className="text-emerald-400">%</span>
              </div>
              <p className="mt-1 text-xs sm:text-sm font-semibold text-white/50">
                WHO-GMP &amp; CTD Compliance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Transition: Pure Black (Global Network) → White (Digital Epoch) */}
      <SectionDivider from="#000000" to="#ffffff" />
    </>
  );
}

export default GrowingNetwork;
