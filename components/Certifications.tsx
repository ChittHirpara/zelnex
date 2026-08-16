"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  Search,
  ShieldCheck,
  Bookmark,
  Share2,
  ExternalLink,
  CheckCircle2,
  X,
  Globe2,
  Award,
  FileCheck2,
  Check,
  SlidersHorizontal,
} from "lucide-react";

interface CertItem {
  id: string;
  code: string;
  name: string;
  country: string;
  category: "Global" | "Africa" | "Asia" | "Middle East" | "Quality";
  tag: string;
  domain: string;
  scope: string;
  auditYear: string;
  description: string;
  modules: string[];
}

const CERTIFICATIONS: CertItem[] = [
  {
    id: "who-gmp",
    code: "WHO-GMP",
    name: "World Health Organization",
    country: "Global Standard",
    category: "Global",
    tag: "Quality Certified",
    domain: "who.int",
    scope: "Sterile injectables, oral solids, lyophilized vials, and active QA systems.",
    auditYear: "Annual WHO-GMP Audit",
    description:
      "Global benchmark accreditation verifying that manufacturing facilities adhere to strict World Health Organization sterile cleanroom protocols and international pharmacopeias.",
    modules: ["Module 1: Admin Data", "Module 2: Quality Summaries", "Module 3: Chemical Quality", "Grade A Cleanroom"],
  },
  {
    id: "iso-9001",
    code: "ISO 9001:2015",
    name: "Quality Management System",
    country: "International Standard",
    category: "Quality",
    tag: "Audited & Verified",
    domain: "iso.org",
    scope: "Supply chain quality assurance, vendor qualification, and batch record traceability.",
    auditYear: "ISO 9001:2015 Certified",
    description:
      "Standard for organizational quality management, rigorous risk mitigation, and international freight batch integrity.",
    modules: ["Risk Mitigation", "Batch Traceability", "SOP Adherence", "Audit Trail Verification"],
  },
  {
    id: "nafdac",
    code: "NAFDAC",
    name: "Food & Drug Administration",
    country: "Nigeria",
    category: "Africa",
    tag: "MOH Registered",
    domain: "nafdac.gov.ng",
    scope: "Commercial pharmaceutical registration and importation clearance for therapeutic formulations.",
    auditYear: "NAFDAC Authorized",
    description:
      "Product registration licenses issued by Nigeria's NAFDAC following exhaustive chemical assay and analytical testing.",
    modules: ["Certificate of Registration", "Clean Import Visa", "Zone IVb Stability Passed"],
  },
  {
    id: "ppb-kenya",
    code: "PPB Kenya",
    name: "Pharmacy & Poisons Board",
    country: "Kenya MOH",
    category: "Africa",
    tag: "MOH Registered",
    domain: "pharmacyboardkenya.org",
    scope: "Marketing authorization for East African Community (EAC) public tenders and private distribution.",
    auditYear: "EAC Harmonized",
    description:
      "Registration with Kenya's Pharmacy and Poisons Board adhering to EAC regional technical harmonization standards.",
    modules: ["EAC Harmonized Dossier", "GMP Inspection Cleared", "36M Shelf-Life Data"],
  },
  {
    id: "nda-uganda",
    code: "NDA Uganda",
    name: "National Drug Authority",
    country: "Uganda MOH",
    category: "Africa",
    tag: "MOH Registered",
    domain: "nda.or.ug",
    scope: "Hospital supply authorizations, anti-infective formulations, and essential medicines list compliance.",
    auditYear: "NDA Verified",
    description:
      "Authorized by Uganda's National Drug Authority ensuring clinical safety, therapeutic efficacy, and tropical packaging barrier.",
    modules: ["CTD Modules 1–5", "Zone IVb Tropical Foil", "Finished Product CoA"],
  },
  {
    id: "moh-vietnam",
    code: "MOH-VN",
    name: "Ministry of Health (DAV)",
    country: "Vietnam",
    category: "Asia",
    tag: "Market Authorized",
    domain: "dav.gov.vn",
    scope: "Drug Administration of Vietnam (DAV) visa numbers and hospital tender qualification.",
    auditYear: "DAV Visa Issued",
    description:
      "Approved for nationwide distribution across Vietnamese healthcare institutions following rigorous bioequivalence evaluation.",
    modules: ["DAV Visa Registration", "ACTD Guidelines", "Bilingual Export Pack"],
  },
  {
    id: "fssai",
    code: "FSSAI",
    name: "Food Safety Authority",
    country: "India Compliance",
    category: "Quality",
    tag: "Nutra Certified",
    domain: "fssai.gov.in",
    scope: "Dietary supplements, multivitamins, nutraceutical capsules, and functional wellness formulations.",
    auditYear: "Nutra Approved",
    description:
      "Regulatory compliance for nutraceutical and food-supplement export formulations under strict safety and labeling rules.",
    modules: ["Nutra License", "Heavy Metal Testing", "Microbial Purity Assured"],
  },
  {
    id: "dpm-ivory-coast",
    code: "DPM",
    name: "Direction de la Pharmacie",
    country: "Ivory Coast",
    category: "Africa",
    tag: "MOH Approved",
    domain: "dpm.gouv.ci",
    scope: "UEMOA francophone West African regulatory approvals and commercial distribution licenses.",
    auditYear: "UEMOA Standard",
    description:
      "Product visa registrations cleared for Ivory Coast and regional French-speaking markets adhering to Zone IVb stability.",
    modules: ["Dossier en Français", "Visa d'Enregistrement", "Zone IVb Validé"],
  },
  {
    id: "moh-iraq",
    code: "MOH-IQ",
    name: "Ministry of Health (Kimadia)",
    country: "Iraq",
    category: "Middle East",
    tag: "Import Cleared",
    domain: "moh.gov.iq",
    scope: "National institutional procurement, Kimadia tender supply, and private pharmaceutical distribution.",
    auditYear: "Kimadia Registered",
    description:
      "Import authorizations approved by Iraq's Ministry of Health for bulk generic oral and sterile therapeutic categories.",
    modules: ["National MOH Registry", "Kimadia Prequalification", "Batch Assay Verified"],
  },
  {
    id: "moh-cambodia",
    code: "MOH-KH",
    name: "Department of Drugs & Medical",
    country: "Cambodia",
    category: "Asia",
    tag: "MOH Authorized",
    domain: "ddfcambodia.com",
    scope: "ASEAN Common Technical Dossier (ACTD) compliance and Southeast Asian market registration.",
    auditYear: "ACTD Format",
    description:
      "Approved by Cambodia's Ministry of Health for hospital and commercial pharmacy distribution across Southeast Asia.",
    modules: ["ACTD Dossier", "Dissolution In Vitro", "Export Artwork Cleared"],
  },
  {
    id: "moh-yemen",
    code: "MOH-YE",
    name: "Supreme Board of Drugs",
    country: "Yemen",
    category: "Middle East",
    tag: "MOH Registered",
    domain: "sbd-ye.org",
    scope: "Emergency medical supply, NGO tenders, and ongoing commercial essential medicine imports.",
    auditYear: "SBD Registered",
    description:
      "Official registration with the Supreme Board of Drugs and Medical Appliances for vital healthcare solutions.",
    modules: ["Fast-Track Tender Clearance", "High-Barrier Foil", "CoA Certified"],
  },
  {
    id: "moh-ghana",
    code: "FDA Ghana",
    name: "Food and Drugs Authority",
    country: "Ghana",
    category: "Africa",
    tag: "FDA Approved",
    domain: "fdaghana.gov.gh",
    scope: "West African market authorization, hospital procurement, and commercial distribution.",
    auditYear: "FDA Approved",
    description:
      "Accredited marketing license granted by Ghana's FDA confirming full pharmacopeial compliance and clinical stability.",
    modules: ["Marketing Authorisation", "Quality Audit Cleared", "Tamper-Evident Packaging"],
  },
];

export function Certifications() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedCert, setSelectedCert] = useState<CertItem | null>(null);
  const [savedCerts, setSavedCerts] = useState<Record<string, boolean>>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const toggleSave = (id: string, name: string) => {
    setSavedCerts((prev) => {
      const nextState = !prev[id];
      showToast(nextState ? `Saved ${name} to Dossier` : `Removed from Dossier`);
      return { ...prev, [id]: nextState };
    });
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredCerts = useMemo(() => {
    return CERTIFICATIONS.filter((cert) => {
      const matchesCategory =
        selectedCategory === "All" || cert.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        cert.code.toLowerCase().includes(q) ||
        cert.name.toLowerCase().includes(q) ||
        cert.country.toLowerCase().includes(q) ||
        cert.tag.toLowerCase().includes(q) ||
        cert.scope.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section
      id="certifications"
      className="relative w-full bg-[#E0E5EC] text-[#3D4852] py-20 sm:py-28 px-4 sm:px-6 md:px-8 select-none font-['DM_Sans',sans-serif]"
    >
      {/* Scoped Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
        rel="stylesheet"
      />

      {/* ── Toast Notification ── */}
      {toastMessage && (
        <div
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-[#E0E5EC] text-[#3D4852] text-xs font-bold transition-all"
          style={{
            boxShadow:
              "9px 9px 16px rgb(163,177,198,0.7), -9px -9px 16px rgba(255,255,255,0.7)",
          }}
        >
          <CheckCircle2 className="w-4 h-4 text-[#38B2AC]" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        {/* ── Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E0E5EC] mb-4"
            style={{
              boxShadow:
                "inset 3px 3px 6px rgb(163,177,198,0.6), inset -3px -3px 6px rgba(255,255,255,0.5)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#38B2AC] animate-pulse" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#38B2AC]">
              Regulatory Accreditations
            </p>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#3D4852] tracking-tight leading-[1.15]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Where Global Quality Meets Regulatory Compliance
          </h2>

          <p className="mt-4 text-base text-[#6B7280] max-w-2xl mx-auto leading-relaxed font-normal">
            Sourced strictly from WHO-GMP accredited facilities with full CTD/eCTD documentation support for international health authority approvals.
          </p>
        </div>

        {/* ══════════════════════════════════════════════════════════
            NEUMORPHIC TOP SEARCH & CATEGORY FILTER DECK
           ══════════════════════════════════════════════════════════ */}
        <div
          className="bg-[#E0E5EC] rounded-[32px] p-4 sm:p-6 mb-10 flex flex-col md:flex-row items-center justify-between gap-5"
          style={{
            boxShadow:
              "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)",
          }}
        >
          {/* Left Inset Deep Search Well (400-500px) */}
          <div
            className="relative w-full md:w-[460px] flex items-center rounded-2xl bg-[#E0E5EC] px-4 py-3"
            style={{
              boxShadow:
                "inset 6px 6px 12px rgb(163,177,198,0.6), inset -6px -6px 12px rgba(255,255,255,0.5)",
            }}
          >
            <Search className="w-4 h-4 text-[#6B7280] mr-3 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by MOH, country, authority, or keyword..."
              className="w-full bg-transparent text-sm font-medium text-[#3D4852] placeholder:text-[#A0AEC0] focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-[#6B7280] hover:text-[#3D4852] ml-2"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Right Category Filter Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 md:pb-0">
            {["All", "Global", "Africa", "Asia", "Middle East", "Quality"].map((cat) => {
              const isActive = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "text-[#6C63FF] translate-y-[0.5px]"
                      : "text-[#6B7280] hover:text-[#3D4852] hover:-translate-y-[1px]"
                  }`}
                  style={{
                    backgroundColor: "#E0E5EC",
                    boxShadow: isActive
                      ? "inset 4px 4px 8px rgb(163,177,198,0.7), inset -4px -4px 8px rgba(255,255,255,0.6)"
                      : "5px 5px 10px rgb(163,177,198,0.6), -5px -5px 10px rgba(255,255,255,0.5)",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            NEUMORPHIC 4-COLUMN CARDS GRID
           ══════════════════════════════════════════════════════════ */}
        <div
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch"
        >
          {filteredCerts.map((cert) => {
            const isSaved = !!savedCerts[cert.id];

            return (
              <div
                key={cert.id}
                role="listitem"
                onClick={() => setSelectedCert(cert)}
                className="group relative flex flex-col justify-between rounded-[32px] p-6 bg-[#E0E5EC] transition-all duration-300 cursor-pointer hover:-translate-y-1 select-none"
                style={{
                  boxShadow:
                    "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "12px 12px 20px rgb(163,177,198,0.7), -12px -12px 20px rgba(255,255,255,0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)";
                }}
              >
                {/* ── Top Group: Inset Deep Well + Status Pill ── */}
                <div className="flex items-center justify-between mb-5">
                  {/* Inset Deep Well for Emblem */}
                  <div
                    className="w-12 h-12 rounded-2xl bg-[#E0E5EC] flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                    style={{
                      boxShadow:
                        "inset 4px 4px 8px rgb(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5)",
                    }}
                  >
                    <ShieldCheck className="w-6 h-6 text-[#6C63FF]" />
                  </div>

                  {/* Inset Small Tag Pill */}
                  <div
                    className="px-3 py-1 rounded-full bg-[#E0E5EC] text-[11px] font-bold text-[#38B2AC]"
                    style={{
                      boxShadow:
                        "inset 2px 2px 4px rgb(163,177,198,0.6), inset -2px -2px 4px rgba(255,255,255,0.5)",
                    }}
                  >
                    {cert.tag}
                  </div>
                </div>

                {/* ── Card Content ── */}
                <div className="flex flex-col flex-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#6B7280] mb-1">
                    {cert.country}
                  </div>
                  <h3
                    className="text-xl font-extrabold text-[#3D4852] tracking-tight group-hover:text-[#6C63FF] transition-colors leading-snug"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {cert.code}
                  </h3>
                  <p className="text-xs font-medium text-[#6B7280] mt-1 line-clamp-1">
                    {cert.name}
                  </p>

                  <p className="text-xs leading-relaxed text-[#3D4852]/80 mt-3 line-clamp-2">
                    {cert.scope}
                  </p>
                </div>

                {/* ── Bottom Inset Tray / Actions ── */}
                <div
                  className="mt-5 pt-3.5 flex items-center justify-between"
                  style={{
                    borderTop: "1px solid rgba(163,177,198,0.3)",
                  }}
                >
                  <span className="text-[11px] font-bold text-[#6B7280] flex items-center gap-1">
                    <Globe2 className="w-3.5 h-3.5 text-[#6C63FF]" />
                    <span>{cert.domain}</span>
                  </span>

                  {/* Tactile Extruded Save Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSave(cert.id, cert.code);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
                      isSaved
                        ? "text-[#38B2AC]"
                        : "text-[#6B7280] hover:text-[#6C63FF]"
                    }`}
                    style={{
                      backgroundColor: "#E0E5EC",
                      boxShadow: isSaved
                        ? "inset 3px 3px 6px rgb(163,177,198,0.7), inset -3px -3px 6px rgba(255,255,255,0.6)"
                        : "3px 3px 6px rgb(163,177,198,0.6), -3px -3px 6px rgba(255,255,255,0.5)",
                    }}
                  >
                    <Bookmark
                      className={`w-3.5 h-3.5 ${isSaved ? "fill-current" : ""}`}
                    />
                    <span>{isSaved ? "Saved" : "Save"}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Empty State ── */}
        {filteredCerts.length === 0 && (
          <div
            className="text-center py-16 bg-[#E0E5EC] rounded-[32px] p-8"
            style={{
              boxShadow:
                "inset 6px 6px 12px rgb(163,177,198,0.6), inset -6px -6px 12px rgba(255,255,255,0.5)",
            }}
          >
            <Search className="w-10 h-10 text-[#6B7280] mx-auto mb-3" />
            <h4
              className="text-lg font-bold text-[#3D4852]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              No accreditations found
            </h4>
            <p className="text-xs text-[#6B7280] mt-1">
              Try searching with another keyword like &quot;WHO&quot;, &quot;Africa&quot;, &quot;MOH&quot;, or &quot;ISO&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-5 px-5 py-2.5 rounded-2xl bg-[#E0E5EC] text-xs font-bold text-[#6C63FF] hover:-translate-y-[1px] transition-all"
              style={{
                boxShadow:
                  "5px 5px 10px rgb(163,177,198,0.6), -5px -5px 10px rgba(255,255,255,0.5)",
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* ══════════════════════════════════════════════════════════
          NEUMORPHIC LIGHTBOX / DETAIL MODAL
         ══════════════════════════════════════════════════════════ */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-[#E0E5EC] rounded-[32px] p-6 sm:p-8 overflow-hidden max-h-[90vh] flex flex-col justify-between"
            style={{
              boxShadow:
                "16px 16px 32px rgb(163,177,198,0.8), -16px -16px 32px rgba(255,255,255,0.8)",
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-6 right-6 p-2.5 rounded-2xl bg-[#E0E5EC] text-[#3D4852] hover:text-[#6C63FF] transition-all cursor-pointer"
              style={{
                boxShadow:
                  "4px 4px 8px rgb(163,177,198,0.6), -4px -4px 8px rgba(255,255,255,0.5)",
              }}
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-12 h-12 rounded-2xl bg-[#E0E5EC] flex items-center justify-center"
                  style={{
                    boxShadow:
                      "inset 4px 4px 8px rgb(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5)",
                  }}
                >
                  <ShieldCheck className="w-6 h-6 text-[#6C63FF]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#38B2AC]">
                    {selectedCert.country} · {selectedCert.tag}
                  </span>
                  <h3
                    className="text-2xl font-extrabold text-[#3D4852] tracking-tight"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {selectedCert.code}
                  </h3>
                </div>
              </div>

              <p className="text-xs font-bold text-[#6B7280] mb-4">
                {selectedCert.name}
              </p>
            </div>

            {/* Modal Scroll Content */}
            <div className="overflow-y-auto space-y-4 my-2 pr-1">
              {/* Inset Deep Well for Overview */}
              <div
                className="p-4 rounded-2xl bg-[#E0E5EC]"
                style={{
                  boxShadow:
                    "inset 5px 5px 10px rgb(163,177,198,0.6), inset -5px -5px 10px rgba(255,255,255,0.5)",
                }}
              >
                <div className="text-xs font-bold text-[#3D4852] mb-1">
                  Accreditation Overview
                </div>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  {selectedCert.description}
                </p>
              </div>

              {/* Compliance Scope Well */}
              <div
                className="p-4 rounded-2xl bg-[#E0E5EC]"
                style={{
                  boxShadow:
                    "inset 5px 5px 10px rgb(163,177,198,0.6), inset -5px -5px 10px rgba(255,255,255,0.5)",
                }}
              >
                <div className="text-xs font-bold text-[#3D4852] mb-1">
                  Compliance & Scope
                </div>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  {selectedCert.scope}
                </p>
              </div>

              {/* Modules Grid */}
              <div>
                <div className="text-xs font-bold text-[#3D4852] mb-2">
                  Validated Dossier Modules & Standards
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedCert.modules.map((mod) => (
                    <div
                      key={mod}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-[#E0E5EC] text-xs font-bold text-[#3D4852]"
                      style={{
                        boxShadow:
                          "3px 3px 6px rgb(163,177,198,0.6), -3px -3px 6px rgba(255,255,255,0.5)",
                      }}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#38B2AC] shrink-0" />
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div
              className="mt-4 pt-4 flex items-center justify-between"
              style={{
                borderTop: "1px solid rgba(163,177,198,0.3)",
              }}
            >
              <a
                href={`https://${selectedCert.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6C63FF] hover:underline"
              >
                <span>Agency Portal: {selectedCert.domain}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => {
                  toggleSave(selectedCert.id, selectedCert.code);
                }}
                className={`px-5 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  savedCerts[selectedCert.id]
                    ? "text-[#38B2AC]"
                    : "text-[#3D4852] hover:text-[#6C63FF]"
                }`}
                style={{
                  backgroundColor: "#E0E5EC",
                  boxShadow: savedCerts[selectedCert.id]
                    ? "inset 4px 4px 8px rgb(163,177,198,0.7), inset -4px -4px 8px rgba(255,255,255,0.6)"
                    : "5px 5px 10px rgb(163,177,198,0.6), -5px -5px 10px rgba(255,255,255,0.5)",
                }}
              >
                <Bookmark
                  className={`w-3.5 h-3.5 ${
                    savedCerts[selectedCert.id] ? "fill-current" : ""
                  }`}
                />
                <span>
                  {savedCerts[selectedCert.id] ? "Saved to Dossier" : "Save Dossier"}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certifications;
