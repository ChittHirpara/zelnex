"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FlowingVector } from "@/components/FlowingVector";
import { SectionDivider } from "@/components/SectionDivider";
import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowRight,
  ArrowUpRight,
  Plus,
} from "lucide-react";

export default function ServicesPage() {
  const { t } = useLanguage();
  const [openAccordion, setOpenAccordion] = useState<string>("dossiers");

  const pillarCards = [
    {
      id: "regulatory",
      category: t.servicesPage.pillarCards[0]?.category || "DRA & REGULATORY DOSSIERS",
      title: t.servicesPage.pillarCards[0]?.title || "Drug Regulatory Affairs",
      tagline: t.servicesPage.pillarCards[0]?.tagline || "Accelerated MOH Approvals & eCTD Publishing",
      description: t.servicesPage.pillarCards[0]?.description || "",
      processLabel: t.servicesPage.pillarCards[0]?.processLabel || "",
      closingNote: t.servicesPage.pillarCards[0]?.closingNote || "",
      bgGradient: "from-blue-50/90 via-sky-50 to-indigo-50/50",
      orbColor: "rgba(0, 110, 220, 0.35)",
      points: t.servicesPage.pillarCards[0]?.points || [],
      badge: t.servicesPage.pillarCards[0]?.badge || "[eCTD Modules 1-5]",
    },
    {
      id: "third-party",
      category: t.servicesPage.pillarCards[1]?.category || "WHO-GMP 3RD PARTY MANUFACTURING",
      title: t.servicesPage.pillarCards[1]?.title || "3rd Party Manufacturing",
      tagline: t.servicesPage.pillarCards[1]?.tagline || "End-to-End Generic Production & International Export",
      description: t.servicesPage.pillarCards[1]?.description || "",
      processLabel: t.servicesPage.pillarCards[1]?.processLabel || "Process for 3rd Party Manufacturing:",
      closingNote: t.servicesPage.pillarCards[1]?.closingNote || "",
      bgGradient: "from-teal-50/90 via-sky-50 to-indigo-50/50",
      orbColor: "rgba(0, 138, 138, 0.35)",
      points: t.servicesPage.pillarCards[1]?.points || [],
      badge: t.servicesPage.pillarCards[1]?.badge || "[WHO-GMP Certified]",
    },
    {
      id: "contract",
      category: t.servicesPage.pillarCards[2]?.category || "SCALE & BATCH CAPACITY",
      title: t.servicesPage.pillarCards[2]?.title || "Contract Manufacturing",
      tagline: t.servicesPage.pillarCards[2]?.tagline || "Scalable Automated Batch Output",
      description: t.servicesPage.pillarCards[2]?.description || "",
      processLabel: t.servicesPage.pillarCards[2]?.processLabel || "",
      closingNote: t.servicesPage.pillarCards[2]?.closingNote || "",
      bgGradient: "from-indigo-50/90 via-slate-50 to-teal-50/50",
      orbColor: "rgba(30, 58, 138, 0.35)",
      points: t.servicesPage.pillarCards[2]?.points || [],
      badge: t.servicesPage.pillarCards[2]?.badge || "[400M+ Annual Units]",
    },
    {
      id: "generics",
      category: t.servicesPage.pillarCards[3]?.category || "GLOBAL FINISHED FORMULATIONS",
      title: t.servicesPage.pillarCards[3]?.title || "Generic Medicines",
      tagline: t.servicesPage.pillarCards[3]?.tagline || "Comprehensive Multi-Therapeutic Portfolio",
      description: t.servicesPage.pillarCards[3]?.description || "",
      processLabel: t.servicesPage.pillarCards[3]?.processLabel || "",
      closingNote: t.servicesPage.pillarCards[3]?.closingNote || "",
      bgGradient: "from-emerald-50/90 via-teal-50 to-blue-50/50",
      orbColor: "rgba(16, 185, 129, 0.35)",
      points: t.servicesPage.pillarCards[3]?.points || [],
      badge: t.servicesPage.pillarCards[3]?.badge || "[14+ Therapeutic Classes]",
    },
  ];

  const accordionServices = t.servicesPage.accordionServices.map((svc, idx) => ({
    id: ["dossiers", "contract-mfg", "third-party-mfg", "generic-supply", "capacities-matrix"][idx] || `service-${idx}`,
    number: `0${idx + 1}`,
    title: svc.title,
    tag: svc.tag,
    summary: svc.summary,
    details: svc.details,
  }));

  return (
    <div className="min-h-screen bg-[#FCFBF9] text-[#111111] antialiased selection:bg-[#006EDC] selection:text-white relative">
      {/* ── Global Styles & Fonts ── */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600;1,700;1,900&family=Syne:wght@600;700;800&display=swap');

        :root {
          --ease-premium: cubic-bezier(0.22, 1, 0.36, 1);
        }

        .font-playfair {
          font-family: 'Playfair Display', Georgia, serif;
        }

        .font-jetbrains {
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: 0.3em;
        }

        .font-syne {
          font-family: 'Syne', sans-serif;
        }

        /* 30s Infinite Linear Mesh Drift */
        @keyframes meshDrift {
          0% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.15) rotate(180deg);
          }
          100% {
            transform: scale(1) rotate(360deg);
          }
        }

        .animate-mesh-drift {
          animation: meshDrift 30s linear infinite;
        }

        /* Wave Transition Container */
        .wave-container {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 22vh;
          overflow: hidden;
          pointer-events: none;
        }

        /* Button Pulse Animation */
        @keyframes pulseGlow {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 20px rgba(0, 110, 220, 0.35);
          }
          50% {
            transform: scale(1.02);
            box-shadow: 0 0 35px rgba(0, 110, 220, 0.6);
          }
        }

        .animate-pulse-glow {
          animation: pulseGlow 3s var(--ease-premium) infinite;
        }
      `}</style>

      {/* ── Global Site Navbar (with official logo & Get in Touch glass button) ── */}
      <Navbar />

      {/* ════════════════════════════════════════════════════════════════════
          1. HERO SECTION (Atmospheric Royal Navy, Drifting Mesh, Seamless Wave)
         ════════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-b from-[#071530] via-[#0B1E48] to-[#04112B] text-white flex flex-col justify-between pt-32 sm:pt-40 overflow-hidden">
        {/* Drifting Radial Glow Spheres */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-60">
          <div
            className="absolute top-1/4 left-1/4 w-[650px] h-[650px] rounded-full blur-[130px] animate-mesh-drift -z-10"
            style={{
              background:
                "radial-gradient(circle, rgba(0, 110, 220, 0.4) 0%, rgba(0, 138, 138, 0.25) 50%, transparent 75%)",
            }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] rounded-full blur-[120px] animate-mesh-drift -z-10"
            style={{
              background:
                "radial-gradient(circle, rgba(121, 40, 202, 0.25) 0%, rgba(0, 110, 220, 0.2) 60%, transparent 80%)",
              animationDirection: "reverse",
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center px-4 sm:px-8 z-10">
          {/* Header Label Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-300 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-jetbrains text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em]">
              {t.servicesPage.badge}
            </span>
          </div>

          {/* Large Serif & Display Headline */}
          <h1
            className="font-playfair text-white font-normal tracking-tight leading-[0.92] mb-6"
            style={{ fontSize: "clamp(2.6rem, 7.5vw, 6rem)" }}
          >
            {t.servicesPage.heroTitle}
          </h1>

          {/* Subheading */}
          <p className="font-inter text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed mb-10">
            {t.servicesPage.heroSubtitle}
          </p>

          {/* Quick Metrics Ribbon */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl mb-10 text-left">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-white/20 transition-colors">
              <div className="font-jetbrains text-[10px] text-slate-400 uppercase">
                {t.servicesPage.metrics.m1Label}
              </div>
              <div className="font-syne text-lg sm:text-xl font-bold text-cyan-300 mt-1">
                {t.servicesPage.metrics.m1Val}
              </div>
            </div>
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-white/20 transition-colors">
              <div className="font-jetbrains text-[10px] text-slate-400 uppercase">
                {t.servicesPage.metrics.m2Label}
              </div>
              <div className="font-syne text-lg sm:text-xl font-bold text-teal-300 mt-1">
                {t.servicesPage.metrics.m2Val}
              </div>
            </div>
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-white/20 transition-colors">
              <div className="font-jetbrains text-[10px] text-slate-400 uppercase">
                {t.servicesPage.metrics.m3Label}
              </div>
              <div className="font-syne text-lg sm:text-xl font-bold text-indigo-300 mt-1">
                {t.servicesPage.metrics.m3Val}
              </div>
            </div>
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-white/20 transition-colors">
              <div className="font-jetbrains text-[10px] text-slate-400 uppercase">
                {t.servicesPage.metrics.m4Label}
              </div>
              <div className="font-syne text-lg sm:text-xl font-bold text-emerald-300 mt-1">
                {t.servicesPage.metrics.m4Val}
              </div>
            </div>
          </div>

          {/* Primary Action Button */}
          <div className="mb-14 sm:mb-16">
            <a
              href="#pillars"
              className="animate-pulse-glow inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-white font-jetbrains text-xs uppercase tracking-[0.3em] font-bold shadow-xl transition-transform hover:scale-105 active:scale-95 cursor-pointer"
              style={{ background: "linear-gradient(135deg, #006EDC 0%, #082B61 100%)" }}
            >
              <span>{t.servicesPage.exploreBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* ── SECTION DIVIDER FROM HERO (Dark Navy -> Light Cream) ── */}
        <SectionDivider from="#04112B" to="#FCFBF9" height={72} />
      </section>

      {/* ── FLOWING BOTANICAL VECTOR WRAPPER (Connecting Sections) ── */}
      <div id="vector-wrapper" className="relative overflow-hidden bg-[#FCFBF9]">
        <FlowingVector />

        {/* ════════════════════════════════════════════════════════════════════
            2. WORK / CAPABILITIES GRID (Staggered 2-Column Cards with Intelligent Hover)
           ════════════════════════════════════════════════════════════════════ */}
        <section id="pillars" className="py-20 sm:py-32 px-4 sm:px-8 max-w-[1340px] mx-auto scroll-mt-20 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#DCDCD2]">
            <div>
              <span className="font-jetbrains text-xs text-[#006EDC] uppercase block mb-2 font-bold">
                {t.servicesPage.pillarsBadge}
              </span>
              <h2 className="font-playfair text-3xl sm:text-5xl font-normal text-[#111111] tracking-tight">
                {t.servicesPage.pillarsTitle}
              </h2>
            </div>

            <p className="font-inter text-xs sm:text-sm text-neutral-500 max-w-sm mt-4 md:mt-0 leading-relaxed">
              {t.servicesPage.pillarsSubtitle}
            </p>
          </div>

          {/* 2-Column Staggered Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {pillarCards.map((card, idx) => {
              const isStaggered = idx % 2 === 1;
              return (
                <div
                  key={card.id}
                  className={`flex flex-col ${isStaggered ? "md:mt-16" : ""}`}
                >
                  {/* ── INTELLIGENT CARD HOVER CONTAINER ── */}
                  <div className="group relative min-h-[440px] sm:min-h-[460px] rounded-3xl overflow-hidden border border-[#DCDCD2] bg-white transition-all duration-700 [transition-timing-function:var(--ease-premium)] hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,110,220,0.1)] cursor-pointer flex flex-col justify-between">
                    {/* Inner Scaled Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} transition-transform duration-700 [transition-timing-function:var(--ease-premium)] group-hover:scale-110`}
                    />

                    {/* Blurred Color Orb Center */}
                    <div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full blur-3xl opacity-60 pointer-events-none transition-opacity duration-700 group-hover:opacity-90"
                      style={{ background: card.orbColor }}
                    />

                    {/* Content Overlay */}
                    <div className="relative h-full p-7 sm:p-9 flex flex-col justify-between z-10 space-y-5">
                      {/* Top Badges */}
                      <div className="flex items-center justify-between">
                        <span className="font-jetbrains text-[10px] sm:text-xs text-[#006EDC] bg-white/90 backdrop-blur-sm px-3.5 py-1 rounded-full border border-[#006EDC]/20 font-bold shadow-xs">
                          {card.badge}
                        </span>
                        <span className="font-jetbrains text-xs text-neutral-400 font-bold">
                          0{idx + 1}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <div className="space-y-1.5">
                        <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[#111111]">
                          {card.title}
                        </h3>
                        <p className="font-inter text-xs sm:text-sm text-neutral-600 font-medium">
                          {card.tagline}
                        </p>
                      </div>

                      {/* Optional Description paragraph */}
                      {card.description ? (
                        <p className="font-inter text-xs sm:text-[13px] text-neutral-600 leading-relaxed border-t border-black/5 pt-3">
                          {card.description}
                        </p>
                      ) : null}

                      {/* Detailed Technical Points List */}
                      <div className="space-y-2 pt-2 border-t border-black/5">
                        {/* Optional process label */}
                        {card.processLabel ? (
                          <p className="font-inter text-xs font-bold text-[#111111] mb-2">{card.processLabel}</p>
                        ) : null}
                        {card.points.map((pt, pIndex) => (
                          <div key={pIndex} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#006EDC] shrink-0 mt-1.5" />
                            <span className="font-inter text-xs sm:text-[13px] text-neutral-700 leading-relaxed font-normal">
                              {pt}
                            </span>
                          </div>
                        ))}
                        {/* Optional closing note */}
                        {card.closingNote ? (
                          <p className="font-inter text-[11px] text-neutral-500 italic leading-relaxed pt-2 border-t border-black/5">
                            {card.closingNote}
                          </p>
                        ) : null}
                      </div>

                      {/* Action Pill revealing on hover */}
                      <div className="pt-2 flex justify-end opacity-0 translate-y-4 transition-all duration-500 [transition-timing-function:var(--ease-premium)] group-hover:opacity-100 group-hover:translate-y-0">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B1E48] text-white font-jetbrains text-[10px] font-bold uppercase tracking-[0.25em] shadow-md">
                          <span>View Details</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Metadata Below Card */}
                  <div className="mt-4 pt-3 border-t border-[#DCDCD2] flex items-center justify-between">
                    <span className="font-playfair italic text-base sm:text-lg text-[#111111] font-semibold">
                      {card.title}
                    </span>
                    <span className="font-jetbrains text-[10px] text-neutral-500 uppercase">
                      {card.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            3. SERVICE ACCORDION (Two-Column Split, Sticky Left Header)
           ════════════════════════════════════════════════════════════════════ */}
        <section className="py-20 sm:py-32 px-4 sm:px-8 max-w-[1340px] mx-auto border-t border-[#DCDCD2] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Sticky Header */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-5">
              <span className="font-jetbrains text-xs text-[#006EDC] uppercase block font-bold">
                {t.servicesPage.coreBadge}
              </span>

              <h2 className="font-playfair text-3xl sm:text-5xl font-normal text-[#111111] tracking-tight leading-[1.05]">
                {t.servicesPage.coreTitle}
              </h2>

              <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-md">
                {t.servicesPage.coreSubtitle}
              </p>

              <div className="pt-2">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 text-xs font-jetbrains uppercase tracking-[0.3em] text-[#006EDC] hover:text-[#0B1E48] transition-colors font-bold group"
                >
                  <span>{t.servicesPage.requestDeck}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>

            {/* Right Interactive Accordion */}
            <div className="lg:col-span-7 divide-y divide-[#DCDCD2]">
              {accordionServices.map((item) => {
                const isOpen = openAccordion === item.id;
                return (
                  <div key={item.id} className="py-7 first:pt-0 last:pb-0">
                    <button
                      type="button"
                      onClick={() => setOpenAccordion(isOpen ? "" : item.id)}
                      className="w-full flex items-center justify-between text-left group cursor-pointer"
                    >
                      <div className="flex items-baseline gap-4 sm:gap-6">
                        <span className="font-jetbrains text-xs text-neutral-400 font-bold">
                          {item.number}
                        </span>
                        <h3
                          className={`font-playfair text-xl sm:text-2xl transition-colors duration-500 [transition-timing-function:var(--ease-premium)] ${
                            isOpen
                              ? "text-[#006EDC] font-bold italic"
                              : "text-neutral-500 group-hover:text-[#111111]"
                          }`}
                        >
                          {item.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="hidden sm:inline font-jetbrains text-[10px] text-neutral-400 uppercase">
                          {item.tag}
                        </span>
                        <div
                          className={`w-7 h-7 rounded-full border border-[#DCDCD2] flex items-center justify-center transition-transform duration-500 [transition-timing-function:var(--ease-premium)] ${
                            isOpen ? "rotate-45 bg-[#0B1E48] text-white border-[#0B1E48]" : "text-neutral-600 group-hover:border-black"
                          }`}
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </button>

                    {/* Expanding Accordion Body */}
                    <div
                      className={`grid transition-all duration-700 [transition-timing-function:var(--ease-premium)] ${
                        isOpen ? "grid-rows-[1fr] opacity-100 mt-5" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden space-y-3.5 pl-8 sm:pl-10">
                        <p className="font-inter text-xs sm:text-sm text-neutral-700 leading-relaxed">
                          {item.summary}
                        </p>

                        <div className="space-y-2 pt-2">
                          {item.details.map((point, pIdx) => (
                            <div
                              key={pIdx}
                              className="flex items-start gap-2.5 font-inter text-xs text-neutral-600"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#006EDC] shrink-0 mt-1.5" />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* ── SECTION DIVIDER TO FOOTER (Cream -> Dark Navy) ── */}
      <SectionDivider from="#FCFBF9" to="#071530" flip height={72} />

      {/* ── Global Site Footer ── */}
      <Footer />
    </div>
  );
}
