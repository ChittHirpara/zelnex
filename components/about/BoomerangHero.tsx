"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BoomerangVideoBg } from "./BoomerangVideoBg";

export function BoomerangHero() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const featureRows = [
    {
      num: "01",
      label: "Conversational",
      tagline: "Natural, nuanced dialog that handles complex queries with complete clinical and regulatory fidelity.",
      href: "/contact",
    },
    {
      num: "02",
      label: "Connected",
      tagline: "Direct integration into global health ministries, supply registries, and institutional procurement desks.",
      href: "/services",
    },
    {
      num: "03",
      label: "Compliant",
      tagline: "100% WHO-GMP, ISO 9001:2015, and ICH CTD Module 1-5 audit-ready documentation standards.",
      href: "/about#governance",
    },
  ];

  return (
    <section className="relative flex flex-col items-center overflow-hidden min-h-screen bg-white">
      {/* ── Boomerang Looping Ping-Pong Video Engine ── */}
      <BoomerangVideoBg />

      {/* ── Hero Top Content Block (Centered) ── */}
      <div className="relative z-10 flex flex-col items-center text-center pt-28 sm:pt-32 md:pt-36 px-4 sm:px-6 max-w-4xl mx-auto">
        
        {/* H1 Serif Header (P22 Mackinac W01 Book) */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.08] tracking-tighter text-[#191919] font-normal">
          Build lasting<br />relationships.
        </h1>

        {/* Subcopy */}
        <p className="max-w-sm sm:max-w-md md:max-w-lg mt-5 sm:mt-6 md:mt-7 text-sm md:text-base text-[#191919]/70 leading-relaxed font-sans">
          Conversational AI platform for modern financial institutions &amp; global healthcare enterprises — agents that handle the full lifecycle across email, SMS, and voice.
        </p>

        {/* Book A Demo CTA Button */}
        <Link
          href="/contact"
          className="mt-6 sm:mt-8 md:mt-9 px-7 sm:px-8 py-3 sm:py-3.5 bg-[#191919] text-white text-sm font-medium rounded-lg hover:bg-[#191919]/90 transition-colors duration-200 shadow-sm cursor-pointer"
        >
          Book A Demo
        </Link>
      </div>

      {/* ── Bottom Info Panel (Flush to bottom of viewport) ── */}
      <div className="relative z-10 mt-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="bg-white/90 backdrop-blur-sm border border-gray-200 border-b-0 pt-8 sm:pt-12 md:pt-14 px-5 sm:px-8 md:px-12 pb-0 shadow-sm rounded-t-3xl sm:rounded-t-[32px]">
          
          {/* Row 1 — 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-14 items-end">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium font-sans">
                WHAT DO WE DO?
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-serif font-normal leading-tight tracking-tight text-[#191919]">
                Conversations that<br className="hidden sm:inline" /> build momentum
              </h2>
            </div>

            <div className="pb-1">
              <p className="text-sm md:text-[15px] text-[#191919]/70 leading-relaxed font-sans">
                Conversational AI built for regulated institutions. Agents that hold a real conversation, plug into the systems you run, and show their work.
              </p>
            </div>
          </div>

          {/* Hairline Divider */}
          <div className="mt-6 sm:mt-8 md:mt-10 h-px bg-gray-200 w-full" />

          {/* Row 2 — 3 Interactive Feature Rows */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 py-4 sm:py-6">
            {featureRows.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="bg-[#F4F3F3] hover:bg-[#eaeaea] transition-all duration-200 cursor-pointer px-4 sm:px-6 py-3.5 sm:py-4 flex justify-between items-center rounded-xl group"
              >
                <div className="flex items-center text-sm text-[#191919]">
                  <span className="text-[#191919]/40 font-mono text-xs">{item.num}</span>
                  <span className="mx-2 text-[#191919]/30">/</span>
                  <span className="font-medium font-sans text-xs sm:text-sm">{item.label}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-700 group-hover:translate-x-0.5 transition-all duration-200 shrink-0 ml-2" />
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
