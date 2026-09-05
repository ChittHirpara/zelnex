"use client";

import React, { useState } from "react";
import {
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Globe2,
  FileCheck2,
  Factory,
  Boxes,
  CheckCircle2,
} from "lucide-react";

export function MilestonesTimeline() {
  const [activeYear, setActiveYear] = useState(2024);

  const milestones = [
    {
      year: 2018,
      tag: "FOUNDATION & VISION",
      title: "Establishment of Zelnex Pharmaceuticals",
      subtitle: "Surat, Gujarat Headquarters Inception",
      description:
        "Incorporation of Zelnex Pharmaceuticals Pvt. Ltd. with a focused corporate vision: building a dedicated, export-oriented pharmaceutical powerhouse providing high-quality generic finished dosage formulations to emerging global healthcare systems.",
      highlights: [
        "Incorporation in Surat, Gujarat with institutional trade licensing",
        "Initial focus on essential anti-infective & analgesic molecules",
        "Establishment of the Drug Regulatory Affairs compilation desk",
      ],
      badge: "GENESIS",
      accent: "#006EDC",
      stats: { markets: "5+", products: "40+", dossiers: "15+" },
    },
    {
      year: 2020,
      tag: "MANUFACTURING INFRASTRUCTURE",
      title: "WHO-GMP Alliances & Quality Systems",
      subtitle: "Sterile Cleanroom & Analytical Integration",
      description:
        "Formed strategic manufacturing pacts exclusively with state-of-the-art WHO-GMP certified production units in Gujarat and Maharashtra, integrating multi-stage HPLC batch analytics, automated packaging, and tropical Zone IVb climate stability chambers.",
      highlights: [
        "100% WHO-GMP compliant finished formulation production",
        "Installation of Zone IVb (30°C / 75% RH) real-time stability chambers",
        "Implementation of GS1 2D DataMatrix unit serialization",
      ],
      badge: "GMP_ACCREDITED",
      accent: "#0284C7",
      stats: { markets: "18+", products: "120+", dossiers: "45+" },
    },
    {
      year: 2022,
      tag: "GLOBAL REGULATORY SCALING",
      title: "CTD/eCTD Dossier Library Deployment",
      subtitle: "Modules 1–5 ICH Compliant Architecture",
      description:
        "Expanded regulatory capabilities into full electronic CTD (eCTD v4.0), ACTD, and NeeS publishing, establishing turnkey dossier licensing models for sovereign health ministries and institutional tender authorities across Africa, Asia, and the Middle East.",
      highlights: [
        "Launch of turnkey CTD Module 1 to Module 5 dossier licensing",
        "Fast-track MOH registrations across ASEAN, GCC, and ECOWAS regions",
        "Expansion of solid orals, liquid orals, and dry powder suspensions",
      ],
      badge: "ECTD_EXPANSION",
      accent: "#0D9488",
      stats: { markets: "35+", products: "240+", dossiers: "90+" },
    },
    {
      year: 2024,
      tag: "GLOBAL EXPANSION",
      title: "65+ Sovereign Nations Footprint",
      subtitle: "350+ Formulations & 150+ Ready CTD Dossiers",
      description:
        "Scaled global export corridors to over 65 countries worldwide with 350+ commercial molecules and 150+ active international pharmaceutical clients. Continuous air and ocean freight corridors from Surat and Mumbai to major international medical transit hubs.",
      highlights: [
        "Active market presence across Africa, Asia, Middle East, CIS & LATAM",
        "150+ ready-to-file CTD/eCTD registration dossiers",
        "150+ institutional importers, tenders, and distributor partners",
      ],
      badge: "GLOBAL_PRESENCE",
      accent: "#4F46E5",
      stats: { markets: "65+", products: "350+", dossiers: "150+" },
    },
    {
      year: 2026,
      tag: "FRONTIER HORIZON",
      title: "Sterile Lyophilized Vials & Advanced Therapeutics",
      subtitle: "Complex Injectables & Biological Formulations",
      description:
        "Executing the next phase of our corporate roadmap: expanding into specialized sterile lyophilized oncology vials, sustained-release micro-pellets, and complex combination therapies for advanced regulated healthcare jurisdictions.",
      highlights: [
        "Lyophilized sterile injectable production capabilities",
        "Expanded pipeline of cardiovascular and endocrinology formulations",
        "Direct digital MOH registration tracking and telemetry portal",
      ],
      badge: "INNOVATION_NEXT",
      accent: "#10B981",
      stats: { markets: "80+", products: "500+", dossiers: "220+" },
    },
  ];

  const currentMilestone = milestones.find((m) => m.year === activeYear) || milestones[3];

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFD] border-b border-slate-200/80 relative overflow-hidden">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 pb-6 border-b border-slate-200 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-[#006EDC] font-['JetBrains_Mono',monospace] text-xs font-bold uppercase tracking-wider mb-3">
              03.00 // CORPORATE EVOLUTION &amp; MILESTONES
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1E48] tracking-tight font-['Inter',sans-serif]">
              A Trajectory of Relentless Global Growth
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-md">
            From our founding in Surat to a global footprint spanning 65+ sovereign nations, discover the key milestones that define our journey.
          </p>
        </div>

        {/* Year Selector Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {milestones.map((m) => {
            const isActive = activeYear === m.year;
            return (
              <button
                key={m.year}
                onClick={() => setActiveYear(m.year)}
                className={`flex flex-col p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer relative overflow-hidden ${
                  isActive
                    ? "bg-[#0B1E48] border-[#0B1E48] text-white shadow-lg shadow-blue-900/15 -translate-y-1"
                    : "bg-white border-slate-200/80 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {isActive && (
                  <span className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#006EDC] via-cyan-400 to-[#10B981]" />
                )}
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    {m.year}
                  </span>
                  <span
                    className={`text-[9px] font-['JetBrains_Mono',monospace] font-bold px-1.5 py-0.5 rounded ${
                      isActive ? "bg-white/15 text-cyan-300" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {m.badge}
                  </span>
                </div>
                <span className="text-xs font-bold line-clamp-1">
                  {m.tag}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Milestone Detailed Showcase Card */}
        <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-12 shadow-[0_20px_50px_rgba(11,30,72,0.05)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="px-3 py-1 rounded-md text-xs font-['JetBrains_Mono',monospace] font-bold"
                  style={{
                    backgroundColor: `${currentMilestone.accent}15`,
                    color: currentMilestone.accent,
                  }}
                >
                  PHASE // {currentMilestone.year}
                </span>
                <span className="text-xs font-['JetBrains_Mono',monospace] text-slate-400">
                  {currentMilestone.subtitle}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1E48] tracking-tight">
                {currentMilestone.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {currentMilestone.description}
              </p>

              {/* Bullet highlights */}
              <div className="space-y-3 pt-2">
                {currentMilestone.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#006EDC] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Telemetry Snapshot */}
            <div className="lg:col-span-4 w-full">
              <div className="p-7 rounded-2xl bg-[#F8FAFD] border border-slate-200 space-y-5">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <span className="text-xs font-['JetBrains_Mono',monospace] text-slate-400 font-bold uppercase">
                    METRICS_SNAPSHOT [{currentMilestone.year}]
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">Global Markets</span>
                    <span className="text-lg font-extrabold text-[#0B1E48]">
                      {currentMilestone.stats.markets}
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">Approved Molecules</span>
                    <span className="text-lg font-extrabold text-[#006EDC]">
                      {currentMilestone.stats.products}
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">Ready CTD Dossiers</span>
                    <span className="text-lg font-extrabold text-[#0D9488]">
                      {currentMilestone.stats.dossiers}
                    </span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] font-['JetBrains_Mono',monospace] text-slate-500 text-center">
                  AUDITED &amp; COMPLIANT BATCHES
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
