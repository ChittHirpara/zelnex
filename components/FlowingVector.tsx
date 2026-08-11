"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Section Milestone coordinates along the meaningful Lupin-style S-curve
const MILESTONES = [
  { name: "Overview Start", x: 180, y: 50, label: "Overview" },
  { name: "Overview Stats", x: 1020, y: 350, label: "50+ Countries" },
  { name: "Expertise Cards", x: 220, y: 980, label: "Capabilities" },
  { name: "Categories Grid", x: 1100, y: 1620, label: "Therapeutics" },
  { name: "Packaging Formats", x: 180, y: 2250, label: "Packaging" },
  { name: "Certifications", x: 1080, y: 2880, label: "WHO-GMP" },
  { name: "Growing Network", x: 600, y: 3500, label: "Global Network" },
  { name: "Vector End / Pills Start", x: 600, y: 3820, label: "Start 3D Capsules" },
];

export function FlowingVector() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const glowPathRef = useRef<SVGPathElement>(null);
  const nodesRef = useRef<(SVGGElement | null)[]>([]);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const path = pathRef.current;
      const glowPath = glowPathRef.current;
      if (!path || !glowPath) return;

      const length = path.getTotalLength();

      if (reduce) {
        gsap.set([path, glowPath], { strokeDasharray: length, strokeDashoffset: 0 });
        gsap.set(nodesRef.current, { opacity: 1, scale: 1 });
        return;
      }

      // Initialize paths to be hidden (drawn out)
      gsap.set([path, glowPath], {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      // Initialize milestone nodes to scale 0
      gsap.set(nodesRef.current, {
        opacity: 0,
        scale: 0,
        transformOrigin: "center center",
      });

      // GSAP Timeline linked directly to scroll position (Lupin-style continuous draw)
      const wrapperEl =
        document.getElementById("vector-wrapper") || containerRef.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperEl,
          start: "top 80%",
          end: "bottom 90%",
          scrub: 0.8, // Smooth scrub so tip moves alongside user
        },
      });

      // 1. Draw the vector line smoothly as user scrolls
      tl.to([path, glowPath], {
        strokeDashoffset: 0,
        ease: "none",
        duration: 1,
      }, 0);

      // 2. Ignite glowing milestone nodes as the line tip reaches each section
      MILESTONES.forEach((_, i) => {
        const node = nodesRef.current[i];
        if (!node) return;

        const fraction = i / (MILESTONES.length - 1);
        const triggerTime = Math.max(0, fraction - 0.04);

        tl.to(
          node,
          {
            opacity: 1,
            scale: 1,
            duration: 0.08,
            ease: "back.out(2)",
          },
          triggerTime
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-10 overflow-hidden"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 3850"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Luminous Neon Gradient */}
          <linearGradient id="lupinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00f2fe" />
            <stop offset="20%" stopColor="#00bfb5" />
            <stop offset="45%" stopColor="#00e5ff" />
            <stop offset="70%" stopColor="#38ef7d" />
            <stop offset="90%" stopColor="#00bfb5" />
            <stop offset="100%" stopColor="#00f2fe" />
          </linearGradient>

          {/* High-intensity Glow Filter */}
          <filter id="neonGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="8" result="blur1" />
            <feGaussianBlur stdDeviation="16" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Node Glow Filter */}
          <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#00f2fe" floodOpacity="0.8" />
          </filter>
        </defs>

        {/* Outer Soft Glow Layer */}
        <path
          ref={glowPathRef}
          d="
            M 180 50
            C 600 80, 1020 180, 1020 350
            C 1020 600, 220 700, 220 980
            C 220 1300, 1100 1350, 1100 1620
            C 1100 1900, 180 1980, 180 2250
            C 180 2550, 1080 2600, 1080 2880
            C 1080 3200, 600 3300, 600 3500
            C 600 3650, 600 3750, 600 3820
          "
          fill="none"
          stroke="url(#lupinGrad)"
          strokeWidth="12"
          opacity="0.3"
          strokeLinecap="round"
          style={{ strokeDasharray: 5000, strokeDashoffset: 5000 }}
        />

        {/* Primary Crisp Vector Line */}
        <path
          ref={pathRef}
          d="
            M 180 50
            C 600 80, 1020 180, 1020 350
            C 1020 600, 220 700, 220 980
            C 220 1300, 1100 1350, 1100 1620
            C 1100 1900, 180 1980, 180 2250
            C 180 2550, 1080 2600, 1080 2880
            C 1080 3200, 600 3300, 600 3500
            C 600 3650, 600 3750, 600 3820
          "
          fill="none"
          stroke="url(#lupinGrad)"
          strokeWidth="4.5"
          filter="url(#neonGlow)"
          strokeLinecap="round"
          style={{ strokeDasharray: 5000, strokeDashoffset: 5000 }}
        />

        {/* Glowing Milestone Nodes along the path */}
        {MILESTONES.map((m, i) => (
          <g
            key={m.name}
            ref={(el) => {
              nodesRef.current[i] = el;
            }}
            transform={`translate(${m.x}, ${m.y})`}
            filter="url(#nodeGlow)"
          >
            {/* Pulsing Outer Ring */}
            <circle r="12" fill="none" stroke="#00f2fe" strokeWidth="1.5" opacity="0.6">
              <animate
                attributeName="r"
                values="10;18;10"
                dur="3s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.8;0.2;0.8"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
            {/* Core Node Dot */}
            <circle r="6" fill="#ffffff" stroke="#00bfb5" strokeWidth="2.5" />
          </g>
        ))}
      </svg>
    </div>
  );
}
