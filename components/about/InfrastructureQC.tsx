"use client";

import React from "react";
import {
  Factory,
  ShieldCheck,
  Microscope,
  Thermometer,
  Layers,
  Sparkles,
  CheckCircle2,
  Cpu,
  BarChart3,
  Flame,
  FileCheck2,
} from "lucide-react";

export function InfrastructureQC() {
  const pillars = [
    {
      icon: Factory,
      badge: "ISO CLASS 5 & 7",
      title: "Cleanroom Environments & HVAC Filtration",
      description:
        "Positive pressure differential cleanroom suites equipped with terminal HEPA filters (99.97% efficiency @ 0.3 microns), 20+ air changes per hour (ACPH), and continuous micro-particulate environmental monitoring.",
      specs: [
        "Airlock pass-through chambers with interlock doors",
        "Continuous particle count & microbiological settle plates",
        "Epoxy-coated seamless coving with zero dead angles",
      ],
      accent: "#006EDC",
    },
    {
      icon: Microscope,
      badge: "HPLC & MASS SPECTROMETRY",
      title: "Advanced Analytical Testing & Quality Control",
      description:
        "State-of-the-art instrumental laboratory conducting multi-stage Raw Material (API), In-Process (IPC), and Finished Product batch release testing with 100% Certificate of Analysis (CoA) verification.",
      specs: [
        "High-Performance Liquid Chromatography (HPLC) assay",
        "Dissolution rate profiling & bioequivalence correlation",
        "Microbial limit testing (MLT) & endotoxin screening",
      ],
      accent: "#0284C7",
    },
    {
      icon: Thermometer,
      badge: "ICH Q1A (R2) ZONE IVB",
      title: "Tropical Climate Stability Validation",
      description:
        "Dedicated photostability and walk-in environmental testing chambers calibrated to simulate hot and humid Zone IVb tropical export environments (30°C / 75% RH real-time & 40°C / 75% RH accelerated).",
      specs: [
        "36-month real-time stability verification for tropical destinations",
        "Automated humidity & temperature telemetry logging",
        "Stress testing for thermal degradation & chemical integrity",
      ],
      accent: "#0D9488",
    },
    {
      icon: Layers,
      badge: "ALU-ALU & COLD FORM",
      title: "High-Barrier Pharmaceutical Packaging",
      description:
        "Automated high-speed blister packing lines engineered with moisture-barrier cold-form aluminum (Alu-Alu), amber Type III glass bottles, induction sealing, and GS1 2D DataMatrix unit serialization.",
      specs: [
        "Zero-pinhole cold-form tropical foil forming",
        "Automatic camera vision inspection for missing / broken tablets",
        "GS1 DataMatrix 2D serialization & aggregation ready",
      ],
      accent: "#6366F1",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-100 relative overflow-hidden">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-slate-200/80 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-[#006EDC] font-['JetBrains_Mono',monospace] text-xs font-bold uppercase tracking-wider mb-3">
              04.00 // MANUFACTURING &amp; QC INFRASTRUCTURE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1E48] tracking-tight font-['Inter',sans-serif]">
              Engineered Under Uncompromising WHO-GMP Governance
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-md">
            Every molecule formulated under our strategic alliances is governed by international ICH benchmarks, sterile cleanrooms, and validated analytical control.
          </p>
        </div>

        {/* 4 Infrastructure Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl p-8 sm:p-10 bg-[#FBFDFF] border border-slate-200/90 shadow-[0_10px_30px_rgba(11,30,72,0.03)] hover:shadow-[0_20px_40px_rgba(0,110,220,0.08)] hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-13 h-13 rounded-2xl flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundColor: `${pillar.accent}15`, color: pillar.accent }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className="text-[10px] font-['JetBrains_Mono',monospace] font-bold px-2.5 py-1 rounded-md border"
                      style={{
                        color: pillar.accent,
                        backgroundColor: `${pillar.accent}08`,
                        borderColor: `${pillar.accent}30`,
                      }}
                    >
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E48] tracking-tight mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-200/80 space-y-2.5">
                  {pillar.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 font-medium">
                        {spec}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Specification Bar */}
        <div className="rounded-3xl p-8 sm:p-10 bg-[#0B1E48] text-white shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-4 md:pt-0">
              <span className="block text-3xl sm:text-4xl font-extrabold text-cyan-300 font-['JetBrains_Mono',monospace]">
                100%
              </span>
              <span className="block text-xs font-bold text-white mt-1 uppercase tracking-wider">
                CoA Batch Release
              </span>
              <span className="block text-[11px] text-slate-400 font-['JetBrains_Mono',monospace] mt-0.5">
                Every Batch Verified
              </span>
            </div>

            <div className="pt-4 md:pt-0">
              <span className="block text-3xl sm:text-4xl font-extrabold text-cyan-300 font-['JetBrains_Mono',monospace]">
                Zone IVb
              </span>
              <span className="block text-xs font-bold text-white mt-1 uppercase tracking-wider">
                Stability Standard
              </span>
              <span className="block text-[11px] text-slate-400 font-['JetBrains_Mono',monospace] mt-0.5">
                30°C / 75% RH Validated
              </span>
            </div>

            <div className="pt-4 md:pt-0">
              <span className="block text-3xl sm:text-4xl font-extrabold text-cyan-300 font-['JetBrains_Mono',monospace]">
                GS1 2D
              </span>
              <span className="block text-xs font-bold text-white mt-1 uppercase tracking-wider">
                DataMatrix Serial
              </span>
              <span className="block text-[11px] text-slate-400 font-['JetBrains_Mono',monospace] mt-0.5">
                Full Track &amp; Trace
              </span>
            </div>

            <div className="pt-4 md:pt-0">
              <span className="block text-3xl sm:text-4xl font-extrabold text-cyan-300 font-['JetBrains_Mono',monospace]">
                WHO-GMP
              </span>
              <span className="block text-xs font-bold text-white mt-1 uppercase tracking-wider">
                Audited Facilities
              </span>
              <span className="block text-[11px] text-slate-400 font-['JetBrains_Mono',monospace] mt-0.5">
                Zero Quality Deviations
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
