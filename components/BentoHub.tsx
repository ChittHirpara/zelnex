"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Globe2,
  Share2,
  Link2,
  TrendingUp,
  Activity,
  ArrowUpRight,
  MapPin,
  Mail,
  Pill,
  Sparkles,
  ShieldCheck,
  FileText,
  Layers,
  FlaskConical,
  Check,
  HeartHandshake,
} from "lucide-react";

export function BentoHub() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full py-12 md:py-16 text-[#17181c] select-none">
      {/* ── Top Bar ── */}
      <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#17181c]/10 max-w-[1120px] mx-auto">
        {/* Left: Brand Monogram & Wordmark */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#17181c] text-white font-['Space_Grotesk'] font-bold text-base shadow-[0_14px_34px_-18px_rgba(20,22,28,0.18)]">
            ZH
          </div>
          <div>
            <span className="font-['Space_Grotesk'] text-base font-bold tracking-tight text-[#17181c]">
              zelnex.formulary
            </span>
            <span className="hidden sm:inline-block ml-2 text-xs font-medium text-[#5b5e68]">
              · WHO-GMP Certified Hub
            </span>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-1.5 h-9 px-3.5 rounded-full bg-white border border-[#17181c]/10 text-xs font-semibold text-[#17181c] shadow-[0_14px_34px_-18px_rgba(20,22,28,0.18)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#0f9d8f]" /> : <Link2 className="w-3.5 h-3.5 text-[#5b5e68]" />}
            <span>{copied ? "Link Copied!" : "Share Link"}</span>
          </button>

          <button
            onClick={handleCopyLink}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-[#17181c]/10 text-[#17181c] shadow-[0_14px_34px_-18px_rgba(20,22,28,0.18)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            aria-label="Share"
          >
            <Share2 className="w-3.5 h-3.5 text-[#5b5e68]" />
          </button>
        </div>
      </div>

      {/* ── 4x4 Mixed-Span Bento Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-[1120px] mx-auto md:auto-rows-[176px]">
        {/* ── 1. Profile Anchor Tile (2x2 White) ── */}
        <div className="tile md:col-span-2 md:row-span-2 rounded-[26px] bg-white border border-[#17181c]/[0.09] p-7 flex flex-col justify-between shadow-[0_14px_34px_-18px_rgba(20,22,28,0.18)] hover:shadow-[0_22px_50px_-22px_rgba(20,22,28,0.28)] hover:-translate-y-1 transition-all duration-300">
          {/* Top Row: Avatar & Status Pill */}
          <div className="flex items-start justify-between">
            <div className="relative h-20 w-20 rounded-full overflow-hidden ring-4 ring-[#f2f3f5] shadow-sm bg-[#082B61] flex items-center justify-center text-white">
              <Image
                src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=200&h=200&fit=crop"
                alt="Zelnex Clinical Team"
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="inline-flex items-center gap-2 h-8 px-3 rounded-full bg-[#e7f5f1] text-[#0b7d72] text-xs font-semibold">
              <span className="h-2 w-2 rounded-full bg-[#0f9d8f] animate-pulse" />
              <span>Available for Global Supply</span>
            </div>
          </div>

          {/* Identity & Bio */}
          <div className="my-auto pt-4">
            <h3 className="font-['Space_Grotesk'] text-3xl font-extrabold text-[#17181c] tracking-tight leading-tight">
              Zelnex Healthcare
            </h3>
            <p className="text-sm font-semibold text-[#5b5e68] mt-1">
              Global Pharmaceutical Manufacturer & Exporter
            </p>
            <p className="text-xs sm:text-[13px] leading-relaxed text-[#5b5e68] mt-2.5 max-w-md">
              We engineer accredited oral solids, sterile injectables, and specialized therapeutics for hospitals and distributors across 50+ countries.
            </p>
          </div>

          {/* Pinned Bottom Social / Resource Buttons */}
          <div className="mt-4 pt-4 border-t border-[#17181c]/[0.08] flex items-center gap-2.5">
            <Link
              href="#contact"
              className="flex h-10 px-3 items-center gap-2 rounded-2xl bg-[#f2f3f5] border border-[#17181c]/10 text-xs font-bold text-[#17181c] hover:bg-[#17181c] hover:text-white transition-all duration-300"
            >
              <Globe2 className="w-3.5 h-3.5 text-[#0f9d8f]" />
              <span>Export Portal</span>
            </Link>
            <Link
              href="#expertise"
              className="flex h-10 px-3 items-center gap-2 rounded-2xl bg-[#f2f3f5] border border-[#17181c]/10 text-xs font-bold text-[#17181c] hover:bg-[#17181c] hover:text-white transition-all duration-300"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#0f9d8f]" />
              <span>WHO-GMP</span>
            </Link>
            <Link
              href="#products"
              className="flex h-10 px-3 items-center gap-2 rounded-2xl bg-[#f2f3f5] border border-[#17181c]/10 text-xs font-bold text-[#17181c] hover:bg-[#17181c] hover:text-white transition-all duration-300"
            >
              <FileText className="w-3.5 h-3.5 text-[#fb923c]" />
              <span>eCTD Dossiers</span>
            </Link>
          </div>
        </div>

        {/* ── 2. Photo Tile (2-Wide) ── */}
        <div className="tile md:col-span-2 rounded-[26px] overflow-hidden relative shadow-[0_14px_34px_-18px_rgba(20,22,28,0.18)] hover:shadow-[0_22px_50px_-22px_rgba(20,22,28,0.28)] hover:-translate-y-1 transition-all duration-300 min-h-[176px]">
          <Image
            src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&h=400&fit=crop"
            alt="Sterile Production Line"
            fill
            sizes="(max-width: 768px) 100vw, 560px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Glass Chip Bottom-Left */}
          <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 h-9 px-3.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-[#17181c] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#fb923c]" />
            <span>On the cleanroom floor today</span>
          </div>
        </div>

        {/* ── 3. Now-Active Batch Tile (1x1 Charcoal) ── */}
        <div className="tile md:col-span-1 rounded-[26px] bg-[#17181c] text-white p-5 flex flex-col justify-between shadow-[0_14px_34px_-18px_rgba(20,22,28,0.18)] hover:shadow-[0_22px_50px_-22px_rgba(20,22,28,0.28)] hover:-translate-y-1 transition-all duration-300 min-h-[176px]">
          <div className="flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#0f9d8f]">
            <Activity className="w-3.5 h-3.5" />
            <span>LIVE BATCH</span>
          </div>

          <div className="flex items-center gap-3 my-auto">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0f9d8f] to-[#0b7d72] text-white shadow-sm shrink-0">
              <Pill className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h4 className="text-xs font-bold truncate text-white">Amoxiclav 625mg</h4>
              <p className="text-[11px] text-white/55 truncate">Batch #ZN-8924</p>
            </div>
          </div>

          {/* Animated CSS Equalizer Bars */}
          <div className="flex items-center justify-between pt-2 border-t border-white/10">
            <div className="flex items-end gap-1 h-3.5">
              <span className="w-1 bg-[#0f9d8f] rounded-full animate-[pulse_1s_ease-in-out_infinite] h-3" />
              <span className="w-1 bg-[#0f9d8f] rounded-full animate-[pulse_1.4s_ease-in-out_infinite_0.2s] h-2" />
              <span className="w-1 bg-[#0f9d8f] rounded-full animate-[pulse_0.8s_ease-in-out_infinite_0.4s] h-3.5" />
              <span className="w-1 bg-[#0f9d8f] rounded-full animate-[pulse_1.2s_ease-in-out_infinite_0.1s] h-2.5" />
            </div>
            <span className="text-[11px] font-mono text-white/45">QC Verified</span>
          </div>
        </div>

        {/* ── 4. Stat Pop Tile (1x1 Teal) ── */}
        <div className="tile md:col-span-1 rounded-[26px] bg-[#0f9d8f] text-white p-5 flex flex-col justify-between shadow-[0_14px_34px_-18px_rgba(20,22,28,0.18)] hover:shadow-[0_22px_50px_-22px_rgba(20,22,28,0.28)] hover:-translate-y-1 transition-all duration-300 min-h-[176px]">
          <div className="flex items-center justify-between">
            <Globe2 className="w-4 h-4 text-white/85" />
            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-bold text-white">
              <TrendingUp className="w-2.5 h-2.5" />
              <span>+180</span>
            </div>
          </div>

          <div>
            <div className="font-['Space_Grotesk'] text-4xl font-bold tracking-tight leading-none">
              50+
            </div>
            <p className="text-xs font-semibold text-white/80 mt-1">
              Countries Cleared
            </p>
          </div>
        </div>

        {/* ── 5. Featured Formulation Tile (2-Wide White) ── */}
        <div className="tile md:col-span-2 rounded-[26px] bg-white border border-[#17181c]/[0.09] p-5 sm:p-6 flex items-center justify-between gap-4 shadow-[0_14px_34px_-18px_rgba(20,22,28,0.18)] hover:shadow-[0_22px_50px_-22px_rgba(20,22,28,0.28)] hover:-translate-y-1 transition-all duration-300 min-h-[176px]">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e7f5f1] text-[#0b7d72] shrink-0 shadow-sm">
              <FlaskConical className="w-7 h-7" />
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#5b5e68]">
                FEATURED DOSSIER
              </span>
              <h4 className="font-['Space_Grotesk'] text-lg font-bold text-[#17181c] leading-snug">
                Sterile Lyophilized Vials
              </h4>
              <div className="flex flex-wrap gap-1.5 mt-2">
                <span className="px-2 py-0.5 rounded-md bg-[#f2f3f5] text-[10.5px] font-semibold text-[#5b5e68]">
                  Zone IVb
                </span>
                <span className="px-2 py-0.5 rounded-md bg-[#f2f3f5] text-[10.5px] font-semibold text-[#5b5e68]">
                  eCTD Ready
                </span>
                <span className="px-2 py-0.5 rounded-md bg-[#e7f5f1] text-[10.5px] font-bold text-[#0b7d72]">
                  Live MOH Clearance
                </span>
              </div>
            </div>
          </div>

          <Link
            href="#contact"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#17181c] text-white hover:bg-[#0f9d8f] transition-colors shrink-0 shadow-md"
            aria-label="View Project"
          >
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* ── 6. Inline SVG Map Tile (1x1 Teal-Tint) ── */}
        <div className="tile md:col-span-1 rounded-[26px] bg-[#e7f5f1] relative overflow-hidden p-4 flex flex-col justify-between shadow-[0_14px_34px_-18px_rgba(20,22,28,0.18)] hover:shadow-[0_22px_50px_-22px_rgba(20,22,28,0.28)] hover:-translate-y-1 transition-all duration-300 min-h-[176px]">
          {/* Inline SVG Stylized Street Grid */}
          <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 200 200" preserveAspectRatio="none">
            <line x1="10" y1="20" x2="190" y2="180" stroke="#0f9d8f" strokeWidth="2.5" strokeOpacity="0.3" />
            <line x1="20" y1="180" x2="180" y2="20" stroke="#0f9d8f" strokeWidth="2" strokeOpacity="0.25" />
            <line x1="0" y1="90" x2="200" y2="120" stroke="#0f9d8f" strokeWidth="3" strokeOpacity="0.35" />
            <line x1="90" y1="0" x2="110" y2="200" stroke="#0f9d8f" strokeWidth="2.5" strokeOpacity="0.3" />
            <circle cx="100" cy="105" r="28" fill="#fb923c" fillOpacity="0.15" />
          </svg>

          {/* Centered Apricot Pin */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="h-4 w-4 rounded-full bg-[#fb923c] ring-4 ring-white shadow-md animate-bounce" />
          </div>

          <div className="relative z-10 flex justify-between items-center w-full">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#0b7d72]">
              GLOBAL HUB
            </span>
          </div>

          {/* Bottom Glass Chip */}
          <div className="relative z-10 flex items-center justify-between pt-1">
            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-[#17181c] shadow-sm">
              <MapPin className="w-2.5 h-2.5 text-[#e07a1f]" />
              <span>India HQ</span>
            </div>
            <span className="text-[11px] font-mono font-bold text-[#0b7d72]">14:22 UTC</span>
          </div>
        </div>

        {/* ── 7. Newsletter Tile (1x1 Apricot) ── */}
        <div className="tile md:col-span-1 rounded-[26px] bg-[#fb923c] text-[#17181c] p-5 flex flex-col justify-between shadow-[0_14px_34px_-18px_rgba(20,22,28,0.18)] hover:shadow-[0_22px_50px_-22px_rgba(20,22,28,0.28)] hover:-translate-y-1 transition-all duration-300 min-h-[176px]">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#17181c]/75">
              THE GAZETTE
            </span>
            <Mail className="w-4 h-4 text-[#17181c]/80" />
          </div>

          <div>
            <h4 className="font-['Space_Grotesk'] text-base font-bold text-[#17181c] leading-tight">
              Download 2026 Formulary
            </h4>
            <p className="text-[11.5px] font-semibold text-[#17181c]/75 mt-1">
              800+ Products Listed
            </p>
          </div>
        </div>

        {/* ── 8. Toolbox / Dosage Forms Tile (2-Wide White) ── */}
        <div className="tile md:col-span-2 rounded-[26px] bg-white border border-[#17181c]/[0.09] p-5 sm:p-6 flex flex-col justify-center shadow-[0_14px_34px_-18px_rgba(20,22,28,0.18)] hover:shadow-[0_22px_50px_-22px_rgba(20,22,28,0.28)] hover:-translate-y-1 transition-all duration-300 min-h-[176px]">
          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#5b5e68] mb-2.5">
            ACCREDITED DOSAGE CAPABILITIES
          </span>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Film-Coated Tablets", icon: Pill, color: "text-[#0f9d8f]" },
              { label: "Hard Gelatin Capsules", icon: Layers, color: "text-[#0f9d8f]" },
              { label: "Dry Syrups & Suspensions", icon: FlaskConical, color: "text-[#fb923c]" },
              { label: "IV Injectables", icon: Activity, color: "text-[#0f9d8f]" },
              { label: "Lyophilized Vials", icon: ShieldCheck, color: "text-[#fb923c]" },
              { label: "Blister & Alu-Alu", icon: FileText, color: "text-[#0f9d8f]" },
            ].map((tool) => {
              const ToolIcon = tool.icon;
              return (
                <div
                  key={tool.label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f2f3f5] border border-[#17181c]/10 text-xs font-semibold text-[#17181c]"
                >
                  <ToolIcon className={`w-3.5 h-3.5 ${tool.color}`} />
                  <span>{tool.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── 9. Email / Sourcing CTA Tile (2-Wide Charcoal) ── */}
        <div className="tile md:col-span-2 rounded-[26px] bg-[#17181c] text-white p-6 flex items-center justify-between gap-4 relative overflow-hidden shadow-[0_22px_50px_-22px_rgba(20,22,28,0.28)] hover:-translate-y-1 transition-all duration-300 min-h-[176px]">
          {/* Subtle blurred teal glow blob in corner */}
          <div className="pointer-events-none absolute -top-10 -right-10 w-44 h-44 rounded-full bg-[#0f9d8f]/25 blur-2xl" />

          <div className="relative z-10">
            <h4 className="font-['Space_Grotesk'] text-xl font-bold text-white tracking-tight leading-snug">
              Let&apos;s build a partnership.
            </h4>
            <p className="text-xs text-white/65 mt-1 max-w-xs">
              Open for hospital tenders, generic distribution, and contract manufacturing.
            </p>
          </div>

          <Link
            href="#contact"
            className="relative z-10 inline-flex items-center gap-2 h-11 px-5 rounded-full bg-[#0f9d8f] text-white text-xs font-bold hover:bg-[#0b7d72] shadow-md hover:-translate-y-0.5 transition-all shrink-0"
          >
            <span>Say Hello</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BentoHub;
