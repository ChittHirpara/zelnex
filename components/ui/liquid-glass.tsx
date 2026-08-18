"use client";

import React, { useEffect, useRef, useId, useMemo } from "react";

// ============================================================================
// GLASS PRESETS (High Optical Transparency & Vibrant Refraction)
// ============================================================================

const GLASS_PRESETS = {
  subtle: {
    backgroundOpacity: 0.06,
    saturation: 1.5,
    brightness: 104,
    blur: 10,
    distortionScale: 30,
    mixBlendMode: "normal",
  },
  default: {
    backgroundOpacity: 0.12,
    saturation: 1.8,
    brightness: 108,
    blur: 16,
    distortionScale: 45,
    mixBlendMode: "normal",
  },
  bold: {
    backgroundOpacity: 0.18,
    saturation: 2.0,
    brightness: 112,
    blur: 20,
    distortionScale: 65,
    mixBlendMode: "normal",
  },
  ghost: {
    backgroundOpacity: 0.04,
    saturation: 1.2,
    brightness: 95,
    blur: 8,
    distortionScale: 20,
    mixBlendMode: "normal",
  },
};

type GlassVariant = keyof typeof GLASS_PRESETS;

// ============================================================================
// GLASS CORE COMPONENT
// ============================================================================

export interface GlassProps {
  variant?: GlassVariant;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  borderRadius?: number;
}

export const Glass: React.FC<GlassProps> = ({
  variant = "default",
  children,
  className = "",
  style = {},
  borderRadius = 32,
}) => {
  const uniqueId = useId().replace(/:/g, "-");
  const filterId = `glass-solid-${uniqueId}`;

  const containerRef = useRef<HTMLDivElement>(null);
  const feImageRef = useRef<SVGFEImageElement>(null);
  const displacementMapRef = useRef<SVGFEDisplacementMapElement>(null);

  const v = useMemo(() => GLASS_PRESETS[variant] || GLASS_PRESETS.default, [variant]);

  const generateMap = () => {
    if (!containerRef.current) return "";
    const rect = containerRef.current.getBoundingClientRect();
    const w = Math.max(rect.width || 240, 20);
    const h = Math.max(rect.height || 72, 20);

    const svgContent = `
      <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glassGrad-${uniqueId}" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stop-color="rgb(255,255,255)"/>
            <stop offset="50%" stop-color="rgb(160,210,255)"/>
            <stop offset="100%" stop-color="rgb(90,140,220)"/>
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#glassGrad-${uniqueId})" rx="${borderRadius}"/>
      </svg>
    `;
    return `data:image/svg+xml,${encodeURIComponent(svgContent)}`;
  };

  useEffect(() => {
    const update = () => {
      if (feImageRef.current) feImageRef.current.setAttribute("href", generateMap());
      if (displacementMapRef.current) {
        displacementMapRef.current.setAttribute("scale", v.distortionScale.toString());
      }
    };

    update();
    const obs = new ResizeObserver(update);
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, [v, variant, uniqueId, borderRadius]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden transition-all duration-500 ease-out flex items-center justify-center ${className}`}
      style={{
        ...style,
        borderRadius: `${borderRadius}px`,
        background: `linear-gradient(135deg, rgba(255, 255, 255, ${v.backgroundOpacity + 0.15}) 0%, rgba(240, 250, 255, ${v.backgroundOpacity}) 50%, rgba(0, 184, 242, ${v.backgroundOpacity + 0.08}) 100%)`,
        backdropFilter: `saturate(${v.saturation}) blur(${v.blur}px)`,
        WebkitBackdropFilter: `saturate(${v.saturation}) blur(${v.blur}px)`,
        border: "1.8px solid rgba(255, 255, 255, 0.95)",
        boxShadow: `
          0 20px 50px -10px rgba(0, 110, 220, 0.28),
          0 8px 20px rgba(0, 50, 130, 0.10),
          inset 0 2.5px 5px rgba(255, 255, 255, 0.98),
          inset 0 -2.5px 6px rgba(0, 110, 220, 0.22),
          inset 0 0 0 1.5px rgba(186, 225, 255, 0.6)
        `,
      }}
    >
      <svg className="absolute w-0 h-0 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <filter id={filterId} colorInterpolationFilters="sRGB" x="-50%" y="-50%" width="200%" height="200%">
          <feImage ref={feImageRef} x="0" y="0" width="100%" height="100%" preserveAspectRatio="none" result="map" />
          <feDisplacementMap
            ref={displacementMapRef}
            in="SourceGraphic"
            in2="map"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>

      {/* Glossy Liquid Bevel Highlights */}
      <div className="absolute top-0 inset-x-4 h-[2.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-95 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/35 via-transparent to-cyan-400/15 opacity-70" />
      <div className="absolute bottom-0 inset-x-6 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 pointer-events-none" />
    </div>
  );
};

// ============================================================================
// LIQUID GLASS CARD (CONTAINER / BORDER WRAPPER)
// ============================================================================

export interface LiquidGlassCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  borderRadius?: number;
  variant?: GlassVariant;
}

export function LiquidGlassCard({
  children,
  className = "",
  style = {},
  borderRadius = 36,
  variant = "bold",
}: LiquidGlassCardProps) {
  return (
    <div
      className={`relative overflow-hidden transition-all duration-500 ${className}`}
      style={{
        ...style,
        borderRadius: `${borderRadius}px`,
        background: `
          radial-gradient(130% 150% at 10% -10%, rgba(255, 255, 255, 0.72), rgba(244, 250, 255, 0.40) 45%, rgba(224, 242, 255, 0.24) 100%),
          linear-gradient(135deg, rgba(255, 255, 255, 0.58), rgba(228, 244, 255, 0.22))
        `,
        backdropFilter: "blur(28px) saturate(200%)",
        WebkitBackdropFilter: "blur(28px) saturate(200%)",
        border: "1.8px solid rgba(255, 255, 255, 0.92)",
        boxShadow: `
          0 30px 70px -15px rgba(0, 80, 180, 0.15),
          0 10px 25px -5px rgba(0, 50, 130, 0.08),
          inset 0 2.5px 5px rgba(255, 255, 255, 1),
          inset 0 -2.5px 6px rgba(0, 110, 220, 0.12),
          inset 0 0 0 1.5px rgba(186, 225, 255, 0.55)
        `,
      }}
    >
      {/* Specular Liquid Edge Flare */}
      <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-95 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-12 h-[2.5px] bg-gradient-to-r from-transparent via-[#00B8F2] to-transparent opacity-90 pointer-events-none shadow-[0_0_14px_rgba(0,184,242,0.85)]" />

      {/* Internal Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}

// ============================================================================
// LIQUID GLASS BUTTON
// ============================================================================

interface LiquidGlassProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: GlassVariant;
  className?: string;
  borderRadius?: number;
  textClassName?: string;
  disabled?: boolean;
}

export function LiquidGlass({
  children,
  onClick,
  variant = "bold",
  className = "",
  borderRadius = 9999,
  textClassName = "text-[#082B61] font-bold text-base sm:text-lg",
  disabled = false,
}: LiquidGlassProps) {
  const isPrimary = variant === "bold";
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`group relative overflow-hidden active:scale-95 hover:scale-103 transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 flex items-center justify-center px-8 py-4 sm:px-10 sm:py-4.5 select-none ${className}`}
      style={{
        borderRadius: `${borderRadius}px`,
        background: isPrimary
          ? "radial-gradient(circle at 35% 25%, rgba(255, 255, 255, 0.95), rgba(186, 230, 255, 0.80) 55%, rgba(135, 206, 250, 0.65) 100%)"
          : "radial-gradient(circle at 35% 25%, rgba(255, 255, 255, 0.85), rgba(235, 246, 255, 0.60) 55%, rgba(200, 230, 255, 0.45) 100%)",
        backdropFilter: "blur(20px) saturate(190%)",
        WebkitBackdropFilter: "blur(20px) saturate(190%)",
        border: "1.5px solid rgba(255, 255, 255, 0.95)",
        boxShadow: isPrimary
          ? "0 14px 35px -5px rgba(0, 140, 240, 0.38), 0 4px 12px rgba(0, 50, 130, 0.12), inset 0 2px 4px #ffffff, inset 0 -2px 5px rgba(0, 110, 220, 0.30), inset 0 0 0 1px rgba(186, 225, 255, 0.7)"
          : "0 12px 28px -5px rgba(0, 80, 180, 0.22), 0 4px 10px rgba(0, 50, 130, 0.08), inset 0 2px 4px #ffffff, inset 0 -2px 4px rgba(0, 110, 220, 0.18), inset 0 0 0 1px rgba(186, 225, 255, 0.5)",
      }}
    >
      {/* Top Glossy Reflection Curve */}
      <div
        className="absolute top-1 inset-x-3 h-[42%] rounded-full pointer-events-none transition-opacity duration-300 group-hover:opacity-100 opacity-80"
        style={{
          background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.05))",
        }}
      />
      {/* Bottom Caustic Rim Accent */}
      <div
        className="absolute bottom-0 inset-x-4 h-[1.5px] pointer-events-none opacity-70"
        style={{
          background: "linear-gradient(90deg, transparent, #00B8F2, transparent)",
          boxShadow: "0 0 8px #00b8f2",
        }}
      />

      <span className={`relative z-10 ${textClassName} transition-transform duration-300 group-hover:scale-104`}>
        {children}
      </span>
    </button>
  );
}

export default LiquidGlass;
