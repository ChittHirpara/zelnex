"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface TestimonialItem {
  text: string;
  highlight: string;
  category?: string;
}

const ROW_DATA: {
  range: number;
  speed: number;
  items: TestimonialItem[];
}[] = [
  {
    range: 60,
    speed: 12,
    items: [
      {
        text: "Alu-Alu blister packaging provides 100% moisture barrier in Zone IVb climates.",
        highlight: "100% moisture barrier",
      },
      {
        text: "Tamper-evident induction sealed HDPE bottles ensure complete shelf-life security.",
        highlight: "complete shelf-life security.",
      },
      {
        text: "Zero contamination observed across all Grade A sterile vial filling batches.",
        highlight: "Zero contamination observed",
      },
    ],
  },
  {
    range: 80,
    speed: 16,
    items: [
      {
        text: "Sterile lyophilized crimp-cap vials maintain Grade A aseptic integrity.",
        highlight: "Grade A aseptic integrity.",
      },
      {
        text: "Push blisters in PVC/PVDC offer high thermoform clarity and cavity stability.",
        highlight: "high thermoform clarity",
      },
      {
        text: "Zero product degradation observed across 36-month real-time stability.",
        highlight: "36-month real-time stability.",
      },
    ],
  },
  {
    range: 100,
    speed: 20,
    items: [
      {
        text: "Tear-notch multi-layer sachets protect oral powders from humidity ingress.",
        highlight: "protect oral powders",
      },
      {
        text: "Amber glass bottles deliver complete UV light barrier for photosensitive APIs.",
        highlight: "complete UV light barrier",
      },
      {
        text: "Flawless secondary packaging with Braille embossing and QR serialization.",
        highlight: "Braille embossing and QR serialization.",
      },
    ],
  },
  {
    range: 50,
    speed: 14,
    items: [
      {
        text: "Liquid oral syrups packaged with calibrated dosing cups and droppers.",
        highlight: "calibrated dosing cups",
      },
      {
        text: "Alu-Alu cold form foil prevents oxygen permeation in sensitive molecules.",
        highlight: "prevents oxygen permeation",
      },
      {
        text: "Hermetic foil seals on food and nutra canisters passed tropical transit.",
        highlight: "passed tropical transit.",
      },
    ],
  },
  {
    range: 120,
    speed: 24,
    items: [
      {
        text: "Softgel blister cavities engineered to prevent deformation under tropical heat.",
        highlight: "prevent deformation under tropical heat.",
      },
      {
        text: "Topical lami and alu tubes with precision nozzle dispensers for exact dosing.",
        highlight: "precision nozzle dispensers",
      },
      {
        text: "Pre-printed shipper cartons withstand high-humidity maritime freight.",
        highlight: "withstand high-humidity maritime freight.",
      },
    ],
  },
  {
    range: 70,
    speed: 15,
    items: [
      {
        text: "High-speed automated blister packaging lines operating under WHO-GMP.",
        highlight: "operating under WHO-GMP.",
      },
      {
        text: "Airtight PET jars with child-resistant safety caps and induction liner.",
        highlight: "child-resistant safety caps",
      },
      {
        text: "Export carton shrink-wrapping prevents container crushing during transit.",
        highlight: "prevents container crushing",
      },
    ],
  },
  {
    range: 90,
    speed: 18,
    items: [
      {
        text: "Consistent blister sealing temperature validated by continuous sensors.",
        highlight: "validated by continuous sensors.",
      },
      {
        text: "Metered dose nasal and oral sprays with uniform droplet distribution.",
        highlight: "uniform droplet distribution.",
      },
      {
        text: "Custom localized packaging artwork meeting 50+ country MOH mandates.",
        highlight: "50+ country MOH mandates.",
      },
    ],
  },
  {
    range: 110,
    speed: 22,
    items: [
      {
        text: "Complete secondary box inspection with anti-counterfeit hologram seals.",
        highlight: "anti-counterfeit hologram seals.",
      },
      {
        text: "Fast delivery of customized export batch sizes with zero packaging defect.",
        highlight: "zero packaging defect.",
      },
      {
        text: "Zone IVb humidity barrier testing certified by third-party laboratories.",
        highlight: "Zone IVb humidity barrier",
      },
    ],
  },
];

function AnimatedRow({
  range,
  speed,
  items,
  isMobile,
}: {
  range: number;
  speed: number;
  items: TestimonialItem[];
  isMobile: boolean;
}) {
  const currentRange = isMobile ? range * 0.4 : range;

  return (
    <div className="flex justify-center w-full overflow-hidden">
      <motion.div
        className="flex gap-3 md:gap-4 items-center whitespace-nowrap"
        animate={{ x: [-currentRange, currentRange] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        {/* 6 Leading Placeholder chips for seamless motion padding */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`pre-${i}`}
            className="flex items-center gap-1 w-[130px] md:w-[190px] h-[44px] md:h-[50px] p-[8px_12px] md:p-[10px_16px] bg-[#EBF5FF] rounded-[12px] md:rounded-[16px] border border-[#BAE0FF] shadow-[0_4px_12px_rgba(0,110,220,0.06)] whitespace-nowrap flex-shrink-0 opacity-60"
          />
        ))}

        {/* Real Packaging Specification & Quality Testimonial Chips */}
        {items.map((item, idx) => {
          const parts = item.text.split(item.highlight);

          return (
            <motion.div
              key={idx}
              whileHover={{
                y: -2,
                boxShadow:
                  "0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)",
              }}
              className="inline-flex items-center px-[14px] py-[10px] md:px-[18px] md:py-[12px] bg-white rounded-[12px] md:rounded-[16px] border border-[#EAEDED] whitespace-nowrap transition-all duration-300 h-[44px] md:h-[50px] flex-shrink-0 shadow-xs cursor-pointer select-none"
            >
              <span className="font-['Inter',sans-serif] text-[14px] md:text-[18px] font-normal text-[#4B5563] leading-none flex items-center">
                &quot;{parts[0]}
                <span className="bg-[#FEF9C3] text-[#111827] px-[4px] md:px-[6px] py-[1px] md:py-[2px] rounded-[4px] mx-[1px] md:mx-[2px] font-semibold">
                  {item.highlight}
                </span>
                {parts[1]}&quot;
              </span>
            </motion.div>
          );
        })}

        {/* 6 Trailing Placeholder chips */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`post-${i}`}
            className="flex items-center gap-1 w-[130px] md:w-[190px] h-[44px] md:h-[50px] p-[8px_12px] md:p-[10px_16px] bg-[#EBF5FF] rounded-[12px] md:rounded-[16px] border border-[#BAE0FF] shadow-[0_4px_12px_rgba(0,110,220,0.06)] whitespace-nowrap flex-shrink-0 opacity-60"
          />
        ))}
      </motion.div>
    </div>
  );
}

export function Packaging({ className = "" }: { className?: string }) {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="packaging"
      className={`w-full bg-white flex flex-col items-center py-[70px] md:py-[110px] overflow-hidden select-none ${className}`}
    >
      {/* ── Header Block ── */}
      <div className="flex flex-col items-center gap-4 max-w-[920px] text-center mb-[35px] md:mb-[60px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#006EDC]/10 border border-[#006EDC]/20 mb-1 shadow-xs"
        >
          <span className="w-2 h-2 rounded-full bg-[#006EDC] animate-pulse" />
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#006EDC]">
            {t.packaging.badge}
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-['Figtree',sans-serif] text-[32px] md:text-[54px] font-bold leading-[1.12] tracking-[-1.2px] md:tracking-[-2.5px] text-[#181B1F]"
        >
          {t.packaging.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-['Inter',sans-serif] text-[15px] md:text-[19px] leading-[1.6] text-[#6B7280] font-normal"
        >
          {t.packaging.subtitle}
        </motion.p>
      </div>

      {/* ── 8 Drifting Marquee Rows ── */}
      <div className="w-full flex flex-col gap-3 md:gap-4 relative my-2">
        {ROW_DATA.map((row, idx) => (
          <AnimatedRow
            key={idx}
            range={row.range}
            speed={row.speed}
            items={row.items}
            isMobile={isMobile}
          />
        ))}
      </div>

      {/* ── Bottom Action CTA Button ── */}
      <div className="w-full flex justify-center mt-[35px] md:mt-[60px] px-6">
        <Link href="#contact">
          <motion.button
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-7 py-[13px] bg-[#006EDC] hover:bg-[#005bb8] text-white rounded-[12px] transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
          >
            <span className="font-['Inter',sans-serif] font-semibold text-[15px] md:text-[17px]">
              Explore Full Packaging Specifications
            </span>
            <motion.div
              variants={{
                hover: { x: 4 },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </Link>
      </div>
    </section>
  );
}

export default Packaging;
