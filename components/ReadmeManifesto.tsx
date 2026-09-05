"use client";

import React, { useState } from "react";
import { FileText, Copy, Check, Terminal, GitBranch } from "lucide-react";

export function ReadmeManifesto() {
  const [copied, setCopied] = useState(false);

  const command = `curl -X GET https://api.zelnex.pharma/v2/dossiers \\
  -H "Authorization: Bearer ZELNEX_AUTH_TOKEN" \\
  -H "Accept: application/json+ectd"`;

  const handleCopy = () => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="readme" className="py-16 sm:py-20 border-b border-[#E5E7EB] bg-[#f3f4f6]">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#06B6D4]/10 border border-[#06B6D4]/30 text-xs font-['JetBrains_Mono',monospace] font-bold text-[#0891B2] uppercase w-fit mb-6">
          <FileText className="w-3.5 h-3.5 text-[#06B6D4]" />
          <span>05.00 // SYSTEM MANIFESTO & REPO</span>
        </div>

        {/* ── Dark-Themed Container (#0d1117) Styled as GitHub README ── */}
        <div className="bg-[#0d1117] border border-slate-700 rounded-xl overflow-hidden shadow-2xl text-slate-300 font-['JetBrains_Mono',monospace]">
          
          {/* README Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-slate-700/80 text-xs">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#06B6D4]" />
              <span className="font-bold text-white">README.md</span>
              <span className="text-slate-500 text-[11px] hidden sm:inline">|</span>
              <span className="flex items-center gap-1 text-slate-400 text-[11px] hidden sm:inline-flex">
                <GitBranch className="w-3 h-3 text-slate-500" />
                <span>main (origin/release-v2.0)</span>
              </span>
            </div>
            <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
              MARKDOWN_PREVIEW
            </span>
          </div>

          {/* README Content Body */}
          <div className="p-6 sm:p-10 space-y-6 text-xs sm:text-[13px] leading-relaxed">
            
            {/* H1 Heading */}
            <div className="border-b border-slate-800 pb-3">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                # Zelnex Pharmaceuticals Architecture Manifesto
              </h3>
              <p className="text-slate-400 text-xs mt-1">
                Integrated WHO-GMP Export Framework, CTD Dossier Library & Global Supply Protocol.
              </p>
            </div>

            {/* Markdown Paragraph */}
            <p className="text-slate-300">
              Zelnex operates as an export-oriented pharmaceutical powerhouse based in Surat, Gujarat, India. We architect high-potency finished generic formulations and maintain comprehensive Common Technical Document (CTD) and eCTD files for Ministry of Health registration across 50+ global nations.
            </p>

            {/* H2 Heading */}
            <div className="pt-2">
              <h4 className="text-base sm:text-lg font-bold text-[#06B6D4]">
                ## 01. Quality Governance & Cleanroom Verification
              </h4>
              <p className="text-slate-300 mt-2">
                All production batches adhere to World Health Organization (WHO) Good Manufacturing Practice (GMP) benchmarks. Quality operations feature multi-stage HPLC analytical purity screening, bioequivalence (BE) documentation, and real-time environmental logging for tropical Zone IVb climates.
              </p>
            </div>

            {/* Markdown List */}
            <div className="space-y-1.5 pl-2 text-slate-300">
              <p className="text-slate-400 font-bold">### System Parameters:</p>
              <div>- **Module 1–5 eCTD**: 100% ICH compliant documentation package</div>
              <div>- **Stability**: Zone IVb real-time tested at 30°C / 75% RH & accelerated 40°C / 75% RH</div>
              <div>- **Packaging Barrier**: Alu-Alu cold-form tropical blister + induction seals</div>
              <div>- **Traceability**: GS1 2D DataMatrix serialization with aggregation</div>
            </div>

            {/* H2 Heading */}
            <div className="pt-2">
              <h4 className="text-base sm:text-lg font-bold text-[#06B6D4]">
                ## 02. Institutional API & Dossier Query Desk
              </h4>
              <p className="text-slate-300 mt-1">
                Execute automated query requests for product monographs, Certificates of Analysis (CoA), and dossier availability via our secure institutional gateway:
              </p>
            </div>

            {/* Code Block at Bottom Representing Install / API Command */}
            <div className="relative rounded-lg bg-[#010409] border border-slate-800 p-4 font-['JetBrains_Mono',monospace] text-xs">
              <div className="flex items-center justify-between text-slate-500 pb-2 mb-2 border-b border-slate-800/80 text-[10px]">
                <span>BASH // INSTITUTIONAL API</span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-[#06B6D4] hover:text-white transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="text-emerald-400 overflow-x-auto selection:bg-slate-700">
                <code>{command}</code>
              </pre>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ReadmeManifesto;
