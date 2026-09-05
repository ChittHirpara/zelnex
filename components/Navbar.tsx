"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  ChevronDown,
  FileCheck2,
  Factory,
  ShieldCheck,
  Layers,
  ArrowRight,
} from "lucide-react";

export const SERVICES_LIST = [
  {
    id: "regulatory",
    title: "Regulatory Services",
    subtitle: "CTD/eCTD Dossiers, Zone IVb & MOH Approvals",
    href: "/services?service=regulatory",
    badge: "01",
    badgeColor: "#006EDC",
    icon: FileCheck2,
  },
  {
    id: "contract-manufacturing",
    title: "Contract Manufacturing",
    subtitle: "Scalable Formulation & High-Speed Packaging",
    href: "/services?service=contract-manufacturing",
    badge: "02",
    badgeColor: "#00bfb5",
    icon: Factory,
  },
  {
    id: "third-party-manufacturing",
    title: "3rd Party Manufacturing",
    subtitle: "WHO-GMP Certified Facilities & Sterile Batches",
    href: "/services?service=third-party-manufacturing",
    badge: "03",
    badgeColor: "#F59E0B",
    icon: ShieldCheck,
  },
  {
    id: "generic-products",
    title: "Generic Products",
    subtitle: "800+ Commercial Finished Formulations",
    href: "/services?service=generic-products",
    badge: "04",
    badgeColor: "#8B5CF6",
    icon: Layers,
  },
];

export function Navbar() {
  const { t } = useLanguage();
  const pathname = usePathname() || "";
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [activeHash, setActiveHash] = useState("/#home");
  const [open, setOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);

  const isLinkActive = (href: string) => {
    if (href === "/about") {
      return pathname === "/about" || pathname.startsWith("/about");
    }
    if (href === "/services") {
      return pathname.startsWith("/services");
    }
    if (href === "/categories") {
      return pathname.startsWith("/categories");
    }
    if (href === "/blogs") {
      return pathname.startsWith("/blogs");
    }
    if (href === "/contact") {
      return pathname.startsWith("/contact");
    }
    if (pathname === "/") {
      return activeHash === href;
    }
    return false;
  };

  const desktopNavLinks = [
    { label: t.nav.home, href: "/#home" },
    { label: t.nav.overview, href: "/about" },
    { label: t.nav.services, href: "/services", hasDropdown: true },
    { label: t.nav.products, href: "/#products" },
    { label: t.nav.categories, href: "/categories" },
    { label: t.nav.blogs, href: "/blogs" },
  ];

  const mobileNavLinks = [
    { label: t.nav.home, href: "/#home" },
    { label: t.nav.overview, href: "/about" },
    { label: t.nav.services, href: "/services", hasDropdown: true },
    { label: t.nav.products, href: "/#products" },
    { label: t.nav.categories, href: "/categories" },
    { label: t.nav.blogs, href: "/blogs" },
    { label: t.nav.contact, href: "/contact" },
  ];

  const handleMouseEnterServices = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setServicesDropdown(true);
  };

  const handleMouseLeaveServices = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setServicesDropdown(false);
    }, 180);
  };

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
          setVisible(false);
        } else if (lastScrollY - currentScrollY > 6) {
          setVisible(true);
        }
      }
      lastScrollY = currentScrollY;
    };

    const handleHashChange = () => {
      if (typeof window !== "undefined" && window.location.pathname === "/") {
        const hash = window.location.hash;
        setActiveHash(hash === "#products" ? "/#products" : "/#home");
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
      className={`fixed left-1/2 top-3 sm:top-4 z-50 w-[calc(100%-24px)] sm:w-[calc(100%-36px)] max-w-[1380px] -translate-x-1/2 pointer-events-none transition-all duration-500 ease-out ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-28 opacity-0"
      }`}
    >
      {/* ── Main Unified Executive Navbar Bar ── */}
      <div
        className={`pointer-events-auto w-full relative transition-all duration-500 ease-out ${
          open ? "rounded-3xl" : "rounded-2xl sm:rounded-full"
        }`}
        style={{
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.94) 0%, rgba(255, 255, 255, 0.88) 50%, rgba(248, 250, 253, 0.92) 100%)",
          backdropFilter: "blur(24px) saturate(1.8)",
          WebkitBackdropFilter: "blur(24px) saturate(1.8)",
          border: "1.2px solid rgba(255, 255, 255, 0.95)",
          boxShadow: scrolled
            ? "0 18px 45px -8px rgba(8, 43, 97, 0.16), 0 4px 12px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 1)"
            : "0 10px 35px -8px rgba(8, 43, 97, 0.10), 0 2px 8px rgba(0, 0, 0, 0.03), inset 0 1px 0 rgba(255, 255, 255, 1)",
        }}
      >
        <nav
          className="flex h-[66px] sm:h-[74px] w-full items-center justify-between px-3 sm:px-6 md:px-7 lg:px-8 relative z-10"
          aria-label="Primary"
        >
          {/* ── Brand Bay: Logo & Clinical Tagline ── */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <Link
              href="/#home"
              className="relative z-10 flex items-center transition-transform duration-300 hover:scale-[1.02]"
              aria-label="Zelnex Pharmaceuticals Homepage"
            >
              <Image
                src="/brand/zelnex-official-logo.png"
                alt="Zelnex Pharmaceuticals Pvt. Ltd."
                width={175}
                height={50}
                className="h-10 sm:h-11 md:h-12 w-auto object-contain drop-shadow-xs"
                priority
              />
            </Link>
          </div>

          {/* ── Desktop Navigation Links ── */}
          <ul className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {desktopNavLinks.map((link) => {
              const isActive = isLinkActive(link.href);

              if (link.hasDropdown) {
                return (
                  <li
                    key={link.href}
                    className="relative"
                    onMouseEnter={handleMouseEnterServices}
                    onMouseLeave={handleMouseLeaveServices}
                  >
                    <div className="flex items-center">
                      <Link
                        href={link.href}
                        onClick={() => {
                          setActiveHash(link.href);
                          setServicesDropdown(false);
                        }}
                        className={`relative flex items-center gap-1.5 px-3.5 xl:px-4 py-2 text-[13px] xl:text-[13.5px] font-semibold transition-all duration-200 rounded-lg ${
                          isActive
                            ? "text-[#082B61] bg-[#006EDC]/10 font-bold"
                            : "text-slate-700 hover:text-[#006EDC] hover:bg-slate-100/70"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-300 ${
                            servicesDropdown ? "rotate-180 text-[#006EDC]" : "text-slate-400"
                          }`}
                        />
                        {isActive && (
                          <span className="absolute bottom-0.5 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-[#006EDC] to-[#082B61] rounded-full" />
                        )}
                      </Link>
                    </div>

                    {/* ── Frosted Glass Services Dropdown Menu ── */}
                    {servicesDropdown && (
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[380px] pointer-events-auto"
                        onMouseEnter={handleMouseEnterServices}
                        onMouseLeave={handleMouseLeaveServices}
                      >
                        <div
                          className="rounded-2xl p-3 shadow-2xl border border-white/90 bg-white/95 backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200"
                          style={{
                            boxShadow: "0 24px 55px -12px rgba(8,43,97,0.2), 0 0 0 1px rgba(0,0,0,0.04)",
                          }}
                        >
                          <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between mb-1.5">
                            <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400 font-mono">
                              OUR 4 CORE SERVICES
                            </span>
                            <span className="text-[10px] text-[#006EDC] font-bold font-mono">
                              WHO-GMP CERTIFIED
                            </span>
                          </div>

                          <div className="flex flex-col gap-1">
                            {SERVICES_LIST.map((svc) => {
                              const IconComponent = svc.icon;
                              return (
                                <Link
                                  key={svc.id}
                                  href={svc.href}
                                  onClick={() => setServicesDropdown(false)}
                                  className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F0F7FF] transition-colors cursor-pointer"
                                >
                                  <div
                                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-transform group-hover:scale-105"
                                    style={{
                                      backgroundColor: `${svc.badgeColor}15`,
                                      color: svc.badgeColor,
                                    }}
                                  >
                                    <IconComponent className="w-4.5 h-4.5" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                      <h4 className="text-[13px] font-bold text-slate-900 group-hover:text-[#006EDC] transition-colors">
                                        {svc.title}
                                      </h4>
                                      <span
                                        className="text-[9px] font-bold px-1.5 py-0.5 rounded"
                                        style={{
                                          color: svc.badgeColor,
                                          backgroundColor: `${svc.badgeColor}15`,
                                        }}
                                      >
                                        {svc.badge}
                                      </span>
                                    </div>
                                    <p className="text-[11px] text-slate-500 leading-tight truncate mt-0.5">
                                      {svc.subtitle}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>

                          <div className="mt-2 pt-2 border-t border-slate-100 px-2 pb-1">
                            <Link
                              href="/services"
                              onClick={() => setServicesDropdown(false)}
                              className="flex items-center justify-between text-xs font-bold text-[#006EDC] hover:text-[#082B61] py-1 px-2 rounded-lg hover:bg-blue-50/50 transition-colors"
                            >
                              <span>View Complete Regulatory Matrix</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                );
              }

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setActiveHash(link.href)}
                    className={`relative px-3.5 xl:px-4 py-2 text-[13px] xl:text-[13.5px] font-semibold transition-all duration-200 rounded-lg flex items-center ${
                      isActive
                        ? "text-[#082B61] bg-[#006EDC]/10 font-bold"
                        : "text-slate-700 hover:text-[#006EDC] hover:bg-slate-100/70"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0.5 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-[#006EDC] to-[#082B61] rounded-full" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── Right Wing: Integrated CTA + Mobile Hamburger ── */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Integrated Executive "Inquire Now" CTA button */}
            <Link
              href="/contact"
              onClick={() => setActiveHash("/contact")}
              className="inline-flex items-center gap-2 h-10 sm:h-11 px-4 sm:px-6 rounded-full text-white text-xs sm:text-[13px] font-bold tracking-tight bg-gradient-to-r from-[#006EDC] via-[#0b489a] to-[#082B61] shadow-[0_4px_16px_rgba(0,110,220,0.3)] hover:shadow-[0_6px_22px_rgba(0,110,220,0.45)] hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer group"
            >
              <span>{t.nav.contact || "Inquire Now"}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl text-slate-800 lg:hidden hover:bg-slate-100 transition-colors cursor-pointer border border-slate-200/80"
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
          </div>
        </nav>

        {/* Mobile Drawer Menu */}
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
                {mobileNavLinks.map((link) => {
                  const isActive = isLinkActive(link.href);
                  if (link.hasDropdown) {
                    return (
                      <li key={link.href} className="flex flex-col">
                        <div
                          className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                            isActive
                              ? "bg-[#006EDC]/10 text-[#006EDC]"
                              : "text-slate-800 hover:bg-slate-100"
                          }`}
                        >
                          <Link
                            href="/services"
                            onClick={() => {
                              setActiveHash("/services");
                              setOpen(false);
                            }}
                            className="flex-1"
                          >
                            {link.label}
                          </Link>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setMobileServicesOpen((prev) => !prev);
                            }}
                            className="p-1 rounded-md text-slate-500 hover:text-[#006EDC]"
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform ${
                                mobileServicesOpen ? "rotate-180 text-[#006EDC]" : ""
                              }`}
                            />
                          </button>
                        </div>

                        {mobileServicesOpen && (
                          <div className="ml-4 pl-3 border-l-2 border-blue-200 py-1 flex flex-col gap-1">
                            {SERVICES_LIST.map((svc) => (
                              <Link
                                key={svc.id}
                                href={svc.href}
                                className="block py-1.5 px-3 rounded-lg text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-[#006EDC]"
                                onClick={() => {
                                  setActiveHash("/services");
                                  setOpen(false);
                                }}
                              >
                                {svc.badge}. {svc.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </li>
                    );
                  }

                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`block rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                          isActive
                            ? "bg-[#006EDC]/10 text-[#006EDC]"
                            : "text-slate-800 hover:bg-slate-100"
                        }`}
                        onClick={() => {
                          setActiveHash(link.href);
                          setOpen(false);
                        }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Direct Export Inquiries CTA for Mobile */}
              <div className="mt-4 flex items-center gap-2 border-t border-slate-200/60 pt-3">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full py-2.5 text-sm font-bold text-white shadow-md cursor-pointer bg-gradient-to-r from-[#006EDC] to-[#082B61]"
                  onClick={() => setOpen(false)}
                >
                  <span>Connect With Export Desk</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
