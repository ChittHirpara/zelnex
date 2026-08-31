"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Mail } from "lucide-react";

export interface RadialShareItem {
  id: string;
  name: string;
  handle: string;
  color: string;
  bgGradient: string;
  icon: React.ReactNode;
  action: () => void;
}

interface RadialShareMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RadialShareMenu({ isOpen, onClose }: RadialShareMenuProps) {
  const [copied, setCopied] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareItems: RadialShareItem[] = [
    {
      id: "whatsapp",
      name: "WhatsApp",
      handle: "+91 Export Desk",
      color: "#25D366",
      bgGradient: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.45 1.03 2.62.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.53.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.3z"/>
        </svg>
      ),
      action: () => window.open("https://wa.me/919909999999?text=Hello%20Zelnex%20Pharmaceuticals", "_blank"),
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      handle: "Zelnex Corporate",
      color: "#0077B5",
      bgGradient: "linear-gradient(135deg, #0077B5 0%, #004182 100%)",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      ),
      action: () => window.open("https://www.linkedin.com/company/zelnex-pharmaceuticals", "_blank"),
    },
    {
      id: "email",
      name: "Email Direct",
      handle: "export@zelnex.in",
      color: "#006EDC",
      bgGradient: "linear-gradient(135deg, #006EDC 0%, #082B61 100%)",
      icon: <Mail className="w-5.5 h-5.5" />,
      action: () => window.location.href = "mailto:export@zelnex.in?subject=Export%20Inquiry%20Zelnex",
    },
    {
      id: "twitter",
      name: "X (Twitter)",
      handle: "@zelnexpharma",
      color: "#111827",
      bgGradient: "linear-gradient(135deg, #1f2937 0%, #111827 100%)",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      action: () => window.open("https://twitter.com/intent/tweet?text=Discover%20Zelnex%20Pharmaceuticals", "_blank"),
    },
    {
      id: "copy",
      name: copied ? "Link Copied!" : "Copy Link",
      handle: "Share Portfolio URL",
      color: copied ? "#10B981" : "#0D9488",
      bgGradient: copied
        ? "linear-gradient(135deg, #10B981 0%, #059669 100%)"
        : "linear-gradient(135deg, #0D9488 0%, #042F2E 100%)",
      icon: copied ? <Check className="w-5.5 h-5.5" /> : <Copy className="w-5.5 h-5.5" />,
      action: handleCopy,
    },
  ];

  // ── Exact Measured Distance Between Social (slot 3) and Products (slot 0) ──
  const totalSpanH = 402;
  const radius = totalSpanH / 2; // 201px radius
  const centerY = -radius; // -201px from Social center

  // Button diameter: 48px
  const btnSize = 48;
  const btnHalf = btnSize / 2; // 24px

  // Angles from bottom (Social) to top (Products) along the semi-circle:
  const angles = [62, 31, 0, -31, -62];

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          data-radial-menu
          className="absolute left-full top-1/2 z-50 pointer-events-none select-none"
          style={{ width: `${radius + 80}px`, height: `${totalSpanH}px` }}
        >
          {/* Container anchored: origin (0, 0) is precisely Social Center */}
          <div className="relative w-full h-full pointer-events-none">
            
            {/* ── 1. Seamless Sapphire Liquid Glass Pipe Track (56px width) ── */}
            <svg
              className="absolute left-0 overflow-visible pointer-events-none"
              style={{
                top: `${-totalSpanH}px`,
                width: `${radius + 50}px`,
                height: `${totalSpanH}px`,
              }}
              viewBox={`0 0 ${radius + 50} ${totalSpanH}`}
            >
              <defs>
                {/* Dark Sapphire Glass Body */}
                <linearGradient id="sapphirePipeBody" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="rgba(0, 18, 58, 0.98)" />
                  <stop offset="50%" stopColor="rgba(0, 26, 83, 0.96)" />
                  <stop offset="100%" stopColor="rgba(0, 18, 58, 0.98)" />
                </linearGradient>

                {/* Specular Hairline Bevel Border */}
                <linearGradient id="sapphirePipeBorder" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="rgba(0, 184, 242, 0.75)" />
                  <stop offset="50%" stopColor="rgba(255, 255, 255, 0.55)" />
                  <stop offset="100%" stopColor="rgba(0, 184, 242, 0.75)" />
                </linearGradient>

                {/* Cyan Neon Core Spine */}
                <linearGradient id="cyanPipeSpine" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#25D366" stopOpacity="0.9" />
                  <stop offset="30%" stopColor="#00E5FF" stopOpacity="1" />
                  <stop offset="50%" stopColor="#00B8F2" stopOpacity="1" />
                  <stop offset="70%" stopColor="#00E5FF" stopOpacity="1" />
                  <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.9" />
                </linearGradient>

                <filter id="sapphirePipeShadow" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="14" dy="20" stdDeviation="18" floodColor="rgba(0, 8, 30, 0.75)" />
                  <feDropShadow dx="0" dy="2" stdDeviation="8" floodColor="rgba(0, 184, 242, 0.35)" />
                </filter>
              </defs>

              {/* Layer A: Outer Specular Border (58px width) */}
              <motion.path
                d={`M 0,${totalSpanH} A ${radius},${radius} 0 0,0 0,0`}
                fill="none"
                stroke="url(#sapphirePipeBorder)"
                strokeWidth="58"
                strokeLinecap="butt"
                filter="url(#sapphirePipeShadow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                exit={{ pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Layer B: Dark Sapphire Frosted Glass Pipe Body (54px width) */}
              <motion.path
                d={`M 0,${totalSpanH} A ${radius},${radius} 0 0,0 0,0`}
                fill="none"
                stroke="url(#sapphirePipeBody)"
                strokeWidth="54"
                strokeLinecap="butt"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                exit={{ pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Layer C: Central Centerline Track (2px width) */}
              <motion.path
                d={`M 0,${totalSpanH} A ${radius},${radius} 0 0,0 0,0`}
                fill="none"
                stroke="url(#cyanPipeSpine)"
                strokeWidth="2"
                strokeDasharray="5 3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.9 }}
                exit={{ pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Subtle connection terminals to sidebar */}
              <line x1="0" y1={totalSpanH} x2="6" y2={totalSpanH} stroke="#00E5FF" strokeWidth="4" />
              <line x1="0" y1="0" x2="6" y2="0" stroke="#00E5FF" strokeWidth="4" />
            </svg>

            {/* ── 2. The 5 Bigger Action Buttons Centered on the Pipe ── */}
            {shareItems.map((item, index) => {
              const angleDeg = angles[index];
              const angleRad = (angleDeg * Math.PI) / 180;
              
              // Calculate exact center coordinates on the radius line (R = 201px)
              const posX = Math.cos(angleRad) * radius;
              const posY = centerY + Math.sin(angleRad) * radius;
              
              const isHovered = hoveredItem === item.id;

              return (
                <motion.div
                  key={item.id}
                  className="absolute pointer-events-auto"
                  style={{
                    left: 0,
                    top: 0,
                  }}
                  initial={{
                    x: 0 - btnHalf,
                    y: 0 - btnHalf, // starts at Social button center
                    scale: 0,
                    opacity: 0,
                  }}
                  animate={{
                    x: posX - btnHalf,
                    y: posY - btnHalf, // Centered on the pipe centerline!
                    scale: 1,
                    opacity: 1,
                  }}
                  exit={{
                    x: 0 - btnHalf,
                    y: 0 - btnHalf,
                    scale: 0,
                    opacity: 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 24,
                    delay: 0.04 + index * 0.05,
                  }}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="relative group flex items-center justify-center">
                    
                    {/* Recessed Socket Well Glow */}
                    <div
                      className="absolute w-[52px] h-[52px] rounded-full pointer-events-none transition-all duration-300"
                      style={{
                        background: isHovered
                          ? `radial-gradient(circle, ${item.color}60 0%, transparent 70%)`
                          : "radial-gradient(circle, rgba(0, 184, 242, 0.2) 0%, transparent 70%)",
                      }}
                    />

                    {/* Bigger Luxury Action Button (48px) */}
                    <motion.button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        item.action();
                      }}
                      whileHover={{ scale: 1.15, rotate: 6 }}
                      whileTap={{ scale: 0.92 }}
                      className="relative w-12 h-12 rounded-full flex items-center justify-center text-white shadow-xl cursor-pointer select-none transition-all z-10"
                      style={{
                        background: item.bgGradient,
                        border: "1.6px solid rgba(255, 255, 255, 0.9)",
                        boxShadow: isHovered
                          ? `0 10px 28px -2px ${item.color}95, inset 0 2px 4px rgba(255, 255, 255, 0.6), inset 0 -2px 4px rgba(0, 0, 0, 0.35)`
                          : `0 6px 18px -2px ${item.color}70, inset 0 2px 3px rgba(255, 255, 255, 0.45), inset 0 -2px 3px rgba(0, 0, 0, 0.3)`,
                      }}
                      title={item.name}
                      aria-label={item.name}
                    >
                      <span className="drop-shadow-md flex items-center justify-center">
                        {item.icon}
                      </span>

                      {/* Specular Glint Reflection */}
                      <span className="absolute top-1.5 right-2 w-2 h-1 rounded-full bg-white/70 pointer-events-none transform rotate-45" />

                      {/* Ripple ring on hover */}
                      <span
                        className="absolute inset-0 rounded-full animate-ping opacity-0 group-hover:opacity-35 pointer-events-none"
                        style={{ backgroundColor: item.color }}
                      />
                    </motion.button>

                    {/* Tooltip Label Flashing to the Right */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, x: 8, scale: 0.92 }}
                          animate={{ opacity: 1, x: 16, scale: 1 }}
                          exit={{ opacity: 0, x: 8, scale: 0.92 }}
                          transition={{ duration: 0.16, ease: "easeOut" }}
                          className="absolute left-full whitespace-nowrap px-3.5 py-2 rounded-xl bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 shadow-[0_10px_28px_rgba(0,10,35,0.45)] pointer-events-none z-50 flex flex-col"
                        >
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                            <span className="text-xs font-bold text-white font-sans">
                              {item.name}
                            </span>
                          </div>
                          <span className="text-[10px] font-['JetBrains_Mono',monospace] text-slate-300 font-medium">
                            {item.handle}
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                </motion.div>
              );
            })}

          </div>

        </div>
      )}
    </AnimatePresence>
  );
}

export default RadialShareMenu;
