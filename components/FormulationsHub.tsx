"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

interface DosageOption {
  id: string;
  name: string;
  category: string;
  bgColor: string;
  hoverColor: string;
  hexColor: string;
  href: string;
  icon: React.ReactNode;
}

const DOSAGE_OPTIONS: DosageOption[] = [
  {
    id: "tablet",
    name: "Tablets",
    category: "Solid Oral Compression",
    bgColor: "bg-[#F39200]",
    hoverColor: "hover:bg-[#d98200]",
    hexColor: "#F39200",
    href: "/products?dosage=tablet",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white mx-auto" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="7.5" fill="white" />
      </svg>
    ),
  },
  {
    id: "capsule",
    name: "Capsules",
    category: "Precision Encapsulation",
    bgColor: "bg-[#0088CC]",
    hoverColor: "hover:bg-[#0077b3]",
    hexColor: "#0088CC",
    href: "/products?dosage=capsule",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white mx-auto" viewBox="0 0 24 24" fill="currentColor">
        <rect x="5.5" y="7.5" width="13" height="9" rx="4.5" transform="rotate(-45 12 12)" fill="white" />
        <line x1="8.5" y1="8.5" x2="15.5" y2="15.5" stroke="#0088CC" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "effervescent",
    name: "Effervescent",
    category: "Rapid Dissolution & Fizz",
    bgColor: "bg-[#00A0A2]",
    hoverColor: "hover:bg-[#008a8c]",
    hexColor: "#00A0A2",
    href: "/products?dosage=effervescent",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white mx-auto" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="14" r="6.5" fill="white" />
        <circle cx="9.5" cy="5" r="1.5" fill="white" />
        <circle cx="14.5" cy="4" r="2" fill="white" />
        <circle cx="12" cy="6.5" r="1" fill="white" />
      </svg>
    ),
  },
  {
    id: "suspension",
    name: "Syrups & Susp.",
    category: "Oral Liquids & Elixirs",
    bgColor: "bg-[#80276C]",
    hoverColor: "hover:bg-[#6c205b]",
    hexColor: "#80276C",
    href: "/products?dosage=suspension",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white mx-auto" viewBox="0 0 24 24" fill="currentColor">
        <rect x="8.5" y="3" width="7" height="3" rx="1.5" fill="white" />
        <rect x="10.5" y="6" width="3" height="3" rx="0.5" fill="white" className="opacity-80" />
        <rect x="6.5" y="9" width="11" height="12" rx="3.5" fill="white" />
      </svg>
    ),
  },
  {
    id: "dry-powder",
    name: "Dry Powders",
    category: "Reconstitution Granules & Vials",
    bgColor: "bg-[#D97706]",
    hoverColor: "hover:bg-[#b45309]",
    hexColor: "#D97706",
    href: "/products?dosage=dry-powder",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white mx-auto" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" stroke="white" strokeWidth="1.75" fill="none" />
        <path d="M12 12l8-5M12 12v10M12 12L4 7" stroke="white" strokeWidth="1.75" />
      </svg>
    ),
  },
  {
    id: "topical",
    name: "Topical / Tube",
    category: "Ointments, Creams & Gels",
    bgColor: "bg-[#059669]",
    hoverColor: "hover:bg-[#047857]",
    hexColor: "#059669",
    href: "/products?dosage=topical",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white mx-auto" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 21h10a2 2 0 002-2v-5a2 2 0 00-2-2H7a2 2 0 00-2 2v5a2 2 0 002 2z" fill="white" />
        <path d="M10 12V6a2 2 0 012-2h0a2 2 0 012 2v6" stroke="white" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    id: "all",
    name: "All (355)",
    category: "Complete Formulary Directory",
    bgColor: "bg-[#1E293B]",
    hoverColor: "hover:bg-[#0f172a]",
    hexColor: "#1E293B",
    href: "/products",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white mx-auto" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l2.4 7.2h7.6l-6.2 4.5 2.4 7.3-6.2-4.5-6.2 4.5 2.4-7.3-6.2-4.5h7.6z" fill="white" />
      </svg>
    ),
  },
];

export function FormulationsHub() {
  return (
    <section
      id="products"
      className="relative scroll-mt-24 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto z-20 select-none font-[family-name:var(--font-montserrat)]"
    >
      {/* ════════════════════════════════════════════════════════════════
          COMPACT OPAQUE SHIELD: BALANCED PROPORTIONS
         ════════════════════════════════════════════════════════════════ */}
      <div className="relative bg-[#FAFCFF] rounded-[28px] sm:rounded-[36px] border border-blue-100 shadow-[0_12px_45px_rgba(8,43,97,0.05)] p-5 sm:p-7 lg:p-8 overflow-hidden transition-all duration-300">
        
        {/* Soft Ambient Glow */}
        <div
          className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[550px] h-[250px] rounded-full blur-[100px] opacity-15 bg-[#006EDC]"
        />

        {/* ════════════════════════════════════════════════════════════════
            1. STREAMLINED EXECUTIVE HEADER & LIVE KPI STRIP
           ════════════════════════════════════════════════════════════════ */}
        <div className="relative z-10 text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          {/* Metadata Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#006EDC]/10 border border-[#006EDC]/25 mb-2.5 shadow-2xs">
            <Sparkles className="w-3 h-3 text-[#006EDC]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#006EDC] font-[family-name:var(--font-outfit)]">
              Finished Formulations &amp; Dosage Capabilities
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#082B61] tracking-tight leading-tight mb-2.5 font-[family-name:var(--font-outfit)]">
            Commercial Formulations &amp; Certified Dosage Formats
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4 max-w-xl mx-auto">
            High-throughput pharmaceutical manufacturing across certified dosage forms — combining cleanroom capacities, high-barrier packaging, and WHO-GMP validated compliance.
          </p>

          {/* 4 Compact Executive Metric Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-xl mx-auto">
            <div className="bg-white border border-slate-200/80 rounded-lg px-2.5 py-1.5 text-center shadow-2xs">
              <span className="block text-xs font-bold text-[#082B61] font-[family-name:var(--font-outfit)]">
                355+
              </span>
              <span className="text-[9.5px] text-slate-500 font-medium uppercase tracking-wider">
                Molecules
              </span>
            </div>
            <div className="bg-white border border-slate-200/80 rounded-lg px-2.5 py-1.5 text-center shadow-2xs">
              <span className="block text-xs font-bold text-[#082B61] font-[family-name:var(--font-outfit)]">
                870M+
              </span>
              <span className="text-[9.5px] text-slate-500 font-medium uppercase tracking-wider">
                Annual Units
              </span>
            </div>
            <div className="bg-white border border-slate-200/80 rounded-lg px-2.5 py-1.5 text-center shadow-2xs">
              <span className="block text-xs font-bold text-emerald-600 font-[family-name:var(--font-outfit)]">
                WHO-GMP
              </span>
              <span className="text-[9.5px] text-slate-500 font-medium uppercase tracking-wider">
                Validated
              </span>
            </div>
            <div className="bg-white border border-slate-200/80 rounded-lg px-2.5 py-1.5 text-center shadow-2xs">
              <span className="block text-xs font-bold text-[#006EDC] font-[family-name:var(--font-outfit)]">
                Zone IVb
              </span>
              <span className="text-[9.5px] text-slate-500 font-medium uppercase tracking-wider">
                Stability
              </span>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            2. VIBRANT ICONIC DOSAGE TILES (7 FORMAT BUTTONS FROM SCREENSHOT)
            Direct redirection to the product catalogue by dosage format
           ════════════════════════════════════════════════════════════════ */}
        <div className="relative z-10 mb-4 sm:mb-6">
          <div className="flex sm:grid sm:grid-cols-4 lg:grid-cols-7 gap-2 sm:gap-2.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none -mx-1 px-1">
            {DOSAGE_OPTIONS.map((dosage) => (
              <Link
                key={dosage.id}
                href={dosage.href}
                className={`group relative min-w-[95px] sm:min-w-0 flex-1 sm:flex-initial py-3 sm:py-3.5 px-2 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center transition-all duration-200 cursor-pointer text-white shrink-0 sm:shrink shadow-xs hover:shadow-md hover:scale-[1.03] active:scale-[0.98] ${dosage.bgColor} ${dosage.hoverColor}`}
                title={`Explore ${dosage.name} Formulations`}
              >
                {/* Center: Silhouette Icon */}
                <div className="mb-2 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                  {dosage.icon}
                </div>

                {/* Bottom: Title Label */}
                <span className="text-white text-xs sm:text-[13px] font-bold tracking-tight text-center leading-tight font-[family-name:var(--font-outfit)]">
                  {dosage.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            3. FOOTER TELEMETRY & DIRECT CATALOGUE ACTION
           ════════════════════════════════════════════════════════════════ */}
        <div className="relative z-10 pt-4 border-t border-blue-100/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-medium text-slate-600">
              Select any dosage format to view all 355+ approved formulations, CTD dossiers &amp; technical specifications
            </span>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 font-bold text-[#006EDC] hover:text-[#005bb8] hover:underline font-[family-name:var(--font-outfit)] transition-colors shrink-0"
          >
            <span>Browse Full Product Catalogue</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default FormulationsHub;
