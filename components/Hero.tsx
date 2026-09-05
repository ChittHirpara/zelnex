"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRef, useState, useSyncExternalStore, useCallback, useLayoutEffect, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LiquidEdgeFilter } from "./glass/LiquidDisplacement";
import { RadialShareMenu } from "./ui/RadialShareMenu";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const GlassmorphismCanvas = dynamic(
  () => import("./GlassmorphismCanvas").then((mod) => mod.GlassmorphismCanvas),
  { ssr: false },
);

let webgl2Support: boolean | null = null;

function readWebgl2Support() {
  if (webgl2Support === null) {
    const probe = document.createElement("canvas");
    const context = probe.getContext("webgl2");
    context?.getExtension("WEBGL_lose_context")?.loseContext();
    webgl2Support = Boolean(context);
  }
  return webgl2Support;
}

function readServerWebgl2Support() {
  return false;
}

function subscribeToWebgl2() {
  return () => {};
}

export function Hero() {
  const { t } = useLanguage();
  const rootRef = useRef<HTMLElement>(null);
  const statsSurfaceRef = useRef<HTMLDivElement>(null);
  const [activeSidebarIndex, setActiveSidebarIndex] = useState(0);
  const glassLive = useSyncExternalStore(
    subscribeToWebgl2,
    readWebgl2Support,
    readServerWebgl2Support,
  );

  // ── Social Panel State & Refs ──────────────────────────────
  const [socialPanelOpen, setSocialPanelOpen] = useState(false);
  const socialOpenRef = useRef(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const layer1Ref = useRef<HTMLDivElement | null>(null);
  const layer2Ref = useRef<HTMLDivElement | null>(null);
  const backdropRef = useRef<HTMLDivElement | null>(null);
  const openTlRef = useRef<gsap.core.Timeline | null>(null);

  const sidebarItems = [
    {
      label: t.hero.sidebar.therapeutics,
      href: "#products",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
          <path d="M3 6h18"/>
          <path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
      ),
    },
    {
      label: t.hero.sidebar.enquiry,
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
      label: t.hero.sidebar.location,
      href: "#network",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
    },
    {
      label: t.hero.sidebar.social,
      href: null, // panel trigger — not a link
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3"/>
          <circle cx="6" cy="12" r="3"/>
          <circle cx="18" cy="19" r="3"/>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
        </svg>
      ),
    },
  ];

  const statsData = [
    {
      number: t.hero.stats.stat1Number,
      labelTop: t.hero.stats.stat1Top,
      labelBottom: t.hero.stats.stat1Bottom,
      stroke: "#1e4fb8",
      icon: (
        <>
          <circle cx="12" cy="12" r="9.4" />
          <line x1="2.6" y1="12" x2="21.4" y2="12" />
          <line x1="12" y1="2.6" x2="12" y2="21.4" />
          <path d="M12 2.6c3.05 3.05 4.6 6.2 4.6 9.4s-1.55 6.35-4.6 9.4c-3.05-3.05-4.6-6.2-4.6-9.4S8.95 5.65 12 2.6z" />
        </>
      ),
    },
    {
      number: t.hero.stats.stat2Number,
      labelTop: t.hero.stats.stat2Top,
      labelBottom: t.hero.stats.stat2Bottom,
      stroke: "#2e92c0",
      icon: (
        <>
          <rect x="9.3" y="2.3" width="5.0" height="2.6" rx="0.6" />
          <path d="M8.3 4.9h7.0v2.05l1.55 2.2v7.65a1.9 1.9 0 0 1-1.9 1.9H8.65a1.9 1.9 0 0 1-1.9-1.9V9.15l1.55-2.2z" />
          <line x1="6.9" y1="11.5" x2="16.7" y2="11.5" />
          <path d="M10.6 13.2v2.6M9.3 14.5h2.6" />
          <g transform="translate(14.2 15.6) rotate(35)">
            <rect x="-2.7" y="-1.15" width="5.4" height="2.3" rx="1.15" />
            <line x1="0" y1="-1.15" x2="0" y2="1.15" />
          </g>
        </>
      ),
    },
    {
      number: t.hero.stats.stat3Number,
      labelTop: t.hero.stats.stat3Top,
      labelBottom: t.hero.stats.stat3Bottom,
      stroke: "#006EDC",
      icon: (
        <>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </>
      ),
    },
    {
      number: t.hero.stats.stat4Number,
      labelTop: t.hero.stats.stat4Top,
      labelBottom: t.hero.stats.stat4Bottom,
      stroke: "#6366f1",
      icon: (
        <>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="8" y1="13" x2="16" y2="13" />
          <line x1="8" y1="17" x2="14" y2="17" />
          <polyline points="8.5 9.5 10 11 13 8" />
        </>
      ),
    },
    {
      number: t.hero.stats.stat5Number,
      labelTop: t.hero.stats.stat5Top,
      labelBottom: t.hero.stats.stat5Bottom,
      stroke: "#059669",
      icon: (
        <>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </>
      ),
    },
  ];

  // ── Social Radial Menu: toggle ────────────────────────────
  const toggleSocial = useCallback(() => {
    setSocialPanelOpen((prev) => !prev);
  }, []);

  // ── Close on Click Outside & Escape (Zero Screen Blurring) ──
  useEffect(() => {
    if (!socialPanelOpen) return;
    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-social-btn]") && !target.closest("[data-radial-menu]")) {
        setSocialPanelOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSocialPanelOpen(false);
    };
    document.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [socialPanelOpen]);

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
      {/* Background image — Direct from ASSTES/herobackround.png without any filter */}
      <div className="hz-bg-img absolute inset-0">
        <Image
          src="/herobackround.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "center center" }}
          sizes="100vw"
        />
      </div>

      {/* ── 3D Slanted Parallelogram Floating Sidebar (Single Component with Pure CSS Shadows) ── */}
      <aside
        className="hz-sidebar absolute left-4 lg:left-8 z-30 hidden md:flex flex-col items-center select-none"
        style={{ top: "max(118px, calc(50% - 245px))" }}
      >
        <div
          className="sb-floating-panel relative group"
          style={{ transform: "skewY(-10deg)" }}
        >
          {/* Single Slanted Front Face Card Container — rgba(0, 26, 83) with Pure CSS 3D Shadows */}
          <div
            className="relative flex flex-col items-center w-[112px] h-[555px] rounded-[22px] transition-all duration-300 z-10"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 20, 68, 0.99) 0%, rgba(0, 15, 52, 0.97) 50%, rgba(0, 10, 38, 0.99) 100%)",
              backdropFilter: "blur(20px) saturate(1.5)",
              WebkitBackdropFilter: "blur(20px) saturate(1.5)",
              border: "1.2px solid rgba(255, 255, 255, 0.28)",
              boxShadow: `
                26px 36px 68px -4px rgba(0, 8, 30, 0.88),
                14px 20px 38px rgba(0, 24, 75, 0.65),
                -4px -4px 16px rgba(255, 255, 255, 0.16),
                inset 0 2px 1px rgba(255, 255, 255, 0.75),
                inset -2px 0 4px rgba(255, 255, 255, 0.30),
                inset 2px 0 4px rgba(0, 15, 50, 0.75)
              `,
            }}
          >
            {/* Top-Right Glowing Specular Lens Flare Dot */}
            <div
              className="absolute -right-[2px] top-[24%] w-[5px] h-[5px] rounded-full pointer-events-none z-30"
              style={{
                background: "#ffffff",
                boxShadow:
                  "0 0 6px #ffffff, 0 0 14px #00B8F2, 0 0 20px #00B8F2",
              }}
            />

            {/* Extended Bottom Edge Electric Cyan Glowing Rim */}
            <div
              className="absolute bottom-0 inset-x-0 h-[8.5px] rounded-b-[22px] pointer-events-none z-20"
              style={{
                background:
                  "linear-gradient(90deg, #0036b8 0%, #00d2ff 45%, #00e5ff 55%, #0055ff 100%)",
                boxShadow:
                  "0 1px 6px rgba(0, 210, 255, 0.9), 0 -2px 10px rgba(0, 210, 255, 0.85), 0 -6px 18px rgba(0, 175, 255, 0.6)",
              }}
            />

            {/* Unskewed Sidebar Nav Items */}
            <div
              className="w-full h-full flex flex-col justify-between items-center z-20 py-2.5"
              style={{ transform: "skewY(10deg)" }}
            >
              {sidebarItems.map((item, index) => {
                const isActive = activeSidebarIndex === index;
                const isSocial = item.href === null;

                const innerContent = (
                  <>
                    {isActive ? (
                      <div
                        className="flex items-center justify-center transition-all duration-300 scale-105"
                        style={{
                          width: "52px",
                          height: "52px",
                          borderRadius: "50%",
                          background: "linear-gradient(145deg, #ffffff 0%, #e8f4ff 100%)",
                          color: "#001A53",
                          border: "1.2px solid rgba(255, 255, 255, 0.95)",
                          boxShadow:
                            "0 6px 18px rgba(0, 10, 35, 0.50), inset 0 2px 1px #ffffff, inset 0 -2px 5px rgba(0, 40, 120, 0.25)",
                        }}
                      >
                        {item.icon}
                      </div>
                    ) : (
                      <div
                        className="flex items-center justify-center transition-all duration-300 group-hover/item:scale-110"
                        style={{
                          width: "42px",
                          height: "42px",
                          borderRadius: "50%",
                          background:
                            "linear-gradient(145deg, rgba(0, 10, 36, 0.70) 0%, rgba(0, 18, 58, 0.45) 100%)",
                          color: "#00B8F2",
                          border: "1px solid rgba(255, 255, 255, 0.12)",
                          boxShadow:
                            "inset 0 2px 4px rgba(0, 10, 35, 0.50), inset 0 -1px 1.5px rgba(255, 255, 255, 0.12), 0 2px 5px rgba(0, 0, 0, 0.20)",
                          filter:
                            "drop-shadow(0 0 5px rgba(0, 184, 242, 0.50))",
                        }}
                      >
                        {item.icon}
                      </div>
                    )}
                    <span
                      className={`mt-1.5 text-[12px] tracking-wide transition-colors ${
                        isActive
                          ? "text-white font-semibold"
                          : "text-white/85 font-medium group-hover/item:text-white"
                      }`}
                    >
                      {item.label}
                    </span>
                    {isActive && (
                      <div
                        className="mt-1 w-6 h-[2.5px] rounded-full"
                        style={{
                          background: "#00B8F2",
                          boxShadow: "0 0 8px #00B8F2",
                        }}
                      />
                    )}
                  </>
                );

                return isSocial ? (
                  <div
                    key={item.label}
                    className="relative flex-1 w-full flex flex-col items-center justify-center"
                    style={{
                      borderBottom:
                        index < sidebarItems.length - 1
                          ? "1px solid rgba(255, 255, 255, 0.12)"
                          : "none",
                    }}
                  >
                    <button
                      data-social-btn
                      onClick={() => {
                        setActiveSidebarIndex(index);
                        setSocialPanelOpen((prev) => !prev);
                      }}
                      className="group/item relative flex flex-col items-center justify-center flex-1 w-full px-2 transition-all duration-300 hover:bg-white/[0.05] cursor-pointer"
                    >
                      {innerContent}
                    </button>

                    {/* ── Circular Half-Sphere Radial Arc Menu ── */}
                    <RadialShareMenu
                      isOpen={socialPanelOpen}
                      onClose={() => setSocialPanelOpen(false)}
                    />
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href!}
                    onClick={() => setActiveSidebarIndex(index)}
                    className="group/item relative flex flex-col items-center justify-center flex-1 w-full px-2 transition-all duration-300 hover:bg-white/[0.05]"
                    style={{
                      borderBottom:
                        index < sidebarItems.length - 1
                          ? "1px solid rgba(255, 255, 255, 0.12)"
                          : "none",
                    }}
                  >
                    {innerContent}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Deep Floor Drop Shadow */}
        <div
          className="pointer-events-none mt-3"
          style={{
            width: "115px",
            height: "22px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at center, rgba(0, 8, 30, 0.95), rgba(0, 184, 242, 0.35) 45%, transparent 80%)",
            filter: "blur(7px)",
          }}
        />
      </aside>

      {/* Main Content Area */}
      <div className="relative z-10 flex min-h-[100svh] flex-col justify-center pb-32 sm:pb-40 pt-24 sm:pt-28 px-4 sm:section-pad">
        <div className="ml-0 max-w-[540px] md:ml-48 lg:ml-56 xl:ml-64">
          <h1
            className="hz-reveal font-display text-[2rem] font-extrabold leading-[1.08] tracking-tight sm:text-[2.6rem] lg:text-[3.4rem]"
            style={{ color: "#082B61" }}
          >
            {t.hero.titleLine1}
            <br />
            {t.hero.titleLine2}
          </h1>

          <div
            className="hz-reveal my-5 h-[3px] w-12 rounded-full"
            style={{
              background: "linear-gradient(90deg, #006EDC, #08BCEB)",
            }}
          />

          <p
            className="hz-reveal text-base leading-relaxed md:text-[17px] max-w-lg"
            style={{ color: "rgba(15, 45, 85, 0.85)" }}
          >
            {t.hero.subheading}
          </p>

          <div className="hz-reveal mt-9">
            <Link
              href="#products"
              className="inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 shadow-lg"
              style={{
                background: "linear-gradient(135deg, #006EDC 0%, #082B61 100%)",
                boxShadow:
                  "0 6px 20px rgba(0, 110, 220, 0.35), 0 2px 4px rgba(0,0,0,0.08)",
              }}
            >
              <span>{t.hero.exploreProducts}</span>
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

      {/* ── Bhadwo-Kaach WebGL & CSS Liquid Glass Stats Engine ── */}
      <LiquidEdgeFilter scale={22} />
      <div className="hz-stats absolute bottom-4 sm:bottom-6 left-2 right-2 sm:left-6 sm:right-6 md:left-48 lg:left-56 xl:left-64 md:right-8 z-10 max-w-[1320px]">
        <div
          ref={statsSurfaceRef}
          className={`glass-surface select-none ${glassLive ? "glass-live" : ""}`}
          style={{ borderRadius: "clamp(16px, 3.5vw, 28px)" }}
        >
          {glassLive && <GlassmorphismCanvas surfaceRef={statsSurfaceRef} />}

          <div
            className="relative z-[4] grid grid-cols-1 sm:flex items-center w-full overflow-hidden"
            style={{
              padding: "clamp(10px, 1.8vw, 22px) clamp(10px, 2.2vw, 30px)",
              minHeight: 90,
              borderRadius: "inherit",
            }}
          >
            {statsData.map((stat, idx) => {
              return (
                <div
                  key={`${stat.number}-${idx}`}
                  className="gs-stat flex flex-1 items-center border-b sm:border-b-0 sm:border-l last:border-b-0 first:border-l-0 border-slate-200/40 py-2.5 sm:py-0"
                  style={{ gap: "clamp(8px, 1.2vw, 16px)", padding: "clamp(6px, 1vw, 16px) clamp(6px, 1.1vw, 18px)" }}
                >
                  <div
                    data-glass-bead
                    className="glass-badge hz-stat-item"
                    style={{ width: "clamp(38px, 3.8vw, 56px)", height: "clamp(38px, 3.8vw, 56px)" }}
                  >
                    <svg
                      className="relative z-[2]"
                      style={{ width: "60%", height: "60%" }}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={stat.stroke}
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {stat.icon}
                    </svg>
                  </div>
                  <div className="flex flex-col" style={{ gap: 2, minWidth: 0 }}>
                    <div
                      style={{
                        fontWeight: 800,
                        fontSize: "clamp(16px, 1.95vw, 26px)",
                        color: "#0a1454",
                        lineHeight: 1,
                        letterSpacing: "-0.01em",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {stat.number}
                    </div>
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: "clamp(9.5px, 0.84vw, 12px)",
                        color: "#5b6089",
                        lineHeight: 1.22,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {stat.labelTop}
                      <br />
                      {stat.labelBottom}
                    </div>
                    <div className="flex" style={{ gap: 3.5, marginTop: 2 }}>
                      {[0, 1, 2].map((d) => (
                        <i
                          key={d}
                          style={{
                            width: 3.5,
                            height: 3.5,
                            borderRadius: "50%",
                            display: "block",
                            background: "linear-gradient(135deg,#2f74e0,#123f9e)",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="pointer-events-none"
          style={{
            width: "82%",
            height: 22,
            margin: "-4px auto 0",
            borderRadius: "50%",
            background: "radial-gradient(ellipse at center, rgba(15,45,100,.24), rgba(15,45,100,0) 72%)",
            filter: "blur(5px)",
          }}
        />
      </div>

      {/* Smooth bottom feather/fade to seamlessly blend with white Overview section */}
      <div
        className="pointer-events-none absolute bottom-0 inset-x-0 h-28 z-20"
        style={{
          background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 60%, #ffffff 100%)",
        }}
      />
    </section>
  );
}