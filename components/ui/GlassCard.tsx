import type { HTMLAttributes, ReactNode } from "react";

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
};

export function GlassCard({
  children,
  className = "",
  ...props
}: GlassCardProps) {
  return (
    <div
      className={`glass-card rounded-3xl p-6 md:p-8 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
