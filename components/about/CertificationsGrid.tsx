"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Award, FileCheck2, CheckCircle2, Building2 } from "lucide-react";
import Link from "next/link";

export function CertificationsGrid() {
  const certifications = [
    {
      title: "WHO-GMP Certification",
      authority: "World Health Organization Guidelines",
      badge: "INTERNATIONAL STANDARD",
      desc: "Strict adherence to World Health Organization Good Manufacturing Practices ensuring sterile cleanrooms, validated HVAC systems, and zero-defect quality control.",
      image: "/certificates/who-gmp.png",
      accent: "#006EDC",
    },
    {
      title: "ISO 9001:2015 Quality Systems",
      authority: "International Organization for Standardization",
      badge: "QUALITY MANAGEMENT",
      desc: "Comprehensive quality management system covering active ingredient sourcing, batch documentation, analytical testing, and global client dispatch.",
      image: "/certificates/iso-9001.png",
      accent: "#0284C7",
    },
    {
      title: "FDCA Gujarat & CDSCO India",
      authority: "Food & Drugs Control Administration",
      badge: "STATUTORY ACCREDITATION",
      desc: "Fully licensed by the state and central statutory drug regulatory authorities of India for commercial pharmaceutical formulation and export operations.",
      image: "/certificates/fdca.png",
      accent: "#0D9488",
    },
    {
      title: "Pharmexcil Membership",
      authority: "Ministry of Commerce & Industry, India",
      badge: "EXPORT RECOGNITION",
      desc: "Active registered export member of the Pharmaceuticals Export Promotion Council of India, facilitating trade corridors across Asia, Africa & LATAM.",
      image: "/certificates/pharmexcil.png",
      accent: "#6366F1",
    },
    {
      title: "MSME Certified Enterprise",
      authority: "Government of India",
      badge: "ENTERPRISE ACCREDITATION",
      desc: "Recognized micro, small & medium enterprise fostering technological agility, scalable batch flexibility, and cost-effective medicine delivery.",
      image: "/certificates/msme.png",
      accent: "#F59E0B",
    },
    {
      title: "Star Export House Protocol",
      authority: "Directorate General of Foreign Trade (DGFT)",
      badge: "GLOBAL TRADE CORRIDORS",
      desc: "Export-oriented institutional framework certified for high-frequency ocean and air freight shipments to 65+ sovereign health ministries.",
      image: "/certificates/star-export.png",
      accent: "#10B981",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFD] border-b border-slate-200/80 relative overflow-hidden">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-slate-200 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-[#006EDC] font-['JetBrains_Mono',monospace] text-xs font-bold uppercase tracking-wider mb-3">
              07.00 // ACCREDITED QUALITY GOVERNANCE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1E48] tracking-tight font-['Inter',sans-serif]">
              Certified for Global Regulatory Trust
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-md">
            Audited, accredited, and continuously monitored by leading national and international drug regulatory councils.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-[0_10px_30px_rgba(11,30,72,0.03)] hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 relative bg-slate-50 border border-slate-100 rounded-2xl p-2 flex items-center justify-center">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <span
                    className="text-[10px] font-['JetBrains_Mono',monospace] font-bold px-2.5 py-1 rounded-md border"
                    style={{
                      color: cert.accent,
                      backgroundColor: `${cert.accent}08`,
                      borderColor: `${cert.accent}30`,
                    }}
                  >
                    {cert.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0B1E48] mb-1">
                  {cert.title}
                </h3>
                <span className="text-xs font-['JetBrains_Mono',monospace] text-[#006EDC] block mb-3 font-semibold">
                  {cert.authority}
                </span>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {cert.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-emerald-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Audited &amp; Actively Compliant</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
