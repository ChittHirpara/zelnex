"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export interface PillNavItem {
  id: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  href?: string;
  ariaLabel?: string;
}

export interface PillNavProps {
  items: PillNavItem[];
  activeId: string;
  onSelect?: (id: string) => void;
  className?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
}

export const PillNav: React.FC<PillNavProps> = ({
  items,
  activeId,
  onSelect,
  className = "",
  ease = "power3.out",
  baseColor = "#006EDC",
  pillColor = "#FAFBF9",
  hoveredPillTextColor = "#FFFFFF",
  pillTextColor = "#2A3447",
}) => {
  const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const tlRefs = useRef<Array<gsap.core.Timeline | null>>([]);
  const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([]);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle, index) => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement as HTMLElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;

        if (w === 0 || h === 0) return;

        // Calculate the radius for the expanding circle to cover the pill
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`,
        });

        const label = pill.querySelector<HTMLElement>(".pill-label");
        const hoverLabel = pill.querySelector<HTMLElement>(".pill-label-hover");

        if (label) gsap.set(label, { y: 0 });
        if (hoverLabel) gsap.set(hoverLabel, { y: h + 12, opacity: 0 });

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(
          circle,
          {
            scale: 1.25,
            xPercent: -50,
            duration: 0.5,
            ease,
            overwrite: "auto",
          },
          0
        );

        if (label) {
          tl.to(
            label,
            {
              y: -(h + 8),
              duration: 0.4,
              ease,
              overwrite: "auto",
            },
            0
          );
        }

        if (hoverLabel) {
          gsap.set(hoverLabel, { y: Math.ceil(h + 16), opacity: 0 });
          tl.to(
            hoverLabel,
            {
              y: 0,
              opacity: 1,
              duration: 0.4,
              ease,
              overwrite: "auto",
            },
            0
          );
        }

        tlRefs.current[index] = tl;
      });
    };

    layout();

    const onResize = () => layout();
    window.addEventListener("resize", onResize);

    if (document.fonts) {
      document.fonts.ready.then(layout).catch(() => {});
    }

    return () => window.removeEventListener("resize", onResize);
  }, [items, ease]);

  // When activeId changes, ensure active item label is always at position 0
  useEffect(() => {
    items.forEach((item, index) => {
      const circle = circleRefs.current[index];
      if (!circle?.parentElement) return;

      const pill = circle.parentElement as HTMLElement;
      const label = pill.querySelector<HTMLElement>(".pill-label");
      const hoverLabel = pill.querySelector<HTMLElement>(".pill-label-hover");

      if (activeId === item.id) {
        tlRefs.current[index]?.seek(0).pause();
        if (label) gsap.set(label, { y: 0, opacity: 1 });
        if (hoverLabel) gsap.set(hoverLabel, { opacity: 0 });
        if (circle) gsap.set(circle, { scale: 0 });
      }
    });
  }, [activeId, items]);

  const handleEnter = (i: number, isActive: boolean) => {
    if (isActive) return;
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.35,
      ease,
      overwrite: "auto",
    });
  };

  const handleLeave = (i: number, isActive: boolean) => {
    if (isActive) return;
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.3,
      ease,
      overwrite: "auto",
    });
  };

  return (
    <div
      className={`flex items-center justify-center gap-2 flex-wrap ${className}`}
    >
      {items.map((item, i) => {
        const isActive = activeId === item.id;
        const Icon = item.icon;

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect?.(item.id)}
            onMouseEnter={() => handleEnter(i, isActive)}
            onMouseLeave={() => handleLeave(i, isActive)}
            className={`relative overflow-hidden inline-flex items-center justify-center px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold transition-colors duration-200 cursor-pointer select-none border ${
              isActive
                ? "bg-[#006EDC] text-white border-[#006EDC] shadow-md"
                : "border-[#DCDCD2] hover:border-[#006EDC]/50 shadow-xs"
            }`}
            style={{
              background: isActive
                ? "linear-gradient(135deg, #006EDC 0%, #082B61 100%)"
                : pillColor,
              color: isActive ? "#FFFFFF" : pillTextColor,
            }}
          >
            {/* GSAP Rising Circle Background on Hover */}
            <span
              ref={(el) => {
                circleRefs.current[i] = el;
              }}
              className={`pointer-events-none absolute left-1/2 bottom-0 rounded-full z-0 block ${
                isActive ? "hidden" : ""
              }`}
              style={{
                background: baseColor,
                willChange: "transform",
              }}
              aria-hidden="true"
            />

            {/* Content Stack with Vertical Slide Effect */}
            <span className="relative z-10 inline-flex items-center justify-center overflow-hidden">
              {/* Default Label */}
              <span
                className="pill-label relative z-10 inline-flex items-center gap-1.5 leading-none"
                style={{
                  willChange: "transform",
                  color: isActive ? "#FFFFFF" : pillTextColor,
                }}
              >
                {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
                <span>{item.label}</span>
              </span>

              {/* Hover Label (Always present for GSAP target, hidden when active) */}
              <span
                className={`pill-label-hover absolute inset-0 z-20 inline-flex items-center justify-center gap-1.5 w-full leading-none ${
                  isActive ? "hidden" : ""
                }`}
                style={{
                  color: hoveredPillTextColor,
                  willChange: "transform, opacity",
                }}
                aria-hidden="true"
              >
                {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
                <span>{item.label}</span>
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default PillNav;
