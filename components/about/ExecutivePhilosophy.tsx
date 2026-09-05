"use client";

import React, { useState } from "react";
import {
  Compass,
  Target,
  ShieldCheck,
  FileCheck2,
  CheckCircle2,
  Quote,
  Sparkles,
  ArrowRight,
  Award,
} from "lucide-react";
import Link from "next/link";

export function ExecutivePhilosophy() {
  const [activeTab, setActiveTab] = useState<"vision" | "mission" | "quality" | "governance">("vision");

  const pillars = {
    vision: {
      badge: "01.01 // CORPORATE VISION",
      title: "Expanding Global Healthcare Equity & Therapeutic Access",
      lead: "To be recognized as a premier international pharmaceutical brand delivering world-class, affordable, and compliant finished generic formulations to emerging and regulated healthcare markets across the globe.",
      points: [
        "Democratizing access to high-potency finished dosage forms across emerging markets.",
        "Establishing direct institutional partnerships with sovereign Ministries of Health.",
        "Delivering cost-effective essential therapeutics without compromising quality standards.",
        "Scaling global distribution corridors across Africa, Asia, GCC, CIS, and the Americas.",
      ],
      tags: ["Global Health Equity", "Affordable Generics", "Sovereign Health Access"],
      accent: "#006EDC",
      accentBg: "#EFF6FF",
      accentBorder: "#BFDBFE",
    },
    mission: {
      badge: "01.02 // CORPORATE MISSION",
      title: "Science, Manufacturing Integrity & Uncompromising Quality",
      lead: "Committed to improving patient lives by sourcing, formulating, and distributing high-potency finished dosage forms manufactured exclusively under strict WHO-GMP conditions, backed by complete regulatory transparency.",
      points: [
        "100% WHO-GMP certified manufacturing alliances with audited cleanrooms.",
        "Comprehensive bioequivalence (BE) documentation aligned with global innovator drugs.",
        "Zero-compromise batch-to-batch consistency with automated blister & vial lines.",
        "Proactive supply chain continuity and cold-chain integrity for sensitive therapeutics.",
      ],
      tags: ["WHO-GMP Compliance", "Patient Centricity", "Supply Security"],
      accent: "#0284C7",
      accentBg: "#F0F9FF",
      accentBorder: "#BAE6FD",
    },
    quality: {
      badge: "01.03 // QUALITY PHILOSOPHY",
      title: "Zero-Defect Quality Assurance & Zone IVb Stability Testing",
      lead: "Every commercial batch is produced in certified cleanrooms and subjected to multi-stage analytical testing, real-time Zone IVb stability validation (30°C / 75% RH), and direct Certificate of Analysis (CoA) verification.",
      points: [
        "Real-time & accelerated stability testing (30°C/75% RH and 40°C/75% RH).",
        "Multi-stage HPLC analytical purity screening and dissolution profiling.",
        "Alu-Alu tropical cold-form packaging barriers for maximum humidity resistance.",
        "100% Certificate of Analysis (CoA) release per commercial export batch.",
      ],
      tags: ["Zone IVb Validated", "100% CoA Release", "ICH Guidelines"],
      accent: "#0D9488",
      accentBg: "#F0FDFA",
      accentBorder: "#99F6E4",
    },
    governance: {
      badge: "01.04 // GLOBAL COMPLIANCE",
      title: "Seamless International Regulatory & CTD/eCTD Dossier Integration",
      lead: "Maintaining seamless alignment with foreign health ministries and regional regulatory authorities through ready Common Technical Document (CTD) and electronic CTD (eCTD) dossiers across 65+ countries.",
      points: [
        "Ready Modules 1–5 eCTD, ACTD, and NeeS format dossier packages.",
        "Direct facilitation of COPP (Certificate of Pharmaceutical Product) and FSC.",
        "Fast-track MOH tender documentation and localized clinical expert reports.",
        "GS1 2D DataMatrix track & trace serialization for anti-counterfeiting.",
      ],
      tags: ["CTD / eCTD Modules 1-5", "COPP Issuance", "MOH Ready"],
      accent: "#4F46E5",
      accentBg: "#EEF2FF",
      accentBorder: "#C7D2FE",
    },
  };

  const current = pillars[activeTab];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-100 relative overflow-hidden">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-slate-200/80 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-[#006EDC] font-['JetBrains_Mono',monospace] text-xs font-bold uppercase tracking-wider mb-3">
              02.00 // EXECUTIVE PHILOSOPHY &amp; GOVERNANCE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1E48] tracking-tight font-['Inter',sans-serif]">
              Foundational Principles of Our Global Enterprise
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-md">
            Engineered around clinical efficacy, WHO-GMP governance, and uncompromising supply security for healthcare institutions worldwide.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {[
            { id: "vision", label: "Corporate Vision", icon: Compass },
            { id: "mission", label: "Mission & Integrity", icon: Target },
            { id: "quality", label: "Quality Philosophy", icon: ShieldCheck },
            { id: "governance", label: "Regulatory Governance", icon: FileCheck2 },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-3 p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#0B1E48] border-[#0B1E48] text-white shadow-md shadow-blue-900/10"
                    : "bg-slate-50/70 border-slate-200/80 text-slate-700 hover:bg-slate-100/80 hover:border-slate-300"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                    isActive ? "bg-white/10 text-cyan-300" : "bg-white border border-slate-200 text-[#006EDC]"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs font-['JetBrains_Mono',monospace] text-slate-400">
                    PILLAR 0{tab.id === "vision" ? "1" : tab.id === "mission" ? "2" : tab.id === "quality" ? "3" : "4"}
                  </span>
                  <span className="block text-sm font-bold truncate">
                    {tab.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Tab Content Card */}
        <div className="rounded-3xl border border-slate-200 bg-[#FBFDFF] p-6 sm:p-10 shadow-[0_20px_50px_rgba(11,30,72,0.04)] mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span
                className="inline-block text-[11px] font-['JetBrains_Mono',monospace] font-bold tracking-wider px-3 py-1 rounded-md border"
                style={{
                  color: current.accent,
                  backgroundColor: current.accentBg,
                  borderColor: current.accentBorder,
                }}
              >
                {current.badge}
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E48] tracking-tight leading-tight">
                {current.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {current.lead}
              </p>

              {/* Bullet Points */}
              <div className="space-y-3 pt-2">
                {current.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="pt-4 flex flex-wrap gap-2">
                {current.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-['JetBrains_Mono',monospace] px-2.5 py-1 rounded bg-white border border-slate-200 text-slate-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Technical Pillar Card */}
            <div className="lg:col-span-5 w-full">
              <div className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                  <span className="text-xs font-['JetBrains_Mono',monospace] text-slate-400 font-bold uppercase">
                    GOVERNANCE_SPEC
                  </span>
                  <span className="text-[10px] font-['JetBrains_Mono',monospace] px-2 py-0.5 rounded bg-blue-50 text-[#006EDC] font-bold">
                    ACTIVE STANDARD
                  </span>
                </div>

                <div className="space-y-4 text-xs text-slate-600">
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-500">Facility Accreditation</span>
                    <span className="font-bold text-[#0B1E48]">WHO-GMP &amp; ISO 9001:2015</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-500">Stability Guideline</span>
                    <span className="font-bold text-[#0B1E48]">ICH Q1A (R2) Zone IVb</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-500">Dossier Architecture</span>
                    <span className="font-bold text-[#0B1E48]">eCTD v4.0 / ACTD / NeeS</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-500">Traceability Standard</span>
                    <span className="font-bold text-[#0B1E48]">GS1 2D DataMatrix</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-500">Export Jurisdiction</span>
                    <span className="font-bold text-[#006EDC]">Surat HQ, Gujarat, India</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="mt-6 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-[#006EDC] transition-colors"
                >
                  <span>Request Technical Dossier Index</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Executive Leadership Manifesto Quote */}
        <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#0B1E48] to-[#0A2E6B] text-white shadow-xl overflow-hidden">
          <div className="pointer-events-none absolute -right-16 -top-16 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8">
            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-cyan-300">
              <Quote className="w-8 h-8" />
            </div>
            <div className="space-y-3">
              <p className="text-base sm:text-xl md:text-2xl font-medium leading-relaxed text-slate-100 italic">
                &ldquo;Our vision at Zelnex is built upon an uncompromising foundation: that quality generic medicine must be formulated to the highest international standards, verified by rigorous science, and made universally accessible to sovereign healthcare markets worldwide.&rdquo;
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs sm:text-sm font-['JetBrains_Mono',monospace]">
                <span className="font-bold text-cyan-300">EXECUTIVE LEADERSHIP</span>
                <span className="text-slate-400">|</span>
                <span className="text-slate-300">Zelnex Pharmaceuticals Pvt. Ltd. (Surat, India)</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
