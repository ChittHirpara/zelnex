"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
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
    titleColor: "#082B61",
    bgGradient: "linear-gradient(180deg, #FFFFFF 0%, #F8FBFE 45%, #F0F7FF 100%)",
    borderColor: "#BFDBFE",
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
    image: "/services/regulatory-services.jpg",
    widget: {
      title: "eCTD Module 1–5",
      subtitle: "Zone IVb Stability Validation",
      status: "Ready for Filing",
      metric: "10+ Countries",
    },
  },
  {
    num: "02",
    tag: "EXTENDED SCALE",
    themeColor: "#006EDC",
    titleColor: "#082B61",
    bgGradient: "linear-gradient(180deg, #FFFFFF 0%, #F8FBFE 45%, #F0F7FF 100%)",
    borderColor: "#BFDBFE",
    pillBg: "#FFFFFF",
    pillBorder: "#BFDBFE",
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
    image: "/services/contract-manufacturing.png",
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
    themeColor: "#006EDC",
    titleColor: "#082B61",
    bgGradient: "linear-gradient(180deg, #FFFFFF 0%, #F8FBFE 45%, #F0F7FF 100%)",
    borderColor: "#BFDBFE",
    pillBg: "#FFFFFF",
    pillBorder: "#BFDBFE",
    title: "3rd Party Manufacturing",
    description:
      "Reliable third-party formulation production through accredited state-of-the-art sterile and oral solid facilities.",
    bullets: [
      "WHO-GMP & ISO Approved Sites",
      "Analytical QC Testing",
      "Zero-Contamination Guarantee",
    ],
    href: "/services?service=third-party-manufacturing",
    icon: ShieldCheck,
    image: "/services/third-party-manufacturing.png",
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
    themeColor: "#006EDC",
    titleColor: "#082B61",
    bgGradient: "linear-gradient(180deg, #FFFFFF 0%, #F8FBFE 45%, #F0F7FF 100%)",
    borderColor: "#BFDBFE",
    pillBg: "#FFFFFF",
    pillBorder: "#BFDBFE",
    title: "Generic Products",
    description:
      "Extensive export catalogue covering tablets, capsules, dry injections, syrups, sachets, and specialized combination therapies.",
    bullets: [
      "355+ Commercial Products",
      "Multiple Dosage Formats",
      "Custom Export Artwork Branding",
    ],
    href: "/services?service=generic-products",
    icon: Layers,
    image: "/services/generic-products.png",
    widget: {
      title: "355+ Generic Molecules",
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
      {/* Soft White & Blue Ambient Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full max-h-[700px] bg-gradient-to-b from-blue-50/50 via-sky-50/25 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

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
            From regulatory dossier readiness to contract manufacturing and finished generics, Zelnex is built for scalable, compliant collaboration across 10+ international markets.
          </p>
        </div>

        {/* ── 4 White & Blue Theme Pillar Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {EXPERTISE_CARDS.map((card) => {
            const IconComponent = card.icon;

            return (
              <div
                key={card.title}
                className="expertise-card group relative rounded-[26px] sm:rounded-[30px] flex flex-col justify-between p-6 sm:p-7 gap-6 h-full shadow-[0_4px_24px_rgba(0,110,220,0.06)] hover:shadow-[0_16px_36px_rgba(0,110,220,0.12)] border border-[#BFDBFE] hover:border-[#006EDC]/60 transition-all duration-300 select-none hover:-translate-y-1"
                style={{
                  background: card.bgGradient,
                }}
              >
                {/* Top Content Group */}
                <div className="flex flex-col w-full">
                  
                  {/* Top Row: Pill Tag Badge + Icon */}
                  <div className="flex items-center justify-between mb-4">
                    
                    {/* Top Pill Tag Badge */}
                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-2xs bg-white border border-[#BFDBFE] text-[#006EDC]"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-[#006EDC]"
                      />
                      <span>{card.tag}</span>
                    </div>

                    {/* Icon Tile */}
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-2xs bg-white text-[#006EDC] border border-[#BFDBFE] group-hover:bg-[#006EDC] group-hover:text-white group-hover:border-[#006EDC]"
                    >
                      <IconComponent className="w-4.5 h-4.5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3
                      className="text-lg sm:text-xl font-black leading-snug tracking-tight text-[#082B61]"
                    >
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] leading-relaxed text-slate-600 mt-2.5 font-medium">
                      {card.description}
                    </p>
                  </div>

                  {/* Bullet Specs */}
                  <div className="mt-5 space-y-2 pt-3.5 border-t border-slate-200/70 font-['JetBrains_Mono',monospace] text-xs">
                    {card.bullets.map((b) => (
                      <div key={b} className="flex items-start gap-2 text-slate-800">
                        <span
                          className="h-1.5 w-1.5 rounded-full shrink-0 mt-1.5 bg-[#006EDC]"
                        />
                        <span className="text-[11.5px] leading-tight font-medium">
                          {b}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Clean Link */}
                  <div className="mt-5 pt-3 border-t border-slate-200/70">
                    <Link
                      href={card.href}
                      className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider font-['JetBrains_Mono',monospace] text-[#006EDC] group-hover:text-[#082B61] transition-colors"
                    >
                      <span>View Service</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>

                {/* Bottom Visual Widget with Real Pharmaceutical Image */}
                <div
                  className="mt-auto w-full h-44 sm:h-48 rounded-2xl overflow-hidden relative border border-[#BFDBFE] shadow-2xs group/img"
                >
                  {/* Background Photo from ASSETS */}
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                  />

                  {/* Subtle gradient overlay at bottom so the pill floats seamlessly */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/35 to-transparent pointer-events-none" />

                  {/* Floating Technical Status Pill */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-white/95 backdrop-blur-md rounded-xl p-2.5 sm:p-3 border border-blue-100/90 shadow-sm font-['JetBrains_Mono',monospace]">
                    <div className="flex items-center justify-between gap-1 mb-1.5">
                      <span className="text-[11px] font-bold text-slate-800 truncate max-w-[120px]">
                        {card.widget.title}
                      </span>
                      <span
                        className="text-[9.5px] font-bold px-2 py-0.5 rounded-full shrink-0 bg-[#006EDC]/10 text-[#006EDC] border border-[#006EDC]/25"
                      >
                        {card.widget.status}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-1 text-[10px] pt-1 border-t border-slate-100">
                      <span className="text-slate-500 font-medium truncate max-w-[120px]">
                        {card.widget.subtitle}
                      </span>
                      <span
                        className="font-bold shrink-0 text-[11px] text-[#006EDC]"
                      >
                        {card.widget.metric}
                      </span>
                    </div>
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
