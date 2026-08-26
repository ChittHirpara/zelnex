"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PillNav } from "@/components/ui/PillNav";
import {
  HelpCircle,
  Search,
  ChevronDown,
  FileCheck,
  ShieldCheck,
  Truck,
  Boxes,
  X,
  ArrowRight,
} from "lucide-react";

interface FAQItem {
  id: string;
  category: "dossier" | "quality" | "export" | "logistics";
  question: string;
  answer: string;
  badge: string;
  highlights?: string[];
}

const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    category: "dossier",
    badge: "CTD / eCTD Dossiers",
    question: "What CTD / eCTD dossier formats do you supply for MOH registrations?",
    answer:
      "We provide complete Common Technical Document (CTD) and electronic CTD (eCTD) dossiers conforming to Module 1 through Module 5 specifications. Our regulatory team prepares customized formats for ASEAN, ACTD, GCC, African (NAFDAC, PPB, TMDA, NDA), and LATAM MOH requirements, complete with Certificates of Pharmaceutical Product (COPP) and Free Sale Certificates (FSC).",
    highlights: [
      "Modules 1 through 5 validation included",
      "ACTD & ASEAN Common Dossier templates ready",
      "Fast-track legalization & embassy attestation support",
    ],
  },
  {
    id: "faq-2",
    category: "quality",
    badge: "Zone IVb Stability",
    question: "Are your formulations validated for Zone IVb climatic conditions (hot & humid)?",
    answer:
      "Yes. All generic oral solid dosages, injectables, and syrups undergo rigorous real-time (30°C / 75% RH) and accelerated (40°C / 75% RH) stability testing for Zone IVb tropical climates. We supply complete 24 to 36-month stability study data charts, degradation analysis, and container-closure integrity certificates.",
    highlights: [
      "Real-time 36-month Zone IVb stability protocols",
      "Alu-Alu & tropical blister barrier packaging",
      "Batch-specific Certificate of Analysis (CoA)",
    ],
  },
  {
    id: "faq-3",
    category: "quality",
    badge: "WHO-GMP & QA",
    question: "What accreditations do your contract manufacturing facilities hold?",
    answer:
      "Our partner production plants are fully certified under WHO-GMP, ISO 9001:2015, and accredited by multiple national drug regulatory agencies across Africa, Southeast Asia, and the Middle East. Every production line operates under Grade A/B HVAC cleanroom environments with automated in-line serialization.",
    highlights: [
      "WHO-GMP, ISO 9001:2015 & GLP accredited",
      "Automated inspection & track-and-trace serialization",
      "100% finished product analytical QC clearance",
    ],
  },
  {
    id: "faq-4",
    category: "export",
    badge: "MOQs & Supply",
    question: "What are your typical Minimum Order Quantities (MOQs) for commercial export?",
    answer:
      "We offer flexible MOQs structured to facilitate initial market entry and commercial visa registration trials. For standard branded generic formulations, MOQs start from 3,000 to 5,000 packs. For custom private labeling and localized language packaging (French, Arabic, Spanish, Russian), MOQs depend on the batch size of the manufacturing run.",
    highlights: [
      "Low initial trial batch quantities for MOH clearance",
      "Multi-lingual packaging customization available",
      "Tiered pricing based on annual tender volume",
    ],
  },
  {
    id: "faq-5",
    category: "logistics",
    badge: "Cold-Chain & Freight",
    question: "How do you manage temperature-controlled cold-chain shipments globally?",
    answer:
      "We coordinate end-to-end cold-chain logistics (+2°C to +8°C and +15°C to +25°C) utilizing validated active and passive thermal shippers, dry ice configurations, and continuous USB/real-time GPS temperature data loggers from our warehouse dispatch to the consignee's airport or seaport.",
    highlights: [
      "Validated active & passive temperature-controlled shippers",
      "Continuous data logger temperature tracking",
      "Partnered with leading global sea and air freight carriers",
    ],
  },
  {
    id: "faq-6",
    category: "export",
    badge: "Turnaround & Lead Time",
    question: "What is the typical production and shipping turnaround time?",
    answer:
      "For in-stock catalog formulations with existing commercial dossiers, dispatch takes 2 to 3 weeks following import permit clearance. For fresh commercial manufacturing runs and private label orders, the lead time is typically 45 to 60 days including full analytical batch testing and export documentation legalization.",
    highlights: [
      "2-3 weeks for ready-stock catalog dispatches",
      "45-60 days for complete custom manufacturing cycles",
      "Real-time production milestone tracking for distributors",
    ],
  },
  {
    id: "faq-7",
    category: "dossier",
    badge: "Bioequivalence & COPP",
    question: "Do you supply Bioequivalence (BE) study reports and innovator comparison data?",
    answer:
      "Yes. For critical therapeutic molecules requiring in-vivo Bioequivalence (BE) or in-vitro dissolution profiling against the global innovator reference product, we provide full clinical summaries, comparative dissolution profiles (f1/f2 metrics), and validated pharmacokinetic study reports.",
    highlights: [
      "Comparative in-vitro dissolution profiles (f1/f2 factors)",
      "In-vivo bioequivalence dossiers for major therapeutic classes",
      "Official COPP issued under WHO certification scheme",
    ],
  },
];

const CATEGORIES = [
  { id: "all", label: "All Questions", icon: HelpCircle },
  { id: "dossier", label: "Dossiers & CTD", icon: FileCheck },
  { id: "quality", label: "WHO-GMP & Quality", icon: ShieldCheck },
  { id: "export", label: "Export & MOQs", icon: Boxes },
  { id: "logistics", label: "Logistics & Cold-Chain", icon: Truck },
] as const;

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIds, setOpenIds] = useState<string[]>(["faq-1"]);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFAQs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.badge.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="faq" className="relative w-full py-20 sm:py-28 px-4 sm:px-6 md:px-8 bg-white select-none overflow-hidden">
      {/* Background ambient lighting accents */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#006EDC]/5 via-[#00f2fe]/5 to-transparent blur-[100px] rounded-full" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#006EDC]/10 border border-[#006EDC]/20 mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#006EDC] animate-pulse" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#006EDC]">
              Frequently Asked Questions
            </p>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#111111] tracking-tight leading-[1.15]"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Everything You Need to Know About Sourcing & Compliance
          </h2>

          <p className="mt-4 text-base text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            Direct answers regarding regulatory filing, stability specifications, minimum order sizes, and international shipment protocols.
          </p>
        </div>

        {/* ── Search & Filter Controls ── */}
        <div className="flex flex-col items-center gap-6 mb-10">
          {/* Live Search Well */}
          <div className="relative w-full max-w-xl">
            <div className="relative flex items-center rounded-2xl bg-[#FAFBF9] border border-[#DCDCD2] px-4 py-3 shadow-sm focus-within:border-[#006EDC] focus-within:bg-white focus-within:shadow-md transition-all">
              <Search className="w-4 h-4 text-[#6B7280] mr-3 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions by keyword, dossier, stability, MOQ..."
                className="w-full bg-transparent text-sm font-medium text-[#111111] placeholder:text-[#9CA3AF] focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-slate-400 hover:text-slate-700 ml-2 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* GSAP Rising-Circle Animated Category PillNav */}
          <PillNav
            items={CATEGORIES.map((cat) => ({
              id: cat.id,
              label: cat.label,
              icon: cat.icon,
            }))}
            activeId={activeCategory}
            onSelect={(id) => setActiveCategory(id)}
            baseColor="#082B61"
            pillColor="#FAFBF9"
            pillTextColor="#2A3447"
            hoveredPillTextColor="#FFFFFF"
          />
        </div>

        {/* ── Animated FAQ Accordion List ── */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredFAQs.map((faq) => {
              const isOpen = openIds.includes(faq.id);

              return (
                <motion.div
                  key={faq.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-white border-[#006EDC]/40 shadow-[0_10px_30px_rgba(0,110,220,0.08)]"
                      : "bg-[#FAFBF9]/80 border-[#E5E5E5] hover:border-[#006EDC]/30 hover:bg-white"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer select-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#006EDC]/10 text-[11px] font-bold text-[#006EDC] mb-2 border border-[#006EDC]/20">
                        <span>{faq.badge}</span>
                      </div>
                      <h3
                        className="text-base sm:text-lg font-bold text-[#111111] leading-snug"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        {faq.question}
                      </h3>
                    </div>

                    {/* Animated Rotating Toggle Indicator */}
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-[#006EDC] text-white rotate-180 shadow-md"
                          : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-sm leading-relaxed text-[#555555] border-t border-slate-100">
                          <p className="mb-4">{faq.answer}</p>

                          {faq.highlights && (
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                              {faq.highlights.map((item, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FAFBF9] border border-[#E5E5E5] text-xs font-semibold text-[#333333]"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#008A8A] shrink-0" />
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {filteredFAQs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 bg-[#FAFBF9] rounded-3xl border border-[#DCDCD2] p-8"
            >
              <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <h4
                className="text-lg font-bold text-[#111111]"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                No matching questions found
              </h4>
              <p className="text-xs text-[#6B7280] mt-1">
                Try searching for another topic or reset the search query.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="mt-4 px-5 py-2 rounded-full bg-[#006EDC] text-xs font-bold text-white hover:bg-[#082B61] transition-colors"
              >
                Reset Search
              </button>
            </motion.div>
          )}
        </div>

        {/* ── Link to Dedicated Full FAQ Page ── */}
        <div className="mt-10 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#006EDC] hover:text-[#082B61] transition-colors py-2.5 px-5 rounded-full bg-[#006EDC]/5 hover:bg-[#006EDC]/10 border border-[#006EDC]/15 cursor-pointer shadow-xs"
          >
            <span>Explore Complete Regulatory Knowledge Base & FAQs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
