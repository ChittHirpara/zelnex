"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PillNav } from "@/components/ui/PillNav";
import { BLOG_POSTS, type BlogPost } from "@/data/blogs";
import {
  Search,
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  FileCheck2,
  ShieldCheck,
  Truck,
  Globe2,
  X,
  FileDown,
  HelpCircle,
  ChevronDown,
  Boxes,
  FileText,
} from "lucide-react";

// ── BLOG CATEGORIES ──
const BLOG_CATEGORIES = [
  { id: "all", label: "All Insights", icon: BookOpen },
  { id: "Regulatory & Dossiers", label: "Regulatory & Dossiers", icon: FileCheck2 },
  { id: "Quality & GMP", label: "Quality & GMP", icon: ShieldCheck },
  { id: "Cold-Chain & Logistics", label: "Cold-Chain & Logistics", icon: Truck },
  { id: "Market Expansion", label: "Market Expansion", icon: Globe2 },
];

// ── FAQ DATA ──
interface FAQItem {
  id: string;
  category: "dossier" | "quality" | "export" | "logistics" | "legalization";
  question: string;
  answer: string;
  badge: string;
  tags: string[];
}

const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    category: "dossier",
    question: "What technical dossier formats do you provide for international MOH drug registration?",
    answer:
      "We provide complete Common Technical Dossier (CTD) and electronic CTD (eCTD) formats spanning Modules 1 through 5, as well as ASEAN Common Technical Dossier (ACTD) formats. This includes Module 1 regional administrative data, Module 2 Quality Overall Summaries (QOS), Module 3 chemical and pharmaceutical quality documentation, Active Pharmaceutical Ingredient (API) Drug Master Files (Open Part / Letter of Access), finished product Certificates of Analysis (CoA), method validation reports, and process validation data.",
    badge: "Dossier & eCTD",
    tags: ["CTD", "eCTD", "ACTD", "DMF", "Module 1-5", "Registration"],
  },
  {
    id: "faq-2",
    category: "quality",
    question: "Are your manufacturing facilities audited and certified under WHO-GMP standards?",
    answer:
      "Yes. 100% of our pharmaceutical formulations are sourced and manufactured in certified WHO-GMP and ISO 9001:2015 accredited facilities. Our manufacturing partners undergo periodic regulatory audits by national health authorities and international inspection agencies. We provide certified copies of valid Good Manufacturing Practice (GMP) certificates, manufacturing site licenses, and Site Master Files (SMF) for tender submissions and dossier filings.",
    badge: "WHO-GMP & Quality",
    tags: ["WHO-GMP", "ISO 9001", "Site Master File", "Audit", "Inspection"],
  },
  {
    id: "faq-3",
    category: "quality",
    question: "Do you have real-time Zone IVb stability testing data for tropical export markets?",
    answer:
      "All export formulations are subjected to rigorous long-term and accelerated stability testing in environmental chambers strictly aligned with ICH Q1A (R2) and WHO guidelines. We provide real-time Zone IVb stability reports (30°C ± 2°C / 75% RH ± 5% RH) for up to 36 months, as well as accelerated stability datasets (40°C ± 2°C / 75% RH ± 5% RH) for 6 months. Physical, chemical, and microbiological parameters are validated to ensure therapeutic stability in hot and humid tropical climates.",
    badge: "Stability & Shelf-Life",
    tags: ["Zone IVb", "ICH Guidelines", "Stability Chamber", "Shelf-Life", "Tropical"],
  },
  {
    id: "faq-4",
    category: "export",
    question: "What are your commercial Minimum Order Quantities (MOQs) and production lead times?",
    answer:
      "Commercial MOQs vary by dosage form and packaging specifications. Standard MOQs range from 50,000 to 100,000 tablets/capsules for solid oral dosage forms in blister packaging, and 5,000 to 10,000 units for liquid syrups and sterile injectables. Typical production and dispatch lead times are 4 to 6 weeks following regulatory artwork approval and commercial purchase order confirmation.",
    badge: "MOQs & Production",
    tags: ["MOQ", "Lead Time", "Batch Sizing", "Production", "Contract Mfg"],
  },
  {
    id: "faq-5",
    category: "export",
    question: "Do you support private label manufacturing, contract branding, and custom export packaging?",
    answer:
      "Yes. We offer end-to-end institutional private labeling and customized commercial export packaging. Our in-house regulatory design team assists with localized bilingual artwork compliance (English/French, English/Arabic, English/Spanish, Portuguese, and Russian), security hologram integration, QR serialization, and tamper-evident packaging to satisfy local MOH labeling directives.",
    badge: "Private Labeling",
    tags: ["Private Label", "Branding", "Custom Packaging", "Bilingual Artwork", "Hologram"],
  },
  {
    id: "faq-6",
    category: "logistics",
    question: "How do you manage cold-chain logistics and international temperature-controlled freight?",
    answer:
      "We partner with IATA-certified temperature-controlled air freight and refrigerated sea container carriers (Reefer). For thermolabile biologics, vaccines, and lyophilized vials requiring 2°C to 8°C or 15°C to 25°C conditions, we utilize qualified passive phase-change shippers with multi-point calibrated digital temperature data loggers that provide real-time cryptographic trip telemetry upon destination arrival.",
    badge: "Cold-Chain Logistics",
    tags: ["Cold-Chain", "2°C-8°C", "Data Logger", "Reefer Cargo", "Air Freight"],
  },
  {
    id: "faq-7",
    category: "legalization",
    question: "How do you handle Free Sale Certificates (FSC) and Embassy Legalization?",
    answer:
      "We provide official Certificates of Pharmaceutical Product (COPP) issued under the WHO certification scheme by the national drug licensing authority, as well as Free Sale Certificates (FSC). For countries requiring diplomatic legalization, we manage apostille authentication from the Ministry of External Affairs (MEA) and consular legalization through destination country embassies.",
    badge: "Legalization & Apostille",
    tags: ["COPP", "FSC", "MEA Apostille", "Embassy Legalization", "Consular Attestation"],
  },
  {
    id: "faq-8",
    category: "dossier",
    question: "Can you provide Bioequivalence (BE) and clinical safety data for tender bidding?",
    answer:
      "Yes. For products requiring bioequivalence verification, we provide full BE clinical study reports conducted in GCP-compliant clinical research centers comparing our formulations with international innovator reference products (US-FDA RLD / European reference brands), along with comparative in vitro dissolution profiles across 3 pH media.",
    badge: "Bioequivalence & BE",
    tags: ["Bioequivalence", "BE Study", "In Vitro Dissolution", "GCP", "Innovator Comparison"],
  },
];

const FAQ_CATEGORIES = [
  { id: "all", label: "All Questions", icon: HelpCircle },
  { id: "dossier", label: "Dossiers & eCTD", icon: FileCheck2 },
  { id: "quality", label: "WHO-GMP & Quality", icon: ShieldCheck },
  { id: "export", label: "Export & MOQs", icon: Boxes },
  { id: "logistics", label: "Cold-Chain & Logistics", icon: Truck },
  { id: "legalization", label: "FSC & Legalization", icon: FileText },
];

export default function KnowledgePage() {
  // Blog State
  const [blogSearchQuery, setBlogSearchQuery] = useState("");
  const [selectedBlogCategory, setSelectedBlogCategory] = useState<string>("all");

  // FAQ State
  const [faqSearchQuery, setFaqSearchQuery] = useState("");
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>("all");
  const [openFaqIds, setOpenFaqIds] = useState<string[]>(["faq-1", "faq-2"]);

  const toggleFAQ = (id: string) => {
    setOpenFaqIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedBlogCategory === "all" || post.category === selectedBlogCategory;
      const q = blogSearchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q)) ||
        post.author.name.toLowerCase().includes(q);

      return matchesCategory && matchesQuery;
    });
  }, [selectedBlogCategory, blogSearchQuery]);

  const featuredPost = useMemo(() => {
    return BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
  }, []);

  const filteredFAQs = useMemo(() => {
    return FAQ_DATA.filter((faq) => {
      const matchesCategory =
        activeFaqCategory === "all" || faq.category === activeFaqCategory;
      const query = faqSearchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query) ||
        faq.badge.toLowerCase().includes(query) ||
        faq.tags.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesQuery;
    });
  }, [activeFaqCategory, faqSearchQuery]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-[#FAFBF9] via-white to-[#FAFBF9] pt-28 pb-20 select-none">
        {/* ══════════════════════════════════════════════════════════════
            SECTION 1: BLOGS & REGULATORY INSIGHTS (FIRST)
        ══════════════════════════════════════════════════════════════ */}
        <section id="blogs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          {/* ── Blog Header ── */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#006EDC]/10 border border-[#006EDC]/20 mb-4 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#006EDC] animate-pulse" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#006EDC]">
                Zelnex Regulatory Insights
              </p>
            </div>

            <h1
              className="text-4xl sm:text-5xl font-bold text-[#111111] tracking-tight leading-[1.15] mb-4"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Pharmaceutical Insights & Knowledge Hub
            </h1>

            <p className="text-base text-[#6B7280] leading-relaxed">
              Technical guides, eCTD submission guidelines, Zone IVb stability protocols, and cold-chain logistics for international distributors and hospital procurement authorities.
            </p>

            {/* Blog Search Input */}
            <div className="mt-8 relative max-w-xl mx-auto">
              <div className="relative flex items-center rounded-2xl bg-white border border-[#DCDCD2] px-4 py-3.5 shadow-sm focus-within:border-[#006EDC] focus-within:ring-2 focus-within:ring-[#006EDC]/10 transition-all">
                <Search className="w-4 h-4 text-[#6B7280] mr-3 shrink-0" />
                <input
                  type="text"
                  value={blogSearchQuery}
                  onChange={(e) => setBlogSearchQuery(e.target.value)}
                  placeholder="Search articles by topic, eCTD, WHO-GMP, cold-chain..."
                  className="w-full bg-transparent text-sm font-medium text-[#111111] placeholder:text-[#9CA3AF] focus:outline-none"
                />
                {blogSearchQuery && (
                  <button
                    onClick={() => setBlogSearchQuery("")}
                    className="text-slate-400 hover:text-slate-700 ml-2 transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* ── Category PillNav ── */}
          <div className="mb-12 flex justify-center">
            <PillNav
              items={BLOG_CATEGORIES.map((cat) => ({
                id: cat.id,
                label: cat.label,
                icon: cat.icon,
              }))}
              activeId={selectedBlogCategory}
              onSelect={(id) => setSelectedBlogCategory(id)}
              baseColor="#082B61"
              pillColor="#FAFBF9"
              pillTextColor="#2A3447"
              hoveredPillTextColor="#FFFFFF"
            />
          </div>

          {/* ── Flagship Featured Article (When on 'all' and no search) ── */}
          {selectedBlogCategory === "all" && !blogSearchQuery && featuredPost && (
            <div className="mb-14">
              <Link
                href={`/blogs/${featuredPost.slug}`}
                className="group relative block overflow-hidden rounded-3xl bg-white border border-[#E5E5E5] shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,110,220,0.12)] hover:border-[#006EDC]/40 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
                  {/* Image */}
                  <div className="relative h-64 sm:h-80 lg:h-full lg:min-h-[380px] lg:col-span-6 overflow-hidden">
                    <Image
                      src={featuredPost.coverImage}
                      alt={featuredPost.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#082B61] text-white text-[11px] font-bold shadow-md">
                      <Sparkles className="w-3.5 h-3.5 text-[#00f2fe]" />
                      <span>Featured Guide</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 lg:p-10 lg:col-span-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-xs font-semibold text-[#006EDC] mb-3">
                        <span>{featuredPost.category}</span>
                        <span>•</span>
                        <span className="text-slate-400 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {featuredPost.readTime}
                        </span>
                      </div>

                      <h2
                        className="text-2xl sm:text-3xl font-bold text-[#111111] group-hover:text-[#006EDC] transition-colors leading-tight mb-3"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        {featuredPost.title}
                      </h2>

                      <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    {/* Author & CTA */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={featuredPost.author.avatar}
                          alt={featuredPost.author.name}
                          className="w-10 h-10 rounded-full object-cover border border-slate-200"
                        />
                        <div>
                          <div className="text-xs font-bold text-[#111111]">
                            {featuredPost.author.name}
                          </div>
                          <div className="text-[11px] text-slate-500">
                            {featuredPost.date}
                          </div>
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006EDC] group-hover:translate-x-1 transition-transform">
                        <span>Read Guide</span>
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* ── Articles Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post) => (
                <motion.article
                  key={post.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="group flex flex-col justify-between rounded-3xl overflow-hidden bg-white border border-[#E5E5E5] hover:border-[#006EDC]/40 shadow-xs hover:shadow-[0_16px_36px_rgba(0,110,220,0.08)] hover:-translate-y-1 transition-all duration-300"
                >
                  <Link href={`/blogs/${post.slug}`} className="block flex-1 flex flex-col">
                    {/* Cover Image */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 z-10 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md border border-white/50 text-[10.5px] font-bold text-[#082B61]">
                        {post.category}
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 text-[11px] text-slate-400 font-medium mb-2.5">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>

                        <h3
                          className="text-lg font-bold text-[#111111] group-hover:text-[#006EDC] transition-colors leading-snug mb-2.5"
                          style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                          {post.title}
                        </h3>

                        <p className="text-xs text-[#555555] leading-relaxed line-clamp-3 mb-4">
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Author row */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-7 h-7 rounded-full object-cover border border-slate-200"
                          />
                          <span className="text-xs font-semibold text-[#111111]">
                            {post.author.name}
                          </span>
                        </div>

                        <span className="inline-flex items-center gap-1 text-xs font-bold text-[#006EDC]">
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {/* ── Whitepaper Callout ── */}
          <div className="mt-16 rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-[#0b1e48] via-[#082b61] to-[#040d22] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[11px] font-bold text-[#00f2fe] uppercase tracking-wider mb-2">
                <FileDown className="w-3.5 h-3.5" />
                <span>2026 Pharmaceutical Export Whitepaper</span>
              </div>
              <h3
                className="text-2xl font-bold text-white mb-2"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Download Complete Global Regulatory Dossier Checklist
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Get our technical guide on eCTD preparation, bioequivalence protocols, and stability parameters for emerging market drug registrations.
              </p>
            </div>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#00f2fe] to-[#006edc] text-[#040d22] font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-[0_0_30px_rgba(0,242,254,0.5)] transition-all shrink-0 cursor-pointer"
            >
              <span>Request Full Dossier Pack</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 2: FREQUENTLY ASKED QUESTIONS (THEN FAQ)
        ══════════════════════════════════════════════════════════════ */}
        <section id="faq" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-slate-200/80">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#006EDC]/10 border border-[#006EDC]/20 mb-4 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#006EDC] animate-pulse" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#006EDC]">
                Frequently Asked Questions
              </p>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#111111] tracking-tight leading-[1.15] mb-4"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Technical & Regulatory Knowledge Base
            </h2>

            <p className="text-base text-[#6B7280] leading-relaxed">
              Find detailed specifications regarding our dossier support, WHO-GMP quality certificates, minimum order quantities, and temperature-controlled logistics.
            </p>

            {/* FAQ Search Well */}
            <div className="mt-8 relative max-w-xl mx-auto">
              <div className="relative flex items-center rounded-2xl bg-white border border-[#DCDCD2] px-4 py-3.5 shadow-sm focus-within:border-[#006EDC] focus-within:ring-2 focus-within:ring-[#006EDC]/10 transition-all">
                <Search className="w-4 h-4 text-[#6B7280] mr-3 shrink-0" />
                <input
                  type="text"
                  value={faqSearchQuery}
                  onChange={(e) => setFaqSearchQuery(e.target.value)}
                  placeholder="Search FAQ: eCTD, Zone IVb, MOQ, Cold-chain, Legalization..."
                  className="w-full bg-transparent text-sm font-medium text-[#111111] placeholder:text-[#9CA3AF] focus:outline-none"
                />
                {faqSearchQuery && (
                  <button
                    onClick={() => setFaqSearchQuery("")}
                    className="text-slate-400 hover:text-slate-700 ml-2 transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* ── FAQ Category PillNav ── */}
          <div className="mb-10 flex justify-center">
            <PillNav
              items={FAQ_CATEGORIES.map((cat) => ({
                id: cat.id,
                label: cat.label,
                icon: cat.icon,
              }))}
              activeId={activeFaqCategory}
              onSelect={(id) => setActiveFaqCategory(id)}
              baseColor="#082B61"
              pillColor="#FAFBF9"
              pillTextColor="#2A3447"
              hoveredPillTextColor="#FFFFFF"
            />
          </div>

          {/* ── FAQ Accordions ── */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <AnimatePresence mode="popLayout">
              {filteredFAQs.map((faq) => {
                const isOpen = openFaqIds.includes(faq.id);

                return (
                  <motion.div
                    key={faq.id}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "bg-white border-[#006EDC]/40 shadow-[0_12px_32px_rgba(0,110,220,0.08)]"
                        : "bg-white/80 border-[#E5E5E5] hover:border-[#006EDC]/30 hover:bg-white"
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
                          className="text-base sm:text-lg font-bold text-[#111111] leading-snug tracking-tight hover:text-[#006EDC] transition-colors"
                          style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                          {faq.question}
                        </h3>
                      </div>

                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isOpen
                            ? "rotate-180 bg-[#006EDC] text-white shadow-sm"
                            : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#4B5563] leading-relaxed border-t border-slate-100/80">
                            <p>{faq.answer}</p>

                            {/* Tag Chips */}
                            <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                              {faq.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#FAFBF9] border border-slate-200 text-slate-600"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* ── Direct Inquiry Callout ── */}
          <div className="mt-16 max-w-4xl mx-auto rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#082B61] via-[#0B1E48] to-[#040D22] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[11px] font-bold text-[#00f2fe] uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>24-Hour Regulatory Response SLA</span>
              </div>
              <h3
                className="text-2xl font-bold text-white mb-2"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Have a specific regulatory or quotation inquiry?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Our export team provides complete CTD dossier lists, COPP legalization, and customized commercial batch pricing within 24 hours.
              </p>
            </div>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#00f2fe] to-[#006edc] text-[#040d22] font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-[0_0_30px_rgba(0,242,254,0.5)] transition-all shrink-0 cursor-pointer"
            >
              <span>Contact Export Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
