"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const EXPERTISE = [
  {
    title: "Regulatory Services",
    description:
      "Documentation, dossier support, and international market registration guidance.",
    href: "#contact",
  },
  {
    title: "Contract Manufacturing",
    description:
      "Flexible manufacturing partnerships aligned with quality and supply needs.",
    href: "#contact",
  },
  {
    title: "3rd Party Manufacturing",
    description:
      "Reliable third-party production through WHO-GMP certified facilities.",
    href: "#contact",
  },
  {
    title: "Generic Products",
    description:
      "A diverse portfolio of tablets, capsules, syrups, and combination medicines.",
    href: "#products",
  },
] as const;

export function Expertise() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduce) return;

      gsap.from(".expertise-item", {
        y: 32,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 78%" },
      });
    },
    { scope: rootRef },
  );

  return (
    <section
      id="expertise"
      ref={rootRef}
      className="relative section-pad scroll-mt-24 bg-white/80 backdrop-blur-sm py-20 md:py-24"
    >
      <div className="relative z-20 mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
            Our Expertise
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">
            Capabilities that support global partners
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            From regulatory readiness to manufacturing and generics, Zelnex is
            built for scalable, export-oriented collaboration.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {EXPERTISE.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className="expertise-item expertise-3d group flex flex-col rounded-2xl bg-white p-7 depth-shadow"
            >
              <span className="font-display text-sm font-semibold text-teal">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-navy">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors group-hover:text-teal">
                Learn more
                <span
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden
                >
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
