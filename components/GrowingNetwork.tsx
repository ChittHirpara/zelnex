"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { DynamicFlatMap } from "./DynamicFlatMap";
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
    <section
      id="network"
      ref={rootRef}
      className="relative w-full py-16 sm:py-24 overflow-hidden border-b border-blue-100 font-['Inter',sans-serif] text-[#0B1E48]"
      style={{
        background: "linear-gradient(180deg, #F4F8FD 0%, #EFF6FF 50%, #F8FAFC 100%)",
      }}
    >
      {/* 20px Pattern Grid Background in Soft Blue */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 110, 220, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 110, 220, 0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />

      <div className="relative z-20 w-full px-4 sm:px-8 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="network-header flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#006EDC]/10 border border-[#006EDC]/25 mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#006EDC] animate-pulse" />
            <span className="text-[11px] font-['JetBrains_Mono',monospace] font-bold uppercase tracking-[0.15em] text-[#006EDC]">
              06.00 // GLOBAL LOGISTICS & CORRIDORS
            </span>
          </div>

          {/* Hero Headline */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0B1E48] mb-3">
            50+ Sovereign Destinations & Flight Vectors
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl font-normal leading-relaxed">
            Direct air and sea export corridors dispatched from our WHO-GMP manufacturing hubs in Surat and Mumbai to health ministries across Asia, Africa, Middle East & LATAM.
          </p>
        </div>

        {/* ── High-Tech Aviation/Pharma Radar Frame Container (Crisp White & Blue) ── */}
        <div className="w-full bg-white border border-blue-200/80 rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_rgba(0,110,220,0.08)] overflow-hidden relative mb-12">
          
          {/* Top Radar Status Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#F4F8FD] border-b border-blue-100 text-xs font-['JetBrains_Mono',monospace]">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#006EDC]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
              </div>
              <span className="text-[#0B1E48] font-bold ml-1">ZELNEX_FLIGHT_RADAR_v2.0</span>
            </div>

            <div className="flex items-center gap-4 text-slate-500">
              <span className="hidden sm:inline font-medium">ORIGIN: SURAT [21.1702° N, 72.8311° E]</span>
              <span className="text-[#006EDC] font-bold bg-[#006EDC]/10 px-2 py-0.5 rounded border border-[#006EDC]/20">
                LIVE TELEMETRY
              </span>
            </div>
          </div>

          {/* Dynamic Vector Map */}
          <div className="w-full">
            <DynamicFlatMap />
          </div>
        </div>

        {/* Bottom 3-Column High-Density Metrics Row */}
        <div className="network-metrics grid grid-cols-1 sm:grid-cols-3 gap-5 text-center">
          
          {/* Metric 1 */}
          <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0B1E48] tracking-tight font-['JetBrains_Mono',monospace]">
              1.2<span className="text-[#006EDC]">M+</span>
            </div>
            <p className="mt-1 text-xs sm:text-sm font-medium text-slate-600">
              Units Supplied Monthly
            </p>
          </div>

          {/* Metric 2 */}
          <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0B1E48] tracking-tight font-['JetBrains_Mono',monospace]">
              800<span className="text-[#0284C7]">+</span>
            </div>
            <p className="mt-1 text-xs sm:text-sm font-medium text-slate-600">
              Approved Finished Formulations
            </p>
          </div>

          {/* Metric 3 */}
          <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0B1E48] tracking-tight font-['JetBrains_Mono',monospace]">
              100<span className="text-emerald-500">%</span>
            </div>
            <p className="mt-1 text-xs sm:text-sm font-medium text-slate-600">
              WHO-GMP &amp; CTD Compliance
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default GrowingNetwork;
