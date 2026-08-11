"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CrystalButton } from "@/components/ui/CrystalButton";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CARDS = [
  {
    id: "rnd",
    title: "Advanced Manufacturing",
    subtitle: undefined as string | undefined,
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=80",
    tone: "photo" as const,
  },
  {
    id: "global-reach",
    title: "50+ Countries",
    subtitle: "Expanding access to essential medicines across international markets.",
    image: undefined,
    tone: "teal" as const,
  },
  {
    id: "quality",
    title: "300+ Quality Products",
    subtitle: "A broad therapeutic range for partners who demand reliability.",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80",
    tone: "photo-overlay" as const,
  },
] as const;

export function WhoWeAre() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduce) return;

      gsap.from(".who-copy", {
        x: -28,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 75%" },
      });

      gsap.from(".who-card", {
        y: 32,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 70%" },
      });
    },
    { scope: rootRef },
  );

  return (
    <section
      id="about"
      ref={rootRef}
      className="section-pad relative scroll-mt-24 bg-navy py-20 md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 80% 20%, rgba(0,166,166,0.35), transparent)",
        }}
        aria-hidden
      />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.35fr] lg:items-center lg:gap-14">
        <div className="who-copy">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-bright">
            Who We Are
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
            Dedicated to Global Health & Wellness
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/70">
            Zelnex Pharmaceuticals Pvt. Ltd. specializes in sourcing, marketing,
            and export of high-quality pharmaceutical products—building long-term
            partnerships with distributors, importers, and healthcare institutions
            worldwide.
          </p>
          <div className="mt-8">
            <CrystalButton href="#contact" variant="outline-light">
              More About Us
            </CrystalButton>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {CARDS.map((card) => {
            if (card.tone === "teal") {
              return (
                <div
                  key={card.id}
                  id={card.id}
                  className="who-card relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-3xl bg-teal p-5 scroll-mt-28"
                >
                  <WorldMapPattern />
                  <p className="relative z-10 font-display text-2xl font-bold text-white">
                    {card.title}
                  </p>
                  <p className="relative z-10 mt-2 text-sm leading-relaxed text-white/85">
                    {card.subtitle}
                  </p>
                </div>
              );
            }

            return (
              <div
                key={card.id}
                id={card.id}
                className="who-card group relative min-h-[280px] overflow-hidden rounded-3xl scroll-mt-28"
              >
                {card.image ? (
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 280px"
                  />
                ) : null}
                <div
                  className={`absolute inset-0 ${
                    card.tone === "photo-overlay"
                      ? "bg-gradient-to-t from-navy/85 via-navy/25 to-transparent"
                      : "bg-gradient-to-t from-navy/80 via-transparent to-transparent"
                  }`}
                />
                <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-2 p-5">
                  <div>
                    <p className="font-display text-lg font-semibold text-white">
                      {card.title}
                    </p>
                    {card.subtitle ? (
                      <p className="mt-1 text-xs leading-relaxed text-white/80">
                        {card.subtitle}
                      </p>
                    ) : null}
                  </div>
                  <Link
                    href="#contact"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal text-sm text-white"
                    aria-label={`Learn more about ${card.title}`}
                  >
                    →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WorldMapPattern() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-25"
      viewBox="0 0 300 400"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      {Array.from({ length: 80 }).map((_, i) => {
        const x = (i * 47) % 300;
        const y = (i * 31) % 400;
        return <circle key={i} cx={x} cy={y} r="1.5" fill="white" />;
      })}
      <ellipse
        cx="150"
        cy="180"
        rx="90"
        ry="55"
        fill="none"
        stroke="white"
        strokeWidth="1"
        opacity="0.5"
      />
    </svg>
  );
}
