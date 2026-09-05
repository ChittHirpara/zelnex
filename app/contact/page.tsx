"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionDivider } from "@/components/SectionDivider";
import {
  CheckCircle2,
  Loader2,
  ExternalLink,
  MessageCircle,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Building2,
  Phone,
  PhoneCall,
  MapPin,
  Mail,
  Clock,
  Globe2,
  FileCheck2,
  Factory,
  Boxes,
  Truck,
  Plus,
  Minus,
  HelpCircle,
  Check,
} from "lucide-react";



const INQUIRY_STREAMS = [
  {
    number: "01",
    title: "Commercial Formulations",
    subtitle: "581+ Approved Finished Molecules",
    description: "Direct volume supply for commercial importers, distributor networks, and retail pharmacy chains across 21 therapeutic areas.",
    icon: Boxes,
  },
  {
    number: "02",
    title: "Turnkey Dossier Licensing",
    subtitle: "CTD Modules 1 to 5 Ready",
    description: "Complete technical registration dossiers, bioequivalence summaries, and localized MOH regulatory submission assistance.",
    icon: FileCheck2,
  },
  {
    number: "03",
    title: "Contract Manufacturing",
    subtitle: "WHO-GMP Validated Facilities",
    description: "Scalable batch manufacturing with automated high-speed Alu-Alu, blister, liquid filling, and sterile lyophilized vial packaging lines.",
    icon: Factory,
  },
  {
    number: "04",
    title: "Tenders & Institutional Supply",
    subtitle: "Government & Hospital Procurement",
    description: "Specialized batch packaging, unit serialization, barcoding compliance, and cold-chain air cargo coordination for institutional tenders.",
    icon: Truck,
  },
];



export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
    agreedToTerms: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
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

    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));

    const generatedCode = `ZNX-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(generatedCode);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phoneNumber: "",
      email: "",
      subject: "",
      message: "",
      agreedToTerms: true,
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-[#F6F5F2] text-[#111827] antialiased selection:bg-[#111827] selection:text-white font-['Outfit',sans-serif]">
      
      {/* ── Global Font Styles ── */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        .font-serif-luxury {
          font-family: 'Playfair Display', Georgia, serif;
        }

        .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }

        /* Minimal clean form inputs */
        .editorial-input {
          border: none;
          border-bottom: 1px solid #E5E3DC;
          border-radius: 0;
          background: transparent;
          padding: 0.75rem 0;
          width: 100%;
          font-size: 0.9375rem;
          color: #111827;
          transition: border-color 0.2s ease;
        }

        .editorial-input:focus {
          outline: none;
          border-bottom: 1.5px solid #111827;
        }

        .editorial-input::placeholder {
          color: #9CA3AF;
          font-weight: 300;
        }
      `}</style>

      <Navbar />

      <main className="pt-24 sm:pt-28 pb-0">
        
        {/* ══════════════════════════════════════════════════════════════
            1. TOP EDITORIAL HERO HEADER
        ══════════════════════════════════════════════════════════════ */}
        <section className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 pt-6 pb-12">
          
          {/* Breadcrumb & Subtitle */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[#E5E3DC] text-xs font-mono text-[#6B7280]">
            <div className="flex items-center gap-2">
              <Link href="/" className="hover:text-[#111827] transition-colors">
                ZELNEX PHARMA
              </Link>
              <span>/</span>
              <span className="text-[#111827] font-bold">GLOBAL INQUIRIES &amp; DESKS</span>
            </div>
            <div className="flex items-center gap-3 mt-2 sm:mt-0">
              <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                DESKS ACTIVE WORLDWIDE
              </span>
              <span>·</span>
              <span>SLA &lt; 4 HOURS</span>
            </div>
          </div>

          {/* Editorial Headline */}
          <div className="max-w-4xl space-y-3">
            <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-[56px] text-[#111827] font-normal tracking-tight leading-[1.1]">
              Connecting global healthcare demand with accredited pharmaceutical formulations.
            </h1>
            <p className="text-sm sm:text-base text-[#6B7280] font-light max-w-2xl leading-relaxed pt-1">
              Connect directly with our international regulatory leadership, commercial export specialists, and contract manufacturing desks for rapid quotation, dossier access, and country distribution rights.
            </p>
          </div>

        </section>

        {/* ══════════════════════════════════════════════════════════════
            2. LUXURY EDITORIAL 2-COLUMN SPLIT FORM (Matching Reference)
        ══════════════════════════════════════════════════════════════ */}
        <section className="max-w-[1440px] mx-auto px-0 sm:px-6 lg:px-16 mb-20">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-y border-[#E5E3DC] bg-white">
            
            {/* ── LEFT COLUMN: CONTACT DETAILS & ADDRESS (Warm Off-White) ── */}
            <div className="lg:col-span-5 bg-[#F6F5F2] p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8 lg:border-r border-[#E5E3DC]">
              
              <div className="space-y-5">
                
                {/* Section Header */}
                <div className="space-y-1 pb-1">
                  <span className="font-mono text-[11px] text-[#B8945A] font-bold uppercase tracking-[0.25em] block">
                    01 // CORPORATE CHANNELS
                  </span>
                  <h3 className="font-serif-luxury text-2xl text-[#111827] tracking-tight">
                    Direct Liaison Desks
                  </h3>
                  <p className="text-xs text-[#6B7280] font-light leading-relaxed">
                    Connect directly with our headquarters, regulatory leads, and international export desks.
                  </p>
                </div>

                {/* 1. ADDRESS BOX CARD */}
                <div className="bg-white border border-[#E5E3DC] rounded-xl p-5 hover:border-[#B8945A] transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-3 group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-3.5 bg-[#B8945A] rounded-full inline-block" />
                      <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#111827] uppercase">
                        HEADQUARTERS &amp; R&amp;D
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-[#FAF9F5] border border-[#E5E3DC] flex items-center justify-center text-[#111827] group-hover:bg-[#111827] group-hover:text-white group-hover:border-[#111827] transition-colors">
                      <Building2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="space-y-1 pt-0.5">
                    <h4 className="text-sm font-semibold text-[#111827]">
                      Zelnex Pharmaceuticals Pvt. Ltd.
                    </h4>
                    <p className="text-xs text-[#4B5563] font-light leading-relaxed">
                      117 - Platinum Plaza, Near VT Circle, Sarthana Jakatnaka, Surat - 395013, Gujarat, India
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#F0EFEB]">
                    <a
                      href="https://maps.google.com/?q=Platinum+Plaza+Near+VT+Circle+Sarthana+Jakatnaka+Surat+Gujarat+395013"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B8945A] hover:text-[#111827] group/map transition-colors"
                    >
                      <span>Locate On Google Maps</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#B8945A] group-hover/map:translate-x-0.5 group-hover/map:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* 2. TELEPHONY & HOTLINES BOX CARD */}
                <div className="bg-white border border-[#E5E3DC] rounded-xl p-5 hover:border-[#B8945A] transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-3.5 group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-3.5 bg-[#B8945A] rounded-full inline-block" />
                      <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#111827] uppercase">
                        TELEPHONY &amp; DISPATCH
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-[#FAF9F5] border border-[#E5E3DC] flex items-center justify-center text-[#111827] group-hover:bg-[#111827] group-hover:text-white group-hover:border-[#111827] transition-colors">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    {/* Boardline */}
                    <div className="space-y-0.5">
                      <a
                        href="tel:+919328286164"
                        className="font-mono text-base font-semibold text-[#111827] hover:text-[#B8945A] transition-colors block tracking-tight"
                      >
                        +91 93282 86164
                      </a>
                      <p className="text-[11px] text-[#6B7280] font-light">
                        Official corporate liaison &amp; dispatch desk (Mon–Sat 9AM–7PM IST)
                      </p>
                    </div>

                    {/* WhatsApp Export Desk Box */}
                    <a
                      href="https://wa.me/919328286164?text=Hello%20Zelnex%20Team%2C%20I%20would%20like%20to%20inquire%20about%20finished%20pharmaceutical%20formulations."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg bg-[#F0FDF4] border border-emerald-200/80 hover:bg-[#DCFCE7] transition-all group/wa"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-md bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                          <MessageCircle className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="font-mono text-xs font-bold text-emerald-950 block">
                            +91 93282 86164
                          </span>
                          <span className="text-[10px] text-emerald-700 font-light block">
                            International export &amp; mobile hotline
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-600 text-white uppercase tracking-wider">
                        WhatsApp
                      </span>
                    </a>
                  </div>
                </div>

                {/* 3. OFFICIAL ELECTRONIC MAIL BOX CARD */}
                <div className="bg-white border border-[#E5E3DC] rounded-xl p-5 hover:border-[#B8945A] transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-3 group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-3.5 bg-[#B8945A] rounded-full inline-block" />
                      <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#111827] uppercase">
                        OFFICIAL EMAIL
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-[#FAF9F5] border border-[#E5E3DC] flex items-center justify-center text-[#111827] group-hover:bg-[#111827] group-hover:text-white group-hover:border-[#111827] transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                  </div>

                  <a
                    href="mailto:export@zelnex.in"
                    className="group/mail flex items-center justify-between p-3.5 rounded-lg bg-[#FAF9F5] border border-[#E5E3DC]/70 hover:border-[#B8945A] hover:bg-white transition-all"
                  >
                    <div className="space-y-0.5">
                      <span className="font-mono text-sm sm:text-base font-semibold text-[#111827] group-hover/mail:text-[#B8945A] transition-colors block tracking-tight">
                        export@zelnex.in
                      </span>
                      <span className="text-[11px] text-[#6B7280] font-light block">
                        Global export, regulatory inquiries &amp; commercial supply
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#B8945A] font-bold bg-[#FAF3E8] border border-[#E8D7B8] px-2.5 py-1 rounded uppercase tracking-wider flex-shrink-0 ml-2">
                      Official
                    </span>
                  </a>
                </div>

                {/* 4. OPERATIONAL HOURS & STATUS */}
                <div className="bg-[#FAF9F5] border border-[#E5E3DC] rounded-xl p-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-md bg-white border border-[#E5E3DC] flex items-center justify-center text-[#B8945A]">
                      <Clock className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#111827]">
                        Mon – Sat: 09:00 – 19:00 IST
                      </p>
                      <p className="text-[10px] text-[#6B7280] font-light">
                        Export hotline open 24/7 for overseas timezones
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-mono text-[10px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>ONLINE</span>
                  </div>
                </div>

              </div>

              {/* Bottom Institutional Quality Note */}
              <div className="pt-6 border-t border-[#E5E3DC]/80 flex items-center justify-between text-[11px] font-mono text-[#6B7280]">
                <span>WHO-GMP &amp; ISO CERTIFIED</span>
                <span>581 APPROVED SKUs</span>
              </div>

            </div>

            {/* ── RIGHT COLUMN: CLEAN EDITORIAL FORM (Pure White) ── */}
            <div className="lg:col-span-7 bg-[#FFFFFF] p-8 sm:p-12 lg:p-14 xl:p-16 flex flex-col justify-center">
              
              <div className="max-w-xl">
                
                {/* Header */}
                <div className="space-y-3 mb-8">
                  <h2 className="font-serif-luxury text-2xl sm:text-3xl text-[#111827] tracking-[0.2em] uppercase font-medium">
                    CONTACT US
                  </h2>
                  <p className="text-xs sm:text-sm text-[#6B7280] font-light leading-relaxed">
                    Thank you for your interest in Zelnex Pharmaceuticals. If you have any questions, please fill out the form below and our export desk will get back to you shortly.
                  </p>
                </div>

                {/* Submission Success View */}
                {isSubmitted ? (
                  <div className="py-12 space-y-4 animate-in fade-in duration-300">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>

                    <span className="font-mono text-xs font-bold text-[#B8945A] block uppercase tracking-wider">
                      INQUIRY REFERENCE: {ticketId}
                    </span>

                    <h3 className="text-xl sm:text-2xl font-serif-luxury text-[#111827]">
                      Message Received Successfully.
                    </h3>

                    <p className="text-sm text-[#6B7280] font-light leading-relaxed">
                      Thank you, <strong className="text-[#111827]">{formData.name}</strong>. Your correspondence has been routed to our international regulatory and commercial export team. We will review and reply to <strong className="text-[#111827]">{formData.email}</strong> within 4 business hours.
                    </p>

                    <div className="pt-4 flex items-center gap-4">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="px-6 py-3 bg-[#111827] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-black transition-colors cursor-pointer"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Minimal Underline Form */
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    
                    {/* Field 1: Name */}
                    <div className="space-y-1">
                      <label className="text-xs font-light text-[#6B7280] block">
                        Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: "" });
                        }}
                        placeholder="Your full name"
                        className="editorial-input"
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-500 font-light mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Field 2: Phone Number */}
                    <div className="space-y-1">
                      <label className="text-xs font-light text-[#6B7280] block">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="editorial-input"
                      />
                    </div>

                    {/* Field 3: Email */}
                    <div className="space-y-1">
                      <label className="text-xs font-light text-[#6B7280] block">
                        Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: "" });
                        }}
                        placeholder="name@company.com"
                        className="editorial-input"
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-500 font-light mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Field 4: Subject */}
                    <div className="space-y-1">
                      <label className="text-xs font-light text-[#6B7280] block">
                        Subject <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => {
                          setFormData({ ...formData, subject: e.target.value });
                          if (errors.subject) setErrors({ ...errors, subject: "" });
                        }}
                        placeholder="e.g., Finished Formulations Catalogue / CTD Dossier Request"
                        className="editorial-input"
                      />
                      {errors.subject && (
                        <p className="text-[11px] text-rose-500 font-light mt-1">{errors.subject}</p>
                      )}
                    </div>

                    {/* Field 5: Message */}
                    <div className="space-y-1 pt-1">
                      <label className="text-xs font-light text-[#6B7280] block">
                        Message <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: "" });
                        }}
                        placeholder="Please specify therapeutic molecules, volume requirements, or destination country..."
                        className="editorial-input resize-y"
                      />
                      {errors.message && (
                        <p className="text-[11px] text-rose-500 font-light mt-1">{errors.message}</p>
                      )}
                    </div>

                    {/* Field 6: Terms & Privacy Policy Checkbox */}
                    <div className="pt-2">
                      <label className="flex items-start gap-2.5 text-xs text-[#6B7280] font-light cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={formData.agreedToTerms}
                          onChange={(e) => {
                            setFormData({ ...formData, agreedToTerms: e.target.checked });
                            if (errors.agreedToTerms) setErrors({ ...errors, agreedToTerms: "" });
                          }}
                          className="mt-0.5 rounded border-slate-300 text-[#111827] focus:ring-0 cursor-pointer"
                        />
                        <span className="leading-snug">
                          I understand and agree to the Terms &amp; Conditions and Privacy Policy. All information is confidential under NDA.
                        </span>
                      </label>
                      {errors.agreedToTerms && (
                        <p className="text-[11px] text-rose-500 font-light mt-1">{errors.agreedToTerms}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-[#111827] hover:bg-black text-white text-xs font-bold uppercase tracking-[0.25em] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs disabled:opacity-60"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>TRANSMITTING...</span>
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
            3. CORE INSTITUTIONAL INQUIRY STREAMS (4 Minimalist Cards)
        ══════════════════════════════════════════════════════════════ */}
        <section className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 mb-8 sm:mb-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-[#E5E3DC] gap-4">
            <div>
              <span className="font-mono text-xs text-[#B8945A] font-bold uppercase tracking-[0.2em] block mb-1">
                02 // CAPABILITIES &amp; CHANNELS
              </span>
              <h2 className="font-serif-luxury text-2xl sm:text-4xl text-[#111827] uppercase tracking-wide">
                Inquiry Classification
              </h2>
            </div>
            <p className="text-xs text-[#6B7280] font-light max-w-sm">
              Select your operational scope to connect with dedicated commercial or regulatory leads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INQUIRY_STREAMS.map((stream) => {
              const Icon = stream.icon;
              return (
                <div
                  key={stream.number}
                  className="bg-white p-8 border border-[#E5E3DC] flex flex-col justify-between space-y-6 hover:border-[#111827] transition-all shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#B8945A]">
                        {stream.number}
                      </span>
                      <Icon className="w-5 h-5 text-[#111827]" />
                    </div>

                    <div>
                      <h3 className="font-serif-luxury text-lg text-[#111827] leading-snug">
                        {stream.title}
                      </h3>
                      <p className="text-[11px] font-mono text-[#00A0A2] font-semibold mt-1">
                        {stream.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-[#6B7280] font-light leading-relaxed">
                      {stream.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F0EFEB]">
                    <span className="text-[11px] font-mono font-bold text-[#111827] uppercase tracking-wider flex items-center gap-1">
                      <span>WHO-GMP Backed</span>
                      <span>✓</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </section>





      </main>

      {/* ── Signature Organic Wave Ribbon Line (from Blogs & About Us) ── */}
      <div className="mt-6 sm:mt-8 mb-0 relative overflow-hidden leading-[0] w-full" aria-hidden="true">
        <SectionDivider from="#082B61" to="#F6F5F2" height={42} />
        <SectionDivider from="#F6F5F2" to="#082B61" flip height={42} />
      </div>

      <Footer />
    </div>
  );
}
