"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { DynamicFlatMap } from "./DynamicFlatMap";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function GrowingNetwork() {
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
    },
    { scope: rootRef }
  );

  return (
    <section
      id="network"
      ref={rootRef}
      className="relative w-full py-16 sm:py-24 overflow-hidden border-b border-blue-100 font-['Inter',sans-serif] text-[#0B1E48]"
      style={{
        background: "linear-gradient(180deg, #F4F8FD 0%, #EFF6FF 50%, #F8FAFC 100%)",
      }}
    >


      <div className="relative z-20 w-full px-4 sm:px-8 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="network-header flex flex-col items-center text-center mb-10">

          {/* Hero Headline */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0B1E48] mb-3">
            Global Export Reach
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl font-normal leading-relaxed">
            Coordinated pharmaceutical exports from India to international healthcare markets through reliable logistics and documentation support.
          </p>
        </div>

        {/* ── High-Tech Aviation/Pharma Radar Frame Container (Crisp White & Blue) ── */}
        <div className="w-full bg-white border border-blue-200/80 rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_rgba(0,110,220,0.08)] overflow-hidden relative mb-0">
          {/* Dynamic Vector Map */}
          <div className="w-full">
            <DynamicFlatMap />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GrowingNetwork;
