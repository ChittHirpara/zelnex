"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Box,
  Layers,
  CheckCircle2,
  FileText,
  Award,
  Clock,
  Package,
  Pill,
} from "lucide-react";

interface DosageItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  color: string;
  annualCapacity: string;
  productTitle: string;
  productSubtitle: string;
  productBadge: string;
  productBadgeColor: string;
  productBadgeBg: string;
  productBadgeBorder: string;
  productImage: string;
  productDescription: string;
  commercialMolecules: string[];
  packagingFormats: string[];
  keySpecs: { label: string; value: string }[];
  procurement: {
    moq: string;
    leadTime: string;
    shelfLife: string;
    stability: string;
  };
  regulatoryNote: string;
  icon: React.ReactNode;
}

const DOSAGE_ITEMS: DosageItem[] = [
  {
    id: "tablet",
    name: "Tablet",
    category: "Solid Oral Compression",
    tagline: "High-Speed Rotary Compression & Barrier Alu-Alu Blistering",
    color: "#E67E22",
    annualCapacity: "400M+ Units / Year",
    productTitle: "ZELNEX Tab-Complex",
    productSubtitle: "Film-Coated, Sustained-Release & Enteric Formulations",
    productBadge: "Oral Solid Dosage",
    productBadgeColor: "#E67E22",
    productBadgeBg: "rgba(255, 247, 237, 0.95)",
    productBadgeBorder: "rgba(253, 186, 116, 0.9)",
    productImage: "/products/tablets-blister.jpg",
    productDescription:
      "Automated high-speed rotary tableting cleanroom lines with precision aqueous film coating, sustained-release matrix cores, and high-barrier Alu-Alu cold form blister sealing.",
    commercialMolecules: [
      "Paracetamol 500/650mg",
      "Azithromycin 500mg",
      "Metformin SR 500/1000mg",
      "Ciprofloxacin 500mg",
      "Telmisartan 40/80mg",
      "Ibuprofen + Paracetamol",
    ],
    packagingFormats: [
      "Alu-Alu Cold Form Barrier Blister",
      "PVDC / PVC Tropicalized Pack",
      "Securitainer HDPE Bulk Bottles",
      "Child-Resistant Push Strips",
    ],
    keySpecs: [
      { label: "Barrier Rating", value: "Tropical Zone IVb Foil" },
      { label: "Tooling Range", value: "6mm – 25mm Direct Tooling" },
      { label: "Coating Specs", value: "Aqueous Film & Enteric" },
      { label: "Friability Test", value: "< 0.8% USP Validated" },
    ],
    procurement: {
      moq: "50,000 Blisters",
      leadTime: "3–4 Weeks",
      shelfLife: "36 Months",
      stability: "Zone IVb (40°C / 75% RH)",
    },
    regulatoryNote: "WHO-GMP Cleanroom Suite · USP / BP Validated",
    icon: (
      <svg viewBox="0 0 100 100" className="w-9 h-9 sm:w-11 sm:h-11" fill="white">
        <ellipse cx="38" cy="46" rx="22" ry="22" />
        <ellipse cx="58" cy="62" rx="24" ry="15" />
        <path d="M42 62 Q58 52 74 62" stroke="#E67E22" strokeWidth="4" fill="none" />
      </svg>
    ),
  },
  {
    id: "capsule",
    name: "Capsule",
    category: "Precision Encapsulation",
    tagline: "High-Speed Checkweighed Encapsulation & Multi-Pellet Dosing",
    color: "#0072C6",
    annualCapacity: "150M+ Units / Year",
    productTitle: "ZELNEX Dura-Caps 500mg",
    productSubtitle: "BSE/TSE Free Gelatin & Plant-Based HPMC Shells",
    productBadge: "Precision Encapsulation",
    productBadgeColor: "#0072C6",
    productBadgeBg: "rgba(240, 249, 255, 0.95)",
    productBadgeBorder: "rgba(186, 230, 253, 0.9)",
    productImage: "/products/hard-capsules.jpg",
    productDescription:
      "Precision automated encapsulation ensuring exact fill weight consistency for hygroscopic active powders, multi-pellet micro-dosing, and extended-release granules.",
    commercialMolecules: [
      "Amoxicillin 500mg (BP)",
      "Omeprazole 20mg Pellets",
      "Doxycycline Hyclate 100mg",
      "Itraconazole 100/200mg",
      "Pregabalin 75/150mg",
      "Digestive Enzyme Complex",
    ],
    packagingFormats: [
      "Size 00 to 4 Gelatin Shells",
      "HPMC Vegetarian Plant Shells",
      "Induction-Sealed HDPE Jars",
      "High-Barrier PVDC Blisters",
    ],
    keySpecs: [
      { label: "Shell Sizing", value: "Size 00, 0, 1, 2, 3, 4" },
      { label: "Dosing Accuracy", value: "±2% Checkweighed" },
      { label: "Disintegration", value: "< 15 mins (USP / BP)" },
      { label: "Microbial Limit", value: "USP <61> / <62> Exam" },
    ],
    procurement: {
      moq: "30,000 Packs",
      leadTime: "3–4 Weeks",
      shelfLife: "36 Months",
      stability: "Zone IVb (40°C / 75% RH)",
    },
    regulatoryNote: "BSE/TSE Free Shells · ISO 9001:2015",
    icon: (
      <svg viewBox="0 0 100 100" className="w-9 h-9 sm:w-11 sm:h-11" fill="white">
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
    category: "Lipid Encapsulation",
    tagline: "Rotary Die Liquid Encapsulation & Bioavailability Enhancement",
    color: "#27AE60",
    annualCapacity: "60M+ Units / Year",
    productTitle: "ZELNEX Lipid-Gel 1000mg",
    productSubtitle: "Hermetically Sealed Hydrophobic Drug Delivery",
    productBadge: "Lipid Drug Delivery",
    productBadgeColor: "#27AE60",
    productBadgeBg: "rgba(240, 253, 244, 0.95)",
    productBadgeBorder: "rgba(187, 247, 208, 0.9)",
    productImage: "/products/softgel-capsules.jpg",
    productDescription:
      "Advanced rotary die encapsulation for lipid-based active pharmaceutical ingredients, poorly soluble molecules, and fat-soluble nutraceutical complexes.",
    commercialMolecules: [
      "Omega-3 Marine Triglyceride",
      "Vitamin D3 60,000 IU",
      "Coenzyme Q10 100mg",
      "Evening Primrose Oil",
      "Vitamin E 400 IU",
      "Isotretinoin 10/20mg",
    ],
    packagingFormats: [
      "Oval & Oblong Gelatin Shells",
      "Plant-Based Softgels",
      "Amber Glass Light-Proof Bottles",
      "Push-Through Alu Blisters",
    ],
    keySpecs: [
      { label: "Seam Integrity", value: "100% Hermetic Laser Weld" },
      { label: "Bioavailability", value: "SEDDS / SMEDDS Matrix" },
      { label: "Shell Plasticity", value: "Controlled Plasticizer" },
      { label: "Oxidation Barrier", value: "Nitrogen Purged" },
    ],
    procurement: {
      moq: "25,000 Bottles",
      leadTime: "4 Weeks",
      shelfLife: "24–36 Months",
      stability: "Zone IVb Amber Protected",
    },
    regulatoryNote: "Hermetic Laser Sealing · Heavy Metal Tested",
    icon: (
      <svg viewBox="0 0 100 100" className="w-9 h-9 sm:w-11 sm:h-11" fill="white">
        <ellipse cx="50" cy="50" rx="26" ry="34" transform="rotate(30 50 50)" />
        <ellipse cx="42" cy="40" rx="7" ry="13" fill="#27AE60" className="opacity-80" transform="rotate(30 42 40)" />
      </svg>
    ),
  },
  {
    id: "suspension",
    name: "Suspension / syrup",
    category: "Pediatric & Oral Liquids",
    tagline: "High-Speed Liquid Filling Lines & Tamper-Evident Metered Delivery",
    color: "#8E44AD",
    annualCapacity: "30M+ Bottles / Year",
    productTitle: "ZELNEX Sedamin 150ml",
    productSubtitle: "Palatable Pediatric Suspensions & Oral Solutions",
    productBadge: "Pediatric & Oral Liquids",
    productBadgeColor: "#8E44AD",
    productBadgeBg: "rgba(250, 245, 255, 0.95)",
    productBadgeBorder: "rgba(233, 213, 255, 0.9)",
    productImage: "/products/syrup-suspension.jpg",
    productDescription:
      "Automated liquid formulation suites manufacturing palatable pediatric syrups, cough suppressants, and oral rehydration solutions fitted with calibrated dosing cups.",
    commercialMolecules: [
      "Paracetamol Paed. 120mg/5ml",
      "Dextromethorphan + CPM",
      "Cetirizine Syrup 5mg/5ml",
      "Zinc Sulfate Solution",
      "Ambroxol + Guaifenesin",
      "Multivitamin Pediatric",
    ],
    packagingFormats: [
      "Amber PET & Type III Glass",
      "Child-Resistant CRC Closures",
      "Calibrated 15ml Dosing Cups",
      "Induction Heat Foil Seals",
    ],
    keySpecs: [
      { label: "Volume Range", value: "60ml / 100ml / 150ml / 200ml" },
      { label: "Torque Control", value: "100% Inline Optical Check" },
      { label: "Viscosity Control", value: "Rheology-Stabilized" },
      { label: "Preservation", value: "USP <51> Antimicrobial" },
    ],
    procurement: {
      moq: "20,000 Bottles",
      leadTime: "3–4 Weeks",
      shelfLife: "24–36 Months",
      stability: "Zone IVb (40°C / 75% RH)",
    },
    regulatoryNote: "Child-Resistant Closure · 100% Torque Inspected",
    icon: (
      <svg viewBox="0 0 100 100" className="w-9 h-9 sm:w-11 sm:h-11" fill="white">
        <rect x="42" y="16" width="16" height="10" rx="2" />
        <rect x="46" y="26" width="8" height="8" />
        <path d="M34 34 L66 34 a8 8 0 0 1 8 8 L74 76 a8 8 0 0 1 -8 8 L34 84 a8 8 0 0 1 -8 -8 L26 42 a8 8 0 0 1 8 -8 Z" />
        <rect x="38" y="48" width="24" height="22" rx="3" fill="#8E44AD" />
      </svg>
    ),
  },
  {
    id: "sachet",
    name: "Powder & Sachet",
    category: "Multi-Layer Barrier Pouches",
    tagline: "4-Ply Barrier Pouches & Vertical Form-Fill-Seal Micro-Dosing",
    color: "#2C3E50",
    annualCapacity: "75M+ Sachets / Year",
    productTitle: "ZELNEX ORS-Pro Sachets",
    productSubtitle: "WHO Formulated Soluble Oral Electrolytes & Salts",
    productBadge: "Soluble Oral Electrolyte",
    productBadgeColor: "#2C3E50",
    productBadgeBg: "rgba(243, 244, 246, 0.95)",
    productBadgeBorder: "rgba(209, 213, 219, 0.9)",
    productImage: "/products/powder-sachets.jpg",
    productDescription:
      "High-speed vertical form-fill-seal (VFFS) packing lines for hygroscopic powders, effervescent granules, and WHO Oral Rehydration Salts sealed in 4-ply barrier foil.",
    commercialMolecules: [
      "WHO ORS Formula 20.5g",
      "Pre & Probiotic Sachet",
      "Cholecalciferol 60K Granules",
      "L-Arginine + Proanthocyanidin",
      "Cranberry + D-Mannose",
      "Effervescent Electrolytes",
    ],
    packagingFormats: [
      "4-Ply Barrier Foil (PET/Alu/PE)",
      "Pre-Printed Export Pouches",
      "Laser-Notched Tear Sachets",
      "Bulk Hospital Unit Cartons",
    ],
    keySpecs: [
      { label: "Foil Structure", value: "PET / Foil / Poly 4-Ply" },
      { label: "Moisture Vapor", value: "MVTR < 0.05 g/m²/day" },
      { label: "Sealing Type", value: "100% Thermal Fusion Seal" },
      { label: "Fill Precision", value: "1g – 50g Servo Augers" },
    ],
    procurement: {
      moq: "50,000 Sachets",
      leadTime: "3 Weeks",
      shelfLife: "36 Months",
      stability: "Zone IVb Impermeable Seal",
    },
    regulatoryNote: "WHO Formulated · 36-Month Tropical Shelf Life",
    icon: (
      <svg viewBox="0 0 100 100" className="w-9 h-9 sm:w-11 sm:h-11" fill="white">
        <rect x="25" y="25" width="50" height="50" rx="6" />
        <line x1="25" y1="38" x2="75" y2="38" stroke="#2C3E50" strokeWidth="3" strokeDasharray="4 4" />
        <line x1="25" y1="62" x2="75" y2="62" stroke="#2C3E50" strokeWidth="3" strokeDasharray="4 4" />
        <line x1="50" y1="40" x2="50" y2="60" stroke="#2C3E50" strokeWidth="3" />
      </svg>
    ),
  },
  {
    id: "sterile",
    name: "Sterile & Spray",
    category: "Aseptic Cleanroom Delivery",
    tagline: "Depyrogenated Borosilicate Vials & Metered Nasal Delivery",
    color: "#0D9488",
    annualCapacity: "50M+ Units / Year",
    productTitle: "ZELNEX Sterile-Vial & Spray",
    productSubtitle: "Parenteral Solutions & Metered Intranasal Actuators",
    productBadge: "Sterile Parenteral & Wellness",
    productBadgeColor: "#0D9488",
    productBadgeBg: "rgba(240, 253, 250, 0.95)",
    productBadgeBorder: "rgba(153, 246, 228, 0.9)",
    productImage: "/products/sterile-vial.jpg",
    productDescription:
      "Aseptically filled parenteral infusions, lyophilized antibiotic vials certified for Grade A laminar flow cleanrooms, and high-potency metered intranasal formulations.",
    commercialMolecules: [
      "Ceftriaxone 1g Lyophilized (USP)",
      "Artesunate 60mg Sterile Vial",
      "Oxytocin Metered Spray 15ml",
      "Diclofenac 75mg/1ml Ampoule",
      "Pantoprazole 40mg IV Lyoph.",
      "Sterile Water for Inj. (SWFI)",
    ],
    packagingFormats: [
      "Type I Borosilicate Vials",
      "Chlorobutyl Lyoph. Stoppers",
      "Anodized Aluminum Flip Caps",
      "Metered Nasal Pump Actuators",
    ],
    keySpecs: [
      { label: "Sterility Level", value: "SAL 10⁻⁶ Validated Aseptic" },
      { label: "Endotoxin Limit", value: "< 0.25 EU/ml (LAL Certified)" },
      { label: "Particulate Test", value: "USP <788> Sub-Visible Test" },
      { label: "Spray Precision", value: "0.05ml – 0.1ml ±5% Actuator" },
    ],
    procurement: {
      moq: "20,000 Vials",
      leadTime: "4 Weeks",
      shelfLife: "24–36 Months",
      stability: "Grade A Cold-Chain & Tropical",
    },
    regulatoryNote: "Grade A Laminar Airflow Suite · Pyrogen-Free",
    icon: (
      <svg viewBox="0 0 100 100" className="w-9 h-9 sm:w-11 sm:h-11" fill="white">
        <rect x="42" y="14" width="16" height="10" rx="2" />
        <path d="M38 24 L62 24 L68 84 L32 84 Z" rx="4" />
        <circle cx="50" cy="56" r="8" fill="#0D9488" />
      </svg>
    ),
  },
];

export function FormulationsHub() {
  const [activeFormatId, setActiveFormatId] = useState<string | null>("tablet");
  const activeItem = activeFormatId
    ? DOSAGE_ITEMS.find((d) => d.id === activeFormatId) || null
    : null;

  return (
    <section
      id="products"
      className="relative scroll-mt-24 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-[1380px] mx-auto z-20 select-none font-[family-name:var(--font-montserrat)]"
    >
      {/* ════════════════════════════════════════════════════════════════
          COMPACT OPAQUE SHIELD: BALANCED PROPORTIONS
         ════════════════════════════════════════════════════════════════ */}
      <div className="relative bg-[#FAFCFF] rounded-[28px] sm:rounded-[36px] border border-slate-200/90 shadow-[0_12px_45px_rgba(8,43,97,0.05)] p-5 sm:p-7 lg:p-8 overflow-hidden transition-all duration-300">
        
        {/* Soft Ambient Glow matching active dosage color */}
        <div
          className={`pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[550px] h-[250px] rounded-full blur-[100px] transition-all duration-700 ${
            activeItem ? "opacity-20" : "opacity-0"
          }`}
          style={{ backgroundColor: activeItem ? activeItem.color : "#006EDC" }}
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
            High-throughput pharmaceutical manufacturing across 6 certified dosage forms — combining cleanroom capacities, high-barrier packaging, and WHO-GMP validated compliance.
          </p>

          {/* 4 Compact Executive Metric Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-xl mx-auto">
            <div className="bg-white border border-slate-200/80 rounded-lg px-2.5 py-1.5 text-center shadow-2xs">
              <span className="block text-xs font-bold text-[#082B61] font-[family-name:var(--font-outfit)]">
                800+
              </span>
              <span className="text-[9.5px] text-slate-500 font-medium uppercase tracking-wider">
                Molecules
              </span>
            </div>
            <div className="bg-white border border-slate-200/80 rounded-lg px-2.5 py-1.5 text-center shadow-2xs">
              <span className="block text-xs font-bold text-[#082B61] font-[family-name:var(--font-outfit)]">
                765M+
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
            2. VIBRANT ICONIC DOSAGE TILES (COMPACT & BALANCED)
           ════════════════════════════════════════════════════════════════ */}
        <div className={`relative z-10 transition-all duration-300 ${activeItem ? "mb-6 sm:mb-7" : "mb-0"}`}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
            {DOSAGE_ITEMS.map((item) => {
              const isSelected = item.id === activeFormatId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveFormatId((prev) => (prev === item.id ? null : item.id))}
                  aria-expanded={isSelected}
                  aria-controls="dosage-studio"
                  className={`group relative rounded-xl sm:rounded-2xl h-[100px] sm:h-[112px] flex flex-col items-center justify-between p-2.5 sm:p-3 text-white text-center transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "scale-105 z-30 shadow-[0_12px_28px_rgba(8,43,97,0.20)] ring-3 ring-white"
                      : "hover:scale-[1.02] shadow-2xs hover:shadow-md opacity-92 hover:opacity-100"
                  }`}
                  style={{
                    backgroundColor: item.color,
                  }}
                >
                  {/* Downward Pointer Indicator Caret */}
                  {isSelected && (
                    <div
                      className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-0 h-0 border-x-[8px] border-x-transparent border-t-[10px] z-40 transition-all duration-200"
                      style={{ borderTopColor: item.color }}
                      aria-hidden
                    />
                  )}

                  {/* Top: Capacity Pill */}
                  <div className="w-full flex justify-end">
                    <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-xs font-[family-name:var(--font-outfit)]">
                      {item.annualCapacity.split(" ")[0]}
                    </span>
                  </div>

                  {/* Center: Silhouette Icon */}
                  <div className="flex-1 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 text-white">
                    {item.icon}
                  </div>

                  {/* Bottom: Title & Category */}
                  <div className="w-full">
                    <span className="block text-xs sm:text-[13.5px] font-extrabold text-white tracking-tight leading-tight font-[family-name:var(--font-outfit)] truncate">
                      {item.name}
                    </span>
                    <span className="block text-[9px] sm:text-[10px] text-white/80 font-medium truncate font-[family-name:var(--font-montserrat)]">
                      {item.category}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            3. COMPACT MASTER SHOWCASE STUDIO (SLEEK PROPORTIONS)
           ════════════════════════════════════════════════════════════════ */}
        <AnimatePresence mode="wait">
          {activeItem && (
            <motion.div
              id="dosage-studio"
              key={activeItem.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative bg-white rounded-2xl sm:rounded-[24px] border border-slate-200/90 shadow-[0_12px_36px_rgba(8,43,97,0.06)] p-4 sm:p-5 lg:p-6 mb-0 overflow-hidden"
            >
            {/* Top Accent Strip */}
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ backgroundColor: activeItem.color }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
              {/* ──────────────────────────────────────────────────────────
                  LEFT COLUMN (4 Cols): COMPACT PRODUCT STAGE & SUMMARY
                 ────────────────────────────────────────────────────────── */}
              {/* ──────────────────────────────────────────────────────────
                  LEFT COLUMN (4 Cols): LIQUID GLASS PRODUCT SHOWCASE CARD
                 ────────────────────────────────────────────────────────── */}
              <div className="lg:col-span-4 group relative rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#F3F4F6] border border-[#CBD5E1] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,20,60,0.10)] transition-all duration-500 flex flex-col justify-between p-3.5 sm:p-4 min-h-[380px]">
                
                {/* ── High-Resolution Product Image (Top Canvas) ── */}
                <div className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-b from-[#ECEEF1] via-[#F3F4F6] to-[#E2E8F0] pointer-events-none">
                  <Image
                    src={activeItem.productImage}
                    alt={activeItem.productTitle}
                    fill
                    unoptimized={true}
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-contain object-top pt-5 px-3 group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                </div>

                {/* Top Corner Badges Row */}
                <div className="relative z-10 flex items-center justify-between w-full">
                  <div
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9.5px] font-bold uppercase tracking-wider border shadow-2xs backdrop-blur-md font-[family-name:var(--font-outfit)]"
                    style={{
                      color: activeItem.productBadgeColor,
                      backgroundColor: activeItem.productBadgeBg,
                      borderColor: activeItem.productBadgeBorder,
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: activeItem.productBadgeColor }}
                    />
                    <span>{activeItem.productBadge}</span>
                  </div>

                  <div className="px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md border border-white text-[9.5px] font-bold uppercase tracking-wider text-slate-700 shadow-2xs font-[family-name:var(--font-outfit)]">
                    Export Ready
                  </div>
                </div>

                {/* Spacer so floating overlay card sits at bottom */}
                <div className="relative z-10 w-full h-8" />

                {/* ── Liquid Glassmorphic Floating Overlay Card ── */}
                <div
                  className="relative z-20 w-full rounded-[20px] sm:rounded-[22px] p-3.5 sm:p-4 overflow-hidden transition-all duration-300 group-hover:shadow-[0_16px_38px_rgba(0,30,80,0.15)] group-hover:border-white"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.78) 0%, rgba(255, 255, 255, 0.45) 100%)",
                    backdropFilter: "blur(24px) saturate(190%)",
                    WebkitBackdropFilter: "blur(24px) saturate(190%)",
                    border: "1.5px solid rgba(255, 255, 255, 0.85)",
                    boxShadow:
                      "0 14px 34px -4px rgba(0, 24, 72, 0.10), inset 0 2px 3px rgba(255, 255, 255, 0.95), inset 0 -1.5px 2px rgba(0, 30, 80, 0.04)",
                  }}
                >
                  {/* Specular Diagonal Reflection Streak */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-40 group-hover:opacity-70 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(120deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 50%)",
                    }}
                    aria-hidden
                  />

                  {/* Product Title */}
                  <h3 className="text-base sm:text-[17px] font-bold text-[#0B1E48] tracking-tight leading-snug mb-1 group-hover:text-[#006EDC] transition-colors font-[family-name:var(--font-outfit)]">
                    {activeItem.productTitle}
                  </h3>

                  {/* Description */}
                  <p className="text-[11px] sm:text-[11.5px] text-[#334155] leading-relaxed mb-2.5 line-clamp-2 font-medium">
                    {activeItem.productDescription}
                  </p>

                  {/* Bottom Metadata & Link */}
                  <div className="pt-2 border-t border-slate-900/[0.08] flex items-center justify-between gap-2 text-xs">
                    <span className="text-[10px] sm:text-[10.5px] font-semibold text-slate-600 truncate font-[family-name:var(--font-montserrat)]">
                      {activeItem.productSubtitle}
                    </span>
                    <Link
                      href={`/contact?subject=${encodeURIComponent(
                        `${activeItem.name} Commercial Inquiry`
                      )}`}
                      className="inline-flex items-center gap-0.5 font-bold text-[#006EDC] hover:text-[#082B61] transition-colors shrink-0 cursor-pointer text-[11px] uppercase tracking-wider font-[family-name:var(--font-outfit)]"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>

              </div>

              {/* ──────────────────────────────────────────────────────────
                  RIGHT COLUMN (8 Cols): FORMULARY & TECHNICAL MATRIX
                 ────────────────────────────────────────────────────────── */}
              <div className="lg:col-span-8 flex flex-col justify-between">
                <div>
                  {/* Top Metadata Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider font-[family-name:var(--font-outfit)]"
                      style={{
                        backgroundColor: `${activeItem.color}15`,
                        color: activeItem.color,
                      }}
                    >
                      <Layers className="w-3 h-3" />
                      <span>{activeItem.category}</span>
                    </span>

                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>Annual Suite Capacity: {activeItem.annualCapacity}</span>
                    </span>
                  </div>

                  {/* Clean Formatted Header */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#082B61] tracking-tight leading-snug mb-1 font-[family-name:var(--font-outfit)]">
                    {activeItem.name} — Manufacturing &amp; Packaging Matrix
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-3.5 font-normal">
                    {activeItem.tagline}. Validated for health authorities worldwide with complete CTD / ACTD registration dossiers.
                  </p>

                  {/* ────────────────────────────────────────────────────
                      COMMERCIAL MOLECULES AVAILABLE IN THIS DOSAGE FORMAT
                     ──────────────────────────────────────────────────── */}
                  <div className="mb-3.5 p-3 rounded-xl bg-gradient-to-r from-slate-50 to-blue-50/40 border border-slate-200/80">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-800 mb-2 font-[family-name:var(--font-outfit)]">
                      <Pill className="w-3.5 h-3.5 text-[#006EDC]" />
                      <span>Commercial Formulations in this Format</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {activeItem.commercialMolecules.map((molecule, mIdx) => (
                        <span
                          key={mIdx}
                          className="text-[10.5px] font-semibold text-slate-700 bg-white border border-slate-200/90 rounded-md px-2 py-0.5 shadow-2xs"
                        >
                          {molecule}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ────────────────────────────────────────────────────
                      2 COMPACT TECHNICAL MATRICES
                     ──────────────────────────────────────────────────── */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3.5">
                    {/* Card 1: Packaging Formats */}
                    <div className="bg-slate-50/80 rounded-xl p-3 border border-slate-200/80">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-800 mb-2 font-[family-name:var(--font-outfit)]">
                        <Box className="w-3.5 h-3.5 text-[#006EDC]" />
                        <span>Certified Packaging Formats</span>
                      </div>

                      <ul className="space-y-1.5 text-[11px] text-slate-600">
                        {activeItem.packagingFormats.map((fmt, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3 h-3 text-[#006EDC] shrink-0 mt-0.5" />
                            <span className="leading-tight">{fmt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Card 2: Technical Specifications */}
                    <div className="bg-slate-50/80 rounded-xl p-3 border border-slate-200/80">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-800 mb-2 font-[family-name:var(--font-outfit)]">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Cleanroom &amp; Barrier Specs</span>
                      </div>

                      <div className="space-y-1.5 text-[11px]">
                        {activeItem.keySpecs.map((spec, sIdx) => (
                          <div key={sIdx} className="border-b border-slate-200/50 pb-1 last:border-0 last:pb-0 flex items-center justify-between">
                            <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">
                              {spec.label}
                            </span>
                            <span className="font-bold text-slate-800 text-[10.5px]">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Regulatory Quality Footer & CTAs */}
                <div className="pt-3 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-2.5">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-600">
                    <Award className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="font-semibold text-slate-700">{activeItem.regulatoryNote}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href={`/categories?dosage=${activeItem.id}`}
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-full text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-[#006EDC] text-[11px] font-bold uppercase tracking-wider transition-all font-[family-name:var(--font-outfit)] cursor-pointer"
                    >
                      <Layers className="w-3.5 h-3.5 text-[#006EDC]" />
                      <span>View Categories</span>
                    </Link>

                    <Link
                      href={`/contact?subject=${encodeURIComponent(
                        `${activeItem.name} Commercial Batch Quotation`
                      )}`}
                      className="inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-full text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:opacity-95 hover:shadow-md cursor-pointer font-[family-name:var(--font-outfit)]"
                      style={{ backgroundColor: itemColor(activeItem.color) }}
                    >
                      <span>Inquire for {activeItem.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
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

function itemColor(color: string) {
  return color;
}

export default FormulationsHub;
