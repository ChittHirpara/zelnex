"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

/* ─────────────────────────────────────────────────────────────────────────
   Dosage Categories (7 Vibrant Format Buttons)
   ───────────────────────────────────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────────────────────────────────
   The 6 Core Dosage Category Cards (1 per Category)
   ───────────────────────────────────────────────────────────────────────── */
const SIX_DOSAGE_CARDS = [
  // 1. TABLETS
  {
    id: "cat-tablet",
    tag: "SOLID ORAL",
    tagColor: "#F59E0B",
    title: "Tablets",
    description:
      "High-speed rotary tableting with precision aqueous film coating, controlled dissolution and Alu-Alu blister sealing.",
    image: "/products/tablets-blister.jpg",
    href: "/products?dosage=tablet",
  },
  // 2. CAPSULES
  {
    id: "cat-capsule",
    tag: "ENCAPSULATION",
    tagColor: "#0088CC",
    title: "Capsules",
    description:
      "100% checkweighed precision hard gelatin and HPMC vegetarian encapsulation protecting hygroscopic active molecules.",
    image: "/products/hard-capsules.jpg",
    href: "/products?dosage=capsule",
  },
  // 3. EFFERVESCENT
  {
    id: "cat-effervescent",
    tag: "RAPID DISSOLUTION",
    tagColor: "#00A0A2",
    title: "Effervescent Tablets",
    description:
      "Direct-compression effervescent formulations with instant carbonation and moisture-tight barrier aluminium tube packaging.",
    image: "/products/effervescent-tablets.jpg",
    href: "/products?dosage=effervescent",
  },
  // 4. SYRUPS & SUSPENSIONS
  {
    id: "cat-suspension",
    tag: "ORAL LIQUIDS",
    tagColor: "#80276C",
    title: "Syrups & Suspensions",
    description:
      "Automated liquid formulations with uniform active dispersion, pleasant flavor masking and calibrated dosing cups.",
    image: "/products/syrup-suspension.jpg",
    href: "/products?dosage=suspension",
  },
  // 5. DRY POWDERS
  {
    id: "cat-dry-powder",
    tag: "RECONSTITUTION SACHETS",
    tagColor: "#D97706",
    title: "Dry Powders",
    description:
      "VFFS-packed reconstitution granules, WHO-standard oral salts and antibiotic dry syrups in multi-barrier moisture foil.",
    image: "/products/powder-sachets.jpg",
    href: "/products?dosage=dry-powder",
  },
  // 6. TOPICAL / TUBE
  {
    id: "cat-topical",
    tag: "OINTMENTS & GELS",
    tagColor: "#059669",
    title: "Topical / Tube",
    description:
      "High-absorption micro-emulsion gels, vanishing creams and antiseptic ointments in sterile collapsible barrier tubes.",
    image: "/products/topical-tube.jpg",
    href: "/products?dosage=topical",
  },
] as const;

/* Repeat the 6 cards seamlessly for continuous infinite floating loop */
const TRACK = [
  ...SIX_DOSAGE_CARDS,
  ...SIX_DOSAGE_CARDS,
  ...SIX_DOSAGE_CARDS,
  ...SIX_DOSAGE_CARDS,
];

export function FormulationsHub() {
  return (
    <section
      id="products"
      className="relative w-full scroll-mt-24 py-14 sm:py-20 z-20 select-none font-[family-name:var(--font-montserrat)] overflow-hidden bg-[#FAFCFF] border-y border-blue-100/80 shadow-[0_10px_40px_rgba(8,43,97,0.03)]"
    >
      {/* Soft Ambient Glows */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[320px] rounded-full blur-[120px] opacity-20 bg-[#006EDC]"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-10 w-[500px] h-[250px] rounded-full blur-[100px] opacity-10 bg-[#00A0A2]"
      />

      {/* ════════════════════════════════════════════════════════════════
          1. STREAMLINED EXECUTIVE HEADER & LIVE KPI STRIP
         ════════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-8 sm:mb-10 px-4 sm:px-6">
        {/* Metadata Pill */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#006EDC]/10 border border-[#006EDC]/25 mb-3 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#006EDC]" />
          <span className="text-[10.5px] font-bold uppercase tracking-[0.15em] text-[#006EDC] font-[family-name:var(--font-outfit)]">
            Finished Formulations &amp; Dosage Capabilities
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#082B61] tracking-tight leading-[1.15] mb-3 font-[family-name:var(--font-outfit)]">
          Commercial Formulations &amp; Certified Dosage Formats
        </h2>

        <p className="text-xs sm:text-sm md:text-[15px] text-slate-600 leading-relaxed font-normal mb-5 max-w-2xl mx-auto">
          High-throughput pharmaceutical manufacturing across certified dosage forms — combining cleanroom capacities, high-barrier packaging, and WHO-GMP validated compliance.
        </p>

        {/* 4 Compact Executive Metric Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-2xl mx-auto">
          <div className="bg-white border border-slate-200/80 rounded-xl px-3 py-2 text-center shadow-2xs">
            <span className="block text-sm font-bold text-[#082B61] font-[family-name:var(--font-outfit)]">
              355+
            </span>
            <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">
              Molecules
            </span>
          </div>
          <div className="bg-white border border-slate-200/80 rounded-xl px-3 py-2 text-center shadow-2xs">
            <span className="block text-sm font-bold text-[#082B61] font-[family-name:var(--font-outfit)]">
              870M+
            </span>
            <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">
              Annual Units
            </span>
          </div>
          <div className="bg-white border border-slate-200/80 rounded-xl px-3 py-2 text-center shadow-2xs">
            <span className="block text-sm font-bold text-emerald-600 font-[family-name:var(--font-outfit)]">
              WHO-GMP
            </span>
            <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">
              Validated
            </span>
          </div>
          <div className="bg-white border border-slate-200/80 rounded-xl px-3 py-2 text-center shadow-2xs">
            <span className="block text-sm font-bold text-[#006EDC] font-[family-name:var(--font-outfit)]">
              Zone IVb
            </span>
            <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">
              Stability
            </span>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════
          2. VIBRANT ICONIC DOSAGE TILES (7 FORMAT BUTTONS)
         ════════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 mb-8 sm:mb-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex sm:grid sm:grid-cols-4 lg:grid-cols-7 gap-2.5 sm:gap-3 overflow-x-auto pb-2 sm:pb-0 scrollbar-none -mx-1 px-1">
          {DOSAGE_OPTIONS.map((dosage) => (
            <Link
              key={dosage.id}
              href={dosage.href}
              className={`group relative min-w-[100px] sm:min-w-0 flex-1 sm:flex-initial py-3.5 sm:py-4 px-2.5 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center transition-all duration-200 cursor-pointer text-white shrink-0 sm:shrink shadow-xs hover:shadow-md hover:scale-[1.03] active:scale-[0.98] ${dosage.bgColor} ${dosage.hoverColor}`}
              title={`Explore ${dosage.name} Formulations`}
            >
              {/* Center: Silhouette Icon */}
              <div className="mb-2 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                {dosage.icon}
              </div>

              {/* Bottom: Title Label */}
              <span className="text-white text-xs sm:text-[13.5px] font-bold tracking-tight text-center leading-tight font-[family-name:var(--font-outfit)]">
                {dosage.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════
          3. CONTINUOUS FLOATING FORMULATIONS CAROUSEL (FULL SCREEN EDGE-TO-EDGE)
         ════════════════════════════════════════════════════════════════ */}
      <div className="relative w-full overflow-hidden formulations-scroll-wrapper my-4">
        {/* Left Fade Mask */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-16 sm:w-32 lg:w-48 z-20"
          style={{
            background:
              "linear-gradient(to right, #FAFCFF 0%, rgba(250,252,255,0) 100%)",
          }}
        />

        {/* Right Fade Mask */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-16 sm:w-32 lg:w-48 z-20"
          style={{
            background:
              "linear-gradient(to left, #FAFCFF 0%, rgba(250,252,255,0) 100%)",
          }}
        />

        {/* Scrolling Track */}
        <div className="formulations-track flex gap-4 sm:gap-5 w-max">
          {TRACK.map((product, i) => (
            <Link
              key={`${product.id}-${i}`}
              href={product.href}
              className="group flex-shrink-0 w-[250px] sm:w-[275px] rounded-[24px] bg-white p-2.5 sm:p-3 border border-slate-200/80 shadow-[0_4px_18px_rgba(8,43,97,0.05)] hover:shadow-[0_16px_36px_rgba(8,43,97,0.12)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col"
              style={{ textDecoration: "none" }}
            >
              {/* ── IMAGE AREA (70% OF CARD) ── */}
              <div
                className="relative w-full rounded-[18px] overflow-hidden flex-shrink-0 bg-slate-50"
                style={{ height: "240px" }}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="280px"
                  unoptimized
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.05]"
                />
              </div>

              {/* ── MATTE GLASS FLOATING PANEL (30% OF CARD OVERLAY) ── */}
              <div
                className="relative z-10 -mt-12 sm:-mt-14 w-full rounded-[18px] flex flex-col gap-1.5 p-3.5 flex-1 transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.60) 0%, rgba(255, 255, 255, 0.88) 25%, rgba(255, 255, 255, 0.98) 70%, rgba(255, 255, 255, 1) 100%)",
                  backdropFilter: "blur(20px) saturate(190%)",
                  WebkitBackdropFilter: "blur(20px) saturate(190%)",
                  border: "1px solid rgba(255, 255, 255, 0.95)",
                  boxShadow:
                    "0 10px 24px -4px rgba(8, 43, 97, 0.08), inset 0 1.5px 0.5px 0 rgba(255, 255, 255, 1)",
                }}
              >
                {/* Badge — Frosted Pill */}
                <span
                  className="inline-block self-start text-[8.5px] font-bold uppercase tracking-[0.08em] px-2.5 py-[2px] rounded-full border transition-all duration-200 font-[family-name:var(--font-outfit)]"
                  style={{
                    color: product.tagColor || "#006EDC",
                    borderColor: `${product.tagColor || "#006EDC"}45`,
                    background: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    boxShadow: `0 1px 3px ${product.tagColor || "#006EDC"}20, inset 0 1px 0 rgba(255, 255, 255, 0.95)`,
                  }}
                >
                  {product.tag}
                </span>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-outfit)] text-[15.5px] font-bold leading-tight text-[#082B61] tracking-tight group-hover:text-[#006EDC] transition-colors duration-200 truncate">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="text-[11.5px] leading-[1.45] text-[#475569] font-normal line-clamp-2">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════
          4. FOOTER TELEMETRY & DIRECT CATALOGUE ACTION
         ════════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 mt-4 border-t border-blue-100/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
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

      {/* ── CSS Animation for Continuous Floating Marquee (110s smooth loop) ── */}
      <style jsx>{`
        .formulations-scroll-wrapper {
          padding: 10px 0 18px;
        }

        .formulations-track {
          animation: formulationsScroll 70s linear infinite;
        }

        .formulations-scroll-wrapper:hover .formulations-track {
          animation-play-state: paused;
        }

        @keyframes formulationsScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .formulations-track {
            animation: none;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </section>
  );
}

export default FormulationsHub;
