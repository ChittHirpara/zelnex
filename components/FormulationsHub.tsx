"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

interface ProductCard {
  id: string;
  title: string;
  subtitle: string;
  dosage: string;
  badge: string;
  image: string;
  description: string;
  highlightSpec: string;
  inquiryParam: string;
}

interface DosageFormat {
  id: string;
  name: string;
  category: string;
  tagline: string;
  color: string;
  annualCapacity: string;
  icon: React.ReactNode;
  products: ProductCard[];
}

const DOSAGE_ITEMS: DosageFormat[] = [
  {
    id: "tablet",
    name: "Tablet",
    category: "Solid Oral Compression",
    tagline: "High-Speed Rotary Compression & Barrier Alu-Alu Blistering",
    color: "#E67E22",
    annualCapacity: "400M+ Units / Year",
    icon: (
      <svg viewBox="0 0 100 100" className="w-9 h-9 sm:w-11 sm:h-11" fill="white">
        <ellipse cx="38" cy="46" rx="22" ry="22" />
        <ellipse cx="58" cy="62" rx="24" ry="15" />
        <path d="M42 62 Q58 52 74 62" stroke="#E67E22" strokeWidth="4" fill="none" />
      </svg>
    ),
    products: [
      {
        id: "tab-1",
        title: "ZELNEX Tab-Complex",
        subtitle: "Paracetamol + Ciprofloxacin",
        dosage: "500mg / 650mg Film-Coated",
        badge: "Oral Solid Dosage",
        image: "/products/tablets-blister.jpg",
        description:
          "High-speed rotary tableting cleanroom lines with precision aqueous film coating and tropical Alu-Alu cold form blister sealing.",
        highlightSpec: "Alu-Alu Cold Form Barrier",
        inquiryParam: "ZELNEX Tab-Complex Tablet",
      },
      {
        id: "tab-2",
        title: "ZELNEX Metfor-SR",
        subtitle: "Metformin Hydrochloride",
        dosage: "500mg / 1000mg Sustained Release",
        badge: "Sustained Release",
        image: "/products/zelnex-tablets-bottle.jpg",
        description:
          "Hydrophilic matrix tablets engineered for controlled 24-hour dissolution rate, minimizing gastrointestinal irritation for export markets.",
        highlightSpec: "24-Hour Steady Matrix Core",
        inquiryParam: "ZELNEX Metfor-SR Tablet",
      },
      {
        id: "tab-3",
        title: "ZELNEX Azithro-500",
        subtitle: "Azithromycin Dihydrate BP",
        dosage: "500mg Film-Coated",
        badge: "Macrolide Antibiotic",
        image: "/products/tablets-capsules.jpg",
        description:
          "Broad-spectrum antibacterial formulation produced under WHO-GMP cleanroom standards with high bioavailability and 3-tablet regimen packaging.",
        highlightSpec: "USP / BP Validated Core",
        inquiryParam: "ZELNEX Azithromycin Tablet",
      },
      {
        id: "tab-4",
        title: "ZELNEX Vit-C Fizz",
        subtitle: "Ascorbic Acid + Zinc",
        dosage: "1000mg + 10mg Effervescent",
        badge: "Rapid Effervescent",
        image: "/products/effervescent-tablets.jpg",
        description:
          "Direct-compression effervescent tablets with instant carbonation, refreshing citrus palatability, and moisture-tight aluminum tube sealing.",
        highlightSpec: "Desiccant Capped Tubes",
        inquiryParam: "ZELNEX Effervescent Tablet",
      },
    ],
  },
  {
    id: "capsule",
    name: "Capsule",
    category: "Precision Encapsulation",
    tagline: "High-Speed Checkweighed Encapsulation & Multi-Pellet Dosing",
    color: "#0072C6",
    annualCapacity: "150M+ Units / Year",
    icon: (
      <svg viewBox="0 0 100 100" className="w-9 h-9 sm:w-11 sm:h-11" fill="white">
        <g transform="rotate(-40 50 50)">
          <rect x="36" y="22" width="28" height="28" rx="14" />
          <rect x="36" y="50" width="28" height="28" rx="14" fill="none" stroke="white" strokeWidth="4" />
          <line x1="36" y1="50" x2="64" y2="50" stroke="white" strokeWidth="4" />
        </g>
      </svg>
    ),
    products: [
      {
        id: "cap-1",
        title: "ZELNEX Dura-Caps",
        subtitle: "Amoxicillin Trihydrate BP",
        dosage: "250mg / 500mg Size 0",
        badge: "Precision Encapsulation",
        image: "/products/hard-capsules.jpg",
        description:
          "Precision automated encapsulation with 100% checkweighed consistency, protecting active hygroscopic powders within BSE/TSE-free gelatin shells.",
        highlightSpec: "Checkweighed ±2% Accuracy",
        inquiryParam: "ZELNEX Dura-Caps Capsule",
      },
      {
        id: "cap-2",
        title: "ZELNEX Omepra-DR",
        subtitle: "Omeprazole Dual-Release",
        dosage: "20mg / 40mg Pellets",
        badge: "Delayed-Release Pellets",
        image: "/products/capsule-omeprazole.jpg",
        description:
          "Multi-pellet micro-dosed capsules filled with enteric-coated spheroids, ensuring complete gastric bypass and target duodenal absorption.",
        highlightSpec: "Enteric Coated Spheroids",
        inquiryParam: "ZELNEX Omeprazole Capsule",
      },
      {
        id: "cap-3",
        title: "ZELNEX Doxy-100",
        subtitle: "Doxycycline Hyclate",
        dosage: "100mg Vegetarian HPMC",
        badge: "Antimicrobial Therapy",
        image: "/products/zelnex-hero-product.jpg",
        description:
          "Plant-derived vegetarian HPMC capsules formulated to safeguard light- and moisture-sensitive tetracyclines in high-humidity zones.",
        highlightSpec: "HPMC Vegetarian Shell",
        inquiryParam: "ZELNEX Doxycycline Capsule",
      },
      {
        id: "cap-4",
        title: "ZELNEX Vita-Gel",
        subtitle: "Omega-3 + Vitamin E 1000mg",
        dosage: "1000mg Concentrated Lipid",
        badge: "Rotary Die Softgel",
        image: "/products/softgel-capsules.jpg",
        description:
          "Nitrogen-purged rotary die soft gelatin encapsulation with seamless hermetic sealing, preventing oxidation of active marine triglycerides.",
        highlightSpec: "Hermetic Nitrogen Purge",
        inquiryParam: "ZELNEX Softgel Capsule",
      },
    ],
  },
  {
    id: "suspension",
    name: "Suspension / syrup",
    category: "Pediatric & Oral Liquids",
    tagline: "High-Speed Liquid Filling Lines & Tamper-Evident Metered Delivery",
    color: "#8E44AD",
    annualCapacity: "30M+ Bottles / Year",
    icon: (
      <svg viewBox="0 0 100 100" className="w-9 h-9 sm:w-11 sm:h-11" fill="white">
        <rect x="42" y="16" width="16" height="10" rx="2" />
        <rect x="46" y="26" width="8" height="8" />
        <path d="M34 34 L66 34 a8 8 0 0 1 8 8 L74 76 a8 8 0 0 1 -8 8 L34 84 a8 8 0 0 1 -8 -8 L26 42 a8 8 0 0 1 8 -8 Z" />
        <rect x="38" y="48" width="24" height="22" rx="3" fill="#8E44AD" />
      </svg>
    ),
    products: [
      {
        id: "susp-1",
        title: "ZELNEX Sedamin 150ml",
        subtitle: "Paracetamol Pediatric Elixir",
        dosage: "120mg / 250mg per 5ml",
        badge: "Pediatric Antipyretic",
        image: "/products/syrup-suspension.jpg",
        description:
          "Automated liquid formulation suites producing pleasant strawberry-flavored oral suspensions with uniform active dispersal and 15ml dosing cup.",
        highlightSpec: "Calibrated 15ml Dosing Cup",
        inquiryParam: "ZELNEX Sedamin Oral Suspension",
      },
      {
        id: "susp-2",
        title: "ZELNEX Broncho-Clear",
        subtitle: "Ambroxol + Guaifenesin Syrup",
        dosage: "30mg + 50mg per 5ml (100ml)",
        badge: "Respiratory Mucolytic",
        image: "/products/suspension-cough-syrup.jpg",
        description:
          "Viscosity-stabilized cough syrup combining mucolytic and expectorant actives, packaged in amber PET bottles with child-resistant CRC cap.",
        highlightSpec: "Amber PET / Child-Resistant",
        inquiryParam: "ZELNEX Broncho-Clear Syrup",
      },
      {
        id: "susp-3",
        title: "ZELNEX Ceti-Drops",
        subtitle: "Cetirizine Hydrochloride Drops",
        dosage: "10mg/ml Oral Pipette (30ml)",
        badge: "Pediatric Antihistamine",
        image: "/products/suspension-pediatric-drops.jpg",
        description:
          "Sugar-free pediatric anti-allergy drops with calibrated dropper pipette, offering fast 24-hour symptom relief for infants and children.",
        highlightSpec: "Calibrated Pipette Dropper",
        inquiryParam: "ZELNEX Cetirizine Drops",
      },
      {
        id: "susp-4",
        title: "ZELNEX Multi-Zinc",
        subtitle: "Multivitamin + Elemental Zinc",
        dosage: "Zinc Sulfate + B-Complex (150ml)",
        badge: "Pediatric Wellness",
        image: "/products/suspension-multivitamin.jpg",
        description:
          "Nutrient-rich pediatric syrup fortified with chelated zinc and essential vitamins, taste-masked to ensure high young-patient compliance.",
        highlightSpec: "Taste-Masked High Stability",
        inquiryParam: "ZELNEX Multi-Zinc Liquid",
      },
    ],
  },
  {
    id: "sachet",
    name: "Powder & Sachet",
    category: "Multi-Layer Barrier Pouches",
    tagline: "4-Ply Barrier Pouches & Vertical Form-Fill-Seal Micro-Dosing",
    color: "#2C3E50",
    annualCapacity: "75M+ Sachets / Year",
    icon: (
      <svg viewBox="0 0 100 100" className="w-9 h-9 sm:w-11 sm:h-11" fill="white">
        <rect x="25" y="25" width="50" height="50" rx="6" />
        <line x1="25" y1="38" x2="75" y2="38" stroke="#2C3E50" strokeWidth="3" strokeDasharray="4 4" />
        <line x1="25" y1="62" x2="75" y2="62" stroke="#2C3E50" strokeWidth="3" strokeDasharray="4 4" />
        <line x1="50" y1="40" x2="50" y2="60" stroke="#2C3E50" strokeWidth="3" />
      </svg>
    ),
    products: [
      {
        id: "sach-1",
        title: "ZELNEX ORS-Pro Sachets",
        subtitle: "WHO Oral Rehydration Salts",
        dosage: "20.5g Single-Dose Sachet",
        badge: "WHO Validated Formula",
        image: "/products/powder-sachets.jpg",
        description:
          "Vertical form-fill-seal (VFFS) packing lines for hygroscopic powders and WHO-standard electrolyte salts in 4-ply barrier foil.",
        highlightSpec: "4-Ply PET/Alu/PE Barrier",
        inquiryParam: "ZELNEX ORS Sachet",
      },
      {
        id: "sach-2",
        title: "ZELNEX Probio-Max",
        subtitle: "Pre & Probiotic Granules",
        dosage: "5 Billion CFU + FOS (1g)",
        badge: "Lyophilized Granules",
        image: "/products/sachet-probiotic.jpg",
        description:
          "Micro-encapsulated stable probiotic strains in foil stick-packs designed for instant water dispersion, supporting gut microbiome health.",
        highlightSpec: "Tropical CFU Stability",
        inquiryParam: "ZELNEX Probiotic Sachet",
      },
      {
        id: "sach-3",
        title: "ZELNEX Cholecal-60K",
        subtitle: "Vitamin D3 Fast-Melt Granules",
        dosage: "60,000 IU Oral Powder (1g)",
        badge: "High-Potency Vitamin D",
        image: "/products/sachet-vitamin-d.jpg",
        description:
          "Quick-dissolving pleasant orange-flavored oral granules for weekly therapeutic administration, moisture-sealed in laser-notched barrier sachets.",
        highlightSpec: "Laser-Notched Easy Tear",
        inquiryParam: "ZELNEX Cholecalciferol Sachet",
      },
      {
        id: "sach-4",
        title: "ZELNEX Argi-Safe",
        subtitle: "L-Arginine + Proanthocyanidin",
        dosage: "5g Soluble Effervescent Sachet",
        badge: "Maternal & Vascular Care",
        image: "/products/sachet-arginine.jpg",
        description:
          "Effervescent amino-acid formulation in sealed 5g barrier pouches enhancing vascular perfusion, manufactured under dehumidified nitrogen cleanrooms.",
        highlightSpec: "Dehumidified Cleanroom Suite",
        inquiryParam: "ZELNEX L-Arginine Sachet",
      },
    ],
  },
  {
    id: "topical",
    name: "Topical / Tube",
    category: "Ointments, Creams & Gels",
    tagline: "Sterile Lami & Alu Collapsible Tubes with Precision Dispensers",
    color: "#0D9488",
    annualCapacity: "45M+ Tubes / Year",
    icon: (
      <svg viewBox="0 0 100 100" className="w-9 h-9 sm:w-11 sm:h-11" fill="white">
        <g transform="rotate(-35 50 50)">
          <rect x="40" y="16" width="20" height="5" rx="1" />
          <path d="M41 21 L59 21 L56 66 L44 66 Z" />
          <rect x="46" y="66" width="8" height="14" rx="2" />
          <circle cx="50" cy="42" r="4" fill="#0D9488" />
        </g>
      </svg>
    ),
    products: [
      {
        id: "top-1",
        title: "ZELNEX Derma-Gel 30g",
        subtitle: "Diclofenac Diethylamine Gel",
        dosage: "1.16% w/w 30g Tube",
        badge: "Transdermal Analgesic",
        image: "/products/topical-tube.jpg",
        description:
          "High-absorption micro-emulsion gel for rapid transdermal penetration, relieving musculoskeletal stiffness and acute joint inflammation.",
        highlightSpec: "Aluminium Collapsible Tube",
        inquiryParam: "ZELNEX Diclofenac Gel",
      },
      {
        id: "top-2",
        title: "ZELNEX Tri-Derma Cream",
        subtitle: "Betamethasone + Clotrimazole",
        dosage: "15g / 30g Lami Tube",
        badge: "Triple-Action Dermatological",
        image: "/products/topical-triple-cream.jpg",
        description:
          "Broad-spectrum topical formulation combining potent corticosteroid, antifungal, and antibacterial agents in an elegant vanishing cream base.",
        highlightSpec: "Vanishing Cream Emulsion",
        inquiryParam: "ZELNEX Tri-Derma Cream",
      },
      {
        id: "top-3",
        title: "ZELNEX Clinda-Clear",
        subtitle: "Clindamycin + Nicotinamide",
        dosage: "1% + 4% 20g Gel",
        badge: "Dermatological Acne Gel",
        image: "/products/topical-acne-gel.jpg",
        description:
          "Oil-free clear aqueous gel with precision nozzle tip engineered to suppress acne vulgaris flare-ups while preserving skin barrier hydration.",
        highlightSpec: "Oil-Free Clear Hydrogel",
        inquiryParam: "ZELNEX Clindamycin Gel",
      },
      {
        id: "top-4",
        title: "ZELNEX Silver-Burn",
        subtitle: "Silver Sulfadiazine 1% Cream",
        dosage: "1% w/w 30g / 50g Barrier Tube",
        badge: "Antiseptic Wound Care",
        image: "/products/topical-burn-cream.jpg",
        description:
          "Sterile water-miscible topical cream in hermetic collapsible tube for antimicrobial wound protection and deep epithelial healing in dermal burns.",
        highlightSpec: "Hermetic Crimp Foil Seal",
        inquiryParam: "ZELNEX Silver Sulfadiazine Cream",
      },
    ],
  },
  {
    id: "dry-powder",
    name: "Dry Powder",
    category: "Reconstitutable Oral Syrups & Vials",
    tagline: "Moisture-Proof Granules for Reconstitution & Sterile Lyophilized Vials",
    color: "#C0392B",
    annualCapacity: "60M+ Bottles / Year",
    icon: (
      <svg viewBox="0 0 100 100" className="w-9 h-9 sm:w-11 sm:h-11" fill="white">
        <path d="M42 16 h16 v12 h-16 z" fill="none" stroke="white" strokeWidth="3" />
        <line x1="42" y1="22" x2="50" y2="22" stroke="white" strokeWidth="2" />
        <rect x="44" y="28" width="12" height="6" />
        <rect x="32" y="34" width="36" height="50" rx="6" />
        <rect x="36" y="54" width="28" height="26" rx="3" fill="#C0392B" />
        <circle cx="44" cy="46" r="2" fill="white" />
        <circle cx="56" cy="44" r="1.5" fill="white" />
        <circle cx="50" cy="48" r="2" fill="white" />
      </svg>
    ),
    products: [
      {
        id: "dry-1",
        title: "ZELNEX Dry-Susp 100ml",
        subtitle: "Amoxicillin for Oral Suspension",
        dosage: "125mg / 250mg per 5ml (100ml)",
        badge: "Beta-Lactam Antibiotic",
        image: "/products/dry-powder-suspension.jpg",
        description:
          "Micro-granulated antibiotic dry syrup packed in amber glass bottles with induction foil seal, dispersing instantly into a smooth suspension.",
        highlightSpec: "Induction Heat Foil Sealed",
        inquiryParam: "ZELNEX Amoxicillin Dry Suspension",
      },
      {
        id: "dry-2",
        title: "ZELNEX Azithro-Dry",
        subtitle: "Azithromycin Dry Powder + Diluent",
        dosage: "200mg per 5ml (15ml / 30ml)",
        badge: "Pediatric Macrolide",
        image: "/products/dry-powder-antibiotic.jpg",
        description:
          "High-stability fruit-flavored dry syrup granules packaged with sterile diluent water ampoule, engineered for 3-day pediatric therapy.",
        highlightSpec: "Includes Reconstitution Diluent",
        inquiryParam: "ZELNEX Azithromycin Dry Syrup",
      },
      {
        id: "dry-3",
        title: "ZELNEX Cefix-Dry Vials",
        subtitle: "Sterile Ceftriaxone Lyophilized",
        dosage: "500mg / 1g Lyophilized Vial",
        badge: "Sterile Lyophilized Powder",
        image: "/products/sterile-vial.jpg",
        description:
          "Sterile lyophilized dry powder glass vial with flip-off crimp seal, formulated under Class 100 aseptic cleanroom conditions for rapid reconstitution.",
        highlightSpec: "Class 100 Aseptic Lyophilized",
        inquiryParam: "ZELNEX Sterile Lyophilized Vial",
      },
      {
        id: "dry-4",
        title: "ZELNEX Reconstitute-Kit",
        subtitle: "Sterile Powder + Diluent Syringe",
        dosage: "Dual-Chamber Reconstitution System",
        badge: "Ready Reconstitution Kit",
        image: "/packaging/dry-injection.png",
        description:
          "Complete closed-system reconstitution pack featuring sterile dry powder vial and pre-calibrated solvent syringe for clinical administration.",
        highlightSpec: "Closed-System Syringe Kit",
        inquiryParam: "ZELNEX Reconstitution Injection Kit",
      },
    ],
  },
];

export function FormulationsHub() {
  const [activeFormatId, setActiveFormatId] = useState<string | null>("tablet");
  const activeFormat = activeFormatId
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
            activeFormat ? "opacity-20" : "opacity-0"
          }`}
          style={{ backgroundColor: activeFormat ? activeFormat.color : "#006EDC" }}
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
            2. VIBRANT ICONIC DOSAGE TILES (6 FORMAT BUTTONS)
           ════════════════════════════════════════════════════════════════ */}
        <div className={`relative z-10 transition-all duration-300 ${activeFormat ? "mb-6 sm:mb-7" : "mb-3"}`}>
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-2.5 sm:gap-3">
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
                      : "hover:scale-[1.02] shadow-2xs hover:shadow-md opacity-90 hover:opacity-100"
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
                    <span className="block text-xs sm:text-[13px] font-extrabold text-white tracking-tight leading-tight font-[family-name:var(--font-outfit)] truncate">
                      {item.name}
                    </span>
                    <span className="block text-[8.5px] sm:text-[9.5px] text-white/80 font-medium truncate font-[family-name:var(--font-montserrat)]">
                      {item.category}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            3. PRODUCT SHOWCASE STUDIO (OPENS ON CLICK, CLOSES ON REPEAT CLICK)
           ════════════════════════════════════════════════════════════════ */}
        <AnimatePresence mode="wait">
          {activeFormat ? (
            <motion.div
              key={activeFormat.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div
                id="dosage-studio"
                className="relative bg-white rounded-2xl sm:rounded-[28px] border border-slate-200/90 shadow-[0_12px_36px_rgba(8,43,97,0.06)] p-4 sm:p-5 lg:p-6 mb-0 overflow-hidden transition-all duration-300"
              >
                {/* Top Accent Strip (Reflects active format color) */}
                <div
                  className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-500"
                  style={{ backgroundColor: activeFormat.color }}
                />

                {/* Header bar inside studio */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-2.5 h-2.5 rounded-full animate-pulse"
                      style={{ backgroundColor: activeFormat.color }}
                    />
                    <span className="text-xs sm:text-sm font-extrabold text-[#082B61] tracking-tight font-[family-name:var(--font-outfit)]">
                      {activeFormat.name} Formulations Showcase
                    </span>
                    <span className="hidden md:inline text-[11px] text-slate-500 font-medium font-[family-name:var(--font-montserrat)]">
                      — {activeFormat.tagline}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs self-start sm:self-auto">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold uppercase tracking-wider font-[family-name:var(--font-outfit)]">
                      {activeFormat.annualCapacity}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider font-[family-name:var(--font-outfit)] text-emerald-700 bg-emerald-50 border border-emerald-200/60">
                      4 Formulations Displayed
                    </span>
                  </div>
                </div>

                {/* 4 Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                  {activeFormat.products.map((product) => (
                    <div
                      key={product.id}
                      className="group relative rounded-[22px] sm:rounded-[24px] overflow-hidden border border-[#E2E8F0] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_40px_rgba(0,25,70,0.12)] hover:border-slate-300 hover:scale-[1.015] transition-all duration-300 flex flex-col justify-between p-3.5 min-h-[420px] sm:min-h-[440px] bg-[#F8FAFC]"
                    >
                      {/* High-Resolution Product Image (Top Canvas) */}
                      <div
                        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
                        style={{
                          background: `linear-gradient(180deg, ${activeFormat.color}0D 0%, #F8FAFC 45%, #F1F5F9 100%)`,
                        }}
                      >
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          unoptimized={true}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-contain object-top pt-4 px-2 group-hover:scale-105 transition-transform duration-700 ease-out"
                          priority
                        />
                      </div>

                      {/* Top Corner Badges Row */}
                      <div className="relative z-10 flex items-center justify-between w-full gap-1.5">
                        <div
                          className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9.5px] font-bold uppercase tracking-wider border shadow-2xs backdrop-blur-md font-[family-name:var(--font-outfit)] truncate max-w-[70%]"
                          style={{
                            color: activeFormat.color,
                            backgroundColor: "rgba(255, 255, 255, 0.95)",
                            borderColor: `${activeFormat.color}40`,
                          }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ backgroundColor: activeFormat.color }}
                          />
                          <span className="truncate">{product.badge}</span>
                        </div>

                        <div className="px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-md border border-white text-[8.5px] font-bold uppercase tracking-wider text-slate-700 shadow-2xs font-[family-name:var(--font-outfit)] shrink-0">
                          Export Ready
                        </div>
                      </div>

                      {/* Spacer so floating overlay card sits cleanly at bottom */}
                      <div className="relative z-10 w-full h-16 sm:h-20" />

                      {/* Liquid Glassmorphic Floating Overlay Card */}
                      <div
                        className="relative z-20 w-full rounded-[18px] sm:rounded-[20px] p-3.5 overflow-hidden transition-all duration-300 group-hover:shadow-[0_14px_32px_rgba(0,30,80,0.14)] group-hover:border-white"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(255, 255, 255, 0.94) 0%, rgba(255, 255, 255, 0.78) 100%)",
                          backdropFilter: "blur(20px) saturate(180%)",
                          WebkitBackdropFilter: "blur(20px) saturate(180%)",
                          border: "1.5px solid rgba(255, 255, 255, 0.95)",
                          boxShadow:
                            "0 12px 30px -4px rgba(0, 24, 72, 0.08), inset 0 1.5px 2px rgba(255, 255, 255, 0.95), inset 0 -1px 1.5px rgba(0, 30, 80, 0.03)",
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
                        <h3 className="text-[15px] font-extrabold text-[#0B1E48] tracking-tight leading-snug mb-0.5 group-hover:text-[#006EDC] transition-colors font-[family-name:var(--font-outfit)] truncate">
                          {product.title}
                        </h3>

                        {/* Molecule / Subtitle */}
                        <p className="text-[11px] font-semibold text-slate-500 mb-1.5 truncate font-[family-name:var(--font-montserrat)]">
                          {product.subtitle} · <span className="text-slate-700 font-bold">{product.dosage}</span>
                        </p>

                        {/* Description */}
                        <p className="text-[11px] text-[#334155] leading-relaxed mb-2.5 line-clamp-2 font-medium">
                          {product.description}
                        </p>

                        {/* Bottom Metadata & Inquire Link */}
                        <div className="pt-2 border-t border-slate-900/[0.08] flex items-center justify-between gap-1 text-xs">
                          <span className="text-[10px] font-bold text-slate-600 truncate font-[family-name:var(--font-outfit)] max-w-[62%]">
                            {product.highlightSpec}
                          </span>
                          <Link
                            href={`/contact?subject=${encodeURIComponent(
                              `${product.inquiryParam} Commercial Inquiry`
                            )}`}
                            className="inline-flex items-center gap-1 font-extrabold hover:opacity-80 transition-opacity shrink-0 cursor-pointer text-[11px] uppercase tracking-wider font-[family-name:var(--font-outfit)]"
                            style={{ color: activeFormat.color }}
                          >
                            <span>Inquire</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="closed-hint"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="text-center py-6 px-4 rounded-2xl bg-white/70 border border-slate-200/60 shadow-2xs"
            >
              <p className="text-xs sm:text-sm font-semibold text-slate-500 font-[family-name:var(--font-outfit)]">
                Click any dosage format above to view its commercial formulations and packaging specifications.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default FormulationsHub;
