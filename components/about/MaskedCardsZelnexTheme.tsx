'use client';

import React, { useState, useEffect, useRef, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CapsuleFlow3D } from '@/components/about/CapsuleFlow3D';
import { SectionDivider } from '@/components/SectionDivider';

// High-Resolution Pharmaceutical Imagery for Zelnex
const HERO_IMAGE =
  'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1920&q=85&auto=format&fit=crop';

const SECTION2_IMAGE =
  'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=1920&q=85&auto=format&fit=crop';

const SECTION3_IMG1 = '/products/sterile-vial.jpg';
const SECTION3_IMG2 = '/products/tablets-capsules.jpg';
const SECTION3_BG =
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&q=85&auto=format&fit=crop';



// Zelnex Core Feature Bars & Formulations
const featureBars = [
  '100% WHO-GMP Validated',
  '150+ Ready CTD/eCTD Dossiers',
  '65+ Sovereign Export Corridors',
];

interface ServiceItem {
  name: string;
  num: string | null;
  category: string;
  active: boolean;
}

const initialServices: ServiceItem[] = [
  {
    name: 'Solid\nOrals',
    num: '01',
    category: 'Tablets & Capsules',
    active: true,
  },
  {
    name: 'Liquid\nOrals',
    num: '02',
    category: 'Syrups & Suspensions',
    active: false,
  },
  {
    name: 'Sterile\nInjectables',
    num: '03',
    category: 'Vials & Ampoules',
    active: false,
  },
  {
    name: 'CTD/eCTD\nDossiers',
    num: '04',
    category: 'MOH Filings (Modules 1-5)',
    active: false,
  },
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
    const img = new Image();
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
  bgColor = '#f78d38',
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
  const [services, setServices] = useState<ServiceItem[]>(initialServices);

  const isMobile = useIsMobile();

  // Section 1 Mask Refs & Reveal
  const section1Ref = useRef<HTMLElement | null>(null);
  const s1CardRefs = useRef<(HTMLElement | null)[]>([]);
  const s1Positions = useMaskPositions(section1Ref, s1CardRefs);
  const s1Aspect = useImageAspect(HERO_IMAGE);
  const s1Reveal = useStaggeredReveal(4, 0.15);

  // Section 2 Mask Refs & Reveal
  const section2Ref = useRef<HTMLElement | null>(null);
  const s2CardRefs = useRef<(HTMLElement | null)[]>([]);
  const s2Positions = useMaskPositions(section2Ref, s2CardRefs);
  const s2Aspect = useImageAspect(SECTION2_IMAGE);
  const s2Reveal = useStaggeredReveal(4, 0.15);

  // Section 3 Reveal
  const s3Reveal = useStaggeredReveal(4, 0.15);

  // Section 4 Reveal (Global Footprint)
  const s4Reveal = useStaggeredReveal(3, 0.15);

  // Section 5 Reveal (Quality & Cleanrooms)
  const s5Reveal = useStaggeredReveal(3, 0.15);

  // Section 6 Reveal (Surat HQ & Governance)
  const s6Reveal = useStaggeredReveal(3, 0.15);

  const toggleServiceActive = (index: number) => {
    setServices((prev) =>
      prev.map((s, i) => ({
        ...s,
        active: i === index,
      }))
    );
  };

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
            bgColor="#f78d38"
            position={s1Positions[i]}
            imageAspect={s1Aspect}
            focalX={isMobile ? 0.7 : 0.8}
            cardRef={(el) => {
              s1CardRefs.current[i] = el;
            }}
            style={s1Reveal.getAnimStyle(i)}
            className="w-full h-11 sm:h-13 md:h-16 shrink-0 rounded-xl md:rounded-2xl overflow-hidden relative border border-black/5 shadow-sm"
          >
            <span className="flex items-center justify-center h-full text-black text-xs sm:text-base md:text-xl lg:text-2xl font-bold text-center relative z-10 px-2 sm:px-4">
              {bar}
            </span>
          </MaskedCard>
        ))}

        {/* Main Hero Card (4th card, index 3) */}
        <MaskedCard
          bgImage={HERO_IMAGE}
          bgColor="#f78d38"
          position={s1Positions[3]}
          imageAspect={s1Aspect}
          focalX={isMobile ? 0.7 : 0.8}
          cardRef={(el) => {
            s1CardRefs.current[3] = el;
          }}
          style={s1Reveal.getAnimStyle(3)}
          className="w-full flex-1 min-h-[320px] md:min-h-[380px] rounded-xl md:rounded-2xl overflow-hidden relative border border-black/5 shadow-md"
        >
          {/* Interactive 3D Capsule Flow from test.html filling the card */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-auto">
            <CapsuleFlow3D />
          </div>

          {/* Card Inner Content — Flexbox layout ensures top information and bottom title never collide */}
          <div className="relative z-10 h-full w-full p-5 sm:p-7 md:p-8 flex flex-col justify-between pointer-events-none">
            {/* Top row: Kicker + Core Value Proposition */}
            <div className="flex flex-col sm:flex-row items-start justify-between gap-3 w-full">
              <div className="flex flex-col gap-1 sm:gap-1.5 max-w-[280px] sm:max-w-[360px] md:max-w-[480px]">
                <span className="text-black text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider">
                  Global Pharmaceutical Exporter • Surat Headquarters
                </span>
                <p className="text-black/90 text-xs sm:text-sm font-semibold leading-snug sm:leading-relaxed">
                  We manufacture & export high-potency pharmaceuticals matching WHO-GMP and international pharmacopeias.
                </p>
              </div>

              {/* Direct Global Export Inquiries CTA badge */}
              <Link
                href="/contact"
                className="pointer-events-auto inline-flex items-center gap-2 text-white text-xs md:text-sm font-semibold bg-black/50 hover:bg-black/75 backdrop-blur-md px-3.5 py-1.5 md:px-4 md:py-2 rounded-full border border-white/20 shadow-sm transition-all hover:scale-105 shrink-0"
              >
                <span className="w-2 h-2 rounded-full bg-[#0f9d8f] animate-pulse" />
                <span>Direct Global Export Inquiries</span>
              </Link>
            </div>

            {/* Bottom row: Hero Wordmark */}
            <div className="pt-4">
              <h1 className="text-black text-[clamp(2.75rem,7.5vw,7.5rem)] font-extrabold leading-[0.82] tracking-tight">
                Zelnex
                <br />
                Pharma
              </h1>
            </div>
          </div>
        </MaskedCard>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 2: FORMULATIONS & THERAPEUTIC GALLERY
          ══════════════════════════════════════════════════ */}
      <section
        ref={(el) => {
          section2Ref.current = el;
          s2Reveal.setContainerRef(el);
        }}
        className="min-h-screen w-full flex flex-col pt-1.5 md:pt-2 px-3 md:px-5 pb-1.5 md:pb-2 gap-1.5 md:gap-2"
      >
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_auto_auto_auto] md:grid-rows-[1fr_1fr_0.8fr] gap-1.5 md:gap-2">
          {/* Card 0 - Top Left ("Formulation Gallery") */}
          <MaskedCard
            bgImage={SECTION2_IMAGE}
            bgColor="#f78d38"
            position={s2Positions[0]}
            imageAspect={s2Aspect}
            focalX={isMobile ? 0.65 : 0.8}
            cardRef={(el) => {
              s2CardRefs.current[0] = el;
            }}
            style={s2Reveal.getAnimStyle(0)}
            className="rounded-xl md:rounded-2xl overflow-hidden relative min-h-[160px] md:min-h-0 border border-black/5"
          >
            <h2 className="absolute top-4 left-5 md:top-6 md:left-7 text-black text-2xl md:text-3xl font-bold z-10 tracking-tight">
              Formulation Gallery
            </h2>
            <p className="absolute bottom-4 left-5 md:bottom-6 md:left-7 text-black text-xs md:text-sm font-semibold z-10">
              350+ WHO-GMP Certified Finished Medicines
            </p>
          </MaskedCard>

          {/* Card 1 - Top Right (spans 2 rows on desktop) */}
          <MaskedCard
            bgImage={SECTION2_IMAGE}
            bgColor="#f78d38"
            position={s2Positions[1]}
            imageAspect={s2Aspect}
            focalX={isMobile ? 0.65 : 0.8}
            cardRef={(el) => {
              s2CardRefs.current[1] = el;
            }}
            style={s2Reveal.getAnimStyle(1)}
            className="md:row-span-2 rounded-xl md:rounded-2xl overflow-hidden relative min-h-[200px] md:min-h-0 border border-black/5"
          >
            <div className="absolute bottom-16 left-5 md:bottom-20 md:left-7 text-black text-xs md:text-sm font-bold leading-4 md:leading-5 z-10 max-w-[280px] md:max-w-[340px]">
              If you want ready CTD/eCTD dossiers or finished generics,
              <br />
              contact our Surat export desk for contract manufacturing.
            </div>

            <Link
              href="/contact"
              className="absolute bottom-4 right-4 md:bottom-6 md:right-6 px-5 py-3 md:px-8 md:py-5 bg-white rounded-full text-black text-base md:text-xl font-bold z-10 hover:scale-105 transition-transform shadow-lg"
            >
              Inquire Now
            </Link>
          </MaskedCard>

          {/* Card 2 - Bottom Left ("Global Healthcare") */}
          <MaskedCard
            bgImage={SECTION2_IMAGE}
            bgColor="#f78d38"
            position={s2Positions[2]}
            imageAspect={s2Aspect}
            focalX={isMobile ? 0.65 : 0.8}
            cardRef={(el) => {
              s2CardRefs.current[2] = el;
            }}
            style={s2Reveal.getAnimStyle(2)}
            className="rounded-xl md:rounded-2xl overflow-hidden relative min-h-[160px] md:min-h-0 border border-black/5"
          >
            <h2 className="absolute top-4 left-5 md:top-6 md:left-7 text-black text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.9] z-10 tracking-tight">
              Global
              <br />
              Healthcare
            </h2>
          </MaskedCard>

          {/* Card 3 - Bottom Full Width (Services) */}
          <MaskedCard
            bgImage={SECTION2_IMAGE}
            bgColor="#f78d38"
            position={s2Positions[3]}
            imageAspect={s2Aspect}
            focalX={isMobile ? 0.65 : 0.8}
            cardRef={(el) => {
              s2CardRefs.current[3] = el;
            }}
            style={s2Reveal.getAnimStyle(3)}
            className="col-span-1 md:col-span-2 rounded-xl md:rounded-2xl overflow-hidden relative min-h-[200px] md:min-h-0 border border-black/5"
          >
            <div className="absolute inset-0 z-10 flex flex-wrap md:flex-nowrap gap-1.5 md:gap-2 p-2 md:p-3">
              {services.map((svc, idx) => (
                <div
                  key={svc.name}
                  onClick={() => toggleServiceActive(idx)}
                  className={`flex-1 min-w-[calc(50%-4px)] md:min-w-0 rounded-xl md:rounded-2xl p-3 md:p-5 flex flex-col justify-between cursor-pointer transition-all ${
                    svc.active
                      ? 'bg-white/95 backdrop-blur-md shadow-lg border border-black/10'
                      : 'bg-white/20 backdrop-blur-xl hover:bg-white/30 border border-white/30'
                  }`}
                >
                  <div>
                    <span
                      className={`text-[9px] md:text-[10px] font-bold uppercase tracking-wider block mb-1 ${
                        svc.active ? 'text-neutral-500' : 'text-white/80'
                      }`}
                    >
                      {svc.category}
                    </span>
                    <h3
                      className={`text-xl md:text-4xl font-bold leading-[1.05] whitespace-pre-line tracking-tight ${
                        svc.active ? 'text-black' : 'text-white'
                      }`}
                    >
                      {svc.name}
                    </h3>
                  </div>

                  {svc.num && (
                    <div
                      className={`self-end w-8 h-8 md:w-12 md:h-12 rounded-full border flex items-center justify-center text-xs md:text-sm font-semibold transition-colors ${
                        svc.active
                          ? 'border-black text-black bg-black/5'
                          : 'border-white text-white bg-white/10'
                      }`}
                    >
                      {svc.num}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </MaskedCard>
        </div>
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
              className="rounded-xl md:rounded-2xl bg-stone-50 p-5 md:p-7 flex flex-col justify-between flex-[1.2] min-h-[180px] md:min-h-0 border border-neutral-200/60"
            >
              <h2 className="text-[clamp(3rem,7vw,6.5rem)] font-bold leading-[0.95] text-black tracking-tight">
                Global
                <br />
                Manufacturing
              </h2>
              <p className="text-xs md:text-sm font-semibold text-black uppercase tracking-wider">
                100% WHO-GMP & Zone IVb Stability Assured
              </p>
            </div>

            {/* 2. Two Image Cards (side by side) */}
            <div
              style={s3Reveal.getAnimStyle(1)}
              className="flex gap-1.5 md:gap-2 flex-1 min-h-[140px] md:min-h-0"
            >
              <div className="flex-1 rounded-xl md:rounded-2xl overflow-hidden relative group">
                <img
                  src={SECTION3_IMG1}
                  alt="Sterile vials and ampoules formulation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex-1 rounded-xl md:rounded-2xl overflow-hidden relative group">
                <img
                  src={SECTION3_IMG2}
                  alt="High potency tablets and capsules manufacturing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* 3. Consultation Card */}
            <div
              style={s3Reveal.getAnimStyle(2)}
              className="rounded-xl md:rounded-2xl bg-zinc-200 p-5 md:p-7 flex items-end justify-between flex-[0.8] min-h-[160px] md:min-h-0 border border-neutral-300/80"
            >
              <div>
                <p className="text-xs md:text-sm font-semibold text-black mb-2 md:mb-3 uppercase tracking-wider">
                  Surat Global Operations
                </p>
                <h3 className="text-xl md:text-3xl font-bold text-black leading-6 md:leading-8 tracking-tight">
                  Turnkey
                  <br />
                  Pharmaceutical
                  <br />
                  Supply Chain
                </h3>
              </div>

              <Link
                href="/contact"
                className="px-5 py-3 md:px-8 md:py-5 bg-white rounded-full text-black text-base md:text-xl font-bold hover:scale-105 transition-transform shadow-md"
              >
                Partner With Us
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Single tall image card */}
          <div
            style={s3Reveal.getAnimStyle(3)}
            className="rounded-xl md:rounded-2xl overflow-hidden relative min-h-[440px] sm:min-h-[380px] md:min-h-0 border border-black/5"
          >
            <img
              src={SECTION3_BG}
              alt="Quality assurance cleanroom laboratory inspection"
              className="w-full h-full object-cover"
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
          SECTION 4: 65+ GLOBAL EXPORT FOOTPRINT & DOSSIERS
          ══════════════════════════════════════════════════ */}
      <section
        ref={(el) => {
          s4Reveal.setContainerRef(el);
        }}
        className="w-full flex flex-col pt-1.5 md:pt-2 px-3 md:px-5 pb-1.5 md:pb-2 gap-1.5 md:gap-2"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1.5 md:gap-2">
          {/* Card A: 65+ Sovereign Export Corridors */}
          <div
            style={s4Reveal.getAnimStyle(0)}
            className="md:col-span-2 rounded-xl md:rounded-2xl bg-stone-50 p-6 md:p-10 flex flex-col justify-between min-h-[260px] md:min-h-[320px] border border-neutral-200/60"
          >
            <div>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-neutral-500 block mb-2">
                International Regulatory Filings
              </span>
              <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[0.92] text-black tracking-tight">
                65+ Sovereign
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
              <p className="mt-3 text-xs md:text-sm text-neutral-700 font-medium leading-relaxed">
                Pre-compiled bioequivalence, dissolution profiles, and 36-month stability protocols for rapid MOH market authorization.
              </p>
            </div>

            <Link
              href="/regulatory"
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
                0.3 μm
              </div>
              <h3 className="text-lg md:text-xl font-bold text-black tracking-tight mb-2">
                ISO Class 5 & 7 Cleanrooms
              </h3>
              <p className="text-xs md:text-sm text-neutral-600 font-medium leading-relaxed">
                Positive pressure suites with terminal HEPA filtration, 20+ ACPH, and zero-dead-angle coving.
              </p>
            </div>
            <div className="mt-4 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
              Aseptic Environmental Control
            </div>
          </div>

          {/* Quality Card 2 */}
          <div
            style={s5Reveal.getAnimStyle(1)}
            className="rounded-xl md:rounded-2xl bg-zinc-200 p-6 md:p-8 flex flex-col justify-between min-h-[220px] border border-neutral-300/80"
          >
            <div>
              <div className="text-3xl md:text-5xl font-extrabold text-black tracking-tight mb-2">
                100%
              </div>
              <h3 className="text-lg md:text-xl font-bold text-black tracking-tight mb-2">
                HPLC Analytical Testing
              </h3>
              <p className="text-xs md:text-sm text-neutral-700 font-medium leading-relaxed">
                Raw material, in-process assay verification, and batch release with strict Certificate of Analysis (CoA).
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-1.5 md:gap-2">
          {/* Left: Surat Global HQ Address & Contacts */}
          <div
            style={s6Reveal.getAnimStyle(0)}
            className="md:col-span-7 rounded-xl md:rounded-2xl bg-stone-50 p-6 md:p-10 flex flex-col justify-between border border-neutral-200/60 min-h-[280px]"
          >
            <div>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-neutral-500 block mb-2">
                Global Operations Headquarters
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-black tracking-tight leading-tight mb-4">
                117 - Platinum Plaza,
                <br />
                Surat - 395013, Gujarat, India
              </h2>
              <p className="text-xs md:text-sm text-neutral-600 font-medium max-w-lg leading-relaxed">
                Near VT Circle, Sarthana Jakatnaka. Strategically connected to major ports and pharmaceutical logistics corridors.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-4 text-xs md:text-sm font-semibold text-black">
              <div>Phone: <span className="font-bold">+91 93282 86164</span></div>
              <div>Email: <span className="font-bold">export@zelnexpharma.com</span></div>
            </div>
          </div>

          {/* Right: Partner CTA */}
          <div
            style={s6Reveal.getAnimStyle(1)}
            className="md:col-span-5 rounded-xl md:rounded-2xl bg-black text-white p-6 md:p-10 flex flex-col justify-between border border-neutral-800 min-h-[280px]"
          >
            <div>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-neutral-400 block mb-2">
                Institutional Partnership
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                Contract Manufacturing & Dossier Licensing
              </h3>
              <p className="mt-3 text-xs md:text-sm text-neutral-300 font-normal leading-relaxed">
                Custom batch sizes, secondary packaging localization, and turnkey regulatory filing support.
              </p>
            </div>

            <Link
              href="/contact"
              className="mt-6 self-start px-6 py-3.5 bg-white text-black rounded-full text-sm font-bold hover:bg-neutral-200 transition-colors inline-flex items-center gap-2"
            >
              <span>Partner With Zelnex</span>
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="rotate-[-45deg]">
                <path d="M1 7h12m0 0L8 2m5 5L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
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
