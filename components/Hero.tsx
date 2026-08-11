"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

      {/* ── Exact 3D Slanted Parallelogram Glassmorphic Sidebar ── */}
      <aside
        className="hz-sidebar absolute left-8 top-1/2 z-30 hidden -translate-y-1/2 md:flex flex-col items-center select-none"
      >
        <div
          className="relative flex flex-col items-center py-6 w-[98px] rounded-[26px] transition-all duration-300 hover:scale-[1.02]"
          style={{
            transform: "skewY(-9deg)",
            background:
              "linear-gradient(175deg, rgba(3, 16, 52, 0.96) 0%, rgba(7, 26, 78, 0.94) 60%, rgba(2, 12, 40, 0.98) 100%)",
            backdropFilter: "blur(28px) saturate(1.8)",
            WebkitBackdropFilter: "blur(28px) saturate(1.8)",
            border: "1.5px solid rgba(255, 255, 255, 0.22)",
            boxShadow: `
              12px 24px 45px rgba(0, 0, 0, 0.55),
              0 0 35px rgba(0, 166, 255, 0.35),
              inset 0 1.5px 0 rgba(255, 255, 255, 0.5),
              inset -1px 0 0 rgba(255, 255, 255, 0.2)
            `,
          }}
        >
          {/* 3D Bottom Edge Extrusion Rim */}
          <div
            className="absolute -bottom-2 inset-x-0 h-4 rounded-b-[26px] pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, #0055ff 0%, #00d2ff 50%, #0044cc 100%)",
              boxShadow: "0 6px 20px rgba(0, 180, 255, 0.7)",
              opacity: 0.9,
            }}
          />

          {/* Inner Un-skewed Content Wrapper */}
          <div
            className="w-full flex flex-col items-center"
            style={{ transform: "skewY(9deg)" }}
          >
            {SIDEBAR_ITEMS.map((item, index) => {
              const isActive = activeSidebarIndex === index;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveSidebarIndex(index)}
                  className="group relative flex flex-col items-center justify-center w-full py-4 transition-all duration-300"
                  style={{
                    borderBottom:
                      index < SIDEBAR_ITEMS.length - 1
                        ? "1px solid rgba(255, 255, 255, 0.1)"
                        : "none",
                  }}
                >
                  {/* Active White Circle Badge vs Inactive Cyan Icon */}
                  {isActive ? (
                    <div
                      className="flex items-center justify-center transition-all duration-300 scale-105"
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "50%",
                        background:
                          "radial-gradient(circle at 35% 30%, #ffffff 0%, #f0f8ff 65%, #e0ecff 100%)",
                        color: "#05184a",
                        boxShadow:
                          "0 8px 24px rgba(0, 0, 0, 0.45), inset 0 1.5px 0 rgba(255, 255, 255, 1)",
                      }}
                    >
                      {item.icon}
                    </div>
                  ) : (
                    <div
                      className="flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        width: "44px",
                        height: "44px",
                        color: "#00d2ff",
                        filter: "drop-shadow(0 0 8px rgba(0, 210, 255, 0.6))",
                      }}
                    >
                      {item.icon}
                    </div>
                  )}

                  {/* Label */}
                  <span
                    className={`mt-2 text-[12px] tracking-wide transition-colors ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-white/85 font-medium group-hover:text-white"
                    }`}
                  >
                    {item.label}
                  </span>

                  {/* Active Cyan Underline Pill */}
                  {isActive && (
                    <div
                      className="mt-1.5 w-6 h-[3px] rounded-full"
                      style={{
                        background: "#00d2ff",
                        boxShadow: "0 0 12px #00d2ff, 0 0 4px #00d2ff",
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>
        </div>
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

      {/* ── Enterprise Pharmaceutical Glassmorphism Statistics Panel (Ultra High Clarity Native) ── */}
      <div className="hz-stats absolute bottom-8 left-6 right-6 md:left-36 md:right-8 z-10 max-w-[980px] mx-auto">
        {/* Background Atmospheric Glowing Caustics for Backdrop Blur */}
        <div
          className="absolute -inset-2 rounded-[46px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 70% 50%, rgba(0, 180, 255, 0.35) 0%, rgba(0, 100, 220, 0.15) 50%, transparent 80%)",
            filter: "blur(20px)",
          }}
        />

        {/* Main Ultra-Clarity Glass Capsule Container Surface */}
        <div
          className="relative rounded-[42px] overflow-hidden px-6 py-5 md:px-10 md:py-6 select-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(238, 247, 255, 0.84) 0%, rgba(210, 238, 255, 0.72) 40%, rgba(145, 212, 255, 0.84) 100%)",
            backdropFilter: "blur(30px) saturate(1.9)",
            WebkitBackdropFilter: "blur(30px) saturate(1.9)",
            border: "2.5px solid rgba(255, 255, 255, 0.98)",
            boxShadow: `
              0 22px 60px rgba(0, 75, 170, 0.22),
              0 4px 16px rgba(0, 0, 0, 0.04),
              inset 0 2px 3px rgba(255, 255, 255, 1),
              inset 0 -2px 8px rgba(0, 166, 255, 0.35)
            `,
          }}
        >
          {/* Top Edge Specular Luminous Edge Line */}
          <div
            className="absolute top-0 inset-x-6 h-[2px] pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.85) 100%)",
            }}
          />

          {/* Bottom Edge Glowing Electric Cyan Border Highlight */}
          <div
            className="absolute bottom-0 inset-x-0 h-[2.5px] pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, #00d2ff 0%, #00bfff 50%, #0099ff 100%)",
              boxShadow: "0 -2px 10px rgba(0, 210, 255, 0.9)",
            }}
          />

          {/* 4 Statistics Horizontal Grid */}
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-0">
            {STATS.map((stat, i) => (
              <div
                key={stat.number}
                className="hz-stat-item group relative flex items-center justify-start md:justify-center gap-4 px-2 md:px-4 transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px]"
              >
                {/* 3D Glossy Marble Sphere Orb */}
                <div
                  className="relative flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06] group-hover:shadow-[0_14px_30px_rgba(0,90,210,0.3)]"
                  style={{
                    background:
                      "radial-gradient(circle at 35% 35%, #ffffff 0%, #edf7ff 50%, #cbe8ff 80%, #90d4ff 100%)",
                    border: "2.5px solid #ffffff",
                    boxShadow: `
                      0 10px 24px rgba(0, 90, 200, 0.22),
                      inset 3px 3px 5px rgba(255, 255, 255, 1),
                      inset -3px -3px 8px rgba(0, 140, 255, 0.4)
                    `,
                  }}
                >
                  {/* Sphere Top-Left Specular Crescent */}
                  <div
                    className="absolute top-1.5 left-2 w-5 h-2.5 rounded-full pointer-events-none"
                    style={{
                      background: "rgba(255, 255, 255, 0.98)",
                      filter: "blur(0.5px)",
                      transform: "rotate(-35deg)",
                    }}
                  />

                  {/* Sphere Bottom-Right Glowing Cyan Spot */}
                  <div
                    className="absolute bottom-2 right-2.5 w-3.5 h-2 rounded-full pointer-events-none"
                    style={{
                      background: "#00d2ff",
                      filter: "blur(1px)",
                      boxShadow: "0 0 8px #00d2ff",
                      transform: "rotate(-25deg)",
                    }}
                  />

                  {/* Asset PNG Icon inside Sphere */}
                  <Image
                    src={stat.iconSrc}
                    alt={stat.alt}
                    width={32}
                    height={32}
                    className="relative z-10 object-contain transition-transform duration-300 group-hover:scale-[1.06]"
                    style={{
                      filter:
                        "invert(16%) sepia(85%) saturate(1400%) hue-rotate(205deg) brightness(0.75)",
                    }}
                  />
                </div>

                {/* Metric Content */}
                <div className="flex flex-col">
                  {/* Number */}
                  <div
                    className="font-display text-[30px] md:text-[34px] font-extrabold leading-none tracking-tight transition-all duration-300 group-hover:brightness-110"
                    style={{ color: "#05184a" }}
                  >
                    {stat.number}
                  </div>

                  {/* Label */}
                  <div
                    className="mt-1.5 whitespace-pre-line text-[12px] md:text-[13px] font-medium leading-[1.3]"
                    style={{ color: "#2d4a6b" }}
                  >
                    {stat.label}
                  </div>

                  {/* Micro Cyan Indicator Dots */}
                  <div className="mt-2 flex gap-[5px]">
                    <span
                      className="h-[5px] w-[5px] rounded-full"
                      style={{
                        background: "#00d2ff",
                        boxShadow: "0 0 6px rgba(0, 210, 255, 0.9)",
                      }}
                    />
                    <span
                      className="h-[5px] w-[5px] rounded-full"
                      style={{
                        background: "#00a2e8",
                        boxShadow: "0 0 4px rgba(0, 162, 232, 0.7)",
                      }}
                    />
                    <span
                      className="h-[5px] w-[5px] rounded-full"
                      style={{ background: "#80dcfb" }}
                    />
                  </div>
                </div>

                {/* Fading Vertical Glass Separator */}
                {i < STATS.length - 1 && (
                  <div
                    className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-[56px] w-px pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.9) 25%, rgba(255, 255, 255, 0.9) 75%, transparent 100%)",
                      boxShadow: "1px 0 0 rgba(180, 220, 255, 0.45)",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
