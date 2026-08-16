"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

// ============================================================================
// TYPES
// ============================================================================

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  image: string;
}

export interface SwissStyleCardProps {
  metrics: MetricItem[];
  title?: React.ReactNode;
  description?: string;
  className?: string;
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export function SwissStyleCard({
  metrics,
  title = <>Why it<br />matters</>,
  description = "This year, we're tripling down. Our event management ecosystem is designed to amplify every moment, ensuring your conference isn't just attended, but experienced.",
  className = "",
}: SwissStyleCardProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  
  // Cursor position for image following
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring animation for cursor following
  const springConfig = { stiffness: 300, damping: 30 };
  const imageX = useSpring(mouseX, springConfig);
  const imageY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div className={`max-w-7xl w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-start ${className}`}>
      
      {/* Left Side: Content */}
      <div className="flex flex-col">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-7xl font-black text-black leading-[0.9] tracking-tighter mb-12"
        >
          {title}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-zinc-600 max-w-md leading-relaxed"
        >
          {description}
        </motion.p>
      </div>

      {/* Right Side: Metrics with Pop-up Images */}
      <div className="flex flex-col gap-12 md:gap-16">
        {metrics.map((metric) => (
          <div 
            key={metric.id}
            className="relative group cursor-pointer w-full"
            onMouseEnter={() => setHoveredId(metric.id)}
            onMouseLeave={() => setHoveredId(null)}
            onMouseMove={handleMouseMove}
          >
            {/* Metric Text */}
            <div className="relative z-10 transition-transform duration-300 group-hover:scale-105 w-fit">
              <span className="block text-5xl md:text-6xl font-black text-black leading-none select-none">
                {metric.value}
              </span>
              <span className="block text-lg md:text-xl text-zinc-500 font-medium mt-2 select-none">
                {metric.label}
              </span>
            </div>

            {/* Cursor-following Image Popup */}
            <AnimatePresence>
              {hoveredId === metric.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 25 
                  }}
                  style={{
                    x: imageX,
                    y: imageY,
                    translateX: '-50%',
                    translateY: '-50%',
                  }}
                  className="absolute top-0 left-0 pointer-events-none z-20 w-[280px] h-[200px] rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img 
                    src={metric.image} 
                    alt={metric.label}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom Separator Line */}
            <div className="absolute -bottom-6 md:-bottom-8 left-0 w-full h-[1px] bg-zinc-100 origin-left scale-x-100 group-hover:bg-zinc-300 transition-colors" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SwissStyleCard;
