"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowRight,
  ShieldCheck,
  Building2,
  Compass,
  Target,
  Award,
  Globe2,
  CheckCircle2,
  ExternalLink,
  Code2,
} from "lucide-react";

export function Overview() {
  const { t } = useLanguage();

  const corporatePillars = [
    {
      num: "01.01",
      label: "CORPORATE VISION",
      accent: "#06B6D4",
      accentBg: "#ECFEFF",
      accentBorder: "#A5F3FC",
      title: "Expanding Global Healthcare Access",
      desc: "To be recognized as a premier international pharmaceutical brand delivering world-class, affordable, and compliant finished generic formulations to emerging and regulated healthcare markets across the globe.",
      tags: ["Global Equity", "Affordability", "Accessible Medicine"],
    },
    {
      num: "01.02",
      label: "CORPORATE MISSION",
      accent: "#0284C7",
      accentBg: "#F0F9FF",
      accentBorder: "#BAE6FD",
      title: "Science, Integrity & Uncompromising Quality",
      desc: "Committed to improving patient lives by sourcing, formulating, and distributing high-potency finished dosage forms manufactured exclusively under strict WHO-GMP conditions, backed by complete regulatory transparency.",
      tags: ["WHO-GMP", "Patient Centricity", "Supply Security"],
    },
    {
      num: "01.03",
      label: "QUALITY PHILOSOPHY",
      accent: "#0D9488",
      accentBg: "#F0FDFA",
      accentBorder: "#99F6E4",
      title: "Zero-Defect Quality Assurance",
      desc: "Every commercial batch is produced in certified cleanrooms and subjected to multi-stage analytical testing, real-time Zone IVb stability validation (30°C / 75% RH), and direct Certificate of Analysis (CoA) verification.",
      tags: ["Zone IVb Validated", "100% CoA Batch Release", "ICH Guidelines"],
    },
    {
      num: "01.04",
      label: "GLOBAL COMPLIANCE",
      accent: "#4F46E5",
      accentBg: "#EEF2FF",
      accentBorder: "#C7D2FE",
      title: "International Regulatory Integration",
      desc: "Maintaining seamless alignment with foreign health ministries and regional regulatory authorities through ready Common Technical Document (CTD) and electronic CTD (eCTD) dossiers across Asia, Africa, Middle East & Americas.",
      tags: ["eCTD Modules 1-5", "COPP & FSC Certified", "MOH Approvals"],
    },
  ];

  return (
    <section
      id="overview"
      className="relative scroll-mt-24 py-16 sm:py-24 bg-[#f3f4f6] text-[#111827] select-none overflow-hidden font-['Inter',sans-serif] border-b border-[#E5E7EB]"
    >
      {/* 20px Pattern Grid Background */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40 devtools-grid-20" aria-hidden />

      {/* Main Structural Container */}
      <div className="relative z-10 mx-auto max-w-[1340px] px-4 sm:px-6 md:px-8">
        
        {/* ════════════════════════════════════════════════════════════════
            1. TOP TECHNICAL METADATA BAR
           ════════════════════════════════════════════════════════════════ */}
        <div className="flex flex-wrap items-center justify-between border-b border-[#E5E7EB] pb-4 mb-10 text-[11px] font-['JetBrains_Mono',monospace] tracking-wider uppercase text-slate-500">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#06B6D4] animate-pulse rounded-full" />
            <span className="text-slate-700 font-bold">SYS_REF: ZELNEX_CORPORATE_PROFILE</span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="hidden sm:inline">HQ: AHMEDABAD, INDIA [23.0225° N, 72.5714° E]</span>
          </div>
          <div className="flex items-center gap-4">
            <span>WHO-GMP ACCREDITED</span>
            <span className="text-slate-300">|</span>
            <span className="text-[#0891B2] font-bold">STATUS: OPERATIONAL</span>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            2. COMPANY OVERVIEW HERO: INTER 600 + WIREFRAME GRAPHIC
           ════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-b border-[#E5E7EB] pb-16 mb-16 items-center">
          
          {/* Left: Headline & Corporate Lead */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 border border-[#06B6D4]/30 bg-white rounded-md w-fit mb-6 shadow-2xs">
              <span className="w-2 h-2 bg-[#06B6D4] rounded-full" />
              <span className="text-[11px] font-['JetBrains_Mono',monospace] font-bold tracking-[0.12em] uppercase text-[#0891B2]">
                01.00 // COMPANY OVERVIEW
              </span>
            </div>

            {/* Inter 600 Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#111827] tracking-tight leading-[1.04] mb-6 font-['Inter',sans-serif]">
              Zelnex Pharmaceuticals Pvt. Ltd.
            </h2>

            {/* Monospaced Technical Subheading with Cyan Left Hairline */}
            <div className="border-l-2 border-[#06B6D4] pl-4 sm:pl-5 my-2">
              <p className="text-xs sm:text-[13px] font-['JetBrains_Mono',monospace] uppercase text-[#0891B2] tracking-wider leading-relaxed font-semibold">
                AN EXPORT-ORIENTED PHARMACEUTICAL ENTERPRISE DELIVERING CERTIFIED GENERICS, COMPREHENSIVE CTD DOSSIERS, AND TROPICAL CLIMATE FINISHED FORMULATIONS TO 50+ COUNTRIES WORLDWIDE.
              </p>
            </div>

            {/* Corporate Narrative Body */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-5 mb-8 max-w-xl font-normal">
              Headquartered in India, Zelnex Pharmaceuticals operates with a singular focus: bridging advanced research, WHO-GMP compliant formulation manufacturing, and dependable international supply chains. We serve healthcare providers, government health ministries, institutional hospitals, and commercial distributors with affordable, high-potency medicines.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 font-['JetBrains_Mono',monospace] text-xs font-bold uppercase tracking-wider">
              <Link
                href="#products"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#06B6D4] hover:bg-[#0891B2] text-white rounded-md shadow-sm transition-colors cursor-pointer"
              >
                <span>EXPLORE PRODUCTS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#D1D5DB] bg-white hover:border-[#06B6D4] text-[#111827] rounded-md shadow-2xs transition-colors cursor-pointer"
              >
                <span>DEVTOOLS SERVICES</span>
                <Code2 className="w-3.5 h-3.5 text-[#06B6D4]" />
              </Link>
            </div>
          </div>

          {/* Right: Technical Blueprint Topology Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-square border border-[#D1D5DB] bg-white rounded-xl p-6 flex flex-col justify-between shadow-xs overflow-hidden">
              
              {/* Corner L-Markers */}
              <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-[#06B6D4]" />
              <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-[#06B6D4]" />
              <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-[#06B6D4]" />
              <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-[#06B6D4]" />

              {/* Wireframe Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-[10px] font-['JetBrains_Mono',monospace] uppercase text-slate-500">
                <span>CORPORATE TOPOLOGY</span>
                <span className="text-[#0891B2] font-bold">NETWORK: GLOBAL</span>
              </div>

              {/* Rotating Wireframe Canvas */}
              <div className="relative w-full h-[240px] flex items-center justify-center">
                <svg viewBox="0 0 300 300" className="w-full h-full">
                  {/* Outer Orbit Path */}
                  <circle
                    cx="150"
                    cy="150"
                    r="105"
                    fill="none"
                    stroke="#D1D5DB"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                  {/* Inner Orbit Path */}
                  <circle
                    cx="150"
                    cy="150"
                    r="60"
                    fill="none"
                    stroke="#D1D5DB"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />

                  {/* Grid Lines */}
                  <line x1="150" y1="20" x2="150" y2="280" stroke="#E5E7EB" strokeWidth="0.5" />
                  <line x1="20" y1="150" x2="280" y2="150" stroke="#E5E7EB" strokeWidth="0.5" />

                  {/* Central Node (Ahmedabad HQ) */}
                  <circle cx="150" cy="150" r="12" fill="#111827" />
                  <circle cx="150" cy="150" r="6" fill="#06B6D4" />

                  {/* Central Pulse */}
                  <circle cx="150" cy="150" r="16" fill="none" stroke="#06B6D4" strokeWidth="0.8" strokeOpacity="0.5">
                    <animate attributeName="r" values="14;28" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="stroke-opacity" values="0.6;0" dur="3s" repeatCount="indefinite" />
                  </circle>

                  {/* Orbiting Satellite Nodes */}
                  <g>
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 150 150"
                      to="360 150 150"
                      dur="20s"
                      repeatCount="indefinite"
                    />

                    {/* Satellite 1: Africa & Middle East */}
                    <line x1="150" y1="150" x2="150" y2="45" stroke="#06B6D4" strokeWidth="1" strokeOpacity="0.3" />
                    <circle cx="150" cy="45" r="7" fill="#111827" />
                    <rect x="147" y="42" width="6" height="6" fill="#06B6D4" />

                    {/* Satellite 2: Asia & CIS */}
                    <line x1="150" y1="150" x2="240" y2="202" stroke="#06B6D4" strokeWidth="1" strokeOpacity="0.3" />
                    <circle cx="240" cy="202" r="7" fill="#111827" />
                    <rect x="237" y="199" width="6" height="6" fill="#0284C7" />

                    {/* Satellite 3: Americas */}
                    <line x1="150" y1="150" x2="60" y2="202" stroke="#06B6D4" strokeWidth="1" strokeOpacity="0.3" />
                    <circle cx="60" cy="202" r="7" fill="#111827" />
                    <rect x="57" y="199" width="6" height="6" fill="#0D9488" />
                  </g>
                </svg>

                <div className="absolute top-2 left-2 bg-slate-100 border border-slate-200 px-2 py-0.5 text-[9px] font-['JetBrains_Mono',monospace] text-slate-800">
                  HQ: AHMEDABAD [IN]
                </div>
                <div className="absolute bottom-2 right-2 bg-slate-100 border border-slate-200 px-2 py-0.5 text-[9px] font-['JetBrains_Mono',monospace] text-slate-800">
                  PORTS: 50+ GLOBAL
                </div>
              </div>

              {/* Wireframe Footer */}
              <div className="border-t border-slate-100 pt-2 flex items-center justify-between text-[10px] font-['JetBrains_Mono',monospace]">
                <span className="text-slate-500">STANDARD: WHO-GMP</span>
                <span className="text-[#0891B2] font-bold">100% COMPLIANT</span>
              </div>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            3. CORPORATE FOUNDATION GRID (4 DEVTOOLS PANELS)
           ════════════════════════════════════════════════════════════════ */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-[#E5E7EB] gap-4">
            <div>
              <span className="text-[11px] font-['JetBrains_Mono',monospace] uppercase text-[#0891B2] font-bold tracking-[0.15em] block mb-1">
                CORPORATE DNA & FOUNDATION // 01.01 — 01.04
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#111827] font-['Inter',sans-serif] tracking-tight">
                Who We Are & Our Commitments
              </h3>
            </div>
            <span className="text-xs font-['JetBrains_Mono',monospace] text-slate-500">
              ESTABLISHED IN INDIA // EXPORT FIRST
            </span>
          </div>

          {/* 2x2 Bento Cards with DevTools panel styling */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {corporatePillars.map((item) => (
              <div
                key={item.num}
                className="bg-white border border-[#E5E7EB] rounded-xl p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:border-[#06B6D4] transition-colors"
              >
                <div>
                  <div className="border-l-2 pl-3 mb-4" style={{ borderColor: item.accent }}>
                    <span className="text-[10px] font-['JetBrains_Mono',monospace] font-bold tracking-widest uppercase text-slate-500">
                      {item.num} // {item.label}
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold text-[#111827] font-['Inter',sans-serif] mt-1">
                      {item.title}
                    </h4>
                  </div>

                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-6 font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Tags Metadata Footer */}
                <div className="pt-3.5 border-t border-slate-100 flex flex-wrap items-center gap-1.5 font-['JetBrains_Mono',monospace] text-[10px]">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 bg-[#F9FAFB] border border-[#E5E7EB] text-slate-700 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            4. TECHNICAL STATS TELEMETRY BAR
           ════════════════════════════════════════════════════════════════ */}
        <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            
            <div className="flex flex-col pt-4 sm:pt-0 sm:px-4 first:pl-0 font-['JetBrains_Mono',monospace]">
              <span className="text-[10px] uppercase text-slate-400 tracking-wider mb-1">
                MARKET_PRESENCE
              </span>
              <div className="text-3xl sm:text-4xl font-bold text-[#111827]">
                50+
              </div>
              <span className="text-xs text-slate-600 mt-1 font-sans font-medium">Export Countries</span>
            </div>

            <div className="flex flex-col pt-4 sm:pt-0 sm:px-4 font-['JetBrains_Mono',monospace]">
              <span className="text-[10px] uppercase text-slate-400 tracking-wider mb-1">
                COMMERCIAL_CATALOG
              </span>
              <div className="text-3xl sm:text-4xl font-bold text-[#111827]">
                800+
              </div>
              <span className="text-xs text-slate-600 mt-1 font-sans font-medium">Approved Formulations</span>
            </div>

            <div className="flex flex-col pt-4 sm:pt-0 sm:px-4 font-['JetBrains_Mono',monospace]">
              <span className="text-[10px] uppercase text-slate-400 tracking-wider mb-1">
                DOSSIER_LIBRARY
              </span>
              <div className="text-3xl sm:text-4xl font-bold text-[#111827]">
                150+
              </div>
              <span className="text-xs text-slate-600 mt-1 font-sans font-medium">Ready CTD / eCTD Files</span>
            </div>

            <div className="flex flex-col pt-4 sm:pt-0 sm:px-4 font-['JetBrains_Mono',monospace]">
              <span className="text-[10px] uppercase text-slate-400 tracking-wider mb-1">
                QUALITY_STANDARD
              </span>
              <div className="text-3xl sm:text-4xl font-bold text-[#0891B2]">
                100%
              </div>
              <span className="text-xs text-slate-600 mt-1 font-sans font-medium">WHO-GMP Validated</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Overview;
