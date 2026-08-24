"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Define variants for the card's overall style using cva
const cardVariants = cva(
  "relative flex flex-col justify-between h-full w-full overflow-hidden rounded-[24px] p-7 md:p-8 shadow-sm transition-all duration-300 hover:shadow-xl border border-white/60 select-none",
  {
    variants: {
      gradient: {
        orange: "bg-gradient-to-br from-orange-100/90 via-amber-50 to-amber-200/50",
        gray: "bg-gradient-to-br from-slate-100/90 via-slate-50 to-slate-200/50",
        purple: "bg-gradient-to-br from-purple-100/90 via-indigo-50 to-indigo-200/50",
        green: "bg-gradient-to-br from-emerald-100/90 via-teal-50 to-teal-200/50",
        blue: "bg-gradient-to-br from-sky-100/90 via-blue-50 to-cyan-200/50",
        teal: "bg-gradient-to-br from-teal-100/90 via-cyan-50 to-emerald-200/50",
      },
    },
    defaultVariants: {
      gradient: "gray",
    },
  }
);

export interface GradientCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  badgeText: string;
  badgeColor: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  imageUrl?: string;
  bullets?: string[];
}

const GradientCard = React.forwardRef<HTMLDivElement, GradientCardProps>(
  (
    {
      className,
      gradient,
      badgeText,
      badgeColor,
      title,
      description,
      ctaText,
      ctaHref,
      bullets,
      ...props
    },
    ref
  ) => {
    const cardAnimation = {
      rest: { scale: 1, y: 0 },
      hover: { scale: 1.025, y: -4 },
    };

    return (
      <motion.div
        variants={cardAnimation}
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="h-full"
        ref={ref}
      >
        <div className={cn(cardVariants({ gradient }), className)} {...props}>
          {/* Card Content */}
          <div className="z-10 flex flex-col justify-between h-full">
            {/* Top Badge */}
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/75 px-3.5 py-1 text-xs font-bold text-[#082B61] backdrop-blur-md border border-white/80 shadow-xs w-fit">
                <span
                  className="h-2 w-2 rounded-full shrink-0"
                  style={{ backgroundColor: badgeColor }}
                />
                <span className="uppercase tracking-wider text-[11px]">{badgeText}</span>
              </div>

              {/* Title and Description */}
              <div>
                <h3 className="font-['Space_Grotesk'] text-2xl font-extrabold text-[#082B61] mb-2 leading-tight">
                  {title}
                </h3>
                <p className="text-xs sm:text-[13px] leading-relaxed text-[#4A5568] max-w-xs font-medium">
                  {description}
                </p>
              </div>

              {/* Optional Bullet highlights */}
              {bullets && bullets.length > 0 && (
                <div className="mt-4 space-y-1.5 pt-3 border-t border-black/[0.06]">
                  {bullets.map((b, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span
                        className="h-1.5 w-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: badgeColor }}
                      />
                      <span className="text-[11.5px] font-semibold text-[#2D3748]">
                        {b}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Call to Action Link */}
            <a
              href={ctaHref}
              className="group mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#082B61] hover:text-[#006EDC] transition-colors"
            >
              <span>{ctaText}</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#082B61] shadow-xs group-hover:bg-[#006EDC] group-hover:text-white transition-all duration-300">
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </a>
          </div>
        </div>
      </motion.div>
    );
  }
);
GradientCard.displayName = "GradientCard";

export { GradientCard, cardVariants };
export default GradientCard;
