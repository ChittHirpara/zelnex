"use client";

import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PillNav } from "@/components/ui/PillNav";
import {
  ShieldCheck,
  ExternalLink,
  CheckCircle2,
  X,
  FileCheck2,
  ArrowRight,
  Globe2,
  Award,
} from "lucide-react";

interface CertItem {
  id: string;
  code: string;
  name: string;
  country: string;
  flag: string;
  category: "Global" | "Africa" | "Asia & Middle East";
  status: string;
  domain: string;
  scope: string;
  description: string;
  modules: string[];
  featured?: boolean;
}

const METRICS = [
  { label: "Manufacturing Facility", value: "WHO-GMP & ISO 9001", icon: ShieldCheck },
  { label: "Export Stability", value: "Zone IVb (30°C / 75% RH)", icon: Award },
  { label: "Dossier Readiness", value: "CTD / eCTD Modules 1–5", icon: FileCheck2 },
  { label: "Active Registrations", value: "50+ Global Health Ministries", icon: Globe2 },
];

const CERTIFICATIONS: CertItem[] = [
  {
    id: "who-gmp",
    code: "WHO-GMP",
    name: "World Health Organization",
    country: "Global Standard",
    flag: "🌐",
    category: "Global",
    status: "Active Facility Benchmark",
    domain: "who.int",
    scope: "Sterile injectables, oral solid dosage, lyophilized vials, and HVAC Grade A/B cleanroom QA systems.",
    featured: true,
    description:
      "Global benchmark accreditation verifying that manufacturing facilities adhere to strict World Health Organization sterile cleanroom protocols and international pharmacopoeial standards.",
    modules: ["Module 1: Admin & Prescribing Info", "Module 2: Overall Quality Summary", "Module 3: Chemical & Biological Quality", "Grade A Cleanroom Protocols"],
  },
  {
    id: "iso-9001",
    code: "ISO 9001:2015",
    name: "Quality Management Systems",
    country: "International Standard",
    flag: "🏅",
    category: "Global",
    status: "Audited & Certified",
    domain: "iso.org",
    scope: "Supply chain quality assurance, vendor qualification, batch serialization, and risk mitigation.",
    featured: true,
    description:
      "Accreditation for rigorous organizational quality management, full raw material traceability, and audited batch records.",
    modules: ["Vendor Qualification SOPs", "Batch Record Traceability", "Risk Mitigation & CAPA", "International Audit Trails"],
  },
  {
    id: "nafdac-ng",
    code: "NAFDAC",
    name: "National Agency for Food & Drug Administration",
    country: "Nigeria",
    flag: "🇳🇬",
    category: "Africa",
    status: "Product Visas Issued",
    domain: "nafdac.gov.ng",
    scope: "Commercial pharmaceutical registration and importation clearance for essential therapeutic formulations.",
    description:
      "Product registration licenses approved by Nigeria's NAFDAC following exhaustive chemical assay verification and stability compliance.",
    modules: ["Certificate of Registration", "Clean Import Visa", "Zone IVb Stability Validated"],
  },
  {
    id: "ppb-ke",
    code: "PPB Kenya",
    name: "Pharmacy and Poisons Board",
    country: "Kenya MOH",
    flag: "🇰🇪",
    category: "Africa",
    status: "EAC Harmonized",
    domain: "pharmacyboardkenya.org",
    scope: "Marketing authorization for East African Community (EAC) public hospital tenders and private distribution.",
    description:
      "Registered with Kenya's PPB adhering to harmonized East African regional technical dossier standards.",
    modules: ["EAC Harmonized CTD", "GMP Inspection Cleared", "36-Month Real-Time Stability"],
  },
  {
    id: "nda-ug",
    code: "NDA Uganda",
    name: "National Drug Authority",
    country: "Uganda MOH",
    flag: "🇺🇬",
    category: "Africa",
    status: "MOH Registered",
    domain: "nda.or.ug",
    scope: "Hospital supply authorizations, anti-infective formulations, and essential medicines list compliance.",
    description:
      "Authorized by Uganda's National Drug Authority ensuring clinical efficacy, therapeutic safety, and tropical packaging barrier integrity.",
    modules: ["CTD Modules 1–5", "Zone IVb Tropical Blister Foil", "Batch Certificate of Analysis"],
  },
  {
    id: "fda-gh",
    code: "FDA Ghana",
    name: "Food and Drugs Authority",
    country: "Ghana",
    flag: "🇬🇭",
    category: "Africa",
    status: "Marketing License",
    domain: "fdaghana.gov.gh",
    scope: "West African marketing authorizations, public health institution procurement, and distributor supply.",
    description:
      "Approved pharmaceutical dossiers ensuring strict pharmacopeial compliance, child-resistant packaging, and batch assay verification.",
    modules: ["Marketing Authorisation", "Quality Audit Cleared", "Tamper-Evident Packaging"],
  },
  {
    id: "dav-vn",
    code: "DAV Vietnam",
    name: "Drug Administration of Vietnam (MOH)",
    country: "Vietnam",
    flag: "🇻🇳",
    category: "Asia & Middle East",
    status: "DAV Visa Active",
    domain: "dav.gov.vn",
    scope: "Drug Administration of Vietnam (DAV) visa numbers and national hospital tender qualification.",
    description:
      "Approved for nationwide commercial distribution across Vietnamese healthcare networks adhering to ACTD format guidelines.",
    modules: ["DAV Visa Registration", "ACTD Guidelines", "Bilingual Export Artwork"],
  },
  {
    id: "kimadia-iq",
    code: "Kimadia",
    name: "Ministry of Health (State Company for Drugs)",
    country: "Iraq",
    flag: "🇮🇶",
    category: "Asia & Middle East",
    status: "Kimadia Prequalified",
    domain: "moh.gov.iq",
    scope: "National institutional procurement, Kimadia tender supply, and private pharmaceutical distribution.",
    description:
      "Import authorizations cleared by Iraq's Ministry of Health for generic oral solid dosages and sterile vials.",
    modules: ["National MOH Registry", "Kimadia Prequalification", "Batch Assay Verified"],
  },
  {
    id: "sbd-ye",
    code: "SBD Yemen",
    name: "Supreme Board of Drugs & Medical Appliances",
    country: "Yemen",
    flag: "🇾🇪",
    category: "Asia & Middle East",
    status: "SBD Registered",
    domain: "sbd-ye.org",
    scope: "Essential generic medical supply, NGO healthcare tenders, and commercial distributor supply.",
    description:
      "Official registration with the Supreme Board of Drugs for vital therapeutics and high-barrier tropical packaging formats.",
    modules: ["Fast-Track Tender Clearance", "High-Barrier Tropical Foil", "CoA Certified Batches"],
  },
];

const CATEGORIES = ["All", "Global", "Africa", "Asia & Middle East"] as const;

export function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedCert, setSelectedCert] = useState<CertItem | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    if (selectedCert) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedCert]);

  const filteredCerts = useMemo(() => {
    if (selectedCategory === "All") return CERTIFICATIONS;
    return CERTIFICATIONS.filter((c) => c.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section
      id="certifications"
      className="relative w-full bg-white text-[#181B1F] py-20 sm:py-28 px-4 sm:px-6 md:px-8 select-none font-sans overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ── Minimal Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#006EDC]/10 border border-[#006EDC]/20 mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#006EDC] animate-pulse" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#006EDC]">
              Regulatory Accreditations
            </p>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#111111] tracking-tight leading-[1.15]"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Where Global Quality Meets Regulatory Compliance
          </h2>

          <p className="mt-4 text-base text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            Sourced strictly from WHO-GMP accredited facilities with verified CTD/eCTD dossier readiness across 50+ international health ministries.
          </p>
        </div>

        {/* ── Ultra-Clean 4-Item Proof Bar ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {METRICS.map((m, i) => {
            const Icon = m.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-[#FAFBF9] border border-[#EBEBEB] shadow-xs"
              >
                <div className="w-9 h-9 rounded-xl bg-white border border-[#E0E0E0] flex items-center justify-center text-[#006EDC] shrink-0 shadow-xs">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-[#111111] truncate">{m.value}</div>
                  <div className="text-[11px] text-slate-500 truncate">{m.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Category Filter Tabs with GSAP PillNav ── */}
        <div className="flex items-center justify-center mb-10">
          <PillNav
            items={CATEGORIES.map((cat) => ({
              id: cat,
              label: cat,
            }))}
            activeId={selectedCategory}
            onSelect={(id) => setSelectedCategory(id)}
            baseColor="#082B61"
            pillColor="#FAFBF9"
            pillTextColor="#2A3447"
            hoveredPillTextColor="#FFFFFF"
          />
        </div>

        {/* ── Clean Minimal 3-Column Cards Grid ── */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedCert(cert)}
                className="group relative flex flex-col justify-between rounded-2xl p-6 bg-white border border-[#E8E8E8] transition-all duration-300 hover:border-[#006EDC]/50 hover:shadow-[0_12px_30px_rgba(0,110,220,0.06)] hover:-translate-y-1 cursor-pointer"
              >
                {/* Header: Flag/Icon + Status */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl">{cert.flag}</span>
                      <div>
                        <div className="text-xs font-bold text-[#111111]">{cert.country}</div>
                        <div className="text-[11px] text-slate-400">{cert.category}</div>
                      </div>
                    </div>

                    <span className="text-[10.5px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      {cert.status}
                    </span>
                  </div>

                  {/* Title & Scope */}
                  <h3
                    className="text-xl font-bold text-[#111111] group-hover:text-[#006EDC] transition-colors leading-tight mb-1"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {cert.code}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium line-clamp-1 mb-3">
                    {cert.name}
                  </p>
                  <p className="text-xs leading-relaxed text-slate-600 line-clamp-2">
                    {cert.scope}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#006EDC]">
                  <span className="group-hover:underline">View Dossier Specs</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── Minimal Dossier Lightbox Modal ── */}
      <AnimatePresence>
        {selectedCert && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[85vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{selectedCert.flag}</span>
                <div>
                  <div className="text-xs font-bold text-[#006EDC] uppercase tracking-wider">
                    {selectedCert.country} · {selectedCert.status}
                  </div>
                  <h3
                    className="text-2xl font-bold text-[#111111] leading-tight"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {selectedCert.code}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-slate-500 font-medium mb-5 pb-3 border-b border-slate-100">
                {selectedCert.name}
              </p>

              {/* Description */}
              <div className="space-y-4 text-xs text-slate-600 leading-relaxed mb-6">
                <div>
                  <div className="font-bold text-[#111111] mb-1">Accreditation Overview</div>
                  <p>{selectedCert.description}</p>
                </div>

                <div>
                  <div className="font-bold text-[#111111] mb-1">Therapeutic & Supply Scope</div>
                  <p>{selectedCert.scope}</p>
                </div>

                <div>
                  <div className="font-bold text-[#111111] mb-2">Available Dossier Modules</div>
                  <div className="space-y-1.5">
                    {selectedCert.modules.map((mod, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-2 rounded-lg bg-[#FAFBF9] border border-[#EAEAEA] text-slate-700 font-medium"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#008A8A] shrink-0" />
                        <span>{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={`https://${selectedCert.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#006EDC]"
                >
                  <span>{selectedCert.domain}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-2 rounded-full bg-[#082B61] text-xs font-bold text-white hover:bg-[#006EDC] transition-colors"
                >
                  Close Specification
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Certifications;
