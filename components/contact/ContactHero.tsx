"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown, Mail, Phone, Clock, ShieldCheck, Globe2, Sparkles, Building2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function ContactHero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20 border-b border-blue-100 font-['Inter',sans-serif] select-none"
      style={{
        background: "linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 40%, #EBF4FE 75%, #F4F8FD 100%)",
      }}
    >
      {/* 20px Pattern Grid with soft blue lines */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 110, 220, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 110, 220, 0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />

      {/* ── Soft Ethereal Sky & Sapphire Lighting Aura ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        {/* Central Luminous Spotlight */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] rounded-full blur-[140px] opacity-40"
          style={{
            background: "radial-gradient(ellipse at center, rgba(56, 189, 248, 0.35) 0%, rgba(0, 110, 220, 0.15) 50%, transparent 75%)",
          }}
        />
        {/* Top Right Cyan Highlight */}
        <div
          className="absolute top-10 right-10 w-[450px] h-[300px] rounded-full blur-[100px] opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(0, 191, 181, 0.25) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono',monospace] text-slate-500 mb-6">
          <Link href="/" className="hover:text-[#006EDC] transition-colors">
            HOME
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-[#006EDC] font-bold">CONTACT DESK</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Executive Narrative */}
          <div className="lg:col-span-8 flex flex-col items-start">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#006EDC]/10 border border-[#006EDC]/25 mb-4 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#006EDC] animate-pulse" />
              <span className="text-[11px] font-['JetBrains_Mono',monospace] font-bold uppercase tracking-[0.16em] text-[#006EDC]">
                09.00 // GLOBAL CORRESPONDENCE & INSTITUTIONAL DESK
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0B1E48] tracking-tight leading-[1.08] font-['Space_Grotesk',sans-serif]">
              Get in Touch <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#006EDC] via-[#0284C7] to-[#0D9488] bg-clip-text text-transparent">
                With Our Global Team
              </span>
            </h1>

            {/* Glowing Accent Gradient Bar */}
            <div className="my-4 h-[3.5px] w-20 rounded-full bg-gradient-to-r from-[#006EDC] via-[#38BDF8] to-[#0D9488]" />

            {/* Professional Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Whether you are an international healthcare ministry, a commercial pharmaceutical distributor seeking country licensing, or an institutional buyer in need of WHO-GMP certified finished formulations, our global regulatory and commercial team is ready to assist you.
            </p>

            {/* Telemetry Micro Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-4 text-[11px] font-['JetBrains_Mono',monospace] text-slate-500 font-semibold">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/90 border border-blue-100 shadow-2xs text-[#006EDC]">
                <Clock className="w-3.5 h-3.5" />
                AVG RESPONSE &lt; 4 HOURS
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/90 border border-blue-100 shadow-2xs text-[#0D9488]">
                <ShieldCheck className="w-3.5 h-3.5" />
                WHO-GMP VERIFIED ROUTING
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/90 border border-blue-100 shadow-2xs text-[#7C3AED]">
                <Globe2 className="w-3.5 h-3.5" />
                50+ EXPORT CORRIDORS
              </span>
            </div>

          </div>

          {/* Right Column: High-Impact Context Pillar Card */}
          <div className="lg:col-span-4 w-full">
            <div
              className="relative rounded-3xl p-6 sm:p-7 border border-white/90 bg-white/85 backdrop-blur-xl shadow-[0_16px_40px_rgba(11,30,72,0.06),0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 247, 255, 0.85) 100%)",
              }}
            >
              {/* Subtle Orbital Background */}
              <div className="pointer-events-none absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-blue-100/50 blur-2xl" />

              <div className="flex items-center justify-between pb-4 mb-4 border-b border-blue-100/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#006EDC]/10 border border-[#006EDC]/20 flex items-center justify-center text-[#006EDC]">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0B1E48]">Zelnex Institutional HQ</h3>
                    <p className="text-[11px] font-['JetBrains_Mono',monospace] text-slate-500">AHMEDABAD, GUJARAT, INDIA</p>
                  </div>
                </div>
                <span className="text-[10px] font-['JetBrains_Mono',monospace] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 border border-emerald-200/60">
                  ONLINE
                </span>
              </div>

              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#006EDC] mt-1.5 shrink-0" />
                  <span><strong>Export Desk:</strong> Active processing for ASEAN, CIS, GCC, LATAM &amp; African MOH tenders.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] mt-1.5 shrink-0" />
                  <span><strong>CTD / eCTD Dossiers:</strong> Immediate access to Modules 1–5 and Zone IVb stability reports.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-1.5 shrink-0" />
                  <span><strong>Direct Escalation:</strong> Direct access to Drug Regulatory Affairs (DRA) executives.</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-blue-100/80 flex items-center justify-between text-[11px] font-['JetBrains_Mono',monospace]">
                <span className="text-slate-500">SLA Standard:</span>
                <span className="font-bold text-[#006EDC]">Same-Day Inquiry Dispatch</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
