"use client";

import React, { useState } from "react";
import SocialCards, { type CardItem } from "@/components/ui/card-fan-carousel";
import { useLanguage } from "@/context/LanguageContext";
import { Search } from "lucide-react";

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
    return (
      (c.title && c.title.toLowerCase().includes(search.toLowerCase())) ||
      (c.category && c.category.toLowerCase().includes(search.toLowerCase())) ||
      (c.tag && c.tag.toLowerCase().includes(search.toLowerCase()))
    );
  });

  const cardsToRender = filteredCards.length > 0 ? filteredCards : therapeuticFanCards;

  return (
    <section
      id="categories"
      className="relative w-full overflow-hidden py-14 sm:py-18 md:py-24 text-slate-100 select-none z-10"
      style={{
        background: "linear-gradient(180deg, #164e96 0%, #113f7c 50%, #0d3063 100%)",
      }}
    >
      {/* ── Radiant Luminous Cyan & Sky Blue Ambient Lighting Flares ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        {/* Soft Cyan/Sky Glow Top-Left */}
        <div
          className="absolute -top-16 -left-16 w-[560px] h-[560px] rounded-full blur-[100px] opacity-45"
          style={{
            background: "radial-gradient(circle, #38bdf8 0%, #0284c7 50%, transparent 70%)",
          }}
        />

        {/* Soft Blue Glow Bottom-Right */}
        <div
          className="absolute -bottom-20 -right-20 w-[600px] h-[600px] rounded-full blur-[110px] opacity-40"
          style={{
            background: "radial-gradient(circle, #00b8f2 0%, #006edc 50%, transparent 70%)",
          }}
        />

        {/* Central Luminous Highlight behind Fan Carousel */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] rounded-full blur-[100px] opacity-35"
          style={{
            background: "radial-gradient(ellipse at center, rgba(56, 189, 248, 0.6) 0%, rgba(2, 132, 199, 0.25) 50%, transparent 75%)",
          }}
        />

        {/* Subtle Engineering Grid Texture */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.6) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.6) 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Status Pill */}
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-white/15 px-3.5 py-1 text-[11px] font-bold text-cyan-200 backdrop-blur-md shadow-sm">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_8px_#38bdf8] animate-pulse" />
            <span>{t.categories.badge}</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {t.categories.title}
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-cyan-50/90 max-w-xl leading-relaxed font-normal">
            {t.categories.subtitle}
          </p>

          {/* Search Input */}
          <div className="mt-4 w-full max-w-sm">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-3 h-3.5 w-3.5 text-cyan-200/90" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t.categories.searchPlaceholder}
                className="w-full rounded-full bg-white/15 border border-white/25 px-3.5 py-2 pl-9 text-xs text-white placeholder:text-cyan-100/60 outline-none backdrop-blur-xl shadow-sm focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/30 transition-all"
              />
            </div>
          </div>
        </div>

        {/* ── Elastic Card Fan Carousel ── */}
        <div className="mt-6 sm:mt-8 w-full flex justify-center">
          <SocialCards cards={cardsToRender} />
        </div>
      </div>
    </section>
  );
}
