"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";
import {
  X,
  CheckCircle2,
  User,
  Mail,
  Globe,
  FileText,
  Sparkles,
  ArrowRight,
  Plus,
  Minus,
  Phone,
  Send,
} from "lucide-react";

export function Footer() {
  const { t } = useLanguage();
  // Modal & Newsletter States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSubmitted, setModalSubmitted] = useState(false);

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const companyLinks = t.footer.companyLinks;
  const resourceLinks = t.footer.resourceLinks;
  const qualityLinks = t.footer.qualityLinks;

  // Mobile Accordion state (first column open by default for crawlability)
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
    }
  };

  const handleModalSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setModalSubmitted(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setTimeout(() => setModalSubmitted(false), 300);
  };

  return (
    <footer id="footer" className="relative w-full bg-[#06132d] text-white overflow-hidden select-none border-t border-white/[0.08]">
      {/* ── Signature Radial Light Cyan & Luminous Blue Glow (50% 115%) ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
        style={{
          background: `
            radial-gradient(
              circle 1200px at 50% 115%,
              #ffffff 0%,
              #dbeafe 14%,
              #93c5fd 28%,
              #38bdf8 42%,
              #0284c7 56%,
              #0369a1 70%,
              #0a1c3d 85%,
              #06132d 100%
            )
          `,
        }}
      />

      {/* ── Soft Blurred Luminous Cyan Glow-Bloom Highlight behind Wordmark ── */}
      <div
        className="pointer-events-none absolute bottom-12 left-1/2 -translate-x-1/2 w-[90%] max-w-[1400px] h-[300px] rounded-full blur-[110px] opacity-70 z-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(56, 189, 248, 0.75) 0%, rgba(2, 132, 199, 0.5) 45%, transparent 75%)",
        }}
      />

      {/* ── Subtle 4% Fractal Noise Grain Overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Full-Screen Width Fluid Container ── */}
      <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:px-20 pt-8 sm:pt-10 pb-6 flex flex-col justify-between">
        {/* ── Top Context Bar ── */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/15">
          <div className="flex items-center gap-3">
            <div className="relative px-3 py-1.5 rounded-xl bg-white/95 border border-white/40 shadow-sm backdrop-blur-md">
              <Image
                src="/brand/zelnex-official-logo.png"
                alt="Zelnex Pharmaceuticals Pvt. Ltd."
                width={130}
                height={36}
                className="h-6 w-auto object-contain"
              />
            </div>
            <span className="text-xs font-semibold tracking-wide text-cyan-100">
              Caring for Life
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-medium text-cyan-100/90">
            <Link href="/overview" className="hover:text-white transition-colors">Overview</Link>
            <Link href="/#expertise" className="hover:text-white transition-colors">Expertise</Link>
            <Link href="/#products" className="hover:text-white transition-colors">Products</Link>
            <Link href="/#categories" className="hover:text-white transition-colors">Categories</Link>
            <Link href="/#certifications" className="hover:text-white transition-colors">Certifications</Link>
            <Link href="/#network" className="hover:text-white transition-colors">Network</Link>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="group flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold text-white transition-all cursor-pointer border border-white/30 hover:border-white/60 shadow-sm"
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(56, 189, 248, 0.35) 100%)",
              backdropFilter: "blur(12px)",
            }}
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
            <span>Partner with Zelnex</span>
            <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* ── Top 12-Column Grid Full Width ── */}
        <div className="pt-8 pb-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Brand & Newsletter (Left 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white leading-snug">
              Advancing healthcare
              <br />
              <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-200 bg-clip-text text-transparent">
                across 50+ global nations.
              </span>
            </h3>

            <p className="mt-3 text-xs sm:text-[13.5px] leading-relaxed text-cyan-50/90 max-w-lg font-sans">
              {t.footer.newsletterDesc}
            </p>

            {/* Newsletter Pill Capture */}
            <div className="mt-5 w-full max-w-md">
              <span className="block text-[11px] font-semibold text-cyan-100 mb-1.5 font-sans">
                {t.footer.newsletterTitle}
              </span>

              {newsletterSubscribed ? (
                <div className="flex items-center gap-2 rounded-full bg-cyan-950/60 border border-cyan-300/40 px-4 py-2.5 text-xs text-white backdrop-blur-md">
                  <CheckCircle2 className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span>{t.footer.newsletterSuccess}</span>
                </div>
              ) : (
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="relative flex items-center rounded-full bg-white/10 border border-white/25 p-1 focus-within:border-white transition-all backdrop-blur-xl shadow-md"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-200 ml-3 shrink-0" />
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder={t.footer.newsletterPlaceholder}
                    className="w-full bg-transparent px-3 py-1.5 text-xs sm:text-[13px] text-white placeholder:italic placeholder:text-white/50 outline-none font-sans"
                  />
                  <button
                    type="submit"
                    className="shrink-0 flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold text-[#06132d] shadow-md transition-all duration-300 hover:scale-[1.03] cursor-pointer bg-white hover:bg-cyan-50"
                  >
                    <span>{t.footer.newsletterBtn}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#06132d]" />
                  </button>
                </form>
              )}

              <span className="block text-[10.5px] text-white/60 mt-1.5 font-sans">
                No spam. Unsubscribe anytime.
              </span>
            </div>
          </div>

          {/* Sitelink Columns (Right 7 Cols) */}
          <div className="lg:col-span-7">
            {/* Desktop / Tablet: 3-Up Row */}
            <div className="hidden sm:grid grid-cols-3 gap-8">
              {/* Column 1: Company */}
              <div>
                <h4 className="font-['Space_Grotesk'] text-[11.5px] font-extrabold uppercase tracking-[0.2em] text-cyan-200 mb-4">
                  {t.footer.companyCol}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {companyLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group relative inline-block text-xs sm:text-[13px] text-white/90 transition-colors hover:text-white font-sans"
                      >
                        <span>{link.label}</span>
                        <span
                          className="absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full"
                          style={{
                            background: "linear-gradient(90deg, #ffffff, #38bdf8)",
                          }}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: Resources */}
              <div>
                <h4 className="font-['Space_Grotesk'] text-[11.5px] font-extrabold uppercase tracking-[0.2em] text-cyan-200 mb-4">
                  {t.footer.resourcesCol}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {resourceLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group relative inline-block text-xs sm:text-[13px] text-white/90 transition-colors hover:text-white font-sans"
                      >
                        <span>{link.label}</span>
                        <span
                          className="absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full"
                          style={{
                            background: "linear-gradient(90deg, #ffffff, #38bdf8)",
                          }}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Quality */}
              <div>
                <h4 className="font-['Space_Grotesk'] text-[11.5px] font-extrabold uppercase tracking-[0.2em] text-cyan-200 mb-4">
                  {t.footer.qualityCol}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {qualityLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group relative inline-block text-xs sm:text-[13px] text-white/90 transition-colors hover:text-white font-sans"
                      >
                        <span>{link.label}</span>
                        <span
                          className="absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full"
                          style={{
                            background: "linear-gradient(90deg, #ffffff, #38bdf8)",
                          }}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mobile (<640px): Tap-to-Expand Accordions */}
            <div className="sm:hidden flex flex-col divide-y divide-white/15 border-y border-white/15">
              {/* Accordion 1: Company */}
              <div className="py-3">
                <button
                  onClick={() => toggleAccordion(0)}
                  className="w-full flex items-center justify-between text-xs font-extrabold uppercase tracking-[0.16em] text-white py-1 cursor-pointer font-['Space_Grotesk']"
                >
                  <span>{t.footer.companyCol}</span>
                  {openAccordion === 0 ? <Minus className="w-4 h-4 text-cyan-300" /> : <Plus className="w-4 h-4" />}
                </button>
                {openAccordion === 0 && (
                  <ul className="mt-2.5 flex flex-col gap-2 pl-2">
                    {companyLinks.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className="text-xs text-white/80 hover:text-white font-sans">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Accordion 2: Resources */}
              <div className="py-3">
                <button
                  onClick={() => toggleAccordion(1)}
                  className="w-full flex items-center justify-between text-xs font-extrabold uppercase tracking-[0.16em] text-white py-1 cursor-pointer font-['Space_Grotesk']"
                >
                  <span>{t.footer.resourcesCol}</span>
                  {openAccordion === 1 ? <Minus className="w-4 h-4 text-cyan-300" /> : <Plus className="w-4 h-4" />}
                </button>
                {openAccordion === 1 && (
                  <ul className="mt-2.5 flex flex-col gap-2 pl-2">
                    {resourceLinks.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className="text-xs text-white/80 hover:text-white font-sans">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Accordion 3: Quality */}
              <div className="py-3">
                <button
                  onClick={() => toggleAccordion(2)}
                  className="w-full flex items-center justify-between text-xs font-extrabold uppercase tracking-[0.16em] text-white py-1 cursor-pointer font-['Space_Grotesk']"
                >
                  <span>{t.footer.qualityCol}</span>
                  {openAccordion === 2 ? <Minus className="w-4 h-4 text-cyan-300" /> : <Plus className="w-4 h-4" />}
                </button>
                {openAccordion === 2 && (
                  <ul className="mt-2.5 flex flex-col gap-2 pl-2">
                    {qualityLinks.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className="text-xs text-white/80 hover:text-white font-sans">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── Giant Full-Width Oversized Wordmark ── */}
        <div className="relative pt-4 pb-0 select-none text-left overflow-hidden w-full">
          <h1
            className="font-['Space_Grotesk'] text-[17vw] font-extrabold tracking-tighter leading-none m-0 p-0 w-full"
            style={{
              background: "linear-gradient(180deg, #ffffff 0%, #e0f2fe 55%, rgba(186, 230, 253, 0.75) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ZELNEX
          </h1>
        </div>

        {/* ── Legal & Social Bar with Dark Gradient Scrim ── */}
        <div className="relative pt-4 border-t border-white/15">
          {/* Dark Ink Scrim Underneath for WCAG Readability */}
          <div
            className="pointer-events-none absolute inset-0 -top-6 -bottom-6 -mx-10 bg-gradient-to-t from-[#06132d] via-[#06132d]/85 to-transparent z-0"
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cyan-100/80 font-sans">
            {/* Copyright */}
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} Zelnex Pharmaceuticals Pvt. Ltd. {t.footer.allRightsReserved}
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-5 text-cyan-100/75">
              <Link href="/#certifications" className="hover:text-white transition-colors">
                {t.footer.privacy}
              </Link>
              <Link href="/#certifications" className="hover:text-white transition-colors">
                {t.footer.terms}
              </Link>
              <Link href="/#certifications" className="hover:text-white transition-colors">
                {t.footer.whoGmp}
              </Link>
            </div>

            {/* 4 Circular Social / Contact Chips that Lift on Hover */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white border border-white/20 transition-all duration-300 hover:scale-110 hover:bg-white hover:text-[#06132d] hover:shadow-[0_0_14px_rgba(255,255,255,0.7)] cursor-pointer"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>

              <a
                href="mailto:export@zelnex.in"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white border border-white/20 transition-all duration-300 hover:scale-110 hover:bg-white hover:text-[#06132d] hover:shadow-[0_0_14px_rgba(255,255,255,0.7)] cursor-pointer"
                aria-label="Email: export@zelnex.in"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>

              <a
                href="tel:+912249201800"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white border border-white/20 transition-all duration-300 hover:scale-110 hover:bg-white hover:text-[#06132d] hover:shadow-[0_0_14px_rgba(255,255,255,0.7)] cursor-pointer"
                aria-label="Phone"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setIsModalOpen(true)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white border border-white/20 transition-all duration-300 hover:scale-110 hover:bg-cyan-300 hover:text-[#06132d] hover:shadow-[0_0_14px_rgba(56,189,248,0.8)] cursor-pointer"
                aria-label="Direct Export Inquiry"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Interactive 3D White Glass Partnership Modal ── */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Ambient Darkened Frosted Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleModalClose}
              className="fixed inset-0 bg-[#061536]/40 backdrop-blur-xl transition-opacity"
            />

            {/* White Frosted Liquid Glass Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.90, y: 28 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{
                type: "spring",
                stiffness: 360,
                damping: 26,
              }}
              className="relative w-full max-w-xl rounded-[36px] overflow-hidden p-8 md:p-10 text-[#082B61] shadow-2xl z-10 my-8 select-none"
              style={{
                background:
                  "radial-gradient(120% 140% at 10% -10%, rgba(255, 255, 255, 0.95), rgba(248, 252, 255, 0.88) 50%, rgba(238, 246, 255, 0.92))",
                backdropFilter: "blur(36px) saturate(190%)",
                WebkitBackdropFilter: "blur(36px) saturate(190%)",
                border: "1.5px solid rgba(255, 255, 255, 0.95)",
                boxShadow: `
                  0 35px 90px -15px rgba(14, 46, 108, 0.22),
                  0 10px 30px rgba(14, 46, 108, 0.1),
                  inset 0 2px 0 #ffffff,
                  inset 0 0 0 1.5px rgba(186, 220, 255, 0.45),
                  inset 0 -2px 6px rgba(12, 44, 104, 0.05)
                `,
              }}
            >
              {/* Corner Specular Flare */}
              <div
                className="absolute right-8 top-8 w-2.5 h-2.5 rounded-full pointer-events-none"
                style={{
                  background: "#ffffff",
                  boxShadow: "0 0 10px #ffffff, 0 0 20px #00B8F2",
                }}
              />

              {/* Close Button */}
              <button
                onClick={handleModalClose}
                className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-[#082B61] transition-all cursor-pointer border border-slate-200/80 shadow-sm hover:scale-105"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header */}
              <div className="pr-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-teal border border-teal/20 mb-3 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                  <span>Direct Export Inquiry</span>
                </div>

                <h3 className="font-['Space_Grotesk'] text-3xl md:text-[2.1rem] font-extrabold text-[#082B61] tracking-tight leading-[1.15]">
                  Partner with Zelnex
                </h3>

                <div
                  className="my-3 h-[3.5px] w-14 rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #006EDC, #00B8F2)",
                  }}
                />

                <p className="text-xs sm:text-[13.5px] text-[#4A5568] leading-relaxed font-medium">
                  Provide your market details below. Our international export director will review
                  your requirements and respond within 24 hours.
                </p>
              </div>

              {/* Form / Success Feedback */}
              <div className="mt-6">
                {modalSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-10 text-center flex flex-col items-center justify-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal to-[#006EDC] text-white mb-4 shadow-[0_0_30px_rgba(0,184,242,0.35)]">
                      <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                    </div>
                    <h4 className="font-['Space_Grotesk'] text-2xl font-extrabold text-[#082B61] tracking-tight">
                      Inquiry Received Successfully
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-[#4A5568] max-w-md leading-relaxed font-medium">
                      Thank you for reaching out. We have received your details and will dispatch our
                      product catalog and dossier guidelines to your email within 24 business hours.
                    </p>
                    <button
                      onClick={handleModalClose}
                      className="mt-6 rounded-full px-7 py-3 text-xs font-extrabold text-white bg-gradient-to-r from-[#00B8F2] to-[#006EDC] hover:scale-105 transition-all shadow-lg cursor-pointer"
                    >
                      Close Window
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleModalSubmit} className="flex flex-col gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-wider text-[#082B61] mb-1.5">
                        <User className="w-3.5 h-3.5 text-[#006EDC]" />
                        <span>Full Name *</span>
                      </label>
                      <input
                        required
                        type="text"
                        name="fullName"
                        placeholder="e.g. Dr. Alexander Vance"
                        className="w-full rounded-2xl border border-slate-200/90 bg-white/90 px-4 py-3 text-sm text-[#082B61] font-semibold placeholder-slate-400 outline-none focus:border-[#006EDC] focus:ring-4 focus:ring-[#006EDC]/15 focus:bg-white transition-all"
                        style={{
                          boxShadow: "inset 0 1.5px 3px rgba(0, 40, 110, 0.03)",
                        }}
                      />
                    </div>

                    {/* Email & Country 2-Column Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-wider text-[#082B61] mb-1.5">
                          <Mail className="w-3.5 h-3.5 text-[#006EDC]" />
                          <span>Business Email *</span>
                        </label>
                        <input
                          required
                          type="email"
                          name="email"
                          placeholder="alex@distributor.com"
                          className="w-full rounded-2xl border border-slate-200/90 bg-white/90 px-4 py-3 text-sm text-[#082B61] font-semibold placeholder-slate-400 outline-none focus:border-[#006EDC] focus:ring-4 focus:ring-[#006EDC]/15 focus:bg-white transition-all"
                          style={{
                            boxShadow: "inset 0 1.5px 3px rgba(0, 40, 110, 0.03)",
                          }}
                        />
                      </div>

                      <div>
                        <label className="flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-wider text-[#082B61] mb-1.5">
                          <Globe className="w-3.5 h-3.5 text-[#006EDC]" />
                          <span>Country / Market *</span>
                        </label>
                        <input
                          required
                          type="text"
                          name="country"
                          placeholder="e.g. Kenya, Vietnam, Iraq"
                          className="w-full rounded-2xl border border-slate-200/90 bg-white/90 px-4 py-3 text-sm text-[#082B61] font-semibold placeholder-slate-400 outline-none focus:border-[#006EDC] focus:ring-4 focus:ring-[#006EDC]/15 focus:bg-white transition-all"
                          style={{
                            boxShadow: "inset 0 1.5px 3px rgba(0, 40, 110, 0.03)",
                          }}
                        />
                      </div>
                    </div>

                    {/* Company Bio & Requirements */}
                    <div>
                      <label className="flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-wider text-[#082B61] mb-1.5">
                        <FileText className="w-3.5 h-3.5 text-[#006EDC]" />
                        <span>Company Bio & Requirements *</span>
                      </label>
                      <textarea
                        required
                        rows={3}
                        name="bio"
                        placeholder="Tell us about your distribution network, target therapeutic categories, or contract manufacturing needs..."
                        className="w-full rounded-2xl border border-slate-200/90 bg-white/90 px-4 py-3 text-sm text-[#082B61] font-semibold placeholder-slate-400 outline-none focus:border-[#006EDC] focus:ring-4 focus:ring-[#006EDC]/15 focus:bg-white transition-all resize-none"
                        style={{
                          boxShadow: "inset 0 1.5px 3px rgba(0, 40, 110, 0.03)",
                        }}
                      />
                    </div>

                    {/* Trust Indicators Bar */}
                    <div className="flex items-center justify-between text-[11px] text-[#5b6089] px-1 py-1 font-semibold">
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#006EDC]" />
                        <span>24h Response Guaranteed</span>
                      </span>
                      <span className="text-teal font-bold">
                        ✦ CTD Dossiers Available
                      </span>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-1 group relative flex items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-extrabold text-white shadow-lg transition-all duration-300 hover:shadow-[0_10px_28px_rgba(0,110,220,0.35)] cursor-pointer overflow-hidden"
                      style={{
                        background: "linear-gradient(135deg, #00B8F2 0%, #006EDC 100%)",
                      }}
                    >
                      <span>Submit Partnership Inquiry</span>
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-white transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </motion.button>
                  </form>
                )}
              </div>

              {/* Bottom Cyan Caustic Light Line */}
              <div
                className="absolute bottom-0 inset-x-10 h-[2.5px] rounded-full pointer-events-none"
                style={{
                  background: "linear-gradient(90deg, transparent, #00B8F2 50%, transparent)",
                  boxShadow: "0 0 12px rgba(0, 184, 242, 0.9)",
                }}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
