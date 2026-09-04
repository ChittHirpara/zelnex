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
  Globe,
  Share2,
  Building,
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
      subText: "Corporate Heights, SG Highway, Ahmedabad, Gujarat 380054, India",
      telemetry: "GPS: 23.0225° N, 72.5714° E",
      actionText: "View on Google Maps",
      actionHref: "https://maps.google.com/?q=Ahmedabad,+Gujarat,+India",
      copyText: "Zelnex Pharmaceuticals Pvt. Ltd., Corporate Heights, SG Highway, Ahmedabad, Gujarat 380054, India",
    },
    {
      id: "phone",
      title: "Direct Telephone Lines",
      icon: Phone,
      iconColor: "#0D9488",
      iconBg: "rgba(13, 148, 136, 0.1)",
      iconBorder: "rgba(13, 148, 136, 0.25)",
      badge: "INSTITUTIONAL HOTLINE",
      mainText: "+91 79 4800 1234",
      subText: "+91 98250 99881 (Global WhatsApp & Export Desk)",
      telemetry: "IVR: Mon–Sat 09:00–18:30 IST",
      actionText: "Call Head Office",
      actionHref: "tel:+917948001234",
      copyText: "+917948001234",
    },
    {
      id: "email",
      title: "Official Electronic Mail",
      icon: Mail,
      iconColor: "#7C3AED",
      iconBg: "rgba(124, 58, 237, 0.1)",
      iconBorder: "rgba(124, 58, 237, 0.25)",
      badge: "ENCRYPTED ROUTING",
      mainText: "export@zelnex.in",
      subText: "Global export, regulatory inquiries & commercial supply",
      telemetry: "Average response: < 4 hours",
      actionText: "Send Direct Email",
      actionHref: "mailto:export@zelnex.in",
      copyText: "export@zelnex.in",
    },
    {
      id: "hours",
      title: "Operating Hours & SLAs",
      icon: Clock,
      iconColor: "#EA580C",
      iconBg: "rgba(234, 88, 12, 0.1)",
      iconBorder: "rgba(234, 88, 12, 0.25)",
      badge: "GLOBAL TIMEZONE COMPLIANT",
      mainText: "Monday – Saturday: 09:00 – 18:30 IST",
      subText: "Sunday: Closed (Emergency MOH tender support online)",
      telemetry: "Timezone: Indian Standard Time (UTC+05:30)",
      actionText: "Check Local Time",
      actionHref: "#",
      copyText: "Monday – Saturday: 09:00 – 18:30 IST (UTC+05:30)",
    },
  ];

  const socialChannels = [
    {
      name: "LinkedIn",
      handle: "zelnex-pharmaceuticals",
      href: "https://linkedin.com",
      icon: LinkedinIcon,
      color: "#0A66C2",
      badge: "Corporate & Hiring",
    },
    {
      name: "WhatsApp Direct",
      handle: "+91 98250 99881",
      href: "https://wa.me/919825099881",
      icon: MessageCircle,
      color: "#25D366",
      badge: "Instant Export Desk",
    },
    {
      name: "Twitter / X",
      handle: "@ZelnexPharma",
      href: "https://twitter.com",
      icon: TwitterIcon,
      color: "#0F1419",
      badge: "Industry Updates",
    },
    {
      name: "Global Importers Portal",
      handle: "portal.zelnexpharma.com",
      href: "/services",
      icon: Globe,
      color: "#006EDC",
      badge: "Dossiers & Orders",
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
