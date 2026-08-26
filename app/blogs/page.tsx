"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionDivider } from "@/components/SectionDivider";
import { BLOG_POSTS } from "@/data/blogs";
import {
  Search,
  BookOpen,
  Clock,
  ArrowRight,
  FileCheck2,
  ShieldCheck,
  Truck,
  Globe2,
  X,
  Plus,
  Boxes,
  FileText,
  HelpCircle,
  CheckCircle2,
} from "lucide-react";

// ── BLOG CATEGORIES ──
const BLOG_CATEGORIES = [
  { id: "all", label: "All Insights", icon: BookOpen },
  { id: "Regulatory & Dossiers", label: "Regulatory & Dossiers", icon: FileCheck2 },
  { id: "Quality & GMP", label: "Quality & GMP", icon: ShieldCheck },
  { id: "Cold-Chain & Logistics", label: "Cold-Chain", icon: Truck },
  { id: "Market Expansion", label: "Market Expansion", icon: Globe2 },
];

// ── HORIZONTAL SCENARIO CARDS ──
const SCENARIO_CARDS = [
  {
    id: "sc-1",
    timestamp: "MOH Fast-Track",
    title: "Accelerating Module 1–5 approvals across 50+ global ministries",
    accentColor: "#FFB7B2",
  },
  {
    id: "sc-2",
    timestamp: "Zone IVb Stability",
    title: "36-month real-time testing under extreme tropical 30°C/75% RH",
    accentColor: "#A3D9C9",
  },
  {
    id: "sc-3",
    timestamp: "WHO-GMP Auditing",
    title: "End-to-end Grade A cleanroom formulation & batch traceability",
    accentColor: "#C7B8EA",
  },
  {
    id: "sc-4",
    timestamp: "Cold-Chain 2°C–8°C",
    title: "Passive temperature shippers with real-time digital trip telemetry",
    accentColor: "#FFD199",
  },
  {
    id: "sc-5",
    timestamp: "COPP Legalization",
    title: "Apostille authentication & diplomatic embassy consular validation",
    accentColor: "#B5E2FA",
  },
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

export default function SoftlyBlogsAndFAQPage() {
  // Blog State
  const [blogSearchQuery, setBlogSearchQuery] = useState("");
  const [selectedBlogCategory, setSelectedBlogCategory] = useState<string>("all");

  // FAQ State
  const [faqSearchQuery, setFaqSearchQuery] = useState("");
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>("all");
  const [openFaqIds, setOpenFaqIds] = useState<string[]>(["faq-1", "faq-2"]);

  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const toggleFAQ = (id: string) => {
    setOpenFaqIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
    }
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
    <div className="relative min-h-screen bg-[#FDFCF8] text-[#292524] antialiased selection:bg-[#FFB7B2] selection:text-[#292524] overflow-x-hidden font-['Outfit',sans-serif]">
      {/* ── Global Google Fonts ── */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Reenie+Beanie&display=swap');

        .font-reenie {
          font-family: 'Reenie Beanie', cursive;
        }

        .font-outfit {
          font-family: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        /* Hide scrollbars for scenario card track */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* ── Global Persistent Grain Texture Overlay (0.35 opacity) ── */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-35 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      <Navbar />

      <main className="relative pt-32 pb-24">
        {/* ══════════════════════════════════════════════════════════════
            HERO SECTION: 'Softly' Living Room Vibe + Blobs
        ══════════════════════════════════════════════════════════════ */}
        <section className="relative max-w-5xl mx-auto px-6 sm:px-8 pt-8 pb-16 text-center">
          {/* Floating High-Blur Background Blobs */}
          <div
            className="pointer-events-none absolute -top-12 left-1/4 w-80 h-80 rounded-full blur-[90px] opacity-60 animate-pulse [animation-duration:8s]"
            style={{ background: "#FFE4E1" }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute top-10 right-1/4 w-88 h-88 rounded-full blur-[100px] opacity-55 animate-pulse [animation-duration:10s]"
            style={{ background: "#E6E6FA" }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute top-44 left-1/3 w-72 h-72 rounded-full blur-[90px] opacity-50"
            style={{ background: "#E8EFE8" }}
            aria-hidden="true"
          />

          {/* Hero Content */}
          <div className="relative z-10 space-y-5">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8EFE8] border border-[#D8E3D8] text-[#292524] text-xs font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#006EDC]" />
              <span>Zelnex Knowledge &amp; Regulatory Desk</span>
            </div>

            {/* Main Headline with Reenie Beanie Cursive Accent */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#292524] leading-[1.08] max-w-4xl mx-auto">
              Insightful thinking for{" "}
              <span className="font-reenie text-5xl sm:text-7xl md:text-8xl font-normal text-[#006EDC] inline-block -rotate-2 transform">
                mindful
              </span>{" "}
              global healthcare.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#78716C] max-w-[520px] mx-auto leading-relaxed font-normal">
              Technical guides, eCTD submission insights, Zone IVb stability protocols, and cold-chain supply architecture.
            </p>

            {/* Dual Pill CTA & Search Controls */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-xl mx-auto">
              {/* Search Bar */}
              <div className="relative w-full flex items-center rounded-full bg-white border border-[#E7E5E4] px-5 py-3 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] focus-within:border-[#006EDC] focus-within:ring-2 focus-within:ring-[#006EDC]/15 transition-all">
                <Search className="w-4 h-4 text-[#78716C] mr-3 shrink-0" />
                <input
                  type="text"
                  value={blogSearchQuery}
                  onChange={(e) => setBlogSearchQuery(e.target.value)}
                  placeholder="Search CTD, WHO-GMP, stability..."
                  className="w-full bg-transparent text-sm font-medium text-[#292524] placeholder:text-[#A8A29E] focus:outline-none"
                />
                {blogSearchQuery && (
                  <button
                    onClick={() => setBlogSearchQuery("")}
                    className="text-[#78716C] hover:text-[#292524] ml-2 transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Jump to FAQ Button */}
              <a
                href="#faq"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#006EDC] text-white text-xs sm:text-sm font-semibold tracking-tight shadow-sm hover:bg-[#005bb8] hover:scale-105 active:scale-95 transition-all duration-300 shrink-0 cursor-pointer"
              >
                <span>Jump to FAQ</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            HORIZONTAL SCENARIO SCROLL
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-8 border-y border-[#E7E5E4]/60 bg-[#F5F4EE]/40 my-8">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#78716C]">
                Key Scenarios &amp; Capabilities
              </span>
              <span className="text-xs text-[#78716C] font-mono">← Scroll horizontally →</span>
            </div>

            {/* Horizontal Track */}
            <div className="flex items-center gap-4 overflow-x-auto no-scrollbar pb-2 pt-1">
              {SCENARIO_CARDS.map((card) => (
                <div
                  key={card.id}
                  className="group flex-shrink-0 w-[288px] h-[160px] p-5 rounded-[24px] bg-white border border-[#E7E5E4] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_-2px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  <span className="text-xs font-semibold text-[#78716C] font-mono">
                    {card.timestamp}
                  </span>
                  <p className="text-[17px] font-bold text-[#292524] leading-snug tracking-tight group-hover:text-[#006EDC] transition-colors duration-200">
                    {card.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION: TECHNICAL INSIGHTS & ARTICLES (DIARY STYLE)
        ══════════════════════════════════════════════════════════════ */}
        <section id="blogs" className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
            {BLOG_CATEGORIES.map((cat) => {
              const isActive = selectedBlogCategory === cat.id;
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedBlogCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#006EDC] text-white shadow-sm scale-105"
                      : "bg-white text-[#78716C] border border-[#E7E5E4] hover:border-[#006EDC]/40 hover:text-[#292524]"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Article Cards Grid (Diary Notes with Organic Rotation) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredPosts.map((post, idx) => {
              const rotClass =
                idx % 3 === 0
                  ? "-rotate-[0.8deg] hover:rotate-0"
                  : idx % 3 === 1
                  ? "rotate-[0.9deg] hover:rotate-0"
                  : "-rotate-[0.5deg] hover:rotate-0";

              return (
                <article
                  key={post.slug}
                  className={`group relative flex flex-col justify-between p-7 sm:p-8 rounded-[32px] bg-white border border-[#E7E5E4] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_32px_-4px_rgba(0,0,0,0.09)] transition-all duration-300 ${rotClass} transform overflow-hidden`}
                >
                  <div>
                    {/* Top Metadata */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-[#E8EFE8] text-[#292524] text-[11px] font-semibold tracking-wide">
                        {post.category}
                      </span>
                      <span className="text-xs text-[#78716C] font-mono flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Article Title */}
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#292524] leading-snug group-hover:text-[#006EDC] transition-colors duration-200 mb-3">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-[#78716C] leading-relaxed line-clamp-3 mb-6 font-normal">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Bottom Author & Signature Style */}
                  <div className="pt-4 border-t border-[#F5F4EE]">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          width={32}
                          height={32}
                          className="w-8 h-8 rounded-full object-cover border border-[#E7E5E4]"
                        />
                        <div>
                          <span className="text-xs font-semibold text-[#292524] block">
                            {post.author.name}
                          </span>
                          <span className="text-[10px] text-[#78716C] font-mono">
                            {post.date}
                          </span>
                        </div>
                      </div>

                      <Link
                        href={`/blogs/${post.slug}`}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#F5F4EE] text-[#292524] group-hover:bg-[#006EDC] group-hover:text-white transition-all duration-200"
                        aria-label={`Read ${post.title}`}
                      >
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {/* Reenie Beanie Cursive Signature Line */}
                    <div className="flex items-center gap-2 text-[#78716C]/80">
                      <div className="w-8 h-px bg-[#E7E5E4]" />
                      <span className="font-reenie text-xl text-[#78716C]">
                        verified regulatory guide
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SIGNATURE ZELNEX BLUE WAVE RIBBON (Organic Divider Between Sections)
        ══════════════════════════════════════════════════════════════ */}
        <div className="my-10 relative overflow-hidden py-2" aria-hidden="true">
          {/* Top subtle blue ribbon wave */}
          <SectionDivider from="#006EDC" to="#FDFCF8" height={42} />
          {/* Bottom flipped blue ribbon wave */}
          <SectionDivider from="#FDFCF8" to="#006EDC" flip height={42} />
        </div>

        {/* ══════════════════════════════════════════════════════════════
            SECTION: INTERACTIVE FAQ ACCORDION (SOFTLY THEME)
        ══════════════════════════════════════════════════════════════ */}
        <section id="faq" className="max-w-5xl mx-auto px-6 sm:px-8 py-12">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#EFEDF4] border border-[#DDD8E8] text-[#292524] text-xs font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-[#006EDC]" />
              <span>Common Inquiries &amp; Technical Support</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#292524] leading-tight">
              Frequently asked{" "}
              <span className="font-reenie text-4xl sm:text-6xl text-[#006EDC]">
                questions
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#78716C] mt-2">
              Direct answers regarding dossier formatting, stability data, manufacturing audits, and shipping logistics.
            </p>

            {/* FAQ Search Bar */}
            <div className="mt-6 relative max-w-md mx-auto">
              <div className="relative flex items-center rounded-full bg-white border border-[#E7E5E4] px-4 py-2.5 shadow-xs focus-within:border-[#006EDC] transition-all">
                <Search className="w-4 h-4 text-[#78716C] mr-2.5 shrink-0" />
                <input
                  type="text"
                  value={faqSearchQuery}
                  onChange={(e) => setFaqSearchQuery(e.target.value)}
                  placeholder="Filter questions by keyword..."
                  className="w-full bg-transparent text-xs sm:text-sm font-medium text-[#292524] placeholder:text-[#A8A29E] focus:outline-none"
                />
                {faqSearchQuery && (
                  <button
                    onClick={() => setFaqSearchQuery("")}
                    className="text-[#78716C] hover:text-[#292524] ml-2 transition-colors cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* FAQ Category Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
            {FAQ_CATEGORIES.map((cat) => {
              const isActive = activeFaqCategory === cat.id;
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFaqCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#006EDC] text-white shadow-xs"
                      : "bg-white text-[#78716C] border border-[#E7E5E4] hover:text-[#292524] hover:border-[#006EDC]/30"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Accordion Container */}
          <div className="space-y-3.5">
            {filteredFAQs.map((faq) => {
              const isOpen = openFaqIds.includes(faq.id);

              return (
                <div
                  key={faq.id}
                  className="rounded-[20px] bg-white border border-[#E7E5E4] shadow-[0_2px_12px_-2px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex items-center justify-between text-left p-6 sm:p-7 gap-4 cursor-pointer select-none"
                    aria-expanded={isOpen}
                  >
                    <div className="space-y-1">
                      <span className="inline-block text-[10.5px] font-semibold text-[#006EDC] uppercase font-mono tracking-wider">
                        {faq.badge}
                      </span>
                      <h3 className="text-base sm:text-lg font-medium text-[#292524] leading-snug">
                        {faq.question}
                      </h3>
                    </div>

                    {/* Plus Icon that Rotates 45 Degrees */}
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F5F4EE] text-[#292524] transition-transform duration-300 ${
                        isOpen ? "rotate-45 bg-[#006EDC] text-white" : "rotate-0"
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Smooth Framer Motion Collapse/Expand */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 sm:px-7 pb-6 pt-0 text-sm sm:text-[15px] text-[#78716C] leading-relaxed border-t border-[#F5F4EE] pt-4">
                          <p>{faq.answer}</p>
                          {faq.tags && (
                            <div className="flex items-center gap-2 flex-wrap mt-4">
                              {faq.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-[11px] font-mono text-[#006EDC] bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            WAITLIST / REGULATORY CONVERSION (SOFTLY STYLE)
        ══════════════════════════════════════════════════════════════ */}
        <section className="max-w-4xl mx-auto px-6 sm:px-8 py-16">
          <div className="relative rounded-[36px] bg-[#292524] text-white p-8 sm:p-14 text-center overflow-hidden shadow-xl">
            {/* Soft Floating Blobs inside the dark container */}
            <div
              className="pointer-events-none absolute -top-20 -left-20 w-64 h-64 rounded-full blur-[80px] opacity-25"
              style={{ background: "#006EDC" }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-[80px] opacity-20"
              style={{ background: "#00bfb5" }}
              aria-hidden="true"
            />

            <div className="relative z-10 space-y-4 max-w-lg mx-auto">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 border border-white/15 mb-2">
                <span className="w-3.5 h-3.5 rounded-full bg-[#006EDC]" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Stay updated on{" "}
                <span className="font-reenie text-4xl sm:text-5xl text-cyan-300">
                  global approvals
                </span>
              </h2>

              <p className="text-sm text-stone-300 leading-relaxed font-normal">
                Receive quarterly eCTD filing summaries, Zone IVb stability updates, and new formulation releases directly to your inbox.
              </p>

              {newsletterSubscribed ? (
                <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4 text-cyan-300" />
                  <span>Thank you for subscribing to Zelnex insights.</span>
                </div>
              ) : (
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-2.5 max-w-md mx-auto"
                >
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your corporate email..."
                    className="w-full px-5 py-3 rounded-full bg-stone-800 border border-stone-700 text-sm text-white placeholder:text-stone-400 focus:outline-none focus:border-[#006EDC] transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#006EDC] text-white text-xs sm:text-sm font-bold tracking-tight hover:bg-[#005bb8] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ── SectionDivider Wave directly into the Deep Dark Footer ── */}
        <SectionDivider from="#FDFCF8" to="#06132d" flip height={72} />
      </main>

      <Footer />
    </div>
  );
}
