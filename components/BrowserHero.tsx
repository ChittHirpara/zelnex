"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Terminal,
  Layers,
  Sparkles,
  ShieldCheck,
  Globe2,
  MousePointer2,
  Code2,
  Cpu,
} from "lucide-react";

export function BrowserHero() {
  const [activeElementIndex, setActiveElementIndex] = useState<number>(0);

  // Simulated cursor loop moving through UI cards
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveElementIndex((prev) => (prev + 1) % 3);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const simulatedCards = [
    {
      id: "card-tablets",
      title: "Oral Solid Formulations",
      selector: "div.pharma-module#tablets",
      metrics: "400M+ Units / Year",
      css: {
        display: "flex",
        gmp: "WHO_GMP_CERTIFIED",
        cleanroom: "ISO_7_GRADE_C",
        stability: "ZONE_IVB_30C_75RH",
        dossier: "eCTD_MODULES_1_5",
      },
    },
    {
      id: "card-injectables",
      title: "Sterile Lyophilized Vials",
      selector: "div.pharma-module#sterile-vials",
      metrics: "10ml / 20ml Single Dose",
      css: {
        display: "grid",
        gmp: "ASEPTIC_GRADE_A",
        assay: "HPLC_99.8_PURITY",
        pyrogen: "ENDOTOXIN_FREE",
        export: "JNPT_MUMBAI_DISPATCH",
      },
    },
    {
      id: "card-dossiers",
      title: "eCTD Regulatory Dossiers",
      selector: "div.pharma-module#ectd-dossiers",
      metrics: "150+ Ready Dossiers",
      css: {
        schema: "eCTD_v4.0_ICH",
        be_study: "BIOEQUIVALENCE_VALIDATED",
        copp: "FSC_APPROVED_WHO",
        coverage: "50_COUNTRIES_CLEARED",
      },
    },
  ];

  const current = simulatedCards[activeElementIndex];

  return (
    <section className="relative py-14 sm:py-20 lg:py-24 border-b border-[#E5E7EB] bg-[#f3f4f6]">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        
        {/* Split-Pane Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ── Left Pane: Technical Headline & Chrome Store Action ── */}
          <div className="lg:col-span-6 flex flex-col">
            
            {/* Pulse-Animated Version Tag */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white border border-[#D1D5DB] rounded-md w-fit mb-6 shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06B6D4] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#06B6D4]" />
              </span>
              <span className="text-[11px] font-['JetBrains_Mono',monospace] font-bold text-[#111827] tracking-wider uppercase">
                v2.0 RELEASED // WHO-GMP VALIDATED
              </span>
            </div>

            {/* Technical Headline (72px, leading 0.9) */}
            <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-extrabold text-[#111827] tracking-tight leading-[0.92] mb-6 font-['Inter',sans-serif]">
              GLOBAL PHARMA BROWSER WORKSPACE.
            </h1>

            {/* Monospaced Metadata Callout */}
            <div className="border-l-2 border-[#06B6D4] pl-4 sm:pl-5 my-2">
              <p className="text-xs sm:text-[13px] font-['JetBrains_Mono',monospace] uppercase text-[#0891B2] tracking-wider font-semibold leading-relaxed">
                INTEGRATED REGULATORY DOSSIER REPOSITORY, FINISHED FORMULATION DISPATCH & CONTRACT MANUFACTURING INFRASTRUCTURE FOR 50+ GLOBAL DESTINATIONS.
              </p>
            </div>

            {/* Body */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-4 mb-8 max-w-lg">
              Experience a functional workspace interface for browsing WHO-GMP certified generic catalogs, requesting Common Technical Documents (CTD/eCTD), and initiating container export logistics.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Chrome Store Styled Button */}
              <Link
                href="/services"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#06B6D4] hover:bg-[#0891B2] text-white text-xs font-['JetBrains_Mono',monospace] font-bold tracking-wider uppercase rounded-md shadow-md transition-colors cursor-pointer"
              >
                <Terminal className="w-4 h-4" />
                <span>LAUNCH DEVTOOLS SERVICES</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Ghost 1px Bordered Button */}
              <Link
                href="#products"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-[#D1D5DB] hover:border-[#06B6D4] text-[#111827] text-xs font-['JetBrains_Mono',monospace] font-bold tracking-wider uppercase rounded-md shadow-2xs transition-colors cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5 text-[#06B6D4]" />
                <span>INSPECT FORMULARY</span>
              </Link>
            </div>

          </div>

          {/* ── Right Pane: Simulated Interactive UI Window with Inspector Tooltip ── */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[540px] bg-white border border-[#D1D5DB] rounded-lg shadow-sm overflow-hidden flex flex-col">
              
              {/* Simulated Window Top Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#F9FAFB] border-b border-[#E5E7EB] text-xs font-['JetBrains_Mono',monospace]">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <span className="text-slate-400 ml-2">inspector.preview.ts</span>
                </div>
                <span className="text-[10px] font-bold text-[#0891B2] bg-[#06B6D4]/10 px-2 py-0.5 rounded">
                  LIVE INSPECT
                </span>
              </div>

              {/* Simulated Stage Area with Pattern Grid */}
              <div className="p-6 devtools-grid-20 relative min-h-[360px] flex flex-col justify-between">
                
                {/* 3 Selectable Pharma Module Cards */}
                <div className="space-y-3 relative z-10">
                  {simulatedCards.map((card, idx) => {
                    const isFocused = activeElementIndex === idx;

                    return (
                      <div
                        key={card.id}
                        onClick={() => setActiveElementIndex(idx)}
                        className={`relative p-4 rounded-md bg-white transition-all cursor-pointer ${
                          isFocused
                            ? "outline-2 outline-[#06B6D4] outline-offset-2 shadow-md"
                            : "border border-[#E5E7EB] opacity-75 hover:opacity-100"
                        }`}
                      >
                        {/* Tag Badge on Active Element */}
                        {isFocused && (
                          <div className="absolute -top-3 left-3 bg-[#06B6D4] text-white text-[9px] font-['JetBrains_Mono',monospace] font-bold px-1.5 py-0.5 rounded shadow-xs flex items-center gap-1">
                            <span>{card.selector}</span>
                            <span className="opacity-75">[320x64]</span>
                          </div>
                        )}

                        <div className="flex items-center justify-between">
                          <h4 className="text-xs sm:text-sm font-bold text-[#111827] font-['Inter',sans-serif]">
                            {card.title}
                          </h4>
                          <span className="text-[10px] font-['JetBrains_Mono',monospace] text-slate-500 font-medium">
                            {card.metrics}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* ── Dark Floating Inspector Tooltip (#111827) with Cyan Monospace ── */}
                <div className="mt-4 bg-[#111827] border border-slate-700 text-white rounded-lg p-3.5 shadow-xl font-['JetBrains_Mono',monospace] text-[11px] space-y-1 relative z-20">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 border-b border-slate-800 pb-1.5 mb-1.5">
                    <span className="text-[#06B6D4] font-bold">{current.selector}</span>
                    <span>CSS / METRICS INSPECTOR</span>
                  </div>

                  {Object.entries(current.css).map(([key, val]) => (
                    <div key={key} className="flex items-center justify-between">
                      <span className="text-slate-400">{key}:</span>
                      <span className="text-[#06B6D4] font-bold">{val};</span>
                    </div>
                  ))}
                </div>

                {/* Simulated Animated Cursor Pin */}
                <div
                  className="absolute z-30 pointer-events-none transition-all duration-700 ease-out text-[#06B6D4]"
                  style={{
                    top: `${40 + activeElementIndex * 65}px`,
                    right: "24px",
                  }}
                >
                  <MousePointer2 className="w-5 h-5 fill-[#06B6D4] drop-shadow-md animate-bounce" />
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default BrowserHero;
