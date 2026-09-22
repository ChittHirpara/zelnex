"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Copy,
  Check,
  ExternalLink,
  MessageCircle,
  Share2,
} from "lucide-react";

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function TwitterIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function ContactInfoCards() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const contactDetails = [
    {
      id: "address",
      title: "Head Office Address",
      icon: MapPin,
      iconColor: "#006EDC",
      iconBg: "rgba(0, 110, 220, 0.1)",
      iconBorder: "rgba(0, 110, 220, 0.25)",
      badge: "REGISTERED HQ",
      mainText: "Zelnex Pharmaceuticals Pvt. Ltd.",
      subText: "117 - Platinum Plaza, Near VT Circle, Sarthana Jakatnaka, Surat - 395013, Gujarat, India",
      telemetry: "GPS: 21.2294° N, 72.8837° E",
      actionText: "View on Google Maps",
      actionHref: "https://maps.app.goo.gl/uiLQiWR9muJXici28",
      copyText: "Zelnex Pharmaceuticals Pvt. Ltd., 117 - Platinum Plaza, Near VT Circle, Sarthana Jakatnaka, Surat - 395013, Gujarat, India",
    },
    {
      id: "phone",
      title: "Direct Telephone Lines",
      icon: Phone,
      iconColor: "#0D9488",
      iconBg: "rgba(13, 148, 136, 0.1)",
      iconBorder: "rgba(13, 148, 136, 0.25)",
      badge: "INSTITUTIONAL HOTLINE",
      mainText: "+91 93282 86164",
      subText: "+91 93282 86164 (Global WhatsApp & Export Desk)",
      telemetry: "IVR: Mon–Sat 9:00 AM–6:00 PM IST",
      actionText: "Call Head Office",
      actionHref: "tel:+919328286164",
      copyText: "+919328286164",
    },
    {
      id: "email",
      title: "Official Electronic Mail",
      icon: Mail,
      iconColor: "#7C3AED",
      iconBg: "rgba(124, 58, 237, 0.1)",
      iconBorder: "rgba(124, 58, 237, 0.25)",
      badge: "ENCRYPTED ROUTING",
      mainText: "info@zelnexpharmaceuticals.com",
      subText: "Global export, regulatory inquiries & commercial supply",
      telemetry: "Average response: < 4 hours",
      actionText: "Send Direct Email",
      actionHref: "mailto:info@zelnexpharmaceuticals.com",
      copyText: "info@zelnexpharmaceuticals.com",
    },
    {
      id: "hours",
      title: "Operating Hours & SLAs",
      icon: Clock,
      iconColor: "#EA580C",
      iconBg: "rgba(234, 88, 12, 0.1)",
      iconBorder: "rgba(234, 88, 12, 0.25)",
      badge: "GLOBAL TIMEZONE COMPLIANT",
      mainText: "Monday – Saturday: 9:00 AM – 6:00 PM IST",
      subText: "Sunday: Closed (Emergency MOH tender support online)",
      telemetry: "Timezone: Indian Standard Time (UTC+05:30)",
      actionText: "Check Local Time",
      actionHref: "#",
      copyText: "Monday – Saturday: 9:00 AM – 6:00 PM IST (UTC+05:30)",
    },
  ];

  const socialChannels = [
    {
      name: "LinkedIn",
      handle: "zelnex-pharmaceuticals",
      href: "https://www.linkedin.com/company/zelnex-pharmaceuticals",
      icon: LinkedinIcon,
      color: "#0A66C2",
      badge: "Corporate & Network",
    },
    {
      name: "X (Twitter)",
      handle: "@zelnexpharma",
      href: "https://x.com/zelnexpharma",
      icon: TwitterIcon,
      color: "#0F1419",
      badge: "Market Updates",
    },
    {
      name: "Instagram",
      handle: "@zelnexpharma",
      href: "https://www.instagram.com/zelnexpharma/",
      icon: InstagramIcon,
      color: "#E1306C",
      badge: "Brand & Culture",
    },
    {
      name: "Facebook",
      handle: "Zelnex Pharmaceuticals",
      href: "https://www.facebook.com/profile.php?id=61594171761679",
      icon: FacebookIcon,
      color: "#1877F2",
      badge: "Community & News",
    },
    {
      name: "WhatsApp Direct",
      handle: "+91 93282 86164",
      href: "https://wa.me/919328286164",
      icon: MessageCircle,
      color: "#25D366",
      badge: "Instant Export Desk",
    },
    {
      name: "Google Maps",
      handle: "Surat Global HQ",
      href: "https://maps.app.goo.gl/uiLQiWR9muJXici28",
      icon: MapPin,
      color: "#EA4335",
      badge: "Direct Navigation",
    },
  ];

  return (
    <div className="flex flex-col gap-6 font-['Inter',sans-serif]">
      
      {/* ── 4 Premium Info Cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contactDetails.map((card) => {
          const Icon = card.icon;
          const isCopied = copiedKey === card.id;

          return (
            <div
              key={card.id}
              className="group relative rounded-2xl bg-white border border-slate-200/90 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,110,220,0.1)] hover:border-[#006EDC]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Card Top: Icon & Badge */}
                <div className="flex items-center justify-between mb-3.5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: card.iconBg,
                      borderColor: card.iconBorder,
                      color: card.iconColor,
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-[9.5px] font-['JetBrains_Mono',monospace] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200/80">
                    {card.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-[#0B1E48] tracking-tight mb-1 group-hover:text-[#006EDC] transition-colors">
                  {card.title}
                </h3>

                {/* Primary Content */}
                <p className="text-xs font-semibold text-slate-800 leading-snug">
                  {card.mainText}
                </p>

                {/* Subtext */}
                <p className="text-[11.5px] text-slate-500 mt-1 leading-relaxed">
                  {card.subText}
                </p>
              </div>

              {/* Card Footer: Action Link & Quick Copy */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-['JetBrains_Mono',monospace]">
                <a
                  href={card.actionHref}
                  target={card.actionHref.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-[#006EDC] hover:underline"
                >
                  <span>{card.actionText}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                {card.copyText && (
                  <button
                    type="button"
                    onClick={() => copyToClipboard(card.copyText, card.id)}
                    className="inline-flex items-center gap-1 text-slate-400 hover:text-[#006EDC] transition-colors p-1 rounded hover:bg-slate-100 cursor-pointer"
                    title="Copy details"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600 font-bold text-[10px]">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[10px]">COPY</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Connect With Us Social & Portal Channels ── */}
      <div className="rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Share2 className="w-4 h-4 text-[#006EDC]" />
            <h4 className="text-xs font-['JetBrains_Mono',monospace] font-bold uppercase tracking-wider text-[#0B1E48]">
              Connect With Us / Official Channels
            </h4>
          </div>
          <span className="text-[10px] font-['JetBrains_Mono',monospace] text-emerald-600 font-bold bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded">
            ACTIVE CHANNELS
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {socialChannels.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3 rounded-xl border border-slate-200/80 bg-slate-50/60 hover:bg-blue-50/50 hover:border-[#006EDC]/40 transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white shrink-0 shadow-2xs group-hover:scale-105 transition-transform"
                    style={{ backgroundColor: item.color }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0B1E48] group-hover:text-[#006EDC] transition-colors">
                      {item.name}
                    </div>
                    <div className="text-[11px] text-slate-500 font-['JetBrains_Mono',monospace]">
                      {item.handle}
                    </div>
                  </div>
                </div>

                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#006EDC] group-hover:translate-x-0.5 transition-all" />
              </a>
            );
          })}
        </div>
      </div>

    </div>
  );
}
