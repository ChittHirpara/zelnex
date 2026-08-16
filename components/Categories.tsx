"use client";

import React, { useState } from "react";
import SocialCards, { type CardItem } from "@/components/ui/card-fan-carousel";
import { Search } from "lucide-react";

export const THERAPEUTIC_FAN_CARDS: CardItem[] = [
  {
    category: "Broad Spectrum",
    title: "Antibiotics & Anti-Infectives",
    count: "60+ Products",
    tag: "Critical Care",
    imgUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=850&fit=crop",
    alt: "Antibiotics and Capsules Production",
  },
  {
    category: "Cardiology",
    title: "Cardiac & Cardiovascular Care",
    count: "45+ Products",
    tag: "Life Saving",
    imgUrl: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=600&h=850&fit=crop",
    alt: "Cardiology & Vascular Formulations",
  },
  {
    category: "Neurology",
    title: "CNS & Neuro-Psychiatry",
    count: "38+ Products",
    tag: "Specialty",
    imgUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=850&fit=crop",
    alt: "Neurological & Psychiatric Research",
  },
  {
    category: "Bone & Joint",
    title: "Orthopedic & Musculoskeletal",
    count: "32+ Products",
    tag: "Analgesics",
    imgUrl: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&h=850&fit=crop",
    alt: "Orthopedic Formulations",
  },
  {
    category: "Digestive Health",
    title: "Gastrointestinal & Acid Control",
    count: "50+ Products",
    tag: "High Volume",
    imgUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=850&fit=crop",
    alt: "Gastrointestinal Tablets & Syrups",
  },
  {
    category: "Pulmonology",
    title: "Respiratory & Anti-Allergy",
    count: "36+ Products",
    tag: "Seasonal Care",
    imgUrl: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=600&h=850&fit=crop",
    alt: "Respiratory Inhalers & Syrups",
  },
  {
    category: "Endocrinology",
    title: "Diabetic & Metabolic Therapy",
    count: "35+ Products",
    tag: "Chronic Care",
    imgUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&h=850&fit=crop",
    alt: "Diabetic & Metabolic Care",
  },
  {
    category: "Dermatology",
    title: "Derma & Topical Formulations",
    count: "30+ Products",
    tag: "Topical Care",
    imgUrl: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=850&fit=crop",
    alt: "Dermatology Creams & Gels",
  },
  {
    category: "Sterile Production",
    title: "Critical Care & IV Injectables",
    count: "40+ Products",
    tag: "Hospital Supply",
    imgUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&h=850&fit=crop",
    alt: "Sterile Liquid Vials & Ampoules",
  },
  {
    category: "Wellness",
    title: "Nutraceuticals & Bioactives",
    count: "25+ Products",
    tag: "Daily Health",
    imgUrl: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&h=850&fit=crop",
    alt: "Nutraceutical Softgels & Tablets",
  },
];

export function Categories() {
  const [search, setSearch] = useState("");

  const filteredCards = THERAPEUTIC_FAN_CARDS.filter((c) => {
    return (
      (c.title && c.title.toLowerCase().includes(search.toLowerCase())) ||
      (c.category && c.category.toLowerCase().includes(search.toLowerCase())) ||
      (c.tag && c.tag.toLowerCase().includes(search.toLowerCase()))
    );
  });

  const cardsToRender = filteredCards.length > 0 ? filteredCards : THERAPEUTIC_FAN_CARDS;

  return (
    <section
      id="categories"
      className="relative w-full overflow-hidden py-10 sm:py-14 md:py-16 text-slate-200 select-none"
      style={{
        background: "radial-gradient(ellipse 90% 70% at 50% 15%, #081d45 0%, #040d22 55%, #020712 100%)",
      }}
    >
      {/* ── Black, Blue & White Ambient Lighting Atmosphere ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        {/* Cyan-Blue Glow Top-Left */}
        <div
          className="absolute -top-20 -left-20 w-[540px] h-[540px] rounded-full blur-[100px] opacity-40"
          style={{
            background: "radial-gradient(circle, #00b8f2 0%, #006edc 45%, transparent 70%)",
          }}
        />

        {/* Deep Sapphire Glow Bottom-Right */}
        <div
          className="absolute -bottom-24 -right-24 w-[600px] h-[600px] rounded-full blur-[110px] opacity-40"
          style={{
            background: "radial-gradient(circle, #082b61 0%, #031538 50%, transparent 70%)",
          }}
        />

        {/* Central Luminous Cyan-White Ellipse */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] rounded-full blur-[110px] opacity-30"
          style={{
            background: "radial-gradient(ellipse at center, rgba(0, 242, 254, 0.35) 0%, rgba(0, 110, 220, 0.2) 50%, transparent 75%)",
          }}
        />

        {/* Subtle Grid Texture */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 90% 65% at 50% 40%, #000 20%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 90% 65% at 50% 40%, #000 20%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Compact Header ── */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Status Pill */}
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-900/25 px-3 py-0.5 text-[11px] font-medium text-cyan-300 backdrop-blur-md shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f2fe]" />
            <span>Interactive Formulary · 800+ Formulations</span>
          </div>

          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            Therapeutic segments that{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(110deg, #ffffff 0%, #7dd3fc 45%, #00b8f2 100%)",
              }}
            >
              lead the world.
            </span>
          </h2>

          <p className="mt-1.5 text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
            Hover and swipe across our certified pharmaceutical portfolios. WHO-GMP accredited facilities with full eCTD registration dossiers.
          </p>

          {/* Search Input */}
          <div className="mt-3.5 w-full max-w-sm">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-2.5 h-3.5 w-3.5 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search category or therapeutic specialty..."
                className="w-full rounded-full bg-white/[0.08] border border-white/15 px-3.5 py-1.5 pl-9 text-xs text-white placeholder:text-slate-400 outline-none backdrop-blur-xl focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all shadow-inner"
              />
            </div>
          </div>
        </div>

        {/* ── Compact Elastic Card Fan Carousel ── */}
        <div className="mt-4 sm:mt-6 w-full flex justify-center">
          <SocialCards cards={cardsToRender} />
        </div>
      </div>
    </section>
  );
}
