"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowUpRight, Check, ShieldCheck, FileCheck2, Factory, Layers } from "lucide-react";

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
      "Bioequivalence (BE) comparative study files against global reference drugs",
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
    title: "Turnkey Formulation Supply For Tenders",
    accentWord: "Tenders",
    tagline: "Dedicated Private-Label Supply for Health Ministries & Procurement Desks",
    description:
      "Zelnex acts as a reliable third-party manufacturing backbone for commercial distributors, government health ministries, hospital networks, and tender procurement desks. We take your private brand from formulation approval to finished container export with clean inspection clearance.",
    icon: ShieldCheck,
    keyPoints: [
      "State-of-the-art sterile injectable and oral solid manufacturing units",
      "WHO-GMP, ISO 9001:2015, and ISO 14001 certified manufacturing facilities",
      "Turnkey artwork design, brand localization, and customized outer carton packaging",
      "Clean Report of Findings (CRF) and pre-shipment inspection clearance",
    ],
    specs: [
      { label: "Compliance Standard", value: "WHO-GMP & ISO 9001" },
      { label: "Production Turnaround", value: "35–45 Days" },
      { label: "Inspection Clearance", value: "SGS / Intertek CRF" },
      { label: "Freight Dispatch", value: "FOB JNPT / CIF / Air DDP" },
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
    title: "800+ Commercial Generic Formulations",
    accentWord: "Formulations",
    tagline: "Comprehensive Commercial Formulary Covering 10+ Essential Therapeutic Classes",
    description:
      "A comprehensive, export-cleared formulary covering high-demand generic medicines for institutional hospital supply and commercial pharmacy networks. Backed by rigorous stability validation, immediate dossier availability, and robust shelf-life testing.",
    icon: Layers,
    keyPoints: [
      "Over 800 approved generic formulations covering essential human molecules",
      "Therapeutics: Anti-Infectives, Cardiovascular, Gastrointestinal, CNS, Antidiabetic",
      "Multiple dosage forms: Tablets, Capsules, Syrups, Injectables, Dry Powders, Drops",
      "Immediate product dossier availability for rapid country registration",
    ],
    specs: [
      { label: "Commercial Formulary", value: "800+ Formulations" },
      { label: "Therapeutic Breadth", value: "10+ Categories" },
      { label: "Documentation", value: "Full CTD / eCTD Files" },
      { label: "Global Reach", value: "50+ Destinations" },
    ],
    metrics: [
      { label: "Active SKUs", value: "800+" },
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

  const [activeTab, setActiveTab] = useState<string>("regulatory");

  useEffect(() => {
    if (param === "contract-manufacturing" || param === "contract" || param === "1") {
      setActiveTab("contract-manufacturing");
    } else if (param === "third-party-manufacturing" || param === "third-party" || param === "2") {
      setActiveTab("third-party-manufacturing");
    } else if (param === "generic-products" || param === "generics" || param === "3") {
      setActiveTab("generic-products");
    } else {
      setActiveTab("regulatory");
    }
  }, [param]);

  const handleSelectService = (id: string) => {
    setActiveTab(id);
    router.push(`/services?service=${id}`, { scroll: false });
  };

  const currentService = SERVICES_DATA.find((s) => s.id === activeTab) || SERVICES_DATA[0];
  const IconComponent = currentService.icon;

  return (
    <div className="min-h-screen bg-[#E3E2DE] text-[#141414] font-['General_Sans',sans-serif] selection:bg-[#1351AA] selection:text-[#E3E2DE] antialiased">
      <Navbar />

      <main className="pt-24 sm:pt-28 pb-16">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          
          {/* ── 1. Top 4-Service Selector Bar ── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 border border-[#C7C7C7] divide-x divide-y sm:divide-y-0 divide-[#C7C7C7] bg-[#E3E2DE] mb-8">
            {SERVICES_DATA.map((svc) => {
              const isSelected = activeTab === svc.id;

              return (
                <button
                  key={svc.id}
                  type="button"
                  onClick={() => handleSelectService(svc.id)}
                  className={`py-3.5 px-4 text-left transition-colors duration-200 cursor-pointer flex flex-col justify-center ${
                    isSelected
                      ? "bg-[#1351AA] text-[#E3E2DE]"
                      : "bg-transparent text-[#141414] hover:bg-[#141414]/5"
                  }`}
                >
                  <span className={`text-[10px] font-['JetBrains_Mono',monospace] font-bold tracking-widest ${
                    isSelected ? "text-[#E3E2DE]/80" : "text-[#7A7A7A]"
                  }`}>
                    {svc.num} //
                  </span>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-tight truncate">
                    {svc.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ── 2. Precise Single-Card 12-Column Grid ── */}
          <div className="border border-[#C7C7C7] bg-[#E3E2DE]">
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#C7C7C7]">
              
              {/* Left Sidebar (Cols 1-4): Metadata & Technical Specifications */}
              <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between space-y-8">
                
                <div className="space-y-6">
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between border-b border-[#C7C7C7] pb-4">
                    <div className="space-y-1">
                      <span className="text-[10.5px] font-['JetBrains_Mono',monospace] font-bold uppercase tracking-[0.2em] text-[#7A7A7A]">
                        SERVICE {currentService.num} OF 04
                      </span>
                      <span className="block text-xs font-bold text-[#1351AA] uppercase">
                        WHO-GMP &amp; CTD VERIFIED
                      </span>
                    </div>

                    <div className="w-10 h-10 bg-[#1351AA] text-[#E3E2DE] flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Specifications List */}
                  <div className="space-y-3">
                    <span className="block text-[11px] font-['JetBrains_Mono',monospace] font-bold uppercase tracking-[0.2em] text-[#7A7A7A]">
                      [ SPECIFICATIONS ]
                    </span>
                    <div className="divide-y divide-[#C7C7C7] border-y border-[#C7C7C7]">
                      {currentService.specs.map((s, idx) => (
                        <div key={idx} className="py-2.5 flex items-center justify-between text-xs">
                          <span className="text-[#444343] font-medium">{s.label}</span>
                          <span className="font-bold text-[#141414] font-['JetBrains_Mono',monospace]">
                            {s.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Left Bottom 3 Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#C7C7C7] text-center">
                  {currentService.metrics.map((m, idx) => (
                    <div key={idx} className="p-2 border border-[#C7C7C7] bg-white/40">
                      <div className="text-sm font-black text-[#1351AA] font-['JetBrains_Mono',monospace]">
                        {m.value}
                      </div>
                      <div className="text-[9px] font-bold text-[#7A7A7A] uppercase tracking-tight mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* Right Content Area (Cols 5-12): Headline, Description & Highlights */}
              <div className="lg:col-span-8 p-6 sm:p-10 space-y-8 flex flex-col justify-between">
                
                <div className="space-y-6">
                  {/* Headline */}
                  <div>
                    <span className="block text-xs font-['JetBrains_Mono',monospace] font-bold uppercase tracking-[0.2em] text-[#1351AA] mb-2">
                      {currentService.tagline}
                    </span>

                    <h1 className="text-3xl sm:text-5xl font-black text-[#141414] uppercase tracking-tight leading-[0.95]">
                      {currentService.title.split(currentService.accentWord)[0]}
                      <span className="text-[#1351AA]">{currentService.accentWord}</span>
                      {currentService.title.split(currentService.accentWord)[1]}
                    </h1>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#444343] leading-relaxed font-normal">
                    {currentService.description}
                  </p>

                  {/* Core Highlights Checklist */}
                  <div className="space-y-3 pt-2">
                    <span className="block text-[11px] font-['JetBrains_Mono',monospace] font-bold uppercase tracking-[0.2em] text-[#7A7A7A]">
                      [ CORE CAPABILITIES &amp; DELIVERABLES ]
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {currentService.keyPoints.map((point, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 border border-[#C7C7C7] bg-white/30 flex items-start gap-2.5 text-xs text-[#141414] font-medium leading-normal"
                        >
                          <span className="w-4 h-4 bg-[#1351AA] text-[#E3E2DE] shrink-0 flex items-center justify-center text-[10px] font-bold mt-0.5">
                            ✓
                          </span>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Strip */}
                <div className="pt-6 border-t border-[#C7C7C7] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1351AA] animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#141414]">
                      Active WHO-GMP Export Compliance
                    </span>
                  </div>

                  <Link
                    href="/#contact"
                    className="w-full sm:w-auto py-3.5 px-7 bg-[#1351AA] hover:bg-[#141414] text-[#E3E2DE] text-xs font-bold uppercase tracking-[0.15em] flex items-center justify-center gap-2 transition-colors duration-200 rounded-none"
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

      <Footer />
    </div>
  );
}

export default function ServicesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#E3E2DE] flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#1351AA] border-t-transparent animate-spin" />
        </div>
      }
    >
      <ServicesModernistContent />
    </Suspense>
  );
}
