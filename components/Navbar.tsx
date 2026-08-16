"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#overview" },
  { label: "Products", href: "/#products" },
  { label: "R&D", href: "/#expertise" },
  { label: "Careers", href: "/#careers" },
  { label: "Contact", href: "/#contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [activeHash, setActiveHash] = useState("/#home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY <= 60) {
        setVisible(true);
        setScrolled(false);
      } else {
        setScrolled(true);
        if (open) {
          setVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 6) {
          // Scrolling down -> hide navbar
          setVisible(false);
        } else if (lastScrollY - currentScrollY > 6) {
          // Scrolling up -> show navbar
          setVisible(true);
        }
      }
      lastScrollY = currentScrollY;
    };

    const handleHashChange = () => {
      setActiveHash(
        window.location.hash
          ? `/#${window.location.hash.replace("#", "")}`
          : "/#home",
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed left-1/2 top-4 z-50 w-[calc(100%-32px)] max-w-[1320px] -translate-x-1/2 overflow-hidden transition-all duration-500 ease-out ${
        open ? "rounded-3xl" : "rounded-full"
      } ${
        visible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-28 opacity-0 pointer-events-none"
      }`}
      style={{
        background:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.55) 50%, rgba(255, 255, 255, 0.7) 100%)",
        backdropFilter: "blur(32px) saturate(2)",
        WebkitBackdropFilter: "blur(32px) saturate(2)",
        border: "1.5px solid rgba(255, 255, 255, 0.92)",
        boxShadow: scrolled
          ? `
              0 18px 50px rgba(11, 30, 72, 0.18),
              0 4px 12px rgba(0, 0, 0, 0.06),
              inset 0 1.5px 0 rgba(255, 255, 255, 0.98),
              inset 0 -2px 6px rgba(30, 89, 212, 0.08),
              0 0 40px rgba(30, 89, 212, 0.08)
            `
          : `
              0 10px 36px rgba(11, 30, 72, 0.12),
              0 2px 8px rgba(0, 0, 0, 0.04),
              inset 0 1.5px 0 rgba(255, 255, 255, 0.98),
              inset 0 -1px 4px rgba(30, 89, 212, 0.05),
              0 0 30px rgba(30, 89, 212, 0.05)
            `,
      }}
    >
      {/* Top-left crystal highlight */}
      <div
        className="pointer-events-none absolute top-0 left-0 w-2/5 h-full rounded-[inherit] overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 65%)",
        }}
        aria-hidden
      />
      <nav
        className="flex h-[70px] w-full items-center justify-between px-6 md:px-10 relative z-10"
        aria-label="Primary"
      >
        {/* Logo - Crisp full color */}
        <Link
          href="/#home"
          className="relative z-10 flex shrink-0 items-center gap-2.5"
        >
          {/* Hex logo badge */}
          <div
            className="flex h-11 w-11 items-center justify-center rounded-xl shrink-0"
            style={{
              background: "linear-gradient(135deg, #1e59d4 0%, #0b1e48 100%)",
              boxShadow:
                "0 6px 18px rgba(30, 89, 212, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L3 7v10l9 5 9-5V7l-9-5z"
                stroke="rgba(255,255,255,0.95)"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M12 7.5v9M7.5 12h9"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span
              className="font-display text-[19px] font-extrabold tracking-tight"
              style={{ color: "#0b1e48" }}
            >
              ZELNEX
            </span>
            <span
              className="text-[11px] font-medium tracking-wider mt-0.5"
              style={{ color: "#1e59d4" }}
            >
              Global
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeHash === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setActiveHash(link.href)}
                  className={`relative px-5 py-2.5 text-[14px] font-medium transition-all duration-300 rounded-full ${
                    isActive
                      ? "text-[#1e59d4] font-semibold"
                      : "text-[#2a3447] hover:text-[#1e59d4]"
                  }`}
                  style={{
                    background: isActive
                      ? "linear-gradient(135deg, rgba(30, 89, 212, 0.12) 0%, rgba(30, 89, 212, 0.04) 100%)"
                      : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background =
                        "rgba(30, 89, 212, 0.06)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full"
                      style={{
                        background: "#1e59d4",
                        boxShadow: "0 0 8px rgba(30, 89, 212, 0.6)",
                      }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right CTA Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #006EDC 0%, #082B61 100%)",
              boxShadow:
                "0 6px 20px rgba(0, 110, 220, 0.4), 0 2px 6px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.25)",
            }}
          >
            <span>Get in Touch</span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>

          <button
            type="button"
            className="group inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[12px] font-semibold text-[#0b1e48] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.55) 100%)",
              backdropFilter: "blur(16px) saturate(1.5)",
              WebkitBackdropFilter: "blur(16px) saturate(1.5)",
              border: "1.2px solid rgba(255, 255, 255, 0.9)",
              boxShadow:
                "0 4px 14px rgba(11, 30, 72, 0.08), inset 0 1px 0 rgba(255,255,255,0.95)",
            }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: "#1e59d4" }}
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span className="font-semibold">EN</span>
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              style={{ color: "#6b7280" }}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full text-slate-800 lg:hidden hover:bg-black/5"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full rounded bg-current transition-transform duration-200 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full rounded bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full rounded bg-current transition-transform duration-200 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="border-t border-slate-200/60 p-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-xl px-4 py-2.5 text-sm font-medium text-slate-800 transition-colors hover:bg-[#1e59d4]/10 hover:text-[#1e59d4]"
                  onClick={() => {
                    setActiveHash(link.href);
                    setOpen(false);
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center justify-between border-t border-slate-200/60 pt-3">
            <Link
              href="/#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold text-white"
              style={{
                background: "linear-gradient(135deg, #1e59d4 0%, #1241a8 100%)",
              }}
              onClick={() => setOpen(false)}
            >
              Get in Touch →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
