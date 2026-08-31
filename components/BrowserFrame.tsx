"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Lock,
  RotateCw,
  ArrowLeft,
  ArrowRight,
  Plus,
  X,
  Puzzle,
  ExternalLink,
  ShieldCheck,
  Globe2,
  Terminal,
} from "lucide-react";

interface BrowserFrameProps {
  children: React.ReactNode;
  activeUrl?: string;
}

export function BrowserFrame({
  children,
  activeUrl = "https://zelnex.pharma/workspace/v2.0",
}: BrowserFrameProps) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isCopied, setIsCopied] = useState(false);

  const tabs = [
    { title: "zelnex.portal [HQ]", path: "/#home" },
    { title: "services.ectd [MOH]", path: "/services" },
    { title: "formulary.catalog [800+]", path: "/#products" },
    { title: "network.telemetry [50+]", path: "/#network" },
  ];

  const handleCopy = () => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(activeUrl);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1500);
    }
  };

  return (
    <div className="w-full bg-[#f3f4f6] text-[#111827] font-['Inter',sans-serif] selection:bg-[#06B6D4] selection:text-white">
      {/* ════════════════════════════════════════════════════════════════
          BROWSER CHROME TOP CONTAINER
         ════════════════════════════════════════════════════════════════ */}
      <div className="sticky top-0 z-50 w-full bg-[#E5E7EB] border-b border-[#D1D5DB] shadow-xs select-none">
        
        {/* Row 1: macOS Traffic Lights + Tab Bar */}
        <div className="flex items-center px-3 pt-2 pb-0 gap-3 overflow-x-auto devtools-scrollbar">
          {/* macOS Traffic Lights */}
          <div className="flex items-center gap-2 pl-1 pr-3 shrink-0">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e] cursor-pointer hover:opacity-80 transition-opacity" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#d8a123] cursor-pointer hover:opacity-80 transition-opacity" />
            <span className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1fa733] cursor-pointer hover:opacity-80 transition-opacity" />
          </div>

          {/* Browser Tabs */}
          <div className="flex items-center gap-1 flex-1 min-w-0">
            {tabs.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab.title}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`group relative flex items-center gap-2 px-3.5 py-1.5 rounded-t-lg text-xs font-['JetBrains_Mono',monospace] transition-all cursor-pointer truncate max-w-[200px] border-t border-x ${
                    isActive
                      ? "bg-white text-[#111827] font-bold border-[#D1D5DB] shadow-2xs"
                      : "bg-[#D9DCE1] text-[#4B5563] border-transparent hover:bg-[#E0E3E8] hover:text-[#111827]"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                      isActive ? "bg-[#06B6D4]" : "bg-slate-400"
                    }`}
                  />
                  <span className="truncate">{tab.title}</span>
                  {isActive && (
                    <span className="ml-auto text-slate-400 hover:text-slate-700">
                      <X className="w-3 h-3" />
                    </span>
                  )}
                </button>
              );
            })}

            {/* New Tab Button */}
            <button
              type="button"
              className="p-1 rounded-md text-slate-500 hover:bg-slate-300 hover:text-slate-800 transition-colors"
              title="Open New Workspace Tab"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Row 2: Omnibox Address Bar & Extensions Row */}
        <div className="flex items-center justify-between px-3 py-1.5 bg-white border-t border-[#E5E7EB] gap-3">
          {/* Navigation Arrows & Reload */}
          <div className="flex items-center gap-1 text-slate-500 shrink-0">
            <button
              type="button"
              className="p-1.5 rounded hover:bg-slate-100 hover:text-slate-800 transition-colors cursor-pointer"
              title="Back"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              className="p-1.5 rounded hover:bg-slate-100 hover:text-slate-800 transition-colors cursor-pointer"
              title="Forward"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              className="p-1.5 rounded hover:bg-slate-100 hover:text-slate-800 transition-colors cursor-pointer"
              title="Reload Workspace"
            >
              <RotateCw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* URL Input Bar */}
          <div className="flex-1 max-w-2xl mx-auto flex items-center gap-2 px-3 py-1 rounded-md bg-[#F3F4F6] border border-[#E5E7EB] text-xs font-['JetBrains_Mono',monospace] text-slate-700 hover:border-[#06B6D4] transition-colors group">
            <Lock className="w-3 h-3 text-[#06B6D4] shrink-0" />
            <span className="truncate flex-1 font-medium select-all">
              {activeUrl}
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className="text-[10px] font-bold uppercase tracking-wider text-[#06B6D4] opacity-0 group-hover:opacity-100 transition-opacity"
            >
              {isCopied ? "COPIED" : "COPY"}
            </button>
          </div>

          {/* Extension Area & System Indicators */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#06B6D4]/10 border border-[#06B6D4]/30 text-[11px] font-['JetBrains_Mono',monospace] text-[#0891B2] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" />
              <span>DEVTOOLS ACTIVE</span>
            </div>

            <button
              type="button"
              className="w-7 h-7 rounded flex items-center justify-center bg-[#06B6D4]/10 text-[#0891B2] border border-[#06B6D4]/25 hover:bg-[#06B6D4]/20 transition-colors"
              title="Zelnex Pharma Extension"
            >
              <Puzzle className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Main Browser Viewport Body with 20px pattern grid */}
      <div className="w-full devtools-grid-20 min-h-screen">
        {children}
      </div>
    </div>
  );
}

export default BrowserFrame;
