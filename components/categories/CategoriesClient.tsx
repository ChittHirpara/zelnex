"use client";

import React, { useState, useMemo, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
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
  FileDown,
  Package,
  ChevronDown,
} from "lucide-react";
import { useRfqCart } from "@/context/RfqCartContext";
import { RfqDrawer } from "@/components/categories/RfqDrawer";

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
    name: "Tablets",
    bgColor: "bg-[#F39200]",
    hoverColor: "hover:bg-[#d98200]",
    matchTerms: ["tablet"],
    icon: (
      <svg className="w-7 h-7 text-white mx-auto" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="9" />
        <path d="M7 12h10" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "capsule",
    name: "Capsules",
    bgColor: "bg-[#0088CC]",
    hoverColor: "hover:bg-[#0077b3]",
    matchTerms: ["capsule"],
    icon: (
      <svg className="w-7 h-7 text-white mx-auto" viewBox="0 0 24 24" fill="currentColor">
        <rect x="5" y="7" width="14" height="10" rx="5" transform="rotate(-45 12 12)" />
        <line x1="8.5" y1="8.5" x2="16" y2="16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "effervescent",
    name: "Effervescent",
    bgColor: "bg-[#00A0A2]",
    hoverColor: "hover:bg-[#008a8c]",
    matchTerms: ["effervescent"],
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
    id: "suspension",
    name: "Syrups & Susp.",
    bgColor: "bg-[#80276C]",
    hoverColor: "hover:bg-[#6c205b]",
    matchTerms: ["syrup", "suspension"],
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
    id: "dry-powder",
    name: "Dry Powders",
    bgColor: "bg-[#D97706]",
    hoverColor: "hover:bg-[#b45309]",
    matchTerms: ["dry powder", "dry syrup"],
    icon: (
      <svg className="w-7 h-7 text-white mx-auto" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" stroke="white" strokeWidth="1.5" fill="none" />
        <path d="M12 12l8-5M12 12v10M12 12L4 7" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "topical",
    name: "Topical / Tube",
    bgColor: "bg-[#059669]",
    hoverColor: "hover:bg-[#047857]",
    matchTerms: ["topical", "cream", "ointment", "gel", "lotion"],
    icon: (
      <svg className="w-7 h-7 text-white mx-auto" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 21h10a2 2 0 002-2v-5a2 2 0 00-2-2H7a2 2 0 00-2 2v5a2 2 0 002 2z" />
        <path d="M10 12V6a2 2 0 012-2h0a2 2 0 012 2v6" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "all",
    name: "All (355)",
    bgColor: "bg-[#1E293B]",
    hoverColor: "hover:bg-[#0f172a]",
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

function CategoriesContent() {
  const searchParams = useSearchParams();
  const dosageParam = searchParams.get("dosage");
  const categoryParam = searchParams.get("category");

  const resolveCategoryParam = (param: string | null) => {
    if (!param) return "all";
    const aliases: Record<string, string> = {
      "pain-management-musculoskeletal": "pain-musculoskeletal",
      "diabetes-metabolic-care": "diabetes-metabolic",
      "hematology-supportive-care": "hematology-supportive",
    };
    return aliases[param] || param;
  };

  const [selectedCategory, setSelectedCategory] = useState<string>(resolveCategoryParam(categoryParam));
  const [selectedDosage, setSelectedDosage] = useState<string>(() => {
    if (dosageParam) {
      const exists = DOSAGE_OPTIONS.some((d) => d.id === dosageParam);
      return exists ? dosageParam : "tablet";
    }
    return "tablet";
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalItem, setActiveModalItem] = useState<FormulationItem | null>(null);
  const [copied, setCopied] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);

  const [prevDosageParam, setPrevDosageParam] = useState(dosageParam);
  if (dosageParam !== prevDosageParam) {
    setPrevDosageParam(dosageParam);
    if (dosageParam) {
      const exists = DOSAGE_OPTIONS.some((d) => d.id === dosageParam);
      setSelectedDosage(exists ? dosageParam : "all");
    }
  }

  const [prevCategoryParam, setPrevCategoryParam] = useState(categoryParam);
  if (categoryParam !== prevCategoryParam) {
    setPrevCategoryParam(categoryParam);
    if (categoryParam) {
      setSelectedCategory(resolveCategoryParam(categoryParam));
    }
  }

  // Flatten all formulations from categories, sorted in ABCD (alphabetical) order
  const allFormulations: FormulationItem[] = useMemo(() => {
    const items = PHARMACEUTICAL_PORTFOLIO.flatMap((cat) =>
      cat.products.map((p) => ({
        ...p,
        categoryName: cat.name,
        categorySlug: cat.slug,
      }))
    );
    return items.sort((a, b) =>
      a.composition.localeCompare(b.composition, undefined, { sensitivity: "base" })
    );
  }, []);

  // Filter formulations by Category, Dosage Form, and Search Query, preserving ABCD order
  const filteredFormulations = useMemo(() => {
    const results = allFormulations.filter((item) => {
      // 1. Category Filter
      if (selectedCategory !== "all") {
        const matchesCategory =
          item.categorySlug === selectedCategory ||
          item.categoryName.toLowerCase() === selectedCategory.toLowerCase();
        if (!matchesCategory) return false;
      }

      // 2. Dosage Form Filter
      if (selectedDosage !== "all") {
        if (item.dosageFormId) {
          if (item.dosageFormId !== selectedDosage) return false;
        } else {
          const dosageCfg = DOSAGE_OPTIONS.find((d) => d.id === selectedDosage);
          if (dosageCfg && dosageCfg.matchTerms.length > 0) {
            const itemText = (item.dosageForm + " " + item.composition + " " + item.moleculeGroup).toLowerCase();
            const matchesDosage = dosageCfg.matchTerms.some((term) => itemText.includes(term));
            if (!matchesDosage) return false;
          }
        }
      }

      // 3. Search Query Filter with exact word-boundary category matching (prevents urology matching neurology)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const escapedQ = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const catWordRegex = new RegExp(`(^|\\s|[-&/,])${escapedQ}($|\\s|[-&/,])`, "i");
        const matchesCategoryName =
          item.categorySlug === q ||
          catWordRegex.test(item.categoryName);

        const matchesSearch =
          item.composition.toLowerCase().includes(q) ||
          item.moleculeGroup.toLowerCase().includes(q) ||
          item.dosage.toLowerCase().includes(q) ||
          matchesCategoryName;
        if (!matchesSearch) return false;
      }

      return true;
    });

    // Ensure strict ABCD alphabetical order across all views
    return results.sort((a, b) =>
      a.composition.localeCompare(b.composition, undefined, { sensitivity: "base" })
    );
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
      case "effervescent":
        return "text-[#00A0A2]";
      case "suspension":
        return "text-[#80276C]";
      case "dry-powder":
        return "text-[#D97706]";
      case "topical":
        return "text-[#059669]";
      case "all":
        return "text-[#1E293B]";
      default:
        return "text-[#0088CC]";
    }
  }, [selectedDosage]);

  const { items: rfqItems, toggleItem, isInCart, openDrawer } = useRfqCart();

  const handleCopy = (item: FormulationItem) => {
    const text = `Zelnex Formulation: ${item.composition} (${item.dosage}) - ${item.categoryName}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExportAllCsv = () => {
    const headers = [
      "Index",
      "Formulation / Composition",
      "Strength / Dosage",
      "Dosage Form",
      "Molecule Group",
      "Therapeutic Category",
    ];
    const rows = allFormulations.map((item, idx) => [
      (idx + 1).toString(),
      `"${item.composition.replace(/"/g, '""')}"`,
      `"${(item.dosage || "").replace(/"/g, '""')}"`,
      `"${item.dosageForm.replace(/"/g, '""')}"`,
      `"${(item.moleculeGroup || "").replace(/"/g, '""')}"`,
      `"${item.categoryName.replace(/"/g, '""')}"`,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute(
      "download",
      `Zelnex_International_Product_Catalogue_355_Products_${new Date().toISOString().split("T")[0]}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
            EXACT PDF HEADER SECTION (100% Match to Catalogue Reference)
        ══════════════════════════════════════════════════════════════ */}
        <section className="mb-10 text-center flex flex-col items-center pt-4 pb-2">
          
          {/* 1. Official Zelnex Logo Centered */}
          <div className="relative w-72 sm:w-80 md:w-96 h-28 sm:h-32 mb-4 mx-auto">
            <Image
              src="/brand/zelnex-hd-logo.png"
              alt="Zelnex Pharmaceuticals Pvt. Ltd."
              fill
              sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, 384px"
              className="object-contain"
              priority
            />
          </div>

          {/* 2. Main Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1B324F] tracking-tight uppercase">
            PRODUCT CATALOGUE
          </h1>

          {/* 3. Subtitle */}
          <div className="text-sm sm:text-base font-semibold text-[#00A0A2] tracking-wide mt-2">
            Dosage Form &amp; Therapeutic Category Wise Portfolio
          </div>

          {/* 4. Portfolio Overview Metric Badges (From PDF Page 1 & 2) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-3xl w-full mt-6 mb-3">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center">
              <span className="text-[11px] text-slate-500 font-medium block">Portfolio Overview</span>
              <span className="text-lg sm:text-xl font-extrabold text-[#082B61] font-mono">355 Products</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center">
              <span className="text-[11px] text-slate-500 font-medium block">Dosage Forms</span>
              <span className="text-lg sm:text-xl font-extrabold text-[#0088CC] font-mono">6 Forms</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center">
              <span className="text-[11px] text-slate-500 font-medium block">Therapeutic Categories</span>
              <span className="text-lg sm:text-xl font-extrabold text-[#0D9488] font-mono">13 Categories</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center">
              <span className="text-[11px] text-slate-500 font-medium block">Catalogue Structure</span>
              <span className="text-xs sm:text-sm font-bold text-[#70B31E] block mt-1">Dosage Form → Category</span>
            </div>
          </div>

          {/* 5. Descriptive Statement from PDF */}
          <p className="text-xs sm:text-[13px] text-[#4B5563] max-w-3xl text-center mt-2 leading-relaxed">
            Prepared for international buyers, distributors, importers and business partners. Products are grouped first by dosage form and then by broad therapeutic category for streamlined buyer navigation.
          </p>

        </section>

        {/* ── Master 2-Column Clean Reference Layout ── */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          
          {/* ══════════════════════════════════════════════════════════════
              LEFT SIDEBAR: CATEGORY NAVIGATION (Exact Reference Match)
          ══════════════════════════════════════════════════════════════ */}
          <aside className="w-full lg:w-60 xl:w-64 shrink-0 bg-white border border-[#E5E7EB] rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.05)] overflow-hidden lg:sticky lg:top-24">
            
            {/* Header: "Category" - interactive accordion on mobile, static on desktop */}
            <div
              onClick={() => setMobileCategoryOpen((v) => !v)}
              className="py-3 px-4 bg-[#F8FAFC] border-b border-[#E5E7EB] flex items-center justify-between cursor-pointer lg:cursor-default"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0088CC]" />
                <h2 className="text-[#0088CC] font-bold text-base sm:text-lg tracking-wide">
                  Categories ({allFormulations.length})
                </h2>
              </div>
              <div className="lg:hidden flex items-center gap-1.5 text-xs text-[#0088CC] font-semibold">
                <span className="truncate max-w-[130px]">
                  {selectedCategory === "all" ? "All Categories" : PHARMACEUTICAL_PORTFOLIO.find(c => c.slug === selectedCategory)?.name || "Selected"}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 shrink-0 ${mobileCategoryOpen ? "rotate-180" : ""}`} />
              </div>
            </div>

            {/* Category List - collapsible on mobile, always visible on desktop */}
            <div className={`divide-y divide-[#E5E7EB] max-h-[60vh] sm:max-h-[75vh] overflow-y-auto clean-scroll transition-all duration-200 ${mobileCategoryOpen ? "block" : "hidden lg:block"}`}>
              
              {/* "All" Button (Active Green State matching reference) */}
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("all");
                  setMobileCategoryOpen(false);
                }}
                className={`w-full py-2.5 px-4 text-left text-sm font-semibold transition-colors cursor-pointer flex items-center justify-between ${
                  selectedCategory === "all"
                    ? "bg-[#70B31E] text-white font-bold"
                    : "text-[#374151] hover:bg-[#F9FAFB]"
                }`}
              >
                <span>All Categories</span>
                <span className={`text-xs font-mono ${selectedCategory === "all" ? "text-white" : "text-slate-400"}`}>
                  {allFormulations.length}
                </span>
              </button>

              {/* 13 Broad Therapeutic Categories from Portfolio */}
              {PHARMACEUTICAL_PORTFOLIO.map((cat) => {
                const isActive = selectedCategory === cat.slug;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat.slug);
                      setMobileCategoryOpen(false);
                    }}
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
            <div
              className="flex sm:grid sm:grid-cols-4 md:grid-cols-7 gap-2 sm:gap-2.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none -mx-1 px-1"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
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
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pt-2">
              
              {/* Clean Section Title */}
              <div>
                <h3 className={`text-2xl font-bold tracking-tight ${activeColorClass}`}>
                  {activeTitle}
                </h3>
                <p className="text-xs text-slate-500 font-mono mt-0.5">
                  Showing {filteredFormulations.length} formulations
                </p>
              </div>

              {/* Action Buttons & Minimal Search Input */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={handleExportAllCsv}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold bg-white border border-[#E5E7EB] hover:border-[#0088CC] text-slate-700 hover:text-[#0088CC] rounded-md transition-colors shadow-xs cursor-pointer"
                  title="Download complete 355+ international product catalogue as a CSV spreadsheet"
                >
                  <FileDown className="w-3.5 h-3.5 text-[#0088CC]" />
                  <span>Download 355+ Catalog (CSV)</span>
                </button>

                <button
                  type="button"
                  onClick={openDrawer}
                  className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-md transition-colors shadow-xs cursor-pointer ${
                    rfqItems.length > 0
                      ? "bg-[#0088CC] text-white hover:bg-[#0077b3]"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  <Package className="w-3.5 h-3.5" />
                  <span>Tender RFQ ({rfqItems.length})</span>
                </button>

                <div className="relative w-full sm:w-60">
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
                      <span className="font-mono text-slate-500 truncate max-w-[120px]">
                        {item.dosage || item.dosageForm}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleItem(item);
                          }}
                          className={`text-[10px] font-bold px-1.5 py-0.5 rounded transition-colors cursor-pointer ${
                            isInCart(item.id)
                              ? "bg-blue-100 text-[#0088CC]"
                              : "text-slate-400 hover:text-[#0088CC] hover:bg-slate-100"
                          }`}
                          title={isInCart(item.id) ? "Remove from RFQ" : "Add to Tender RFQ"}
                        >
                          {isInCart(item.id) ? "✓ RFQ" : "+ RFQ"}
                        </button>
                        <span className="text-[10px] text-[#0088CC] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                          ↗
                        </span>
                      </div>
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
                  <button
                    type="button"
                    onClick={() => toggleItem(activeModalItem)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-bold transition-colors cursor-pointer ${
                      isInCart(activeModalItem.id)
                        ? "bg-blue-100 text-[#0088CC] border border-blue-200"
                        : "bg-white text-slate-700 border border-slate-300 hover:border-[#0088CC] hover:text-[#0088CC]"
                    }`}
                  >
                    <Package className="w-3.5 h-3.5 text-[#0088CC]" />
                    <span>{isInCart(activeModalItem.id) ? "✓ In Tender RFQ" : "+ Add to Tender RFQ"}</span>
                  </button>

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

        {/* ── Floating Tender RFQ Indicator Pill ── */}
        {rfqItems.length > 0 && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-[#1E293B] text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-4 border border-slate-700 animate-in fade-in slide-in-from-bottom-4 duration-200">
            <div className="flex items-center gap-2 text-xs font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>
                {rfqItems.length} Molecule{rfqItems.length !== 1 ? "s" : ""} Selected
              </span>
            </div>
            <div className="h-4 w-px bg-slate-600" />
            <button
              type="button"
              onClick={openDrawer}
              className="px-4 py-1.5 bg-[#0088CC] hover:bg-[#0077b3] text-white text-xs font-bold rounded-full transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"
            >
              <span>Review RFQ Quote</span>
              <span>→</span>
            </button>
          </div>
        )}

        {/* ── Slide-over RFQ Drawer ── */}
        <RfqDrawer />

      </main>

      <Footer />
    </div>
  );
}

export default function CategoriesClient() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F4F8FD]" />}>
      <CategoriesContent />
    </Suspense>
  );
}
