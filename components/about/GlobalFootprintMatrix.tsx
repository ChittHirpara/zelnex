"use client";

import React, { useState } from "react";
import {
  Globe2,
  FileCheck2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building,
  Plane,
  Ship,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export function GlobalFootprintMatrix() {
  const [activeRegion, setActiveRegion] = useState<"africa" | "asia" | "gcc" | "cis" | "latam">("africa");

  const regions = {
    africa: {
      name: "Africa & ECOWAS",
      badge: "30+ MARKETS",
      count: "30+ Countries",
      summary:
        "Extensive institutional supply and commercial distribution network across West, East, Central, and Southern Africa. Fast-track NAFDAC, TMDA, PPB, and FDA dossier approvals.",
      countries: [
        { name: "Nigeria", authority: "NAFDAC", status: "Active Registered", dossiers: "45+ Files" },
        { name: "Kenya", authority: "PPB", status: "Active Registered", dossiers: "38+ Files" },
        { name: "Ghana", authority: "FDA Ghana", status: "Active Registered", dossiers: "32+ Files" },
        { name: "Tanzania", authority: "TMDA", status: "Active Registered", dossiers: "28+ Files" },
        { name: "Uganda", authority: "NDA", status: "Active Registered", dossiers: "25+ Files" },
        { name: "Ivory Coast", authority: "AIRP", status: "Active Registered", dossiers: "20+ Files" },
        { name: "Ethiopia", authority: "EFDA", status: "Active Registered", dossiers: "18+ Files" },
        { name: "Zambia", authority: "ZAMRA", status: "Active Registered", dossiers: "22+ Files" },
      ],
      corridors: "Direct Air Cargo from Surat & Mumbai to Lagos, Nairobi, Accra, and Dar es Salaam.",
      accent: "#006EDC",
    },
    asia: {
      name: "Asia & ASEAN",
      badge: "15+ MARKETS",
      count: "15+ Countries",
      summary:
        "Strategic penetration across Southeast and South Asian health markets with complete ACTD / eCTD regulatory submissions and localized bioequivalence packages.",
      countries: [
        { name: "Vietnam", authority: "DAV", status: "Active Registered", dossiers: "40+ Files" },
        { name: "Philippines", authority: "FDA Philippines", status: "Active Registered", dossiers: "35+ Files" },
        { name: "Cambodia", authority: "DDF", status: "Active Registered", dossiers: "30+ Files" },
        { name: "Myanmar", authority: "FDA Myanmar", status: "Active Registered", dossiers: "28+ Files" },
        { name: "Sri Lanka", authority: "NMRA", status: "Active Registered", dossiers: "26+ Files" },
        { name: "Nepal", authority: "DDA", status: "Active Registered", dossiers: "32+ Files" },
      ],
      corridors: "High-frequency express freight corridors into Ho Chi Minh City, Manila, Colombo, and Yangon.",
      accent: "#0284C7",
    },
    gcc: {
      name: "Middle East & GCC",
      badge: "8+ MARKETS",
      count: "8+ Countries",
      summary:
        "High-compliance finished dosage exports to GCC and Middle Eastern health ministries. Turnkey COPP documentation and localized Arabic artwork packaging compliance.",
      countries: [
        { name: "UAE", authority: "MOHAP", status: "Active Registered", dossiers: "24+ Files" },
        { name: "Yemen", authority: "SBDMA", status: "Active Registered", dossiers: "30+ Files" },
        { name: "Iraq", authority: "MOH Iraq", status: "Active Registered", dossiers: "28+ Files" },
        { name: "Oman", authority: "DGPA&DC", status: "Active Registered", dossiers: "18+ Files" },
        { name: "Jordan", authority: "JFDA", status: "Active Registered", dossiers: "16+ Files" },
      ],
      corridors: "Direct air freight and ocean container dispatches to Jebel Ali, Aden, Umm Qasr, and Muscat.",
      accent: "#0D9488",
    },
    cis: {
      name: "CIS & Central Asia",
      badge: "7+ MARKETS",
      count: "7+ Countries",
      summary:
        "Expanding generic pharmaceutical supply lines across Central Asian republics with customized Russian language CTD dossiers and Zone IVb stability packages.",
      countries: [
        { name: "Uzbekistan", authority: "Glavfarmcontrol", status: "Active Registered", dossiers: "28+ Files" },
        { name: "Kazakhstan", authority: "NDDA", status: "Active Registered", dossiers: "22+ Files" },
        { name: "Azerbaijan", authority: "AEC", status: "Active Registered", dossiers: "18+ Files" },
        { name: "Georgia", authority: "LEPL", status: "Active Registered", dossiers: "16+ Files" },
        { name: "Tajikistan", authority: "SCSPhA", status: "Active Registered", dossiers: "15+ Files" },
      ],
      corridors: "Overland and air multimodal logistics via Tashkent, Almaty, Baku, and Tbilisi.",
      accent: "#4F46E5",
    },
    latam: {
      name: "LATAM & Caribbean",
      badge: "6+ MARKETS",
      count: "6+ Countries",
      summary:
        "Regulatory alliances delivering Spanish-language eCTD dossiers, Free Sale Certificates, and bioequivalence study summaries to Latin American health authorities.",
      countries: [
        { name: "Dominican Republic", authority: "DIGEMAPS", status: "Active Registered", dossiers: "20+ Files" },
        { name: "Bolivia", authority: "AGEMED", status: "Active Registered", dossiers: "18+ Files" },
        { name: "Guatemala", authority: "DRCPFA", status: "Active Registered", dossiers: "16+ Files" },
        { name: "Venezuela", authority: "INHRR", status: "Active Registered", dossiers: "15+ Files" },
        { name: "Honduras", authority: "ARSA", status: "Active Registered", dossiers: "14+ Files" },
      ],
      corridors: "Dedicated ocean freight and air cargo routing through Santo Domingo, La Paz, and Guatemala City.",
      accent: "#10B981",
    },
  };

  const current = regions[activeRegion];

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFD] border-b border-slate-200/80 relative overflow-hidden">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 pb-6 border-b border-slate-200 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-[#006EDC] font-['JetBrains_Mono',monospace] text-xs font-bold uppercase tracking-wider mb-3">
              05.00 // GLOBAL EXPORT FOOTPRINT &amp; MOH MATRIX
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1E48] tracking-tight font-['Inter',sans-serif]">
              Serving 65+ Sovereign Healthcare Jurisdictions
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-md">
            Direct air and ocean logistics dispatched from our manufacturing corridors in Surat and Mumbai to health ministries across 5 global continents.
          </p>
        </div>

        {/* Region Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {(Object.keys(regions) as (keyof typeof regions)[]).map((key) => {
            const r = regions[key];
            const isActive = activeRegion === key;
            return (
              <button
                key={key}
                onClick={() => setActiveRegion(key)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#0B1E48] border-[#0B1E48] text-white shadow-lg shadow-blue-900/10"
                    : "bg-white border-slate-200/80 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-['JetBrains_Mono',monospace] text-slate-400 font-bold">
                    {r.badge}
                  </span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />}
                </div>
                <span className="block text-sm sm:text-base font-extrabold truncate">
                  {r.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Region Content Card */}
        <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-[0_20px_50px_rgba(11,30,72,0.05)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            <div className="lg:col-span-8">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E48] tracking-tight mb-3">
                {current.name} Market Network
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                {current.summary}
              </p>
            </div>
            <div className="lg:col-span-4 p-4 rounded-2xl bg-blue-50/60 border border-blue-100 text-xs text-slate-700 space-y-1.5">
              <span className="font-bold text-[#006EDC] font-['JetBrains_Mono',monospace] uppercase block">
                LOGISTICS CORRIDOR:
              </span>
              <p className="text-slate-600 leading-relaxed">
                {current.corridors}
              </p>
            </div>
          </div>

          {/* Country Table Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {current.countries.map((c, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#F8FAFD] border border-slate-200/80 flex flex-col justify-between hover:bg-white hover:border-blue-300 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-[#0B1E48]">
                      {c.name}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-xs font-['JetBrains_Mono',monospace] text-slate-500 block mb-1">
                    MOH: {c.authority}
                  </span>
                </div>
                <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
                  <span className="text-emerald-700 font-semibold">{c.status}</span>
                  <span className="font-['JetBrains_Mono',monospace] text-[#006EDC] font-bold">{c.dossiers}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTD Dossier Query Strip */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-xs text-slate-600">
              <FileCheck2 className="w-4 h-4 text-[#006EDC]" />
              <span>Need localized regulatory filings or Module 1-5 CTD files for your country?</span>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#006EDC] hover:text-[#0B1E48] transition-colors"
            >
              <span>Contact Regulatory Desk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
