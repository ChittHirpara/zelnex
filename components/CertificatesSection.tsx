"use client";

import React from "react";
import Image from "next/image";

interface CertificateTile {
  id: string;
  name: string;
  subLabel: string;
  image: string;
}

const CERTIFICATE_TILES: CertificateTile[] = [
  {
    id: "who-gmp",
    name: "WHO-GMP",
    subLabel: "Good Manufacturing Practice",
    image: "/certificates/who-gmp.png",
  },
  {
    id: "iso-9001",
    name: "ISO 9001:2015",
    subLabel: "Certified Quality Company",
    image: "/certificates/iso-9001.png",
  },
  {
    id: "star-export",
    name: "Star Export House",
    subLabel: "Govt. Recognised Exporter",
    image: "/certificates/star-export.png",
  },
  {
    id: "pharmexcil",
    name: "PHARMEXCIL",
    subLabel: "Export Promotion Council",
    image: "/certificates/pharmexcil.png",
  },
  {
    id: "fdca",
    name: "FDCA Gujarat State",
    subLabel: "Food & Drugs Control Admn.",
    image: "/certificates/fdca.png",
  },
  {
    id: "msme",
    name: "MSME Registered",
    subLabel: "Govt. of India Enterprise",
    image: "/certificates/msme.png",
  },
];

export function CertificatesSection() {
  return (
    <section
      id="certifications"
      className="relative scroll-mt-24 py-16 sm:py-24 select-none font-['Inter',sans-serif] border-b border-blue-100"
      style={{
        background: "linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 50%, #F8FAFC 100%)",
      }}
    >
      <div className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#006EDC]/10 border border-[#006EDC]/25 mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#006EDC] animate-pulse" />
            <span className="text-[11px] font-['JetBrains_Mono',monospace] font-bold uppercase tracking-[0.15em] text-[#006EDC]">
              07.00 // ACCREDITATIONS &amp; REGULATORY LICENSURE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B1E48] tracking-tight leading-[1.15]">
            Recognised Accreditations &amp; Certifications
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto mt-2.5 font-normal leading-relaxed">
            Audited, certified, and licensed by statutory health authorities, sovereign export councils, and global quality management boards.
          </p>
        </div>

        {/* ── 6 Official Regulatory Certificate Cards (100% High Visibility) ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5.5 items-stretch">
          {CERTIFICATE_TILES.map((tile) => (
            <div
              key={tile.id}
              className="group relative rounded-[22px] sm:rounded-[26px] bg-white border border-slate-200/90 aspect-square flex flex-col items-center justify-between p-4 sm:p-5 text-center shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_18px_40px_rgba(0,110,220,0.14)] hover:border-[#006EDC] transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:scale-[1.04]"
            >
              {/* Top Specular Rim */}
              <div
                className="pointer-events-none absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent"
                aria-hidden
              />

              {/* Official Certificate Image Container */}
              <div className="flex-1 w-full relative flex items-center justify-center p-2 min-h-[90px] sm:min-h-[110px]">
                <div className="relative w-full h-full max-h-[100px] transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={tile.image}
                    alt={tile.name}
                    fill
                    unoptimized={true}
                    sizes="(max-width: 768px) 150px, 200px"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* High-Contrast Technical Label */}
              <div className="w-full pt-2 border-t border-slate-100/90">
                <span className="block text-xs sm:text-[13px] font-extrabold text-[#0B1E48] tracking-tight leading-tight group-hover:text-[#006EDC] transition-colors truncate">
                  {tile.name}
                </span>
                <span className="block text-[10px] text-slate-500 font-medium tracking-tight truncate mt-0.5">
                  {tile.subLabel}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CertificatesSection;
