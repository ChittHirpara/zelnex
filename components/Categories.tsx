"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import SocialCards, { type CardItem } from "@/components/ui/card-fan-carousel";
import { useLanguage } from "@/context/LanguageContext";
import { Search, X, AlertCircle } from "lucide-react";
import { PHARMACEUTICAL_PORTFOLIO } from "@/data/pharmaceuticalPortfolio";

const CARD_IMAGES = [
  "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&h=850&fit=crop", // Anti-Infectives
  "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=850&fit=crop", // Pain Management
  "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=850&fit=crop", // Gastrointestinal
  "/categories/dermatology.jpg", // Dermatology & Topical (Minimal White Cream Tube)
  "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=600&h=850&fit=crop", // Respiratory & Allergy
  "/categories/cardiovascular.jpg", // Cardiovascular & Lipid Care (Red & White Cardiac Tablets)
  "/categories/urology.jpg", // Urology & Nephrology (Amber Clinical Dropper Bottle)
  "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=600&h=850&fit=crop", // Vitamins & Minerals (Multivitamin Capsules)
  "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&h=850&fit=crop", // General Therapeutics
  "/categories/neurology.jpg", // Neurology & CNS (Purple/Silver Neuro Capsules)
  "/categories/diabetes.jpg", // Diabetes & Metabolic Care (Emerald Cap Glass Medical Vial)
  "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&h=850&fit=crop", // Endocrine & Hormonal
  "https://images.unsplash.com/photo-1579165466791-78818928580a?w=600&h=850&fit=crop", // Hematology & Supportive Care
];

const CATEGORY_SLUGS = [
  "anti-infectives",
  "pain-musculoskeletal",
  "gastrointestinal",
  "dermatology-topical",
  "respiratory-anti-allergic",
  "cardiovascular",
  "urology-nephrology",
  "vitamins-minerals-nutraceuticals",
  "general-therapeutics",
  "neurology-psychiatry",
  "diabetes-metabolic",
  "endocrine-hormonal",
  "hematology-supportive",
];

const FLOATING_CHIPS = [
  { label: "Anti-Infectives", count: "85 Products", color: "#006EDC" },
  { label: "Pain Management", count: "58 Products", color: "#2563EB" },
  { label: "Gastrointestinal", count: "44 Products", color: "#0D9488" },
  { label: "Dermatology & Topical", count: "41 Products", color: "#E11D48" },
  { label: "Respiratory & Allergy", count: "31 Products", color: "#0284C7" },
  { label: "Cardiovascular", count: "28 Products", color: "#082B61" },
  { label: "Urology & Nephrology", count: "18 Products", color: "#7C3AED" },
  { label: "Vitamins & Minerals", count: "16 Products", color: "#D97706" },
  { label: "General Therapeutics", count: "14 Products", color: "#475569" },
  { label: "Neurology & CNS", count: "11 Products", color: "#9333EA" },
  { label: "Diabetes & Metabolic Care", count: "5 Products", color: "#059669" },
  { label: "Endocrine & Hormonal", count: "3 Products", color: "#D946EF" },
  { label: "Hematology & Supportive Care", count: "1 Product", color: "#6366F1" },
];

export function Categories() {
  const { t } = useLanguage();
  const [search, setSearch] = useState("");

  const therapeuticFanCards: CardItem[] = useMemo(() => {
    return t.categories.cards.map((card, idx) => ({
      category: card.category,
      title: card.title,
      count: card.count,
      tag: card.tag,
      imgUrl: CARD_IMAGES[idx] || CARD_IMAGES[0],
      alt: card.title,
      linkUrl: `/products?category=${CATEGORY_SLUGS[idx] || "anti-infectives"}`,
    }));
  }, [t.categories.cards]);

  // Comprehensive index mapping cards with full molecules, ingredients, compositions, and dosage forms
  const searchableIndex = useMemo(() => {
    return therapeuticFanCards.map((card, idx) => {
      const slug = CATEGORY_SLUGS[idx];
      const portfolioCat = PHARMACEUTICAL_PORTFOLIO.find((p) => p.slug === slug);

      const moleculeSet = new Set<string>();
      if (portfolioCat) {
        portfolioCat.keyMolecules.forEach((m) => moleculeSet.add(m.toLowerCase()));
        portfolioCat.products.forEach((p) => {
          if (p.moleculeGroup) moleculeSet.add(p.moleculeGroup.toLowerCase());
          if (p.composition) moleculeSet.add(p.composition.toLowerCase());
          if (p.dosage) moleculeSet.add(p.dosage.toLowerCase());
          if (p.dosageForm) moleculeSet.add(p.dosageForm.toLowerCase());
        });
        portfolioCat.dosageForms.forEach((d) => moleculeSet.add(d.toLowerCase()));
      }

      return {
        card,
        slug,
        chipLabel: FLOATING_CHIPS[idx]?.label?.toLowerCase() || "",
        title: (card.title || "").toLowerCase(),
        category: (card.category || "").toLowerCase(),
        tag: (card.tag || "").toLowerCase(),
        portfolioName: (portfolioCat?.name || "").toLowerCase(),
        portfolioDesc: (portfolioCat?.description || "").toLowerCase(),
        molecules: Array.from(moleculeSet),
      };
    });
  }, [therapeuticFanCards]);

  // Precision search filtering with word boundaries to eliminate duplicate/cross-category collisions
  const filteredCards = useMemo(() => {
    const raw = search.trim();
    if (!raw) return therapeuticFanCards;
    const q = raw.toLowerCase();
    const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    return searchableIndex
      .filter((item) => {
        // 1. Direct slug or chip exact match
        if (item.slug === q || item.slug.replace(/-/g, " ") === q) return true;
        if (item.chipLabel === q) return true;

        // 2. Direct exact or word-boundary match against category, title, portfolioName, tag, chip
        const titleTokens = [item.title, item.category, item.portfolioName, item.tag, item.chipLabel];
        for (const text of titleTokens) {
          if (!text) continue;
          if (text === q || text.startsWith(q)) return true;
          const wordBoundary = new RegExp(`(^|\\s|[-&/,])${escapeRegex(q)}($|\\s|[-&/,])`, "i");
          if (wordBoundary.test(text)) return true;
        }

        // 3. Match across molecules and compositions (generic active molecules)
        if (q.length >= 3) {
          const hasMolecule = item.molecules.some((m) => {
            if (m === q || m.startsWith(q)) return true;
            const wordBoundary = new RegExp(`(^|\\s|[-&/,+])${escapeRegex(q)}`, "i");
            if (wordBoundary.test(m)) return true;
            if (m.length >= 4 && q.includes(m)) return true;
            return false;
          });
          if (hasMolecule) return true;
        }

        // 4. Multi-word query matching (e.g. "pain relief", "acid control", "cns neuro")
        const words = q.split(/[\s&,/+-]+/).filter((w) => w.length >= 3);
        if (words.length > 1) {
          const allWordsMatch = words.every((word) => {
            const wordRegex = new RegExp(`(^|\\s|[-&/,])${escapeRegex(word)}`, "i");
            const inTitles = titleTokens.some((t) => wordRegex.test(t));
            if (inTitles) return true;
            return item.molecules.some((m) => wordRegex.test(m));
          });
          if (allWordsMatch) return true;
        }

        return false;
      })
      .map((item) => item.card);
  }, [search, searchableIndex, therapeuticFanCards]);

  return (
    <section
      id="categories"
      className="relative w-full overflow-hidden py-16 sm:py-24 text-[#0B1E48] select-none z-10 font-['Inter',sans-serif] bg-[#FAFCFF] border-y border-blue-100/80 shadow-[0_10px_40px_rgba(8,43,97,0.03)]"
    >
      {/* Soft Ambient Glows — Blue & White Theme */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[850px] h-[340px] rounded-full blur-[130px] opacity-20 bg-[#006EDC]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-10 w-[550px] h-[260px] rounded-full blur-[110px] opacity-15 bg-[#00A0A2]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/3 -right-20 w-[500px] h-[280px] rounded-full blur-[120px] opacity-15 bg-[#00B8F2]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-blue-200/60 gap-6">
          <div className="max-w-2xl">
            {/* Section Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0B1E48] tracking-tight leading-[1.1]">
              Commercial Formulation Categories
            </h2>

            {/* Glowing Accent Gradient Bar */}
            <div className="my-3.5 h-[3.5px] w-16 rounded-full bg-gradient-to-r from-[#006EDC] via-[#38BDF8] to-[#0D9488] shadow-xs" />

            {/* Refined Descriptive Copy */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Engineered for global healthcare systems. Browse over <strong className="font-bold text-[#0B1E48]">355+ approved generic molecules</strong> across 13 therapeutic categories and 6 certified dosage forms, validated for Zone IVb stability and backed by complete WHO-GMP CTD documentation.
            </p>

            {/* Micro Metadata Indicator Line */}
            <div className="flex flex-wrap items-center gap-3 pt-3 text-xs sm:text-[13px] text-slate-600 font-medium font-sans">
              <span className="flex items-center gap-1.5 text-[#006EDC]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#006EDC]" />
                WHO-GMP Verified
              </span>
              <span className="text-slate-300">/</span>
              <span className="flex items-center gap-1.5 text-[#0D9488]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
                13 Therapeutic Spectrums
              </span>
              <span className="text-slate-300">/</span>
              <span className="flex items-center gap-1.5 text-[#0284C7]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                6 Certified Dosage Forms
              </span>
              <span className="text-slate-300">/</span>
              <span className="flex items-center gap-1.5 text-[#7C3AED]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                Zone IVb Stable
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
              className="w-full pl-10 pr-9 py-2.5 bg-white/95 border border-blue-200/80 rounded-xl text-xs text-[#0B1E48] placeholder:text-slate-400 shadow-xs focus:outline-none focus:border-[#006EDC] focus:ring-2 focus:ring-[#006EDC]/20 transition-all font-medium"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer transition-colors"
                aria-label="Clear search input"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* ── Category Quick-Filter Chips Bar ── */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-6">
          {FLOATING_CHIPS.map((chip, idx) => {
            const isSelected = search.toLowerCase() === chip.label.toLowerCase();
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSearch(isSelected ? "" : chip.label)}
                className={`px-3.5 py-1.5 rounded-xl border text-xs font-semibold shadow-2xs flex items-center gap-2 transition-all cursor-pointer hover:shadow-xs ${
                  isSelected
                    ? "bg-[#006EDC] text-white border-[#006EDC] shadow-sm"
                    : "bg-white/90 backdrop-blur-md border-blue-100 hover:border-[#006EDC] text-slate-700 hover:text-[#006EDC]"
                }`}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: isSelected ? "#ffffff" : chip.color }}
                />
                <span>{chip.label}</span>
                <span
                  className={`text-[10.5px] font-medium ${
                    isSelected ? "text-blue-100" : "text-slate-400"
                  }`}
                >
                  {chip.count}
                </span>
              </button>
            );
          })}
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="px-3.5 py-1.5 rounded-xl bg-blue-100 text-[#006EDC] text-xs font-bold hover:bg-blue-200 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>Clear Filter</span>
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Search Feedback Banner */}
        {search && (
          <div className="flex items-center justify-between text-xs text-slate-600 mb-5 px-3 py-2 bg-blue-50/70 border border-blue-100 rounded-xl">
            <span>
              Showing <strong className="text-[#0B1E48] font-bold">{filteredCards.length}</strong> {filteredCards.length === 1 ? "category" : "categories"} matching &ldquo;<span className="text-[#006EDC] font-semibold">{search}</span>&rdquo;
            </span>
            <button
              type="button"
              onClick={() => setSearch("")}
              className="text-[#006EDC] hover:text-[#082B61] font-semibold cursor-pointer text-xs"
            >
              Show all 13
            </button>
          </div>
        )}

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

          {/* Clean Subtle Headers */}
          <div className="pointer-events-none absolute top-6 left-8 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden sm:block">
            Therapeutic Spectrum Portfolio
          </div>
          <div className="pointer-events-none absolute top-6 right-8 text-xs font-semibold text-slate-500 hidden sm:block">
            355+ Finished Formulations
          </div>

          {/* Fan Carousel or Empty State */}
          <div className="relative z-10 w-full flex justify-center py-6 sm:py-10 min-h-[380px]">
            {filteredCards.length > 0 ? (
              <SocialCards key={search} cards={filteredCards} />
            ) : (
              <div className="flex flex-col items-center justify-center text-center p-8 max-w-lg mx-auto bg-white/90 backdrop-blur-md rounded-2xl border border-blue-100 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-[#006EDC] flex items-center justify-center mb-3.5 border border-blue-200/60">
                  <AlertCircle className="w-6 h-6 text-[#006EDC]" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#0B1E48] mb-1.5">
                  No formulations found for &ldquo;{search}&rdquo;
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 mb-5 leading-relaxed">
                  We couldn&apos;t find any therapeutic category or molecule matching your query. Try searching by generic molecule name (e.g. <button type="button" onClick={() => setSearch("Amoxicillin")} className="text-[#006EDC] font-semibold underline hover:text-[#082B61] cursor-pointer">Amoxicillin</button>, <button type="button" onClick={() => setSearch("Paracetamol")} className="text-[#006EDC] font-semibold underline hover:text-[#082B61] cursor-pointer">Paracetamol</button>, <button type="button" onClick={() => setSearch("Omeprazole")} className="text-[#006EDC] font-semibold underline hover:text-[#082B61] cursor-pointer">Omeprazole</button>) or select a category chip above.
                </p>
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="px-4 py-2 rounded-xl bg-[#006EDC] hover:bg-[#005bb8] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                >
                  Clear Search & View All 13 Categories
                </button>
              </div>
            )}
          </div>

          {/* Bottom Stage Telemetry & Link to High Order Categories Directory */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-end border-t border-blue-100/80 pt-5 mt-2 gap-3 text-xs text-slate-500">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#006EDC] hover:bg-[#005bb8] text-white font-bold font-['Outfit',sans-serif] text-xs transition-all shadow-xs hover:shadow-md hover:scale-[1.02] self-start sm:self-auto cursor-pointer"
            >
              <span>Explore Complete 355+ Formulation Directory</span>
              <span>→</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Categories;
