"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { GradientCard } from "@/components/ui/gradient-card";
import { BentoHub } from "@/components/BentoHub";
import { LiquidGlass, LiquidGlassCard } from "@/components/ui/liquid-glass";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

const CATEGORIES = [
  {
    title: "Tablets & Oral Solid Dosage",
    badgeText: "High Capacity",
    badgeColor: "#006EDC",
    gradient: "blue" as const,
    description: "Uncoated, film-coated, enteric-coated, sustained-release, and chewable tablets manufactured to stringent pharmacopeial standards.",
    bullets: [
      "Immediate & Modified Release Profiles",
      "Alu-Alu & PVC/PVDC Blister Packaging",
      "Bulk Bottle & Custom Export Pack Sizes",
      "WHO-GMP Batch Traceability",
    ],
    ctaText: "View Formulations",
    ctaHref: "#contact",
  },
  {
    title: "Capsules & Pellets",
    badgeText: "Extended Release",
    badgeColor: "#00bfb5",
    gradient: "teal" as const,
    description: "Hard gelatin and HPMC vegetarian capsules with precision powder, pellet, or beadlet filling for targeted therapeutic release.",
    bullets: [
      "Size 00 to 4 Hard Gelatin & Veg Capsules",
      "Time-Release & Enteric Coated Pellets",
      "Moisture-Protected Tropical Packaging",
      "100% In Vitro Dissolution Compliance",
    ],
    ctaText: "Explore Capsules",
    ctaHref: "#contact",
  },
  {
    title: "Nutraceuticals & Wellness",
    badgeText: "Nutra Certified",
    badgeColor: "#38ef7d",
    gradient: "green" as const,
    description: "Vitamins, minerals, dietary supplements, and therapeutic herbal formulations supporting preventive and restorative health globally.",
    bullets: [
      "Multivitamin & Mineral Combinations",
      "Effervescent Tablets & Powders",
      "FSSAI & Export Grade Formulations",
      "Custom Flavor & Formulation Development",
    ],
    ctaText: "Discover Nutra",
    ctaHref: "#contact",
  },
  {
    title: "Injectables & Sterile Liquids",
    badgeText: "Sterile Grade A",
    badgeColor: "#7928ca",
    gradient: "purple" as const,
    description: "Aseptic small-volume parenterals, lyophilized dry powder vials, and liquid ampoules produced in certified cleanroom environments.",
    bullets: [
      "Lyophilized Vials & Liquid Ampoules",
      "Terminal Sterilization & Aseptic Filling",
      "Type I Glass Vials & Rubber Closures",
      "Complete Sterility & Endotoxin Testing",
    ],
    ctaText: "Inspect Sterile Range",
    ctaHref: "#contact",
  },
];

const PARTNERSHIP_METRICS = [
  {
    id: "markets",
    value: "50+",
    label: "Global Healthcare Markets",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000",
  },
  {
    id: "dossiers",
    value: "100%",
    label: "CTD / eCTD Dossier Readiness",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000",
  },
  {
    id: "dispatch",
    value: "24/7",
    label: "Global Temperature-Controlled Dispatch",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000",
  },
];

export function ProductShowcase() {
  const rootRef = useRef<HTMLElement>(null);

  // Cursor position for spring image following
  const [hoveredMetricId, setHoveredMetricId] = useState<string | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 320, damping: 28 };
  const imageX = useSpring(mouseX, springConfig);
  const imageY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      gsap.fromTo(
        ".product-header",
        { y: -24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: rootRef.current, start: "top 80%" },
        }
      );

      gsap.fromTo(
        ".product-card-item",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: { trigger: rootRef.current, start: "top 75%" },
        }
      );
    },
    { scope: rootRef }
  );

  return (
    <section
      id="products"
      ref={rootRef}
      className="relative scroll-mt-24 py-20 md:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #f7fafc 0%, #edf4fc 50%, #f7fafc 100%)",
      }}
    >
      {/* Ambient optical glass light orbs for refraction depth */}
      <div
        className="pointer-events-none absolute top-10 left-1/4 w-[600px] h-[350px] rounded-full opacity-35 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(0, 184, 242, 0.20) 0%, rgba(0, 110, 220, 0.10) 50%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(56, 239, 125, 0.15) 0%, rgba(0, 191, 181, 0.1) 60%, transparent 70%)",
        }}
      />

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="product-header max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal/10 border border-teal/20 mb-3.5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal">
              Our Products
            </p>
          </div>

          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-[#082B61] md:text-4xl lg:text-[2.65rem] leading-[1.18]">
            Pharmaceutical categories we deliver worldwide
          </h2>

          <div
            className="my-5 h-[3.5px] w-14 rounded-full"
            style={{
              background: "linear-gradient(90deg, #006EDC, #08BCEB)",
            }}
          />

          <p className="mt-4 text-base leading-relaxed text-[#4A5568] md:text-[1.05rem]">
            A focused range of high-quality formulations for distributors, importers,
            and healthcare institutions seeking reliable global supply and regulatory readiness.
          </p>
        </div>

        {/* 4 High-Contrast Product Category Gradient Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat) => (
            <div key={cat.title} className="product-card-item h-full">
              <GradientCard
                badgeText={cat.badgeText}
                badgeColor={cat.badgeColor}
                title={cat.title}
                description={cat.description}
                bullets={[...cat.bullets]}
                ctaText={cat.ctaText}
                ctaHref={cat.ctaHref}
                gradient={cat.gradient}
              />
            </div>
          ))}
        </div>

        {/* ── Modern 4x4 Bento Hub Showcase ── */}
        <div id="therapeutics" className="mt-20 scroll-mt-28">
          <BentoHub />
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          NEUMORPHIC LIGHT-MORPHISM CAREERS & PARTNERSHIPS CARD
          (Exact Same Design System as Certifications Accreditations)
         ══════════════════════════════════════════════════════════ */}
      <div id="careers" className="mt-24 scroll-mt-28 relative z-20 mx-auto w-full max-w-[1680px] px-3 sm:px-6 md:px-8 lg:px-12">
        <div
          className="rounded-[36px] sm:rounded-[44px] p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24 select-none w-full bg-[#E0E5EC] transition-all duration-300 relative overflow-hidden"
          style={{
            boxShadow:
              "14px 14px 28px rgb(163,177,198,0.65), -14px -14px 28px rgba(255,255,255,0.7)",
          }}
        >
          {/* Inner 2-Column Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center w-full">
            {/* Left Side: Headline & Light-morphic CTAs (7 cols) */}
            <div className="lg:col-span-7 flex flex-col">
              {/* Inset Deep Tag Pill */}
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E0E5EC] mb-6 w-fit"
                style={{
                  boxShadow:
                    "inset 3px 3px 6px rgb(163,177,198,0.6), inset -3px -3px 6px rgba(255,255,255,0.5)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-[#38B2AC] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#38B2AC]">
                  Careers & Global Partnerships
                </span>
              </div>

              {/* Headline */}
              <h2
                className="text-3xl sm:text-5xl lg:text-6xl xl:text-[72px] font-extrabold text-[#3D4852] leading-[1.02] tracking-tight mb-6"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Build your global healthcare footprint with Zelnex
              </h2>

              <p className="text-base sm:text-lg lg:text-xl text-[#6B7280] max-w-2xl leading-relaxed font-normal">
                Join a dynamic pharmaceutical export powerhouse dedicated to quality,
                compliance, and expanding international healthcare access across 50+ countries.
              </p>

              {/* Neumorphic / Light-Morphism Buttons Row */}
              <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-5">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4.5 rounded-full bg-[#E0E5EC] text-[#3D4852] font-extrabold text-base sm:text-lg transition-all duration-300 hover:text-[#38B2AC] active:scale-95 cursor-pointer"
                  style={{
                    boxShadow:
                      "6px 6px 14px rgb(163,177,198,0.7), -6px -6px 14px rgba(255,255,255,0.8)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "inset 3px 3px 6px rgb(163,177,198,0.6), inset -3px -3px 6px rgba(255,255,255,0.8)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "6px 6px 14px rgb(163,177,198,0.7), -6px -6px 14px rgba(255,255,255,0.8)";
                  }}
                >
                  <span>Enquire for Partnership</span>
                  <span className="text-xl text-[#38B2AC] font-black">→</span>
                </Link>

                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4.5 rounded-full bg-[#E0E5EC] text-[#6B7280] font-extrabold text-base transition-all duration-300 hover:text-[#3D4852] active:scale-95 cursor-pointer"
                  style={{
                    boxShadow:
                      "inset 3px 3px 6px rgb(163,177,198,0.6), inset -3px -3px 6px rgba(255,255,255,0.5)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "6px 6px 12px rgb(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.8)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "inset 3px 3px 6px rgb(163,177,198,0.6), inset -3px -3px 6px rgba(255,255,255,0.5)";
                  }}
                >
                  <span>Explore Careers</span>
                  <span className="text-sm font-black">↗</span>
                </Link>
              </div>
            </div>

            {/* Right Side: Metrics with Cursor Popups (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-8 md:gap-10 pt-4 lg:pt-0 w-full">
              {PARTNERSHIP_METRICS.map((metric, idx) => (
                <div
                  key={metric.id}
                  className={`relative group cursor-pointer w-full ${idx > 0 ? "pt-6 border-t border-[#A3B1C6]/30" : ""}`}
                  onMouseEnter={() => setHoveredMetricId(metric.id)}
                  onMouseLeave={() => setHoveredMetricId(null)}
                  onMouseMove={handleMouseMove}
                >
                  {/* Metric Value & Label */}
                  <div className="relative z-10 transition-transform duration-300 group-hover:scale-105 w-fit">
                    <span
                      className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[84px] font-black text-[#3D4852] leading-none select-none tracking-tighter"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {metric.value}
                    </span>
                    <span className="block text-base sm:text-lg lg:text-xl text-[#6B7280] font-semibold mt-2 select-none group-hover:text-[#38B2AC] transition-colors">
                      {metric.label}
                    </span>
                  </div>

                  {/* Cursor-Following Pop-up Image */}
                  <AnimatePresence>
                    {hoveredMetricId === metric.id && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.6 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }}
                        style={{
                          x: imageX,
                          y: imageY,
                          translateX: "-50%",
                          translateY: "-50%",
                        }}
                        className="absolute top-0 left-0 pointer-events-none z-30 w-[320px] h-[210px] rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,50,150,0.35)] border-2 border-white"
                      >
                        <img
                          src={metric.image}
                          alt={metric.label}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-2 left-3 right-3 text-[12px] font-bold text-white drop-shadow-md">
                          {metric.label}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Bottom Separator Line */}
                  <div className="absolute -bottom-5 md:-bottom-7 left-0 w-full h-[1.5px] bg-slate-200/80 origin-left scale-x-100 group-hover:bg-[#006EDC] transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductShowcase;
