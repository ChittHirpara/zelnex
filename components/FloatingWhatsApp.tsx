"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [bubbleVisible, setBubbleVisible] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);

  useEffect(() => {
    // Show only after user scrolls past the top Hero section
    const handleScroll = () => {
      const scrollThreshold = Math.min(window.innerHeight * 0.45, 360);
      if (window.scrollY > scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // If scrolled past hero and hasn't dismissed, show greeting tooltip after 1.5s
    if (isVisible && !hasDismissed && !bubbleVisible) {
      const timer = setTimeout(() => {
        setBubbleVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, hasDismissed, bubbleVisible]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setBubbleVisible(false);
    setHasDismissed(true);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="WhatsApp Quick Contact"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2.5 select-none pointer-events-auto transition-all duration-300 animate-in fade-in slide-in-from-bottom-3"
    >
      {/* ── Compact Floating Speech Bubble ── */}
      {bubbleVisible && (
        <div className="relative rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 py-2 px-3 shadow-[0_8px_25px_rgba(0,0,0,0.1)] max-w-[230px] text-[11px] text-slate-800 leading-tight animate-in fade-in slide-in-from-right-2 duration-300">
          <button
            type="button"
            onClick={handleDismiss}
            className="absolute -top-1.5 -left-1.5 w-4 h-4 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center text-[9px] cursor-pointer shadow-2xs transition-colors"
            title="Dismiss message"
          >
            <X className="w-2.5 h-2.5" />
          </button>
          
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
            <span className="font-bold text-[10px] uppercase tracking-wider text-slate-500 font-mono">
              Export Desk Online
            </span>
          </div>

          <p className="text-slate-700 text-[11px]">
            Have a question? Chat directly on WhatsApp 👋
          </p>
        </div>
      )}

      {/* ── Compact WhatsApp Floating Action Button ── */}
      <a
        href="https://wa.me/919825099881?text=Hello%20Zelnex%20Team%2C%20I%20would%20like%20to%20inquire%20about%20finished%20pharmaceutical%20formulations%20and%20dossiers."
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white flex items-center justify-center shadow-[0_6px_20px_rgba(37,211,102,0.35)] hover:shadow-[0_10px_28px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shrink-0"
        title="Chat with Zelnex Export Desk on WhatsApp"
        aria-label="Chat with Zelnex Export Desk on WhatsApp"
      >
        {/* Ambient ping glow ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping [animation-duration:2.5s] pointer-events-none" />

        {/* Live Active Status Dot */}
        <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white flex items-center justify-center z-20">
          <span className="w-1 h-1 rounded-full bg-white" />
        </span>

        {/* Authentic WhatsApp SVG Vector */}
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 fill-current relative z-10 drop-shadow-2xs group-hover:rotate-6 transition-transform duration-300"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.45 1.03 2.62.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.53.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.3z" />
        </svg>
      </a>
    </aside>
  );
}
