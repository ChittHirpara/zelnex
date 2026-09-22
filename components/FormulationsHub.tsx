"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";


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
    image: "/products/tablets-blister.jpg",
    href: "/products?dosage=tablet",
  },
  // 2. CAPSULES
  {
    id: "cat-capsule",
    tag: "ENCAPSULATION",
    tagColor: "#0088CC",
    title: "Capsules",
    image: "/products/hard-capsules.jpg",
    href: "/products?dosage=capsule",
  },
  // 3. EFFERVESCENT
  {
    id: "cat-effervescent",
    tag: "RAPID DISSOLUTION",
    tagColor: "#00A0A2",
    title: "Effervescent Tablets",
    image: "/products/effervescent-tablets.jpg",
    href: "/products?dosage=effervescent",
  },
  // 4. SYRUPS & SUSPENSIONS
  {
    id: "cat-suspension",
    tag: "ORAL LIQUIDS",
    tagColor: "#80276C",
    title: "Syrups & Suspensions",
    image: "/products/syrup-suspension.jpg",
    href: "/products?dosage=suspension",
  },
  // 5. DRY POWDERS
  {
    id: "cat-dry-powder",
    tag: "RECONSTITUTION SACHETS",
    tagColor: "#D97706",
    title: "Dry Powders",
    image: "/products/powder-sachets.jpg",
    href: "/products?dosage=dry-powder",
  },
  // 6. TOPICAL / TUBE
  {
    id: "cat-topical",
    tag: "OINTMENTS & GELS",
    tagColor: "#059669",
    title: "Topical / Tube",
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

              {/* ── MATTE GLASS FLOATING PANEL (PILL BADGE & TITLE) ── */}
              <div
                className="relative z-10 -mt-9 sm:-mt-11 w-full rounded-[18px] flex flex-col gap-1 p-3 sm:p-3.5 flex-1 transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.90) 25%, rgba(255, 255, 255, 0.98) 70%, rgba(255, 255, 255, 1) 100%)",
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
                <div className="flex items-center justify-between gap-1.5 pt-0.5">
                  <h3 className="font-[family-name:var(--font-outfit)] text-[15px] sm:text-[16px] font-bold leading-tight text-[#082B61] tracking-tight group-hover:text-[#006EDC] transition-colors duration-200 truncate">
                    {product.title}
                  </h3>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#006EDC] group-hover:translate-x-0.5 transition-all duration-200 shrink-0" />
                </div>
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
