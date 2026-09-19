"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionDivider } from "@/components/SectionDivider";
import {
  CheckCircle2,
  Loader2,
  MessageCircle,
  ArrowUpRight,
  ShieldCheck,
  Building2,
  PhoneCall,
  Mail,
  Clock,
  FileCheck2,
  Factory,
  Boxes,
  Truck,
  Check,
} from "lucide-react";

const INQUIRY_STREAMS = [
  {
    number: "01",
    title: "Commercial Formulations",
    subtitle: "355+ Finished Molecules",
    description:
      "Generic pharmaceutical products for international commercial markets and distribution channels.",
    icon: Boxes,
  },
  {
    number: "02",
    title: "Market & Licensing",
    subtitle: "CTD Modules 1 to 5 Ready",
    description:
      "Product registration, MOH country filings, and territory exclusive distribution discussions.",
    icon: FileCheck2,
  },
  {
    number: "03",
    title: "Contract Manufacturing",
    subtitle: "WHO-GMP Validated Facilities",
    description:
      "Commercial formulation, pilot batches, and private-label packaging to custom specifications.",
    icon: Factory,
  },
  {
    number: "04",
    title: "Institutional Supply",
    subtitle: "Government & Hospital Procurement",
    description:
      "Large-scale tender bidding, NGO health programs, and hospital network medicine procurement.",
    icon: Truck,
  },
];

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
    agreedToTerms: true,
    website_hp: "", // Silent honeypot
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) {
      errs.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      errs.message = "Message is required";
    }
    if (!formData.agreedToTerms) {
      errs.agreedToTerms = "You must accept the terms & privacy policy";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.fieldErrors) {
          setErrors(data.fieldErrors);
        }
        setServerError(data.error || "Failed to submit inquiry. Please try again.");
        setIsSubmitting(false);
        return;
      }

      setTicketId(data.ticketId || `ZNX-${Date.now().toString().slice(-6)}`);
      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (err: unknown) {
      console.error("[Contact Form Submit Error]:", err);
      setServerError(
        "Network error occurred while transmitting to export desk. Please try again or email info@zelnexpharmaceuticals.com directly."
      );
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phoneNumber: "",
      email: "",
      subject: "",
      message: "",
      agreedToTerms: true,
      website_hp: "",
    });
    setErrors({});
    setServerError(null);
    setIsSubmitted(false);
  };

  return (
    <div
      className="min-h-screen relative bg-white text-[#082B61] font-['Outfit',sans-serif] selection:bg-[#006EDC] selection:text-white antialiased overflow-x-hidden"
      style={{
        backgroundColor: "#FFFFFF",
        backgroundImage: `
          radial-gradient(ellipse 75% 45% at 50% -5%, rgba(186, 230, 253, 0.45) 0%, rgba(224, 242, 254, 0.18) 55%, transparent 80%),
          radial-gradient(circle at 90% 75%, rgba(199, 210, 254, 0.22) 0%, transparent 45%),
          radial-gradient(circle at 10% 40%, rgba(186, 230, 253, 0.2) 0%, transparent 40%),
          linear-gradient(to right, rgba(0, 110, 220, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 110, 220, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: "100% 100%, 100% 100%, 100% 100%, 32px 32px, 32px 32px",
      }}
    >
      <Navbar />

      <main className="pt-28 sm:pt-32 pb-12 sm:pb-16 relative z-10">
        {/* ══════════════════════════════════════════════════════════════
            1. TOP HERO HEADER (Signature White & Technical Blue)
        ══════════════════════════════════════════════════════════════ */}
        <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12">
          {/* Breadcrumb & Live Status Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-blue-100 text-xs font-['JetBrains_Mono',monospace] text-slate-500">
            <div className="flex items-center gap-2">
              <Link href="/" className="hover:text-[#006EDC] transition-colors">
                ZELNEX PHARMA
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-[#082B61] font-bold">GLOBAL INQUIRIES &amp; DESKS</span>
            </div>
            <div className="flex items-center gap-3 mt-3 sm:mt-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                DESKS ACTIVE ACROSS 10+ MARKETS
              </span>
              <span className="text-slate-300">·</span>
              <span className="font-semibold text-slate-600">SLA &lt; 4 HOURS</span>
            </div>
          </div>

          {/* Clinical Badge & Title */}
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#006EDC]/10 border border-[#006EDC]/30 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#006EDC] animate-pulse" />
              <p className="text-[11px] font-['JetBrains_Mono',monospace] font-bold uppercase tracking-[0.15em] text-[#006EDC]">
                03.00 // INTERNATIONAL EXPORT DESK &amp; LIAISON
              </p>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-[#082B61] tracking-tight leading-[1.08] mb-4 font-['Outfit',sans-serif]">
              Connect With Zelnex for <span className="text-[#006EDC]">Global Pharmaceutical Supply</span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl font-normal">
              Share your product requirements, target market, dosage form, packaging needs, or manufacturing specifications with our international commercial and regulatory export team.
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            2. MODERN 2-COLUMN SPLIT FORM (White & Technical Blue)
        ══════════════════════════════════════════════════════════════ */}
        <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 rounded-3xl border border-blue-100 bg-white/95 backdrop-blur-md shadow-[0_12px_45px_rgba(0,110,220,0.08)] overflow-hidden">
            {/* ── LEFT COLUMN: CORPORATE CHANNELS (Frosted Technical Blue Panel) ── */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#F8FAFD] via-white to-[#F0F6FD] p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8 lg:border-r border-blue-100">
              <div className="space-y-5">
                {/* Section Header */}
                <div className="space-y-1.5 pb-2">
                  <span className="font-['JetBrains_Mono',monospace] text-[11px] text-[#006EDC] font-bold uppercase tracking-[0.2em] block">
                    01 // CORPORATE CHANNELS
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#082B61] tracking-tight uppercase font-['Outfit',sans-serif]">
                    GLOBAL EXPORT DESK
                  </h3>
                  <p className="text-xs text-slate-500 font-normal leading-relaxed">
                    Connect directly with our Surat headquarters, regulatory leads, and international export desks.
                  </p>
                </div>

                {/* 1. ADDRESS BOX CARD */}
                <div className="bg-white/90 backdrop-blur-xs border border-blue-100 rounded-2xl p-5 hover:border-[#006EDC] hover:shadow-[0_4px_20px_rgba(0,110,220,0.1)] transition-all duration-300 space-y-3 group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-3.5 bg-[#006EDC] rounded-full inline-block" />
                      <span className="font-['JetBrains_Mono',monospace] text-[11px] font-bold tracking-[0.15em] text-[#082B61] uppercase">
                        HEADQUARTERS &amp; R&amp;D
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#006EDC] group-hover:bg-[#006EDC] group-hover:text-white transition-colors">
                      <Building2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="space-y-1 pt-0.5">
                    <h4 className="text-sm font-bold text-[#082B61] font-['Outfit',sans-serif]">
                      Zelnex Pharmaceuticals Pvt. Ltd.
                    </h4>
                    <p className="text-xs text-slate-600 font-normal leading-relaxed">
                      117 - Platinum Plaza, Near VT Circle, Sarthana Jakatnaka, Surat - 395013, Gujarat, India
                    </p>
                  </div>

                  <div className="pt-2 border-t border-blue-50">
                    <a
                      href="https://maps.app.goo.gl/uiLQiWR9muJXici28"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#006EDC] hover:text-[#0052B4] group/map transition-colors font-['Outfit',sans-serif]"
                    >
                      <span>Locate On Google Maps</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#006EDC] group-hover/map:translate-x-0.5 group-hover/map:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* 2. TELEPHONY & HOTLINES BOX CARD */}
                <div className="bg-white/90 backdrop-blur-xs border border-blue-100 rounded-2xl p-5 hover:border-[#006EDC] hover:shadow-[0_4px_20px_rgba(0,110,220,0.1)] transition-all duration-300 space-y-3.5 group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-3.5 bg-[#006EDC] rounded-full inline-block" />
                      <span className="font-['JetBrains_Mono',monospace] text-[11px] font-bold tracking-[0.15em] text-[#082B61] uppercase">
                        TELEPHONY &amp; DISPATCH
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#006EDC] group-hover:bg-[#006EDC] group-hover:text-white transition-colors">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    {/* Boardline */}
                    <div className="space-y-0.5">
                      <a
                        href="tel:+919328286164"
                        className="font-['JetBrains_Mono',monospace] text-base font-bold text-[#082B61] hover:text-[#006EDC] transition-colors block tracking-tight"
                      >
                        +91 93282 86164
                      </a>
                      <p className="text-[11px] text-slate-500 font-normal">
                        Official corporate liaison &amp; dispatch desk (Mon–Sat 9AM–7PM IST)
                      </p>
                    </div>

                    {/* WhatsApp Export Desk Box */}
                    <a
                      href="https://wa.me/919328286164?text=Hello%20Zelnex%20Team%2C%20I%20would%20like%20to%20inquire%20about%20finished%20pharmaceutical%20formulations."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl bg-emerald-50/80 border border-emerald-200/80 hover:bg-emerald-100/70 transition-all group/wa"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                          <MessageCircle className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="font-['JetBrains_Mono',monospace] text-xs font-bold text-emerald-950 block">
                            +91 93282 86164
                          </span>
                          <span className="text-[10px] text-emerald-700 font-medium block">
                            International export &amp; mobile hotline
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-['JetBrains_Mono',monospace] font-bold px-2 py-0.5 rounded bg-emerald-600 text-white uppercase tracking-wider">
                        WhatsApp
                      </span>
                    </a>
                  </div>
                </div>

                {/* 3. OFFICIAL ELECTRONIC MAIL BOX CARD */}
                <div className="bg-white/90 backdrop-blur-xs border border-blue-100 rounded-2xl p-5 hover:border-[#006EDC] hover:shadow-[0_4px_20px_rgba(0,110,220,0.1)] transition-all duration-300 space-y-3 group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-3.5 bg-[#006EDC] rounded-full inline-block" />
                      <span className="font-['JetBrains_Mono',monospace] text-[11px] font-bold tracking-[0.15em] text-[#082B61] uppercase">
                        OFFICIAL EMAIL
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#006EDC] group-hover:bg-[#006EDC] group-hover:text-white transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                  </div>

                  <a
                    href="mailto:info@zelnexpharmaceuticals.com"
                    className="group/mail flex items-center justify-between p-3.5 rounded-xl bg-[#F8FAFD] border border-blue-100 hover:border-[#006EDC] hover:bg-white transition-all"
                  >
                    <div className="space-y-0.5">
                      <span className="font-['JetBrains_Mono',monospace] text-xs sm:text-sm font-bold text-[#082B61] group-hover/mail:text-[#006EDC] transition-colors block tracking-tight">
                        info@zelnexpharmaceuticals.com
                      </span>
                      <span className="text-[11px] text-slate-500 font-normal block">
                        Global export, regulatory inquiries &amp; commercial supply
                      </span>
                    </div>
                    <span className="text-[10px] font-['JetBrains_Mono',monospace] text-[#006EDC] font-bold bg-[#006EDC]/10 border border-[#006EDC]/25 px-2.5 py-1 rounded-full uppercase tracking-wider flex-shrink-0 ml-2">
                      Official
                    </span>
                  </a>
                </div>

                {/* 4. OPERATIONAL HOURS & STATUS */}
                <div className="bg-[#F8FAFD] border border-blue-100 rounded-xl p-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#006EDC]">
                      <Clock className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#082B61] font-['Outfit',sans-serif]">
                        Mon – Sat: 09:00 – 19:00 IST
                      </p>
                      <p className="text-[10px] text-slate-500 font-normal">
                        Export hotline open 24/7 for overseas timezones
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-['JetBrains_Mono',monospace] text-[10px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>ONLINE</span>
                  </div>
                </div>
              </div>

              {/* Bottom Institutional Quality Note */}
              <div className="pt-6 border-t border-blue-100 flex items-center justify-between text-[11px] font-['JetBrains_Mono',monospace] text-slate-500 font-semibold">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#006EDC]" />
                  WHO-GMP &amp; ISO CERTIFIED
                </span>
                <span className="text-[#006EDC]">355+ APPROVED SKUs</span>
              </div>
            </div>

            {/* ── RIGHT COLUMN: CLINICAL INQUIRY FORM (Crisp White + Blue Focus) ── */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-12 lg:p-14 xl:p-16 flex flex-col justify-center">
              <div className="max-w-xl">
                {/* Header */}
                <div className="space-y-2 mb-8">
                  <span className="font-['JetBrains_Mono',monospace] text-[11px] text-[#006EDC] font-bold uppercase tracking-[0.2em] block">
                    COMMERCIAL &amp; REGULATORY TRANSMISSION
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#082B61] tracking-tight uppercase font-['Outfit',sans-serif]">
                    Contact <span className="text-[#006EDC]">Export Desk</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
                    Complete the official dispatch form below. Our international export team will review your specifications and respond within 4 business hours.
                  </p>
                </div>

                {/* Submission Success View */}
                {isSubmitted ? (
                  <div className="py-8 space-y-4 animate-in fade-in duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/25">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>

                    <div>
                      <span className="font-['JetBrains_Mono',monospace] text-xs font-bold text-[#006EDC] bg-[#006EDC]/10 border border-[#006EDC]/25 px-3 py-1 rounded-full inline-block uppercase tracking-wider mb-2">
                        INQUIRY REFERENCE: {ticketId}
                      </span>

                      <h3 className="text-2xl font-extrabold text-[#082B61] tracking-tight font-['Outfit',sans-serif]">
                        Message Received Successfully
                      </h3>
                    </div>

                    <p className="text-sm text-slate-600 font-normal leading-relaxed">
                      Thank you, <strong className="text-[#082B61]">{formData.name}</strong>. Your correspondence has been routed directly to our international regulatory and commercial export team. We will review and reply to <strong className="text-[#082B61]">{formData.email}</strong> within 4 business hours.
                    </p>

                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="py-3.5 px-8 rounded-xl bg-gradient-to-r from-[#006EDC] to-[#0052B4] hover:from-[#005bb8] hover:to-[#082B61] text-white text-xs font-bold uppercase tracking-[0.15em] flex items-center gap-2 transition-all shadow-md shadow-blue-500/25 hover:shadow-lg active:scale-[0.98] cursor-pointer font-['Outfit',sans-serif]"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Clinical Form */
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Field 1: Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#082B61] uppercase tracking-wider block font-['Outfit',sans-serif]">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: "" });
                        }}
                        placeholder="Dr. / Mr. / Ms. Full Name"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFD] border border-slate-200 focus:bg-white focus:border-[#006EDC] focus:ring-4 focus:ring-[#006EDC]/10 text-sm text-[#082B61] placeholder:text-slate-400 font-medium transition-all outline-none font-['Outfit',sans-serif]"
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-500 font-medium mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* 2-col Row: Phone & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Field 2: Phone Number */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-[#082B61] uppercase tracking-wider block font-['Outfit',sans-serif]">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phoneNumber}
                          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 rounded-xl bg-[#F8FAFD] border border-slate-200 focus:bg-white focus:border-[#006EDC] focus:ring-4 focus:ring-[#006EDC]/10 text-sm text-[#082B61] placeholder:text-slate-400 font-medium transition-all outline-none font-['Outfit',sans-serif]"
                        />
                      </div>

                      {/* Field 3: Email */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-[#082B61] uppercase tracking-wider block font-['Outfit',sans-serif]">
                          Official Email <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: "" });
                          }}
                          placeholder="name@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#F8FAFD] border border-slate-200 focus:bg-white focus:border-[#006EDC] focus:ring-4 focus:ring-[#006EDC]/10 text-sm text-[#082B61] placeholder:text-slate-400 font-medium transition-all outline-none font-['Outfit',sans-serif]"
                        />
                        {errors.email && (
                          <p className="text-[11px] text-rose-500 font-medium mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Field 4: Subject */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#082B61] uppercase tracking-wider block font-['Outfit',sans-serif]">
                        Inquiry Subject <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => {
                          setFormData({ ...formData, subject: e.target.value });
                          if (errors.subject) setErrors({ ...errors, subject: "" });
                        }}
                        placeholder="e.g., 355+ Formulations Catalogue / CTD Dossier Licensing / Contract Manufacturing"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFD] border border-slate-200 focus:bg-white focus:border-[#006EDC] focus:ring-4 focus:ring-[#006EDC]/10 text-sm text-[#082B61] placeholder:text-slate-400 font-medium transition-all outline-none font-['Outfit',sans-serif]"
                      />
                      {errors.subject && (
                        <p className="text-[11px] text-rose-500 font-medium mt-1">{errors.subject}</p>
                      )}
                    </div>

                    {/* Field 5: Message */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#082B61] uppercase tracking-wider block font-['Outfit',sans-serif]">
                        Requirements &amp; Technical Scope <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: "" });
                        }}
                        placeholder="Please specify therapeutic molecules, batch sizing, destination country, or regulatory requirements..."
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFD] border border-slate-200 focus:bg-white focus:border-[#006EDC] focus:ring-4 focus:ring-[#006EDC]/10 text-sm text-[#082B61] placeholder:text-slate-400 font-medium transition-all outline-none resize-y font-['Outfit',sans-serif]"
                      />
                      {errors.message && (
                        <p className="text-[11px] text-rose-500 font-medium mt-1">{errors.message}</p>
                      )}
                    </div>

                    {/* Field 6: Terms & Privacy Policy Checkbox */}
                    <div className="pt-1">
                      <label className="flex items-start gap-2.5 text-xs text-slate-600 font-normal cursor-pointer select-none font-['Outfit',sans-serif]">
                        <input
                          type="checkbox"
                          checked={formData.agreedToTerms}
                          onChange={(e) => {
                            setFormData({ ...formData, agreedToTerms: e.target.checked });
                            if (errors.agreedToTerms) setErrors({ ...errors, agreedToTerms: "" });
                          }}
                          className="mt-0.5 rounded border-slate-300 text-[#006EDC] accent-[#006EDC] focus:ring-0 cursor-pointer"
                        />
                        <span className="leading-snug">
                          I understand and agree to the Terms &amp; Conditions and Privacy Policy. All shared product requirements remain confidential under NDA.
                        </span>
                      </label>
                      {errors.agreedToTerms && (
                        <p className="text-[11px] text-rose-500 font-medium mt-1">{errors.agreedToTerms}</p>
                      )}
                    </div>

                    {/* Silent Honeypot Input for anti-spam */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="website_hp">Leave this field blank</label>
                      <input
                        type="text"
                        id="website_hp"
                        name="website_hp"
                        value={formData.website_hp}
                        onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    {/* Server Error Alert Banner */}
                    {serverError && (
                      <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2 animate-in fade-in duration-200">
                        <span className="font-bold shrink-0">Error:</span>
                        <span>{serverError}</span>
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-[#006EDC] via-[#0284C7] to-[#0052B4] hover:from-[#005bb8] hover:via-[#0275af] hover:to-[#082B61] text-white text-xs sm:text-sm font-bold uppercase tracking-[0.2em] transition-all cursor-pointer flex items-center justify-center gap-2.5 shadow-lg shadow-[#006EDC]/25 hover:shadow-xl hover:shadow-[#006EDC]/35 active:scale-[0.99] disabled:opacity-60 font-['Outfit',sans-serif]"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>TRANSMITTING TO EXPORT DESK...</span>
                          </>
                        ) : (
                          <span>SUBMIT MESSAGE</span>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            3. CORE INSTITUTIONAL INQUIRY STREAMS (4 Technical Blue Cards)
        ══════════════════════════════════════════════════════════════ */}
        <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-blue-100 gap-4">
            <div>
              <span className="font-['JetBrains_Mono',monospace] text-xs text-[#006EDC] font-bold uppercase tracking-[0.2em] block mb-1">
                02 // CAPABILITIES &amp; CHANNELS
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#082B61] uppercase tracking-tight font-['Outfit',sans-serif]">
                Inquiry <span className="text-[#006EDC]">Classification</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-normal max-w-sm">
              Select your operational scope to connect with dedicated commercial or regulatory leads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INQUIRY_STREAMS.map((stream) => {
              const Icon = stream.icon;
              return (
                <div
                  key={stream.number}
                  className="bg-white/90 backdrop-blur-xs p-7 rounded-2xl border border-blue-100 hover:border-[#006EDC] hover:shadow-[0_12px_30px_rgba(0,110,220,0.12)] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-['JetBrains_Mono',monospace] text-xs font-bold text-[#006EDC] px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200/60">
                        {stream.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#006EDC] group-hover:bg-[#006EDC] group-hover:text-white transition-all flex items-center justify-center border border-blue-100">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-[#082B61] group-hover:text-[#006EDC] transition-colors leading-snug font-['Outfit',sans-serif] tracking-tight">
                        {stream.title}
                      </h3>
                      <p className="text-[11px] font-['JetBrains_Mono',monospace] text-[#006EDC] font-semibold mt-1">
                        {stream.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 font-normal leading-relaxed">
                      {stream.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-blue-50 flex items-center justify-between text-[11px] font-['JetBrains_Mono',monospace] font-bold text-slate-700">
                    <span>WHO-GMP Backed</span>
                    <span className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center text-[10px]">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* ── Signature Organic Wave Ribbon Line into Footer ── */}
      <div className="mt-8 sm:mt-12 mb-0 relative overflow-hidden leading-[0] w-full" aria-hidden="true">
        <SectionDivider from="#082B61" to="#ffffff" height={42} />
        <SectionDivider from="#ffffff" to="#082B61" flip height={42} />
      </div>

      <Footer />
    </div>
  );
}
