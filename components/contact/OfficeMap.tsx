"use client";

import React, { useState } from "react";
import {
  MapPin,
  Navigation,
  Compass,
  Building,
  Phone,
  Clock,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

export function OfficeMap() {
  const [activeTab, setActiveTab] = useState<"ahmedabad" | "mumbai">("ahmedabad");

  const locations = {
    ahmedabad: {
      name: "Global Corporate HQ & Administrative Desk",
      address: "Corporate Heights, SG Highway, Ahmedabad, Gujarat 380054, India",
      coords: "23.0225° N, 72.5714° E",
      airport: "Sardar Vallabhbhai Patel International Airport (AMD) — 16 km",
      port: "Mundra & Kandla Container Ports — Direct Rail Freight Link",
      hours: "Mon – Sat: 09:00 – 18:30 IST",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117506.31175591322!2d72.48316447832031!3d23.0204741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
      directionsUrl: "https://maps.google.com/?q=Ahmedabad,+Gujarat,+India",
    },
    mumbai: {
      name: "International Export & Logistics Operations",
      address: "Seaport Logistics Hub, JNPT Sea Terminal Corridor, Navi Mumbai, Maharashtra 400707, India",
      coords: "18.9499° N, 72.9525° E",
      airport: "Chhatrapati Shivaji Maharaj International Airport (BOM) — 28 km",
      port: "Jawaharlal Nehru Port Trust (JNPT) — 8 km",
      hours: "24/7 Air Cargo & Ocean Container Customs Clearance",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120638.16377727196!2d72.93489839999999!3d19.0330488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c21626a8d67b%3A0x676b7c02b23a5cfc!2sNavi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
      directionsUrl: "https://maps.google.com/?q=Navi+Mumbai,+Maharashtra,+India",
    },
  };

  const current = locations[activeTab];

  return (
    <section className="relative py-16 sm:py-24 bg-[#F8FAFC] border-b border-blue-100 font-['Inter',sans-serif] select-none">
      {/* Subtle Pattern Grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 110, 220, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 110, 220, 0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-200 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#006EDC]/10 border border-[#006EDC]/25 mb-3 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#006EDC] animate-pulse" />
              <span className="text-[11px] font-['JetBrains_Mono',monospace] font-bold uppercase tracking-[0.15em] text-[#006EDC]">
                09.02 // GEOGRAPHIC HUBS & LOGISTICS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E48] tracking-tight font-['Space_Grotesk',sans-serif]">
              Find Our Global Offices
            </h2>

            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
              Visit our corporate headquarters in Ahmedabad or connect with our international export logistics base in Mumbai.
            </p>
          </div>

          {/* Location Switcher Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <button
              type="button"
              onClick={() => setActiveTab("ahmedabad")}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-['JetBrains_Mono',monospace] transition-all cursor-pointer ${
                activeTab === "ahmedabad"
                  ? "bg-[#006EDC] text-white shadow-sm"
                  : "text-slate-600 hover:text-[#0B1E48] hover:bg-slate-100"
              }`}
            >
              AHMEDABAD HQ
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("mumbai")}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-['JetBrains_Mono',monospace] transition-all cursor-pointer ${
                activeTab === "mumbai"
                  ? "bg-[#006EDC] text-white shadow-sm"
                  : "text-slate-600 hover:text-[#0B1E48] hover:bg-slate-100"
              }`}
            >
              MUMBAI PORT HUB
            </button>
          </div>
        </div>

        {/* ── Main Map & Telemetry Container ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Interactive Map Container */}
          <div className="lg:col-span-8 rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-[0_16px_40px_rgba(11,30,72,0.06)] relative min-h-[380px] sm:min-h-[440px] flex flex-col">
            
            {/* Top Map HUD Bar */}
            <div className="flex items-center justify-between px-5 py-3 bg-[#F4F8FD] border-b border-slate-200 text-xs font-['JetBrains_Mono',monospace]">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#006EDC] animate-pulse" />
                <span className="font-bold text-[#0B1E48]">GEO_LOC: {current.coords}</span>
              </div>
              <span className="text-[10px] uppercase font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                AIR &amp; SEA CORRIDOR ACTIVE
              </span>
            </div>

            {/* Embedded Iframe */}
            <div className="relative flex-1 w-full h-full min-h-[320px]">
              <iframe
                title="Office Location Map"
                src={current.mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Bar: Direct Navigation Button */}
            <div className="p-4 bg-white border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-slate-500 font-medium">
                {current.address}
              </span>
              <a
                href={current.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#006EDC] text-white font-bold font-['JetBrains_Mono',monospace] text-xs hover:bg-[#0055aa] transition-colors shadow-xs"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Driving Directions</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            </div>

          </div>

          {/* Right: Technical Logistics Specification Deck */}
          <div className="lg:col-span-4 flex flex-col justify-between rounded-3xl p-6 sm:p-7 bg-white border border-slate-200 shadow-[0_16px_40px_rgba(11,30,72,0.06)]">
            
            <div>
              <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono',monospace] font-bold text-[#006EDC] uppercase mb-2">
                <Building className="w-4 h-4" />
                FACILITY SPECIFICATIONS
              </div>

              <h3 className="text-xl font-extrabold text-[#0B1E48] tracking-tight font-['Space_Grotesk',sans-serif] mb-4">
                {current.name}
              </h3>

              <div className="space-y-4 text-xs text-slate-600">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-[10px] font-['JetBrains_Mono',monospace] font-bold text-slate-400 uppercase mb-1">
                    PHYSICAL LOCATION
                  </div>
                  <p className="font-semibold text-slate-800 leading-snug">
                    {current.address}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-[10px] font-['JetBrains_Mono',monospace] font-bold text-slate-400 uppercase mb-1">
                    AIR FREIGHT PROXIMITY
                  </div>
                  <p className="font-semibold text-slate-800 leading-snug">
                    {current.airport}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-[10px] font-['JetBrains_Mono',monospace] font-bold text-slate-400 uppercase mb-1">
                    SEA CARGO &amp; PORT LINK
                  </div>
                  <p className="font-semibold text-slate-800 leading-snug">
                    {current.port}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-100">
                  <div className="text-[10px] font-['JetBrains_Mono',monospace] font-bold text-[#006EDC] uppercase mb-1 flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    OPERATING PROTOCOLS
                  </div>
                  <p className="font-semibold text-slate-800 leading-snug">
                    {current.hours}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-['JetBrains_Mono',monospace] text-slate-500">
              <span>Security Clearance:</span>
              <span className="font-bold text-emerald-600 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                ISO 9001:2015 AUDITED
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
