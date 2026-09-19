"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";


/* ─────────────────────────────────────────────────────────────────────────
   All 24 product cards — imageBg is a per-category pastel tint
   ───────────────────────────────────────────────────────────────────────── */
const ALL_PRODUCTS = [
  // ── TABLETS ──
  {
    id: "tab-1",
    tag: "ORAL SOLID DOSAGE",
    tagColor: "#006EDC",
    tagBg: "#E8F3FF",
    imageBg: "#D6E8FA",
    title: "ZELNEX Tab-Complex",
    description:
      "High-speed rotary tableting with precision aqueous film coating and Alu-Alu cold form blister sealing.",
    image: "/products/tablets-blister.jpg",
    href: "/contact?subject=ZELNEX+Tab-Complex+Tablet+Commercial+Inquiry",
  },
  {
    id: "tab-2",
    tag: "SUSTAINED RELEASE",
    tagColor: "#006EDC",
    tagBg: "#E8F3FF",
    imageBg: "#D6E8FA",
    title: "ZELNEX Metfor-SR",
    description:
      "Hydrophilic matrix tablets engineered for controlled 24-hour dissolution, minimising gastrointestinal irritation.",
    image: "/products/zelnex-tablets-bottle.jpg",
    href: "/contact?subject=ZELNEX+Metfor-SR+Tablet+Commercial+Inquiry",
  },
  {
    id: "tab-3",
    tag: "MACROLIDE ANTIBIOTIC",
    tagColor: "#006EDC",
    tagBg: "#E8F3FF",
    imageBg: "#D6E8FA",
    title: "ZELNEX Azithro-500",
    description:
      "Broad-spectrum antibacterial produced under WHO-GMP cleanroom standards with high bioavailability.",
    image: "/products/tablets-capsules.jpg",
    href: "/contact?subject=ZELNEX+Azithromycin+Tablet+Commercial+Inquiry",
  },
  {
    id: "tab-4",
    tag: "RAPID EFFERVESCENT",
    tagColor: "#006EDC",
    tagBg: "#E8F3FF",
    imageBg: "#D6E8FA",
    title: "ZELNEX Vit-C Fizz",
    description:
      "Direct-compression effervescent tablets with instant carbonation and moisture-tight aluminium tube sealing.",
    image: "/products/effervescent-tablets.jpg",
    href: "/contact?subject=ZELNEX+Effervescent+Tablet+Commercial+Inquiry",
  },
  // ── CAPSULES ──
  {
    id: "cap-1",
    tag: "PRECISION ENCAPSULATION",
    tagColor: "#006EDC",
    tagBg: "#E8F3FF",
    imageBg: "#C8DFF7",
    title: "ZELNEX Dura-Caps",
    description:
      "100% checkweighed precision encapsulation protecting hygroscopic actives in BSE/TSE-free gelatin shells.",
    image: "/products/hard-capsules.jpg",
    href: "/contact?subject=ZELNEX+Dura-Caps+Capsule+Commercial+Inquiry",
  },
  {
    id: "cap-2",
    tag: "DELAYED-RELEASE PELLETS",
    tagColor: "#006EDC",
    tagBg: "#E8F3FF",
    imageBg: "#C8DFF7",
    title: "ZELNEX Omepra-DR",
    description:
      "Multi-pellet enteric-coated spheroids ensuring complete gastric bypass and target duodenal absorption.",
    image: "/products/capsule-omeprazole.jpg",
    href: "/contact?subject=ZELNEX+Omeprazole+Capsule+Commercial+Inquiry",
  },
  {
    id: "cap-3",
    tag: "ANTIMICROBIAL THERAPY",
    tagColor: "#006EDC",
    tagBg: "#E8F3FF",
    imageBg: "#C8DFF7",
    title: "ZELNEX Doxy-100",
    description:
      "Plant-derived vegetarian HPMC capsules safeguarding moisture-sensitive tetracyclines in high-humidity zones.",
    image: "/products/zelnex-hero-product.jpg",
    href: "/contact?subject=ZELNEX+Doxycycline+Capsule+Commercial+Inquiry",
  },
  {
    id: "cap-4",
    tag: "ROTARY DIE SOFTGEL",
    tagColor: "#006EDC",
    tagBg: "#E8F3FF",
    imageBg: "#C8DFF7",
    title: "ZELNEX Vita-Gel",
    description:
      "Nitrogen-purged rotary die soft gelatin encapsulation with hermetic sealing to prevent oxidation of marine triglycerides.",
    image: "/products/softgel-capsules.jpg",
    href: "/contact?subject=ZELNEX+Softgel+Capsule+Commercial+Inquiry",
  },
  // ── SUSPENSIONS ──
  {
    id: "susp-1",
    tag: "PEDIATRIC ANTIPYRETIC",
    tagColor: "#006EDC",
    tagBg: "#E8F3FF",
    imageBg: "#D6E8FA",
    title: "ZELNEX Sedamin 150ml",
    description:
      "Automated strawberry-flavored oral suspensions with uniform active dispersal and calibrated 15ml dosing cup.",
    image: "/products/syrup-suspension.jpg",
    href: "/contact?subject=ZELNEX+Sedamin+Oral+Suspension+Commercial+Inquiry",
  },
  {
    id: "susp-2",
    tag: "RESPIRATORY MUCOLYTIC",
    tagColor: "#006EDC",
    tagBg: "#E8F3FF",
    imageBg: "#D6E8FA",
    title: "ZELNEX Broncho-Clear",
    description:
      "Viscosity-stabilized cough syrup combining mucolytic and expectorant actives in child-resistant amber PET bottles.",
    image: "/products/suspension-cough-syrup.jpg",
    href: "/contact?subject=ZELNEX+Broncho-Clear+Syrup+Commercial+Inquiry",
  },
  {
    id: "susp-3",
    tag: "PEDIATRIC ANTIHISTAMINE",
    tagColor: "#006EDC",
    tagBg: "#E8F3FF",
    imageBg: "#D6E8FA",
    title: "ZELNEX Ceti-Drops",
    description:
      "Sugar-free pediatric anti-allergy drops with calibrated pipette for fast 24-hour symptom relief in infants.",
    image: "/products/suspension-pediatric-drops.jpg",
    href: "/contact?subject=ZELNEX+Cetirizine+Drops+Commercial+Inquiry",
  },
  {
    id: "susp-4",
    tag: "PEDIATRIC WELLNESS",
    tagColor: "#006EDC",
    tagBg: "#E8F3FF",
    imageBg: "#D6E8FA",
    title: "ZELNEX Multi-Zinc",
    description:
      "Nutrient-rich syrup fortified with chelated zinc and essential vitamins, taste-masked for high patient compliance.",
    image: "/products/suspension-multivitamin.jpg",
    href: "/contact?subject=ZELNEX+Multi-Zinc+Liquid+Commercial+Inquiry",
  },
  // ── SACHETS ──
  {
    id: "sach-1",
    tag: "WHO VALIDATED FORMULA",
    tagColor: "#082B61",
    tagBg: "#E8F0FA",
    imageBg: "#C8D8F0",
    title: "ZELNEX ORS-Pro Sachets",
    description:
      "VFFS-packed WHO-standard electrolyte salts in 4-ply PET/Alu/PE barrier foil for hygroscopic powder protection.",
    image: "/products/powder-sachets.jpg",
    href: "/contact?subject=ZELNEX+ORS+Sachet+Commercial+Inquiry",
  },
  {
    id: "sach-2",
    tag: "LYOPHILIZED GRANULES",
    tagColor: "#082B61",
    tagBg: "#E8F0FA",
    imageBg: "#C8D8F0",
    title: "ZELNEX Probio-Max",
    description:
      "Micro-encapsulated probiotic strains in foil stick-packs for instant water dispersion and gut microbiome support.",
    image: "/products/sachet-probiotic.jpg",
    href: "/contact?subject=ZELNEX+Probiotic+Sachet+Commercial+Inquiry",
  },
  {
    id: "sach-3",
    tag: "HIGH-POTENCY VITAMIN D",
    tagColor: "#082B61",
    tagBg: "#E8F0FA",
    imageBg: "#C8D8F0",
    title: "ZELNEX Cholecal-60K",
    description:
      "Quick-dissolving 60,000 IU Vitamin D3 granules in laser-notched barrier sachets for weekly therapeutic use.",
    image: "/products/sachet-vitamin-d.jpg",
    href: "/contact?subject=ZELNEX+Cholecalciferol+Sachet+Commercial+Inquiry",
  },
  {
    id: "sach-4",
    tag: "MATERNAL & VASCULAR",
    tagColor: "#082B61",
    tagBg: "#E8F0FA",
    imageBg: "#C8D8F0",
    title: "ZELNEX Argi-Safe",
    description:
      "Effervescent L-Arginine + Proanthocyanidin in 5g barrier pouches for vascular perfusion under nitrogen cleanrooms.",
    image: "/products/sachet-arginine.jpg",
    href: "/contact?subject=ZELNEX+L-Arginine+Sachet+Commercial+Inquiry",
  },
  // ── TOPICALS ──
  {
    id: "top-1",
    tag: "TRANSDERMAL ANALGESIC",
    tagColor: "#006EDC",
    tagBg: "#E8F3FF",
    imageBg: "#D6E8FA",
    title: "ZELNEX Derma-Gel 30g",
    description:
      "High-absorption micro-emulsion gel for rapid transdermal penetration, relieving joint inflammation and musculoskeletal stiffness.",
    image: "/products/topical-tube.jpg",
    href: "/contact?subject=ZELNEX+Diclofenac+Gel+Commercial+Inquiry",
  },
  {
    id: "top-2",
    tag: "TRIPLE-ACTION DERM",
    tagColor: "#006EDC",
    tagBg: "#E8F3FF",
    imageBg: "#D6E8FA",
    title: "ZELNEX Tri-Derma Cream",
    description:
      "Broad-spectrum topical combining corticosteroid, antifungal, and antibacterial actives in an elegant vanishing cream base.",
    image: "/products/topical-triple-cream.jpg",
    href: "/contact?subject=ZELNEX+Tri-Derma+Cream+Commercial+Inquiry",
  },
  {
    id: "top-3",
    tag: "ACNE THERAPY GEL",
    tagColor: "#006EDC",
    tagBg: "#E8F3FF",
    imageBg: "#D6E8FA",
    title: "ZELNEX Clinda-Clear",
    description:
      "Oil-free aqueous gel with precision nozzle tip to suppress acne vulgaris while preserving skin barrier hydration.",
    image: "/products/topical-acne-gel.jpg",
    href: "/contact?subject=ZELNEX+Clindamycin+Gel+Commercial+Inquiry",
  },
  {
    id: "top-4",
    tag: "ANTISEPTIC WOUND CARE",
    tagColor: "#006EDC",
    tagBg: "#E8F3FF",
    imageBg: "#D6E8FA",
    title: "ZELNEX Silver-Burn",
    description:
      "Sterile Silver Sulfadiazine 1% cream in hermetic collapsible tube for antimicrobial protection of deep dermal burns.",
    image: "/products/topical-burn-cream.jpg",
    href: "/contact?subject=ZELNEX+Silver+Sulfadiazine+Cream+Commercial+Inquiry",
  },
  // ── DRY POWDER ──
  {
    id: "dry-1",
    tag: "BETA-LACTAM ANTIBIOTIC",
    tagColor: "#082B61",
    tagBg: "#E8F0FA",
    imageBg: "#C8D8F0",
    title: "ZELNEX Dry-Susp 100ml",
    description:
      "Micro-granulated antibiotic dry syrup in amber glass with induction foil seal, dispersing into smooth suspension.",
    image: "/products/dry-powder-suspension.jpg",
    href: "/contact?subject=ZELNEX+Amoxicillin+Dry+Suspension+Commercial+Inquiry",
  },
  {
    id: "dry-2",
    tag: "PEDIATRIC MACROLIDE",
    tagColor: "#082B61",
    tagBg: "#E8F0FA",
    imageBg: "#C8D8F0",
    title: "ZELNEX Azithro-Dry",
    description:
      "Fruit-flavored dry syrup granules with sterile diluent ampoule, engineered for 3-day pediatric macrolide therapy.",
    image: "/products/dry-powder-antibiotic.jpg",
    href: "/contact?subject=ZELNEX+Azithromycin+Dry+Syrup+Commercial+Inquiry",
  },
  {
    id: "dry-3",
    tag: "STERILE LYOPHILIZED",
    tagColor: "#082B61",
    tagBg: "#E8F0FA",
    imageBg: "#C8D8F0",
    title: "ZELNEX Cefix-Dry Vials",
    description:
      "Sterile lyophilized Ceftriaxone glass vial with flip-off crimp seal under Class 100 aseptic cleanroom conditions.",
    image: "/products/sterile-vial.jpg",
    href: "/contact?subject=ZELNEX+Sterile+Lyophilized+Vial+Commercial+Inquiry",
  },
  {
    id: "dry-4",
    tag: "RECONSTITUTION KIT",
    tagColor: "#082B61",
    tagBg: "#E8F0FA",
    imageBg: "#C8D8F0",
    title: "ZELNEX Reconstitute-Kit",
    description:
      "Complete closed-system pack with sterile dry powder vial and pre-calibrated solvent syringe for clinical administration.",
    image: "/products/reconstitute-injection-kit.jpg",
    href: "/contact?subject=ZELNEX+Reconstitution+Injection+Kit+Commercial+Inquiry",
  },
] as const;

/* Duplicate for seamless infinite loop */
const TRACK = [...ALL_PRODUCTS, ...ALL_PRODUCTS];

/* ─────────────────────────────────────────────────────────────────────────
   Component
   ───────────────────────────────────────────────────────────────────────── */
export function FormulationsHub() {
  return (
    <section
      id="products"
      className="relative scroll-mt-24 py-16 sm:py-24 z-20 select-none overflow-hidden border-b border-blue-100"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #F6FAFE 40%, #EDF5FD 75%, #FFFFFF 100%)",
      }}
    >
      {/* 24px Pattern Grid with soft blue lines */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 110, 220, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 110, 220, 0.12) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />

      {/* ── Soft Ethereal Sky & Sapphire Light Pools ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] rounded-full blur-[120px] opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(56, 189, 248, 0.35) 0%, rgba(0, 110, 220, 0.15) 50%, transparent 75%)",
          }}
        />
        <div
          className="absolute top-20 right-10 w-[450px] h-[300px] rounded-full blur-[90px] opacity-25"
          style={{
            background: "radial-gradient(circle, rgba(13, 148, 136, 0.25) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ── Section Header Container ── */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[1380px] mx-auto mb-6 sm:mb-8">
        {/* Top Metadata Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#006EDC]/10 border border-[#006EDC]/25 mb-4 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-[#006EDC] animate-pulse" />
          <span className="text-[11px] font-['JetBrains_Mono',monospace] font-bold uppercase tracking-[0.15em] text-[#006EDC]">
            04.00 // FINISHED FORMULATIONS &amp; DOSAGE FORMATS
          </span>
        </div>

        {/* Heading Row */}
        <div className="max-w-3xl pb-2">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0B1E48] tracking-tight leading-[1.15] font-['Outfit',sans-serif]">
            Commercial Formulations &amp;
            <br className="hidden sm:inline" />{" "}
            <span className="bg-gradient-to-r from-[#006EDC] via-[#0284C7] to-[#082B61] bg-clip-text text-transparent">
              Certified Dosage Formats
            </span>
          </h2>

          {/* Glowing Accent Gradient Bar */}
          <div className="my-3.5 h-[3.5px] w-16 rounded-full bg-gradient-to-r from-[#006EDC] via-[#38BDF8] to-[#0D9488] shadow-xs" />

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
            High-throughput pharmaceutical manufacturing across 6 certified dosage forms — cleanroom capacities, high-barrier tropical packaging, and WHO-GMP validated global compliance.
          </p>
        </div>
      </div>

      {/* ── Continuous Horizontal Scroll Track ── */}
      <div className="relative w-full overflow-hidden formulations-scroll-wrapper">
        {/* Left fade */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-20 sm:w-40 z-10"
          style={{
            background:
              "linear-gradient(to right, rgba(246,250,254,1) 0%, rgba(246,250,254,0) 100%)",
          }}
        />
        {/* Right fade */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-20 sm:w-40 z-10"
          style={{
            background:
              "linear-gradient(to left, rgba(246,250,254,1) 0%, rgba(246,250,254,0) 100%)",
          }}
        />

        {/* Scrolling track */}
        <div className="formulations-track flex gap-5 w-max">
          {TRACK.map((product, i) => (
            <Link
              key={`${product.id}-${i}`}
              href={product.href}
              className="group flex-shrink-0 w-[268px] sm:w-[280px] rounded-[28px] bg-white p-2.5 sm:p-3 border border-slate-200/80 shadow-[0_4px_20px_rgba(8,43,97,0.06)] hover:shadow-[0_20px_45px_rgba(8,43,97,0.14)] hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col"
              style={{ textDecoration: "none" }}
            >
              {/* ── IMAGE AREA (70% OF CARD) ── edge-to-edge cleanroom studio photo clipped to inner rounded curves (OVAL exact) */}
              <div
                className="relative w-full rounded-[20px] overflow-hidden flex-shrink-0 bg-slate-100"
                style={{ height: "275px" }}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="280px"
                  unoptimized
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.05]"
                />
              </div>

              {/* ── MATTE GLASS FLOATING PANEL (30% OF CARD) ──
                  Frosted glass capsule overlapping lower photo with curved top & bottom (OVAL exact) */}
              <div
                className="relative z-10 -mt-14 sm:-mt-16 w-full rounded-[20px] flex flex-col gap-1.5 sm:gap-2 p-3.5 sm:p-4 flex-1 transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.78) 28%, rgba(255, 255, 255, 0.95) 65%, rgba(255, 255, 255, 0.98) 100%)",
                  backdropFilter: "blur(20px) saturate(190%)",
                  WebkitBackdropFilter: "blur(20px) saturate(190%)",
                  border: "1px solid rgba(255, 255, 255, 0.9)",
                  boxShadow:
                    "0 10px 28px -4px rgba(8, 43, 97, 0.10), inset 0 1.5px 0.5px 0 rgba(255, 255, 255, 1)",
                }}
              >
                {/* Badge — frosted crystal pill */}
                <span
                  className="inline-block self-start text-[9px] font-bold uppercase tracking-[0.08em] px-2.5 py-[2.5px] rounded-full border transition-all duration-200"
                  style={{
                    color: product.tagColor || "#006EDC",
                    borderColor: "rgba(0, 110, 220, 0.35)",
                    background: "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    boxShadow:
                      "0 1px 3px rgba(0, 110, 220, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.95)",
                  }}
                >
                  {product.tag}
                </span>

                {/* Title */}
                <h3 className="font-['Outfit',sans-serif] text-[15.5px] sm:text-[16.5px] font-bold leading-tight text-[#082B61] tracking-tight group-hover:text-[#006EDC] transition-colors duration-200">
                  {product.title}
                </h3>

                {/* Description — compact 2-line preview for 30% ratio */}
                <p className="text-[12px] leading-[1.5] text-[#475569] font-normal line-clamp-2">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── CSS Animation (slower = 110s) ── */}
      <style jsx>{`
        .formulations-scroll-wrapper {
          padding: 24px 0 32px;
        }

        .formulations-track {
          animation: formulationsScroll 110s linear infinite;
        }

        .formulations-scroll-wrapper:hover .formulations-track {
          animation-play-state: paused;
        }

        @keyframes formulationsScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .formulations-track {
            animation: none;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </section>
  );
}

export default FormulationsHub;
