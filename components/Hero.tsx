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
      stroke: "#2e92c0",
      icon: (
        <>
          <circle cx="12" cy="4.6" r="2.15" />
          <circle cx="5.4" cy="18.2" r="2.15" />
          <circle cx="18.6" cy="18.2" r="2.15" />
          <circle cx="12" cy="12" r="1.95" />
          <line x1="12" y1="6.7" x2="12" y2="10.05" />
          <line x1="10.45" y1="13.3" x2="6.95" y2="16.35" />
          <line x1="13.55" y1="13.3" x2="17.05" y2="16.35" />
        </>
      ),
    },
    {
      number: t.hero.stats.stat4Number,
      labelTop: t.hero.stats.stat4Top,
      labelBottom: t.hero.stats.stat4Bottom,
      stroke: "#1e4fb8",
      icon: (
        <>
          <path d="M2.7 20.3V12.6l4.3 2.9v-2.9l4.3 2.9v-2.9l4.3 2.9V9.4c0-.5.4-.9.9-.9h3.6c.5 0 .9.4.9.9v10.9" />
          <path d="M17.1 8.5V5.1c0-.55.6-.9 1.1-.6l1.9 1.35V8.5" />
          <line x1="2" y1="20.3" x2="22" y2="20.3" />
          <rect x="6" y="16.6" width="1.5" height="1.5" />
          <rect x="10.3" y="16.6" width="1.5" height="1.5" />
          <rect x="14.6" y="16.6" width="1.5" height="1.5" />
        </>
      ),
    },
  ];

  // ── Social Panel: set initial positions off-screen ────────
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current;
      const l1 = layer1Ref.current;
      const l2 = layer2Ref.current;
      const backdrop = backdropRef.current;
      if (!panel || !l1 || !l2 || !backdrop) return;
      gsap.set([l1, l2, panel], { xPercent: -100 });
      gsap.set(backdrop, { opacity: 0, pointerEvents: "none" });
    });
    return () => ctx.revert();
  }, []);

  // ── Social Panel: open animation (Silky-Smooth Staggered GSAP) ────────────
  const playOpen = useCallback(() => {
    const panel = panelRef.current;
    const l1 = layer1Ref.current;
    const l2 = layer2Ref.current;
    const backdrop = backdropRef.current;
    if (!panel || !l1 || !l2 || !backdrop) return;
    openTlRef.current?.kill();

    const itemEls = Array.from(panel.querySelectorAll(".sm-item-reveal")) as HTMLElement[];
    const subEls = Array.from(panel.querySelectorAll(".sm-sub-reveal")) as HTMLElement[];
    const badgeEl = panel.querySelector(".sm-badge-reveal") as HTMLElement | null;

    if (itemEls.length) {
      gsap.set(itemEls, { yPercent: 130, opacity: 0, rotate: 6 });
    }
    if (subEls.length) {
      gsap.set(subEls, { opacity: 0, y: 8 });
    }
    if (badgeEl) {
      gsap.set(badgeEl, { opacity: 0, y: -6 });
    }

    const tl = gsap.timeline();
    // Backdrop blur fade
    tl.to(backdrop, { opacity: 1, pointerEvents: "auto", duration: 0.32, ease: "power2.out" }, 0);
    // Layer 1: Jet Black
    tl.fromTo(l1, { xPercent: -100 }, { xPercent: 0, duration: 0.46, ease: "power4.out" }, 0.02);
    // Layer 2: Cobalt/Sapphire Blue Accent Flash
    tl.fromTo(l2, { xPercent: -100 }, { xPercent: 0, duration: 0.52, ease: "power4.out" }, 0.08);
    // Main Clean White Canvas
    tl.fromTo(panel, { xPercent: -100 }, { xPercent: 0, duration: 0.64, ease: "power4.out" }, 0.15);
    // Header Badge
    if (badgeEl) {
      tl.to(badgeEl, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }, 0.32);
    }
    // Text entrance with rotation spring
    if (itemEls.length) {
      tl.to(
        itemEls,
        {
          yPercent: 0,
          opacity: 1,
          rotate: 0,
          duration: 0.8,
          ease: "power4.out",
          stagger: 0.08,
        },
        0.34
      );
    }
    // Subtitles fade-in
    if (subEls.length) {
      tl.to(
        subEls,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.08,
        },
        0.46
      );
    }
    openTlRef.current = tl;
  }, []);

  // ── Social Panel: close animation ─────────────────────────
  const playClose = useCallback(() => {
    const panel = panelRef.current;
    const l1 = layer1Ref.current;
    const l2 = layer2Ref.current;
    const backdrop = backdropRef.current;
    if (!panel || !l1 || !l2 || !backdrop) return;
    openTlRef.current?.kill();
    const tl = gsap.timeline();
    tl.to([panel, l2, l1], {
      xPercent: -100,
      duration: 0.36,
      ease: "power3.in",
      stagger: 0.05,
    }, 0);
    tl.to(backdrop, { opacity: 0, pointerEvents: "none", duration: 0.3, ease: "power2.in" }, 0.05);
  }, []);

  // ── Social Panel: toggle ───────────────────────────────────
  const toggleSocial = useCallback(() => {
    const next = !socialOpenRef.current;
    socialOpenRef.current = next;
    setSocialPanelOpen(next);
    if (next) playOpen();
    else playClose();
  }, [playOpen, playClose]);

  // ── Close on click outside ─────────────────────────────────
  useEffect(() => {
    if (!socialPanelOpen) return;
    const handle = (e: MouseEvent) => {
      const t = e.target as Element;
      if (panelRef.current && !panelRef.current.contains(t) && !t?.closest("[data-social-btn]"))
        toggleSocial();
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [socialPanelOpen, toggleSocial]);

  // ── Close on Escape ────────────────────────────────────────
  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape" && socialOpenRef.current) toggleSocial();
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [toggleSocial]);

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
            className="relative flex flex-col items-center w-[112px] h-[555px] rounded-[22px] overflow-hidden transition-all duration-300 z-10"
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
                  <button
                    key={item.label}
                    data-social-btn
                    onClick={() => { setActiveSidebarIndex(index); toggleSocial(); }}
                    className="group/item relative flex flex-col items-center justify-center flex-1 w-full px-2 transition-all duration-300 hover:bg-white/[0.05] cursor-pointer"
                    style={{
                      borderBottom:
                        index < sidebarItems.length - 1
                          ? "1px solid rgba(255, 255, 255, 0.12)"
                          : "none",
                    }}
                  >
                    {innerContent}
                  </button>
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
      <div className="hz-stats absolute bottom-4 sm:bottom-6 left-2 right-2 sm:left-6 sm:right-6 md:left-48 lg:left-56 xl:left-64 md:right-8 z-10 max-w-[1120px]">
        <div
          ref={statsSurfaceRef}
          className={`glass-surface select-none ${glassLive ? "glass-live" : ""}`}
          style={{ borderRadius: "clamp(16px, 4vw, 30px)" }}
        >
          {glassLive && <GlassmorphismCanvas surfaceRef={statsSurfaceRef} />}

          <div
            className="relative z-[4] grid grid-cols-1 sm:flex items-center w-full overflow-hidden"
            style={{
              padding: "clamp(14px, 2.4vw, 28px) clamp(14px, 3.8vw, 44px)",
              minHeight: 100,
              borderRadius: "inherit",
            }}
          >
            {statsData.map((stat) => {
              return (
                <div
                  key={stat.number}
                  className="gs-stat flex flex-1 items-center border-b sm:border-b-0 sm:border-l last:border-b-0 first:border-l-0 border-slate-200/40 py-3 sm:py-0"
                  style={{ gap: "clamp(12px, 1.8vw, 20px)", padding: "clamp(10px, 1.6vw, 22px) clamp(10px, 1.6vw, 22px)" }}
                >
                  <div data-glass-bead className="glass-badge hz-stat-item">
                    <svg
                      className="relative z-[2]"
                      style={{ width: "62%", height: "62%" }}
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
                  <div className="flex flex-col" style={{ gap: 3, minWidth: 0 }}>
                    <div
                      style={{
                        fontWeight: 800,
                        fontSize: "clamp(17px,2.35vw,29px)",
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
                        fontSize: "clamp(10px,1.05vw,13px)",
                        color: "#5b6089",
                        lineHeight: 1.25,
                      }}
                    >
                      {stat.labelTop}
                      <br />
                      {stat.labelBottom}
                    </div>
                    <div className="flex" style={{ gap: 4, marginTop: 3 }}>
                      {[0, 1, 2].map((d) => (
                        <i
                          key={d}
                          style={{
                            width: 4,
                            height: 4,
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

      {/* ── Social Panel Backdrop ─────────────────────────────── */}
      <div
        ref={backdropRef}
        className="fixed inset-0 z-[60] bg-black/25 backdrop-blur-[2px] transition-opacity duration-300"
        style={{ opacity: 0, pointerEvents: "none" }}
        aria-hidden="true"
      />

      {/* ── Stagger Layer 1: Solid Jet Black ───────────────────── */}
      <div
        ref={layer1Ref}
        className="fixed left-0 top-0 bottom-0 z-[61] w-[92vw] sm:w-[480px] md:w-[520px] shadow-2xl"
        style={{ background: "#0a0a0b" }}
        aria-hidden="true"
      />

      {/* ── Stagger Layer 2: Cobalt/Sapphire Blue Accent Flash ──── */}
      <div
        ref={layer2Ref}
        className="fixed left-0 top-0 bottom-0 z-[62] w-[92vw] sm:w-[480px] md:w-[520px] shadow-2xl"
        style={{ background: "linear-gradient(180deg, #0066FF 0%, #003DB3 100%)" }}
        aria-hidden="true"
      />

      {/* ── Main Clean Black & White Editorial Panel ───────────── */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Official Social Directory"
        className="fixed left-0 top-0 bottom-0 z-[63] flex w-[92vw] sm:w-[480px] md:w-[520px] flex-col justify-between overflow-y-auto overflow-x-hidden bg-white text-black p-8 sm:p-12 select-none border-r border-slate-200/80 shadow-[12px_0_36px_rgba(0,50,140,0.06)]"
        style={{
          background: "linear-gradient(180deg, rgba(240, 248, 255, 0.45) 0%, #ffffff 15%, #ffffff 100%)",
        }}
      >
        {/* Top Header */}
        <div>
          <div className="flex items-start justify-between pb-7 border-b border-black/10">
            <div className="space-y-1">
              <span className="sm-badge-reveal inline-flex items-center gap-1.5 font-mono text-[10.5px] font-bold uppercase tracking-[0.25em] text-[#006EDC] bg-[#006EDC]/10 border border-[#006EDC]/25 px-3 py-1 rounded-full mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#006EDC] animate-pulse" />
                [ 01 / DIRECTORY ]
              </span>
              <h2
                className="text-4xl sm:text-5xl font-black text-black uppercase tracking-tighter"
                style={{ fontFamily: "'Syne', 'Space Grotesk', sans-serif" }}
              >
                Connect
              </h2>
              <p className="sm-sub-reveal text-xs sm:text-[13px] text-slate-500 font-medium leading-relaxed pt-0.5">
                Direct communication lines for global partners &amp; distributors.
              </p>
            </div>

            {/* Minimalist Close Button */}
            <button
              onClick={toggleSocial}
              className="group/close flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/15 bg-white text-black transition-all duration-300 hover:border-[#006EDC] hover:bg-[#006EDC] hover:text-white hover:rotate-90 hover:scale-105 active:scale-95 cursor-pointer mt-1 shadow-xs"
              aria-label="Close social directory"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Social Navigation List with Editorial Typography */}
          <nav className="divide-y divide-black/10 mt-2">
            {[
              {
                num: "01",
                label: "Instagram",
                handle: "@zelnexpharmaceuticals",
                href: "https://www.instagram.com/zelnexpharmaceuticals",
              },
              {
                num: "02",
                label: "LinkedIn",
                handle: "Zelnex Pharmaceuticals",
                href: "https://www.linkedin.com/company/zelnex-pharmaceuticals",
              },
              {
                num: "03",
                label: "Email",
                handle: "info@zelnex.in",
                href: "mailto:info@zelnex.in",
              },
              {
                num: "04",
                label: "WhatsApp",
                handle: "+91 99099 99999",
                href: "https://wa.me/919909999999",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between py-5 sm:py-6 transition-colors duration-300 hover:text-black overflow-hidden cursor-pointer"
              >
                <div className="flex items-baseline gap-4 sm:gap-6 overflow-hidden">
                  <span className="font-mono text-xs font-bold text-[#006EDC] tracking-wider">
                    {social.num}
                  </span>
                  <div className="overflow-hidden">
                    <span
                      className="sm-item-reveal inline-block font-black text-3xl sm:text-4xl text-black uppercase tracking-tight transition-all duration-300 group-hover:translate-x-2.5 group-hover:text-[#006EDC]"
                      style={{ fontFamily: "'Syne', 'Space Grotesk', sans-serif" }}
                    >
                      {social.label}
                    </span>
                    <span className="sm-sub-reveal block font-mono text-xs text-neutral-400 tracking-wide mt-1 transition-colors duration-200 group-hover:text-slate-800">
                      {social.handle}
                    </span>
                  </div>
                </div>

                {/* Minimalist Arrow Icon */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/15 text-black/40 transition-all duration-300 group-hover:border-[#006EDC] group-hover:bg-[#006EDC] group-hover:text-white group-hover:scale-110 shadow-xs">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </a>
            ))}
          </nav>
        </div>

        {/* Minimal Editorial Footer */}
        <div className="pt-7 border-t border-black/10 flex items-center justify-between font-mono text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#006EDC]" />
            <span>Zelnex Pharmaceuticals</span>
          </div>
          <span>© 2026</span>
        </div>
      </div>
    </section>
  );
}