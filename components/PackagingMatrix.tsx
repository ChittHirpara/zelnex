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
    id: "drops",
    name: "Eye / EarDrops",
    lines: ["Eye /", "EarDrops"],
    bgColor: "#27AE60", // Clean Vibrant Emerald Green (Matching Reference)
    hoverColor: "#219653",
    badge: "STERILE OPHTHALMIC & OTIC",
    tagline: "Aseptic Blow-Fill-Seal (BFS) & 3-Piece Dropper Vials",
    description:
      "Aseptically filled sterile eye and ear solutions processed under Grade A laminar airflow cleanroom environments.",
    formats: ["5ml / 10ml / 15ml LDPE Droppers", "Single-Dose BFS Units", "Tamper-Evident Screw Caps", "Gamma-Sterilized Dropper Tips"],
    keySpecs: [
      { label: "Sterility Standard", value: "Class A Laminar Airflow (ISO 5)" },
      { label: "Preservation", value: "Preservative-Free Available" },
      { label: "Dropper Delivery", value: "Controlled Calibrated Drop Size" },
    ],
    annualCapacity: "45M+ Bottles / Year",
    icon: (
      <svg viewBox="0 0 100 100" className="w-14 h-14 sm:w-16 sm:h-16" fill="currentColor">
        <g transform="rotate(-35 50 45)">
          <path d="M42 20 h16 v10 h-16 z" />
          <path d="M38 30 h24 v36 a12 12 0 0 1 -24 0 z" />
          <path d="M44 20 L50 6 L56 20 Z" />
        </g>
        <path d="M32 74 Q32 84 38 84 Q44 84 44 74 Q44 68 38 60 Q32 68 32 74 Z" />
      </svg>
    ),
  },
  {
    id: "injection",
    name: "Injection",
    lines: ["Injection"],
    bgColor: "#C0392B", // Clean Medical Red (Matching Reference)
    hoverColor: "#A93226",
    badge: "PARENTERAL & LYOPHILIZED",
    tagline: "USP Type I Borosilicate Vials, Ampoules & Syringes",
    description:
      "Pyrogen-free parenteral infusions and freeze-dried lyophilized antibiotic cakes processed under sterile barrier isolation.",
    formats: ["2ml / 5ml / 10ml Glass Vials", "Amber / Clear Glass Ampoules", "Lyophilized Powder Cakes", "Prefilled Safety Syringes (PFS)"],
    keySpecs: [
      { label: "Glass Integrity", value: "USP Type I Neutral Borosilicate" },
      { label: "Endotoxin Safety", value: "< 0.25 EU/ml Bacterial Limit" },
      { label: "Closure Seal", value: "Chlorobutyl Rubber & Alu-Flip" },
    ],
    annualCapacity: "60M+ Vials / Year",
    icon: (
      <svg viewBox="0 0 100 100" className="w-14 h-14 sm:w-16 sm:h-16" fill="currentColor">
        <g transform="rotate(-45 50 50)">
          <rect x="42" y="24" width="16" height="38" rx="2" />
          <line x1="42" y1="36" x2="58" y2="36" stroke="#C0392B" strokeWidth="2.5" />
          <line x1="42" y1="46" x2="58" y2="46" stroke="#C0392B" strokeWidth="2.5" />
          <rect x="47" y="10" width="6" height="14" />
          <rect x="40" y="6" width="20" height="5" rx="1.5" />
          <path d="M47 62 L50 78 L53 62 Z" />
        </g>
      </svg>
    ),
  },
  {
    id: "creams",
    name: "Creams",
    lines: ["Creams"],
    bgColor: "#8E44AD", // Clean Purple (Matching Reference)
    hoverColor: "#7D3C98",
    badge: "TOPICAL DERMATOLOGY",
    tagline: "Aluminum Collapsible & Multi-Barrier Lami-Tubes",
    description:
      "Homogeneous hydrophilic creams, dermatological ointments, and dermal gels filled in epoxy-phenolic lined aluminum tubes for zero oxidation.",
    formats: ["15g / 30g / 50g Aluminum Tubes", "Lami-Tubes with Tamper Seal", "Airless Cosmetic Pump Jars", "Ointment Dispensers"],
    keySpecs: [
      { label: "Tube Barrier", value: "Epoxy-Phenolic Internal Lacquer" },
      { label: "Emulsification", value: "High-Shear Vacuum Homogenizer" },
      { label: "Closure Type", value: "Puncture Nozzle & CRC Cap" },
    ],
    annualCapacity: "30M+ Tubes / Year",
    icon: (
      <svg viewBox="0 0 100 100" className="w-14 h-14 sm:w-16 sm:h-16" fill="currentColor">
        <rect x="36" y="20" width="28" height="12" rx="3" />
        <path d="M26 34 L74 34 L68 76 a10 10 0 0 1 -10 10 L42 86 a10 10 0 0 1 -10 -10 Z" />
        <path d="M40 60 Q50 44 60 52 Q60 68 40 60 Z" fill="#8E44AD" />
      </svg>
    ),
  },
  {
    id: "syrup",
    name: "Suspension / syrup",
    lines: ["Suspension", "/ syrup"],
    bgColor: "#2C3E50", // Clean Slate Navy (Matching Reference)
    hoverColor: "#1A252F",
    badge: "ORAL LIQUIDS & SUSPENSIONS",
    tagline: "Amber PET & Type III Glass Bottles",
    description:
      "Palatable pediatric suspensions, cough syrups, and oral rehydration solutions formulated with tamper-evident graduated dosing closures.",
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
        <rect x="36" y="46" width="28" height="24" rx="4" fill="#2C3E50" />
      </svg>
    ),
  },
  {
    id: "inhaler",
    name: "Inhaler",
    lines: ["Inhaler"],
    bgColor: "#009688", // Clean Teal (Matching Reference)
    hoverColor: "#00796B",
    badge: "PULMONARY DELIVERY",
    tagline: "Pressurized MDI Canisters & Metered Valves",
    description:
      "Pressurized Metered Dose Inhalers (pMDI), nasal spray pumps, and inhalation respules for precision aerodynamic pulmonary delivery.",
    formats: ["100 / 200 Actuation Canisters", "15ml Metered Nasal Sprays", "Dry Powder Inhalers (DPI)", "BFS Inhalation Respules"],
    keySpecs: [
      { label: "Propellant Safety", value: "HFA-134a Ozone-Compliant" },
      { label: "Dosing Accuracy", value: "±5% Metered Valve Uniformity" },
      { label: "Particle Micronization", value: "Aerodynamic MMAD 1–5 µm" },
    ],
    annualCapacity: "25M+ Units / Year",
    icon: (
      <svg viewBox="0 0 100 100" className="w-14 h-14 sm:w-16 sm:h-16" fill="currentColor">
        <path d="M32 18 h20 v28 h18 a6 6 0 0 1 6 6 v18 a6 6 0 0 1 -6 6 H44 a14 14 0 0 1 -14 -14 V18 Z" />
        <rect x="68" y="52" width="6" height="18" rx="2" fill="#009688" />
        <rect x="36" y="10" width="12" height="8" rx="2" />
      </svg>
    ),
  },
  {
    id: "other",
    name: "Other",
    lines: ["Other"],
    bgColor: "#F1C40F", // Clean Golden Yellow (Matching Reference)
    hoverColor: "#D4AC0D",
    badge: "SPECIALIZED DOSAGE FORMS",
    tagline: "4-Ply Foil Sachets, Effervescent & Molecular Delivery",
    description:
      "Effervescent granules, oral rehydration salts (ORS), dry syrups, and custom dual-chamber foil packaging for international tenders.",
    formats: ["4-Ply Multi-Layer Foil Sachets", "Effervescent Plastic Tubes", "Dual-Chamber Pouch Packs", "Dry Powder Suspension Bottles"],
    keySpecs: [
      { label: "Foil Structure", value: "PET / Foil / Poly 4-Ply Barrier" },
      { label: "Seal Hermeticity", value: "100% High-Speed Heat Sealing" },
      { label: "Stability Factor", value: "Hermetic Desiccant Protection" },
    ],
    annualCapacity: "75M+ Sachets / Year",
    icon: (
      <svg viewBox="0 0 100 100" className="w-14 h-14 sm:w-16 sm:h-16" fill="currentColor">
        <circle cx="50" cy="50" r="10" />
        <circle cx="24" cy="30" r="8" />
        <circle cx="76" cy="30" r="8" />
        <circle cx="50" cy="80" r="8" />
        <line x1="50" y1="50" x2="24" y2="30" stroke="white" strokeWidth="6" strokeLinecap="round" />
        <line x1="50" y1="50" x2="76" y2="30" stroke="white" strokeWidth="6" strokeLinecap="round" />
        <line x1="50" y1="50" x2="50" y2="80" stroke="white" strokeWidth="6" strokeLinecap="round" />
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

        {/* ── EXACT 8 FLAT VIBRANT SQUARE TILES WITH DOWNWARD INDICATOR ARROW ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3.5 mb-6">
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
                      href="/#contact"
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
