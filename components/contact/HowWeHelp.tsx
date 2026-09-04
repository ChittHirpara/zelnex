"use client";

import React from "react";
import Link from "next/link";
import {
  Pill,
  Handshake,
  Microscope,
  Headphones,
  ArrowRight,
  ShieldCheck,
  FileCheck2,
  Globe2,
} from "lucide-react";

interface HelpTopic {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  bullets: string[];
  icon: React.ElementType;
  accentBg: string;
  borderColor: string;
  ctaText: string;
  inquiryTypeId: string;
}

const HELP_TOPICS: HelpTopic[] = [
  {
    id: "products",
    badge: "800+ FORMULATIONS",
    badgeColor: "#006EDC",
    title: "Product Information & Sourcing",
    description:
      "Access our complete finished formulation index spanning tablets, capsules, injectables, and syrups across 10+ core therapeutic categories.",
    bullets: [
      "Active API strengths & Pharmacopoeia monographs (USP / BP / IP)",
      "High-barrier packaging options (Alu-Alu, PVDC, BFS)",
      "Comprehensive product COA & analytical certificates",
    ],
    icon: Pill,
    accentBg: "linear-gradient(180deg, #F0F7FF 0%, #E2F0FD 45%, #F8FBFE 100%)",
    borderColor: "#BFDBFE",
    ctaText: "Inquire on Formulations",
    inquiryTypeId: "product",
  },
  {
    id: "partnerships",
    badge: "COUNTRY LICENSING",
    badgeColor: "#0D9488",
    title: "Business & Distribution Partnerships",
    description:
      "Partner with Zelnex for country-exclusive distribution rights, institutional hospital supplies, and turnkey MOH tender bidding.",
    bullets: [
      "Country-specific distribution rights & licensing",
      "Competitive tier-1 institutional pricing models",
      "Dedicated account management & logistics coordination",
    ],
    icon: Handshake,
    accentBg: "linear-gradient(180deg, #F0FDFA 0%, #D8FAF4 45%, #F6FCFB 100%)",
    borderColor: "#99F6E4",
    ctaText: "Explore Partnerships",
    inquiryTypeId: "partnership",
  },
  {
    id: "medical",
    badge: "REGULATORY & SCIENCE",
    badgeColor: "#7C3AED",
    title: "Medical & Scientific Queries",
    description:
      "Direct technical consultation on eCTD Modules 1–5, Zone IVb stability testing protocols, bioequivalence studies, and clinical dossiers.",
    bullets: [
      "CTD / eCTD dossier submission assistance",
      "Zone IVb stability data (30°C/75% RH & 40°C/75% RH)",
      "COPP & Free Sale Certificate (FSC) documentation",
    ],
    icon: Microscope,
    accentBg: "linear-gradient(180deg, #FAF5FF 0%, #F3E8FF 45%, #FCFAFF 100%)",
    borderColor: "#E9D5FF",
    ctaText: "Consult Regulatory Desk",
    inquiryTypeId: "medical",
  },
  {
    id: "support",
    badge: "24/7 PHARMACOVIGILANCE",
    badgeColor: "#EA580C",
    title: "Customer Support & Logistics",
    description:
      "End-to-end order execution tracking, cold-chain temperature monitoring (2°C–8°C), and post-marketing pharmacovigilance.",
    bullets: [
      "Real-time shipment & dispatch telemetry",
      "Pre-shipment inspection & CRF documentation",
      "Pharmacovigilance & adverse drug reaction reporting",
    ],
    icon: Headphones,
    accentBg: "linear-gradient(180deg, #FFF7ED 0%, #FFEDD5 45%, #FFFDF9 100%)",
    borderColor: "#FED7AA",
    ctaText: "Access Support Desk",
    inquiryTypeId: "support",
  },
];

export function HowWeHelp({
  onSelectTopic,
}: {
  onSelectTopic?: (inquiryId: string) => void;
}) {
  return (
    <section className="relative py-16 sm:py-24 bg-white border-b border-blue-100 font-['Inter',sans-serif] select-none">
      <div className="relative z-10 mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-200 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#006EDC]/10 border border-[#006EDC]/25 mb-3 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#006EDC] animate-pulse" />
              <span className="text-[11px] font-['JetBrains_Mono',monospace] font-bold uppercase tracking-[0.15em] text-[#006EDC]">
                09.01 // INSTITUTIONAL SUPPORT MATRIX
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E48] tracking-tight font-['Space_Grotesk',sans-serif]">
              How Can We Help You?
            </h2>

            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
              Select your inquiry vertical below to route your request directly to the appropriate pharmaceutical specialist.
            </p>
          </div>

          <div className="text-xs font-['JetBrains_Mono',monospace] text-slate-500 font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            ALL DEPARTMENTS ACTIVE
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {HELP_TOPICS.map((topic) => {
            const Icon = topic.icon;

            return (
              <div
                key={topic.id}
                className="group relative rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between hover:shadow-[0_18px_40px_rgba(11,30,72,0.08)] hover:-translate-y-1.5"
                style={{
                  background: topic.accentBg,
                  borderColor: topic.borderColor,
                }}
              >
                <div>
                  {/* Top: Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-11 h-11 rounded-2xl bg-white border flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-110"
                      style={{
                        borderColor: topic.borderColor,
                        color: topic.badgeColor,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <span
                      className="text-[9.5px] font-['JetBrains_Mono',monospace] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-white border shadow-2xs"
                      style={{
                        borderColor: topic.borderColor,
                        color: topic.badgeColor,
                      }}
                    >
                      {topic.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-[#0B1E48] tracking-tight mb-2 group-hover:text-[#006EDC] transition-colors leading-snug">
                    {topic.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {topic.description}
                  </p>

                  {/* Key Capabilities */}
                  <ul className="space-y-2 border-t pt-3" style={{ borderColor: topic.borderColor }}>
                    {topic.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[11px] text-slate-700 leading-tight">
                        <span className="w-1.5 h-1.5 rounded-full mt-1 shrink-0" style={{ backgroundColor: topic.badgeColor }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Trigger */}
                <div className="mt-6 pt-3 border-t" style={{ borderColor: topic.borderColor }}>
                  <a
                    href="#contact-form-section"
                    onClick={() => onSelectTopic && onSelectTopic(topic.inquiryTypeId)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold font-['JetBrains_Mono',monospace] transition-colors"
                    style={{ color: topic.badgeColor }}
                  >
                    <span>{topic.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
