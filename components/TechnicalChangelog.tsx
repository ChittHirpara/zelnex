"use client";

import React from "react";
import { GitCommit, Tag, Sparkles } from "lucide-react";

export function TechnicalChangelog() {
  const releases = [
    {
      version: "v2.4.0",
      date: "August 2026",
      status: "CURRENT",
      items: [
        "+ Added 45+ Cardiovascular and Antidiabetic eCTD Module 1-5 validation packages.",
        "+ Upgraded high-barrier Alu-Alu automated packaging lines to 1,200 blisters/minute.",
        "+ Integrated real-time digital temperature datalogger sync for 2°C–8°C cold-chain freight.",
        "+ Completed 36-month Zone IVb tropical stability data submission for ASEAN health ministries.",
      ],
    },
    {
      version: "v2.3.0",
      date: "June 2026",
      status: "VERIFIED",
      items: [
        "+ Deployed Grade A laminar airflow lyophilized vial line expansion for critical injectables.",
        "+ Enhanced GS1 2D DataMatrix packaging serialization for Latin American track-and-trace.",
        "+ Registered 20+ new generic formulations with Ministry of Health (MOH) GCC authorities.",
      ],
    },
    {
      version: "v2.0.0",
      date: "March 2026",
      status: "BASE",
      items: [
        "+ WHO-GMP cleanroom renewal and ISO 9001:2015 / ISO 14001 integrated quality audit.",
        "+ Released interactive formulation catalog with 800+ commercial finished dosage forms.",
        "+ Expanded air/sea export dispatch corridors to 50+ international sovereign ports.",
      ],
    },
  ];

  return (
    <section id="changelog" className="py-16 sm:py-20 border-b border-[#E5E7EB] bg-[#F9FAFB]">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8 font-['Inter',sans-serif]">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#06B6D4]/10 border border-[#06B6D4]/30 text-xs font-['JetBrains_Mono',monospace] font-bold text-[#0891B2] uppercase w-fit mb-6">
          <GitCommit className="w-3.5 h-3.5 text-[#06B6D4]" />
          <span>04.00 // RELEASE NOTES & AUDIT TRAIL</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column (300px / 4 cols): 'CHANGELOG' Label & Subtext */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 font-['JetBrains_Mono',monospace] block mb-2">
                CHANGELOG & AUDIT LOG
              </span>
              <h3
                className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight mb-4"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Continuous Quality & Compliance Logs
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Verifiable formulation upgrades, regulatory eCTD filings, and facility audit logs tracked in accordance with international cGMP standards.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-white border border-[#E5E7EB] text-xs font-['JetBrains_Mono',monospace] text-slate-600 mt-6 lg:mt-0 space-y-1">
              <div className="flex items-center justify-between text-slate-400 text-[10px]">
                <span>AUDIT STANDARD</span>
                <span className="text-[#0891B2] font-bold">WHO-GMP</span>
              </div>
              <div className="text-[11px] font-bold text-slate-900">
                100% TRACEABLE BATCH METRICS
              </div>
            </div>
          </div>

          {/* Right Column (8 cols): Monospaced list of features with '+' in Cyan */}
          <div className="lg:col-span-8 space-y-8 pl-0 lg:pl-8 lg:border-l border-[#E5E7EB]">
            {releases.map((rel) => (
              <div key={rel.version} className="bg-white border border-[#E5E7EB] rounded-xl p-6 shadow-2xs">
                {/* Release Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4 font-['JetBrains_Mono',monospace]">
                  <div className="flex items-center gap-2.5">
                    <span className="text-sm font-bold text-[#111827]">{rel.version}</span>
                    <span className="text-xs text-slate-400">({rel.date})</span>
                  </div>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      rel.status === "CURRENT"
                        ? "bg-[#06B6D4]/15 text-[#0891B2]"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {rel.status}
                  </span>
                </div>

                {/* Monospaced Feature Bullet Points */}
                <div className="space-y-2 font-['JetBrains_Mono',monospace] text-xs leading-relaxed text-slate-700">
                  {rel.items.map((item, idx) => {
                    const bullet = item.slice(0, 1);
                    const text = item.slice(1);

                    return (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-[#06B6D4] font-black text-sm shrink-0 leading-none mt-0.5">
                          {bullet}
                        </span>
                        <span className="text-slate-700">{text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default TechnicalChangelog;
