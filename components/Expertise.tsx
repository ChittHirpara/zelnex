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
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

const EXPERTISE_CARDS = [
  {
    num: "01",
    tag: "GLOBAL COMPLIANCE",
    themeColor: "#006EDC",
    titleColor: "#0A3678",
    bgGradient: "linear-gradient(180deg, #EBF5FF 0%, #E0F2FE 35%, #F8FBFF 100%)",
    borderColor: "#BAE6FD",
    pillBg: "#FFFFFF",
    pillBorder: "#BFDBFE",
    title: "Regulatory Services",
    description:
      "Comprehensive CTD / eCTD dossier preparation, stability documentation under Zone IVb, and international MOH filings.",
    bullets: [
      "CTD / eCTD Dossier Compilation",
      "Country-Specific MOH Filings",
      "Stability Study Data (Zone IVb)",
    ],
    href: "/services?service=regulatory",
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
    tag: "EXTENDED SCALE",
    themeColor: "#0D9488",
    titleColor: "#0F766E",
    bgGradient: "linear-gradient(180deg, #E6FFFA 0%, #CCFBF1 35%, #F4FBF9 100%)",
    borderColor: "#99F6E4",
    pillBg: "#FFFFFF",
    pillBorder: "#A7F3D0",
    title: "Contract Manufacturing",
    description:
      "Scalable manufacturing partnerships aligned with international pharmacopeia standards and customized batch sizing.",
    bullets: [
      "Custom Batch Formulations",
      "High-Speed Automated Packaging",
      "Stringent IP & Formula Protection",
    ],
    href: "/services?service=contract-manufacturing",
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
    tag: "WHO-GMP CERTIFIED",
    themeColor: "#059669",
    titleColor: "#065F46",
    bgGradient: "linear-gradient(180deg, #ECFDF5 0%, #D1FAE5 35%, #F4FBF7 100%)",
    borderColor: "#A7F3D0",
    pillBg: "#FFFFFF",
    pillBorder: "#BBF7D0",
    title: "3rd Party Manufacturing",
    description:
      "Reliable third-party formulation production through accredited state-of-the-art sterile and oral solid facilities.",
    bullets: [
      "WHO-GMP & ISO Approved Sites",
      "100% Analytical QC Testing",
      "Zero-Contamination Guarantee",
    ],
    href: "/services?service=third-party-manufacturing",
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
    tag: "STERILE & FINISHED",
    themeColor: "#7C3AED",
    titleColor: "#5B21B6",
    bgGradient: "linear-gradient(180deg, #F5F3FF 0%, #EDE9FE 35%, #FAF8FF 100%)",
    borderColor: "#DDD6FE",
    pillBg: "#FFFFFF",
    pillBorder: "#E9D5FF",
    title: "Generic Products",
    description:
      "Extensive export catalogue covering tablets, capsules, dry injections, syrups, sachets, and specialized combination therapies.",
    bullets: [
      "800+ Commercial Products",
      "Multiple Dosage Formats",
      "Custom Export Artwork Branding",
    ],
    href: "/services?service=generic-products",
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
      className="relative scroll-mt-24 py-16 sm:py-24 overflow-hidden bg-transparent z-10 select-none font-['Inter',sans-serif]"
    >
      <div className="relative z-20 mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with JetBrains Mono Metadata */}
        <div className="expertise-header max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#006EDC]/10 border border-[#006EDC]/30 mb-3.5">
            <span className="w-2 h-2 rounded-full bg-[#006EDC] animate-pulse" />
            <p className="text-[11px] font-['JetBrains_Mono',monospace] font-bold uppercase tracking-[0.15em] text-[#006EDC]">
              02.00 // CORE CAPABILITIES
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] leading-[1.12] font-extrabold text-[#0B1E48] tracking-tight">
            Capabilities That Power Global Supply
          </h2>

          <div className="my-3.5 h-[3px] w-12 rounded-full bg-[#006EDC]" />

          <p className="text-sm sm:text-base leading-relaxed text-[#4B5563] max-w-2xl font-normal">
            From regulatory dossier readiness to contract manufacturing and finished generics, Zelnex is built for scalable, compliant collaboration across 50+ international markets.
          </p>
        </div>

        {/* ── 4 Pastel Gradient Gradient Theme Cards (Matching Image 2) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {EXPERTISE_CARDS.map((card) => {
            const IconComponent = card.icon;

            return (
              <div
                key={card.title}
                className="expertise-card group relative rounded-[26px] sm:rounded-[30px] flex flex-col justify-between p-6 sm:p-7 gap-6 h-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 select-none"
                style={{
                  background: card.bgGradient,
                  border: `1.2px solid ${card.borderColor}`,
                }}
              >
                {/* Top Content Group */}
                <div className="flex flex-col w-full">
                  
                  {/* Top Row: Pill Tag Badge + Slot Number */}
                  <div className="flex items-center justify-between mb-4">
                    
                    {/* Top Pill Tag Badge */}
                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-2xs"
                      style={{
                        backgroundColor: card.pillBg,
                        border: `1px solid ${card.pillBorder}`,
                        color: card.themeColor,
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: card.themeColor }}
                      />
                      <span>{card.tag}</span>
                    </div>

                    {/* Icon Tile */}
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-2xs"
                      style={{
                        backgroundColor: "#FFFFFF",
                        color: card.themeColor,
                        border: `1px solid ${card.borderColor}`,
                      }}
                    >
                      <IconComponent className="w-4.5 h-4.5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3
                      className="text-lg sm:text-xl font-black leading-snug tracking-tight"
                      style={{ color: card.titleColor }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] leading-relaxed text-[#475569] mt-2.5 font-medium">
                      {card.description}
                    </p>
                  </div>

                  {/* Bullet Specs */}
                  <div className="mt-5 space-y-2 pt-3.5 border-t border-black/5 font-['JetBrains_Mono',monospace] text-xs">
                    {card.bullets.map((b) => (
                      <div key={b} className="flex items-start gap-2 text-[#334155]">
                        <span
                          className="h-1.5 w-1.5 rounded-full shrink-0 mt-1.5"
                          style={{ backgroundColor: card.themeColor }}
                        />
                        <span className="text-[11.5px] leading-tight font-medium">
                          {b}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Link Action */}
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1 text-xs font-['JetBrains_Mono',monospace] font-bold transition-all cursor-pointer mt-5 w-fit uppercase tracking-wider group/link"
                    style={{ color: card.themeColor }}
                  >
                    <span className="group-hover/link:underline underline-offset-4 font-bold">
                      View Service
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>
                </div>

                {/* Bottom Spec Widget Box */}
                <div
                  className="mt-auto w-full rounded-2xl p-3.5 border overflow-hidden font-['JetBrains_Mono',monospace] shadow-2xs"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.75)",
                    backdropFilter: "blur(8px)",
                    borderColor: card.borderColor,
                  }}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10.5px] font-bold text-slate-800 truncate">
                      {card.widget.title}
                    </span>
                    <span
                      className="px-2 py-0.5 rounded-full text-[9px] font-bold shadow-2xs"
                      style={{
                        backgroundColor: card.pillBg,
                        color: card.themeColor,
                        border: `1px solid ${card.pillBorder}`,
                      }}
                    >
                      {card.widget.status}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-slate-600 pt-1.5 border-t border-black/5">
                    <span className="truncate">{card.widget.subtitle}</span>
                    <span
                      className="font-bold ml-2 shrink-0"
                      style={{ color: card.themeColor }}
                    >
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
