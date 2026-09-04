"use client";

import React, { useState } from "react";
import SocialCards, { type CardItem } from "@/components/ui/card-fan-carousel";
import { useLanguage } from "@/context/LanguageContext";
import { Search, Layers, Sparkles, ShieldCheck, Activity, Pill, FlaskConical } from "lucide-react";

const CARD_IMAGES = [
  "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=850&fit=crop",
  "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=600&h=850&fit=crop",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=850&fit=crop",
  "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&h=850&fit=crop",
  "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=850&fit=crop",
  "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=600&h=850&fit=crop",
  "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&h=850&fit=crop",
  "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=850&fit=crop",
  "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&h=850&fit=crop",
  "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&h=850&fit=crop",
];

const FLOATING_CHIPS = [
  { label: "Anti-Infectives", count: "60+ SKUs", color: "#006EDC" },
  { label: "Cardiovascular", count: "45+ SKUs", color: "#0284C7" },
  { label: "Gastrointestinal", count: "50+ SKUs", color: "#0D9488" },
  { label: "CNS & Neuro", count: "35+ SKUs", color: "#7C3AED" },
  { label: "Sterile Injections", count: "40+ SKUs", color: "#EA580C" },
  { label: "Analgesics & NSAIDs", count: "30+ SKUs", color: "#2563EB" },
];

export function Categories() {
  const { t } = useLanguage();
  const [search, setSearch] = useState("");

  const therapeuticFanCards: CardItem[] = t.categories.cards.map((card, idx) => ({
    category: card.category,
    title: card.title,
    count: card.count,
    tag: card.tag,
    imgUrl: CARD_IMAGES[idx] || CARD_IMAGES[0],
    alt: card.title,
  }));

  const filteredCards = therapeuticFanCards.filter((c) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      c.title?.toLowerCase().includes(q) ||
      c.category?.toLowerCase().includes(q) ||
      c.tag?.toLowerCase().includes(q)
    );
  });

  const cardsToRender = filteredCards.length > 0 ? filteredCards : therapeuticFanCards;

  return (
    <section
      id="categories"
      className="relative w-full overflow-hidden py-16 sm:py-24 text-[#0B1E48] select-none z-10 font-['Inter',sans-serif] border-b border-blue-100"
      style={{
        background: "linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 40%, #EBF4FE 75%, #F4F8FD 100%)",
      }}
    >
      {/* 20px Pattern Grid with soft blue lines */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 110, 220, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 110, 220, 0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />

      {/* ── Soft Ethereal Sky & Sapphire Aura Lighting ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        {/* Central Luminous Spotlight */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[650px] rounded-full blur-[130px] opacity-45"
          style={{
            background: "radial-gradient(ellipse at center, rgba(56, 189, 248, 0.35) 0%, rgba(0, 110, 220, 0.18) 50%, transparent 75%)",
          }}
        />

        {/* Top-Right Soft Cyan Flare */}
        <div
          className="absolute top-10 right-10 w-[500px] h-[350px] rounded-full blur-[100px] opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(0, 191, 181, 0.3) 0%, transparent 70%)",
          }}
        />

        {/* Bottom-Left Ice Blue Glow */}
        <div
          className="absolute bottom-10 left-10 w-[500px] h-[350px] rounded-full blur-[100px] opacity-35"
          style={{
            background: "radial-gradient(circle, rgba(30, 89, 212, 0.25) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-blue-200/60 gap-6">
          <div className="max-w-2xl">
            
            {/* Top Metadata Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#006EDC]/10 border border-[#006EDC]/25 mb-3.5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#006EDC] animate-pulse" />
              <span className="text-[11px] font-['JetBrains_Mono',monospace] font-bold uppercase tracking-[0.15em] text-[#006EDC]">
                05.00 // THERAPEUTIC FORMULARY
              </span>
            </div>

            {/* Section Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0B1E48] tracking-tight leading-[1.1]">
              Commercial Formulation Categories
            </h2>

            {/* Glowing Accent Gradient Bar */}
            <div className="my-3.5 h-[3.5px] w-16 rounded-full bg-gradient-to-r from-[#006EDC] via-[#38BDF8] to-[#0D9488] shadow-xs" />

            {/* Refined Descriptive Copy */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Engineered for global healthcare systems. Browse over <strong className="font-bold text-[#0B1E48]">800+ approved generic molecules</strong> categorized by therapeutic action, active APIs, stability validation, and specialized dosage delivery formats.
            </p>

            {/* Micro Metadata Indicator Line */}
            <div className="flex flex-wrap items-center gap-3 pt-3 text-[11px] font-['JetBrains_Mono',monospace] text-slate-500 font-semibold">
              <span className="flex items-center gap-1.5 text-[#006EDC]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#006EDC]" />
                WHO-GMP VERIFIED
              </span>
              <span className="text-slate-300">/</span>
              <span className="flex items-center gap-1.5 text-[#0D9488]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
                10+ THERAPEUTIC SPECTRUMS
              </span>
              <span className="text-slate-300">/</span>
              <span className="flex items-center gap-1.5 text-[#7C3AED]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                ZONE IVB STABLE
              </span>
            </div>

          </div>

          {/* Search Bar with Soft Blue Accent */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#006EDC]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by category or molecule..."
              className="w-full pl-10 pr-4 py-2.5 bg-white/95 border border-blue-200/80 rounded-xl text-xs text-[#0B1E48] placeholder:text-slate-400 shadow-sm focus:outline-none focus:border-[#006EDC] focus:ring-2 focus:ring-[#006EDC]/20 transition-all font-medium"
            />
          </div>
        </div>

        {/* ── Category Quick-Filter Chips Bar ── */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8">
          {FLOATING_CHIPS.map((chip, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSearch(chip.label)}
              className="px-3.5 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-blue-100 hover:border-[#006EDC] text-xs font-semibold text-slate-700 hover:text-[#006EDC] shadow-2xs flex items-center gap-2 transition-all cursor-pointer hover:shadow-xs"
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: chip.color }} />
              <span>{chip.label}</span>
              <span className="text-[10px] font-bold font-['JetBrains_Mono',monospace] text-slate-400">
                {chip.count}
              </span>
            </button>
          ))}
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="px-3 py-1.5 rounded-xl bg-blue-100 text-[#006EDC] text-xs font-bold hover:bg-blue-200 transition-colors"
            >
              Clear Filter ✕
            </button>
          )}
        </div>

        {/* ── Glassmorphic Stage Pedestal with Ethereal Soft Blue Glow ── */}
        <div
          className="relative w-full rounded-[32px] sm:rounded-[40px] border border-white/90 bg-white/80 backdrop-blur-2xl p-4 sm:p-8 lg:p-12 shadow-[0_18px_50px_rgba(11,30,72,0.06),0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.92) 0%, rgba(240, 247, 255, 0.8) 50%, rgba(255, 255, 255, 0.9) 100%)",
          }}
        >
          {/* Subtle SVG Orbital Contour Rings in Ice Blue */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40" aria-hidden>
            <svg viewBox="0 0 1000 600" className="w-full h-full">
              <ellipse cx="500" cy="300" rx="430" ry="250" fill="none" stroke="#006EDC" strokeWidth="1" strokeDasharray="6 6" strokeOpacity="0.4" />
              <ellipse cx="500" cy="300" rx="310" ry="175" fill="none" stroke="#38BDF8" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.5" />
              <ellipse cx="500" cy="300" rx="190" ry="105" fill="none" stroke="#006EDC" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.6" />
            </svg>
          </div>

          {/* Background Watermark Tags */}
          <div className="pointer-events-none absolute top-6 left-8 text-[11px] font-['JetBrains_Mono',monospace] font-bold text-slate-400 uppercase tracking-widest">
            ZELNEX // THERAPEUTIC SPECTRUM ARCHIVE
          </div>
          <div className="pointer-events-none absolute top-6 right-8 text-[11px] font-['JetBrains_Mono',monospace] font-bold text-[#006EDC] bg-blue-50 border border-blue-200/60 px-2.5 py-0.5 rounded-md">
            800+ FINISHED FORMULATIONS
          </div>

          {/* Interactive Fan Carousel */}
          <div className="relative z-10 w-full flex justify-center py-6 sm:py-10">
            <SocialCards cards={cardsToRender} />
          </div>

          {/* Bottom Stage Telemetry & Link to High Order Categories Directory */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between border-t border-blue-100/80 pt-5 mt-2 gap-3 text-[11px] font-['JetBrains_Mono',monospace] text-slate-500">
            <div className="flex items-center gap-2 text-slate-700">
              <span className="w-2 h-2 rounded-full bg-[#006EDC]" />
              <span className="font-semibold">100% WHO-GMP &amp; CTD READY (581 APPROVED SKUs)</span>
            </div>
            
            <a
              href="/categories"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#006EDC] hover:bg-[#005bb8] text-white font-bold font-['Outfit',sans-serif] text-xs transition-all shadow-xs hover:shadow-md hover:scale-[1.02] self-start sm:self-auto cursor-pointer"
            >
              <span>Explore Complete 581 Formulation Directory</span>
              <span>→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Categories;
