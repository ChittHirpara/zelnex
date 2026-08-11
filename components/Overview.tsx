"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const STATS = [
  { value: "8+", label: "Years of Expertise" },
  { value: "800+", label: "Products" },
  { value: "50+", label: "Countries" },
] as const;

export function Overview() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduce) return;

      gsap.from(".overview-copy", {
        x: -24,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 75%" },
      });

      gsap.from(".overview-stat", {
        y: 28,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 70%" },
      });
    },
    { scope: rootRef },
  );

  return (
    <section
      id="overview"
      ref={rootRef}
      className="relative section-pad scroll-mt-24 bg-mist/80 backdrop-blur-sm py-20 md:py-24 section-glow-teal"
    >
      <div className="relative z-20 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
        <div className="overview-copy">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
            An Overview
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">
            Building a trusted export-oriented pharmaceutical brand
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-[1.05rem]">
            Zelnex Pharmaceuticals Pvt. Ltd. is an emerging Indian pharmaceutical
            company focused on delivering high-quality, affordable, and globally
            compliant healthcare solutions—specializing in marketing, sourcing,
            and global distribution of formulations from WHO-GMP certified
            facilities.
          </p>
          <Link
            href="/overview"
            className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-navy transition-colors hover:text-teal"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal text-white shadow-md transition-transform group-hover:translate-x-1">
              <ArrowIcon />
            </span>
            Read full company overview
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4 sm:gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="overview-stat glass-card rounded-2xl p-5 text-center lg:text-left"
            >
              <p className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-medium leading-snug text-muted sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
