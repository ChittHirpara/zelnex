"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Box, ShieldCheck, X } from "lucide-react";

interface PackagingTile {
  id: string;
  name: string;
  lines: string[];
  bgColor: string;
  hoverColor: string;
  badge: string;
  tagline: string;
  description: string;
  formats: string[];
  keySpecs: { label: string; value: string }[];
  annualCapacity: string;
  icon: React.ReactNode;
}

const PACKAGING_ITEMS: PackagingTile[] = [
  {
    id: "tablet",
    name: "Tablet",
    lines: ["Tablet"],
    bgColor: "#E67E22", // Clean Vibrant Orange (Matching Reference)
    hoverColor: "#D35400",
    badge: "SOLID ORAL DOSAGE",
    tagline: "High-Speed Rotary Compression & Barrier Blistering",
    description:
      "Direct compression, sustained-release, enteric-coated, and effervescent tablets packaged in high-barrier Alu-Alu and PVDC blister foils.",
    formats: ["Alu-Alu Cold Form Blister", "PVDC / PVC Tropicalized Pack", "Securitainer HDPE Bulk Bottles", "Strip Pack"],
    keySpecs: [
      { label: "Barrier Protection", value: "Tropical Zone IVb Foil" },
      { label: "Punch Sizing", value: "6mm – 25mm Direct Tooling" },
      { label: "Coating Technology", value: "Aqueous Film & Enteric" },
    ],
    annualCapacity: "400M+ Units / Year",
    icon: (
      <svg viewBox="0 0 100 100" className="w-14 h-14 sm:w-16 sm:h-16" fill="currentColor">
        <ellipse cx="38" cy="46" rx="22" ry="22" />
        <ellipse cx="58" cy="62" rx="24" ry="15" />
        <path d="M42 62 Q58 52 74 62" stroke="#E67E22" strokeWidth="3" fill="none" />
      </svg>
    ),
  },
  {
    id: "capsule",
    name: "Capsule",
    lines: ["Capsule"],
    bgColor: "#0072C6", // Clean Vibrant Blue (Matching Reference)
    hoverColor: "#005A9E",
    badge: "PRECISION ENCAPSULATION",
    tagline: "Hard Gelatin, HPMC Veg & Liquid Softgels",
    description:
      "Automated capsule filling supporting precision multi-pellet micro-dosing, dry powders, and specialized liquid softgel formulations.",
    formats: ["Size 00 to 4 Hard Gelatin", "HPMC Vegetarian Plant Shells", "Liquid-Filled Softgels", "Induction-Sealed HDPE Jars"],
    keySpecs: [
      { label: "Capsule Sizing", value: "Size 00, 0, 1, 2, 3, 4" },
      { label: "Fill Accuracy", value: "±2% Dynamic Checkweighing" },
      { label: "Barrier Lamination", value: "High-Density PVDC Blister" },
    ],
    annualCapacity: "150M+ Units / Year",
    icon: (
      <svg viewBox="0 0 100 100" className="w-14 h-14 sm:w-16 sm:h-16" fill="currentColor">
        <g transform="rotate(-40 50 50)">
          <rect x="36" y="22" width="28" height="28" rx="14" />
          <rect x="36" y="50" width="28" height="28" rx="14" fill="none" stroke="white" strokeWidth="4" />
          <line x1="36" y1="50" x2="64" y2="50" stroke="white" strokeWidth="4" />
        </g>
      </svg>
    ),
  },
  {
    id: "softgel",
    name: "Softgel",
    lines: ["Softgel"],
    bgColor: "#27AE60", // Clean Vibrant Emerald Green
    hoverColor: "#219653",
    badge: "LIPID-SOLUBLE SOFTGELS",
    tagline: "Rotary Die Encapsulation & Lipid Bioavailability",
    description:
      "Hermetically sealed soft gelatin capsules designed for high-bioavailability lipid-soluble vitamins, omega fatty acids, and specialized nutraceutical actives.",
    formats: ["Oval & Oblong Gelatin Shells", "Nitrogen-Flushed Amber Blisters", "Tamper-Evident HDPE Containers", "High-Barrier PVDC Strips"],
    keySpecs: [
      { label: "Shell Integrity", value: "Bovine / Marine Pharma Grade" },
      { label: "Fill Precision", value: "Rotary Die Dynamic Injection" },
      { label: "Oxidation Barrier", value: "Nitrogen Purge Encapsulation" },
    ],
    annualCapacity: "80M+ Softgels / Year",
    icon: (
      <svg viewBox="0 0 100 100" className="w-14 h-14 sm:w-16 sm:h-16" fill="currentColor">
        <ellipse cx="50" cy="50" rx="28" ry="36" transform="rotate(30 50 50)" />
        <ellipse cx="42" cy="40" rx="8" ry="14" fill="white" className="opacity-80" transform="rotate(30 42 40)" />
      </svg>
    ),
  },
  {
    id: "syrup",
    name: "Suspension / syrup",
    lines: ["Suspension", "/ syrup"],
    bgColor: "#8E44AD", // Clean Vibrant Purple
    hoverColor: "#7D3C98",
    badge: "ORAL LIQUIDS & SUSPENSIONS",
    tagline: "Amber PET & Type III Glass Bottles",
    description:
      "Palatable pediatric suspensions, cough syrups, and digestive tonics formulated with tamper-evident graduated dosing closures.",
    formats: ["60ml / 100ml / 200ml Amber PET", "Type III Amber Glass Bottles", "Child-Resistant CRC Closures", "Measuring Dosage Cups"],
    keySpecs: [
      { label: "Resin Specification", value: "USP Grade Heavy-Wall PET" },
      { label: "Suspension Stability", value: "Uniform Density & Non-Caking" },
      { label: "Dosing Measure", value: "Graduated 2.5ml – 10ml Spoons" },
    ],
    annualCapacity: "50M+ Bottles / Year",
    icon: (
      <svg viewBox="0 0 100 100" className="w-14 h-14 sm:w-16 sm:h-16" fill="currentColor">
        <rect x="42" y="16" width="16" height="10" rx="2" />
        <rect x="46" y="26" width="8" height="8" />
        <path d="M34 34 L66 34 a8 8 0 0 1 8 8 L74 76 a8 8 0 0 1 -8 8 L34 84 a8 8 0 0 1 -8 -8 L26 42 a8 8 0 0 1 8 -8 Z" />
        <rect x="36" y="46" width="28" height="24" rx="4" fill="#8E44AD" />
      </svg>
    ),
  },
  {
    id: "sachet",
    name: "Powder & Sachet",
    lines: ["Powder", "& Sachet"],
    bgColor: "#2C3E50", // Clean Slate Navy
    hoverColor: "#1A252F",
    badge: "MULTI-LAYER BARRIER POUCHES",
    tagline: "4-Ply Foil Sachets & High-Speed Vertical Form Fill",
    description:
      "WHO-standard Oral Rehydration Salts (ORS), electrolyte powders, and bioactive peptides packed in moisture-impermeable 4-ply barrier foil.",
    formats: ["4-Ply Multi-Layer Foil Sachets", "Pre-Printed Aluminum Pouches", "Dual-Chamber Sachet Packs", "High-Speed Bulk Unit Boxes"],
    keySpecs: [
      { label: "Foil Structure", value: "PET / Foil / Poly 4-Ply Barrier" },
      { label: "Seal Hermeticity", value: "100% High-Speed Heat Sealing" },
      { label: "Moisture Protection", value: "< 0.05 g/m²/day MVTR Limit" },
    ],
    annualCapacity: "75M+ Sachets / Year",
    icon: (
      <svg viewBox="0 0 100 100" className="w-14 h-14 sm:w-16 sm:h-16" fill="currentColor">
        <rect x="25" y="25" width="50" height="50" rx="6" />
        <line x1="25" y1="38" x2="75" y2="38" stroke="#2C3E50" strokeWidth="3" strokeDasharray="4 4" />
        <line x1="25" y1="62" x2="75" y2="62" stroke="#2C3E50" strokeWidth="3" strokeDasharray="4 4" />
        <line x1="50" y1="40" x2="50" y2="60" stroke="#2C3E50" strokeWidth="3" />
      </svg>
    ),
  },
  {
    id: "effervescent",
    name: "Effervescent",
    lines: ["Effervescent"],
    bgColor: "#009688", // Clean Teal
    hoverColor: "#00796B",
    badge: "RAPID DISSOLUTION DOSING",
    tagline: "Desiccant-Lined Aluminum & Plastic Tubes",
    description:
      "Instant-dissolution effervescent tablets packed in rigid cylindrical tubes with integrated molecular sieve desiccant stoppers.",
    formats: ["10 / 20 Tablet Plastic Tubes", "Desiccant Silica Spring Caps", "Direct Moisture Barrier Foils", "Blister Strip Packaging"],
    keySpecs: [
      { label: "Dissolution Time", value: "< 90 Seconds in Cold Water" },
      { label: "Desiccant Cap", value: "Integrated Molecular Sieve" },
      { label: "Relative Humidity", value: "Manufactured at < 20% RH" },
    ],
    annualCapacity: "30M+ Tubes / Year",
    icon: (
      <svg viewBox="0 0 100 100" className="w-14 h-14 sm:w-16 sm:h-16" fill="currentColor">
        <circle cx="50" cy="55" r="24" />
        <circle cx="40" cy="22" r="5" fill="white" />
        <circle cx="60" cy="18" r="6.5" fill="white" />
      </svg>
    ),
  },
];

export function PackagingMatrix() {
  const [selectedId, setSelectedId] = useState<string | null>("capsule");
  const activeItem = PACKAGING_ITEMS.find((p) => p.id === selectedId) || null;

  return (
    <section
      id="packaging"
      className="relative scroll-mt-24 py-16 sm:py-20 select-none font-['Inter',sans-serif] bg-[#F4F8FD] border-b border-blue-100"
    >
      <div className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#006EDC]/10 border border-[#006EDC]/25 mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#006EDC] animate-pulse" />
            <span className="text-[11px] font-['JetBrains_Mono',monospace] font-bold uppercase tracking-[0.15em] text-[#006EDC]">
              06.00 // DOSAGE FORMS &amp; PACKAGING
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B1E48] tracking-tight leading-[1.15]">
            Comprehensive Dosage Formats
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto mt-2 font-normal">
            Click any dosage form below to inspect technical packaging specifications.
          </p>
        </div>

        {/* ── EXACT 6 FLAT VIBRANT SQUARE TILES WITH DOWNWARD INDICATOR ARROW ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3.5 mb-6">
          {PACKAGING_ITEMS.map((tile) => {
            const isSelected = tile.id === selectedId;
            return (
              <button
                key={tile.id}
                type="button"
                onClick={() => setSelectedId((prev) => (prev === tile.id ? null : tile.id))}
                className={`group relative rounded-none sm:rounded-sm aspect-square flex flex-col items-center justify-center p-3 text-white text-center transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "scale-105 z-20 shadow-lg"
                    : "hover:scale-[1.03] shadow-sm hover:shadow-md opacity-95 hover:opacity-100"
                }`}
                style={{
                  backgroundColor: tile.bgColor,
                }}
              >
                {/* ── Downward Pointer Indicator Caret ── */}
                {isSelected && (
                  <div
                    className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-x-[9px] border-x-transparent border-t-[11px] z-30 transition-all duration-200"
                    style={{ borderTopColor: tile.bgColor }}
                    aria-hidden
                  />
                )}

                {/* Centered Silhouette Icon */}
                <div className="flex-1 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                  {tile.icon}
                </div>

                {/* Bold Typography matching Reference */}
                <div className="w-full pb-1">
                  {tile.lines.map((line, idx) => (
                    <span
                      key={idx}
                      className="block text-xs sm:text-[13px] font-extrabold text-white tracking-tight leading-tight"
                      style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
                    >
                      {line}
                    </span>
                  ))}
                </div>
              </button>
            );
          })}
        </div>

        {/* ── Interactive Connected Detail Deck ── */}
        <AnimatePresence mode="wait">
          {activeItem && (
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="relative rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-md"
              style={{
                borderTop: `4px solid ${activeItem.bgColor}`,
              }}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedId(null)}
                aria-label="Close details"
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pr-6">
                
                {/* Left Info Column */}
                <div className="lg:col-span-5 space-y-3">
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-2xs"
                    style={{ backgroundColor: activeItem.bgColor }}
                  >
                    <span>{activeItem.badge}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E48]">
                    {activeItem.name} Formulations
                  </h3>

                  <p className="text-sm font-bold" style={{ color: activeItem.bgColor }}>
                    {activeItem.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {activeItem.description}
                  </p>

                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-md transition-all cursor-pointer"
                      style={{ backgroundColor: activeItem.bgColor }}
                    >
                      <span>Inquire for {activeItem.name}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Right Specs Grid */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200">
                  
                  {/* Formats */}
                  <div className="bg-white rounded-lg p-4 border border-slate-200/80 shadow-2xs">
                    <div className="flex items-center gap-2 text-xs font-bold font-['JetBrains_Mono',monospace] uppercase text-slate-400 mb-2.5">
                      <Box className="w-4 h-4 text-[#006EDC]" />
                      <span>Packaging Formats</span>
                    </div>
                    <div className="space-y-1.5 text-xs text-slate-700 font-medium">
                      {activeItem.formats.map((fmt, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeItem.bgColor }} />
                          <span>{fmt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specs */}
                  <div className="bg-white rounded-lg p-4 border border-slate-200/80 shadow-2xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold font-['JetBrains_Mono',monospace] uppercase text-slate-400 mb-2.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span>Specifications</span>
                      </div>
                      <div className="space-y-2 font-['JetBrains_Mono',monospace] text-xs">
                        {activeItem.keySpecs.map((s, i) => (
                          <div key={i}>
                            <div className="text-[10px] text-slate-400">{s.label}</div>
                            <div className="text-slate-900 font-bold">{s.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-['JetBrains_Mono',monospace] text-slate-600 font-bold">
                      <span>Capacity:</span>
                      <span style={{ color: activeItem.bgColor }}>{activeItem.annualCapacity}</span>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

export default PackagingMatrix;
