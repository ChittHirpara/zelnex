import Link from "next/link";
import type { ReactNode, MouseEventHandler } from "react";

type Variant = "teal" | "navy" | "outline-teal" | "outline-light" | "crystal";

type CrystalButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

const variantClass: Record<Variant, string> = {
  teal: "btn-teal",
  navy: "btn-navy",
  "outline-teal": "btn-outline-teal",
  "outline-light": "btn-outline-light",
  crystal: "crystal-btn rounded-full",
};

export function CrystalButton({
  href,
  children,
  variant = "teal",
  className = "",
  onClick,
}: CrystalButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`px-6 py-3 text-sm tracking-wide ${variantClass[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
