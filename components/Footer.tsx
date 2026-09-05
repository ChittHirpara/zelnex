"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Sparkles,
  ArrowRight,
  Plus,
  Minus,
  Mail,
  Phone,
  Send,
  CheckCircle2,
} from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

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
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link href="/#expertise" className="hover:text-white transition-colors">Expertise</Link>
            <Link href="/#products" className="hover:text-white transition-colors">Products</Link>
            <Link href="/#categories" className="hover:text-white transition-colors">Categories</Link>
            <Link href="/#certifications" className="hover:text-white transition-colors">Certifications</Link>
            <Link href="/#network" className="hover:text-white transition-colors">Network</Link>
          </div>

          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold text-white transition-all cursor-pointer border border-white/30 hover:border-white/60 shadow-sm"
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(56, 189, 248, 0.35) 100%)",
              backdropFilter: "blur(12px)",
            }}
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
            <span>Partner with Zelnex</span>
            <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
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
                href="mailto:export@zelnexpharma.com"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white border border-white/20 transition-all duration-300 hover:scale-110 hover:bg-white hover:text-[#06132d] hover:shadow-[0_0_14px_rgba(255,255,255,0.7)] cursor-pointer"
                aria-label="Email: export@zelnexpharma.com"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>

              <a
                href="tel:+919328286164"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white border border-white/20 transition-all duration-300 hover:scale-110 hover:bg-white hover:text-[#06132d] hover:shadow-[0_0_14px_rgba(255,255,255,0.7)] cursor-pointer"
                aria-label="Phone: +91 93282 86164"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>

              <Link
                href="/contact"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white border border-white/20 transition-all duration-300 hover:scale-110 hover:bg-cyan-300 hover:text-[#06132d] hover:shadow-[0_0_14px_rgba(56,189,248,0.8)] cursor-pointer"
                aria-label="Contact Zelnex"
              >
                <Send className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
