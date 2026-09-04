"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Layers, ShieldCheck, FileCheck2 } from "lucide-react";

export function ContactCta() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-[#06132D] text-white select-none font-['Inter',sans-serif]">
      {/* Background Luminous Radial Gradients */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] rounded-full blur-[140px] opacity-25"
          style={{
            background: "radial-gradient(ellipse at center, rgba(0, 110, 220, 0.8) 0%, rgba(13, 148, 136, 0.4) 50%, transparent 75%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Mini Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
          <span className="text-xs font-['JetBrains_Mono',monospace] font-bold uppercase tracking-[0.16em] text-cyan-200">
            ADVANCING GLOBAL PHARMACEUTICAL CARE
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-['Space_Grotesk',sans-serif] max-w-3xl mx-auto">
          Building Better Health,{" "}
          <span className="bg-gradient-to-r from-white via-cyan-200 to-[#38BDF8] bg-clip-text text-transparent">
            Together.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Connect with Zelnex Pharmaceuticals to explore high-potency finished generic formulations, reliable contract manufacturing, and international MOH dossier licensing across 50+ countries.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/#products"
            className="group px-7 py-3.5 rounded-full bg-gradient-to-r from-[#006EDC] via-[#0284C7] to-[#00B4D8] text-white text-xs sm:text-sm font-bold font-['JetBrains_Mono',monospace] uppercase tracking-wider shadow-[0_4px_25px_rgba(0,110,220,0.4)] hover:shadow-[0_8px_35px_rgba(0,110,220,0.6)] hover:-translate-y-0.5 active:scale-[0.98] transition-all flex items-center gap-2"
          >
            <Layers className="w-4 h-4" />
            <span>Explore Our Products</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/services?service=regulatory"
            className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/25 text-white text-xs sm:text-sm font-bold font-['JetBrains_Mono',monospace] uppercase tracking-wider backdrop-blur-md transition-all flex items-center gap-2 hover:-translate-y-0.5"
          >
            <FileCheck2 className="w-4 h-4 text-cyan-300" />
            <span>Request Dossier Index</span>
          </Link>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs font-['JetBrains_Mono',monospace] text-slate-400">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            100% WHO-GMP SOURCING
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#006EDC]" />
            ZONE IVB STABILITY VALIDATED
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            50+ GLOBAL NATIONS
          </span>
        </div>

      </div>
    </section>
  );
}
