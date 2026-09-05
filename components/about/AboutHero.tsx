"use client";

import React from "react";
import Link from "next/link";
import {
  Globe2,
  ShieldCheck,
  FileCheck2,
  Building2,
  Boxes,
  Users2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function AboutHero() {
  const stats = [
    {
      num: "65+",
      label: "Export Markets",
      sub: "Sovereign Nations",
      icon: Globe2,
      accent: "#006EDC",
    },
    {
      num: "350+",
      label: "Quality Products",
      sub: "Commercial Molecules",
      icon: Boxes,
      accent: "#0284C7",
    },
    {
      num: "150+",
      label: "Global Clients",
      sub: "Active Importers",
      icon: Users2,
      accent: "#0D9488",
    },
    {
      num: "150+",
      label: "CTD/eCTD Files",
      sub: "Ready Module 1-5",
      icon: FileCheck2,
      accent: "#6366F1",
    },
    {
      num: "100%",
      label: "WHO-GMP",
      sub: "Validated Sourcing",
      icon: ShieldCheck,
      accent: "#10B981",
    },
  ];

  return (
    <section className="relative pt-32 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F4F8FD] via-[#FAFDFE] to-white">
      {/* Subtle Background Circuit & Grid */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40 devtools-grid-20" aria-hidden />
      <div
        className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-200/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-teal-200/30 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1340px] px-4 sm:px-6 md:px-8">
        
        {/* ── Breadcrumb & Top Telemetry Header ── */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80 pb-4 mb-8 text-xs font-['JetBrains_Mono',monospace]">
          <nav className="flex items-center gap-2 text-slate-500">
            <Link href="/" className="hover:text-[#006EDC] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-400">Corporate Profile</span>
            <span>/</span>
            <span className="text-[#006EDC] font-semibold">About Us</span>
          </nav>

          <div className="flex items-center gap-3 text-slate-500">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white border border-slate-200 text-slate-700 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              SURAT HQ [21.1702° N, 72.8311° E]
            </span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="hidden sm:inline font-medium text-slate-600">SYS_ID: ZELNEX_CORP_v2</span>
          </div>
        </div>

        {/* ── Hero Title & Headline Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-8 flex flex-col">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-blue-200/80 shadow-[0_2px_10px_rgba(0,110,220,0.06)] w-fit mb-6">
              <Sparkles className="w-4 h-4 text-[#006EDC]" />
              <span className="text-[11px] font-['JetBrains_Mono',monospace] font-bold tracking-[0.14em] uppercase text-[#006EDC]">
                01.00 // ENTERPRISE PROFILE &amp; GLOBAL HEALTHCARE ARCHITECTURE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B1E48] tracking-tight leading-[1.08] mb-6 font-['Inter',sans-serif]">
              Architecting the Future of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#006EDC] via-[#0284C7] to-[#0D9488]">
                Global Generic Medicine
              </span>
            </h1>

            {/* Lead Narrative */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mb-8 font-normal">
              <strong>Zelnex Pharmaceuticals Pvt. Ltd.</strong> is an export-oriented Indian pharmaceutical powerhouse delivering high-potency finished dosage formulations, comprehensive CTD/eCTD dossier libraries, and turnkey supply chain integration to health ministries, institutional tenders, and commercial distributor networks across 65+ sovereign nations.
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#006EDC] to-[#0284C7] text-white font-semibold text-sm shadow-[0_10px_25px_rgba(0,110,220,0.25)] hover:shadow-[0_14px_30px_rgba(0,110,220,0.35)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Partner with Zelnex</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-slate-200/90 text-slate-700 font-semibold text-sm hover:border-[#006EDC] hover:text-[#006EDC] hover:bg-blue-50/40 transition-all duration-200 shadow-2xs"
              >
                <span>Explore Technical Services</span>
              </Link>
            </div>
          </div>

          {/* Right: Institutional Badge Card */}
          <div className="lg:col-span-4 w-full">
            <div className="relative rounded-3xl p-7 bg-white/90 border border-slate-200/80 shadow-[0_20px_50px_rgba(11,30,72,0.06)] backdrop-blur-xl overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#006EDC]">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0B1E48]">Zelnex HQ Surat</h3>
                    <p className="text-[11px] font-['JetBrains_Mono',monospace] text-slate-500">GUJARAT, INDIA</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-700 font-['JetBrains_Mono',monospace] text-[10px] font-bold">
                  ACTIVE
                </span>
              </div>

              <div className="space-y-3.5 text-xs text-slate-600">
                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#006EDC] mt-1 shrink-0" />
                  <span><strong>Corporate Registration:</strong> 117 Platinum Plaza, Sarthana, Surat - 395013</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#0D9488] mt-1 shrink-0" />
                  <span><strong>Facility Accreditation:</strong> WHO-GMP, ISO 9001:2015, FDCA India</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#8B5CF6] mt-1 shrink-0" />
                  <span><strong>Climate Stability:</strong> Zone IVb (30°C / 75% RH) real-time validated</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B] mt-1 shrink-0" />
                  <span><strong>Global Supply Hubs:</strong> Air &amp; Ocean corridors via Surat &amp; Mumbai</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-['JetBrains_Mono',monospace] text-slate-500">
                <span>EXPORT READY</span>
                <span className="text-[#006EDC] font-bold">MOH REGISTRATION 24/7</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── 5-Stat Glass Telemetry Bar ── */}
        <div className="w-full bg-white/95 border border-blue-200/80 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-[0_15px_40px_rgba(0,110,220,0.06)] backdrop-blur-md">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {stats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-4 first:pl-0 first:pt-0"
                >
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 shadow-xs"
                    style={{ backgroundColor: `${item.accent}12`, color: item.accent }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xl sm:text-2xl font-extrabold text-[#0B1E48] tracking-tight leading-none">
                      {item.num}
                    </span>
                    <span className="text-xs font-bold text-slate-700 mt-1 leading-tight truncate">
                      {item.label}
                    </span>
                    <span className="text-[11px] font-['JetBrains_Mono',monospace] text-slate-500 truncate">
                      {item.sub}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
