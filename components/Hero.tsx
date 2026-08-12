"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlassmorphismCanvas } from "./GlassmorphismCanvas";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const STATS = [
  {
    number: "65+",
    label: "Countries\nWorldwide",
    iconSrc: "/herocomp/world.png",
    alt: "Countries Worldwide",
  },
  {
    number: "350+",
    label: "Quality\nProducts",
    iconSrc: "/herocomp/pillsandbottle.png",
    alt: "Quality Products",
  },
  {
    number: "18+",
    label: "Therapeutic\nAreas",
    iconSrc: "/herocomp/molecule.png",
    alt: "Therapeutic Areas",
  },
  {
    number: "12+",
    label: "Manufacturing\nFacilities",
    iconSrc: "/herocomp/industrial-park.png",
    alt: "Manufacturing Facilities",
  },
];

const SIDEBAR_ITEMS = [
  {
    label: "Products",
    href: "#products",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="7" width="18" height="14" rx="3"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="11" x2="12" y2="17"/>
        <line x1="9" y1="14" x2="15" y2="14"/>
      </svg>
    ),
  },
  {
    label: "Enquiry",
    href: "#contact",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        <line x1="9" y1="11" x2="15" y2="11"/>
        <line x1="9" y1="14" x2="13" y2="14"/>
      </svg>
    ),
  },
  {
    label: "Download",
    href: "#",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
    ),
  },
  {
    label: "Location",
    href: "#network",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
];

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const [activeSidebarIndex, setActiveSidebarIndex] = useState(0);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.from(".hz-reveal", {
        y: 28,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".hz-sidebar", {
        x: -32,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.15,
      });

      gsap.from(".hz-stats", {
        y: 24,
        opacity: 0,
        scale: 0.98,
        duration: 0.85,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.to(".hz-bg-img", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: rootRef },
  );

  return (
    <section
      id="home"
      ref={rootRef}
      className="relative min-h-[100svh] overflow-hidden"
      style={{ background: "#e8f0f8" }}
    >
      {/* Background image */}
      <div className="hz-bg-img absolute inset-0">
        <Image
          src="/herobackround.png"
          alt=""
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "right center" }}
          sizes="100vw"
        />
        {/* Transparent background gradient overlay permitting glass blur pass-through at bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(234,246,255,0.85) 0%, rgba(234,246,255,0.45) 60%, rgba(180,215,245,0.15) 100%), linear-gradient(90deg, rgba(234,246,255,0.85) 0%, rgba(234,246,255,0.4) 40%, rgba(234,246,255,0) 65%)",
          }}
          aria-hidden
        />
      </div>

      {/* ── 3D Slanted Parallelogram Floating Sidebar (Slim & Sleek Profile) ── */}
      <aside
        className="hz-sidebar absolute left-8 top-1/2 z-30 hidden -translate-y-1/2 md:flex flex-col items-center select-none"
      >
        <div
          className="sb-floating-panel relative group"
          style={{ transform: "skewY(-10deg)" }}
        >
          {/* Seamless 3D Right Side Extrusion Wall */}
          <div
            className="absolute top-[10px] bottom-[10px] -right-[5px] w-[6px] rounded-r-[10px] pointer-events-none z-0"
            style={{
              background:
                "linear-gradient(180deg, #020d2d 0%, #03143d 50%, #01081e 100%)",
              borderRight: "1px solid rgba(255, 255, 255, 0.15)",
              boxShadow: "inset -1px 0 3px rgba(0, 0, 0, 0.7)",
            }}
          />

          {/* Main Slanted Front Face Card Container (Slim 86px Width) */}
          <div
            className="relative flex flex-col items-center w-[86px] h-[480px] rounded-[18px] overflow-hidden transition-all duration-300 z-10"
            style={{
              background:
                "linear-gradient(180deg, #052264 0%, #03184a 45%, #010c2c 100%)",
              backdropFilter: "blur(20px) saturate(1.5)",
              WebkitBackdropFilter: "blur(20px) saturate(1.5)",
              border: "1.2px solid rgba(255, 255, 255, 0.20)",
              boxShadow: `
                10px 18px 35px rgba(0, 12, 45, 0.52),
                inset 0 1.5px 0 rgba(255, 255, 255, 0.45),
                inset -1px 0 0 rgba(255, 255, 255, 0.2)
              `,
            }}
          >
            {/* Top-Right Glowing Specular Lens Flare Dot */}
            <div
              className="absolute -right-[2px] top-[25%] w-[5px] h-[5px] rounded-full pointer-events-none z-30"
              style={{
                background: "#ffffff",
                boxShadow:
                  "0 0 6px #ffffff, 0 0 14px #00B8F2, 0 0 20px #00B8F2",
              }}
            />

            {/* Seamless Bottom Edge Electric Cyan Glowing Rim */}
            <div
              className="absolute bottom-0 inset-x-0 h-[4.5px] rounded-b-[18px] pointer-events-none z-20"
              style={{
                background:
                  "linear-gradient(90deg, #0044cc 0%, #00d2ff 50%, #0066ff 100%)",
                boxShadow:
                  "0 -1px 8px rgba(0, 210, 255, 0.9), 0 -4px 14px rgba(0, 175, 255, 0.6)",
              }}
            />

            {/* Inner Un-skewed Content Wrapper */}
            <div
              className="w-full h-full flex flex-col justify-between items-center z-20 pb-1"
              style={{ transform: "skewY(10deg)" }}
            >
              {SIDEBAR_ITEMS.map((item, index) => {
                const isActive = activeSidebarIndex === index;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setActiveSidebarIndex(index)}
                    className="group/item relative flex flex-col items-center justify-center flex-1 w-full px-1.5 transition-all duration-300 hover:bg-white/[0.04]"
                    style={{
                      borderBottom:
                        index < SIDEBAR_ITEMS.length - 1
                          ? "1px solid rgba(255, 255, 255, 0.12)"
                          : "none",
                    }}
                  >
                    {/* Active White Circle Badge vs Inactive Cyan Icon */}
                    {isActive ? (
                      <div
                        className="flex items-center justify-center transition-all duration-300 scale-105"
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "50%",
                          background: "#ffffff",
                          color: "#05184a",
                          boxShadow:
                            "0 5px 15px rgba(0, 0, 0, 0.35), inset 0 1.5px 0 #ffffff",
                        }}
                      >
                        {item.icon}
                      </div>
                    ) : (
                      <div
                        className="flex items-center justify-center transition-all duration-300 group-hover/item:scale-110"
                        style={{
                          width: "36px",
                          height: "36px",
                          color: "#00B8F2",
                          filter:
                            "drop-shadow(0 0 5px rgba(0, 184, 242, 0.5))",
                        }}
                      >
                        {item.icon}
                      </div>
                    )}

                    {/* Label */}
                    <span
                      className={`mt-1.5 text-[12px] tracking-wide transition-colors ${
                        isActive
                          ? "text-white font-semibold"
                          : "text-white/85 font-medium group-hover/item:text-white"
                      }`}
                    >
                      {item.label}
                    </span>

                    {/* Active Cyan Underline Pill */}
                    {isActive && (
                      <div
                        className="mt-1 w-5 h-[2.5px] rounded-full"
                        style={{
                          background: "#00B8F2",
                          boxShadow: "0 0 7px #00B8F2",
                        }}
                      />
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Floor Atmospheric Soft Shadow */}
        <div
          className="pointer-events-none mt-3"
          style={{
            width: "70px",
            height: "12px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at center, rgba(0, 20, 65, 0.4), rgba(0, 175, 255, 0.1) 50%, transparent 75%)",
            filter: "blur(4px)",
          }}
        />
      </aside>

      {/* ── Hero content ──────────────────────────────────── */}
      <div className="relative z-10 flex min-h-[100svh] flex-col justify-center pb-40 pt-28 section-pad">
        <div className="ml-0 max-w-[520px] md:ml-36">
          <h1
            className="hz-reveal font-display text-[2.6rem] font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]"
            style={{ color: "#082B61" }}
          >
            Better Health
            <br />
            for a Better World
          </h1>

          {/* Accent divider */}
          <div
            className="hz-reveal my-5 h-[3px] w-12 rounded-full"
            style={{
              background: "linear-gradient(90deg, #006EDC, #08BCEB)",
            }}
          />

          <p
            className="hz-reveal text-base leading-relaxed md:text-[17px]"
            style={{ color: "rgba(15, 45, 85, 0.85)" }}
          >
            We are committed to improving lives
            <br />
            through innovative medicines and
            <br />
            trusted healthcare solutions.
          </p>

          <div className="hz-reveal mt-9">
            <Link
              href="#products"
              className="inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #006EDC 0%, #082B61 100%)",
                boxShadow:
                  "0 6px 20px rgba(0, 110, 220, 0.35), 0 2px 4px rgba(0,0,0,0.08)",
              }}
            >
              Explore Our Products
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Glass Stats Bar — full port of reference HTML ── */}
      <div className="hz-stats absolute bottom-6 left-6 right-6 md:left-36 md:right-8 z-10 max-w-[1120px] mx-auto">
        <div
          className="relative overflow-hidden select-none"
          style={{
            borderRadius: "clamp(16px, 4vw, 30px)",
            background: `
              radial-gradient(120% 140% at 14% -12%, rgba(255,255,255,.38), rgba(255,255,255,0) 55%),
              radial-gradient(95% 130% at 102% 118%, rgba(60,115,205,.14), rgba(255,255,255,0) 60%),
              linear-gradient(135deg, rgba(255,255,255,.14), rgba(255,255,255,.03))
            `,
            backdropFilter: "blur(9px) saturate(150%)",
            WebkitBackdropFilter: "blur(9px) saturate(150%)",
            filter: "drop-shadow(0 18px 40px rgba(20,60,130,.16)) drop-shadow(0 3px 10px rgba(20,60,130,.10))",
          }}
        >
          {/* ::before — top-left light sheen */}
          <div
            className="absolute inset-0 pointer-events-none z-[2] rounded-[inherit]"
            style={{
              background: "linear-gradient(115deg, rgba(255,255,255,.45) 0%, rgba(255,255,255,.14) 16%, rgba(255,255,255,0) 34%)",
              mixBlendMode: "screen",
            }}
          />

          {/* ::after — crisp edge ring */}
          <div
            className="absolute inset-0 pointer-events-none z-[3] rounded-[inherit]"
            style={{
              boxShadow: `
                inset 0 0 0 1px rgba(255,255,255,.55),
                inset 0 1.5px 0 rgba(255,255,255,.9),
                inset 0 -1px 0 rgba(20,60,130,.12),
                inset 0 0 0 2.5px rgba(120,180,255,.10)
              `,
            }}
          />

          {/* Grain micro-texture */}
          <div
            className="absolute inset-0 pointer-events-none z-[2] rounded-[inherit]"
            style={{
              opacity: 0.045,
              mixBlendMode: "overlay",
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Corner bracket accents */}
          <div className="absolute inset-0 pointer-events-none z-[3]">
            {/* TL */}
            <svg style={{ position:"absolute", top:5, left:5, width:"clamp(20px,4.4cqw,36px)", height:"clamp(20px,4.4cqw,36px)", overflow:"visible" }} viewBox="0 0 40 40">
              <path fill="none" stroke="rgba(64,128,220,.8)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 5" d="M4 22 A18 18 0 0 1 22 4"/>
            </svg>
            {/* TR */}
            <svg style={{ position:"absolute", top:5, right:5, width:"clamp(20px,4.4cqw,36px)", height:"clamp(20px,4.4cqw,36px)", overflow:"visible", transform:"scaleX(-1)" }} viewBox="0 0 40 40">
              <path fill="none" stroke="rgba(64,128,220,.8)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 5" d="M4 22 A18 18 0 0 1 22 4"/>
            </svg>
            {/* BL */}
            <svg style={{ position:"absolute", bottom:5, left:5, width:"clamp(20px,4.4cqw,36px)", height:"clamp(20px,4.4cqw,36px)", overflow:"visible", transform:"scaleY(-1)" }} viewBox="0 0 40 40">
              <path fill="none" stroke="rgba(64,128,220,.8)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 5" d="M4 22 A18 18 0 0 1 22 4"/>
            </svg>
            {/* BR */}
            <svg style={{ position:"absolute", bottom:5, right:5, width:"clamp(20px,4.4cqw,36px)", height:"clamp(20px,4.4cqw,36px)", overflow:"visible", transform:"scale(-1,-1)" }} viewBox="0 0 40 40">
              <path fill="none" stroke="rgba(64,128,220,.8)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 5" d="M4 22 A18 18 0 0 1 22 4"/>
            </svg>
          </div>

          {/* Bottom glow line */}
          <div
            className="absolute pointer-events-none z-[3]"
            style={{
              left:"7%", right:"7%", bottom:0, height:3,
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,.95) 32%, rgba(178,216,255,.95) 60%, transparent)",
              filter: "blur(1.2px)",
              opacity: 0.85,
            }}
          />

          {/* Animated sheen sweep */}
          <div className="absolute inset-0 rounded-[inherit] overflow-hidden pointer-events-none z-[2]">
            <span className="gs-sheen-span" />
          </div>

          {/* Stats row */}
          <div
            className="relative z-[4] flex items-center w-full"
            style={{ padding: "0 clamp(14px,3.2vw,36px)", minHeight: 118 }}
          >
            {/* Stat 1 — Globe */}
            <div className="gs-stat flex flex-1 items-center" style={{ gap:"clamp(10px,1.6vw,18px)", padding:"0 clamp(8px,1.4vw,18px)" }}>
              <div
                className="gs-badge hz-stat-item relative flex-shrink-0 flex items-center justify-center rounded-full overflow-hidden transition-transform duration-[250ms]"
                style={{
                  width:"clamp(42px,6.2vw,72px)", aspectRatio:"1",
                  background: "rgba(255,255,255,.34)",
                  backdropFilter: "blur(10px) saturate(150%)",
                  WebkitBackdropFilter: "blur(10px) saturate(150%)",
                  border: "1px solid rgba(255,255,255,.55)",
                  boxShadow: "0 1px 1px rgba(15,45,100,.28), 1px 7px 15px rgba(15,45,100,.16), inset 0 1.5px 1px rgba(255,255,255,.95), inset 0 -2px 3px rgba(15,55,120,.22)",
                  isolation: "isolate",
                }}
              >
                {/* angled specular streak with icon colour tint */}
                <div className="absolute inset-0 rounded-full pointer-events-none z-[1]" style={{ background: "radial-gradient(circle at 28% 24%, rgba(30,79,184,.16), transparent 62%), linear-gradient(to left top, rgba(255,255,255,.55) 0%, rgba(255,255,255,0) 55%)" }} />
                {/* top-down sheen + curved vignette */}
                <div className="absolute inset-0 rounded-full pointer-events-none z-[1]" style={{ background: "radial-gradient(circle at 50% 50%, transparent 52%, rgba(10,35,85,.14) 100%), linear-gradient(to bottom, rgba(255,255,255,.3) 0%, rgba(255,255,255,0) 62%)" }} />
                {/* primary glint */}
                <div className="absolute pointer-events-none z-[1]" style={{ top:"11%", left:"14%", width:"32%", height:"32%", borderRadius:"50%", background:"radial-gradient(circle at 35% 35%, rgba(255,255,255,.98), rgba(255,255,255,0) 72%)", filter:"blur(.5px)", mixBlendMode:"plus-lighter" }} />
                {/* secondary bounce */}
                <div className="absolute pointer-events-none z-[1]" style={{ bottom:"14%", right:"16%", width:"16%", height:"16%", borderRadius:"50%", background:"radial-gradient(circle at 45% 45%, rgba(255,255,255,.55), rgba(255,255,255,0) 75%)", opacity:0.7 }} />
                {/* dashed ring */}
                <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 100 100" style={{ opacity:0.55 }}>
                  <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(64,128,220,.8)" strokeWidth="1.3" strokeDasharray="2.6 4.6"/>
                </svg>
                {/* Globe icon */}
                <svg className="relative z-[2]" style={{ width:"50%", height:"50%" }} viewBox="0 0 24 24" fill="none" stroke="#1e4fb8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9.4"/>
                  <line x1="2.6" y1="12" x2="21.4" y2="12"/>
                  <line x1="12" y1="2.6" x2="12" y2="21.4"/>
                  <path d="M12 2.6c3.05 3.05 4.6 6.2 4.6 9.4s-1.55 6.35-4.6 9.4c-3.05-3.05-4.6-6.2-4.6-9.4S8.95 5.65 12 2.6z"/>
                </svg>
              </div>
              <div className="flex flex-col" style={{ gap:3, minWidth:0 }}>
                <div style={{ fontWeight:800, fontSize:"clamp(17px,2.35vw,29px)", color:"#0a1454", lineHeight:1, letterSpacing:"-0.01em", whiteSpace:"nowrap" }}>65+</div>
                <div style={{ fontWeight:600, fontSize:"clamp(10px,1.05vw,13px)", color:"#5b6089", lineHeight:1.25 }}>Countries<br/>Worldwide</div>
                <div className="flex" style={{ gap:4, marginTop:3 }}>
                  {[0,1,2].map(d=><i key={d} style={{ width:4, height:4, borderRadius:"50%", display:"block", background:"linear-gradient(135deg,#2f74e0,#123f9e)" }}/>)}
                </div>
              </div>
            </div>

            {/* Stat 2 — Products */}
            <div className="gs-stat flex flex-1 items-center" style={{ gap:"clamp(10px,1.6vw,18px)", padding:"0 clamp(8px,1.4vw,18px)" }}>
              <div
                className="gs-badge hz-stat-item relative flex-shrink-0 flex items-center justify-center rounded-full overflow-hidden transition-transform duration-[250ms]"
                style={{
                  width:"clamp(42px,6.2vw,72px)", aspectRatio:"1",
                  background: "rgba(255,255,255,.34)",
                  backdropFilter: "blur(10px) saturate(150%)",
                  WebkitBackdropFilter: "blur(10px) saturate(150%)",
                  border: "1px solid rgba(255,255,255,.55)",
                  boxShadow: "0 1px 1px rgba(15,45,100,.28), 1px 7px 15px rgba(15,45,100,.16), inset 0 1.5px 1px rgba(255,255,255,.95), inset 0 -2px 3px rgba(15,55,120,.22)",
                  isolation: "isolate",
                }}
              >
                <div className="absolute inset-0 rounded-full pointer-events-none z-[1]" style={{ background: "radial-gradient(circle at 28% 24%, rgba(46,146,192,.16), transparent 62%), linear-gradient(to left top, rgba(255,255,255,.55) 0%, rgba(255,255,255,0) 55%)" }} />
                <div className="absolute inset-0 rounded-full pointer-events-none z-[1]" style={{ background: "radial-gradient(circle at 50% 50%, transparent 52%, rgba(10,35,85,.14) 100%), linear-gradient(to bottom, rgba(255,255,255,.3) 0%, rgba(255,255,255,0) 62%)" }} />
                <div className="absolute pointer-events-none z-[1]" style={{ top:"11%", left:"14%", width:"32%", height:"32%", borderRadius:"50%", background:"radial-gradient(circle at 35% 35%, rgba(255,255,255,.98), rgba(255,255,255,0) 72%)", filter:"blur(.5px)", mixBlendMode:"plus-lighter" }} />
                <div className="absolute pointer-events-none z-[1]" style={{ bottom:"14%", right:"16%", width:"16%", height:"16%", borderRadius:"50%", background:"radial-gradient(circle at 45% 45%, rgba(255,255,255,.55), rgba(255,255,255,0) 75%)", opacity:0.7 }} />
                <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 100 100" style={{ opacity:0.55 }}>
                  <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(64,128,220,.8)" strokeWidth="1.3" strokeDasharray="2.6 4.6"/>
                </svg>
                {/* Pills bottle icon */}
                <svg className="relative z-[2]" style={{ width:"50%", height:"50%" }} viewBox="0 0 24 24" fill="none" stroke="#2e92c0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9.3" y="2.3" width="5.0" height="2.6" rx="0.6"/>
                  <path d="M8.3 4.9h7.0v2.05l1.55 2.2v7.65a1.9 1.9 0 0 1-1.9 1.9H8.65a1.9 1.9 0 0 1-1.9-1.9V9.15l1.55-2.2z"/>
                  <line x1="6.9" y1="11.5" x2="16.7" y2="11.5"/>
                  <path d="M10.6 13.2v2.6M9.3 14.5h2.6"/>
                  <g transform="translate(14.2 15.6) rotate(35)">
                    <rect x="-2.7" y="-1.15" width="5.4" height="2.3" rx="1.15"/>
                    <line x1="0" y1="-1.15" x2="0" y2="1.15"/>
                  </g>
                </svg>
              </div>
              <div className="flex flex-col" style={{ gap:3, minWidth:0 }}>
                <div style={{ fontWeight:800, fontSize:"clamp(17px,2.35vw,29px)", color:"#0a1454", lineHeight:1, letterSpacing:"-0.01em", whiteSpace:"nowrap" }}>350+</div>
                <div style={{ fontWeight:600, fontSize:"clamp(10px,1.05vw,13px)", color:"#5b6089", lineHeight:1.25 }}>Quality<br/>Products</div>
                <div className="flex" style={{ gap:4, marginTop:3 }}>
                  {[0,1,2].map(d=><i key={d} style={{ width:4, height:4, borderRadius:"50%", display:"block", background:"linear-gradient(135deg,#2f74e0,#123f9e)" }}/>)}
                </div>
              </div>
            </div>

            {/* Stat 3 — Therapeutic Areas */}
            <div className="gs-stat flex flex-1 items-center" style={{ gap:"clamp(10px,1.6vw,18px)", padding:"0 clamp(8px,1.4vw,18px)" }}>
              <div
                className="gs-badge hz-stat-item relative flex-shrink-0 flex items-center justify-center rounded-full overflow-hidden transition-transform duration-[250ms]"
                style={{
                  width:"clamp(42px,6.2vw,72px)", aspectRatio:"1",
                  background: "rgba(255,255,255,.34)",
                  backdropFilter: "blur(10px) saturate(150%)",
                  WebkitBackdropFilter: "blur(10px) saturate(150%)",
                  border: "1px solid rgba(255,255,255,.55)",
                  boxShadow: "0 1px 1px rgba(15,45,100,.28), 1px 7px 15px rgba(15,45,100,.16), inset 0 1.5px 1px rgba(255,255,255,.95), inset 0 -2px 3px rgba(15,55,120,.22)",
                  isolation: "isolate",
                }}
              >
                <div className="absolute inset-0 rounded-full pointer-events-none z-[1]" style={{ background: "radial-gradient(circle at 28% 24%, rgba(46,146,192,.16), transparent 62%), linear-gradient(to left top, rgba(255,255,255,.55) 0%, rgba(255,255,255,0) 55%)" }} />
                <div className="absolute inset-0 rounded-full pointer-events-none z-[1]" style={{ background: "radial-gradient(circle at 50% 50%, transparent 52%, rgba(10,35,85,.14) 100%), linear-gradient(to bottom, rgba(255,255,255,.3) 0%, rgba(255,255,255,0) 62%)" }} />
                <div className="absolute pointer-events-none z-[1]" style={{ top:"11%", left:"14%", width:"32%", height:"32%", borderRadius:"50%", background:"radial-gradient(circle at 35% 35%, rgba(255,255,255,.98), rgba(255,255,255,0) 72%)", filter:"blur(.5px)", mixBlendMode:"plus-lighter" }} />
                <div className="absolute pointer-events-none z-[1]" style={{ bottom:"14%", right:"16%", width:"16%", height:"16%", borderRadius:"50%", background:"radial-gradient(circle at 45% 45%, rgba(255,255,255,.55), rgba(255,255,255,0) 75%)", opacity:0.7 }} />
                <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 100 100" style={{ opacity:0.55 }}>
                  <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(64,128,220,.8)" strokeWidth="1.3" strokeDasharray="2.6 4.6"/>
                </svg>
                {/* Molecule icon */}
                <svg className="relative z-[2]" style={{ width:"50%", height:"50%" }} viewBox="0 0 24 24" fill="none" stroke="#2e92c0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="4.6" r="2.15"/>
                  <circle cx="5.4" cy="18.2" r="2.15"/>
                  <circle cx="18.6" cy="18.2" r="2.15"/>
                  <circle cx="12" cy="12" r="1.95"/>
                  <line x1="12" y1="6.7" x2="12" y2="10.05"/>
                  <line x1="10.45" y1="13.3" x2="6.95" y2="16.35"/>
                  <line x1="13.55" y1="13.3" x2="17.05" y2="16.35"/>
                </svg>
              </div>
              <div className="flex flex-col" style={{ gap:3, minWidth:0 }}>
                <div style={{ fontWeight:800, fontSize:"clamp(17px,2.35vw,29px)", color:"#0a1454", lineHeight:1, letterSpacing:"-0.01em", whiteSpace:"nowrap" }}>18+</div>
                <div style={{ fontWeight:600, fontSize:"clamp(10px,1.05vw,13px)", color:"#5b6089", lineHeight:1.25 }}>Therapeutic<br/>Areas</div>
                <div className="flex" style={{ gap:4, marginTop:3 }}>
                  {[0,1,2].map(d=><i key={d} style={{ width:4, height:4, borderRadius:"50%", display:"block", background:"linear-gradient(135deg,#2f74e0,#123f9e)" }}/>)}
                </div>
              </div>
            </div>

            {/* Stat 4 — Manufacturing */}
            <div className="gs-stat flex flex-1 items-center" style={{ gap:"clamp(10px,1.6vw,18px)", padding:"0 clamp(8px,1.4vw,18px)" }}>
              <div
                className="gs-badge hz-stat-item relative flex-shrink-0 flex items-center justify-center rounded-full overflow-hidden transition-transform duration-[250ms]"
                style={{
                  width:"clamp(42px,6.2vw,72px)", aspectRatio:"1",
                  background: "rgba(255,255,255,.34)",
                  backdropFilter: "blur(10px) saturate(150%)",
                  WebkitBackdropFilter: "blur(10px) saturate(150%)",
                  border: "1px solid rgba(255,255,255,.55)",
                  boxShadow: "0 1px 1px rgba(15,45,100,.28), 1px 7px 15px rgba(15,45,100,.16), inset 0 1.5px 1px rgba(255,255,255,.95), inset 0 -2px 3px rgba(15,55,120,.22)",
                  isolation: "isolate",
                }}
              >
                <div className="absolute inset-0 rounded-full pointer-events-none z-[1]" style={{ background: "radial-gradient(circle at 28% 24%, rgba(30,79,184,.16), transparent 62%), linear-gradient(to left top, rgba(255,255,255,.55) 0%, rgba(255,255,255,0) 55%)" }} />
                <div className="absolute inset-0 rounded-full pointer-events-none z-[1]" style={{ background: "radial-gradient(circle at 50% 50%, transparent 52%, rgba(10,35,85,.14) 100%), linear-gradient(to bottom, rgba(255,255,255,.3) 0%, rgba(255,255,255,0) 62%)" }} />
                <div className="absolute pointer-events-none z-[1]" style={{ top:"11%", left:"14%", width:"32%", height:"32%", borderRadius:"50%", background:"radial-gradient(circle at 35% 35%, rgba(255,255,255,.98), rgba(255,255,255,0) 72%)", filter:"blur(.5px)", mixBlendMode:"plus-lighter" }} />
                <div className="absolute pointer-events-none z-[1]" style={{ bottom:"14%", right:"16%", width:"16%", height:"16%", borderRadius:"50%", background:"radial-gradient(circle at 45% 45%, rgba(255,255,255,.55), rgba(255,255,255,0) 75%)", opacity:0.7 }} />
                <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 100 100" style={{ opacity:0.55 }}>
                  <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(64,128,220,.8)" strokeWidth="1.3" strokeDasharray="2.6 4.6"/>
                </svg>
                {/* Factory icon */}
                <svg className="relative z-[2]" style={{ width:"50%", height:"50%" }} viewBox="0 0 24 24" fill="none" stroke="#1e4fb8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.7 20.3V12.6l4.3 2.9v-2.9l4.3 2.9v-2.9l4.3 2.9V9.4c0-.5.4-.9.9-.9h3.6c.5 0 .9.4.9.9v10.9"/>
                  <path d="M17.1 8.5V5.1c0-.55.6-.9 1.1-.6l1.9 1.35V8.5"/>
                  <line x1="2" y1="20.3" x2="22" y2="20.3"/>
                  <rect x="6" y="16.6" width="1.5" height="1.5"/>
                  <rect x="10.3" y="16.6" width="1.5" height="1.5"/>
                  <rect x="14.6" y="16.6" width="1.5" height="1.5"/>
                </svg>
              </div>
              <div className="flex flex-col" style={{ gap:3, minWidth:0 }}>
                <div style={{ fontWeight:800, fontSize:"clamp(17px,2.35vw,29px)", color:"#0a1454", lineHeight:1, letterSpacing:"-0.01em", whiteSpace:"nowrap" }}>12+</div>
                <div style={{ fontWeight:600, fontSize:"clamp(10px,1.05vw,13px)", color:"#5b6089", lineHeight:1.25 }}>Manufacturing<br/>Facilities</div>
                <div className="flex" style={{ gap:4, marginTop:3 }}>
                  {[0,1,2].map(d=><i key={d} style={{ width:4, height:4, borderRadius:"50%", display:"block", background:"linear-gradient(135deg,#2f74e0,#123f9e)" }}/>)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floor shadow — grounds the panel */}
        <div
          className="pointer-events-none"
          style={{
            width:"82%", height:22,
            margin:"-4px auto 0",
            borderRadius:"50%",
            background:"radial-gradient(ellipse at center, rgba(15,45,100,.24), rgba(15,45,100,0) 72%)",
            filter:"blur(5px)",
          }}
        />
      </div>
    </section>
  );
}