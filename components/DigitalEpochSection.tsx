"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronRight } from "lucide-react";

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
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    name: "Zone IVb",
    badge: "Stability Tested",
    sub: "Tropical Climate",
    gradient: "linear-gradient(135deg, #ea580c 0%, #f97316 100%)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
      </svg>
    ),
  },
  {
    name: "COPP Ready",
    badge: "Cert of Product",
    sub: "WHO Standard",
    gradient: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
  },
  {
    name: "FSC Validated",
    badge: "Free Sale Cert",
    sub: "Export Clearance",
    gradient: "linear-gradient(135deg, #d97706 0%, #f59e0b 100%)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
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

            <Link
              href="/contact"
              className="mt-8 px-7 py-3 rounded-full bg-[#0a152d] hover:bg-[#006EDC] text-white text-[14px] font-medium shadow-sm transition-all inline-flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
            >
              <span>{t.contact.submitBtn}</span>
              <span>→</span>
            </Link>
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

            {/* "Partner With Us" button */}
            <Link
              href="/contact"
              className="bg-white px-5 py-2 rounded-full text-[12px] font-semibold text-[#0a1b33] border border-slate-200/60 shadow-sm hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Partner With Us</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#0a1b33]" />
            </Link>
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
              <Link
                key={`${item.name}-${idx}`}
                href="/contact"
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
