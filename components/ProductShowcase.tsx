"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

interface ProductCardItem {
  badge: string;
  badgeColor: string;
  badgeBg: string;
  badgeBorder: string;
  title: string;
  image: string;
  description: string;
  specs: string;
  href: string;
}

const MATTE_GLASS_PRODUCTS: ProductCardItem[] = [
  {
    badge: "SPECIALIZED WELLNESS",
    badgeColor: "#EA580C",
    badgeBg: "rgba(255, 247, 237, 0.85)",
    badgeBorder: "rgba(253, 186, 116, 0.9)",
    title: "Oxytocin Nasal Spray",
    image: "/products/nasal-spray.jpg",
    description:
      "A high-potency metered intranasal formulation engineered for rapid bioavailability, stable shelf-life, and precise clinical dosing.",
    specs: "15ml Metered Spray · Zone IVb Stable",
    href: "#contact",
  },
  {
    badge: "ORAL SOLID DOSAGE",
    badgeColor: "#006EDC",
    badgeBg: "rgba(240, 249, 255, 0.85)",
    badgeBorder: "rgba(186, 230, 253, 0.9)",
    title: "Tablets & Capsules",
    image: "/products/tablets-capsules.jpg",
    description:
      "Film-coated, sustained-release, and hard-gelatin capsule formulations manufactured in WHO-GMP cleanrooms with high-barrier Alu-Alu packaging.",
    specs: "800+ Formulations · High-Speed Blistering",
    href: "#contact",
  },
  {
    badge: "STERILE INJECTABLES",
    badgeColor: "#0D9488",
    badgeBg: "rgba(240, 253, 250, 0.85)",
    badgeBorder: "rgba(153, 246, 228, 0.9)",
    title: "Lyophilized & Liquid Vials",
    image: "/products/sterile-vial.jpg",
    description:
      "Aseptically filled parenteral infusions and lyophilized antibiotic vials certified for Grade A laminar airflow cleanroom environments.",
    specs: "10ml / 20ml Vials · Pyrogen-Free",
    href: "#contact",
  },
  {
    badge: "PEDIATRIC & ORAL LIQUIDS",
    badgeColor: "#D97706",
    badgeBg: "rgba(255, 251, 235, 0.85)",
    badgeBorder: "rgba(253, 230, 138, 0.9)",
    title: "Syrups & Suspensions",
    image: "/products/syrup-suspension.jpg",
    description:
      "Palatable pediatric suspensions, cough syrups, and oral rehydration solutions formulated with tamper-evident graduated dosing closures.",
    specs: "60ml / 100ml / 150ml · Child-Resistant",
    href: "#contact",
  },
];

export function ProductShowcase() {
  const { t } = useLanguage();
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduce) return;

      gsap.fromTo(
        ".product-header-anim",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: { trigger: rootRef.current, start: "top 85%" },
        },
      );

      gsap.fromTo(
        ".product-card-item",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: { trigger: rootRef.current, start: "top 80%" },
        },
      );
    },
    { scope: rootRef },
  );

  return (
    <section
      id="products"
      ref={rootRef}
      className="relative scroll-mt-24 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1720px] mx-auto z-10 select-none overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="product-header-anim text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#006EDC]/10 border border-[#006EDC]/20 mb-3.5 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#006EDC] animate-pulse" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#006EDC]">
              {t.products.badge}
            </p>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111111] tracking-tight leading-[1.08] mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {t.products.title}
          </h2>

          <p className="text-base sm:text-lg text-[#555555] max-w-2xl mx-auto font-['Inter',sans-serif] leading-relaxed">
            {t.products.subtitle}
          </p>
        </div>

        {/* ── 4 Liquid Glass Overlay Product Cards ── */}
        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {MATTE_GLASS_PRODUCTS.map((prod) => (
            <div
              key={prod.title}
              className="product-card-item group relative rounded-[32px] sm:rounded-[36px] overflow-hidden bg-[#F3F4F6] border border-[#CBD5E1] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_22px_50px_rgba(0,20,60,0.11)] transition-all duration-500 flex flex-col justify-between p-3.5 sm:p-4 h-[490px] sm:h-[520px]"
            >
              {/* ── High-Resolution Product Image (Top Canvas) ── */}
              <div className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-b from-[#ECEEF1] via-[#F3F4F6] to-[#E2E8F0] pointer-events-none">
                <Image
                  src={prod.image}
                  alt={prod.title}
                  fill
                  unoptimized={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-contain object-top pt-6 px-4 group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
              </div>

              {/* Spacer so content sits at bottom */}
              <div className="relative z-10 w-full h-1" />

              {/* ── Liquid Glassmorphic Floating Overlay Card ── */}
              <div
                className="relative z-20 w-full rounded-[22px] sm:rounded-[24px] p-4 overflow-hidden transition-all duration-300 group-hover:shadow-[0_16px_38px_rgba(0,30,80,0.15)] group-hover:border-white"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.48) 0%, rgba(255, 255, 255, 0.22) 100%)",
                  backdropFilter: "blur(24px) saturate(190%)",
                  WebkitBackdropFilter: "blur(24px) saturate(190%)",
                  border: "1.5px solid rgba(255, 255, 255, 0.8)",
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

                {/* Category Pill Tag */}
                <div
                  className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] sm:text-[9.5px] font-bold uppercase tracking-wider mb-2 border shadow-2xs backdrop-blur-md"
                  style={{
                    color: prod.badgeColor,
                    backgroundColor: prod.badgeBg,
                    borderColor: prod.badgeBorder,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: prod.badgeColor }}
                  />
                  <span>{prod.badge}</span>
                </div>

                {/* Product Title */}
                <h3
                  className="text-base sm:text-[17px] font-bold text-[#0B1E48] tracking-tight leading-snug mb-1 group-hover:text-[#006EDC] transition-colors"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {prod.title}
                </h3>

                {/* Description (Concise 2-line clamp) */}
                <p className="text-[11.5px] sm:text-[12px] text-[#334155] leading-relaxed font-['Inter',sans-serif] mb-2.5 line-clamp-2 font-medium">
                  {prod.description}
                </p>

                {/* Bottom Metadata & Link */}
                <div className="pt-2 border-t border-slate-900/[0.08] flex items-center justify-between gap-2 text-xs font-['Inter',sans-serif]">
                  <span className="text-[10.5px] font-semibold text-slate-600 truncate font-['JetBrains_Mono',monospace]">
                    {prod.specs}
                  </span>
                  <Link
                    href={prod.href}
                    className="inline-flex items-center gap-0.5 font-bold text-[#006EDC] hover:text-[#082B61] transition-colors shrink-0 cursor-pointer text-xs uppercase font-['JetBrains_Mono',monospace] tracking-wider"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>

              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductShowcase;
