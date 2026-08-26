"use client";

import Link from "next/link";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function WhoWeAre() {
  const { t } = useLanguage();
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduce) return;

      gsap.from(".who-card-content", {
        y: 36,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 80%" },
      });
    },
    { scope: rootRef },
  );

  return (
    <section
      id="who-we-are"
      ref={rootRef}
      className="relative scroll-mt-24 py-10 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8 max-w-[1340px] mx-auto z-10"
    >
      <div className="who-card-content relative overflow-hidden rounded-[28px] sm:rounded-[36px] border border-[#D5E4C8] bg-gradient-to-br from-[#FAFDF6] via-[#F4F9EE] to-[#EBF4E2] p-8 sm:p-12 md:p-16 shadow-[0_12px_44px_rgba(110,140,80,0.07)]">
        {/* Halftone Dot Matrix Pattern (Top Left) */}
        <div
          className="pointer-events-none absolute -left-4 -top-4 w-72 h-72 opacity-35"
          style={{
            backgroundImage: "radial-gradient(#7E9A60 1.8px, transparent 1.8px)",
            backgroundSize: "14px 14px",
          }}
          aria-hidden
        />

        {/* Halftone Dot Matrix Pattern (Bottom Right) */}
        <div
          className="pointer-events-none absolute -right-8 -bottom-8 w-64 h-64 opacity-25"
          style={{
            backgroundImage: "radial-gradient(#7E9A60 1.8px, transparent 1.8px)",
            backgroundSize: "14px 14px",
          }}
          aria-hidden
        />

        {/* Delicate Botanical Vine / Petal Outline on Left Edge */}
        <div className="pointer-events-none absolute -left-6 top-1/2 -translate-y-1/2 hidden md:block opacity-60">
          <svg
            width="120"
            height="260"
            viewBox="0 0 120 260"
            fill="none"
            stroke="#6D8A4E"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10,10 Q60,80 15,140 T40,240" />
            <path d="M15,140 C-10,120 -5,160 15,140" />
            <path d="M15,140 C40,120 35,160 15,140" />
            <path d="M15,140 C10,110 30,115 15,140" />
            <path d="M15,140 C5,170 30,165 15,140" />
            <circle cx="15" cy="140" r="3" fill="#6D8A4E" />
          </svg>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-3xl ml-0 md:ml-4">
          <p className="text-sm sm:text-base font-semibold text-[#4F5D3E] tracking-wide mb-1.5 font-['Inter',sans-serif]">
            {t.overview.refWelcome || "Welcome to"}
          </p>

          <h2
            className="text-[30px] sm:text-[40px] md:text-[48px] font-extrabold text-[#1F2917] tracking-[-0.03em] leading-[1.12] mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {t.overview.refCompany || "Zelnex Pharmaceuticals Pvt. Ltd."}
          </h2>

          {/* Green Wavy Underline Divider */}
          <div className="mb-6 flex items-center">
            <svg width="56" height="14" viewBox="0 0 52 14" fill="none" className="text-[#6D8A4E]">
              <path
                d="M2 7C5 3 7 3 10 7C13 11 15 11 18 7C21 3 23 3 26 7C29 11 31 11 34 7C37 3 39 3 42 7C45 11 47 11 50 7"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <p className="text-base sm:text-lg md:text-[19px] font-semibold text-[#222F19] leading-relaxed mb-4 font-['Inter',sans-serif]">
            {t.overview.refLead}
          </p>

          <p className="text-sm sm:text-[15.5px] text-[#4F5D3E] font-normal leading-relaxed mb-8 font-['Inter',sans-serif]">
            {t.overview.refSummary}
          </p>

          <div>
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-md cursor-pointer select-none"
              style={{
                background: "linear-gradient(135deg, #879762 0%, #6E7D4C 100%)",
                boxShadow: "0 8px 24px rgba(110, 125, 76, 0.35)",
              }}
            >
              <span>{t.overview.refReadMore || "READ MORE"}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
