"use client";

import { useState, useEffect, useRef, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronRight, X, CheckCircle2, User, Mail, Globe, FileText, Sparkles } from "lucide-react";

interface PharmaBrandItem {
  name: string;
  badge: string;
  sub: string;
  gradient: string;
  icon: React.ReactNode;
}

const PHARMA_STANDARDS: PharmaBrandItem[] = [
  {
    name: "WHO-GMP",
    badge: "Certified Facility",
    sub: "Global Compliance",
    gradient: "linear-gradient(135deg, #006EDC 0%, #00B8F2 100%)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    name: "USP / BP / IP",
    badge: "Pharmacopoeias",
    sub: "Monograph Specs",
    gradient: "linear-gradient(135deg, #008a8a 0%, #00bfb5 100%)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    name: "ISO 9001:2015",
    badge: "Quality Audit",
    sub: "Accredited Systems",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
  },
  {
    name: "CTD / eCTD",
    badge: "Dossier Support",
    sub: "Global MOH Ready",
    gradient: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    name: "Zone IVb",
    badge: "Stability Verified",
    sub: "30°C / 75% RH",
    gradient: "linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
      </svg>
    ),
  },
  {
    name: "50+ Countries",
    badge: "Global Footprint",
    sub: "Licensed Importers",
    gradient: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    name: "800+ Products",
    badge: "Therapeutics",
    sub: "Tablets, Vials, Syrups",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18" />
      </svg>
    ),
  },
  {
    name: "Cold-Chain",
    badge: "Aseptic Freight",
    sub: "Strict Temperature",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" />
      </svg>
    ),
  },
];

export function DigitalEpochSection() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [inView, setInView] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Lazy-load video when section enters near viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setTimeout(() => setSubmitted(false), 300);
  };

  return (
    <section ref={sectionRef} id="contact" className="relative w-full py-16 px-4 md:px-8 overflow-hidden">
      {/* 2. Main Hero Container & Video Background */}
      <div className="relative w-full max-w-[1400px] mx-auto rounded-[32px] md:rounded-[48px] bg-white border border-slate-200/50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] overflow-hidden min-h-[480px] sm:min-h-[560px] md:h-[600px] flex flex-col">
        {/* Absolutely positioned underlying layer for the background video */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none bg-slate-50">
          {inView && (
            <video
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4"
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={() => setVideoLoaded(true)}
              className={`w-full h-full object-cover scale-105 transition-opacity duration-1000 ${
                videoLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          )}
        </div>

        {/* 3. Hero Text Content */}
        <div className="relative z-20 flex-1 px-8 md:px-16 pt-12 md:pt-16 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#006EDC]/10 px-3.5 py-1 text-xs font-bold text-[#006EDC] border border-[#006EDC]/20 mb-3.5 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#006EDC] animate-pulse" />
              <span>{t.contact.badge}</span>
            </div>

            <h2 className="font-display text-[28px] sm:text-[36px] md:text-[56px] font-medium tracking-tight text-[#0a1b33] leading-[1.1]">
              {t.contact.title}
            </h2>

            <p className="font-sans text-[14px] md:text-[15px] text-[#64748b] mt-4 max-w-xl leading-relaxed">
              {t.contact.subtitle}
            </p>

            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 px-7 py-3 rounded-full bg-[#0a152d] text-white text-[14px] font-medium shadow-sm transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>{t.contact.submitBtn}</span>
              <span>→</span>
            </motion.button>
          </motion.div>
        </div>

        {/* 4. Floating Bottom Navbar */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center bg-white/90 backdrop-blur-2xl px-1.5 py-1.5 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-slate-200/40 gap-1.5"
          >
            {/* Small circular logo placeholder */}
            <div className="w-9 h-9 bg-white border border-slate-100 shadow-sm flex items-center justify-center rounded-full text-slate-800 text-sm font-bold">
              ✦
            </div>

            {/* Standard text buttons */}
            <a
              href="#products"
              className="px-3.5 py-1.5 text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33] transition-colors rounded-full"
            >
              Products
            </a>
            <a
              href="#certifications"
              className="px-3.5 py-1.5 text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33] transition-colors rounded-full"
            >
              Dossiers
            </a>

            {/* "Get in touch" button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white px-5 py-2 rounded-full text-[12px] font-semibold text-[#0a1b33] border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Partner With Us</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#0a1b33]" />
            </button>
          </motion.nav>
        </div>
      </div>

      {/* 5. Seamless Marquee Pharma Standards Scroller Component */}
      <div className="mt-10 w-full overflow-hidden">
        <div
          className="relative w-full overflow-hidden py-4"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          }}
        >
          <div className="animate-marquee flex items-center gap-5">
            {/* Render list twice inline to ensure seamless loop */}
            {[...PHARMA_STANDARDS, ...PHARMA_STANDARDS].map((item, idx) => (
              <div
                key={`${item.name}-${idx}`}
                onClick={() => setIsModalOpen(true)}
                className="group relative h-24 w-44 shrink-0 flex flex-col items-center justify-center rounded-full bg-white border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all overflow-hidden cursor-pointer select-none px-4"
              >
                {/* Background Gradient Drop on Hover */}
                <div
                  className="absolute inset-0 transition-all duration-300 scale-150 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                  style={{
                    background: item.gradient,
                  }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center transition-all duration-300 group-hover:text-white text-center">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#006EDC] group-hover:text-white transition-colors">
                      {item.icon}
                    </span>
                    <span className="font-display text-[13.5px] font-extrabold tracking-tight text-[#0a1b33] group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-[#64748b] group-hover:text-white/90 transition-colors mt-0.5">
                    {item.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── World-Class White Frosted Liquid Glass Partnership Modal ── */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Ambient Darkened Frosted Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleClose}
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
                onClick={handleClose}
                className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-[#082B61] transition-all cursor-pointer border border-slate-200/80 shadow-sm hover:scale-105"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header */}
              <div className="pr-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-teal border border-teal/20 mb-3 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                  <span>{t.contact.badge}</span>
                </div>

                <h3 className="font-display text-3xl md:text-[2.1rem] font-extrabold text-[#082B61] tracking-tight leading-[1.15]">
                  {t.contact.title}
                </h3>

                <div
                  className="my-3 h-[3.5px] w-14 rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #006EDC, #00B8F2)",
                  }}
                />

                <p className="text-xs sm:text-[13.5px] text-[#4A5568] leading-relaxed font-medium">
                  {t.contact.subtitle}
                </p>
              </div>

              {/* Form / Success Feedback */}
              <div className="mt-6">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-10 text-center flex flex-col items-center justify-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal to-[#006EDC] text-white mb-4 shadow-[0_0_30px_rgba(0,184,242,0.35)]">
                      <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                    </div>
                    <h4 className="font-display text-2xl font-extrabold text-[#082B61] tracking-tight">
                      {t.contact.successTitle}
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-[#4A5568] max-w-md leading-relaxed font-medium">
                      {t.contact.successDesc}
                    </p>
                    <button
                      onClick={handleClose}
                      className="mt-6 rounded-full px-7 py-3 text-xs font-extrabold text-white bg-gradient-to-r from-[#00B8F2] to-[#006EDC] hover:scale-105 transition-all shadow-lg cursor-pointer"
                    >
                      {t.contact.closeBtn}
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-wider text-[#082B61] mb-1.5">
                        <User className="w-3.5 h-3.5 text-[#006EDC]" />
                        <span>{t.contact.nameLabel} *</span>
                      </label>
                      <input
                        required
                        type="text"
                        name="fullName"
                        placeholder={t.contact.namePlaceholder}
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
                          <span>{t.contact.emailLabel} *</span>
                        </label>
                        <input
                          required
                          type="email"
                          name="email"
                          placeholder={t.contact.emailPlaceholder}
                          className="w-full rounded-2xl border border-slate-200/90 bg-white/90 px-4 py-3 text-sm text-[#082B61] font-semibold placeholder-slate-400 outline-none focus:border-[#006EDC] focus:ring-4 focus:ring-[#006EDC]/15 focus:bg-white transition-all"
                          style={{
                            boxShadow: "inset 0 1.5px 3px rgba(0, 40, 110, 0.03)",
                          }}
                        />
                      </div>

                      <div>
                        <label className="flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-wider text-[#082B61] mb-1.5">
                          <Globe className="w-3.5 h-3.5 text-[#006EDC]" />
                          <span>{t.contact.destinationLabel} *</span>
                        </label>
                        <input
                          required
                          type="text"
                          name="country"
                          placeholder={t.contact.destinationPlaceholder}
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
                        <span>{t.contact.messageLabel} *</span>
                      </label>
                      <textarea
                        required
                        rows={3}
                        name="bio"
                        placeholder={t.contact.messagePlaceholder}
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
                      <span>{t.contact.submitBtn}</span>
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
    </section>
  );
}
