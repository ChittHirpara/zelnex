import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Globe, Package, ShieldCheck } from "lucide-react";

export function Overview() {

  const corporatePillars = [
    {
      num: "01",
      label: "RELIABILITY",
      accent: "#006EDC",
      accentBg: "#ECFEFF",
      title: "Supply You Can Depend On",
      desc: "Consistent coordination from product sourcing to manufacturing and export, built around every buyer's requirements.",
      tags: ["Product Sourcing", "Manufacturing", "Export Coordination"],
    },
    {
      num: "02",
      label: "FLEXIBILITY",
      accent: "#0284C7",
      accentBg: "#F0F9FF",
      title: "Built Around Your Market",
      desc: "Product selection, packaging and supply solutions adapted to your market, brand and commercial needs.",
      tags: ["Product Selection", "Packaging Solutions", "Market Adaptation"],
    },
    {
      num: "03",
      label: "QUALITY",
      accent: "#0D9488",
      accentBg: "#F0FDFA",
      title: "Quality at Every Stage",
      desc: "A quality-focused approach across sourcing, manufacturing, documentation and final supply.",
      tags: ["Quality Sourcing", "Strict Compliance", "Full Documentation"],
    },
    {
      num: "04",
      label: "PARTNERSHIP",
      accent: "#082B61",
      accentBg: "#EEF2FF",
      title: "More Than a Supplier",
      desc: "We work closely with international buyers to build long-term pharmaceutical supply relationships.",
      tags: ["Long-Term Relations", "International Buyers", "Supply Partner"],
    },
  ];

  return (
    <section
      id="overview"
      className="relative scroll-mt-24 py-16 sm:py-24 bg-[#F8FAFC] text-slate-900 overflow-hidden font-[family-name:var(--font-montserrat)] border-b border-slate-200/80"
    >
      {/* Subtle Pattern Grid Background */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-30 devtools-grid-20" aria-hidden />

      {/* Main Structural Container */}
      <div className="relative z-10 mx-auto max-w-[1340px] px-4 sm:px-6 md:px-8">
        
        {/* ════════════════════════════════════════════════════════════════
            1. TOP CLINICAL METADATA BAR
           ════════════════════════════════════════════════════════════════ */}
        <div className="flex flex-wrap items-center justify-between border-b border-slate-200/90 pb-4 mb-10 text-xs tracking-wider uppercase font-semibold text-slate-500 font-[family-name:var(--font-outfit)]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#006EDC] animate-pulse rounded-full" />
            <span className="text-[#082B61] font-bold">Zelnex Corporate Profile</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="hidden sm:inline font-medium text-slate-600">Surat, Gujarat, India</span>
          </div>
          <div className="flex items-center gap-3.5">
            <span className="text-slate-600 font-semibold">WHO-GMP Validated</span>
            <span className="text-slate-300">•</span>
            <span className="text-[#006EDC] font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Global Operations Active
            </span>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            2. COMPANY OVERVIEW HERO
           ════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 border-b border-slate-200/80 pb-16 mb-16 items-center">
          
          {/* Left: Headline & Corporate Narrative */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#006EDC]/20 bg-blue-50/70 rounded-full w-fit mb-5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#006EDC]" />
              <span className="text-[11px] font-[family-name:var(--font-outfit)] font-bold tracking-[0.14em] uppercase text-[#006EDC]">
                COMPANY OVERVIEW
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#082B61] tracking-tight leading-[1.14] mb-5 font-[family-name:var(--font-outfit)]">
              Pharmaceutical Supply <br className="hidden sm:inline" />
              <span className="text-[#006EDC]">Built for Global Markets</span>
            </h2>

            {/* Corporate Narrative Body */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mt-1 mb-8 max-w-xl">
              Zelnex Pharmaceuticals Private Limited is an India-based, export-focused pharmaceutical company supporting international buyers with finished pharmaceutical formulations. We work with qualified manufacturing partners to deliver product sourcing, private-label solutions, quality documentation and export support tailored to market requirements.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 font-[family-name:var(--font-outfit)] text-sm font-semibold tracking-wide">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#006EDC] to-[#082B61] hover:from-[#082B61] hover:to-[#006EDC] text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <span>Discover Zelnex</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 bg-white hover:border-[#006EDC] hover:text-[#006EDC] text-slate-800 rounded-full shadow-xs hover:shadow-sm transition-all duration-200 cursor-pointer"
              >
                <span>Explore Products</span>
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 flex items-center gap-8 sm:gap-12">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#082B61] font-[family-name:var(--font-outfit)] tracking-tight">
                  10<span className="text-[#006EDC]">+</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800 tracking-wide font-[family-name:var(--font-outfit)] mt-0.5">
                  Markets Served
                </div>
                <div className="text-[11px] text-slate-500 font-medium font-[family-name:var(--font-outfit)] uppercase tracking-wider">
                  Global Reach
                </div>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#082B61] font-[family-name:var(--font-outfit)] tracking-tight">
                  355<span className="text-[#006EDC]">+</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800 tracking-wide font-[family-name:var(--font-outfit)] mt-0.5">
                  Finished Formulations
                </div>
                <div className="text-[11px] text-slate-500 font-medium font-[family-name:var(--font-outfit)] uppercase tracking-wider">
                  Wide Product Portfolio
                </div>
              </div>
            </div>
          </div>

          {/* Right: Our Strengths Network Topology Card with Continuous Orbital Rotation */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="orbit-pause-group relative w-full max-w-[450px] aspect-square border border-slate-200/90 bg-white rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-sm overflow-hidden select-none">
              
              <style>{`
                @keyframes orbitTrackSpin {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
                @keyframes orbitNodeCounterSpin {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(-360deg); }
                }
                .orbit-track {
                  animation: orbitTrackSpin 26s linear infinite;
                }
                .orbit-counter {
                  animation: orbitNodeCounterSpin 26s linear infinite;
                }
                .orbit-pause-group:hover .orbit-track,
                .orbit-pause-group:hover .orbit-counter {
                  animation-play-state: paused;
                }
              `}</style>

              {/* Corner L-Markers */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#006EDC]" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#006EDC]" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#006EDC]" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#006EDC]" />

              {/* Card Header */}
              <div className="flex flex-wrap items-center justify-between gap-1 text-[10px] sm:text-xs font-[family-name:var(--font-outfit)] tracking-wider mb-1 z-20">
                <span className="font-bold text-slate-600 uppercase tracking-wider">OUR STRENGTHS</span>
                <span className="font-bold text-[#006EDC] uppercase tracking-wider">GLOBAL PHARMACEUTICAL SUPPLY</span>
              </div>

              {/* Circular Network Canvas */}
              <div className="relative w-full flex-1 flex items-center justify-center my-auto min-h-[300px]">
                {/* Dotted Orbit Path */}
                <svg viewBox="0 0 320 320" className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="xMidYMid meet">
                  <circle
                    cx="160"
                    cy="160"
                    r="122"
                    fill="none"
                    stroke="#93C5FD"
                    strokeWidth="1.2"
                    strokeDasharray="4 4"
                    className="opacity-75"
                  />
                </svg>

                {/* Subtle Pulse Ring behind central hub */}
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-blue-400/30 animate-ping pointer-events-none"
                  style={{ animationDuration: "3.5s" }}
                />

                {/* Center Hub: Compact Official Zelnex Logo Badge */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(0,110,220,0.08)] flex items-center justify-center p-2.5 z-10 pointer-events-none">
                  <Image
                    src="/brand/zelnex-official-logo.png"
                    alt="Zelnex Pharmaceuticals"
                    width={96}
                    height={28}
                    className="w-14 sm:w-16 h-auto object-contain"
                    priority
                  />
                </div>

                {/* Continuously Rotating Orbital Track */}
                <div className="orbit-track absolute inset-0 pointer-events-none">
                  
                  {/* Node 1: 0 deg (Top -> Global Reach) */}
                  <div className="absolute inset-0 pointer-events-none" style={{ transform: "rotate(0deg)" }}>
                    <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto" style={{ top: "11.875%" }}>
                      <div style={{ transform: "rotate(0deg)" }}>
                        <div className="orbit-counter flex flex-col items-center text-center select-none group/node">
                          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0070DF] ring-4 ring-blue-100/90 flex items-center justify-center text-white shadow-md shadow-blue-500/25 transition-transform duration-200 group-hover/node:scale-110">
                            <Globe className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white" strokeWidth={1.8} />
                          </div>
                          <div className="mt-1 flex flex-col items-center max-w-[105px]">
                            <span className="font-bold text-slate-900 text-xs sm:text-[12.5px] leading-tight font-[family-name:var(--font-outfit)] whitespace-nowrap">
                              Global Reach
                            </span>
                            <span className="text-[10px] sm:text-[10.5px] text-slate-500 font-medium font-[family-name:var(--font-outfit)] mt-0.5 whitespace-nowrap">
                              10+ Markets Served
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Node 2: 120 deg (Bottom Right -> Trusted Quality Supply) */}
                  <div className="absolute inset-0 pointer-events-none" style={{ transform: "rotate(120deg)" }}>
                    <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto" style={{ top: "11.875%" }}>
                      <div style={{ transform: "rotate(-120deg)" }}>
                        <div className="orbit-counter flex flex-col items-center text-center select-none max-w-[110px] sm:max-w-[115px] group/node">
                          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#8B5CF6] ring-4 ring-purple-100/90 flex items-center justify-center text-white shadow-md shadow-purple-500/25 transition-transform duration-200 group-hover/node:scale-110">
                            <ShieldCheck className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white" strokeWidth={1.8} />
                          </div>
                          <div className="mt-1 flex flex-col items-center">
                            <span className="font-bold text-slate-900 text-xs sm:text-[12.5px] leading-tight font-[family-name:var(--font-outfit)] whitespace-nowrap">
                              Trusted Quality Supply
                            </span>
                            <span className="text-[9px] sm:text-[9.5px] text-slate-500 font-medium leading-tight font-[family-name:var(--font-outfit)] mt-0.5 text-center">
                              GMP-Compliant &amp; Regulatory Support
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Node 3: 240 deg (Bottom Left -> Wide Product Portfolio) */}
                  <div className="absolute inset-0 pointer-events-none" style={{ transform: "rotate(240deg)" }}>
                    <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto" style={{ top: "11.875%" }}>
                      <div style={{ transform: "rotate(-240deg)" }}>
                        <div className="orbit-counter flex flex-col items-center text-center select-none max-w-[110px] sm:max-w-[115px] group/node">
                          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#10B981] ring-4 ring-emerald-100/90 flex items-center justify-center text-white shadow-md shadow-emerald-500/25 transition-transform duration-200 group-hover/node:scale-110">
                            <Package className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white" strokeWidth={1.8} />
                          </div>
                          <div className="mt-1 flex flex-col items-center">
                            <span className="font-bold text-slate-900 text-xs sm:text-[12.5px] leading-tight font-[family-name:var(--font-outfit)] whitespace-nowrap">
                              Wide Product Portfolio
                            </span>
                            <span className="text-[10px] sm:text-[10.5px] text-slate-500 font-medium font-[family-name:var(--font-outfit)] mt-0.5 whitespace-nowrap">
                              355+ Finished Formulations
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            3. CORPORATE FOUNDATION GRID (4 CARDS)
           ════════════════════════════════════════════════════════════════ */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-slate-200/80 gap-4">
            <div>
              <span className="text-xs font-[family-name:var(--font-outfit)] uppercase text-[#006EDC] font-bold tracking-[0.16em] block mb-1">
                Strategic Foundation
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#082B61] font-[family-name:var(--font-outfit)] tracking-tight">
                Our Core Pillars & Commitments
              </h3>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 font-[family-name:var(--font-outfit)]">
              Established in India • Export First
            </span>
          </div>

          {/* 2x2 Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {corporatePillars.map((item) => (
              <div
                key={item.num}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-[#006EDC]/50 transition-all duration-300 group"
              >
                <div>
                  <div className="border-l-3 pl-3.5 mb-4" style={{ borderColor: item.accent }}>
                    <span className="text-xs font-bold tracking-wider uppercase font-[family-name:var(--font-outfit)]" style={{ color: item.accent }}>
                      {item.num} • {item.label}
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-900 font-[family-name:var(--font-outfit)] mt-1 tracking-tight">
                      {item.title}
                    </h4>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Tags Metadata Footer */}
                <div className="pt-3.5 border-t border-slate-100 flex flex-wrap items-center gap-2">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 bg-slate-50 border border-slate-200/80 text-slate-700 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Overview;
