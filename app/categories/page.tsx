"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  PHARMACEUTICAL_PORTFOLIO,
  type ProductEntry,
} from "@/data/pharmaceuticalPortfolio";
import {
  Search,
  X,
  ExternalLink,
  Copy,
  Check,
  FileCheck2,
} from "lucide-react";

// Top Dosage Form Buttons matching reference image
interface DosageOption {
  id: string;
  name: string;
  bgColor: string;
  hoverColor: string;
  matchTerms: string[];
  icon: React.ReactNode;
}

const DOSAGE_OPTIONS: DosageOption[] = [
  {
    id: "tablet",
    name: "Tablet",
    bgColor: "bg-[#F39200]",
    hoverColor: "hover:bg-[#d98200]",
    matchTerms: ["tablet", "dispersible", "chewable", "sublingual"],
    icon: (
      <svg className="w-7 h-7 text-white mx-auto" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="9" />
        <path d="M7 12h10" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "capsule",
    name: "Capsule",
    bgColor: "bg-[#0088CC]",
    hoverColor: "hover:bg-[#0077b3]",
    matchTerms: ["capsule", "delayed release", "sustained release", "pellet", "gastro-resistant"],
    icon: (
      <svg className="w-7 h-7 text-white mx-auto" viewBox="0 0 24 24" fill="currentColor">
        <rect x="5" y="7" width="14" height="10" rx="5" transform="rotate(-45 12 12)" />
        <line x1="8.5" y1="8.5" x2="16" y2="16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "softgel",
    name: "Softgel",
    bgColor: "bg-[#00A859]",
    hoverColor: "hover:bg-[#00924d]",
    matchTerms: ["softgel", "soft gel"],
    icon: (
      <svg className="w-7 h-7 text-white mx-auto" viewBox="0 0 24 24" fill="currentColor">
        <ellipse cx="12" cy="12" rx="7" ry="9" transform="rotate(30 12 12)" />
        <ellipse cx="10" cy="10" rx="2" ry="3.5" fill="white" className="opacity-80" transform="rotate(30 10 10)" />
      </svg>
    ),
  },
  {
    id: "suspension",
    name: "Suspension / syrup",
    bgColor: "bg-[#80276C]",
    hoverColor: "hover:bg-[#6c205b]",
    matchTerms: ["syrup", "suspension", "oral suspension", "liquid", "drops", "solution"],
    icon: (
      <svg className="w-7 h-7 text-white mx-auto" viewBox="0 0 24 24" fill="currentColor">
        <rect x="8" y="2" width="8" height="3" rx="1.5" fill="white" />
        <rect x="10" y="5" width="4" height="3" rx="0.5" fill="white" className="opacity-80" />
        <rect x="6" y="8" width="12" height="14" rx="4" />
        <rect x="8" y="11" width="8" height="6" rx="2" fill="white" className="opacity-40" />
      </svg>
    ),
  },
  {
    id: "sachet",
    name: "Powder & Sachet",
    bgColor: "bg-[#1E293B]",
    hoverColor: "hover:bg-[#0f172a]",
    matchTerms: ["powder", "sachet", "dry powder", "ors", "granules"],
    icon: (
      <svg className="w-7 h-7 text-white mx-auto" viewBox="0 0 24 24" fill="currentColor">
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <path d="M4 8h16M4 16h16" stroke="white" strokeWidth="1.5" strokeDasharray="2 2" strokeLinecap="round" />
        <path d="M12 9v6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "effervescent",
    name: "Effervescent",
    bgColor: "bg-[#00A0A2]",
    hoverColor: "hover:bg-[#008a8c]",
    matchTerms: ["effervescent", "effervescen"],
    icon: (
      <svg className="w-7 h-7 text-white mx-auto" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="14" r="7" />
        <circle cx="9" cy="5" r="1.5" fill="white" />
        <circle cx="15" cy="4" r="2" fill="white" />
        <circle cx="12" cy="6.5" r="1" fill="white" />
      </svg>
    ),
  },
  {
    id: "all",
    name: "All Formulations",
    bgColor: "bg-[#FBBF24]",
    hoverColor: "hover:bg-[#e6ab17]",
    matchTerms: [],
    icon: (
      <svg className="w-7 h-7 text-white mx-auto" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l2.4 7.2h7.6l-6.2 4.5 2.4 7.3-6.2-4.5-6.2 4.5 2.4-7.3-6.2-4.5h7.6z" strokeLinejoin="round" strokeWidth="0.5" stroke="currentColor" />
      </svg>
    ),
  },
];

interface FormulationItem extends ProductEntry {
  categoryName: string;
  categorySlug: string;
}

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedDosage, setSelectedDosage] = useState<string>("tablet");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalItem, setActiveModalItem] = useState<FormulationItem | null>(null);
  const [copied, setCopied] = useState(false);

  // Flatten all formulations from 21 categories
  const allFormulations: FormulationItem[] = useMemo(() => {
    return PHARMACEUTICAL_PORTFOLIO.flatMap((cat) =>
      cat.products.map((p) => ({
        ...p,
        categoryName: cat.name,
        categorySlug: cat.slug,
      }))
    );
  }, []);

  // Filter formulations by Category, Dosage Form, and Search Query
  const filteredFormulations = useMemo(() => {
    return allFormulations.filter((item) => {
      // 1. Category Filter
      if (selectedCategory !== "all") {
        const matchesCategory =
          item.categorySlug === selectedCategory ||
          item.categoryName.toLowerCase().includes(selectedCategory.toLowerCase());
        if (!matchesCategory) return false;
      }

      // 2. Dosage Form Filter
      if (selectedDosage !== "all") {
        const dosageCfg = DOSAGE_OPTIONS.find((d) => d.id === selectedDosage);
        if (dosageCfg && dosageCfg.matchTerms.length > 0) {
          const itemText = (item.dosageForm + " " + item.composition + " " + item.moleculeGroup).toLowerCase();
          const matchesDosage = dosageCfg.matchTerms.some((term) => itemText.includes(term));
          if (!matchesDosage) return false;
        }
      }

      // 3. Search Query Filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesSearch =
          item.composition.toLowerCase().includes(q) ||
          item.moleculeGroup.toLowerCase().includes(q) ||
          item.dosage.toLowerCase().includes(q) ||
          item.categoryName.toLowerCase().includes(q);
        if (!matchesSearch) return false;
      }

      return true;
    });
  }, [allFormulations, selectedCategory, selectedDosage, searchQuery]);

  // Section Heading Label & Color
  const activeTitle = useMemo(() => {
    if (selectedDosage !== "all") {
      const d = DOSAGE_OPTIONS.find((opt) => opt.id === selectedDosage);
      if (d) return d.name;
    }
    if (selectedCategory !== "all") {
      const cat = PHARMACEUTICAL_PORTFOLIO.find((c) => c.slug === selectedCategory);
      if (cat) return cat.name;
    }
    return "All Approved Formulations";
  }, [selectedDosage, selectedCategory]);

  const activeColorClass = useMemo(() => {
    switch (selectedDosage) {
      case "tablet":
        return "text-[#F39200]";
      case "capsule":
        return "text-[#0088CC]";
      case "softgel":
        return "text-[#00A859]";
      case "suspension":
        return "text-[#80276C]";
      case "sachet":
        return "text-[#1E293B]";
      case "effervescent":
        return "text-[#00A0A2]";
      case "all":
        return "text-[#EAB308]";
      default:
        return "text-[#70B31E]";
    }
  }, [selectedDosage]);

  const handleCopy = (item: FormulationItem) => {
    const text = `Zelnex Formulation: ${item.composition} (${item.dosage}) - ${item.categoryName}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#1E293B] antialiased selection:bg-[#0088CC] selection:text-white font-['Outfit',sans-serif]">
      
      {/* ── Global Font Styles ── */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }

        .clean-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .clean-scroll::-webkit-scrollbar-track {
          background: #f8fafc;
        }
        .clean-scroll::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }
      `}</style>

      <Navbar />

      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-6">
        
        {/* ══════════════════════════════════════════════════════════════
            EXACT PDF HEADER SECTION (100% Match to Reference Image)
        ══════════════════════════════════════════════════════════════ */}
        <section className="mb-10 text-center flex flex-col items-center pt-4 pb-2">
          
          {/* 1. Official Zelnex Logo Centered */}
          <div className="relative w-72 sm:w-80 md:w-96 h-28 sm:h-32 mb-4 mx-auto">
            <Image
              src="/brand/zelnex-hd-logo.png"
              alt="Zelnex Pharmaceuticals Pvt. Ltd."
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* 2. Main Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1B324F] tracking-tight uppercase">
            PHARMACEUTICAL PRODUCT PORTFOLIO
          </h1>

          {/* 3. Subtitle */}
          <div className="text-sm sm:text-base font-semibold text-[#00A0A2] tracking-wide mt-2">
            Category Wise • Dosage Form Wise
          </div>

          {/* 4. Descriptive Statement from PDF */}
          <p className="text-xs sm:text-[13px] text-[#4B5563] max-w-4xl text-left sm:text-center mt-6 leading-relaxed">
            The portfolio is organized using pharmaceutical category names in the same industry style as the reference structure: GENERAL, CEPHALOSPORIN, BETA LACTAM and therapeutic portfolio categories.
          </p>

        </section>

        {/* ── Master 2-Column Clean Reference Layout ── */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          
          {/* ══════════════════════════════════════════════════════════════
              LEFT SIDEBAR: CATEGORY NAVIGATION (Exact Reference Match)
          ══════════════════════════════════════════════════════════════ */}
          <aside className="w-full lg:w-60 xl:w-64 shrink-0 bg-white border border-[#E5E7EB] rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.05)] overflow-hidden lg:sticky lg:top-24">
            
            {/* Header: "Category" */}
            <div className="py-3 px-4 bg-[#F8FAFC] border-b border-[#E5E7EB] text-center">
              <h2 className="text-[#0088CC] font-bold text-lg tracking-wide">
                Category
              </h2>
            </div>

            {/* Category List */}
            <div className="divide-y divide-[#E5E7EB] max-h-[75vh] overflow-y-auto clean-scroll">
              
              {/* "All" Button (Active Green State matching reference) */}
              <button
                type="button"
                onClick={() => setSelectedCategory("all")}
                className={`w-full py-2.5 px-4 text-left text-sm font-semibold transition-colors cursor-pointer flex items-center justify-between ${
                  selectedCategory === "all"
                    ? "bg-[#70B31E] text-white font-bold"
                    : "text-[#374151] hover:bg-[#F9FAFB]"
                }`}
              >
                <span>All</span>
                <span className={`text-xs font-mono ${selectedCategory === "all" ? "text-white" : "text-slate-400"}`}>
                  581
                </span>
              </button>

              {/* 21 Categories from Portfolio */}
              {PHARMACEUTICAL_PORTFOLIO.map((cat) => {
                const isActive = selectedCategory === cat.slug;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`w-full py-2.5 px-4 text-left text-xs sm:text-[13px] transition-colors cursor-pointer flex items-center justify-between ${
                      isActive
                        ? "bg-[#70B31E] text-white font-bold"
                        : "text-[#4B5563] hover:bg-[#F9FAFB] hover:text-[#111827]"
                    }`}
                    title={cat.name}
                  >
                    <span className="truncate pr-2">{cat.name}</span>
                    <span className={`text-[11px] font-mono shrink-0 ${isActive ? "text-white" : "text-slate-400"}`}>
                      {cat.totalEntries}
                    </span>
                  </button>
                );
              })}

            </div>
          </aside>

          {/* ══════════════════════════════════════════════════════════════
              RIGHT MAIN AREA: TOP DOSAGE ICONS + CLEAN 4-COL GRID
          ══════════════════════════════════════════════════════════════ */}
          <div className="flex-1 w-full space-y-6">
            
            {/* ── TOP DOSAGE FORM BUTTONS (Exact Reference Match) ── */}
            <div className="flex sm:grid sm:grid-cols-4 md:grid-cols-7 gap-2 sm:gap-2.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none -mx-1 px-1">
              {DOSAGE_OPTIONS.map((dosage) => {
                const isSelected = selectedDosage === dosage.id;
                return (
                  <button
                    key={dosage.id}
                    type="button"
                    onClick={() => setSelectedDosage(dosage.id)}
                    className={`min-w-[100px] sm:min-w-0 flex-1 sm:flex-initial py-3 sm:py-4 px-2 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center transition-all duration-200 cursor-pointer shadow-sm shrink-0 sm:shrink ${
                      dosage.bgColor
                    } ${dosage.hoverColor} ${
                      isSelected
                        ? "ring-3 ring-offset-2 ring-slate-800 scale-[1.03] shadow-md z-10"
                        : "opacity-95 hover:opacity-100 hover:scale-[1.02] hover:shadow-md"
                    }`}
                  >
                    {/* Icon */}
                    <div className="mb-2">
                      {dosage.icon}
                    </div>

                    {/* Label */}
                    <span className="text-white text-xs font-bold tracking-tight text-center leading-tight">
                      {dosage.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* ── SECTION HEADER & SEARCH INPUT ── */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
              
              {/* Clean Section Title */}
              <div>
                <h3 className={`text-2xl font-bold tracking-tight ${activeColorClass}`}>
                  {activeTitle}
                </h3>
                <p className="text-xs text-slate-500 font-mono mt-0.5">
                  Showing {filteredFormulations.length} formulations
                </p>
              </div>

              {/* Minimal Search Input */}
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter formulations..."
                  className="w-full pl-9 pr-8 py-2 text-xs bg-white border border-[#E5E7EB] rounded-md text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#0088CC] focus:ring-1 focus:ring-[#0088CC]"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

            </div>

            {/* ── 4-COLUMN FORMULATION TILES (Exact Reference Replica) ── */}
            {filteredFormulations.length === 0 ? (
              <div className="py-16 text-center bg-white border border-[#E5E7EB] rounded-md p-6">
                <p className="text-sm font-semibold text-slate-700">
                  No formulations found matching &ldquo;{searchQuery}&rdquo;
                </p>
                <p className="text-xs text-slate-400 mt-1 mb-4">
                  Try changing category or dosage form filter.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedDosage("tablet");
                    setSearchQuery("");
                  }}
                  className="px-4 py-1.5 rounded bg-[#70B31E] text-white text-xs font-bold hover:bg-[#629d1a] transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
                {filteredFormulations.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveModalItem(item)}
                    className="bg-white border border-[#E5E7EB] rounded-md p-3.5 flex flex-col justify-between hover:border-[#0088CC] hover:bg-[#F9FAFB] transition-colors cursor-pointer min-h-[90px] group shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                  >
                    {/* Molecule / Formulation Title */}
                    <h4 className="text-xs font-medium text-slate-800 group-hover:text-[#0088CC] transition-colors leading-snug line-clamp-2">
                      {item.composition}
                    </h4>

                    {/* Bottom Metadata line */}
                    <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                      <span className="font-mono text-slate-500 truncate max-w-[140px]">
                        {item.dosage || item.dosageForm}
                      </span>
                      <span className="text-[10px] text-[#0088CC] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                        Inquire ↗
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* ── Bottom Simple Technical Assurance Bar ── */}
            <div className="pt-4 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#70B31E]" />
                <span>WHO-GMP Validated Finished Formulations</span>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href="/contact"
                  className="text-[#0088CC] font-bold hover:underline"
                >
                  Request Full CTD Dossier (Module 1-5) ↗
                </Link>
              </div>
            </div>

          </div>

        </div>

        {/* ══════════════════════════════════════════════════════════════
            CLEAN TECHNICAL SPECIFICATION MODAL
        ══════════════════════════════════════════════════════════════ */}
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/40 backdrop-blur-xs">
            <div className="w-full max-w-lg max-h-[90dvh] flex flex-col bg-white rounded-xl sm:rounded-lg border border-[#E5E7EB] shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
              
              {/* Modal Header */}
              <div className="py-3.5 sm:py-4 px-4 sm:px-5 bg-[#F8FAFC] border-b border-[#E5E7EB] flex items-center justify-between shrink-0">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-[#0088CC]">
                    {activeModalItem.categoryName}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
                    {activeModalItem.composition}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveModalItem(null)}
                  className="w-8 h-8 rounded-full border border-slate-200 hover:bg-slate-100 flex items-center justify-center text-slate-500 cursor-pointer shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-4 sm:p-5 space-y-3 sm:space-y-4 text-xs overflow-y-auto clean-scroll flex-1">
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                  <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                    <span className="text-[10px] text-slate-400 font-mono block">DOSAGE STRENGTH</span>
                    <span className="font-bold text-slate-800 font-mono mt-0.5 block truncate">
                      {activeModalItem.dosage || "Standard Dose"}
                    </span>
                  </div>

                  <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                    <span className="text-[10px] text-slate-400 font-mono block">DELIVERY FORM</span>
                    <span className="font-bold text-slate-800 mt-0.5 block truncate">
                      {activeModalItem.dosageForm}
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded border border-slate-200">
                  <span className="text-[10px] text-slate-400 font-mono block mb-1">
                    API MOLECULE GROUP
                  </span>
                  <p className="font-semibold text-slate-800">
                    {activeModalItem.moleculeGroup}
                  </p>
                </div>

                <div className="p-3 bg-slate-50 rounded border border-slate-200">
                  <span className="text-[10px] text-slate-400 font-mono block mb-1">
                    REGULATORY READINESS
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    WHO-GMP Certified, CTD Dossier Ready (Modules 1–5), Zone IVb Stability Validated for swift MOH registration.
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="py-3 px-4 sm:px-5 bg-[#F8FAFC] border-t border-[#E5E7EB] flex flex-wrap sm:flex-nowrap items-center justify-between gap-2.5 sm:gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => handleCopy(activeModalItem)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-300 rounded text-xs text-slate-700 hover:bg-slate-50 cursor-pointer font-medium"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Details</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/919328286164?text=Hello%20Zelnex%2C%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(
                      activeModalItem.composition + " (" + (activeModalItem.dosage || "") + ")"
                    )}%20under%20the%20${encodeURIComponent(activeModalItem.categoryName)}%20category.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 sm:px-4 py-1.5 bg-[#00A859] hover:bg-[#00924d] text-white text-xs font-bold rounded transition-colors"
                  >
                    <span>WhatsApp Inquiry</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <Link
                    href="/contact"
                    onClick={() => setActiveModalItem(null)}
                    className="inline-flex items-center gap-1 px-3 sm:px-3.5 py-1.5 bg-[#0088CC] hover:bg-[#0077b3] text-white text-xs font-bold rounded transition-colors"
                  >
                    <FileCheck2 className="w-3.5 h-3.5" />
                    <span>Dossier RFQ</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
