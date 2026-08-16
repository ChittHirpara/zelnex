"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FileCheck2,
  ShieldCheck,
  PackageCheck,
  CheckCircle2,
  Globe2,
  Boxes,
  ArrowRight,
} from "lucide-react";

const STATS_DATA = [
  {
    number: "8+",
    labelTop: "Years of",
    labelBottom: "Global Expertise",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#006EDC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    number: "800+",
    labelTop: "Commercial",
    labelBottom: "Formulations",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#006EDC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M10.5 1.5H13.5V4.5H10.5V1.5Z" />
        <rect x="6" y="4.5" width="12" height="18" rx="3" />
        <path d="M9 12H15M12 9V15" />
      </svg>
    ),
  },
  {
    number: "50+",
    labelTop: "Countries",
    labelBottom: "Worldwide Export",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#006EDC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    number: "100%",
    labelTop: "WHO-GMP",
    labelBottom: "Certified Compliance",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#006EDC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
];

export function Overview() {
  const rootRef = useRef<HTMLElement>(null);

  return (
    <section
      id="overview"
      ref={rootRef}
      className="relative scroll-mt-24 py-16 sm:py-24 overflow-hidden bg-white select-none text-[#111111]"
    >
      {/* Scoped Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="relative z-20 mx-auto max-w-[1300px] px-4 sm:px-6 md:px-8">
        {/* ── Outer Bordered Deck Container ── */}
        <div className="border border-[#DCDCD2] bg-white rounded-[24px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.02)] flex flex-col mb-12">
          {/* ══════════════════════════════════════════════════════════
              HEADER BLOCK (bg #FAFBF9)
             ══════════════════════════════════════════════════════════ */}
          <div className="grid grid-cols-1 md:grid-cols-[12px_1fr_12px] border-b border-[#DCDCD2]">
            <div className="hidden md:block border-r border-[#DCDCD2] bg-[#FAFBF9]" />
            <div className="pt-16 pb-14 px-6 md:px-12 text-center flex flex-col items-center bg-[#FAFBF9]">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#006EDC]/10 border border-[#006EDC]/20 mb-3.5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#006EDC] animate-pulse" />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#006EDC]">
                  Company Overview
                </p>
              </div>

              <h2
                className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#111111] leading-[1.18] tracking-[-0.02em] max-w-[850px] mb-4"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Building a Trusted Export-Oriented Pharmaceutical Brand
              </h2>

              <p className="text-base text-[#555555] max-w-[780px] font-['Inter',sans-serif] leading-relaxed">
                Zelnex Pharmaceuticals Pvt. Ltd. delivers high-quality, affordable, and globally compliant generic healthcare formulations—specializing in regulatory dossier support, WHO-GMP contract manufacturing, and international distribution across 50+ countries.
              </p>
            </div>
            <div className="hidden md:block border-l border-[#DCDCD2] bg-[#FAFBF9]" />
          </div>

          {/* ══════════════════════════════════════════════════════════
              PANEL 01: Regulatory Affairs & CTD Dossier Compilation
              (Layout: Left = Visual Card, Right = Text)
             ══════════════════════════════════════════════════════════ */}
          <div className="grid grid-cols-1 md:grid-cols-[12px_1fr_12px] border-b border-[#DCDCD2]">
            <div className="hidden md:block border-r border-[#DCDCD2] bg-white" />
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#DCDCD2]">
              {/* Left Visual Card */}
              <div className="bg-[#FAFBF9]/60 p-6 md:p-10 flex flex-col items-center justify-center min-h-[440px]">
                <div className="w-full max-w-[440px] bg-white border border-[#DCDCD2] rounded-[20px] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between h-full">
                  <div>
                    {/* Header Pill */}
                    <div className="flex items-center justify-between pb-3.5 border-b border-[#E5E5E5] mb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[#006EDC]/10 flex items-center justify-center text-[#006EDC]">
                          <FileCheck2 className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#111111]">eCTD Regulatory Index</div>
                          <div className="text-[10px] text-[#777777]">Modules 1 through 5 Ready</div>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        MOH Ready
                      </span>
                    </div>

                    {/* Key Technical Documentation Badges */}
                    <div className="space-y-2.5 mb-5">
                      <div className="flex items-center justify-between p-3 rounded-xl bg-[#F7F9FC] border border-[#E9EFF6]">
                        <span className="text-xs font-semibold text-[#171717]">Zone IVb Stability Validation</span>
                        <span className="text-[11px] font-mono font-bold text-[#006EDC] bg-white px-2 py-0.5 rounded-md border border-[#D0E2F6]">36 Months Real-Time</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-xl bg-[#F7F9FC] border border-[#E9EFF6]">
                        <span className="text-xs font-semibold text-[#171717]">Format Standards</span>
                        <span className="text-[11px] font-mono font-bold text-[#171717] bg-white px-2 py-0.5 rounded-md border border-[#E0E0E0]">CTD · eCTD · ACTD</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-xl bg-[#F7F9FC] border border-[#E9EFF6]">
                        <span className="text-xs font-semibold text-[#171717]">Bioequivalence & Dissolution</span>
                        <span className="text-[11px] font-mono font-bold text-emerald-700 bg-white px-2 py-0.5 rounded-md border border-emerald-200">100% In Vitro Passed</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary Bar */}
                  <div className="pt-3 border-t border-[#E5E5E5] flex items-center justify-between text-[11px] text-[#666666]">
                    <span className="flex items-center gap-1">
                      <Globe2 className="w-3.5 h-3.5 text-[#006EDC]" />
                      <span>50+ Countries Filing Experience</span>
                    </span>
                    <span className="font-bold text-[#111111]">Fast MOH Clearance</span>
                  </div>
                </div>
              </div>

              {/* Right Text Column */}
              <div className="bg-white p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                <div className="text-xs font-bold uppercase tracking-wider text-[#006EDC] mb-2">
                  PILLAR 01
                </div>
                <h3
                  className="text-2xl sm:text-3xl font-semibold text-[#111111] leading-tight mb-4"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Dedicated CTD / eCTD Regulatory Dossier Support.
                </h3>
                <p className="text-sm sm:text-[15px] leading-relaxed text-[#555555] font-['Inter',sans-serif]">
                  Our in-house regulatory affairs team compiles comprehensive CTD and eCTD Module 1–5 dossiers, Certificates of Analysis (CoA), and stability study records in strict adherence to ICH guidelines and Zone IVb tropical climatic conditions.
                </p>

                <div className="mt-8 pt-6 border-t border-[#DCDCD2] grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-bold text-[#111111] mb-1">MOH Submission Guidance</h4>
                    <p className="text-xs text-[#666666] leading-relaxed">
                      Customized registration dossiers matching Ministry of Health authorities across CIS, Africa, LATAM, and Southeast Asia.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#111111] mb-1">Zone IVb Stability Data</h4>
                    <p className="text-xs text-[#666666] leading-relaxed">
                      Real-time 36-month and accelerated stability records ensuring zero molecular degradation in tropical export markets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block border-l border-[#DCDCD2] bg-white" />
          </div>

          {/* ══════════════════════════════════════════════════════════
              PANEL 02: Stringent QA/QC Testing & WHO-GMP Standards
              (Layout: Left = Text lg:order-1, Right = Visual Card lg:order-2)
             ══════════════════════════════════════════════════════════ */}
          <div className="grid grid-cols-1 md:grid-cols-[12px_1fr_12px] border-b border-[#DCDCD2]">
            <div className="hidden md:block border-r border-[#DCDCD2] bg-white" />
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#DCDCD2]">
              {/* Left Text Column */}
              <div className="bg-white p-8 md:p-12 lg:p-14 flex flex-col justify-center lg:order-1">
                <div className="text-xs font-bold uppercase tracking-wider text-[#006EDC] mb-2">
                  PILLAR 02
                </div>
                <h3
                  className="text-2xl sm:text-3xl font-semibold text-[#111111] leading-tight mb-4"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Stringent QA/QC Analytical Testing & Compliance.
                </h3>
                <p className="text-sm sm:text-[15px] leading-relaxed text-[#555555] font-['Inter',sans-serif]">
                  Formulations are sourced and manufactured strictly through accredited WHO-GMP and ISO 9001:2015 certified facilities. Every commercial batch undergoes complete analytical HPLC potency testing, dissolution profiling, and sterility verification prior to dispatch.
                </p>

                <div className="mt-8 pt-6 border-t border-[#DCDCD2] grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-bold text-[#111111] mb-1">100% HPLC Assay Verification</h4>
                    <p className="text-xs text-[#666666] leading-relaxed">
                      Active pharmaceutical ingredient (API) potency and chemical purity verified against USP, BP, and IP pharmacopeias.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#111111] mb-1">Grade A Cleanroom Facilities</h4>
                    <p className="text-xs text-[#666666] leading-relaxed">
                      Sterile lyophilized vials and oral dosage forms produced under strict laminar air-flow and zero-bioburden controls.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Visual Card */}
              <div className="bg-[#FAFBF9]/60 p-6 md:p-10 flex flex-col items-center justify-center min-h-[440px] lg:order-2">
                <div className="w-full max-w-[440px] bg-white border border-[#DCDCD2] rounded-[20px] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between h-full">
                  <div>
                    {/* Header Pill */}
                    <div className="flex items-center justify-between pb-3.5 border-b border-[#E5E5E5] mb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                          <ShieldCheck className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#111111]">Analytical Quality Control</div>
                          <div className="text-[10px] text-[#777777]">Batch Release Verification</div>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-blue-50 text-[#006EDC] border border-blue-200 text-[11px] font-bold">
                        WHO-GMP
                      </span>
                    </div>

                    {/* Analytical Highlights */}
                    <div className="space-y-2.5 mb-5">
                      <div className="flex items-center justify-between p-3 rounded-xl bg-[#F7F9FC] border border-[#E9EFF6]">
                        <span className="text-xs font-semibold text-[#171717]">HPLC Assay Potency</span>
                        <span className="text-[11px] font-mono font-bold text-emerald-700 bg-white px-2 py-0.5 rounded-md border border-emerald-200">99.8% Active Purity</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-xl bg-[#F7F9FC] border border-[#E9EFF6]">
                        <span className="text-xs font-semibold text-[#171717]">Cleanroom Classification</span>
                        <span className="text-[11px] font-mono font-bold text-[#171717] bg-white px-2 py-0.5 rounded-md border border-[#E0E0E0]">ISO Class 5 / Grade A</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-xl bg-[#F7F9FC] border border-[#E9EFF6]">
                        <span className="text-xs font-semibold text-[#171717]">Impurity & Sterility Check</span>
                        <span className="text-[11px] font-mono font-bold text-[#006EDC] bg-white px-2 py-0.5 rounded-md border border-[#D0E2F6]">Zero Bioburden</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary Bar */}
                  <div className="pt-3 border-t border-[#E5E5E5] flex items-center justify-between text-[11px] text-[#666666]">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Certified Batch Release</span>
                    </span>
                    <span className="font-bold text-[#111111]">USP · BP · IP Cleared</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block border-l border-[#DCDCD2] bg-white" />
          </div>

          {/* ══════════════════════════════════════════════════════════
              PANEL 03: Custom Sourcing, Packaging & Global Distribution
              (Layout: Left = Visual Card, Right = Text)
             ══════════════════════════════════════════════════════════ */}
          <div className="grid grid-cols-1 md:grid-cols-[12px_1fr_12px]">
            <div className="hidden md:block border-r border-[#DCDCD2] bg-white" />
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#DCDCD2]">
              {/* Left Visual Card */}
              <div className="bg-[#FAFBF9]/60 p-6 md:p-10 flex flex-col items-center justify-center min-h-[440px]">
                <div className="w-full max-w-[440px] bg-white border border-[#DCDCD2] rounded-[20px] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between h-full">
                  <div>
                    {/* Header Pill */}
                    <div className="flex items-center justify-between pb-3.5 border-b border-[#E5E5E5] mb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600">
                          <PackageCheck className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#111111]">Packaging & Sourcing</div>
                          <div className="text-[10px] text-[#777777]">Export Barrier Formats</div>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-[11px] font-bold">
                        14+ Formats
                      </span>
                    </div>

                    {/* Packaging Highlights */}
                    <div className="space-y-2.5 mb-5">
                      <div className="flex items-center justify-between p-3 rounded-xl bg-[#F7F9FC] border border-[#E9EFF6]">
                        <span className="text-xs font-semibold text-[#171717]">Alu-Alu & PVC/PVDC Blister</span>
                        <span className="text-[11px] font-mono font-bold text-[#006EDC] bg-white px-2 py-0.5 rounded-md border border-[#D0E2F6]">Cold-Form Foil</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-xl bg-[#F7F9FC] border border-[#E9EFF6]">
                        <span className="text-xs font-semibold text-[#171717]">Type III Vials & HDPE Bottles</span>
                        <span className="text-[11px] font-mono font-bold text-[#171717] bg-white px-2 py-0.5 rounded-md border border-[#E0E0E0]">Induction Sealed</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-xl bg-[#F7F9FC] border border-[#E9EFF6]">
                        <span className="text-xs font-semibold text-[#171717]">Cold Chain Freight Logistics</span>
                        <span className="text-[11px] font-mono font-bold text-emerald-700 bg-white px-2 py-0.5 rounded-md border border-emerald-200">2°C to 8°C Monitored</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary Bar */}
                  <div className="pt-3 border-t border-[#E5E5E5] flex items-center justify-between text-[11px] text-[#666666]">
                    <span className="flex items-center gap-1">
                      <Boxes className="w-3.5 h-3.5 text-amber-600" />
                      <span>800+ Commercial Formulations</span>
                    </span>
                    <span className="font-bold text-[#111111]">Turnkey Export Ready</span>
                  </div>
                </div>
              </div>

              {/* Right Text Column */}
              <div className="bg-white p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                <div className="text-xs font-bold uppercase tracking-wider text-[#006EDC] mb-2">
                  PILLAR 03
                </div>
                <h3
                  className="text-2xl sm:text-3xl font-semibold text-[#111111] leading-tight mb-4"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Custom Sourcing, Packaging & Global Distribution.
                </h3>
                <p className="text-sm sm:text-[15px] leading-relaxed text-[#555555] font-['Inter',sans-serif]">
                  From high-barrier Alu-Alu blister packaging to tamper-evident induction-sealed bottles and sterile vials, our packaging options are engineered to withstand tropical humidity. We provide complete serialization, Braille embossing, and cold-chain freight logistics for 50+ countries.
                </p>

                <div className="mt-8 pt-6 border-t border-[#DCDCD2] grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-bold text-[#111111] mb-1">Custom Batch Formulations</h4>
                    <p className="text-xs text-[#666666] leading-relaxed">
                      Flexible batch sizing, custom export artwork branding, and rapid turnaround for institutional tenders.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#111111] mb-1">End-to-End Cold Chain</h4>
                    <p className="text-xs text-[#666666] leading-relaxed">
                      Temperature-controlled global freight and logistics ensuring formulation stability from factory to port.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block border-l border-[#DCDCD2] bg-white" />
          </div>
        </div>

        {/* ── Signature Hero-Grade Liquid Glass Stats Slab ── */}
        <div className="overview-stats-bar relative max-w-[1160px] mx-auto">
          <div
            className="glass-surface select-none relative overflow-hidden rounded-[26px] md:rounded-[32px] transition-all duration-300"
            style={{
              background:
                "radial-gradient(120% 140% at 14% -12%, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.20) 60%), linear-gradient(135deg, rgba(255, 255, 255, 0.60), rgba(240, 248, 255, 0.30))",
              backdropFilter: "blur(28px) saturate(175%)",
              WebkitBackdropFilter: "blur(28px) saturate(175%)",
              border: "1.5px solid rgba(255, 255, 255, 0.85)",
              boxShadow: `
                0 24px 50px -10px rgba(14, 46, 108, 0.16),
                0 6px 18px rgba(14, 46, 108, 0.08),
                inset 0 2px 0 rgba(255, 255, 255, 0.95),
                inset 0 -2px 4px rgba(12, 44, 104, 0.08),
                inset 0 0 0 1.5px rgba(186, 220, 255, 0.35)
              `,
            }}
          >
            {/* Top-Right Glowing Flare */}
            <div
              className="absolute right-6 top-6 w-2.5 h-2.5 rounded-full pointer-events-none"
              style={{
                background: "#ffffff",
                boxShadow: "0 0 8px #ffffff, 0 0 16px #00B8F2",
              }}
            />

            {/* Bottom Cyan Caustic Rim */}
            <div
              className="absolute bottom-0 inset-x-8 h-[2.5px] rounded-full pointer-events-none"
              style={{
                background: "linear-gradient(90deg, transparent, #00B8F2 50%, transparent)",
                boxShadow: "0 0 12px rgba(0, 184, 242, 0.85)",
              }}
            />

            {/* Stat Columns */}
            <div
              className="relative z-[4] grid grid-cols-2 md:grid-cols-4 w-full"
              style={{
                padding: "clamp(18px, 2.4vw, 28px) clamp(16px, 2.5vw, 32px)",
                minHeight: 128,
              }}
            >
              {STATS_DATA.map((stat) => (
                <div
                  key={stat.number}
                  className="gs-stat flex items-center"
                  style={{
                    gap: "clamp(10px, 1.5vw, 18px)",
                    padding: "clamp(8px, 1.2vw, 16px) clamp(8px, 1.4vw, 20px)",
                  }}
                >
                  <div
                    className="flex-none flex items-center justify-center rounded-full transition-transform duration-300 hover:scale-110"
                    style={{
                      width: "clamp(42px, 3.8vw, 54px)",
                      height: "clamp(42px, 3.8vw, 54px)",
                      background: "radial-gradient(circle at 35% 35%, #ffffff 0%, #e6f4fe 60%, #cbe8fd 100%)",
                      border: "1.2px solid rgba(186, 220, 255, 0.8)",
                      boxShadow: "0 4px 12px rgba(0, 50, 130, 0.12), inset 0 1.5px 2px #ffffff, inset 0 -1.5px 3px rgba(0, 110, 220, 0.15)",
                    }}
                  >
                    <div className="w-5 h-5">{stat.icon}</div>
                  </div>

                  <div className="flex flex-col">
                    <div
                      className="font-display font-black tracking-tight leading-none"
                      style={{
                        fontSize: "clamp(1.75rem, 2.8vw, 2.65rem)",
                        color: "#082B61",
                      }}
                    >
                      {stat.number}
                    </div>
                    <div
                      className="font-bold leading-tight uppercase tracking-wider text-[#5b6089] mt-1"
                      style={{
                        fontSize: "clamp(10px, 0.85vw, 12px)",
                      }}
                    >
                      <span>{stat.labelTop}</span>
                      <br />
                      <span>{stat.labelBottom}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
