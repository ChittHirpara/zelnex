"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const PACKAGING = [
  { name: "Alu-Alu", tone: "bg-[#dbeafe] text-[#1e3a7a]" },
  { name: "Blisters", tone: "bg-[#ccfbf1] text-[#0f766e]" },
  { name: "Aluminium Strips", tone: "bg-[#ffedd5] text-[#9a3412]" },
  { name: "HDPE Bottles", tone: "bg-[#dcfce7] text-[#166534]" },
  { name: "Glass Bottles", tone: "bg-[#fef9c3] text-[#854d0e]" },
  { name: "Dry Injection", tone: "bg-[#e0f2fe] text-[#075985]" },
  { name: "Sachets", tone: "bg-[#e2e8f0] text-[#1e293b]" },
  { name: "Liquid Syrup", tone: "bg-[#99f6e4] text-[#115e59]" },
  { name: "Food Products", tone: "bg-[#fef3c7] text-[#92400e]" },
  { name: "Soft Gel", tone: "bg-[#bae6fd] text-[#0c4a6e]" },
  { name: "Tubes", tone: "bg-[#fecdd3] text-[#9f1239]" },
  { name: "Pet Jar", tone: "bg-[#d1fae5] text-[#065f46]" },
  { name: "Carton", tone: "bg-[#cbd5e1] text-[#0b1e48]" },
  { name: "Oral Spray", tone: "bg-[#a5f3fc] text-[#155e75]" },
] as const;

export function Packaging() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduce) return;

      gsap.from(".pack-item", {
        scale: 0.88,
        opacity: 0,
        duration: 0.55,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 80%" },
      });
    },
    { scope: rootRef },
  );

  return (
    <section
      id="packaging"
      ref={rootRef}
      className="relative section-pad scroll-mt-24 bg-white/80 backdrop-blur-sm py-20 md:py-24"
    >
      <div className="relative z-20 mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
            Our Packaging
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">
            Formats ready for global markets
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Multiple packaging options to match product form, stability needs,
            and market preferences.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {PACKAGING.map((item) => (
            <li
              key={item.name}
              className="pack-item flex flex-col items-center gap-3 text-center"
            >
              <span
                className={`flex h-20 w-20 items-center justify-center rounded-full text-lg font-semibold pack-circle ${item.tone}`}
                aria-hidden
              >
                {item.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)}
              </span>
              <span className="text-sm font-medium text-navy">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
