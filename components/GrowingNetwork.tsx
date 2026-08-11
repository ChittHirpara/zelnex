"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/** Approximate marker positions on a simplified equirectangular world map */
const MARKETS = [
  { name: "Kenya", x: 58, y: 58 },
  { name: "Nigeria", x: 50, y: 55 },
  { name: "Ghana", x: 47.5, y: 54 },
  { name: "Uganda", x: 57.5, y: 57 },
  { name: "Ivory Coast", x: 46, y: 54 },
  { name: "Congo", x: 53, y: 60 },
  { name: "Sudan", x: 56, y: 50 },
  { name: "Zambia", x: 55, y: 68 },
  { name: "Iraq", x: 60, y: 42 },
  { name: "Yemen", x: 62, y: 50 },
  { name: "Afghanistan", x: 66, y: 40 },
  { name: "India", x: 68, y: 48 },
  { name: "Sri Lanka", x: 69, y: 56 },
  { name: "Myanmar", x: 73, y: 48 },
  { name: "Cambodia", x: 76, y: 52 },
  { name: "Vietnam", x: 77.5, y: 50 },
  { name: "Mauritius", x: 61, y: 72 },
] as const;

export function GrowingNetwork() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduce) return;

      gsap.from(".network-copy", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 75%" },
      });

      gsap.from(".network-pin", {
        scale: 0,
        opacity: 0,
        duration: 0.45,
        stagger: 0.04,
        ease: "back.out(1.6)",
        scrollTrigger: { trigger: rootRef.current, start: "top 70%" },
      });
    },
    { scope: rootRef },
  );

  return (
    <section
      id="network"
      ref={rootRef}
      className="relative section-pad scroll-mt-24 bg-white/80 backdrop-blur-sm py-20 md:py-24"
    >
      <div className="relative z-20 mx-auto max-w-7xl">
        <div className="network-copy max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
            Our Global Presence
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">
            Growing Network
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Expanding across emerging and regulated markets with reliable supply
            chains and long-term distributor partnerships.
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-3xl glass-card">
          <svg
            viewBox="0 0 1000 480"
            className="h-auto w-full"
            role="img"
            aria-label="World map showing Zelnex global presence"
          >
            <rect width="1000" height="480" fill="#eef4f8" />
            <g fill="#c5d4e3" stroke="#a8bcd0" strokeWidth="1">
              <ellipse cx="220" cy="180" rx="140" ry="90" opacity="0.85" />
              <ellipse cx="280" cy="300" rx="70" ry="100" opacity="0.7" />
              <ellipse cx="480" cy="160" rx="90" ry="70" opacity="0.8" />
              <ellipse cx="520" cy="280" rx="80" ry="120" opacity="0.75" />
              <ellipse cx="700" cy="200" rx="160" ry="100" opacity="0.85" />
              <ellipse cx="820" cy="320" rx="90" ry="60" opacity="0.65" />
              <ellipse cx="180" cy="380" rx="50" ry="35" opacity="0.5" />
            </g>

            {MARKETS.map((m) => (
              <g
                key={m.name}
                className="network-pin"
                transform={`translate(${(m.x / 100) * 1000}, ${(m.y / 100) * 480})`}
              >
                <circle r="10" fill="rgba(0,166,166,0.2)" className="network-pulse" />
                <circle r="5" fill="#00a6a6" />
                <circle r="2" fill="#ffffff" />
                <title>{m.name}</title>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
