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
  ArrowRight,
  Sparkles,
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
      className="relative scroll-mt-24 py-16 sm:py-24 overflow-hidden bg-[#F8FAFC] border-b border-slate-200/80 z-10 select-none font-[family-name:var(--font-montserrat)]"
    >
      {/* Soft Ambient Glows matching site theme */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[350px] rounded-full blur-[130px] opacity-25 bg-[#006EDC]" />
      <div className="pointer-events-none absolute bottom-0 right-10 w-[500px] h-[250px] rounded-full blur-[100px] opacity-15 bg-[#00A0A2]" />

      <div className="relative z-20 mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Zelnex Theme */}
        <div className="expertise-header max-w-3xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#006EDC]/20 bg-blue-50/70 rounded-full w-fit mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#006EDC]" />
            <span className="text-[11px] font-[family-name:var(--font-outfit)] font-bold tracking-[0.14em] uppercase text-[#006EDC]">
              CORE CAPABILITIES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#082B61] tracking-tight leading-[1.14] mb-4 font-[family-name:var(--font-outfit)]">
            Capabilities That Power <span className="text-[#006EDC]">Global Supply</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl font-normal font-[family-name:var(--font-montserrat)]">
            From regulatory dossier readiness to contract manufacturing and finished generics, Zelnex is built for scalable, compliant collaboration across 10+ international markets.
          </p>
        </div>

        {/* ── 4 Capabilities Pillar Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {EXPERTISE_CARDS.map((card) => {
            const IconComponent = card.icon;

            return (
              <div
                key={card.title}
                className="expertise-card group relative rounded-[24px] sm:rounded-[28px] bg-white border border-slate-200/90 hover:border-[#006EDC]/60 p-6 sm:p-7 flex flex-col justify-between gap-6 h-full shadow-[0_4px_24px_rgba(8,43,97,0.06)] hover:shadow-[0_16px_36px_rgba(8,43,97,0.12)] transition-all duration-300 select-none hover:-translate-y-1"
              >
                {/* Top Content Group */}
                <div className="flex flex-col w-full">
                  
                  {/* Top Row: Pill Tag Badge + Icon */}
                  <div className="flex items-center justify-between mb-4">
                    
                    {/* Top Pill Tag Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50/80 border border-blue-200/70 text-[#006EDC] font-[family-name:var(--font-outfit)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#006EDC]" />
                      <span>{card.tag}</span>
                    </div>

                    {/* Icon Tile */}
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 bg-blue-50/80 text-[#006EDC] border border-blue-200/70 group-hover:bg-[#006EDC] group-hover:text-white group-hover:border-[#006EDC] shadow-2xs">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold leading-snug tracking-tight text-[#082B61] font-[family-name:var(--font-outfit)] group-hover:text-[#006EDC] transition-colors duration-200">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] leading-relaxed text-slate-600 mt-2.5 font-[family-name:var(--font-montserrat)] font-normal">
                      {card.description}
                    </p>
                  </div>

                  {/* Bullet Specs */}
                  <div className="mt-5 space-y-2 pt-3.5 border-t border-slate-200/70 text-xs font-[family-name:var(--font-montserrat)]">
                    {card.bullets.map((b) => (
                      <div key={b} className="flex items-start gap-2 text-slate-700">
                        <span className="h-1.5 w-1.5 rounded-full shrink-0 mt-1.5 bg-[#006EDC]" />
                        <span className="text-[12px] leading-tight font-medium">
                          {b}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Clean Link */}
                  <div className="mt-5 pt-3 border-t border-slate-200/70">
                    <Link
                      href={card.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider font-[family-name:var(--font-outfit)] text-[#006EDC] group-hover:text-[#082B61] transition-colors"
                    >
                      <span>View Service</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Bottom Visual Widget with Real Pharmaceutical Image */}
                <div className="mt-auto w-full h-44 sm:h-48 rounded-2xl overflow-hidden relative border border-slate-200/80 shadow-2xs group/img">
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
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-white/95 backdrop-blur-md rounded-xl p-2.5 sm:p-3 border border-blue-100/90 shadow-sm font-[family-name:var(--font-outfit)]">
                    <div className="flex items-center justify-between gap-1 mb-1.5">
                      <span className="text-[11.5px] font-bold text-[#082B61] truncate max-w-[130px]">
                        {card.widget.title}
                      </span>
                      <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full shrink-0 bg-[#006EDC]/10 text-[#006EDC] border border-[#006EDC]/25">
                        {card.widget.status}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-1 text-[10.5px] pt-1 border-t border-slate-100">
                      <span className="text-slate-500 font-medium truncate max-w-[130px]">
                        {card.widget.subtitle}
                      </span>
                      <span className="font-bold shrink-0 text-[11.5px] text-[#006EDC]">
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
