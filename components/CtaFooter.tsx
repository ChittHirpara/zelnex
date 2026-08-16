"use client";

import { useRef, useState, type FormEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FloatingPills } from "@/components/FloatingPills";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

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

      gsap.fromTo(
        ".cta-content",
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 80%",
          },
        }
      );
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
      className="section-pad relative scroll-mt-28 overflow-hidden py-24 md:py-32"
    >
      {/* 3D Floating Capsules Background */}
      <FloatingPills active={!reduceMotion} />

      <div
        className="cta-content relative mx-auto max-w-6xl overflow-hidden rounded-[36px] p-8 md:p-14 text-white shadow-2xl transition-all duration-500"
        style={{
          background:
            "radial-gradient(120% 140% at 14% -12%, rgba(13, 40, 92, 0.96), rgba(6, 21, 54, 0.94) 60%, rgba(3, 12, 36, 0.98))",
          backdropFilter: "blur(28px) saturate(180%)",
          WebkitBackdropFilter: "blur(28px) saturate(180%)",
          border: "1.5px solid rgba(255, 255, 255, 0.25)",
          boxShadow: `
            0 25px 60px -12px rgba(6, 21, 54, 0.55),
            inset 0 2px 0 rgba(255, 255, 255, 0.45),
            inset 0 -2px 6px rgba(0, 0, 0, 0.4)
          `,
        }}
      >
        {/* Top-Right Glowing Lens Flare */}
        <div
          className="absolute right-10 top-10 w-3 h-3 rounded-full pointer-events-none"
          style={{
            background: "#ffffff",
            boxShadow: "0 0 10px #ffffff, 0 0 20px #00f2fe",
          }}
        />

        <div className="relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-400/15 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-cyan-300 border border-cyan-400/30 backdrop-blur-md shadow-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Direct Global Export Inquiries</span>
            </div>

            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-[2.65rem] leading-[1.18]">
              Partner with Zelnex for reliable global supply
            </h2>

            <div
              className="my-5 h-[3.5px] w-14 rounded-full"
              style={{
                background: "linear-gradient(90deg, #00f2fe, #00bfb5)",
              }}
            />

            <p className="text-base leading-relaxed text-slate-300 md:text-[1.05rem]">
              Tell us about your market needs. Our international regulatory and export team will respond
              within 24 hours with product dossiers, batch pricing, and distribution agreements.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:info@zelnex.com"
                className="inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-xs font-bold text-white border border-white/25 bg-white/10 hover:bg-white/20 transition-all backdrop-blur-md"
              >
                <span>✉ info@zelnex.com</span>
              </a>
              <div className="flex items-center gap-2 text-xs font-medium text-cyan-300">
                <span className="h-2 w-2 rounded-full bg-teal" />
                <span>Response guaranteed within 24 business hours</span>
              </div>
            </div>
          </div>

          {/* Form Container */}
          <div
            className="rounded-[28px] p-6 md:p-8 select-none"
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              border: "1.2px solid rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
            }}
          >
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal text-navy font-bold text-xl mb-4">
                  ✓
                </div>
                <h3 className="font-display text-xl font-bold text-white">Inquiry Received</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Thank you. Our international partnership director will reach out to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-cyan-300 mb-1.5">
                    Full Name
                  </label>
                  <input
                    required
                    name="name"
                    type="text"
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all"
                    placeholder="e.g. Dr. Alexander Vance"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-cyan-300 mb-1.5">
                      Business Email
                    </label>
                    <input
                      required
                      name="email"
                      type="email"
                      className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all"
                      placeholder="alex@distributor.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-cyan-300 mb-1.5">
                      Country / Market
                    </label>
                    <input
                      required
                      name="country"
                      type="text"
                      className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all"
                      placeholder="e.g. Kenya, Vietnam, Iraq"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-cyan-300 mb-1.5">
                    Inquiry Details / Products Needed
                  </label>
                  <textarea
                    rows={3}
                    name="message"
                    required
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all resize-none"
                    placeholder="Specify therapeutic categories, dosage forms, or custom contract manufacturing requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 group flex items-center justify-center gap-3 rounded-xl py-3.5 text-sm font-extrabold text-navy shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(0,242,254,0.6)]"
                  style={{
                    background: "linear-gradient(135deg, #00f2fe 0%, #00bfb5 100%)",
                  }}
                >
                  <span>Submit Partnership Inquiry</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Cyan Caustic Light Line */}
        <div
          className="absolute bottom-0 inset-x-12 h-[2.5px] rounded-full pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent, #00f2fe 50%, transparent)",
            boxShadow: "0 0 14px rgba(0, 242, 254, 0.95)",
          }}
        />
      </div>
    </section>
  );
}
