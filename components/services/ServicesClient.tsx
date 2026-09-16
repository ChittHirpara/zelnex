"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionDivider } from "@/components/SectionDivider";
import {
  ArrowUpRight,
  ShieldCheck,
  FileCheck2,
  Factory,
  Layers,
  Check,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  FileSpreadsheet,
  Building2,
} from "lucide-react";

interface ServiceItem {
  id: string;
  num: string;
  badge: string;
  title: string;
  accentWord: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  keyPoints: string[];
  specs: { label: string; value: string }[];
  metrics: { label: string; value: string }[];
  ctaText: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "regulatory",
    num: "01",
    badge: "REGULATORY AFFAIRS",
    title: "Common Technical Dossiers & Registrations",
    accentWord: "Registrations",
    tagline: "Accelerated Ministry of Health (MOH) eCTD Publishing & Dossier Licensing",
    description:
      "Zelnex provides end-to-end Drug Regulatory Affairs support for international health ministries and commercial importers. We compile, validate, and license ready Common Technical Documents (CTD) and electronic CTD (eCTD) for immediate submission across ASEAN, LATAM, GCC, CIS, and African markets.",
    icon: FileCheck2,
    keyPoints: [
      "Complete eCTD Modules 1 through 5 compiled to ICH guidelines",
      "Zone IVb Real-Time & Accelerated Stability Data (30°C/75% RH & 40°C/75% RH)",
      "COPP (Certificate of Pharmaceutical Product) & Free Sale Certificate issuance",
    ],
    specs: [
      { label: "Dossier Format", value: "eCTD v4.0 / ACTD / NeeS" },
      { label: "Available Dossiers", value: "150+ Ready Files" },
      { label: "Stability Standard", value: "Zone IVb (36 Months)" },
      { label: "Export Footprint", value: "50+ Global Markets" },
    ],
    metrics: [
      { label: "Ready Dossiers", value: "150+" },
      { label: "Stability Tested", value: "36 Mo" },
      { label: "Audit Readiness", value: "100%" },
    ],
    ctaText: "Request Dossier Index",
  },
  {
    id: "contract-manufacturing",
    num: "02",
    badge: "CONTRACT FORMULATION",
    title: "Custom Formulation & Batch Packaging",
    accentWord: "Packaging",
    tagline: "Commercial Solid, Liquid & Parenteral Output Under Certified WHO-GMP Standards",
    description:
      "Engineered for high-volume commercial formulation output. Zelnex partners with international pharmaceutical brand owners to formulate, test, scale, and package solid, liquid, and dry powder medicines under certified WHO-GMP standards with tailored batch sizing and automated blister packaging.",
    icon: Factory,
    keyPoints: [
      "High-speed automated blister, strip, and Alu-Alu high-barrier packaging lines",
      "Flexible batch sizing from pilot bioequivalence batches to commercial runs",
      "Strict formulation IP protection and dedicated non-disclosure protocols",
      "Integrated analytical release with 100% HPLC purity assay validation",
    ],
    specs: [
      { label: "Tablet Annual Output", value: "400 Million+ Units" },
      { label: "Capsule Output", value: "150 Million+ Units" },
      { label: "Cleanroom Standard", value: "ISO-7 / Grade C & D" },
      { label: "Barrier Packaging", value: "Alu-Alu / PVDC / Glass" },
    ],
    metrics: [
      { label: "Annual Tablets", value: "400M+" },
      { label: "Cleanroom Grade", value: "ISO-7" },
      { label: "Quality Release", value: "100%" },
    ],
    ctaText: "Request Manufacturing Sizing",
  },
  {
    id: "third-party-manufacturing",
    num: "03",
    badge: "3RD PARTY MANUFACTURING",
    title: "Formulation Supply For Tenders",
    accentWord: "Tenders",
    tagline: "Dedicated Private-Label Supply for Health Ministries & Procurement Desks",
    description:
      "Zelnex acts as a reliable third-party manufacturing backbone for commercial distributors, government health ministries, hospital networks, and tender procurement desks. We take your private brand from formulation approval to finished container export with clean inspection clearance.",
    icon: ShieldCheck,
    keyPoints: [
      "WHO-GMP and ISO 9001:2015 certified manufacturing facilities",
      "Artwork design, brand localization, and customized outer carton packaging",
      "Clean Report of Findings (CRF) and pre-shipment inspection clearance",
    ],
    specs: [
      { label: "Compliance Standard", value: "WHO-GMP & ISO 9001" },
      { label: "Production Turnaround", value: "35–45 Days" },
      { label: "Inspection Clearance", value: "SGS / Intertek CRF" },
    ],
    metrics: [
      { label: "Turnaround Time", value: "35 Days" },
      { label: "Inspection Pass", value: "100%" },
      { label: "Facility Audit", value: "WHO-GMP" },
    ],
    ctaText: "Inquire for Private Tenders",
  },
  {
    id: "generic-products",
    num: "04",
    badge: "GENERIC PRODUCTS",
    title: "550+ Commercial Generic Formulations",
    accentWord: "Formulations",
    tagline: "Comprehensive Commercial Formulary Covering 10+ Essential Therapeutic Classes",
    description:
      "A comprehensive, export-cleared formulary covering high-demand generic medicines for institutional hospital supply and commercial pharmacy networks. Backed by rigorous stability validation, immediate dossier availability, and robust shelf-life testing.",
    icon: Layers,
    keyPoints: [
      "Over 550 approved generic formulations covering essential human molecules",
      "Therapeutics: Anti-Infectives, Cardiovascular, Gastrointestinal, CNS, Antidiabetic",
      "Multiple dosage forms: Tablets, Capsules, Syrups, Dry Powders",
      "Immediate product dossier availability for rapid country registration",
    ],
    specs: [
      { label: "Commercial Formulary", value: "550+ Formulations" },
      { label: "Therapeutic Breadth", value: "10+ Categories" },
      { label: "Documentation", value: "Full CTD / eCTD Files" },
      { label: "Global Reach", value: "50+ Destinations" },
    ],
    metrics: [
      { label: "Active SKUs", value: "550+" },
      { label: "Therapeutic Classes", value: "10+" },
      { label: "Destinations", value: "50+" },
    ],
    ctaText: "Download Product Catalog",
  },
];

function ServicesModernistContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const param = searchParams.get("service") || searchParams.get("tab") || "regulatory";

  const resolvedTab = useMemo(() => {
    if (param === "contract-manufacturing" || param === "contract" || param === "1") {
      return "contract-manufacturing";
    }
    if (param === "third-party-manufacturing" || param === "third-party" || param === "2") {
      return "third-party-manufacturing";
    }
    if (param === "generic-products" || param === "generics" || param === "3") {
      return "generic-products";
    }
    return "regulatory";
  }, [param]);

  const [userSelectedTab, setUserSelectedTab] = useState<string | null>(null);
  const activeTab = userSelectedTab ?? resolvedTab;

  const handleSelectService = (id: string) => {
    setUserSelectedTab(id);
    router.push(`/services?service=${id}`, { scroll: false });
  };

  const currentService = SERVICES_DATA.find((s) => s.id === activeTab) || SERVICES_DATA[0];
  const IconComponent = currentService.icon;

  return (
    <div
      className="min-h-screen relative bg-white text-[#0B1E48] font-[family-name:var(--font-montserrat)] selection:bg-[#006EDC] selection:text-white antialiased overflow-x-hidden"
      style={{
        backgroundColor: "#FFFFFF",
        backgroundImage: `
          radial-gradient(ellipse 75% 45% at 50% -5%, rgba(186, 230, 253, 0.45) 0%, rgba(224, 242, 254, 0.18) 55%, transparent 80%),
          radial-gradient(circle at 90% 75%, rgba(199, 210, 254, 0.22) 0%, transparent 45%),
          radial-gradient(circle at 10% 40%, rgba(186, 230, 253, 0.2) 0%, transparent 40%),
          linear-gradient(to right, rgba(0, 110, 220, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 110, 220, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: "100% 100%, 100% 100%, 100% 100%, 32px 32px, 32px 32px",
      }}
    >
      <Navbar />

      <main className="pt-28 sm:pt-32 pb-12 sm:pb-16 relative z-10">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          {/* ── Top Clinical Header Banner ── */}
          <div className="max-w-4xl mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#006EDC]/10 border border-[#006EDC]/30 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#006EDC] animate-pulse" />
              <p className="text-[11px] font-['JetBrains_Mono',monospace] font-bold uppercase tracking-[0.15em] text-[#006EDC]">
                02.00 // PHARMACEUTICAL CAPABILITIES & REGULATORY SERVICES
              </p>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-[#0B1E48] tracking-tight leading-[1.08] mb-4">
              Enterprise Formulations & <span className="text-[#006EDC]">Global Licensing</span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl">
              End-to-end pharmaceutical manufacturing, institutional tender supply, and expedited
              CTD/eCTD dossier submissions engineered for health ministries across 50+ global export markets.
            </p>
          </div>

          {/* ── 1. Top 4-Service Selector Bar (Bright White + Technical Blue Theme) ── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 p-2 bg-white/80 backdrop-blur-md rounded-2xl border border-blue-100 shadow-[0_4px_25px_rgba(0,110,220,0.06)] mb-8">
            {SERVICES_DATA.map((svc) => {
              const isSelected = activeTab === svc.id;

              return (
                <button
                  key={svc.id}
                  type="button"
                  onClick={() => handleSelectService(svc.id)}
                  className={`py-3.5 px-4 rounded-xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-center relative overflow-hidden group ${
                    isSelected
                      ? "bg-gradient-to-r from-[#006EDC] to-[#0052B4] text-white shadow-md shadow-[#006EDC]/25 border border-[#006EDC]"
                      : "bg-white hover:bg-blue-50/70 text-[#0B1E48] border border-slate-200/80 hover:border-blue-300/80 shadow-xs"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span
                      className={`text-[10px] font-['JetBrains_Mono',monospace] font-bold tracking-widest ${
                        isSelected ? "text-blue-100" : "text-[#006EDC]"
                      }`}
                    >
                      {svc.num} {"//"}
                    </span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    )}
                  </div>
                  <span
                    className={`text-xs sm:text-[13px] font-bold uppercase tracking-tight truncate ${
                      isSelected ? "text-white" : "text-slate-700 group-hover:text-[#0B1E48]"
                    }`}
                  >
                    {svc.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ── 2. Precise Single-Card 12-Column Grid (Luminous White & Blue) ── */}
          <div className="rounded-3xl border border-blue-100/90 bg-white/95 backdrop-blur-md shadow-[0_16px_50px_rgba(0,110,220,0.08)] overflow-hidden transition-all duration-300 mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-blue-100/80">
              {/* Left Sidebar (Cols 1-4): Metadata & Technical Specifications */}
              <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between space-y-8 bg-gradient-to-b from-[#F8FAFD] via-[#F4F8FD] to-[#FFFFFF]">
                <div className="space-y-6">
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between border-b border-blue-100/80 pb-5">
                    <div className="space-y-1.5">
                      <span className="inline-block text-[10.5px] font-['JetBrains_Mono',monospace] font-bold uppercase tracking-[0.2em] text-[#006EDC] bg-blue-50/80 border border-blue-200/60 px-2.5 py-0.5 rounded-md">
                        SERVICE {currentService.num} OF 04
                      </span>
                      <span className="block text-xs font-bold text-[#0B1E48] uppercase tracking-wide">
                        WHO-GMP &amp; CTD VERIFIED
                      </span>
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#006EDC] to-[#082B61] text-white flex items-center justify-center shadow-md shadow-blue-500/25 shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Specifications List */}
                  <div className="space-y-3">
                    <span className="block text-[11px] font-['JetBrains_Mono',monospace] font-bold uppercase tracking-[0.2em] text-slate-500">
                      [ SPECIFICATIONS ]
                    </span>
                    <div className="divide-y divide-blue-100/80 border-y border-blue-100/80">
                      {currentService.specs.map((s, idx) => (
                        <div key={idx} className="py-2.5 flex items-center justify-between text-xs">
                          <span className="text-slate-600 font-medium">{s.label}</span>
                          <span className="font-bold text-[#0B1E48] font-['JetBrains_Mono',monospace] bg-white px-2.5 py-0.5 rounded-md border border-blue-100/90 shadow-2xs">
                            {s.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Left Bottom 3 Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-blue-100/80 text-center">
                  {currentService.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl border border-blue-100 bg-white/90 shadow-2xs hover:border-blue-300 transition-colors"
                    >
                      <div className="text-sm sm:text-base font-black text-[#006EDC] font-['JetBrains_Mono',monospace]">
                        {m.value}
                      </div>
                      <div className="text-[9px] font-bold text-slate-500 uppercase tracking-tight mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content Area (Cols 5-12): Headline, Description & Highlights */}
              <div className="lg:col-span-8 p-6 sm:p-10 space-y-8 flex flex-col justify-between bg-white">
                <div className="space-y-6">
                  {/* Headline & Tagline */}
                  <div>
                    <span className="inline-flex items-center gap-2 text-xs font-['JetBrains_Mono',monospace] font-bold uppercase tracking-[0.15em] text-[#006EDC] bg-blue-50 border border-blue-200/70 px-3 py-1.5 rounded-full mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#006EDC]" />
                      {currentService.tagline}
                    </span>

                    <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-[#0B1E48] uppercase tracking-tight leading-[1.08] mt-2">
                      {currentService.title.split(currentService.accentWord)[0]}
                      <span className="text-[#006EDC]">{currentService.accentWord}</span>
                      {currentService.title.split(currentService.accentWord)[1]}
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {currentService.description}
                  </p>

                  {/* Core Highlights Checklist */}
                  <div className="space-y-3 pt-2">
                    <span className="block text-[11px] font-['JetBrains_Mono',monospace] font-bold uppercase tracking-[0.2em] text-slate-500">
                      [ CORE CAPABILITIES &amp; DELIVERABLES ]
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {currentService.keyPoints.map((point, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl border border-blue-100/90 bg-[#F8FAFD] hover:bg-blue-50/60 hover:border-blue-200 transition-all flex items-start gap-3 text-xs sm:text-[13px] text-slate-700 font-medium leading-relaxed"
                        >
                          <span className="w-5 h-5 rounded-md bg-[#006EDC]/10 text-[#006EDC] shrink-0 flex items-center justify-center text-xs font-bold mt-0.5 border border-[#006EDC]/25">
                            <Check className="w-3.5 h-3.5" />
                          </span>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Strip */}
                <div className="pt-6 border-t border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                      Active WHO-GMP Export Compliance
                    </span>
                  </div>

                  <Link
                    href="/contact"
                    className="w-full sm:w-auto py-3.5 px-8 rounded-xl bg-gradient-to-r from-[#006EDC] to-[#0052B4] hover:from-[#005bb8] hover:to-[#082B61] text-white text-xs font-bold uppercase tracking-[0.15em] flex items-center justify-center gap-2.5 transition-all shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 active:scale-[0.98]"
                  >
                    <span>{currentService.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* ── Signature Organic Wave Ribbon Line into Footer ── */}
      <div className="mt-8 sm:mt-12 mb-0 relative overflow-hidden leading-[0] w-full" aria-hidden="true">
        <SectionDivider from="#082B61" to="#ffffff" height={42} />
        <SectionDivider from="#ffffff" to="#082B61" flip height={42} />
      </div>

      <Footer />
    </div>
  );
}

export default function ServicesClient() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#006EDC] border-t-transparent animate-spin rounded-full" />
        </div>
      }
    >
      <ServicesModernistContent />
    </Suspense>
  );
}
