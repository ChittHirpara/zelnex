"use client";

import React from "react";
import Link from "next/link";
import {
  Building2,
  Phone,
  Mail,
  ArrowRight,
  MessageCircle,
  FileCheck2,
  ShieldCheck,
  Globe2,
} from "lucide-react";

export function AboutCTA() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 md:px-8">
        
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-[#0B1E48] via-[#0A2E6B] to-[#08204D] text-white shadow-2xl overflow-hidden">
          {/* Background Decorative Rings */}
          <div className="pointer-events-none absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 -top-24 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/20 text-cyan-300 font-['JetBrains_Mono',monospace] text-xs font-bold uppercase tracking-wider">
                08.00 // GLOBAL PARTNERSHIP &amp; REGISTRATION DESK
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12] font-['Inter',sans-serif]">
                Ready to Expand Healthcare Access in Your Market?
              </h2>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl font-normal">
                Connect with our international export division in Surat for immediate access to ready CTD/eCTD registration dossiers, high-volume WHO-GMP commercial formulation supply, and dedicated tender licensing.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-[#006EDC] to-[#0284C7] text-white font-bold text-sm shadow-[0_10px_25px_rgba(0,110,220,0.35)] hover:shadow-[0_14px_30px_rgba(0,110,220,0.45)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>Connect with Export Desk</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="https://wa.me/919328286164"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-white font-bold text-sm shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Commercial Desk</span>
                </a>
              </div>
            </div>

            {/* Right: Institutional Contact Badge */}
            <div className="lg:col-span-5 w-full">
              <div className="p-7 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xl space-y-4 text-xs">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-['JetBrains_Mono',monospace] text-cyan-300 font-bold uppercase">
                    OFFICIAL HEADQUARTERS
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                <div className="space-y-3 text-slate-200">
                  <div className="flex items-start gap-2.5">
                    <Building2 className="w-4 h-4 text-cyan-300 shrink-0 mt-0.5" />
                    <span>
                      <strong>Zelnex Pharmaceuticals Pvt. Ltd.</strong><br />
                      117 - Platinum Plaza, Near VT Circle,<br />
                      Sarthana Jakatnaka, Surat - 395013, Gujarat, India
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-cyan-300 shrink-0" />
                    <a href="tel:+919328286164" className="hover:text-cyan-300 transition-colors font-['JetBrains_Mono',monospace]">
                      +91 93282 86164
                    </a>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-cyan-300 shrink-0" />
                    <a href="mailto:info@zelnexpharma.com" className="hover:text-cyan-300 transition-colors font-['JetBrains_Mono',monospace]">
                      info@zelnexpharma.com
                    </a>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-['JetBrains_Mono',monospace] text-slate-300">
                  <span>MOH REGISTRATIONS</span>
                  <span className="text-cyan-300 font-bold">150+ DOSSIERS READY</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
