"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageCode } from "@/lib/translations";
import { Globe, ChevronDown, Check } from "lucide-react";

export function LanguageSwitcher({
  variant = "navbar",
  className = "",
}: {
  variant?: "navbar" | "footer" | "mobile";
  className?: string;
}) {
  const { language, setLanguage, supportedLanguages, currentLanguageInfo } =
    useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code: LanguageCode) => {
    setLanguage(code);
    setIsOpen(false);
  };

  if (variant === "mobile") {
    return (
      <div className={`w-full py-2 ${className}`}>
        <div className="text-xs font-jetbrains font-bold text-slate-400 uppercase mb-2 flex items-center gap-2">
          <Globe className="w-3.5 h-3.5 text-[#006EDC]" />
          <span>Language / Idioma / Langue</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {supportedLanguages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => handleSelect(lang.code)}
              className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-inter transition-all cursor-pointer ${
                language === lang.code
                  ? "bg-[#006EDC] text-white font-bold shadow-sm"
                  : "bg-white/10 text-slate-200 hover:bg-white/20"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-base">{lang.flag}</span>
                <span>{lang.nativeName}</span>
              </div>
              {language === lang.code && <Check className="w-3.5 h-3.5" />}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <div className={`relative inline-block ${className}`} ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs font-inter font-medium backdrop-blur-md transition-all cursor-pointer shadow-sm group"
        >
          <Globe className="w-3.5 h-3.5 text-cyan-300 transition-transform duration-300 group-hover:rotate-45" />
          <span className="text-sm">{currentLanguageInfo.flag}</span>
          <span className="font-semibold">{currentLanguageInfo.name}</span>
          <ChevronDown
            className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-300 ${
              isOpen ? "rotate-180 text-white" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="absolute bottom-full left-0 mb-2 w-52 rounded-2xl bg-[#0B1E48]/95 backdrop-blur-2xl border border-white/20 p-1.5 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-200">
            <div className="py-1 px-2 text-[10px] font-jetbrains text-slate-400 uppercase tracking-wider font-bold">
              Select Region & Language
            </div>
            <div className="space-y-1">
              {supportedLanguages.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => handleSelect(lang.code)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-inter transition-all cursor-pointer ${
                    language === lang.code
                      ? "bg-[#006EDC] text-white font-bold"
                      : "text-slate-200 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">{lang.flag}</span>
                    <span className="font-medium">{lang.nativeName}</span>
                    <span className="text-[10px] text-slate-400 uppercase font-jetbrains">
                      ({lang.code})
                    </span>
                  </div>
                  {language === lang.code && <Check className="w-3.5 h-3.5" />}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Default: Navbar variant
  return (
    <div className={`relative inline-block ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className="group relative inline-flex items-center gap-2.5 h-[50px] px-4 rounded-full text-[13px] font-semibold text-[#0B1E48] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer select-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0.58) 100%)",
          backdropFilter: "blur(24px) saturate(1.8)",
          WebkitBackdropFilter: "blur(24px) saturate(1.8)",
          border: "1.5px solid rgba(255, 255, 255, 0.95)",
          boxShadow:
            "0 6px 20px rgba(11, 30, 72, 0.07), inset 0 1.5px 0 rgba(255, 255, 255, 1)",
        }}
      >
        {/* Subtle Ambient Hover Glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
          style={{
            background: "linear-gradient(135deg, rgba(0, 110, 220, 0.08) 0%, rgba(8, 43, 97, 0.04) 100%)",
          }}
        />

        <Globe className="relative z-10 w-4 h-4 text-[#006EDC] transition-transform duration-300 group-hover:rotate-45" />
        <span className="relative z-10 text-base">{currentLanguageInfo.flag}</span>
        <span className="relative z-10 font-jetbrains text-[11.5px] font-bold uppercase text-slate-800 tracking-wider">
          {currentLanguageInfo.code}
        </span>
        <ChevronDown
          className={`relative z-10 w-3.5 h-3.5 text-slate-400 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-[#006EDC]" : "group-hover:text-slate-700"
          }`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute top-full right-0 mt-2 w-56 rounded-2xl p-1.5 shadow-2xl z-[100] animate-in fade-in zoom-in-95 duration-200"
          style={{
            background: "rgba(255, 255, 255, 0.96)",
            backdropFilter: "blur(32px) saturate(2)",
            WebkitBackdropFilter: "blur(32px) saturate(2)",
            border: "1.5px solid rgba(255, 255, 255, 0.95)",
            boxShadow:
              "0 20px 50px rgba(11, 30, 72, 0.18), 0 4px 12px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255,255,255,0.9)",
          }}
        >
          <div className="py-1 px-3 text-[10px] font-jetbrains text-slate-400 uppercase tracking-wider font-bold">
            Select Language
          </div>
          <div className="space-y-1">
            {supportedLanguages.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => handleSelect(lang.code)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-inter transition-all cursor-pointer ${
                  language === lang.code
                    ? "bg-[#006EDC] text-white font-bold shadow-xs"
                    : "text-slate-700 hover:bg-slate-100 hover:text-black"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-base">{lang.flag}</span>
                  <span className="font-medium">{lang.nativeName}</span>
                  <span
                    className={`text-[10px] uppercase font-jetbrains ${
                      language === lang.code ? "text-cyan-200" : "text-slate-400"
                    }`}
                  >
                    ({lang.code})
                  </span>
                </div>
                {language === lang.code && <Check className="w-3.5 h-3.5" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
