"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function DnaVisual() {
  const ref = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduce || !ref.current) return;

      gsap.to(".dna-orbit", {
        rotate: 360,
        transformOrigin: "50% 50%",
        duration: 28,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".dna-bead", {
        opacity: 0.45,
        duration: 1.6,
        yoyo: true,
        repeat: -1,
        stagger: { each: 0.08, from: "center" },
        ease: "sine.inOut",
      });
    },
    { scope: ref },
  );

  const left: { cx: number; cy: number }[] = [];
  const right: { cx: number; cy: number }[] = [];
  const rungs: { x1: number; y1: number; x2: number; y2: number }[] = [];

  for (let i = 0; i < 18; i++) {
    const t = i / 17;
    const y = 40 + t * 420;
    const amp = 58;
    const phase = t * Math.PI * 3.2;
    const lx = 200 + Math.sin(phase) * amp;
    const rx = 200 + Math.sin(phase + Math.PI) * amp;
    left.push({ cx: lx, cy: y });
    right.push({ cx: rx, cy: y });
    if (i % 2 === 0) {
      rungs.push({ x1: lx, y1: y, x2: rx, y2: y });
    }
  }

  return (
    <div className="relative aspect-square w-full max-w-[520px] mx-auto">
      <div
        className="absolute inset-[8%] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, transparent 42%, rgba(0,166,166,0.12) 55%, transparent 70%)",
          boxShadow: "inset 0 0 60px rgba(0,191,181,0.15)",
        }}
        aria-hidden
      />
      <svg
        ref={ref}
        viewBox="0 0 400 500"
        className="relative z-10 h-full w-full"
        aria-hidden
      >
        <defs>
          <linearGradient id="dnaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4fc3f7" />
            <stop offset="50%" stopColor="#00bfb5" />
            <stop offset="100%" stopColor="#1e3a7a" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <ellipse
          className="dna-orbit"
          cx="200"
          cy="250"
          rx="150"
          ry="150"
          fill="none"
          stroke="rgba(0,166,166,0.18)"
          strokeWidth="1"
          strokeDasharray="4 8"
        />

        {rungs.map((r, i) => (
          <line
            key={`rung-${i}`}
            x1={r.x1}
            y1={r.y1}
            x2={r.x2}
            y2={r.y2}
            stroke="url(#dnaGrad)"
            strokeWidth="2"
            opacity="0.45"
          />
        ))}

        {left.map((p, i) => (
          <circle
            key={`l-${i}`}
            className="dna-bead"
            cx={p.cx}
            cy={p.cy}
            r={i % 3 === 0 ? 9 : 6.5}
            fill="url(#dnaGrad)"
            filter="url(#glow)"
            opacity="0.9"
          />
        ))}
        {right.map((p, i) => (
          <circle
            key={`r-${i}`}
            className="dna-bead"
            cx={p.cx}
            cy={p.cy}
            r={i % 3 === 0 ? 9 : 6.5}
            fill="url(#dnaGrad)"
            filter="url(#glow)"
            opacity="0.85"
          />
        ))}

        <circle cx="95" cy="120" r="10" fill="#00bfb5" opacity="0.7" className="dna-bead" />
        <circle cx="320" cy="160" r="7" fill="#4fc3f7" opacity="0.65" className="dna-bead" />
        <circle cx="310" cy="380" r="12" fill="#00a6a6" opacity="0.55" className="dna-bead" />
        <circle cx="80" cy="360" r="8" fill="#1e3a7a" opacity="0.4" className="dna-bead" />
      </svg>
    </div>
  );
}
