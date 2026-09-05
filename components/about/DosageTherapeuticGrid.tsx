"use client";

import React from "react";
import {
  Pill,
  Syringe,
  FlaskConical,
  HeartPulse,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Boxes,
} from "lucide-react";
import Link from "next/link";

export function DosageTherapeuticGrid() {
  const dosageForms = [
    {
      title: "Solid Orals: Tablets",
      types: "Film-Coated, Sugar-Coated, Sustained Release (SR), Chewable, Effervescent & Dispersible",
      packaging: "Alu-Alu Cold Form, PVC/PVDC Blister, HDPE Containers",
      count: "180+ Formulations",
      accent: "#006EDC",
    },
    {
      title: "Solid Orals: Hard & Soft Gelatin Capsules",
      types: "Immediate Release, Enteric-Coated Pellets, Softgel Liquids & Multi-Unit Pellet Systems (MUPS)",
      packaging: "Tropical Alu-Alu Blister, Induction-Sealed Bottles",
      count: "95+ Formulations",
      accent: "#0284C7",
    },
    {
      title: "Liquid Orals: Syrups & Suspensions",
      types: "Pediatric Drops, Oral Solutions, Reconstitutable Dry Syrups & Non-Sedating Expectorants",
      packaging: "Amber PET & Glass Bottles with CRC Measuring Cups",
      count: "75+ Formulations",
      accent: "#0D9488",
    },
    {
      title: "Sterile Small Volume Injectables",
      types: "Liquid Ampoules, Lyophilized Vials, Dry Powder Antibiotic Injections & Pre-Filled Syringes (PFS)",
      packaging: "USP Type I Borosilicate Glass Vials with Flip-Off Seals",
      count: "45+ Formulations",
      accent: "#6366F1",
    },
  ];

  const therapeutics = [
    { name: "Anti-Infectives & Antibiotics", count: "85+ Molecules", desc: "Cephalosporins, Penicillins, Macrolides, Quinolones & Anti-Fungals" },
    { name: "Cardiovascular & Anti-Hypertensives", count: "55+ Molecules", desc: "ACE Inhibitors, ARBs, Beta-Blockers, Statins & Anti-Platelets" },
    { name: "Pain Management & NSAIDs", count: "48+ Molecules", desc: "Analgesics, Anti-Inflammatory, Muscle Relaxants & Anti-Pyretics" },
    { name: "Anti-Diabetic & Metabolic", count: "38+ Molecules", desc: "Biguanides, Sulfonylureas, DPP-4 Inhibitors & SGLT2 Inhibitors" },
    { name: "Gastrointestinal & Anti-Ulcer", count: "42+ Molecules", desc: "PPIs, H2 Blockers, Antispasmodics, Prokinetics & Antiemetics" },
    { name: "Respiratory & Anti-Allergic", count: "35+ Molecules", desc: "Antihistamines, Bronchodilators, Mucolytics & Corticosteroids" },
    { name: "Central Nervous System (CNS)", count: "28+ Molecules", desc: "Anxiolytics, Antidepressants, Anti-Epileptics & Neurotonics" },
    { name: "Dermatology & Topicals", count: "25+ Molecules", desc: "Antibacterial Ointments, Corticosteroid Creams & Gels" },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-100 relative overflow-hidden">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-slate-200/80 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-[#006EDC] font-['JetBrains_Mono',monospace] text-xs font-bold uppercase tracking-wider mb-3">
              06.00 // DOSAGE FORMS &amp; THERAPEUTIC SPECTRUM
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1E48] tracking-tight font-['Inter',sans-serif]">
              350+ Formulations Across Key Clinical Categories
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-md">
            Delivering high-potency finished dosage forms manufactured under strict cleanroom conditions with tropical stability verification.
          </p>
        </div>

        {/* 4 Dosage Forms Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {dosageForms.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-[#FBFDFF] border border-slate-200/90 shadow-[0_10px_30px_rgba(11,30,72,0.03)] flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold font-['JetBrains_Mono',monospace]"
                    style={{ backgroundColor: `${item.accent}15`, color: item.accent }}
                  >
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-['JetBrains_Mono',monospace] font-bold text-slate-500">
                    {item.count}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0B1E48] mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.types}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/70 text-[11px] text-slate-500">
                <span className="font-bold text-slate-700 block mb-0.5">Barrier Packaging:</span>
                <span>{item.packaging}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Therapeutic Categories Grid */}
        <div className="rounded-3xl p-8 sm:p-10 bg-[#F8FAFD] border border-slate-200">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
            <h3 className="text-xl font-bold text-[#0B1E48]">
              Primary Therapeutic Segments
            </h3>
            <Link
              href="/categories"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#006EDC] hover:underline"
            >
              <span>View Full Therapeutic Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {therapeutics.map((th, tIdx) => (
              <div
                key={tIdx}
                className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-blue-300 transition-colors"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-['JetBrains_Mono',monospace] font-bold text-[#006EDC]">
                    {th.count}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#006EDC]" />
                </div>
                <h4 className="text-sm font-bold text-[#0B1E48] mb-1">
                  {th.name}
                </h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {th.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
