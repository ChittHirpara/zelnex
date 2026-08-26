"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [activeHash, setActiveHash] = useState("/#home");
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: t.nav.home, href: "/#home" },
    { label: t.nav.services, href: "/services" },
    { label: t.nav.products, href: "/#products" },
    { label: t.nav.categories, href: "/#categories" },
    { label: t.nav.contact, href: "/#contact" },
  ];

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
      const path = window.location.pathname;
      if (path.startsWith("/services")) {
        setActiveHash("/services");
      } else if (path.startsWith("/blogs")) {
        setActiveHash("/blogs");
      } else {
        setActiveHash(
          window.location.hash
            ? `/#${window.location.hash.replace("#", "")}`
            : "/#home"
        );
      }
    };

    handleHashChange();
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
      className={`fixed left-1/2 top-4 z-50 w-[calc(100%-32px)] max-w-[1340px] -translate-x-1/2 flex items-center justify-between gap-3 pointer-events-none transition-all duration-500 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-28 opacity-0"
      }`}
    >
      {/* ── 1. Main Frosted Glass Navbar Pill ── */}
      <div
        className={`pointer-events-auto flex-1 min-w-0 relative overflow-hidden transition-all duration-500 ease-out ${
          open ? "rounded-3xl" : "rounded-full"
        }`}
        style={{
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0.75) 100%)",
          backdropFilter: "blur(32px) saturate(2)",
          WebkitBackdropFilter: "blur(32px) saturate(2)",
          border: "1.5px solid rgba(255, 255, 255, 0.95)",
          boxShadow: scrolled
            ? `
                0 18px 50px rgba(11, 30, 72, 0.16),
                0 4px 12px rgba(0, 0, 0, 0.05),
                inset 0 1.5px 0 rgba(255, 255, 255, 0.98),
                inset 0 -2px 6px rgba(30, 89, 212, 0.06),
                0 0 40px rgba(30, 89, 212, 0.06)
              `
            : `
                0 10px 36px rgba(11, 30, 72, 0.11),
                0 2px 8px rgba(0, 0, 0, 0.04),
                inset 0 1.5px 0 rgba(255, 255, 255, 0.98),
                inset 0 -1px 4px rgba(30, 89, 212, 0.04),
                0 0 30px rgba(30, 89, 212, 0.04)
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
          className="flex h-[70px] w-full items-center justify-between px-6 md:px-8 relative z-10"
          aria-label="Primary"
        >
          {/* Logo - Crisp official company logo */}
          <Link
            href="/#home"
            className="relative z-10 flex shrink-0 items-center transition-transform duration-300 hover:scale-[1.02]"
          >
            <Image
              src="/brand/zelnex-official-logo.png"
              alt="Zelnex Pharmaceuticals Pvt. Ltd."
              width={160}
              height={46}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = activeHash === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setActiveHash(link.href)}
                    className={`relative px-4 py-2 text-[13.5px] font-medium transition-all duration-300 rounded-full ${
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

        {/* Mobile Drawer Menu with smooth accordion slide */}
        <div
          className={`grid transition-all duration-300 ease-in-out lg:hidden ${
            open
              ? "grid-rows-[1fr] opacity-100 border-t border-slate-200/60"
              : "grid-rows-[0fr] opacity-0 border-t-0 pointer-events-none"
          }`}
        >
          <div className="overflow-hidden">
            <div className="p-4 pt-3">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
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
              
              {/* Get in touch CTA button */}
              <div className="mt-4 flex items-center gap-2 border-t border-slate-200/60 pt-3">
                <Link
                  href="/#contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold text-white shadow-md cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #006EDC 0%, #082B61 100%)",
                  }}
                  onClick={() => setOpen(false)}
                >
                  <span>{t.nav.getInTouch}</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. Standalone Right Side Action: Minimalist Glass "Get in Touch" ── */}
      <div className="pointer-events-auto hidden lg:flex items-center gap-2.5 shrink-0">
        <Link
          href="/#contact"
          className="group relative inline-flex items-center gap-2.5 h-[50px] px-6 rounded-full text-[13.5px] font-semibold tracking-tight text-[#0B1E48] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] overflow-hidden cursor-pointer select-none shrink-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.55) 100%)",
            backdropFilter: "blur(24px) saturate(1.8)",
            WebkitBackdropFilter: "blur(24px) saturate(1.8)",
            border: "1.5px solid rgba(255, 255, 255, 0.95)",
            boxShadow: scrolled
              ? "0 10px 30px rgba(11, 30, 72, 0.1), inset 0 1.5px 0 rgba(255, 255, 255, 1), 0 0 0 1px rgba(11, 30, 72, 0.04)"
              : "0 6px 20px rgba(11, 30, 72, 0.07), inset 0 1.5px 0 rgba(255, 255, 255, 1), 0 0 0 1px rgba(11, 30, 72, 0.03)",
          }}
        >
          {/* Subtle Frosted Hover Fill (Fades in smoothly) */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-out rounded-full"
            style={{
              background:
                "linear-gradient(135deg, #006EDC 0%, #082B61 100%)",
              boxShadow: "0 8px 25px rgba(0, 110, 220, 0.35)",
            }}
          />

          {/* Ambient Top Light Reflection */}
          <div
            className="pointer-events-none absolute top-0 left-0 w-full h-[45%] opacity-50 group-hover:opacity-30 transition-opacity duration-300 rounded-t-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          />

          {/* Button Label */}
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
            {t.nav.getInTouch}
          </span>

          {/* Minimal Arrow Icon */}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="relative z-10 text-[#006EDC] group-hover:text-white transition-all duration-300 group-hover:translate-x-1"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </header>
  );
}
