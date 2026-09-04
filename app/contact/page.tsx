"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  X,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  Globe2,
  FileCheck2,
  Building2,
  MapPin,
  Mail,
  Phone,
  Clock,
  ExternalLink,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyEmail: "",
    phoneNumber: "",
    organizationType: "",
    country: "",
    discussionDetails: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");
  const [chatBubbleVisible, setChatBubbleVisible] = useState(true);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      errs.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      errs.lastName = "Last name is required";
    }
    if (!formData.companyEmail.trim()) {
      errs.companyEmail = "Company email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.companyEmail.trim())) {
      errs.companyEmail = "Please enter a valid email address";
    }
    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = "Phone number is required";
    }
    if (!formData.organizationType) {
      errs.organizationType = "Please select an organization type";
    }
    if (!formData.country) {
      errs.country = "Please select your country or region";
    }
    if (!formData.discussionDetails.trim()) {
      errs.discussionDetails = "Please provide brief details about your inquiry";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 900));

    const generatedCode = `ZNX-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(generatedCode);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      companyEmail: "",
      phoneNumber: "",
      organizationType: "",
      country: "",
      discussionDetails: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-[#111827] font-['Inter',sans-serif] selection:bg-[#006EDC] selection:text-white pt-24 sm:pt-28">
        
        {/* ── Main Two-Tone Canvas (Matching Reference Layout) ── */}
        <div className="relative w-full bg-[#ECEEEF] border-b border-slate-200/80 pt-10 pb-16 sm:pt-14 sm:pb-20">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* ── Left Column: Headline & Value Proposition ── */}
              <div className="lg:col-span-5 pt-2 lg:pt-6">
                
                {/* Asana-Style Clean Bold Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#111827] tracking-tight leading-[1.12] font-['Inter',sans-serif]">
                  Talk with our sales team
                </h1>

                {/* Subtext with Clean Inline Link */}
                <p className="mt-4 text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                  Fill out your information and a Zelnex representative will reach out to you. Have a simple question?{" "}
                  <Link
                    href="/blogs#faq"
                    className="text-[#111827] font-semibold underline underline-offset-4 hover:text-[#006EDC] transition-colors"
                  >
                    Check out our FAQ.
                  </Link>
                </p>

                {/* Subtle Value Checklist */}
                <div className="mt-8 pt-6 border-t border-slate-300/70 space-y-3.5 text-xs sm:text-[13px] text-slate-600">
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold text-[10px]">
                      ✓
                    </span>
                    <span>800+ finished generic formulations ready for export</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold text-[10px]">
                      ✓
                    </span>
                    <span>Complete CTD / eCTD Modules 1–5 &amp; Zone IVb stability</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold text-[10px]">
                      ✓
                    </span>
                    <span>WHO-GMP, ISO 9001:2015 certified manufacturing sites</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold text-[10px]">
                      ✓
                    </span>
                    <span>Average response time under 4 business hours</span>
                  </div>
                </div>

                {/* Direct Contact Micro-Card */}
                <div className="mt-8 p-4 rounded-xl bg-white/80 border border-slate-300/80 text-xs text-slate-600 space-y-1.5 shadow-2xs">
                  <div className="font-semibold text-slate-900">Prefer direct correspondence?</div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-600">
                    <a href="mailto:contact@zelnexpharma.com" className="hover:text-[#006EDC] font-medium underline">
                      contact@zelnexpharma.com
                    </a>
                    <span>•</span>
                    <a href="tel:+917948001234" className="hover:text-[#006EDC] font-medium">
                      +91 79 4800 1234
                    </a>
                  </div>
                </div>

              </div>

              {/* ── Right Column: Asana-Style Clean White Form Card ── */}
              <div className="lg:col-span-7 w-full">
                <div className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
                  
                  {isSubmitted ? (
                    <div className="py-8 flex flex-col items-center text-center animate-in fade-in duration-300">
                      <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>

                      <span className="text-[11px] font-['JetBrains_Mono',monospace] font-bold px-3 py-1 rounded-full bg-blue-50 text-[#006EDC] border border-blue-200 mb-2">
                        REFERENCE: {ticketId}
                      </span>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                        Thank you for reaching out
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-sm">
                        A Zelnex export &amp; regulatory specialist will review your request and get back to you shortly at <strong className="text-slate-900">{formData.companyEmail}</strong>.
                      </p>

                      <button
                        type="button"
                        onClick={handleReset}
                        className="mt-6 px-5 py-2.5 rounded-lg bg-[#111827] text-white text-xs font-semibold hover:bg-black transition-colors cursor-pointer"
                      >
                        Submit another inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-4">
                      
                      {/* Row 1: First Name */}
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-center">
                        <label className="sm:col-span-4 text-xs font-medium text-slate-700">
                          First Name <span className="text-rose-500">*</span>
                        </label>
                        <div className="sm:col-span-8">
                          <input
                            type="text"
                            value={formData.firstName}
                            onChange={(e) => {
                              setFormData({ ...formData, firstName: e.target.value });
                              if (errors.firstName) setErrors({ ...errors, firstName: "" });
                            }}
                            placeholder="e.g., John"
                            className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-[13px] text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all ${
                              errors.firstName
                                ? "border-rose-300 bg-rose-50/40 focus:border-rose-500"
                                : "border-slate-300 bg-white focus:border-slate-800 focus:ring-1 focus:ring-slate-800"
                            }`}
                          />
                          {errors.firstName && (
                            <p className="mt-1 text-[11px] text-rose-500">{errors.firstName}</p>
                          )}
                        </div>
                      </div>

                      {/* Row 2: Last Name */}
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-center">
                        <label className="sm:col-span-4 text-xs font-medium text-slate-700">
                          Last Name <span className="text-rose-500">*</span>
                        </label>
                        <div className="sm:col-span-8">
                          <input
                            type="text"
                            value={formData.lastName}
                            onChange={(e) => {
                              setFormData({ ...formData, lastName: e.target.value });
                              if (errors.lastName) setErrors({ ...errors, lastName: "" });
                            }}
                            placeholder="Smith"
                            className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-[13px] text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all ${
                              errors.lastName
                                ? "border-rose-300 bg-rose-50/40 focus:border-rose-500"
                                : "border-slate-300 bg-white focus:border-slate-800 focus:ring-1 focus:ring-slate-800"
                            }`}
                          />
                          {errors.lastName && (
                            <p className="mt-1 text-[11px] text-rose-500">{errors.lastName}</p>
                          )}
                        </div>
                      </div>

                      {/* Row 3: Company Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-center">
                        <label className="sm:col-span-4 text-xs font-medium text-slate-700">
                          Company Email <span className="text-rose-500">*</span>
                        </label>
                        <div className="sm:col-span-8">
                          <input
                            type="email"
                            value={formData.companyEmail}
                            onChange={(e) => {
                              setFormData({ ...formData, companyEmail: e.target.value });
                              if (errors.companyEmail) setErrors({ ...errors, companyEmail: "" });
                            }}
                            placeholder="name@company.com"
                            className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-[13px] text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all ${
                              errors.companyEmail
                                ? "border-rose-300 bg-rose-50/40 focus:border-rose-500"
                                : "border-slate-300 bg-white focus:border-slate-800 focus:ring-1 focus:ring-slate-800"
                            }`}
                          />
                          {errors.companyEmail && (
                            <p className="mt-1 text-[11px] text-rose-500">{errors.companyEmail}</p>
                          )}
                        </div>
                      </div>

                      {/* Row 4: Phone Number */}
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-center">
                        <label className="sm:col-span-4 text-xs font-medium text-slate-700">
                          Phone Number <span className="text-rose-500">*</span>
                        </label>
                        <div className="sm:col-span-8">
                          <input
                            type="tel"
                            value={formData.phoneNumber}
                            onChange={(e) => {
                              setFormData({ ...formData, phoneNumber: e.target.value });
                              if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: "" });
                            }}
                            placeholder="+1 555 655 5656"
                            className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-[13px] text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all ${
                              errors.phoneNumber
                                ? "border-rose-300 bg-rose-50/40 focus:border-rose-500"
                                : "border-slate-300 bg-white focus:border-slate-800 focus:ring-1 focus:ring-slate-800"
                            }`}
                          />
                          {errors.phoneNumber && (
                            <p className="mt-1 text-[11px] text-rose-500">{errors.phoneNumber}</p>
                          )}
                        </div>
                      </div>

                      {/* Row 5: Organization / Company Type */}
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-center">
                        <label className="sm:col-span-4 text-xs font-medium text-slate-700">
                          Organization Type <span className="text-rose-500">*</span>
                        </label>
                        <div className="sm:col-span-8">
                          <select
                            value={formData.organizationType}
                            onChange={(e) => {
                              setFormData({ ...formData, organizationType: e.target.value });
                              if (errors.organizationType) setErrors({ ...errors, organizationType: "" });
                            }}
                            className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-[13px] text-slate-900 bg-white focus:outline-none transition-all appearance-none cursor-pointer ${
                              errors.organizationType
                                ? "border-rose-300 bg-rose-50/40 focus:border-rose-500"
                                : "border-slate-300 focus:border-slate-800 focus:ring-1 focus:ring-slate-800"
                            }`}
                          >
                            <option value="">Select...</option>
                            <option value="importer">Commercial Importer / Distributor</option>
                            <option value="moh">Ministry of Health / Tender Authority</option>
                            <option value="brand">Pharmaceutical Brand Owner (Contract Mfg)</option>
                            <option value="hospital">Hospital Network / Healthcare Provider</option>
                            <option value="academic">Research / Academic Institution</option>
                            <option value="other">Other</option>
                          </select>
                          {errors.organizationType && (
                            <p className="mt-1 text-[11px] text-rose-500">{errors.organizationType}</p>
                          )}
                        </div>
                      </div>

                      {/* Row 6: Country / Region */}
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-center">
                        <label className="sm:col-span-4 text-xs font-medium text-slate-700">
                          Country / Region <span className="text-rose-500">*</span>
                        </label>
                        <div className="sm:col-span-8">
                          <select
                            value={formData.country}
                            onChange={(e) => {
                              setFormData({ ...formData, country: e.target.value });
                              if (errors.country) setErrors({ ...errors, country: "" });
                            }}
                            className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-[13px] text-slate-900 bg-white focus:outline-none transition-all appearance-none cursor-pointer ${
                              errors.country
                                ? "border-rose-300 bg-rose-50/40 focus:border-rose-500"
                                : "border-slate-300 focus:border-slate-800 focus:ring-1 focus:ring-slate-800"
                            }`}
                          >
                            <option value="">Select...</option>
                            <option value="latin-america">Latin America (LATAM)</option>
                            <option value="asean">Southeast Asia (ASEAN)</option>
                            <option value="middle-east">Middle East &amp; GCC</option>
                            <option value="africa">Africa (East, West, Central &amp; South)</option>
                            <option value="cis">CIS &amp; Central Asia</option>
                            <option value="europe">Europe &amp; UK</option>
                            <option value="south-asia">India &amp; South Asia</option>
                            <option value="other">Other Region</option>
                          </select>
                          {errors.country && (
                            <p className="mt-1 text-[11px] text-rose-500">{errors.country}</p>
                          )}
                        </div>
                      </div>

                      {/* Row 7: What would you like to discuss? */}
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-start pt-1">
                        <label className="sm:col-span-4 text-xs font-medium text-slate-700 pt-1 leading-snug">
                          What would you like to discuss? <span className="text-rose-500">*</span>
                        </label>
                        <div className="sm:col-span-8">
                          <textarea
                            rows={4}
                            value={formData.discussionDetails}
                            onChange={(e) => {
                              setFormData({ ...formData, discussionDetails: e.target.value });
                              if (errors.discussionDetails) setErrors({ ...errors, discussionDetails: "" });
                            }}
                            placeholder="Tell us about your requirements, specific molecules, target country registrations, or batch volume needs."
                            className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-[13px] text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all resize-y ${
                              errors.discussionDetails
                                ? "border-rose-300 bg-rose-50/40 focus:border-rose-500"
                                : "border-slate-300 bg-white focus:border-slate-800 focus:ring-1 focus:ring-slate-800"
                            }`}
                          />
                          {errors.discussionDetails && (
                            <p className="mt-1 text-[11px] text-rose-500">{errors.discussionDetails}</p>
                          )}
                        </div>
                      </div>

                      {/* Row 8: Submit Button */}
                      <div className="pt-3 flex justify-end">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="px-8 py-2.5 rounded-lg bg-[#111827] text-white text-xs sm:text-sm font-semibold hover:bg-black active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60 shadow-xs"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>Submitting...</span>
                            </>
                          ) : (
                            <span>Submit</span>
                          )}
                        </button>
                      </div>

                    </form>
                  )}

                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── Compact Institutional Information Strip Below ── */}
        <div className="py-12 bg-white border-b border-slate-100">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Headquarters</div>
                  <p className="text-slate-500 mt-0.5 leading-relaxed">
                    Corporate Heights, SG Highway, Ahmedabad, Gujarat 380054, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Official Email</div>
                  <p className="text-slate-500 mt-0.5 leading-relaxed">
                    contact@zelnexpharma.com<br />
                    export@zelnexpharma.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Telephone Lines</div>
                  <p className="text-slate-500 mt-0.5 leading-relaxed">
                    +91 79 4800 1234<br />
                    +91 98250 99881 (WhatsApp)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Working Hours</div>
                  <p className="text-slate-500 mt-0.5 leading-relaxed">
                    Mon – Sat: 09:00 – 18:30 IST<br />
                    24/7 Global Tender Dispatch
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </main>

      {/* ── Asana-Style Bottom-Right Floating Assistant Bubble ── */}
      {chatBubbleVisible && (
        <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-300">
          <div className="relative rounded-2xl bg-white border border-slate-200/90 py-2.5 px-3.5 shadow-xl max-w-[280px] text-xs text-slate-700 leading-snug">
            <button
              type="button"
              onClick={() => setChatBubbleVisible(false)}
              className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 flex items-center justify-center text-[10px] cursor-pointer"
              title="Dismiss"
            >
              <X className="w-3 h-3" />
            </button>
            <span>
              Hey there 👋 Want to skip the form and talk to our Export team right now?
            </span>
          </div>

          <a
            href="https://wa.me/919825099881?text=Hello%20Zelnex%20Team%2C%20I%20would%20like%20to%20inquire%20about%20pharmaceutical%20formulations%20and%20dossier%20licensing."
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#EA4C89] hover:bg-[#D83B75] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer shrink-0"
            title="Chat directly on WhatsApp"
          >
            {/* 3-Dot Iconic Graphic (Matching Asana Style Reference) */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <circle cx="12" cy="7" r="2.5" />
              <circle cx="7" cy="15" r="2.5" />
              <circle cx="17" cy="15" r="2.5" />
            </svg>
          </a>
        </div>
      )}

      <Footer />
    </>
  );
}
