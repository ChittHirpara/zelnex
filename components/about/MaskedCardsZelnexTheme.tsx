'use client';

import React, { useState, useEffect, useRef, useSyncExternalStore } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CapsuleFlow3D } from '@/components/about/CapsuleFlow3D';
import { SectionDivider } from '@/components/SectionDivider';
import { WORLD_PATHS } from '@/data/worldMapData';
import { Globe, Package, Handshake, FileText } from 'lucide-react';

// High-Resolution Pharmaceutical Imagery for Zelnex (Blue Theme)
const HERO_IMAGE = '/about/zelnex-blue-hero.png';

const SECTION3_IMG1 = '/products/zelnex-tablets-bottle.jpg';
const SECTION3_IMG2 = '/products/effervescent-tablets.jpg';
const SECTION3_BG =
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&q=85&auto=format&fit=crop';



// Zelnex Core Feature Bars & Formulations
const featureBars = [
  '10+ GLOBAL MARKETS SERVED',
  '355+ FINISHED FORMULATIONS',
  'PRIVATE LABEL • REGULATORY • EXPORT SUPPORT',
];


// ──────────────────────────────────────────────
// Custom Technical Hooks for Masked Cards Engine
// ──────────────────────────────────────────────

function useMaskPositions(
  sectionRef: React.RefObject<HTMLElement | null>,
  cardRefs: React.MutableRefObject<(HTMLElement | null)[]>
) {
  const [positions, setPositions] = useState<
    { x: number; y: number; sw: number; sh: number }[]
  >([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const updatePositions = () => {
      const sectionRect = section.getBoundingClientRect();
      const sw = sectionRect.width;
      const sh = sectionRect.height;
      if (sw === 0 || sh === 0) return;

      const newPositions = cardRefs.current.map((card) => {
        if (!card) return { x: 0, y: 0, sw, sh };
        const cardRect = card.getBoundingClientRect();
        return {
          x: cardRect.left - sectionRect.left,
          y: cardRect.top - sectionRect.top,
          sw,
          sh,
        };
      });
      setPositions(newPositions);
    };

    updatePositions();
    const rafId = requestAnimationFrame(updatePositions);

    const ro = new ResizeObserver(updatePositions);
    ro.observe(section);
    window.addEventListener('resize', updatePositions);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      window.removeEventListener('resize', updatePositions);
    };
  }, [sectionRef, cardRefs]);

  return positions;
}

function useImageAspect(bgImage: string, defaultAspect = 16 / 9) {
  const [aspect, setAspect] = useState<number>(defaultAspect);

  useEffect(() => {
    if (!bgImage) return;

    let isMounted = true;
    const img = new window.Image();
    img.onload = () => {
      if (isMounted && img.naturalHeight > 0 && img.naturalWidth > 0) {
        setAspect(img.naturalWidth / img.naturalHeight);
      }
    };
    img.src = bgImage;

    return () => {
      isMounted = false;
    };
  }, [bgImage]);

  return aspect;
}

function useIsMobile() {
  return useSyncExternalStore(
    (callback) => {
      const mq = window.matchMedia('(max-width: 767px)');
      mq.addEventListener('change', callback);
      return () => mq.removeEventListener('change', callback);
    },
    () => window.matchMedia('(max-width: 767px)').matches,
    () => false
  );
}

function useStaggeredReveal(count: number, threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [container, threshold]);

  const getAnimStyle = (index: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${
      index * 120
    }ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 120}ms`,
  });

  return { setContainerRef: setContainer, getAnimStyle, visible };
}

// ──────────────────────────────────────────────
// MaskedCard Component (Full-Screen Cover Stretching Engine)
// ──────────────────────────────────────────────

interface MaskedCardProps {
  bgImage: string;
  bgColor?: string;
  position?: { x: number; y: number; sw: number; sh: number };
  imageAspect?: number;
  focalX?: number;
  focalY?: number;
  className?: string;
  children?: React.ReactNode;
  cardRef?: (el: HTMLElement | null) => void;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function MaskedCard({
  bgImage,
  bgColor = '#006EDC',
  position,
  imageAspect = 16 / 9,
  focalX = 0.5,
  focalY = 0.5,
  className = '',
  children,
  cardRef,
  style = {},
  onClick,
}: MaskedCardProps) {
  const pos =
    position && position.sw > 0 && position.sh > 0
      ? position
      : {
          x: 0,
          y: 0,
          sw: typeof window !== 'undefined' ? window.innerWidth : 1440,
          sh: typeof window !== 'undefined' ? window.innerHeight : 800,
        };

  const aspect = imageAspect > 0 ? imageAspect : 16 / 9;
  const screenAspect = pos.sw / pos.sh;

  let bgW: number;
  let bgH: number;
  let offsetX = 0;
  let offsetY = 0;

  if (screenAspect >= aspect) {
    // Screen is wider than image aspect ratio:
    // Stretch width to 100% of the screen, scale height proportionally
    bgW = pos.sw;
    bgH = pos.sw / aspect;
    offsetY = (bgH - pos.sh) * focalY;
    offsetX = 0;
  } else {
    // Screen is taller than image aspect ratio:
    // Stretch height to 100% of the section, scale width proportionally
    bgH = pos.sh;
    bgW = pos.sh * aspect;
    offsetX = (bgW - pos.sw) * focalX;
    offsetY = 0;
  }

  // Add 2px subpixel buffer to prevent micro-gaps on high-DPI displays
  const renderW = Math.ceil(bgW) + 2;
  const renderH = Math.ceil(bgH) + 2;
  const posX = -Math.round(pos.x + offsetX);
  const posY = -Math.round(pos.y + offsetY);

  const bgStyle: React.CSSProperties = {
    backgroundColor: bgColor,
    backgroundImage: `url(${bgImage})`,
    backgroundSize: `${renderW}px ${renderH}px`,
    backgroundPosition: `${posX}px ${posY}px`,
    backgroundRepeat: 'no-repeat',
    ...style,
  };

  return (
    <div
      ref={cardRef}
      style={bgStyle}
      className={`transition-all ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

// ──────────────────────────────────────────────
// MAIN UNIFIED MASKED CARDS MODERNIST EXPERIENCE
// ──────────────────────────────────────────────

export function MaskedCardsZelnexTheme() {

  const isMobile = useIsMobile();

  // Section 1 Mask Refs & Reveal
  const section1Ref = useRef<HTMLElement | null>(null);
  const s1CardRefs = useRef<(HTMLElement | null)[]>([]);
  const s1Positions = useMaskPositions(section1Ref, s1CardRefs);
  const s1Aspect = useImageAspect(HERO_IMAGE);
  const s1Reveal = useStaggeredReveal(4, 0.15);


  // Section 3 Reveal
  const s3Reveal = useStaggeredReveal(4, 0.15);

  // Section Reveal: Why International Buyers Choose Zelnex
  const sWhyReveal = useStaggeredReveal(5, 0.15);

  // Section 4 Reveal (Global Footprint)
  const s4Reveal = useStaggeredReveal(3, 0.15);

  // Section 5 Reveal (Quality & Cleanrooms)
  const s5Reveal = useStaggeredReveal(3, 0.15);

  // Section 6 Reveal (Surat HQ & Governance)
  const s6Reveal = useStaggeredReveal(3, 0.15);


  return (
    <div
      className="bg-white selection:bg-black selection:text-white flex flex-col min-h-screen"
      style={{
        fontFamily:
          "'Open Sauce One', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* ── Fixed Official Navbar ── */}
      <Navbar />

      {/* ══════════════════════════════════════════════════
          SECTION 1: HERO (MASKED MOSAIC)
          ══════════════════════════════════════════════════ */}
      <section
        ref={(el) => {
          section1Ref.current = el;
          s1Reveal.setContainerRef(el);
        }}
        className="min-h-[620px] md:min-h-[720px] h-[100dvh] md:h-screen w-full flex flex-col pt-20 sm:pt-24 md:pt-24 lg:pt-28 px-3 md:px-5 pb-2 md:pb-3 gap-1.5 md:gap-2"
      >
        {/* 3 Feature Bars */}
        {featureBars.map((bar, i) => (
          <MaskedCard
            key={bar}
            bgImage={HERO_IMAGE}
            bgColor="#006EDC"
            position={s1Positions[i]}
            imageAspect={s1Aspect}
            focalX={isMobile ? 0.7 : 0.8}
            cardRef={(el) => {
              s1CardRefs.current[i] = el;
            }}
            style={s1Reveal.getAnimStyle(i)}
            className="w-full h-11 sm:h-13 md:h-16 shrink-0 rounded-xl md:rounded-2xl overflow-hidden relative border border-blue-200/60 shadow-sm"
          >
            {/* Luminous blue gradient backdrop ensuring a pristine, vibrant royal blue theme */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#006EDC]/90 via-[#0052B4]/90 to-[#082B61]/90 backdrop-blur-[2px]" />
            <span className="flex items-center justify-center h-full text-white text-xs sm:text-base md:text-xl lg:text-2xl font-black text-center relative z-10 px-2 sm:px-4 tracking-wide drop-shadow-xs">
              {bar}
            </span>
          </MaskedCard>
        ))}

        {/* Main Hero Card (4th card, index 3) */}
        <MaskedCard
          bgImage={HERO_IMAGE}
          bgColor="#082B61"
          position={s1Positions[3]}
          imageAspect={s1Aspect}
          focalX={isMobile ? 0.7 : 0.8}
          cardRef={(el) => {
            s1CardRefs.current[3] = el;
          }}
          style={s1Reveal.getAnimStyle(3)}
          className="w-full flex-1 min-h-[320px] md:min-h-[380px] rounded-xl md:rounded-2xl overflow-hidden relative border border-blue-200/50 shadow-md"
        >
          {/* Subtle blue ambient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-blue-50/40 pointer-events-none z-[1]" />

          {/* Interactive 3D Capsule Flow filling the card */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-auto">
            <CapsuleFlow3D />
          </div>

          {/* Card Inner Content — Flexbox layout ensures top information and bottom title never collide */}
          <div className="relative z-10 h-full w-full p-5 sm:p-7 md:p-8 flex flex-col justify-between pointer-events-none">
            {/* Top row: Kicker + Core Value Proposition */}
            <div className="flex flex-col sm:flex-row items-start justify-between gap-3 w-full">
              <div className="flex flex-col gap-1 sm:gap-1.5 max-w-[280px] sm:max-w-[360px] md:max-w-[480px]">
                <span className="text-[#082B61] text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider bg-white/80 backdrop-blur-md px-2.5 py-1 rounded-md inline-block w-fit border border-blue-100 shadow-2xs">
                  Global Pharmaceutical Exporter • Surat Headquarters
                </span>
                <p className="text-[#0B1E48] text-xs sm:text-sm font-semibold leading-snug sm:leading-relaxed bg-white/75 backdrop-blur-md p-2 rounded-lg border border-blue-100/60">
                  We supply finished pharmaceutical formulations globally through qualified manufacturing partners, with private-label, regulatory and export support.
                </p>
              </div>

              {/* Direct Global Export Inquiries CTA badge */}
              <Link
                href="/contact"
                className="pointer-events-auto inline-flex items-center gap-2 text-white text-xs md:text-sm font-semibold bg-[#082B61]/85 hover:bg-[#006EDC] backdrop-blur-md px-3.5 py-1.5 md:px-4 md:py-2 rounded-full border border-white/30 shadow-md transition-all hover:scale-105 shrink-0"
              >
                <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse" />
                <span>Direct Global Export Inquiries</span>
              </Link>
            </div>

            {/* Bottom row: Hero Wordmark */}
            <div className="pt-4">
              <h1 className="text-[#0B1E48] text-[clamp(2.75rem,7.5vw,7.5rem)] font-extrabold leading-[0.82] tracking-tight drop-shadow-sm">
                Zelnex
                <br />
                <span className="text-[#006EDC]">Pharma</span>
              </h1>
            </div>
          </div>
        </MaskedCard>
      </section>



      {/* ══════════════════════════════════════════════════
          SECTION 3: MANUFACTURING & QUALITY EXCELLENCE
          ══════════════════════════════════════════════════ */}
      <section
        ref={(el) => {
          s3Reveal.setContainerRef(el);
        }}
        className="min-h-screen w-full flex flex-col pt-1.5 md:pt-2 px-3 md:px-5 pb-1.5 md:pb-2 gap-1.5 md:gap-2"
      >
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-1.5 md:gap-2">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-1.5 md:gap-2">
            {/* 1. Heading Card */}
            <div
              style={s3Reveal.getAnimStyle(0)}
              className="rounded-xl md:rounded-2xl bg-stone-50 p-5 md:p-7 flex flex-col justify-between flex-[1.25] min-h-[220px] md:min-h-0 border border-neutral-200/60"
            >
              {/* Heading and Description stacked: description directly after heading */}
              <div className="flex flex-col gap-3 md:gap-3.5">
                {/* Heading */}
                <h2 className="text-[clamp(2.4rem,5vw,4.5rem)] font-bold leading-[0.98] text-black tracking-tight">
                  Global
                  <br className="hidden sm:inline" /> Manufacturing
                </h2>

                {/* Description directly after heading */}
                <div className="max-w-2xl flex flex-col gap-1.5 pt-0.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#006EDC] shrink-0" />
                    <h3 className="text-xs sm:text-sm font-bold text-[#082B61] tracking-wide uppercase font-[family-name:var(--font-outfit)]">
                      Qualified Manufacturing Network
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed font-[family-name:var(--font-outfit)] pl-4">
                    GMP-compliant manufacturing capabilities across multiple pharmaceutical dosage forms, supported by quality systems and market-specific documentation.
                  </p>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-4 mt-3 border-t border-neutral-200/70 text-xs md:text-sm font-bold uppercase tracking-wider font-[family-name:var(--font-outfit)]">
                <span className="text-[#082B61]">
                  QUALITY • COMPLIANCE • CONSISTENCY
                </span>
                <span className="text-slate-500 font-semibold text-[10px] md:text-xs">
                  100% WHO-GMP &amp; Zone IVb Stability Assured
                </span>
              </div>
            </div>

            {/* 2. Two Image Cards (side by side) */}
            <div
              style={s3Reveal.getAnimStyle(1)}
              className="flex gap-1.5 md:gap-2 flex-1 min-h-[160px] sm:min-h-[200px] md:min-h-0"
            >
              <div className="flex-1 rounded-xl md:rounded-2xl overflow-hidden relative group border border-black/5 bg-slate-100 shadow-sm">
                <Image
                  src={SECTION3_IMG1}
                  alt="Zelnex pharmaceutical tablets bottle manufacturing"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex-1 rounded-xl md:rounded-2xl overflow-hidden relative group border border-black/5 bg-slate-100 shadow-sm">
                <Image
                  src={SECTION3_IMG2}
                  alt="Effervescent tablets dissolution technology"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* 3. Turnkey Pharmaceutical Supply Chain Card */}
            <div
              style={s3Reveal.getAnimStyle(2)}
              className="rounded-xl md:rounded-2xl bg-gradient-to-br from-white via-[#F8FBFF] to-[#EFF6FF] p-6 sm:p-7 md:p-8 flex flex-col justify-between flex-[1.4] min-h-[260px] md:min-h-0 border border-blue-100/80 shadow-sm relative overflow-hidden group"
            >
              {/* Subtle Dotted World Map Vector Background */}
              <div className="absolute right-0 top-0 w-full sm:w-[68%] lg:w-[60%] h-full pointer-events-none select-none overflow-hidden">
                <svg
                  viewBox="40 20 920 420"
                  className="w-full h-full object-contain object-right"
                  preserveAspectRatio="xMaxYMid meet"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern id="turnkey-dot-pattern" width="5.5" height="5.5" patternUnits="userSpaceOnUse">
                      <circle cx="2.75" cy="2.75" r="1.1" fill="#64748B" />
                    </pattern>
                    <linearGradient id="turnkey-map-fade" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="white" stopOpacity="0" />
                      <stop offset="25%" stopColor="white" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="white" stopOpacity="1" />
                    </linearGradient>
                    <mask id="turnkey-map-mask">
                      <rect x="0" y="0" width="1000" height="500" fill="url(#turnkey-map-fade)" />
                    </mask>
                  </defs>
                  <g mask="url(#turnkey-map-mask)" opacity="0.4" className="transition-opacity duration-500 group-hover:opacity-55">
                    {WORLD_PATHS.map((c, i) => (
                      <path key={`turnkey-map-path-${i}`} d={c.d} fill="url(#turnkey-dot-pattern)" />
                    ))}
                  </g>
                </svg>
              </div>

              {/* Top Text Content */}
              <div className="relative z-10 max-w-xl">
                <p className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5 font-[family-name:var(--font-outfit)]">
                  Surat Global Operations
                </p>

                <h3 className="text-2xl sm:text-3xl md:text-[32px] font-extrabold text-[#082B61] leading-[1.08] tracking-tight mb-2.5 font-[family-name:var(--font-outfit)]">
                  Turnkey
                  <br />
                  Pharmaceutical
                  <br />
                  Supply Chain
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-md font-[family-name:var(--font-outfit)]">
                  From product sourcing to global delivery, we provide end-to-end support tailored to buyer requirements.
                </p>
              </div>

              {/* Bottom Row: CTA Button + Export Metrics */}
              <div className="relative z-10 mt-6 pt-5 border-t border-slate-200/70 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-[#082B61] hover:bg-[#006EDC] text-white rounded-full text-xs sm:text-sm font-bold transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2.5 group/btn w-fit shrink-0 font-[family-name:var(--font-outfit)]"
                >
                  <span>Partner With Us</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="group-hover/btn:translate-x-1 transition-transform"
                  >
                    <path
                      d="M1 7h12m0 0L8 2m5 5L8 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>

                {/* Metrics Row */}
                <div className="flex items-center gap-3 sm:gap-5 flex-wrap sm:flex-nowrap font-[family-name:var(--font-outfit)]">
                  {/* 10+ Global Markets */}
                  <div className="shrink-0">
                    <div className="text-xl sm:text-2xl font-black text-[#082B61] tracking-tight leading-none mb-1">
                      10+
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-medium text-slate-500 leading-tight">
                      Global Markets
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-8 w-px bg-slate-200/80 shrink-0" />

                  {/* 355+ Finished Formulations */}
                  <div className="shrink-0">
                    <div className="text-xl sm:text-2xl font-black text-[#082B61] tracking-tight leading-none mb-1">
                      355+
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-medium text-slate-500 leading-tight">
                      Finished Formulations
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-8 w-px bg-slate-200/80 shrink-0" />

                  {/* Export Support Icon & Label */}
                  <div className="flex items-center gap-2.5 shrink-0">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#006EDC] shrink-0 border border-blue-100">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-bold text-slate-700 leading-tight">
                      Export
                      <br />
                      Support
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Single tall image card */}
          <div
            style={s3Reveal.getAnimStyle(3)}
            className="rounded-xl md:rounded-2xl overflow-hidden relative min-h-[440px] sm:min-h-[380px] md:min-h-0 border border-black/5"
          >
            <Image
              src={SECTION3_BG}
              alt="Quality assurance cleanroom laboratory inspection"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />

            {/* Overlay container */}
            <div className="absolute bottom-3 left-3 right-3 md:bottom-5 md:left-5 md:right-5 flex flex-col sm:flex-row gap-1.5 md:gap-2">
              {/* Overlay Card 1 (white, left) */}
              <Link
                href="/services?service=regulatory"
                className="flex-1 bg-white rounded-xl md:rounded-2xl p-3 md:p-5 flex flex-col justify-between min-h-[120px] sm:h-44 md:h-52 shadow-xl hover:-translate-y-1 transition-transform group border border-black/10"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#006EDC] block mb-1">
                    Regulatory Dossiers
                  </span>
                  <h4 className="text-base sm:text-lg md:text-2xl font-bold text-black leading-tight sm:leading-5 md:leading-7 tracking-tight">
                    The Process
                    <br className="hidden sm:inline" />
                    {" "}of CTD Dossier
                    <br className="hidden sm:inline" />
                    {" "}Registration
                  </h4>
                </div>

                <div className="self-end w-8 h-8 sm:w-9 sm:h-9 md:w-12 md:h-12 rounded-full border border-black flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors mt-2 sm:mt-0">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="rotate-[-45deg]"
                  >
                    <path
                      d="M1 7h12m0 0L8 2m5 5L8 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>

              {/* Overlay Card 2 (white, right) */}
              <Link
                href="/services?service=regulatory"
                className="flex-1 bg-white rounded-xl md:rounded-2xl p-3 md:p-5 flex flex-col justify-between min-h-[120px] sm:h-44 md:h-52 shadow-xl hover:-translate-y-1 transition-transform group border border-black/10"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0f9d8f] block mb-1">
                    ICH Q1A (R2) Validated
                  </span>
                  <h4 className="text-base sm:text-lg md:text-2xl font-bold text-black leading-tight sm:leading-5 md:leading-7 tracking-tight">
                    Zone IVb
                    <br className="hidden sm:inline" />
                    {" "}Climatic
                    <br className="hidden sm:inline" />
                    {" "}Stability
                  </h4>
                </div>

                <div className="self-end w-8 h-8 sm:w-9 sm:h-9 md:w-12 md:h-12 rounded-full border border-black flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors mt-2 sm:mt-0">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="rotate-[-45deg]"
                  >
                    <path
                      d="M1 7h12m0 0L8 2m5 5L8 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          WHY INTERNATIONAL BUYERS CHOOSE ZELNEX
          Direct Buyer Value Matrix: "Why should I work with Zelnex?"
          ══════════════════════════════════════════════════ */}
      <section
        ref={(el) => {
          sWhyReveal.setContainerRef(el);
        }}
        className="w-full flex flex-col pt-1.5 md:pt-2 px-3 md:px-5 pb-1.5 md:pb-2 gap-1.5 md:gap-2"
      >
        {/* Header Card: Matching Global Manufacturing Style */}
        <div
          style={sWhyReveal.getAnimStyle(0)}
          className="rounded-xl md:rounded-2xl bg-stone-50 p-5 md:p-7 flex flex-col justify-between border border-neutral-200/60"
        >
          {/* Heading and Description stacked: description directly after heading */}
          <div className="flex flex-col gap-3 md:gap-3.5">
            {/* Section Heading */}
            <h2 className="text-[clamp(2.2rem,4.5vw,4.2rem)] font-bold leading-[0.98] text-black tracking-tight">
              Why International Buyers Choose Zelnex
            </h2>

            {/* Description directly after heading */}
            <div className="max-w-3xl flex flex-col gap-1.5 pt-0.5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#006EDC] shrink-0" />
                <h3 className="text-xs sm:text-sm font-bold text-[#082B61] tracking-wide uppercase font-[family-name:var(--font-outfit)]">
                  Why Should I Work With Zelnex?
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed font-[family-name:var(--font-outfit)] pl-4">
                Directly addressing international procurement requirements with export-focused supply, 355+ finished formulations, turnkey private labeling, and full regulatory dossiers.
              </p>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-4 mt-3 border-t border-neutral-200/70 text-xs md:text-sm font-bold uppercase tracking-wider font-[family-name:var(--font-outfit)]">
            <span className="text-[#082B61]">
              EXPORT SUPPLY • 355+ FORMULATIONS • PRIVATE LABEL • REGULATORY
            </span>
            <span className="text-slate-500 font-semibold text-[10px] md:text-xs">
              Direct Buyer Value Matrix
            </span>
          </div>
        </div>

        {/* 4 Core Pillars Grid (Alternating 2-Color Palette: Blue & Teal) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1.5 md:gap-2">
          {/* Pillar 1: Global Market Focus (Color 1 - Royal Blue) */}
          <div
            style={sWhyReveal.getAnimStyle(1)}
            className="rounded-xl md:rounded-2xl bg-gradient-to-b from-blue-50/60 via-stone-50/40 to-white hover:bg-white p-5 md:p-6 flex flex-col justify-between min-h-[230px] md:min-h-[260px] border border-blue-200/70 hover:border-[#006EDC]/50 hover:shadow-[0_14px_34px_rgba(0,110,220,0.08)] transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                {/* Premium Vector Logo Container */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#006EDC]/15 via-[#006EDC]/8 to-blue-500/5 border border-[#006EDC]/25 flex items-center justify-center shadow-[0_4px_14px_rgba(0,110,220,0.12),inset_0_1px_1px_rgba(255,255,255,0.9)] group-hover:scale-110 group-hover:border-[#006EDC]/45 group-hover:shadow-[0_8px_22px_rgba(0,110,220,0.22)] transition-all duration-300">
                  <Globe className="w-6 h-6 text-[#006EDC]" strokeWidth={1.8} />
                </div>
                <span className="text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider text-[#006EDC] bg-blue-50/90 px-2.5 py-1 rounded-full border border-blue-200/80 font-[family-name:var(--font-outfit)]">
                  Global Focus
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-black tracking-tight mb-2 font-[family-name:var(--font-outfit)] group-hover:text-[#006EDC] transition-colors">
                Global Market Focus
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed font-[family-name:var(--font-outfit)]">
                Export-oriented supply built around international buyer requirements.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-blue-100 flex items-center justify-between text-[11px] font-semibold text-slate-500 font-[family-name:var(--font-outfit)]">
              <span>International Supply</span>
              <Globe className="w-3.5 h-3.5 text-[#006EDC]" />
            </div>
          </div>

          {/* Pillar 2: Broad Product Portfolio (Color 2 - Pharma Teal/Emerald) */}
          <div
            style={sWhyReveal.getAnimStyle(2)}
            className="rounded-xl md:rounded-2xl bg-gradient-to-b from-teal-50/60 via-stone-50/40 to-white hover:bg-white p-5 md:p-6 flex flex-col justify-between min-h-[230px] md:min-h-[260px] border border-teal-200/70 hover:border-[#0D9488]/50 hover:shadow-[0_14px_34px_rgba(13,148,136,0.08)] transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                {/* Premium Vector Logo Container */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0D9488]/15 via-[#0D9488]/8 to-emerald-500/5 border border-[#0D9488]/25 flex items-center justify-center shadow-[0_4px_14px_rgba(13,148,136,0.12),inset_0_1px_1px_rgba(255,255,255,0.9)] group-hover:scale-110 group-hover:border-[#0D9488]/45 group-hover:shadow-[0_8px_22px_rgba(13,148,136,0.22)] transition-all duration-300">
                  <Package className="w-6 h-6 text-[#0D9488]" strokeWidth={1.8} />
                </div>
                <span className="text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider text-[#0D9488] bg-teal-50/90 px-2.5 py-1 rounded-full border border-teal-200/80 font-[family-name:var(--font-outfit)]">
                  355+ Products
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-black tracking-tight mb-2 font-[family-name:var(--font-outfit)] group-hover:text-[#0D9488] transition-colors">
                Broad Product Portfolio
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed font-[family-name:var(--font-outfit)]">
                355+ finished formulations across multiple therapeutic categories and dosage forms.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-teal-100 flex items-center justify-between text-[11px] font-semibold text-slate-500 font-[family-name:var(--font-outfit)]">
              <span>All Dosage Forms</span>
              <Package className="w-3.5 h-3.5 text-[#0D9488]" />
            </div>
          </div>

          {/* Pillar 3: Flexible Private Label (Color 1 - Royal Blue) */}
          <div
            style={sWhyReveal.getAnimStyle(3)}
            className="rounded-xl md:rounded-2xl bg-gradient-to-b from-blue-50/60 via-stone-50/40 to-white hover:bg-white p-5 md:p-6 flex flex-col justify-between min-h-[230px] md:min-h-[260px] border border-blue-200/70 hover:border-[#006EDC]/50 hover:shadow-[0_14px_34px_rgba(0,110,220,0.08)] transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                {/* Premium Vector Logo Container */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#006EDC]/15 via-[#006EDC]/8 to-blue-500/5 border border-[#006EDC]/25 flex items-center justify-center shadow-[0_4px_14px_rgba(0,110,220,0.12),inset_0_1px_1px_rgba(255,255,255,0.9)] group-hover:scale-110 group-hover:border-[#006EDC]/45 group-hover:shadow-[0_8px_22px_rgba(0,110,220,0.22)] transition-all duration-300">
                  <Handshake className="w-6 h-6 text-[#006EDC]" strokeWidth={1.8} />
                </div>
                <span className="text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider text-[#006EDC] bg-blue-50/90 px-2.5 py-1 rounded-full border border-blue-200/80 font-[family-name:var(--font-outfit)]">
                  Turnkey OEM
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-black tracking-tight mb-2 font-[family-name:var(--font-outfit)] group-hover:text-[#006EDC] transition-colors">
                Flexible Private Label
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed font-[family-name:var(--font-outfit)]">
                Product sourcing, custom packaging and own-brand solutions.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-blue-100 flex items-center justify-between text-[11px] font-semibold text-slate-500 font-[family-name:var(--font-outfit)]">
              <span>Custom Packaging</span>
              <Handshake className="w-3.5 h-3.5 text-[#006EDC]" />
            </div>
          </div>

          {/* Pillar 4: Regulatory Support (Color 2 - Pharma Teal/Emerald) */}
          <div
            style={sWhyReveal.getAnimStyle(4)}
            className="rounded-xl md:rounded-2xl bg-gradient-to-b from-teal-50/60 via-stone-50/40 to-white hover:bg-white p-5 md:p-6 flex flex-col justify-between min-h-[230px] md:min-h-[260px] border border-teal-200/70 hover:border-[#0D9488]/50 hover:shadow-[0_14px_34px_rgba(13,148,136,0.08)] transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                {/* Premium Vector Logo Container */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0D9488]/15 via-[#0D9488]/8 to-emerald-500/5 border border-[#0D9488]/25 flex items-center justify-center shadow-[0_4px_14px_rgba(13,148,136,0.12),inset_0_1px_1px_rgba(255,255,255,0.9)] group-hover:scale-110 group-hover:border-[#0D9488]/45 group-hover:shadow-[0_8px_22px_rgba(13,148,136,0.22)] transition-all duration-300">
                  <FileText className="w-6 h-6 text-[#0D9488]" strokeWidth={1.8} />
                </div>
                <span className="text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider text-[#0D9488] bg-teal-50/90 px-2.5 py-1 rounded-full border border-teal-200/80 font-[family-name:var(--font-outfit)]">
                  CTD / ACTD
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-black tracking-tight mb-2 font-[family-name:var(--font-outfit)] group-hover:text-[#0D9488] transition-colors">
                Regulatory Support
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed font-[family-name:var(--font-outfit)]">
                Quality and regulatory documentation for selected products and markets.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-teal-100 flex items-center justify-between text-[11px] font-semibold text-slate-500 font-[family-name:var(--font-outfit)]">
              <span>Complete Dossiers</span>
              <FileText className="w-3.5 h-3.5 text-[#0D9488]" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 4: 10+ GLOBAL EXPORT FOOTPRINT & DOSSIERS
          ══════════════════════════════════════════════════ */}
      <section
        ref={(el) => {
          s4Reveal.setContainerRef(el);
        }}
        className="w-full flex flex-col pt-1.5 md:pt-2 px-3 md:px-5 pb-1.5 md:pb-2 gap-1.5 md:gap-2"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1.5 md:gap-2">
          {/* Card A: 10+ Sovereign Export Corridors */}
          <div
            style={s4Reveal.getAnimStyle(0)}
            className="md:col-span-2 rounded-xl md:rounded-2xl bg-stone-50 p-6 md:p-10 flex flex-col justify-between min-h-[260px] md:min-h-[320px] border border-neutral-200/60"
          >
            <div>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-neutral-500 block mb-2">
                International Regulatory Filings
              </span>
              <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[0.92] text-black tracking-tight">
                10+ Sovereign
                <br />
                Export Corridors
              </h2>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs md:text-sm font-semibold text-neutral-700 max-w-md leading-relaxed">
                Supplying sovereign Ministries of Health, healthcare distributors, and institutional tenders across LATAM, Africa, CIS, Southeast Asia, and Middle East.
              </p>
              <Link
                href="/global-presence"
                className="px-6 py-3.5 bg-black rounded-full text-white text-sm font-bold hover:bg-neutral-800 transition-colors inline-flex items-center gap-2"
              >
                <span>View Country Matrix</span>
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="rotate-[-45deg]">
                  <path d="M1 7h12m0 0L8 2m5 5L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Card B: CTD / eCTD Dossiers Ready */}
          <div
            style={s4Reveal.getAnimStyle(1)}
            className="rounded-xl md:rounded-2xl bg-zinc-200 p-6 md:p-8 flex flex-col justify-between min-h-[260px] md:min-h-[320px] border border-neutral-300/80"
          >
            <div>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-neutral-600 block mb-2">
                Modules 1 to 5 Ready
              </span>
              <h3 className="text-2xl md:text-4xl font-bold text-black leading-tight tracking-tight">
                150+ Ready
                <br />
                CTD Dossiers
              </h3>
            </div>

            <Link
              href="/services?service=regulatory"
              className="mt-6 self-start px-5 py-2.5 bg-white rounded-full text-black text-xs md:text-sm font-bold hover:bg-black hover:text-white transition-colors"
            >
              Request Dossier List
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 5: QUALITY CONTROL, CLEANROOMS & METRICS
          ══════════════════════════════════════════════════ */}
      <section
        ref={(el) => {
          s5Reveal.setContainerRef(el);
        }}
        className="w-full flex flex-col pt-1.5 md:pt-2 px-3 md:px-5 pb-1.5 md:pb-2 gap-1.5 md:gap-2"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1.5 md:gap-2">
          {/* Quality Card 1 */}
          <div
            style={s5Reveal.getAnimStyle(0)}
            className="rounded-xl md:rounded-2xl bg-stone-50 p-6 md:p-8 flex flex-col justify-between min-h-[220px] border border-neutral-200/60"
          >
            <div>
              <div className="text-3xl md:text-5xl font-extrabold text-black tracking-tight mb-2">
                3+ Years
              </div>
              <h3 className="text-lg md:text-xl font-bold text-black tracking-tight mb-2">
                Industry Experience
              </h3>
              <p className="text-xs md:text-sm text-neutral-600 font-medium leading-relaxed">
                Supporting international healthcare supply through finished formulations, contract manufacturing, regulatory documentation, and export coordination.
              </p>
            </div>
            <div className="mt-4 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
              Commercial Export Track Record
            </div>
          </div>

          {/* Quality Card 2 */}
          <div
            style={s5Reveal.getAnimStyle(1)}
            className="rounded-xl md:rounded-2xl bg-zinc-200 p-6 md:p-8 flex flex-col justify-between min-h-[220px] border border-neutral-300/80"
          >
            <div>
              <div className="text-3xl md:text-5xl font-extrabold text-black tracking-tight mb-2">
                HPLC
              </div>
              <h3 className="text-lg md:text-xl font-bold text-black tracking-tight mb-2">
                Analytical Quality Testing
              </h3>
              <p className="text-xs md:text-sm text-neutral-700 font-medium leading-relaxed">
                Raw material, in-process and finished-product testing supported by validated analytical methods and Certificates of Analysis.
              </p>
            </div>
            <div className="mt-4 text-[10px] font-bold uppercase tracking-wider text-neutral-500">
              Quality Assurance Laboratory
            </div>
          </div>

          {/* Quality Card 3 */}
          <div
            style={s5Reveal.getAnimStyle(2)}
            className="rounded-xl md:rounded-2xl bg-stone-100 p-6 md:p-8 flex flex-col justify-between min-h-[220px] border border-neutral-200"
          >
            <div>
              <div className="text-3xl md:text-5xl font-extrabold text-black tracking-tight mb-2">
                Zone IVb
              </div>
              <h3 className="text-lg md:text-xl font-bold text-black tracking-tight mb-2">
                Tropical Climatic Stability
              </h3>
              <p className="text-xs md:text-sm text-neutral-600 font-medium leading-relaxed">
                ICH Q1A (R2) chambers operating at 40°C / 75% RH verifying chemical potency for export destinations.
              </p>
            </div>
            <div className="mt-4 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
              ICH Q1A (R2) Real-Time Validation
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 6: SURAT HEADQUARTERS & CONTRACT MANUFACTURING
          ══════════════════════════════════════════════════ */}
      <section
        ref={(el) => {
          s6Reveal.setContainerRef(el);
        }}
        className="w-full flex flex-col pt-1.5 md:pt-2 px-3 md:px-5 pb-1.5 md:pb-2 gap-1.5 md:gap-2"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 md:gap-2">
          {/* Left: Surat Global HQ Address */}
          <div
            style={s6Reveal.getAnimStyle(0)}
            className="rounded-xl md:rounded-2xl bg-white p-6 sm:p-8 md:p-10 flex flex-col justify-between border border-neutral-200/80 shadow-sm min-h-[300px] md:min-h-[320px] relative overflow-hidden group"
          >
            {/* Building Image Backdrop */}
            <div className="absolute right-0 top-0 bottom-0 w-[42%] sm:w-[46%] md:w-[48%] lg:w-[45%] h-full pointer-events-none select-none overflow-hidden">
              <Image
                src="/about/zelnex-hq-corner.jpg"
                alt="Zelnex Global Operations Headquarters"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              {/* Smooth gentle feathering on the left seam */}
              <div className="absolute inset-y-0 left-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-white via-white/70 to-transparent z-10" />
              <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/40 to-transparent sm:hidden z-10" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-sm sm:max-w-md">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500 block mb-2 font-[family-name:var(--font-outfit)]">
                Global Operations Headquarters
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-black tracking-tight leading-[1.12] mb-3 font-[family-name:var(--font-outfit)]">
                117 – Platinum Plaza,
                <br />
                Surat – 395013, Gujarat, India
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed font-[family-name:var(--font-outfit)]">
                Near VT Circle, Sarthana Jakatnaka. Strategically connected to major ports and pharmaceutical logistics corridors.
              </p>
            </div>

            {/* Button */}
            <div className="mt-6 relative z-10">
              <a
                href="https://maps.app.goo.gl/uiLQiWR9muJXici28"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start px-6 py-2.5 rounded-full border border-slate-800 text-slate-900 hover:bg-black hover:text-white text-xs sm:text-sm font-bold transition-all inline-flex items-center gap-2 group/btn font-[family-name:var(--font-outfit)] shadow-sm"
              >
                <span>View on Map</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="group-hover/btn:translate-x-1 transition-transform"
                >
                  <path
                    d="M1 7h12m0 0L8 2m5 5L8 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Institutional Partnership */}
          <div
            style={s6Reveal.getAnimStyle(1)}
            className="rounded-xl md:rounded-2xl bg-[#041226] text-white p-6 sm:p-8 md:p-10 flex flex-col justify-between border border-blue-950/80 shadow-md min-h-[300px] md:min-h-[320px] relative overflow-hidden group"
          >
            {/* Glowing Earth Globe Backdrop */}
            <div className="absolute -right-12 -bottom-16 sm:-right-8 sm:-bottom-12 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 pointer-events-none select-none opacity-85 group-hover:scale-105 transition-transform duration-700">
              <Image
                src="/about/earth-globe.jpg"
                alt="Global Reach"
                fill
                sizes="320px"
                className="object-cover rounded-full mix-blend-screen"
              />
            </div>

            {/* Top Row: Subtitle + 4-line mini text stack */}
            <div className="flex items-start justify-between gap-4 relative z-10 mb-4">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400 block font-[family-name:var(--font-outfit)]">
                Institutional Partnership
              </span>
              <div className="text-right text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight select-none font-[family-name:var(--font-outfit)]">
                <div>Partner</div>
                <div>Manufacture</div>
                <div>Supply</div>
                <div className="text-slate-300">Grow Together</div>
              </div>
            </div>

            {/* Middle Content */}
            <div className="relative z-10 max-w-sm sm:max-w-md">
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-white tracking-tight leading-[1.12] mb-3 font-[family-name:var(--font-outfit)]">
                Contract Manufacturing
                <br />
                &amp; Dossier Licensing
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed font-[family-name:var(--font-outfit)]">
                Custom batch sizes, secondary packaging localization, and turnkey regulatory filing support.
              </p>
            </div>

            {/* Button */}
            <div className="mt-6 relative z-10">
              <Link
                href="/contact?subject=Contract%20Manufacturing%20%26%20Dossier%20Licensing"
                className="self-start px-6 py-2.5 rounded-full border border-white/40 text-white hover:border-white hover:bg-white/10 text-xs sm:text-sm font-bold transition-all inline-flex items-center gap-2 group/btn font-[family-name:var(--font-outfit)] shadow-sm"
              >
                <span>Start a Discussion</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="group-hover/btn:translate-x-1 transition-transform"
                >
                  <path
                    d="M1 7h12m0 0L8 2m5 5L8 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Signature Organic Wave Ribbon Line (from Blogs Section) ── */}
      <div className="my-10 md:my-14 relative overflow-hidden py-2 w-full" aria-hidden="true">
        <SectionDivider from="#082B61" to="#ffffff" height={42} />
        <SectionDivider from="#ffffff" to="#082B61" flip height={42} />
      </div>

      {/* ── Official Institutional Footer ── */}
      <Footer />
    </div>
  );
}
