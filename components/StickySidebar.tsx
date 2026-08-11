"use client";

import Link from "next/link";

const ITEMS = [
  { href: "/#products", label: "Products", icon: BasketIcon },
  { href: "/#contact", label: "Enquiry", icon: HeadsetIcon },
  { href: "/overview", label: "Overview", icon: DownloadIcon },
  { href: "/#network", label: "Network", icon: PinIcon },
] as const;

export function StickySidebar() {
  return (
    <aside
      className="pointer-events-none fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
      aria-label="Quick actions"
    >
      <div className="pointer-events-auto flex flex-col overflow-hidden rounded-l-2xl bg-teal shadow-lg">
        {ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="group flex w-[4.25rem] flex-col items-center gap-1 border-b border-white/15 px-2 py-3.5 text-white last:border-b-0 transition-colors hover:bg-teal-deep"
          >
            <item.icon />
            <span className="text-[10px] font-medium leading-tight">{item.label}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
}

function BasketIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 8h16l-1.5 11H5.5L4 8zM9 8V6a3 3 0 0 1 6 0v2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 13v-1a8 8 0 0 1 16 0v1"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <rect x="2.5" y="12" width="4" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="17.5" y="12" width="4" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 21h3a2 2 0 0 0 2-2v-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 4v10m0 0l-4-4m4 4l4-4M5 18h14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="10" r="2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
