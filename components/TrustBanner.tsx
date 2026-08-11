"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const FEATURES = [
  {
    title: "Research Driven",
    desc: "Science-led portfolio growth across key therapeutic needs.",
    icon: FlaskIcon,
  },
  {
    title: "Quality Assured",
    desc: "WHO-GMP aligned partners and rigorous quality systems.",
    icon: ShieldIcon,
  },
  {
    title: "Global Presence",
    desc: "Trusted supply across 50+ international markets.",
    icon: PeopleIcon,
  },
  {
    title: "Patient Focused",
    desc: "Affordable medicines that put patient outcomes first.",
    icon: HeartIcon,
  },
] as const;

export function TrustBanner() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduce) return;

      gsap.from(".feature-item", {
        y: 20,
        opacity: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 90%",
        },
      });
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      className="section-pad relative z-20 -mt-2 pb-6 md:-mt-4"
      aria-label="Key capabilities"
    >
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/80 bg-white px-4 py-8 shadow-[0_16px_50px_rgba(11,30,72,0.08)] sm:px-8 md:px-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {FEATURES.map((item) => (
            <div
              key={item.title}
              className="feature-item flex gap-4 lg:flex-col lg:gap-3 xl:flex-row xl:gap-4"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                <item.icon />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-snug text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FlaskIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 3h6M10 3v6.2L5.5 18.5A2.5 2.5 0 0 0 7.7 22h8.6a2.5 2.5 0 0 0 2.2-3.5L13.8 9.2V3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 14h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3l8 3.5v5.2c0 4.8-3.2 7.9-8 9.3-4.8-1.4-8-4.5-8-9.3V6.5L12 3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3.5 19c.8-3 3-4.5 5.5-4.5S13.7 16 14.5 19M14 14.5c1.6-.3 3.2.3 4.5 2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 11h2l1 2 1.5-3.5 1 1.5H16"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
