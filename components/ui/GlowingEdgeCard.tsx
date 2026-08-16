"use client";

import React, { useEffect, useRef, useState } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface GlowingEdgeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: "dark" | "light";
  children?: React.ReactNode;
}

/**
 * GlowingEdgeCard
 *
 * Distinctive card with colored glowing edges that track the pointer position.
 * Features a mesh gradient border and radial/conic glow that intensifies on hover.
 */
export function GlowingEdgeCard({
  mode = "light",
  className,
  children,
  ...props
}: GlowingEdgeCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const round = (value: number, precision = 2) => parseFloat(value.toFixed(precision));
  const clamp = (value: number, min = 0, max = 100) => Math.min(Math.max(value, min), max);

  const handlePointerMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const px = clamp((100 / rect.width) * x);
    const py = clamp((100 / rect.height) * y);

    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = x - cx;
    const dy = y - cy;

    let angle = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
    if (angle < 0) angle += 360;

    // Distance to edge (0 to 100)
    const kx = dx !== 0 ? cx / Math.abs(dx) : Infinity;
    const ky = dy !== 0 ? cy / Math.abs(dy) : Infinity;
    const edgeDist = clamp((1 / Math.min(kx, ky)) * 100, 0, 100);

    cardRef.current.style.setProperty("--pointer-x", `${round(px)}%`);
    cardRef.current.style.setProperty("--pointer-y", `${round(py)}%`);
    cardRef.current.style.setProperty("--pointer-deg", `${round(angle)}deg`);
    cardRef.current.style.setProperty("--pointer-d", `${round(edgeDist)}`);
  };

  const handlePointerEnter = () => {
    setIsHovered(true);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    if (cardRef.current) {
      cardRef.current.style.setProperty("--pointer-d", "0");
    }
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      className={cn(
        "relative w-full h-full flex flex-col rounded-[24px] p-[2px] transition-all duration-300",
        mode === "light" ? "light-theme" : "dark-theme",
        className
      )}
      style={
        {
          "--pointer-x": "50%",
          "--pointer-y": "50%",
          "--pointer-deg": "45deg",
          "--pointer-d": "0",
          "--card-bg":
            mode === "light"
              ? "#ffffff"
              : "#071226",
          "--glow-color": mode === "light" ? "#00b8f2" : "#00f2fe",
          "--edge-gradient":
            mode === "light"
              ? "linear-gradient(135deg, #00b8f2 0%, #006edc 50%, #00f2fe 100%)"
              : "linear-gradient(135deg, #00f2fe 0%, #006edc 50%, #38bdf8 100%)",
        } as React.CSSProperties
      }
      {...props}
    >
      {/* ── 1. Pointer-Tracking Glowing Aura (Radiates outward) ── */}
      <div
        className="pointer-events-none absolute -inset-2 rounded-[28px] opacity-0 transition-opacity duration-300 blur-xl z-0"
        style={{
          opacity: isHovered ? 0.75 : 0.15,
          background: `radial-gradient(280px circle at var(--pointer-x) var(--pointer-y), rgba(0, 184, 242, 0.45), rgba(0, 110, 220, 0.15), transparent 70%)`,
        }}
      />

      {/* ── 2. Mesh Gradient Border Layer ── */}
      <div
        className="absolute inset-0 rounded-[24px] transition-all duration-300 z-1"
        style={{
          background: isHovered
            ? `radial-gradient(240px circle at var(--pointer-x) var(--pointer-y), #00b8f2, #006edc 40%, rgba(0, 110, 220, 0.2) 75%, rgba(255, 255, 255, 0.1) 100%)`
            : mode === "light"
            ? "linear-gradient(180deg, rgba(0, 110, 220, 0.18) 0%, rgba(0, 110, 220, 0.08) 100%)"
            : "linear-gradient(180deg, rgba(0, 242, 254, 0.25) 0%, rgba(0, 110, 220, 0.12) 100%)",
          boxShadow: isHovered
            ? "0 12px 30px -8px rgba(0, 184, 242, 0.35)"
            : "0 8px 24px -6px rgba(0, 0, 0, 0.06)",
        }}
      />

      {/* ── 3. Inner Card Content Container ── */}
      <div
        className={cn(
          "relative z-10 w-full h-full rounded-[22px] overflow-hidden transition-colors duration-300",
          mode === "light"
            ? "bg-white text-[#082B61]"
            : "bg-[#061226] text-white"
        )}
        style={{
          boxShadow:
            mode === "light"
              ? "inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 2px 8px rgba(0, 50, 120, 0.04)"
              : "inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 2px 8px rgba(0, 0, 0, 0.4)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default GlowingEdgeCard;
