"use client";

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  FileCheck2,
  Factory,
  ShieldCheck,
  Layers,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Activity,
  Globe2,
  Microscope,
  Pill,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

const EXPERTISE_CARDS = [
  {
    num: "01",
    tag: "Global Compliance",
    badgeColor: "#006EDC",
    title: "Regulatory Services",
    description:
      "Comprehensive CTD / eCTD dossier preparation, stability documentation under Zone IVb, and international MOH filings.",
    bullets: [
      "CTD / eCTD Dossier Compilation",
      "Country-Specific MOH Filings",
      "Stability Study Data (Zone IVb)",
    ],
    href: "#contact",
    icon: FileCheck2,
    widget: {
      title: "eCTD Module 1–5",
      subtitle: "Zone IVb Stability Validation",
      status: "Ready for Filing",
      metric: "50+ Countries",
    },
  },
  {
    num: "02",
    tag: "Flexible Supply",
    badgeColor: "#00bfb5",
    title: "Contract Manufacturing",
    description:
      "Scalable manufacturing partnerships aligned with international pharmacopeia standards and customized batch sizing.",
    bullets: [
      "Custom Batch Formulations",
      "High-Speed Automated Packaging",
      "Stringent IP & Formula Protection",
    ],
    href: "#contact",
    icon: Factory,
    widget: {
      title: "High-Speed Automated Lines",
      subtitle: "Blister, Strip & Alu-Alu",
      status: "100% On-Time",
      metric: "Custom MOQs",
    },
  },
  {
    num: "03",
    tag: "WHO-GMP Certified",
    badgeColor: "#F59E0B",
    title: "3rd Party Manufacturing",
    description:
      "Reliable third-party formulation production through accredited state-of-the-art sterile and oral solid facilities.",
    bullets: [
      "WHO-GMP & ISO Approved Sites",
      "100% Analytical QC Testing",
      "Zero-Contamination Guarantee",
    ],
    href: "#contact",
    icon: ShieldCheck,
    widget: {
      title: "Sterile & Oral Facilities",
      subtitle: "HPLC 99.8% Assay Purity",
      status: "ISO 9001:2015",
      metric: "Grade A Clean",
    },
  },
  {
    num: "04",
    tag: "Therapeutic Range",
    badgeColor: "#8B5CF6",
    title: "Generic Products",
    description:
      "Extensive export catalogue covering tablets, capsules, dry injections, syrups, sachets, and specialized combination therapies.",
    bullets: [
      "800+ Commercial Products",
      "Multiple Dosage Formats",
      "Custom Export Artwork Branding",
    ],
    href: "#products",
    icon: Layers,
    widget: {
      title: "800+ Generic Molecules",
      subtitle: "Cardio, Antibiotics, CNS, GI",
      status: "Commercial Ready",
      metric: "10+ Categories",
    },
  },
] as const;

export function Expertise() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduce) return;

      gsap.fromTo(
        ".expertise-header",
        { y: -24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: rootRef.current, start: "top 80%" },
        },
      );

      gsap.fromTo(
        ".expertise-card",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.1,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: { trigger: rootRef.current, start: "top 75%" },
        },
      );
    },
    { scope: rootRef },
  );

  return (
    <section
      id="expertise"
      ref={rootRef}
      className="relative scroll-mt-24 py-16 sm:py-24 overflow-hidden bg-white"
    >
      {/* Google font scope */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="relative z-20 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 font-['Inter_Tight',sans-serif]">
        {/* Section Header */}
        <div className="expertise-header max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7F7F7] border border-[#E5E5E5] mb-3.5 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#006EDC] animate-pulse" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#171717]">
              Our Capabilities
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] leading-[1.15] font-bold text-[#171717] tracking-tight">
            Capabilities that support global partners
          </h2>

          <div className="my-4 h-[3.5px] w-14 rounded-full bg-[#006EDC]" />

          <p className="text-base leading-relaxed text-[#5C5C5C] max-w-2xl">
            From regulatory readiness to contract manufacturing and generics, Zelnex is built for scalable, export-oriented collaboration across 50+ international markets.
          </p>
        </div>

        {/* ── 4 Pixa-Style Clean Feature Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {EXPERTISE_CARDS.map((card) => {
            const IconComponent = card.icon;

            return (
              <div
                key={card.title}
                className="expertise-card group relative bg-[#F7F7F7] rounded-[32px] flex flex-col justify-between p-6 sm:p-7 gap-6 h-full hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#EBEBEB] select-none"
              >
                {/* ── Top Group ── */}
                <div className="flex flex-col w-full">
                  {/* Top Row: Icon Tile + Badge */}
                  <div className="flex items-center justify-between mb-4">
                    {/* Icon Tile with multi-layer shadow */}
                    <div
                      className="w-[48px] h-[48px] rounded-[14px] bg-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                      style={{
                        boxShadow:
                          "0 1px 1px -0.5px rgba(23,23,23,0.06), 0 0 0 1px rgba(23,23,23,0.08), 0 3px 3px -1.5px rgba(23,23,23,0.04), 0 6px 6px -3px rgba(23,23,23,0.04), 0 10px 10px -5px rgba(23,23,23,0.04)",
                      }}
                    >
                      <IconComponent
                        className="w-6 h-6"
                        style={{ color: card.badgeColor }}
                      />
                    </div>

                    {/* Number / Tag Badge */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white text-[11px] font-bold text-[#171717] border border-[#E5E5E5] shadow-xs">
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: card.badgeColor }}
                      />
                      <span>{card.num}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-[20px] leading-[28px] font-bold text-[#171717] group-hover:text-[#006EDC] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-[14px] leading-[22px] text-[#5C5C5C] mt-2 font-medium">
                      {card.description}
                    </p>
                  </div>

                  {/* Bullet Specs */}
                  <div className="mt-4 space-y-1.5 pt-3 border-t border-black/[0.06]">
                    {card.bullets.map((b) => (
                      <div key={b} className="flex items-center gap-2">
                        <span
                          className="h-1.5 w-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: card.badgeColor }}
                        />
                        <span className="text-[12px] font-semibold text-[#171717]/85">
                          {b}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Link Row */}
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1 text-[15px] font-semibold text-[#171717] group-hover:text-[#006EDC] transition-colors cursor-pointer mt-5 w-fit"
                  >
                    <span>Learn more</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>

                {/* ── Bottom Widget Box ── */}
                <div
                  className="mt-auto w-full rounded-[18px] bg-white p-3.5 border border-black/[0.06] overflow-hidden"
                  style={{
                    boxShadow:
                      "0 1px 1px -0.5px rgba(23,23,23,0.06), 0 0 0 1px rgba(23,23,23,0.08), 0 3px 3px -1.5px rgba(23,23,23,0.04), 0 6px 6px -3px rgba(23,23,23,0.04)",
                  }}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-bold text-[#171717] truncate">
                      {card.widget.title}
                    </span>
                    <span
                      className="px-2 py-0.5 rounded-md text-[10px] font-bold"
                      style={{
                        backgroundColor: `${card.badgeColor}15`,
                        color: card.badgeColor,
                      }}
                    >
                      {card.widget.status}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-[#5C5C5C] font-medium pt-1 border-t border-black/[0.04]">
                    <span className="truncate">{card.widget.subtitle}</span>
                    <span className="font-bold text-[#171717] ml-2 shrink-0">
                      {card.widget.metric}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Expertise;
