"use client";

import React from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

export function TechnicalFaq() {
  const faqs = [
    {
      q: "What regulatory dossier formats are available for immediate MOH filing?",
      a: "Zelnex provides ready Common Technical Document (CTD) and electronic CTD (eCTD v4.0) files covering Modules 1 through 5. Files are structured in compliance with ICH, ASEAN, LATAM, GCC, and WHO guidelines with verified Quality Overall Summaries (QOS).",
    },
    {
      q: "Are finished formulations tested for Zone IVb climatic conditions?",
      a: "Yes. All formulations undergo 24 to 36-month real-time stability testing at 30°C / 75% RH (Zone IVb) and accelerated testing at 40°C / 75% RH in calibrated environmental chambers to ensure maximum potency in extreme tropical zones.",
    },
    {
      q: "Can Zelnex accommodate custom batch sizing and private label packaging?",
      a: "Yes. We support scalable contract manufacturing and 3rd party formulation runs from pilot bioequivalence (BE) quantities to commercial high-volume outputs with custom Alu-Alu blistering, induction sealing, and multilingual packaging.",
    },
    {
      q: "What certifications and regulatory documents accompany each commercial export?",
      a: "Every export container is released with a Certificate of Pharmaceutical Product (COPP), WHO-GMP Certificate, Free Sale Certificate (FSC), and complete batch-specific Certificate of Analysis (CoA) with 100% HPLC assay purity documentation.",
    },
    {
      q: "What are the standard production lead times and shipping terms?",
      a: "Standard contract manufacturing and export dispatch lead times range between 35 to 45 days. We support FOB JNPT Mumbai, CIF, and DDP air/sea freight with temperature-monitored dataloggers.",
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white border-b border-[#E5E7EB]">
      <div className="mx-auto max-w-[800px] px-4 sm:px-6 font-['Inter',sans-serif]">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#06B6D4]/10 border border-[#06B6D4]/30 text-xs font-['JetBrains_Mono',monospace] font-bold text-[#0891B2] uppercase mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-[#06B6D4]" />
            <span>06.00 // TECHNICAL FAQ & DOCUMENTATION</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Frequently Asked Technical Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Functional documentation on dossiers, stability protocols, and export governance.
          </p>
        </div>

        {/* ── Native HTML <details> Accordion Container ── */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group border border-[#E5E7EB] rounded-xl bg-[#F9FAFB] p-4 transition-colors hover:border-[#06B6D4] [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between font-medium text-slate-900 cursor-pointer text-sm sm:text-[14.5px] select-none">
                <span className="flex items-center gap-3 font-semibold pr-2">
                  <span className="text-xs font-['JetBrains_Mono',monospace] text-[#0891B2] font-bold">
                    0{idx + 1}.
                  </span>
                  <span>{faq.q}</span>
                </span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform shrink-0" />
              </summary>

              <div className="mt-3 pt-3 border-t border-slate-200/70 text-xs sm:text-[13px] leading-relaxed text-slate-600 font-normal">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TechnicalFaq;
