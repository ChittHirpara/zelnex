"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";


export interface PackagingItem {
  id: string;
  name: string;
  subtitle: string;
  displayLines: string[];
  image: string;
  // Visual styling
  glowColor: string;
  borderColor: string;
  bgGradient: string;
  accentColor: string;
  badge: string;
  // Specifications
  summary: string;
  material: string;
  barrierRating: string;
  commonUses: string[];
  certifications: string[];
  // SVG Vector Icon
  renderVectorIcon: () => React.ReactNode;
}

export const PACKAGING_LIST: PackagingItem[] = [
  // ── ROW 1 ──
  {
    id: "alu-alu",
    name: "Alu-Alu",
    subtitle: "Maximum protection for sensitive products",
    displayLines: ["Alu-Alu"],
    image: "/packaging/alu-alu.png",
    glowColor: "rgba(192, 132, 252, 0.35)",
    borderColor: "#D8B4FE",
    bgGradient: "radial-gradient(135% 135% at 30% 25%, #FFFFFF 15%, #F3E8FF 75%, #E9D5FF 100%)",
    accentColor: "#9333EA",
    badge: "COLD-FORM HIGH BARRIER",
    summary:
      "100% moisture, oxygen, and light barrier engineered for hygroscopic, sensitive APIs and tropical Zone IVb climatic stability.",
    material: "OPA 25µm / Aluminium 45µm / PVC 60µm Cold-Form Foil",
    barrierRating: "Zero MVTR & OTR (Absolute Zone IVb Barrier)",
    commonUses: [
      "Amoxicillin + Clavulanic Acid",
      "Effervescent Tablets",
      "Moisture-Sensitive Antibiotics",
      "Proton Pump Inhibitors",
    ],
    certifications: ["US FDA DMF Type III", "ISO 15378", "WHO-GMP Grade Cleanroom"],
    renderVectorIcon: () => (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="#1E293B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 sm:w-10 sm:h-10"
      >
        <rect x="14" y="6" width="20" height="36" rx="4" />
        <circle cx="20" cy="12" r="1.8" fill="#1E293B" />
        <circle cx="28" cy="12" r="1.8" fill="#1E293B" />
        <circle cx="20" cy="18" r="1.8" fill="#1E293B" />
        <circle cx="28" cy="18" r="1.8" fill="#1E293B" />
        <circle cx="20" cy="24" r="1.8" fill="#1E293B" />
        <circle cx="28" cy="24" r="1.8" fill="#1E293B" />
        <circle cx="20" cy="30" r="1.8" fill="#1E293B" />
        <circle cx="28" cy="30" r="1.8" fill="#1E293B" />
        <circle cx="20" cy="36" r="1.8" fill="#1E293B" />
        <circle cx="28" cy="36" r="1.8" fill="#1E293B" />
      </svg>
    ),
  },
  {
    id: "blisters",
    name: "Blisters",
    subtitle: "Versatile & reliable primary packaging",
    displayLines: ["Blisters"],
    image: "/packaging/blisters.png",
    glowColor: "rgba(192, 132, 252, 0.35)",
    borderColor: "#D8B4FE",
    bgGradient: "radial-gradient(135% 135% at 30% 25%, #FFFFFF 15%, #F3E8FF 75%, #E9D5FF 100%)",
    accentColor: "#9333EA",
    badge: "PVC / PVDC THERMOFORM",
    summary:
      "High-clarity thermoform push-through blister packaging with high seal integrity, tailored duplex/triplex coatings, and tamper evidence.",
    material: "PVC 250µm + PVDC 40g/60g/90g/120g High Barrier Film",
    barrierRating: "Custom MVTR from 0.35 to 0.15 g/m²/day",
    commonUses: [
      "Paracetamol & Analgesics",
      "Cardiovascular Formulations",
      "Daily Multi-Vitamins & Minerals",
      "Solid Oral Capsules & Tablets",
    ],
    certifications: ["EP 3.1.11 Compliant", "ISO 9001:2015", "Child-Resistant Options"],
    renderVectorIcon: () => (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="#1E293B"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-9 h-9 sm:w-11 sm:h-11"
      >
        {/* Back pack tilted */}
        <g transform="rotate(22 30 20)">
          <rect x="22" y="6" width="16" height="26" rx="2.5" stroke="#64748B" />
          <circle cx="26" cy="12" r="1.4" fill="#64748B" stroke="none" />
          <circle cx="34" cy="12" r="1.4" fill="#64748B" stroke="none" />
          <circle cx="26" cy="18" r="1.4" fill="#64748B" stroke="none" />
          <circle cx="34" cy="18" r="1.4" fill="#64748B" stroke="none" />
          <circle cx="26" cy="24" r="1.4" fill="#64748B" stroke="none" />
          <circle cx="34" cy="24" r="1.4" fill="#64748B" stroke="none" />
        </g>
        {/* Front pack */}
        <rect x="9" y="11" width="18" height="29" rx="3" fill="white" />
        <circle cx="14.5" cy="17" r="1.6" fill="#1E293B" />
        <circle cx="21.5" cy="17" r="1.6" fill="#1E293B" />
        <circle cx="14.5" cy="23" r="1.6" fill="#1E293B" />
        <circle cx="21.5" cy="23" r="1.6" fill="#1E293B" />
        <circle cx="14.5" cy="29" r="1.6" fill="#1E293B" />
        <circle cx="21.5" cy="29" r="1.6" fill="#1E293B" />
        <circle cx="14.5" cy="35" r="1.6" fill="#1E293B" />
        <circle cx="21.5" cy="35" r="1.6" fill="#1E293B" />
      </svg>
    ),
  },
  {
    id: "aluminium-strips",
    name: "Aluminium Strips",
    subtitle: "High-barrier aluminium packaging",
    displayLines: ["Aluminium", "Strips"],
    image: "/packaging/aluminium-strips.png",
    glowColor: "rgba(192, 132, 252, 0.35)",
    borderColor: "#D8B4FE",
    bgGradient: "radial-gradient(135% 135% at 30% 25%, #FFFFFF 15%, #F3E8FF 75%, #E9D5FF 100%)",
    accentColor: "#9333EA",
    badge: "HERMETIC FOIL STRIP",
    summary:
      "Dual soft-temper aluminum foil heat-sealed packaging offering excellent mechanical puncture strength and hermetic climate protection.",
    material: "Alu Foil 30µm / Polyethylene 37.5µm Dual-Layer Lamination",
    barrierRating: "Near-Zero Vapor Transmission (< 0.01 g/m²/day)",
    commonUses: [
      "Chewable Antacid Tablets",
      "Hormonal Formulations",
      "Anti-Malarial Treatments",
      "Pediatric Dispersible Tablets",
    ],
    certifications: ["21 CFR 177.1520", "WHO-GMP Verified", "Tamper-Evident Seal"],
    renderVectorIcon: () => (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="#1E293B"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 sm:w-10 sm:h-10"
      >
        <g transform="rotate(-35 24 24)">
          <rect x="11" y="8" width="26" height="32" rx="2.5" />
          <line x1="11" y1="13" x2="37" y2="13" strokeWidth="1" strokeDasharray="1.5 1" />
          <line x1="11" y1="21" x2="37" y2="21" strokeWidth="1.2" />
          <line x1="11" y1="27" x2="37" y2="27" strokeWidth="1" strokeDasharray="1.5 1" />
          <line x1="11" y1="35" x2="37" y2="35" strokeWidth="1.2" />
          <ellipse cx="18" cy="17" rx="3.5" ry="2.2" />
          <ellipse cx="30" cy="17" rx="3.5" ry="2.2" />
          <ellipse cx="18" cy="31" rx="3.5" ry="2.2" />
          <ellipse cx="30" cy="31" rx="3.5" ry="2.2" />
        </g>
      </svg>
    ),
  },
  {
    id: "hdpe-bottles",
    name: "HDPE Bottles",
    subtitle: "Durable & lightweight packaging",
    displayLines: ["HDPE", "Bottles"],
    image: "/packaging/hdpe-bottles.png",
    glowColor: "rgba(52, 211, 153, 0.35)",
    borderColor: "#A7F3D0",
    bgGradient: "radial-gradient(135% 135% at 30% 25%, #FFFFFF 15%, #ECFDF5 75%, #D1FAE5 100%)",
    accentColor: "#059669",
    badge: "TAMPER-EVIDENT SECURITAINER",
    summary:
      "High-Density Polyethylene containers with induction heat seal liners and Child-Resistant Closures (CRC) for bulk tablets and powders.",
    material: "Pharma-Grade USP Class VI HDPE with EPE/Wad Induction Liner",
    barrierRating: "Robust Impact & Moisture Protection (< 0.10 g/day/L)",
    commonUses: [
      "Bulk Hospital Dispensary Packs (100s / 500s / 1000s)",
      "Dietary Supplements & Nutraceuticals",
      "Prescription Tablets & Hard Capsules",
      "Reconstitutable Antibiotic Granules",
    ],
    certifications: ["USP <661> Plastic Packaging", "ISO 15378", "CRC 16 CFR 1700"],
    renderVectorIcon: () => (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="#1E293B"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 sm:w-10 sm:h-10"
      >
        <rect x="17" y="6" width="14" height="6" rx="1.5" />
        <line x1="20" y1="6" x2="20" y2="12" strokeWidth="1" />
        <line x1="24" y1="6" x2="24" y2="12" strokeWidth="1" />
        <line x1="28" y1="6" x2="28" y2="12" strokeWidth="1" />
        <line x1="18" y1="12" x2="18" y2="15" />
        <line x1="30" y1="12" x2="30" y2="15" />
        <path d="M18 15 C14 16, 12 19, 12 23 L12 39 C12 41, 14 42, 16 42 L32 42 C34 42, 36 41, 36 39 L36 23 C36 19, 34 16, 30 15 Z" />
        <rect x="16" y="22" width="16" height="13" rx="1.5" strokeWidth="1.4" />
        <text
          x="24"
          y="31"
          textAnchor="middle"
          fontSize="6.2"
          fontWeight="bold"
          fill="#1E293B"
          stroke="none"
          fontFamily="'Inter', sans-serif"
        >
          HDPE
        </text>
      </svg>
    ),
  },
  {
    id: "glass-bottles",
    name: "Glass Bottles",
    subtitle: "Secure & inert packaging solution",
    displayLines: ["Glass", "Bottles"],
    image: "/packaging/glass-bottles.png",
    glowColor: "rgba(52, 211, 153, 0.35)",
    borderColor: "#A7F3D0",
    bgGradient: "radial-gradient(135% 135% at 30% 25%, #FFFFFF 15%, #ECFDF5 75%, #D1FAE5 100%)",
    accentColor: "#059669",
    badge: "TYPE II & III AMBER GLASS",
    summary:
      "Inert amber glass bottles providing 100% UV light blocking protection for photosensitive liquid syrups, suspensions, and chemical stability.",
    material: "USP Type III Amber Soda-Lime Glass & Type II Treated Glass",
    barrierRating: "100% Gas Impermeable & Full UV Cutoff (290nm – 450nm)",
    commonUses: [
      "Cough & Expectorant Syrups",
      "Pediatric Antibiotic Suspensions",
      "Photosensitive Active Tonics",
      "Oral Nutritional Drops",
    ],
    certifications: ["USP <660> Containers Glass", "EP 3.2.1", "Lead-Free Neutral"],
    renderVectorIcon: () => (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="#1E293B"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 sm:w-10 sm:h-10"
      >
        <rect x="19" y="6" width="10" height="5" rx="1" />
        <line x1="20" y1="11" x2="20" y2="15" />
        <line x1="28" y1="11" x2="28" y2="15" />
        <path d="M20 15 C16 16, 14 19, 14 23 L14 39 C14 41, 16 42, 18 42 L30 42 C32 42, 34 41, 34 39 L34 23 C34 19, 32 16, 28 15 Z" />
        {/* Plus badge on label */}
        <circle cx="24" cy="28" r="5" strokeWidth="1.3" />
        <line x1="24" y1="25.5" x2="24" y2="30.5" strokeWidth="1.5" />
        <line x1="21.5" y1="28" x2="26.5" y2="28" strokeWidth="1.5" />
        {/* Droplet icon on side */}
        <path
          d="M38 23 C38 23, 42 27, 42 30 C42 32.2, 40.2 34, 38 34 C35.8 34, 34 32.2, 34 30 C34 27, 38 23, 38 23 Z"
          strokeWidth="1.5"
          fill="#1E293B"
          fillOpacity="0.15"
        />
      </svg>
    ),
  },
  {
    id: "sachets",
    name: "Sachets",
    subtitle: "Convenient single-dose packs",
    displayLines: ["Sachets"],
    image: "/packaging/sachets.png",
    glowColor: "rgba(251, 113, 133, 0.35)",
    borderColor: "#FECDD3",
    bgGradient: "radial-gradient(135% 135% at 30% 25%, #FFFFFF 15%, #FFF1F2 75%, #FFE4E6 100%)",
    accentColor: "#E11D48",
    badge: "4-PLY LAMINATED POUCHES",
    summary:
      "High-barrier 4-layer foil sachets with precision laser tear notches designed for single-dose oral rehydration salts and powdered formulas.",
    material: "PET 12µm / Alu 9µm / PE 15µm / Sealant Poly 40µm",
    barrierRating: "Exceptional Humidity Barrier (< 0.05 g/m²/day MVTR)",
    commonUses: [
      "WHO Standard ORS (Oral Rehydration Salts)",
      "Probiotic & Prebiotic Sachets",
      "Collagen & Nutraceutical Powder Blends",
      "Analgesic Effervescent Granules",
    ],
    certifications: ["FDA Food & Drug Contact", "ISO 22000", "High-Speed VFFS Validated"],
    renderVectorIcon: () => (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="#1E293B"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 sm:w-10 sm:h-10"
      >
        <rect x="18" y="7" width="18" height="26" rx="2" stroke="#64748B" />
        <rect x="21" y="10" width="12" height="20" rx="1" stroke="#94A3B8" strokeWidth="1.2" strokeDasharray="2 1.5" />
        <rect x="11" y="14" width="18" height="26" rx="2" fill="white" />
        <rect x="14" y="17" width="12" height="20" rx="1" strokeWidth="1.2" />
        <line x1="11" y1="20" x2="13" y2="20" strokeWidth="2" />
      </svg>
    ),
  },

  // ── ROW 2 ──
  {
    id: "liquid-syrup",
    name: "Liquid Syrup",
    subtitle: "Accurate dosing & tamper-evident seal",
    displayLines: ["Liquid", "Syrup"],
    image: "/packaging/liquid-syrup.png",
    glowColor: "rgba(251, 113, 133, 0.35)",
    borderColor: "#FECDD3",
    bgGradient: "radial-gradient(135% 135% at 30% 25%, #FFFFFF 15%, #FFF1F2 75%, #FFE4E6 100%)",
    accentColor: "#E11D48",
    badge: "ORAL LIQUIDS & SUSPENSIONS",
    summary:
      "Shatter-proof amber PET and glass oral syrup containers supplied with calibrated 2.5ml to 10ml dosing measuring cups and dropper pipettes.",
    material: "Heavy-Wall Food/Pharma Grade PET or Type III Amber Glass",
    barrierRating: "High Chemical Compatibility & Carbonation/Vapor Barrier",
    commonUses: [
      "Pediatric Paracetamol & Ibuprofen Syrups",
      "Antihistamine & Bronchodilator Elixirs",
      "Multivitamin & Iron Liquid Tonics",
      "Antacid Oral Suspensions",
    ],
    certifications: ["BPA-Free USP VI Resin", "ISO 15378", "Tamper-Proof Ring"],
    renderVectorIcon: () => (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="#1E293B"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 sm:w-10 sm:h-10"
      >
        <rect x="17" y="7" width="10" height="5" rx="1" />
        <path d="M19 12 C16 13, 14 16, 14 20 L14 38 C14 40, 16 41, 18 41 L26 41 C28 41, 30 40, 30 38 L30 20 C30 16, 28 13, 25 12 Z" />
        <rect x="17" y="21" width="10" height="12" rx="1" strokeWidth="1.2" />
        {/* Measuring Cup */}
        <path d="M33 27 L38 27 L37.5 35 C37.5 36, 36.5 37, 35.5 37 C34.5 37, 33.5 36, 33.5 35 Z" strokeWidth="1.5" />
        <line x1="33.5" y1="30" x2="35.5" y2="30" strokeWidth="1" />
        <line x1="33.5" y1="33" x2="35.5" y2="33" strokeWidth="1" />
      </svg>
    ),
  },
  {
    id: "tubes",
    name: "Tubes",
    subtitle: "Convenient & precise application",
    displayLines: ["Tubes"],
    image: "/packaging/tubes.png",
    glowColor: "rgba(163, 230, 53, 0.35)",
    borderColor: "#D9E1C4",
    bgGradient: "radial-gradient(135% 135% at 30% 25%, #FFFFFF 15%, #F4F7EB 75%, #D4DFC2 100%)",
    accentColor: "#65A30D",
    badge: "TOPICAL OINTMENTS & CREAMS",
    summary:
      "Collapsible aluminum and multi-layer laminate (ABL/PBL) tubes featuring tamper-evident membrane seals and precision nozzle applicators.",
    material: "Pure Aluminum (99.7%) Internal Epoxy Lacquered or ABL Barrier Foil",
    barrierRating: "100% Light & Air Barrier, Zero Air Suck-Back",
    commonUses: [
      "Hydrocortisone & Dermatological Creams",
      "Diclofenac Sodium Topical Gels",
      "Antifungal & Antibacterial Ointments",
      "Ophthalmic Sterile Nozzle Ointments",
    ],
    certifications: ["ISO 15378", "Ph. Eur. 3.2.2 Plastic / Metal", "Cleanroom Crimped"],
    renderVectorIcon: () => (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="#1E293B"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 sm:w-10 sm:h-10"
      >
        <g transform="rotate(22 24 24)">
          <rect x="17" y="6" width="14" height="3.5" rx="1" />
          <path d="M18 9.5 L19 28 C19 32, 21 34, 21 34 L27 34 C27 34, 29 32, 29 28 L30 9.5 Z" />
          <rect x="22" y="34" width="4" height="4" rx="0.5" />
          <line x1="24" y1="17" x2="24" y2="23" strokeWidth="1.8" />
          <line x1="21" y1="20" x2="27" y2="20" strokeWidth="1.8" />
          <path d="M24 39 C24 39, 21 41, 23 43 C25 44, 27 42, 25 40 Z" strokeWidth="1.3" />
        </g>
      </svg>
    ),
  },
  {
    id: "pill-jar",
    name: "Pill Jar",
    subtitle: "Secure storage for solid dosage",
    displayLines: ["Pill Jar"],
    image: "/packaging/pill-jar.png",
    glowColor: "rgba(250, 204, 21, 0.35)",
    borderColor: "#FEF08A",
    bgGradient: "radial-gradient(135% 135% at 30% 25%, #FFFFFF 15%, #FEFCE8 75%, #FEF08A 100%)",
    accentColor: "#CA8A04",
    badge: "WIDE-MOUTH PET / HDPE JARS",
    summary:
      "Wide-neck transparent and opaque pharmaceutical jars with induction-sealed safety foil liners and child-resistant safety closures.",
    material: "USP Pharma PET / HDPE Resin with Lift-and-Peel Heat Induction Seal",
    barrierRating: "Moisture Protective with Embedded Silica Desiccant Canister",
    commonUses: [
      "Bulk Daily Prescription Tablets (30s / 60s / 90s)",
      "Nutraceutical Gummies & Chewables",
      "Clinical Trial Packaging Units",
      "Specialty Herbal Formulations",
    ],
    certifications: ["USP 661.1 / 661.2", "ISO 9001:2015", "Tamper Evident Induction"],
    renderVectorIcon: () => (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="#1E293B"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 sm:w-10 sm:h-10"
      >
        <rect x="14" y="8" width="20" height="6" rx="1.5" />
        <line x1="17" y1="8" x2="17" y2="14" strokeWidth="1" />
        <line x1="21" y1="8" x2="21" y2="14" strokeWidth="1" />
        <line x1="27" y1="8" x2="27" y2="14" strokeWidth="1" />
        <line x1="31" y1="8" x2="31" y2="14" strokeWidth="1" />
        <rect x="12" y="14" width="24" height="26" rx="4" />
        <rect x="16" y="20" width="16" height="15" rx="2" strokeWidth="1.2" />
        <g transform="rotate(-30 24 27)">
          <rect x="20" y="24.5" width="8" height="5" rx="2.5" strokeWidth="1.2" />
          <line x1="24" y1="24.5" x2="24" y2="29.5" strokeWidth="1" />
        </g>
      </svg>
    ),
  },
];

export function OurPackagingSection() {
  return (
    <section
      id="our-packaging"
      className="relative z-10 w-full py-16 sm:py-24 bg-[#FAFCFF] select-none font-['Inter',sans-serif] border-y border-blue-100/80 shadow-[0_10px_40px_rgba(0,110,220,0.03)] overflow-hidden"
    >
      {/* Soft Ambient Glows — Blue & White Theme */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[850px] h-[340px] rounded-full blur-[130px] opacity-20 bg-[#006EDC]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 right-10 w-[550px] h-[280px] rounded-full blur-[110px] opacity-15 bg-[#00B8F2]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/2 -left-20 w-[450px] h-[250px] rounded-full blur-[100px] opacity-10 bg-[#006EDC]"
        aria-hidden
      />

      <div className="relative z-10 max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Section Header (Exact Matching Reference) ── */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-[44px] font-black text-[#082B61] tracking-tight uppercase"
            style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
          >
            OUR PACKAGING
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-base sm:text-lg text-slate-600 font-medium mt-2 tracking-normal"
          >
            Where Innovation Meets Regulatory Compliance
          </motion.p>

          {/* Exact colored pill accent bar matching reference */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="h-[5px] w-28 sm:w-36 mx-auto rounded-full bg-gradient-to-r from-[#F59E0B] via-[#E11D48] via-[#8B5CF6] to-[#0284C7] mt-3.5 shadow-2xs"
          />
        </div>

        {/* ── Circular Packaging Cards Grid (2 Rows: 5 in Row 1, 4 in Row 2 with Sachets on Line 2) ── */}
        <div className="flex flex-col items-center gap-y-10 sm:gap-y-12 max-w-[1200px] mx-auto">
          {/* Row 1: 5 items (Alu-Alu, Blisters, Aluminium Strips, HDPE Bottles, Glass Bottles) */}
          <div className="flex flex-wrap items-start justify-center gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-10 gap-y-8 w-full">
            {PACKAGING_LIST.slice(0, 5).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.92, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.025 }}
                className="flex flex-col items-center group w-28 sm:w-32 md:w-36"
              >
                {/* Outer Circular Container with subtle pastel glow rim */}
                <div
                  className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full p-[2px] transition-all duration-300 group-hover:scale-108 group-hover:-translate-y-1"
                  style={{
                    boxShadow: `0 10px 25px ${item.glowColor}, 0 2px 8px rgba(0,0,0,0.04)`,
                  }}
                >
                  {/* Subtle 3D convex gradient ring matching reference image */}
                  <div
                    className="w-full h-full rounded-full flex items-center justify-center transition-all duration-300 border overflow-hidden relative shadow-inner p-2.5"
                    style={{
                      borderColor: item.borderColor,
                      background: item.bgGradient,
                    }}
                  >
                    {/* 3D Photorealistic Render */}
                    <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                        priority={index < 5}
                      />
                    </div>
                  </div>
                </div>

                {/* Packaging Label underneath with aligned baseline */}
                <div className="mt-3.5 text-center min-h-[36px] flex flex-col items-center justify-start">
                  {item.displayLines.map((line, lIdx) => (
                    <span
                      key={lIdx}
                      className="block text-[13px] sm:text-[14px] md:text-[15px] font-semibold text-slate-800 tracking-tight leading-snug group-hover:text-[#006EDC] transition-colors"
                    >
                      {line}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2: 4 items (Sachets, Liquid Syrup, Tubes, Pill Jar) */}
          <div className="flex flex-wrap items-start justify-center gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-10 gap-y-8 w-full">
            {PACKAGING_LIST.slice(5).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.92, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index + 5) * 0.025 }}
                className="flex flex-col items-center group w-28 sm:w-32 md:w-36"
              >
                {/* Outer Circular Container with subtle pastel glow rim */}
                <div
                  className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full p-[2px] transition-all duration-300 group-hover:scale-108 group-hover:-translate-y-1"
                  style={{
                    boxShadow: `0 10px 25px ${item.glowColor}, 0 2px 8px rgba(0,0,0,0.04)`,
                  }}
                >
                  {/* Subtle 3D convex gradient ring matching reference image */}
                  <div
                    className="w-full h-full rounded-full flex items-center justify-center transition-all duration-300 border overflow-hidden relative shadow-inner p-2.5"
                    style={{
                      borderColor: item.borderColor,
                      background: item.bgGradient,
                    }}
                  >
                    {/* 3D Photorealistic Render */}
                    <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

                {/* Packaging Label underneath with aligned baseline */}
                <div className="mt-3.5 text-center min-h-[36px] flex flex-col items-center justify-start">
                  {item.displayLines.map((line, lIdx) => (
                    <span
                      key={lIdx}
                      className="block text-[13px] sm:text-[14px] md:text-[15px] font-semibold text-slate-800 tracking-tight leading-snug group-hover:text-[#006EDC] transition-colors"
                    >
                      {line}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}

export default OurPackagingSection;
