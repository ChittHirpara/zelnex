"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ChevronDown,
  Building2,
  Mail,
  User,
  Phone,
  MessageSquare,
  HelpCircle,
  FileCheck2,
  Sparkles,
} from "lucide-react";

export const INQUIRY_TYPES = [
  { id: "general", label: "General Inquiry", desc: "Corporate queries, executive correspondence, or office visits" },
  { id: "product", label: "Product Information", desc: "Formulations, active APIs, strength, and product catalog" },
  { id: "medical", label: "Medical Information", desc: "Pharmacological specs, clinical literature, or physician queries" },
  { id: "partnership", label: "Business Partnership", desc: "Country-exclusive distribution rights, licensing, or joint ventures" },
  { id: "manufacturing", label: "Contract & 3rd Party Manufacturing", desc: "WHO-GMP batch contract, tender private labeling, and bulk supply" },
  { id: "career", label: "Career Inquiry", desc: "Opportunities in Regulatory Affairs, QC/QA, and International Sales" },
  { id: "support", label: "Customer Support & Pharmacovigilance", desc: "Order logistics, shipment tracking, or adverse event reports" },
  { id: "other", label: "Other", desc: "Miscellaneous regulatory or institutional requests" },
];

export function ContactForm({
  preselectedInquiry,
}: {
  preselectedInquiry?: string;
}) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: preselectedInquiry || "partnership",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = "Please enter a valid full name";
    }

    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid business email address";
    }

    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (formData.phone.trim().length < 6) {
      errs.phone = "Please provide a valid contact number with country code";
    }

    if (!formData.message.trim()) {
      errs.message = "Message cannot be empty";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Please provide more details regarding your inquiry (min 10 characters)";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable institutional API dispatch
    await new Promise((resolve) => setTimeout(resolve, 1200));

    const generatedCode = `ZNX-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(generatedCode);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      inquiryType: "partnership",
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-[0_16px_50px_rgba(11,30,72,0.08)] flex flex-col items-center text-center font-['Inter',sans-serif] animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center text-emerald-600 mb-5 shadow-sm">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#006EDC] text-xs font-['JetBrains_Mono',monospace] font-bold mb-3">
          INQUIRY REFERENCE: {ticketId}
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E48] tracking-tight font-['Space_Grotesk',sans-serif]">
          Inquiry Successfully Dispatched
        </h3>

        <p className="mt-3 text-sm text-slate-600 max-w-md leading-relaxed">
          Thank you, <strong className="text-[#0B1E48]">{formData.fullName}</strong>. Your correspondence has been routed to our International Regulatory &amp; Commercial Export Desk.
        </p>

        <div className="mt-6 w-full max-w-md bg-slate-50 rounded-2xl border border-slate-200 p-4 text-left text-xs space-y-2 font-['JetBrains_Mono',monospace]">
          <div className="flex justify-between">
            <span className="text-slate-500">Contact Email:</span>
            <span className="font-bold text-[#0B1E48]">{formData.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Inquiry Domain:</span>
            <span className="font-bold text-[#006EDC] uppercase">
              {INQUIRY_TYPES.find((t) => t.id === formData.inquiryType)?.label || formData.inquiryType}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Expected SLA:</span>
            <span className="font-bold text-emerald-600">Within 4 Business Hours</span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="mt-8 px-6 py-3 rounded-full bg-[#006EDC] text-white text-xs font-bold font-['JetBrains_Mono',monospace] uppercase tracking-wider hover:bg-[#0055aa] transition-all shadow-md cursor-pointer"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div
      className="relative rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-[0_16px_50px_rgba(11,30,72,0.08)] font-['Inter',sans-serif]"
    >
      {/* Form Header */}
      <div className="mb-6 pb-5 border-b border-slate-100 flex items-start justify-between">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#006EDC] text-[11px] font-['JetBrains_Mono',monospace] font-bold mb-2">
            <FileCheck2 className="w-3.5 h-3.5" />
            DIRECT INSTITUTIONAL INQUIRY FORM
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B1E48] tracking-tight font-['Space_Grotesk',sans-serif]">
            Send an Official Message
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Fill out the form below for immediate routing to our pharmaceutical desk.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
        
        {/* Row 1: Full Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold text-[#0B1E48] mb-1.5">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => {
                  setFormData({ ...formData, fullName: e.target.value });
                  if (errors.fullName) setErrors({ ...errors, fullName: "" });
                }}
                placeholder="Dr. / Mr. / Ms. Full Name"
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs sm:text-[13px] text-[#0B1E48] placeholder:text-slate-400 focus:outline-none transition-all ${
                  errors.fullName
                    ? "border-rose-300 bg-rose-50/40 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                    : "border-slate-200 bg-slate-50/50 focus:border-[#006EDC] focus:bg-white focus:ring-2 focus:ring-blue-100"
                }`}
              />
            </div>
            {errors.fullName && (
              <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3 h-3" /> {errors.fullName}
              </p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-xs font-semibold text-[#0B1E48] mb-1.5">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: "" });
                }}
                placeholder="business@company.com"
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs sm:text-[13px] text-[#0B1E48] placeholder:text-slate-400 focus:outline-none transition-all ${
                  errors.email
                    ? "border-rose-300 bg-rose-50/40 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                    : "border-slate-200 bg-slate-50/50 focus:border-[#006EDC] focus:bg-white focus:ring-2 focus:ring-blue-100"
                }`}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3 h-3" /> {errors.email}
              </p>
            )}
          </div>

        </div>

        {/* Row 2: Phone Number & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Phone Number */}
          <div>
            <label className="block text-xs font-semibold text-[#0B1E48] mb-1.5">
              Phone / WhatsApp Number <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                  if (errors.phone) setErrors({ ...errors, phone: "" });
                }}
                placeholder="+1 555 019 2834"
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs sm:text-[13px] text-[#0B1E48] placeholder:text-slate-400 focus:outline-none transition-all ${
                  errors.phone
                    ? "border-rose-300 bg-rose-50/40 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                    : "border-slate-200 bg-slate-50/50 focus:border-[#006EDC] focus:bg-white focus:ring-2 focus:ring-blue-100"
                }`}
              />
            </div>
            {errors.phone && (
              <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3 h-3" /> {errors.phone}
              </p>
            )}
          </div>

          {/* Company / Institution */}
          <div>
            <label className="block text-xs font-semibold text-[#0B1E48] mb-1.5">
              Company / Ministry Name <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <div className="relative">
              <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="e.g. Apex Health Ministry / Pharma Corp"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:border-[#006EDC] focus:bg-white focus:ring-2 focus:ring-blue-100 text-xs sm:text-[13px] text-[#0B1E48] placeholder:text-slate-400 focus:outline-none transition-all"
              />
            </div>
          </div>

        </div>

        {/* Row 3: Inquiry Type Dropdown */}
        <div>
          <label className="block text-xs font-semibold text-[#0B1E48] mb-1.5">
            Inquiry Domain / Subject <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <select
              value={formData.inquiryType}
              onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
              className="w-full pl-4 pr-10 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:border-[#006EDC] focus:bg-white focus:ring-2 focus:ring-blue-100 text-xs sm:text-[13px] text-[#0B1E48] focus:outline-none transition-all appearance-none cursor-pointer font-medium"
            >
              {INQUIRY_TYPES.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.label} — {type.desc}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Row 4: Message Textarea */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-xs font-semibold text-[#0B1E48]">
              Your Detailed Message <span className="text-rose-500">*</span>
            </label>
            <span className="text-[11px] font-['JetBrains_Mono',monospace] text-slate-400">
              {formData.message.length} chars
            </span>
          </div>
          <textarea
            rows={5}
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
              if (errors.message) setErrors({ ...errors, message: "" });
            }}
            placeholder="Please specify molecule requirements, target country registrations, batch volume estimates, or dossier needs..."
            className={`w-full p-4 rounded-xl border text-xs sm:text-[13px] text-[#0B1E48] placeholder:text-slate-400 focus:outline-none transition-all resize-y ${
              errors.message
                ? "border-rose-300 bg-rose-50/40 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                : "border-slate-200 bg-slate-50/50 focus:border-[#006EDC] focus:bg-white focus:ring-2 focus:ring-blue-100"
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3 h-3" /> {errors.message}
            </p>
          )}
        </div>

        {/* Security / Compliance Badge */}
        <div className="flex items-center gap-2 p-3 rounded-xl bg-blue-50/60 border border-blue-100 text-[11.5px] text-slate-600">
          <Sparkles className="w-4 h-4 text-[#006EDC] shrink-0" />
          <span>
            <strong>Data Security &amp; NDA:</strong> All shared formulation requirements and regulatory inquiries are strictly protected under institutional non-disclosure protocols.
          </span>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#006EDC] via-[#0284C7] to-[#0A4EA3] text-white text-xs sm:text-sm font-bold font-['JetBrains_Mono',monospace] uppercase tracking-wider shadow-[0_4px_20px_rgba(0,110,220,0.3)] hover:shadow-[0_8px_30px_rgba(0,110,220,0.45)] hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Transmitting Securely...</span>
            </>
          ) : (
            <>
              <span>Transmit Inquiry</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>

      </form>
    </div>
  );
}
