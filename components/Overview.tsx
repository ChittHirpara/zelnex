"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function Overview() {

  const corporatePillars = [
    {
      num: "01",
      label: "Corporate Vision",
      accent: "#006EDC",
      accentBg: "#ECFEFF",
      title: "Expanding Global Healthcare Access",
      desc: "To be recognized as a premier international pharmaceutical brand delivering world-class, affordable, and compliant finished generic formulations to emerging and regulated healthcare markets across the globe.",
      tags: ["Global Equity", "Affordability", "Accessible Medicine"],
    },
    {
      num: "02",
      label: "Corporate Mission",
      accent: "#0284C7",
      accentBg: "#F0F9FF",
      title: "Science, Integrity & Uncompromising Quality",
      desc: "Committed to improving patient lives by sourcing, formulating, and distributing high-potency finished dosage forms manufactured exclusively under strict WHO-GMP conditions, backed by complete regulatory transparency.",
      tags: ["WHO-GMP", "Patient Centricity", "Supply Security"],
    },
    {
      num: "03",
      label: "Quality Philosophy",
      accent: "#0D9488",
      accentBg: "#F0FDFA",
      title: "Zero-Defect Quality Assurance",
      desc: "Every commercial batch is produced in certified cleanrooms and subjected to multi-stage analytical testing, real-time Zone IVb stability validation (30°C / 75% RH), and direct Certificate of Analysis (CoA) verification.",
      tags: ["Zone IVb Validated", "100% CoA Release", "ICH Guidelines"],
    },
    {
      num: "04",
      label: "Global Compliance",
      accent: "#082B61",
      accentBg: "#EEF2FF",
      title: "International Regulatory Integration",
      desc: "Maintaining seamless alignment with foreign health ministries and regional regulatory authorities through ready Common Technical Document (CTD) and electronic CTD (eCTD) dossiers across Asia, Africa, Middle East & Americas.",
      tags: ["eCTD Modules 1-5", "COPP & FSC Certified", "MOH Approvals"],
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
                Company Overview
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#082B61] tracking-tight leading-[1.14] mb-5 font-[family-name:var(--font-outfit)]">
              Pioneering High-Potency Formulations for Global Markets
            </h2>

            {/* Corporate Narrative Body */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mt-1 mb-8 max-w-xl">
              Zelnex Pharmaceuticals Pvt. Ltd. is a fast-growing, export-oriented pharmaceutical manufacturer based in India. We specialize in developing and commercializing high-potency finished generic formulations manufactured under strict WHO-GMP compliance, providing accessible, quality-assured medicines to partners in over 50 countries worldwide.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 font-[family-name:var(--font-outfit)] text-sm font-semibold tracking-wide">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#006EDC] to-[#082B61] hover:from-[#082B61] hover:to-[#006EDC] text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <span>Read Full About Us</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="#products"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 bg-white hover:border-[#006EDC] hover:text-[#006EDC] text-slate-800 rounded-full shadow-xs hover:shadow-sm transition-all duration-200 cursor-pointer"
              >
                <span>Explore Products</span>
              </Link>
            </div>
          </div>

          {/* Right: Technical Blueprint Topology Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-square border border-slate-200 bg-white rounded-2xl p-6 flex flex-col justify-between shadow-sm overflow-hidden">
              
              {/* Corner L-Markers */}
              <div className="absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t-2 border-l-2 border-[#006EDC]" />
              <div className="absolute top-2.5 right-2.5 w-2.5 h-2.5 border-t-2 border-r-2 border-[#006EDC]" />
              <div className="absolute bottom-2.5 left-2.5 w-2.5 h-2.5 border-b-2 border-l-2 border-[#006EDC]" />
              <div className="absolute bottom-2.5 right-2.5 w-2.5 h-2.5 border-b-2 border-r-2 border-[#006EDC]" />

              {/* Wireframe Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 text-xs font-[family-name:var(--font-outfit)] uppercase tracking-wider font-semibold text-slate-500">
                <span>Distribution Topology</span>
                <span className="text-[#006EDC] font-bold">Network: Global</span>
              </div>

              {/* Rotating Wireframe Canvas */}
              <div className="relative w-full h-[230px] flex items-center justify-center">
                <svg viewBox="0 0 300 300" className="w-full h-full">
                  {/* Outer Orbit Path */}
                  <circle
                    cx="150"
                    cy="150"
                    r="105"
                    fill="none"
                    stroke="#CBD5E1"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                  {/* Inner Orbit Path */}
                  <circle
                    cx="150"
                    cy="150"
                    r="60"
                    fill="none"
                    stroke="#CBD5E1"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />

                  {/* Grid Lines */}
                  <line x1="150" y1="20" x2="150" y2="280" stroke="#E2E8F0" strokeWidth="0.5" />
                  <line x1="20" y1="150" x2="280" y2="150" stroke="#E2E8F0" strokeWidth="0.5" />

                  {/* Central Node (Surat HQ) */}
                  <circle cx="150" cy="150" r="12" fill="#082B61" />
                  <circle cx="150" cy="150" r="6" fill="#006EDC" />

                  {/* Central Pulse */}
                  <circle cx="150" cy="150" r="16" fill="none" stroke="#006EDC" strokeWidth="0.8" strokeOpacity="0.5">
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
                    <line x1="150" y1="150" x2="150" y2="45" stroke="#006EDC" strokeWidth="1" strokeOpacity="0.3" />
                    <circle cx="150" cy="45" r="7" fill="#082B61" />
                    <rect x="147" y="42" width="6" height="6" fill="#006EDC" />

                    {/* Satellite 2: Asia & CIS */}
                    <line x1="150" y1="150" x2="240" y2="202" stroke="#006EDC" strokeWidth="1" strokeOpacity="0.3" />
                    <circle cx="240" cy="202" r="7" fill="#082B61" />
                    <rect x="237" y="199" width="6" height="6" fill="#0284C7" />

                    {/* Satellite 3: Americas */}
                    <line x1="150" y1="150" x2="60" y2="202" stroke="#006EDC" strokeWidth="1" strokeOpacity="0.3" />
                    <circle cx="60" cy="202" r="7" fill="#082B61" />
                    <rect x="57" y="199" width="6" height="6" fill="#0D9488" />
                  </g>
                </svg>

                <div className="absolute top-2 left-2 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-md text-[10px] font-semibold text-slate-700 font-[family-name:var(--font-outfit)]">
                  HQ: Surat, India
                </div>
                <div className="absolute bottom-2 right-2 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-md text-[10px] font-semibold text-slate-700 font-[family-name:var(--font-outfit)]">
                  Exports: 50+ Destinations
                </div>
              </div>

              {/* Wireframe Footer */}
              <div className="border-t border-slate-100 pt-2.5 flex items-center justify-between text-xs font-[family-name:var(--font-outfit)]">
                <span className="text-slate-500 font-medium">Standard: WHO-GMP</span>
                <span className="text-[#006EDC] font-bold">100% Compliant</span>
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
