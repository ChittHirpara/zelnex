"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

export function FlowingVector() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let targetProgress = 0;
    let currentProgress = 0;
    let animRafId: number;
    let scrollRafId: number;

    const computeTarget = () => {
      const wrapper = document.getElementById("vector-wrapper");
      if (!wrapper) return;
      const rect = wrapper.getBoundingClientRect();
      const wh = window.innerHeight;

      // Active drawing point leads slightly ahead of scroll at 52% of viewport height
      const scrolled = -rect.top + wh * 0.52;
      targetProgress = Math.max(0, Math.min(1, scrolled / rect.height));
    };

    const animate = () => {
      const diff = targetProgress - currentProgress;
      currentProgress += diff * 0.16;
      if (Math.abs(diff) < 0.0005) currentProgress = targetProgress;

      const clipBottom = Math.max(0, Math.min(100, (1 - currentProgress) * 100));
      if (el) {
        el.style.clipPath = `inset(0 0 ${clipBottom}% 0)`;
      }

      animRafId = requestAnimationFrame(animate);
    };

    const onScroll = () => {
      cancelAnimationFrame(scrollRafId);
      scrollRafId = requestAnimationFrame(computeTarget);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    const wrapper = document.getElementById("vector-wrapper");
    let ro: ResizeObserver | null = null;
    if (wrapper) {
      ro = new ResizeObserver(onScroll);
      ro.observe(wrapper);
    }

    computeTarget();
    currentProgress = 0;
    animRafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRafId);
      cancelAnimationFrame(scrollRafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (ro) ro.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-30 w-full h-full overflow-hidden hidden md:block"
      style={{
        clipPath: "inset(0 0 100% 0)",
        willChange: "clip-path",
      }}
    >
      {/* Complete continuous SVG vector art layered naturally above all sections */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          src="/new.svg"
          alt="Zelnex Continuous Flowing Vector Art"
          fill
          unoptimized
          priority
          className="w-full h-full object-fill pointer-events-none select-none opacity-50 mix-blend-multiply transition-opacity duration-300"
          style={{ objectPosition: "top", imageRendering: "-webkit-optimize-contrast" }}
        />
      </div>
    </div>
  );
}

export default FlowingVector;
