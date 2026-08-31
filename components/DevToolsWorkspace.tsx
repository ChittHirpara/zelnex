"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FolderTree,
  FileCode,
  Sliders,
  Sparkles,
  ShieldCheck,
  Activity,
  Layers,
  ChevronDown,
  ChevronRight,
  Settings,
  Code2,
  Maximize2,
  Minimize2,
  Search,
} from "lucide-react";

export function DevToolsWorkspace() {
  const [selectedFile, setSelectedFile] = useState<string>("tablets-formulation.ts");
  const [activeTab, setActiveTab] = useState<"spec" | "stability" | "qc">("spec");
  const [cleanroomFilter, setCleanroomFilter] = useState<string>("ISO-7");

  const files = [
    { name: "tablets-formulation.ts", category: "Oral Solids", size: "400M Units" },
    { name: "lyophilized-vials.ts", category: "Sterile Parenterals", size: "Grade A Clean" },
    { name: "pediatric-suspension.ts", category: "Oral Liquids", size: "150ml Dosing" },
    { name: "ectd-module-5-be.dossier", category: "Regulatory", size: "ICH Compliant" },
  ];

  return (
    <section id="workspace" className="py-16 sm:py-20 border-b border-[#E5E7EB] bg-white">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#E5E7EB] gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#06B6D4]/10 border border-[#06B6D4]/30 text-xs font-['JetBrains_Mono',monospace] font-bold text-[#0891B2] uppercase mb-2">
              <span>03.00 // INTERACTIVE IDE WORKSPACE</span>
            </div>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Enterprise Technical Formulation Studio
            </h2>
          </div>
          <span className="text-xs font-['JetBrains_Mono',monospace] text-slate-500">
            LAYOUT: 3-PANEL IDE // DUAL SIDEBARS
          </span>
        </div>

        {/* ── 3-Panel IDE Container ── */}
        <div className="border border-[#D1D5DB] rounded-xl overflow-hidden shadow-sm bg-[#F9FAFB] flex flex-col lg:flex-row">
          
          {/* ════════════════════════════════════════════════════════════════
              1. LEFT SIDEBAR (256px) - EXPLORER & SHORTCUTS
             ════════════════════════════════════════════════════════════════ */}
          <div className="w-full lg:w-[256px] border-b lg:border-b-0 lg:border-r border-[#E5E7EB] bg-[#F9FAFB] flex flex-col justify-between shrink-0">
            <div>
              {/* Explorer Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#E5E7EB] text-xs font-['JetBrains_Mono',monospace] font-bold text-slate-700 uppercase">
                <span className="flex items-center gap-2">
                  <FolderTree className="w-4 h-4 text-[#06B6D4]" />
                  <span>EXPLORER</span>
                </span>
                <span className="text-[10px] text-slate-400">4 FILES</span>
              </div>

              {/* File Tree List */}
              <div className="p-2 space-y-1 font-['JetBrains_Mono',monospace] text-xs">
                <div className="px-2 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  ▾ src / formulations
                </div>
                {files.map((f) => {
                  const isSelected = selectedFile === f.name;
                  return (
                    <button
                      key={f.name}
                      type="button"
                      onClick={() => setSelectedFile(f.name)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-md transition-colors text-left cursor-pointer ${
                        isSelected
                          ? "bg-white text-[#0891B2] font-bold shadow-2xs border border-[#E5E7EB]"
                          : "text-slate-600 hover:bg-slate-200/60 hover:text-slate-900"
                      }`}
                    >
                      <span className="flex items-center gap-2 truncate">
                        <FileCode className="w-3.5 h-3.5 shrink-0 text-[#06B6D4]" />
                        <span className="truncate">{f.name}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Shortcuts Panel */}
            <div className="p-3 border-t border-[#E5E7EB] bg-white font-['JetBrains_Mono',monospace] text-[10px] space-y-1.5">
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                SYSTEM SHORTCUTS
              </span>
              <div className="flex items-center justify-between text-slate-600">
                <span>Search Formulation</span>
                <kbd className="px-1.5 py-0.5 rounded border border-slate-300 bg-slate-100 font-bold">Ctrl+K</kbd>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>Request CTD File</span>
                <kbd className="px-1.5 py-0.5 rounded border border-slate-300 bg-slate-100 font-bold">Alt+D</kbd>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>WHO-GMP Audit Spec</span>
                <kbd className="px-1.5 py-0.5 rounded border border-slate-300 bg-slate-100 font-bold">G+M</kbd>
              </div>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════════════
              2. CENTER STAGE - 20px PATTERN GRID & SIMULATED SELECTION BOX
             ════════════════════════════════════════════════════════════════ */}
          <div className="flex-1 devtools-grid-20 p-6 sm:p-8 flex flex-col justify-between relative min-h-[420px]">
            
            {/* Center Stage Top Breadcrumb */}
            <div className="flex items-center justify-between mb-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg border border-[#E5E7EB] text-xs font-['JetBrains_Mono',monospace]">
              <div className="flex items-center gap-2">
                <span className="text-slate-400">workspace /</span>
                <span className="font-bold text-[#111827]">{selectedFile}</span>
              </div>
              <span className="text-[10px] font-bold text-[#0891B2] bg-[#06B6D4]/10 px-2 py-0.5 rounded">
                ACTIVE CANVAS
              </span>
            </div>

            {/* ── Focused UI Element with 2px Cyan Selection Ring & Pixel Tags ── */}
            <div className="relative my-auto mx-auto w-full max-w-2xl bg-white border-2 border-[#06B6D4] rounded-lg p-6 sm:p-8 shadow-lg">
              
              {/* Top-Left Element Name & Dimension Tag */}
              <div className="absolute -top-3.5 left-4 bg-[#06B6D4] text-white text-[10px] font-['JetBrains_Mono',monospace] font-bold px-2 py-0.5 rounded shadow-xs flex items-center gap-1.5">
                <span>div.formulation-blueprint</span>
                <span className="opacity-75">[1200x480]</span>
              </div>

              {/* Top-Right Dimension Pill */}
              <div className="absolute -top-3 right-4 bg-[#111827] text-white text-[9px] font-['JetBrains_Mono',monospace] font-bold px-2 py-0.5 rounded">
                SCALE: 100%
              </div>

              {/* Internal Content of Inspected Element */}
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#111827] font-['Inter',sans-serif]">
                      {selectedFile.replace(".ts", "").replace("-", " ").toUpperCase()}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Batch formulation specification validated under WHO-GMP cleanroom standards.
                    </p>
                  </div>
                  <span className="w-3 h-3 rounded-full bg-[#06B6D4] animate-pulse" />
                </div>

                {/* Technical Metric Chips */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-['JetBrains_Mono',monospace] text-xs">
                  <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                    <span className="text-[9px] text-slate-400 block">DOSAGE FORM</span>
                    <span className="font-bold text-slate-900">FILM-COATED</span>
                  </div>
                  <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                    <span className="text-[9px] text-slate-400 block">STABILITY</span>
                    <span className="font-bold text-[#0891B2]">ZONE IVb 36M</span>
                  </div>
                  <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                    <span className="text-[9px] text-slate-400 block">PACKAGING</span>
                    <span className="font-bold text-slate-900">ALU-ALU</span>
                  </div>
                  <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                    <span className="text-[9px] text-slate-400 block">ASSAY PURITY</span>
                    <span className="font-bold text-emerald-600">99.8% HPLC</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Canvas Status Footer */}
            <div className="flex items-center justify-between text-[11px] font-['JetBrains_Mono',monospace] text-slate-500 mt-4">
              <span>CANVAS_ID: GRID_20PX</span>
              <span>INSPECTION RING: 2PX #06B6D4</span>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════════════
              3. RIGHT SIDEBAR (320px) - PROPERTY INSPECTOR
             ════════════════════════════════════════════════════════════════ */}
          <div className="w-full lg:w-[320px] border-t lg:border-t-0 lg:border-l border-[#E5E7EB] bg-white p-4 sm:p-5 flex flex-col justify-between shrink-0">
            <div>
              {/* Property Inspector Header */}
              <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-3 mb-4 text-xs font-['JetBrains_Mono',monospace] font-bold text-slate-800 uppercase">
                <span className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-[#06B6D4]" />
                  <span>PROPERTY INSPECTOR</span>
                </span>
                <span className="text-[10px] text-[#0891B2]">LIVE</span>
              </div>

              {/* Property Grid: 80px / 1fr Layout */}
              <div className="space-y-4 font-['JetBrains_Mono',monospace] text-xs">
                
                {/* Property 1: Cleanroom Standard */}
                <div className="grid grid-cols-[80px_1fr] items-center gap-2">
                  <span className="text-[10px] text-slate-400 uppercase">CLEANROOM</span>
                  <select
                    value={cleanroomFilter}
                    onChange={(e) => setCleanroomFilter(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded border border-[#D1D5DB] text-xs font-medium text-slate-800 bg-[#F9FAFB] focus:outline-none focus:border-[#06B6D4]"
                  >
                    <option value="ISO-7">ISO-7 (Grade C)</option>
                    <option value="ISO-5">ISO-5 (Grade A Sterile)</option>
                    <option value="ISO-8">ISO-8 (Grade D Solid)</option>
                  </select>
                </div>

                {/* Property 2: Stability Chamber */}
                <div className="grid grid-cols-[80px_1fr] items-center gap-2">
                  <span className="text-[10px] text-slate-400 uppercase">STABILITY</span>
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-[#D1D5DB] bg-[#F9FAFB] text-xs text-slate-800">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>30°C / 75% RH</span>
                  </div>
                </div>

                {/* Property 3: Packaging Barrier */}
                <div className="grid grid-cols-[80px_1fr] items-center gap-2">
                  <span className="text-[10px] text-slate-400 uppercase">BARRIER</span>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-[#06B6D4] border border-[#0891B2]" />
                    <span className="text-xs text-slate-700 font-bold">#06B6D4 (Alu-Alu)</span>
                  </div>
                </div>

                {/* Property 4: Regulatory Module */}
                <div className="grid grid-cols-[80px_1fr] items-center gap-2">
                  <span className="text-[10px] text-slate-400 uppercase">DOSSIER</span>
                  <span className="text-xs text-[#0891B2] font-bold">eCTD_v4.0_READY</span>
                </div>

                {/* Property 5: Serialization */}
                <div className="grid grid-cols-[80px_1fr] items-center gap-2">
                  <span className="text-[10px] text-slate-400 uppercase">TRACKING</span>
                  <span className="text-xs text-slate-800">GS1 2D DataMatrix</span>
                </div>
              </div>
            </div>

            {/* Right Sidebar Action */}
            <div className="mt-6 pt-4 border-t border-[#E5E7EB]">
              <Link
                href="/services"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-md bg-[#111827] hover:bg-[#06B6D4] text-white text-xs font-['JetBrains_Mono',monospace] font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>OPEN FULL SERVICES</span>
                <Code2 className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default DevToolsWorkspace;
