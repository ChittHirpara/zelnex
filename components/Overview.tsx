"use client";

import dynamic from "next/dynamic";
import React, { useRef, useSyncExternalStore } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  FileCheck2,
  ShieldCheck,
  CheckCircle2,
  Globe2,
  Boxes,
  ArrowRight,
} from "lucide-react";
import { LiquidEdgeFilter } from "./glass/LiquidDisplacement";

const GlassmorphismCanvas = dynamic(
  () => import("./GlassmorphismCanvas").then((mod) => mod.GlassmorphismCanvas),
  { ssr: false },
);

let webgl2Support: boolean | null = null;

function readWebgl2Support() {
  if (webgl2Support === null) {
    const probe = document.createElement("canvas");
    const context = probe.getContext("webgl2");
    context?.getExtension("WEBGL_lose_context")?.loseContext();
    webgl2Support = Boolean(context);
  }
  return webgl2Support;
}

function readServerWebgl2Support() {
  return false;
}

function subscribeToWebgl2() {
  return () => {};
}

export function Overview() {
  const { t } = useLanguage();
  const rootRef = useRef<HTMLElement>(null);
  const statsSurfaceRef = useRef<HTMLDivElement>(null);
  const glassLive = useSyncExternalStore(
    subscribeToWebgl2,
    readWebgl2Support,
    readServerWebgl2Support,
  );

  const statsData = [
    {
      number: t.overview.stats.stat1Number,
      labelTop: t.overview.stats.stat1Top,
      labelBottom: t.overview.stats.stat1Bottom,
      stroke: "#1e4fb8",
      icon: (
        <path
          d="M12 2.5l2.9 6.2 6.8.9-5 4.7 1.3 6.7L12 17.7l-6 3.3 1.3-6.7-5-4.7 6.8-.9L12 2.5z"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
    {
      number: t.overview.stats.stat2Number,
      labelTop: t.overview.stats.stat2Top,
      labelBottom: t.overview.stats.stat2Bottom,
      stroke: "#2e92c0",
      icon: (
        <>
          <rect x="6.5" y="3.5" width="11" height="17" rx="5.5" strokeWidth="1.8" />
          <line x1="12" y1="9.5" x2="12" y2="14.5" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="9.5" y1="12" x2="14.5" y2="12" strokeWidth="1.8" strokeLinecap="round" />
        </>
      ),
    },
    {
      number: t.overview.stats.stat3Number,
      labelTop: t.overview.stats.stat3Top,
      labelBottom: t.overview.stats.stat3Bottom,
      stroke: "#1e4fb8",
      icon: (
        <>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeWidth="1.8" />
          <polyline points="14 2 14 8 20 8" strokeWidth="1.8" />
          <line x1="9" y1="13" x2="15" y2="13" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="9" y1="17" x2="13" y2="17" strokeWidth="1.8" strokeLinecap="round" />
        </>
      ),
    },
    {
      number: t.overview.stats.stat4Number,
      labelTop: t.overview.stats.stat4Top,
      labelBottom: t.overview.stats.stat4Bottom,
      stroke: "#00a6a6",
      icon: (
        <>
          <path
            d="M12 2.8L4.5 6v5.8c0 4.8 3.2 9.3 7.5 10.4 4.3-1.1 7.5-5.6 7.5-10.4V6L12 2.8z"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M9.2 11.8l2 2 3.8-3.8"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      ),
    },
  ];

  return (
    <section
      id="overview"
      ref={rootRef}
      className="relative scroll-mt-24 py-16 sm:py-24 overflow-hidden bg-white select-none text-[#111111]"
    >
      <div className="relative z-20 mx-auto max-w-[1300px] px-4 sm:px-6 md:px-8">
        
        {/* ════════════════════════════════════════════════════════════════
            PART 1: THE COMPLETE COMPANY OVERVIEW & STRATEGIC PILLARS
           ════════════════════════════════════════════════════════════════ */}
        <div className="border border-[#DCDCD2] bg-white rounded-[24px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.02)] flex flex-col mb-12">
          {/* Header Block */}
          <div className="border-b border-[#DCDCD2] pt-10 pb-9 px-6 md:px-12 text-center flex flex-col items-center bg-[#FAFBF9]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#006EDC]/10 border border-[#006EDC]/20 mb-3.5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#006EDC] animate-pulse" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#006EDC]">
                {t.overview.badge}
              </p>
            </div>

            <h2
              className="text-[28px] sm:text-[36px] lg:text-[44px] font-bold text-[#111111] leading-[1.15] tracking-[-0.03em] max-w-[900px] mb-4"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {t.overview.title}
            </h2>

            <p className="text-base sm:text-[17px] text-[#444444] max-w-[860px] font-['Inter',sans-serif] leading-relaxed">
              {t.overview.lead}
            </p>
          </div>

          {/* 4 Core Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-b border-[#DCDCD2]">
            {/* Pillar 1 */}
            <div className="p-7 md:p-9 flex flex-col justify-between bg-white">
              <div>
                <div className="flex items-center gap-2.5 mb-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#006EDC]/10 flex items-center justify-center text-[#006EDC] font-bold text-xs">
                    {t.overview.p1Number}
                  </div>
                  <h3 className="font-bold text-lg text-[#111111] font-['Syne',sans-serif]">
                    {t.overview.p1Title}
                  </h3>
                </div>
                <p className="text-sm text-[#555555] font-['Inter',sans-serif] leading-relaxed mb-4">
                  {t.overview.p1Desc}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {t.overview.p1Tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-2.5 py-1 rounded-md bg-[#FAFBF9] border border-[#DCDCD2] text-[11px] font-semibold text-[#444444]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-7 md:p-9 flex flex-col justify-between bg-white border-t md:border-t-0">
              <div>
                <div className="flex items-center gap-2.5 mb-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#008A8A]/10 flex items-center justify-center text-[#008A8A] font-bold text-xs">
                    {t.overview.p2Number}
                  </div>
                  <h3 className="font-bold text-lg text-[#111111] font-['Syne',sans-serif]">
                    {t.overview.p2Title}
                  </h3>
                </div>
                <p className="text-sm text-[#555555] font-['Inter',sans-serif] leading-relaxed mb-4">
                  {t.overview.p2Desc}
                </p>
                <div className="p-3 rounded-xl bg-[#FAFBF9] border border-[#E5E5E5] flex items-center justify-between text-xs font-semibold text-[#111111]">
                  <span>{t.overview.p2Adherence}</span>
                  <span className="text-[#008A8A] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> {t.overview.p2Certified}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
            {/* Pillar 3 */}
            <div className="p-7 md:p-9 flex flex-col justify-between bg-white">
              <div>
                <div className="flex items-center gap-2.5 mb-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#1E3A8A]/10 flex items-center justify-center text-[#1E3A8A] font-bold text-xs">
                    {t.overview.p3Number}
                  </div>
                  <h3 className="font-bold text-lg text-[#111111] font-['Syne',sans-serif]">
                    {t.overview.p3Title}
                  </h3>
                </div>
                <p className="text-sm text-[#555555] font-['Inter',sans-serif] leading-relaxed">
                  {t.overview.p3Desc}
                </p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="p-7 md:p-9 flex flex-col justify-between bg-white border-t md:border-t-0">
              <div>
                <div className="flex items-center gap-2.5 mb-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#7928CA]/10 flex items-center justify-center text-[#7928CA] font-bold text-xs">
                    {t.overview.p4Number}
                  </div>
                  <h3 className="font-bold text-lg text-[#111111] font-['Syne',sans-serif]">
                    {t.overview.p4Title}
                  </h3>
                </div>
                <p className="text-sm text-[#555555] font-['Inter',sans-serif] leading-relaxed">
                  {t.overview.p4Desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            PART 2: TECHNICAL CAPABILITY PANELS
           ════════════════════════════════════════════════════════════════ */}
        <div className="border border-[#DCDCD2] bg-white rounded-[24px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.02)] flex flex-col mb-12">

          {/* ══════════════════════════════════════════════════════════
              PANEL 01: Regulatory Affairs & CTD Dossier Compilation
              (Layout: Left = Visual Card, Right = Text)
             ══════════════════════════════════════════════════════════ */}
          <div className="border-b border-[#DCDCD2]">
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#DCDCD2]">
              {/* Left Visual Card */}
              <div className="bg-[#FAFBF9]/60 p-5 md:p-8 flex flex-col items-center justify-center min-h-[340px]">
                <div className="w-full max-w-[440px] bg-white border border-[#DCDCD2] rounded-[20px] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.03)] flex flex-col gap-0">
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E5] mb-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#006EDC]/10 flex items-center justify-center text-[#006EDC]">
                          <FileCheck2 className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-[#111111] font-['Syne',sans-serif]">
                            eCTD Submission Ready
                          </h4>
                          <p className="text-xs text-[#777777]">Modules 1 through 5 Validation</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#006EDC] bg-[#006EDC]/10 px-2.5 py-1 rounded-full border border-[#006EDC]/20">
                        Zone IVb
                      </span>
                    </div>

                    <div className="space-y-3 font-['Inter',sans-serif]">
                      <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-[#FAFBF9] border border-[#E5E5E5]/60">
                        <span className="font-medium text-[#444444]">Module 1: Administrative Info</span>
                        <span className="text-[#008A8A] font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-[#FAFBF9] border border-[#E5E5E5]/60">
                        <span className="font-medium text-[#444444]">Module 2: Quality Overviews (QOS)</span>
                        <span className="text-[#008A8A] font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Complete
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-[#FAFBF9] border border-[#E5E5E5]/60">
                        <span className="font-medium text-[#444444]">Module 3: Chemical & Pharm Quality</span>
                        <span className="text-[#008A8A] font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> 36M Stability
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#E5E5E5] flex items-center justify-between text-xs text-[#666666]">
                    <span>Global MOH Filing Support</span>
                    <span className="font-semibold text-[#111111]">50+ Regulatory Authorities</span>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="p-6 md:p-9 flex flex-col justify-center bg-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAFBF9] border border-[#DCDCD2] w-fit mb-4 text-xs font-semibold text-[#555555]">
                  <span>01</span>
                  <span>/</span>
                  <span>{t.overview.panels.p1Badge}</span>
                </div>
                <h3
                  className="text-[22px] sm:text-[28px] font-bold text-[#111111] mb-3 leading-[1.15] tracking-[-0.025em]"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {t.overview.panels.p1Title}
                </h3>
                <p className="text-sm sm:text-base text-[#555555] font-['Inter',sans-serif] leading-relaxed mb-6">
                  {t.overview.panels.p1Desc}
                </p>
                <div className="space-y-2.5 font-['Inter',sans-serif] text-sm text-[#444444] mb-5">
                  {t.overview.panels.p1Points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#006EDC]" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#006EDC] hover:text-[#082B61] transition-colors"
                >
                  <span>{t.overview.panels.p1Cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="hidden md:block border-l border-[#DCDCD2] bg-white" />
          </div>

          {/* ══════════════════════════════════════════════════════════
              PANEL 02: 3rd Party Manufacturing & Contract Formulation
              (Layout: Left = Text, Right = Visual Card)
             ══════════════════════════════════════════════════════════ */}
          <div className="border-b border-[#DCDCD2]">
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#DCDCD2]">
              {/* Left Content */}
              <div className="p-6 md:p-9 flex flex-col justify-center bg-white order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAFBF9] border border-[#DCDCD2] w-fit mb-4 text-xs font-semibold text-[#555555]">
                  <span>02</span>
                  <span>/</span>
                  <span>{t.overview.panels.p2Badge}</span>
                </div>
                <h3
                  className="text-[22px] sm:text-[28px] font-bold text-[#111111] mb-3 leading-[1.15] tracking-[-0.025em]"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  <span className="text-[#008A8A]">3rd</span> Party Manufacturing
                </h3>
                <p className="text-sm sm:text-base text-[#555555] font-['Inter',sans-serif] leading-relaxed mb-6">
                  {t.overview.panels.p2Desc}
                </p>

                <div className="mb-4">
                  <h4 className="text-xs sm:text-sm font-bold text-[#111111] tracking-wide mb-3 font-['Syne',sans-serif]">
                    Process for 3rd Party Manufacturing:
                  </h4>
                  <div className="space-y-2.5 font-['Inter',sans-serif] text-sm text-[#444444]">
                    {t.overview.panels.p2Points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#008A8A] shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-[13px] text-[#666666] italic leading-relaxed mb-6 font-['Inter',sans-serif]">
                  With our commitment towards working collaboratively with customers, we provide Quality Branded medicines and Generics worldwide.
                </p>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#008A8A] hover:text-[#082B61] transition-colors"
                >
                  <span>{t.overview.panels.p2Cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Right Visual Card */}
              <div className="bg-[#FAFBF9]/60 p-5 md:p-8 flex flex-col items-center justify-center min-h-[340px] order-1 lg:order-2">
                <div className="w-full max-w-[440px] bg-white border border-[#DCDCD2] rounded-[20px] p-6 sm:p-7 shadow-[0_8px_24px_rgba(0,0,0,0.03)] flex flex-col gap-0">
                  <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E5] mb-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF4FA] border border-[#BAE6FD] text-[11px] font-bold text-[#0284C7] font-mono tracking-wide">
                      [ WHO-GMP Certified ]
                    </div>
                    <span className="text-xs font-mono font-bold text-[#888888]">02</span>
                  </div>

                  <h4 className="text-2xl sm:text-[26px] font-extrabold text-[#111111] leading-tight mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>
                    <span className="text-[#008A8A]">3rd</span> Party Manufacturing
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-[#666666] mb-5 font-['Inter',sans-serif]">
                    End-to-End Generic Production & International Export
                  </p>

                  <div className="border-t border-[#EAEAEA] pt-4 space-y-3 font-['Inter',sans-serif] text-xs sm:text-[13px] text-[#333333]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-[#008A8A] shrink-0" />
                      <span>Formulation approval from Drug department</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-[#008A8A] shrink-0" />
                      <span>Procurement of Raw materials</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-[#008A8A] shrink-0" />
                      <span>Actual Formulation Production</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-[#008A8A] shrink-0" />
                      <span>Export</span>
                    </div>
                  </div>

                  <div className="pt-4 mt-5 border-t border-[#E5E5E5] flex items-center justify-between text-[11px] text-[#666666]">
                    <span>Batch Release Protocol</span>
                    <span className="font-semibold text-[#008A8A] flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> 100% WHO-GMP Compliant
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════
              PANEL 03: Global Supply Chain & International Distribution
              (Layout: Left = Visual Card, Right = Text)
             ══════════════════════════════════════════════════════════ */}
          <div className="border-b border-[#DCDCD2]">
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#DCDCD2]">
              {/* Left Visual Card */}
              <div className="bg-[#FAFBF9]/60 p-5 md:p-8 flex flex-col items-center justify-center min-h-[340px]">
                <div className="w-full max-w-[440px] bg-white border border-[#DCDCD2] rounded-[20px] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.03)] flex flex-col gap-0">
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E5] mb-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#1E3A8A]/10 flex items-center justify-center text-[#1E3A8A]">
                          <Globe2 className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-[#111111] font-['Syne',sans-serif]">
                            Global Export Network
                          </h4>
                          <p className="text-xs text-[#777777]">Cold-Chain & Tropical Barrier Transit</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#1E3A8A] bg-[#1E3A8A]/10 px-2.5 py-1 rounded-full border border-[#1E3A8A]/20">
                        Active
                      </span>
                    </div>

                    <div className="space-y-3 font-['Inter',sans-serif]">
                      <div className="flex items-center justify-between text-xs p-3 rounded-xl bg-[#FAFBF9] border border-[#E5E5E5]/60">
                        <div className="flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-[#006EDC]" />
                          <span className="font-medium text-[#333333]">Africa & Middle East Corridor</span>
                        </div>
                        <span className="text-xs font-bold text-[#111111]">25+ Countries</span>
                      </div>
                      <div className="flex items-center justify-between text-xs p-3 rounded-xl bg-[#FAFBF9] border border-[#E5E5E5]/60">
                        <div className="flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-[#008A8A]" />
                          <span className="font-medium text-[#333333]">Southeast Asia & CIS Regions</span>
                        </div>
                        <span className="text-xs font-bold text-[#111111]">18+ Countries</span>
                      </div>
                      <div className="flex items-center justify-between text-xs p-3 rounded-xl bg-[#FAFBF9] border border-[#E5E5E5]/60">
                        <div className="flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-[#7928CA]" />
                          <span className="font-medium text-[#333333]">Latin America & Caribbean</span>
                        </div>
                        <span className="text-xs font-bold text-[#111111]">10+ Countries</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#E5E5E5] flex items-center justify-between text-xs text-[#666666]">
                    <span>Transit Security</span>
                    <span className="font-semibold text-[#111111]">Temperature-Monitored Dispatch</span>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="p-6 md:p-9 flex flex-col justify-center bg-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAFBF9] border border-[#DCDCD2] w-fit mb-4 text-xs font-semibold text-[#555555]">
                  <span>03</span>
                  <span>/</span>
                  <span>{t.overview.panels.p3Badge}</span>
                </div>
                <h3
                  className="text-[22px] sm:text-[28px] font-bold text-[#111111] mb-3 leading-[1.15] tracking-[-0.025em]"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {t.overview.panels.p3Title}
                </h3>
                <p className="text-sm sm:text-base text-[#555555] font-['Inter',sans-serif] leading-relaxed mb-6">
                  {t.overview.panels.p3Desc}
                </p>
                <div className="space-y-2.5 font-['Inter',sans-serif] text-sm text-[#444444] mb-5">
                  {t.overview.panels.p3Points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A]" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E3A8A] hover:text-[#082B61] transition-colors"
                >
                  <span>{t.overview.panels.p3Cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════
              PANEL 04: Product Range & Commercial Formulary
              (Layout: Left = Text, Right = Visual Card)
             ══════════════════════════════════════════════════════════ */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#DCDCD2]">
              {/* Left Content */}
              <div className="p-6 md:p-9 flex flex-col justify-center bg-white order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAFBF9] border border-[#DCDCD2] w-fit mb-4 text-xs font-semibold text-[#555555]">
                  <span>04</span>
                  <span>/</span>
                  <span>{t.overview.panels.p4Badge}</span>
                </div>
                <h3
                  className="text-[22px] sm:text-[28px] font-bold text-[#111111] mb-3 leading-[1.15] tracking-[-0.025em]"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {t.overview.panels.p4Title}
                </h3>
                <p className="text-sm sm:text-base text-[#555555] font-['Inter',sans-serif] leading-relaxed mb-6">
                  {t.overview.panels.p4Desc}
                </p>
                <div className="space-y-2.5 font-['Inter',sans-serif] text-sm text-[#444444] mb-5">
                  {t.overview.panels.p4Points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#006EDC]" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="#products"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#006EDC] hover:text-[#082B61] transition-colors"
                >
                  <span>{t.overview.panels.p4Cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Right Visual Card */}
              <div className="bg-[#FAFBF9]/60 p-5 md:p-8 flex flex-col items-center justify-center min-h-[340px] order-1 lg:order-2">
                <div className="w-full max-w-[440px] bg-white border border-[#DCDCD2] rounded-[20px] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E5] mb-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#006EDC]/10 flex items-center justify-center text-[#006EDC]">
                          <Boxes className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-[#111111] font-['Syne',sans-serif]">
                            Therapeutic Breadth
                          </h4>
                          <p className="text-xs text-[#777777]">Essential Medicines & Formulations</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#006EDC] bg-[#006EDC]/10 px-2.5 py-1 rounded-full border border-[#006EDC]/20">
                        800+ SKUs
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 font-['Inter',sans-serif]">
                      <div className="p-3 rounded-xl bg-[#FAFBF9] border border-[#E5E5E5]/60 text-center">
                        <div className="text-lg font-bold text-[#111111] font-['Syne',sans-serif]">60+</div>
                        <div className="text-[11px] text-[#666666] mt-0.5">Antibiotics & Anti-Infectives</div>
                      </div>
                      <div className="p-3 rounded-xl bg-[#FAFBF9] border border-[#E5E5E5]/60 text-center">
                        <div className="text-lg font-bold text-[#111111] font-['Syne',sans-serif]">45+</div>
                        <div className="text-[11px] text-[#666666] mt-0.5">Cardiovascular Care</div>
                      </div>
                      <div className="p-3 rounded-xl bg-[#FAFBF9] border border-[#E5E5E5]/60 text-center">
                        <div className="text-lg font-bold text-[#111111] font-['Syne',sans-serif]">50+</div>
                        <div className="text-[11px] text-[#666666] mt-0.5">Gastrointestinal Formulations</div>
                      </div>
                      <div className="p-3 rounded-xl bg-[#FAFBF9] border border-[#E5E5E5]/60 text-center">
                        <div className="text-lg font-bold text-[#111111] font-['Syne',sans-serif]">40+</div>
                        <div className="text-[11px] text-[#666666] mt-0.5">Sterile IV Injectables</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#E5E5E5] flex items-center justify-between text-xs text-[#666666]">
                    <span>Commercial Readiness</span>
                    <span className="font-semibold text-[#006EDC]">Immediate Export Clearance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Signature Crystal Clear Liquid Glass Stats Slab ── */}
        <LiquidEdgeFilter scale={22} />
        <div className="overview-stats-bar relative max-w-[1140px] mx-auto">
          <div
            ref={statsSurfaceRef}
            className={`glass-surface select-none relative overflow-hidden transition-all duration-300 ${glassLive ? "glass-live" : ""}`}
            style={{
              borderRadius: "clamp(16px, 4vw, 30px)",
            }}
          >
            {glassLive && <GlassmorphismCanvas surfaceRef={statsSurfaceRef} crystal={true} />}

            {/* Top-Right Glowing Crystal Lens Flare */}
            <div
              className="absolute right-6 top-6 w-2.5 h-2.5 rounded-full pointer-events-none z-[5]"
              style={{
                background: "#ffffff",
                boxShadow: "0 0 8px #ffffff, 0 0 16px #00b8f2",
              }}
            />

            {/* Bottom Cyan Caustic Rim */}
            <div
              className="absolute bottom-0 inset-x-8 h-[2px] rounded-full pointer-events-none z-[5]"
              style={{
                background: "linear-gradient(90deg, transparent, #00B8F2 50%, transparent)",
                boxShadow: "0 0 12px rgba(0, 184, 242, 0.85)",
              }}
            />

            <div
              className="relative z-[4] grid grid-cols-1 sm:flex items-center w-full overflow-hidden"
              style={{
                padding: "clamp(14px, 2.4vw, 28px) clamp(14px, 3.8vw, 44px)",
                minHeight: 100,
                borderRadius: "inherit",
              }}
            >
              {statsData.map((stat) => (
                <div
                  key={stat.number}
                  className="gs-stat flex flex-1 items-center border-b sm:border-b-0 sm:border-l last:border-b-0 first:border-l-0 border-slate-200/50 py-3 sm:py-0"
                  style={{
                    gap: "clamp(12px, 1.8vw, 20px)",
                    padding: "clamp(10px, 1.6vw, 22px) clamp(10px, 1.6vw, 22px)",
                  }}
                >
                  {/* Crystal Glass Bead Orb */}
                  <div data-glass-bead className="glass-badge hz-stat-item">
                    <svg
                      className="relative z-[2]"
                      style={{ width: "62%", height: "62%" }}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={stat.stroke}
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {stat.icon}
                    </svg>
                  </div>

                  <div className="flex flex-col" style={{ gap: 3, minWidth: 0 }}>
                    <div
                      style={{
                        fontWeight: 800,
                        fontSize: "clamp(18px, 2.4vw, 30px)",
                        color: "#0a1454",
                        lineHeight: 1,
                        letterSpacing: "-0.01em",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {stat.number}
                    </div>
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: "clamp(10px, 1.05vw, 13px)",
                        color: "#5b6089",
                        lineHeight: 1.25,
                      }}
                    >
                      {stat.labelTop}
                      <br />
                      {stat.labelBottom}
                    </div>
                    <div className="flex" style={{ gap: 4, marginTop: 4 }}>
                      {[0, 1, 2].map((d) => (
                        <i
                          key={d}
                          style={{
                            width: 4,
                            height: 4,
                            borderRadius: "50%",
                            display: "block",
                            background: "linear-gradient(135deg,#2f74e0,#123f9e)",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ambient Floor Shadow */}
          <div
            className="pointer-events-none"
            style={{
              width: "82%",
              height: 22,
              margin: "-4px auto 0",
              borderRadius: "50%",
              background: "radial-gradient(ellipse at center, rgba(15, 45, 100, 0.18), rgba(15, 45, 100, 0) 72%)",
              filter: "blur(6px)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Overview;
