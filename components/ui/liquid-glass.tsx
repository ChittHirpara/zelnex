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
          radial-gradient(130% 150% at 10% -10%, rgba(255, 255, 255, 0.92), rgba(246, 251, 255, 0.82) 45%, rgba(232, 244, 255, 0.72) 100%)
        `,
        backdropFilter: "blur(28px) saturate(190%)",
        WebkitBackdropFilter: "blur(28px) saturate(190%)",
        border: "2.5px solid rgba(255, 255, 255, 0.95)",
        boxShadow: `
          0 35px 70px -15px rgba(0, 80, 180, 0.18),
          0 12px 28px -5px rgba(0, 80, 180, 0.10),
          inset 0 3px 6px rgba(255, 255, 255, 1),
          inset 0 -3px 8px rgba(0, 110, 220, 0.15),
          inset 0 0 0 2px rgba(186, 225, 255, 0.7)
        `,
      }}
    >
      {/* Specular Liquid Edge Flare */}
      <div className="absolute top-0 inset-x-8 h-[3px] bg-gradient-to-r from-transparent via-white to-transparent opacity-95 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-12 h-[3px] bg-gradient-to-r from-transparent via-[#00B8F2] to-transparent opacity-80 pointer-events-none" />

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
  variant = "default",
  className = "",
  borderRadius = 9999,
  textClassName = "text-[#082B61] font-bold text-lg",
  disabled = false,
}: LiquidGlassProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`group active:scale-95 transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 ${className}`}
    >
      <Glass
        variant={variant}
        borderRadius={borderRadius}
        className="px-10 py-5 sm:px-12 sm:py-5.5 hover:shadow-[0_25px_60px_-10px_rgba(0,184,242,0.45)] transition-shadow duration-300"
      >
        <span className={`${textClassName} tracking-tight drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)] group-hover:scale-105 transition-transform duration-300`}>
          {children}
        </span>
      </Glass>
    </button>
  );
}

export default LiquidGlass;
