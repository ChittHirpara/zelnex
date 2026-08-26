"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { MarketLocation } from "./EarthGlobe3D";
import { Globe2, ShieldCheck, Plane, CheckCircle2 } from "lucide-react";

const EarthGlobe3D = dynamic(
  () => import("./EarthGlobe3D").then((mod) => mod.EarthGlobe3D),
  {
    ssr: false,
    loading: () => (
      <div className="relative w-full h-[480px] sm:h-[620px] md:h-[740px] flex flex-col items-center justify-center select-none animate-pulse">
        <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-[#006EDC]/20 via-[#00B8F2]/10 to-transparent border border-[#006EDC]/30 shadow-[0_0_50px_rgba(0,110,220,0.15)] flex items-center justify-center">
          <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full bg-gradient-to-bl from-[#006EDC]/15 via-transparent to-slate-100/50 border border-white/40 animate-spin [animation-duration:8s]" />
        </div>
        <p className="mt-4 text-xs font-semibold text-slate-400 tracking-wider uppercase">
          Loading 3D Global Network...
        </p>
      </div>
    ),
  }
);

import { useLanguage } from "@/context/LanguageContext";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function GrowingNetwork() {
  const { t } = useLanguage();
  const rootRef = useRef<HTMLElement>(null);
  const [selectedMarket, setSelectedMarket] = useState<MarketLocation | null>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduce) return;

      // Header entrance
      gsap.fromTo(
        ".network-header",
        { y: -24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: rootRef.current, start: "top 80%" },
        }
      );

      // Left Cloud & Card drift on scroll (Move closer to Earth)
      gsap.fromTo(
        ".cloud-left-box",
        { x: -140, opacity: 0.4 },
        {
          x: 90,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 80%",
            end: "bottom 70%",
            scrub: 1.2,
          },
        }
      );

      // Right Cloud & Card drift on scroll (Move closer to Earth)
      gsap.fromTo(
        ".cloud-right-box",
        { x: 140, opacity: 0.4 },
        {
          x: -90,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 80%",
            end: "bottom 70%",
            scrub: 1.2,
          },
        }
      );

      // Metrics Row entrance
      gsap.fromTo(
        ".network-metrics",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: rootRef.current, start: "top 60%" },
        }
      );
    },
    { scope: rootRef },
  );

  return (
    <section
      id="network"
      ref={rootRef}
      className="relative section-pad scroll-mt-24 py-20 md:py-28 overflow-hidden bg-white"
    >
      {/* ── Left Flank: Cinematic Parallax Cloud Plume & Corridor Badge ── */}
      <div className="cloud-left-box pointer-events-none absolute left-0 top-[20%] z-10 hidden lg:flex flex-col items-start w-[440px] max-w-[32vw]">
        <div className="relative w-full h-[360px] opacity-85">
          <Image
            src="/cloud-left.jpg"
            alt="Atmospheric Clouds"
            fill
            sizes="(max-width: 1200px) 300px, 440px"
            className="object-contain object-left mix-blend-multiply"
          />
        </div>

        {/* Floating Glassmorphic Corridor Card */}
        <div className="pointer-events-auto -mt-24 ml-10 p-4 rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-xl max-w-[300px] text-[#082B61]">
          <div className="flex items-center gap-2 mb-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#006EDC] text-white text-xs font-bold">
              <Globe2 className="w-3.5 h-3.5" />
            </span>
            <h4 className="font-display text-xs font-extrabold tracking-tight text-[#082B61]">
              Africa & Middle East Corridor
            </h4>
          </div>
          <p className="text-[11.5px] leading-relaxed text-slate-600 mb-2">
            Direct regulatory clearances across 25+ nations with Zone IVb stability testing.
          </p>
          <div className="flex items-center gap-1.5 text-[10.5px] font-bold text-teal">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>WHO-GMP Batches Active</span>
          </div>
        </div>
      </div>

      {/* ── Right Flank: Cinematic Parallax Cloud Plume & Supply Badge ── */}
      <div className="cloud-right-box pointer-events-none absolute right-0 top-[20%] z-10 hidden lg:flex flex-col items-end w-[440px] max-w-[32vw]">
        <div className="relative w-full h-[360px] opacity-85">
          <Image
            src="/cloud-right.jpg"
            alt="Atmospheric Clouds"
            fill
            sizes="(max-width: 1200px) 300px, 440px"
            className="object-contain object-right mix-blend-multiply"
          />
        </div>

        {/* Floating Glassmorphic Corridor Card */}
        <div className="pointer-events-auto -mt-24 mr-10 p-4 rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-xl max-w-[300px] text-[#082B61] text-right">
          <div className="flex items-center justify-end gap-2 mb-2">
            <h4 className="font-display text-xs font-extrabold tracking-tight text-[#082B61]">
              Asia & Regional Hubs
            </h4>
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-teal text-white text-xs font-bold">
              <Plane className="w-3.5 h-3.5" />
            </span>
          </div>
          <p className="text-[11.5px] leading-relaxed text-slate-600 mb-2">
            High-speed air freight & full eCTD dossier support for hospital and tender supply.
          </p>
          <div className="flex items-center justify-end gap-1.5 text-[10.5px] font-bold text-[#006EDC]">
            <span>Cold-Chain Logistics Ready</span>
            <ShieldCheck className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Centered Section Header */}
        <div className="network-header flex flex-col items-center text-center">
          <p className="text-sm md:text-base font-semibold tracking-wide text-slate-500 mb-1">
            {t.network.badge}
          </p>

          {/* Hero Highlight Metric */}
          <h2
            className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-none mb-3"
            style={{
              background: "linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 50%, #ff5252 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 12px 24px rgba(255, 107, 107, 0.28))",
            }}
          >
            {t.network.title}
          </h2>

          {/* Small Sub-Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200/90 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
            <span className="text-xs font-bold text-[#082B61] tracking-wide">
              {t.network.subtitle}
            </span>
          </div>
        </div>

        {/* 3D Realistic Earth Globe Dome Emerging Naturally from Clouds */}
        <div className="relative mt-2 sm:mt-4 w-full flex justify-center">
          <div className="w-full max-w-5xl">
            <EarthGlobe3D
              selectedMarket={selectedMarket}
              onSelectMarket={(market) => setSelectedMarket(market)}
            />
          </div>
        </div>

        {/* Bottom 3-Column High-Impact Metrics Row */}
        <div className="network-metrics relative z-20 -mt-8 sm:-mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto text-center pt-6 border-t border-slate-100">
          {/* Metric 1 */}
          <div className="flex flex-col items-center">
            <div className="font-display text-4xl sm:text-5xl font-extrabold text-[#082B61] tracking-tight">
              1.2<span className="text-teal">M+</span>
            </div>
            <p className="mt-1 text-xs sm:text-sm font-semibold text-slate-500">
              Units Supplied Monthly
            </p>
          </div>

          {/* Metric 2 */}
          <div className="flex flex-col items-center">
            <div className="font-display text-4xl sm:text-5xl font-extrabold text-[#082B61] tracking-tight">
              800<span className="text-[#ff6b6b]">+</span>
            </div>
            <p className="mt-1 text-xs sm:text-sm font-semibold text-slate-500">
              Approved Formulations
            </p>
          </div>

          {/* Metric 3 */}
          <div className="flex flex-col items-center">
            <div className="font-display text-4xl sm:text-5xl font-extrabold text-[#082B61] tracking-tight">
              100<span className="text-[#f59e0b]">%</span>
            </div>
            <p className="mt-1 text-xs sm:text-sm font-semibold text-slate-500">
              WHO-GMP & CTD Compliance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GrowingNetwork;
