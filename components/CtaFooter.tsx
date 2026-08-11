"use client";

import { useRef, useState, type FormEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CrystalButton } from "@/components/ui/CrystalButton";
import { FloatingPills } from "@/components/FloatingPills";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function CtaFooter() {
  const rootRef = useRef<HTMLElement>(null);
  const [reduceMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });
  const [submitted, setSubmitted] = useState(false);

  useGSAP(
    () => {
      if (reduceMotion) return;

      gsap.from(".cta-content", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: rootRef, dependencies: [reduceMotion] },
  );

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={rootRef}
      className="section-pad relative scroll-mt-28 overflow-hidden py-24 md:py-28"
    >
      {/* 3D Floating Capsules (Oryzo-style) spanning entire section */}
      <FloatingPills active={!reduceMotion} />

      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem]">
        {/* Base dark gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #0b1e48 0%, #132a5c 45%, #008a8a 100%)",
          }}
        />
        {/* Glass overlay */}
        <div className="glass-panel-dark absolute inset-0" />

        <div className="cta-content relative z-10 grid gap-10 px-6 py-14 md:grid-cols-2 md:px-12 md:py-16">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Partner with Zelnex for reliable global supply
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/80">
              Tell us about your market needs. Our team will respond with
              portfolio options, documentation support, and next steps for
              partnership.
            </p>
            <div className="mt-8 hidden md:block">
              <CrystalButton href="mailto:info@zelnex.com" variant="outline-light">
                Email Sales Directly
              </CrystalButton>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="glass-panel rounded-3xl p-6 md:p-8"
          >
            {submitted ? (
              <p className="text-center text-base font-medium text-navy">
                Thank you. We have received your inquiry and will be in touch
                shortly.
              </p>
            ) : (
              <div className="flex flex-col gap-4">
                <label className="block text-sm font-medium text-navy">
                  Full name
                  <input
                    required
                    name="name"
                    type="text"
                    className="mt-1.5 w-full rounded-xl border border-navy/15 bg-white/70 px-4 py-3 text-sm text-slate outline-none ring-teal-bright/40 focus:ring-2"
                    placeholder="Your name"
                  />
                </label>
                <label className="block text-sm font-medium text-navy">
                  Work email
                  <input
                    required
                    name="email"
                    type="email"
                    className="mt-1.5 w-full rounded-xl border border-navy/15 bg-white/70 px-4 py-3 text-sm text-slate outline-none ring-teal-bright/40 focus:ring-2"
                    placeholder="you@company.com"
                  />
                </label>
                <label className="block text-sm font-medium text-navy">
                  Message
                  <textarea
                    required
                    name="message"
                    rows={3}
                    className="mt-1.5 w-full resize-none rounded-xl border border-navy/15 bg-white/70 px-4 py-3 text-sm text-slate outline-none ring-teal-bright/40 focus:ring-2"
                    placeholder="Products, markets, or volumes of interest"
                  />
                </label>
                <button
                  type="submit"
                  className="btn-teal mt-2 inline-flex w-full items-center justify-center !rounded-2xl px-7 py-3.5 text-sm font-semibold tracking-wide"
                >
                  Send Inquiry
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
