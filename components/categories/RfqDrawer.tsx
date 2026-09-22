"use client";

import React, { useState } from "react";
import { useRfqCart } from "@/context/RfqCartContext";
import {
  X,
  Trash2,
  FileDown,
  Send,
  Loader2,
  CheckCircle2,
  Building2,
  ExternalLink,
  ShieldCheck,
  Package,
} from "lucide-react";

export function RfqDrawer() {
  const { items, removeItem, clearCart, isDrawerOpen, closeDrawer } = useRfqCart();

  const [buyerData, setBuyerData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    phone: "",
    deliveryTerm: "FOB" as "FOB" | "CIF" | "CFR" | "Air DDP" | "Other",
    dossierRequired: true,
    additionalNotes: "",
    website_hp: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<{
    ticketId: string;
    itemCount: number;
  } | null>(null);

  if (!isDrawerOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!buyerData.name.trim()) errs.name = "Contact name is required";
    if (!buyerData.email.trim()) errs.email = "Corporate email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(buyerData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }
    if (!buyerData.company.trim()) errs.company = "Company / organization is required";
    if (!buyerData.country.trim()) errs.country = "Destination country is required";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmitRfq = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (items.length === 0) {
      setServerError("Your RFQ list is empty. Please select at least one formulation.");
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const payload = {
        name: buyerData.name,
        email: buyerData.email,
        company: buyerData.company,
        country: buyerData.country,
        phone: buyerData.phone || undefined,
        deliveryTerm: buyerData.deliveryTerm,
        dossierRequired: buyerData.dossierRequired,
        additionalNotes: buyerData.additionalNotes,
        website_hp: buyerData.website_hp,
        items: items.map((i) => ({
          id: i.id,
          composition: i.composition,
          dosage: i.dosage || "",
          dosageForm: i.dosageForm,
          categoryName: i.categoryName,
          quantity: "Commercial MOQ",
          targetPackaging: "Alu-Alu / Blister",
        })),
      };

      const res = await fetch("/api/rfq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.fieldErrors) {
          setErrors(data.fieldErrors);
        }
        setServerError(data.error || "Failed to transmit RFQ. Please try again.");
        setIsSubmitting(false);
        return;
      }

      setSubmittedTicket({
        ticketId: data.ticketId,
        itemCount: data.itemCount,
      });
      clearCart();
      setIsSubmitting(false);
    } catch (err: unknown) {
      console.error("[RFQ Submit Error]:", err);
      setServerError("Network error occurred. Please try again or email info@zelnexpharmaceuticals.com directly.");
      setIsSubmitting(false);
    }
  };

  // Download selected items as CSV
  const handleExportSelectedCsv = () => {
    if (items.length === 0) return;

    const headers = ["ID", "Formulation / Molecule", "Strength / Dosage", "Dosage Form", "Therapeutic Category"];
    const rows = items.map((item) => [
      `"${item.id}"`,
      `"${item.composition.replace(/"/g, '""')}"`,
      `"${(item.dosage || "").replace(/"/g, '""')}"`,
      `"${item.dosageForm.replace(/"/g, '""')}"`,
      `"${item.categoryName.replace(/"/g, '""')}"`,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Zelnex_Selected_RFQ_Formulations_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-xl bg-white shadow-2xl flex flex-col font-['Outfit',sans-serif]">
          {/* Header */}
          <div className="py-5 px-6 bg-[#F8FAFC] border-b border-[#E2E8F0] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#0088CC] text-white flex items-center justify-center font-bold">
                <Package className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 leading-tight">
                  Tender &amp; Commercial RFQ List
                </h3>
                <p className="text-xs text-slate-500 font-mono">
                  {items.length} formulation{items.length !== 1 ? "s" : ""} selected
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {items.length > 0 && (
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-xs text-slate-500 hover:text-rose-600 font-medium px-2 py-1 rounded transition-colors"
                  title="Clear all selected"
                >
                  Clear
                </button>
              )}
              <button
                type="button"
                onClick={closeDrawer}
                className="w-8 h-8 rounded-full border border-slate-200 hover:bg-slate-100 flex items-center justify-center text-slate-500 transition-colors"
                aria-label="Close RFQ Drawer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {submittedTicket ? (
              /* Success View */
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <div>
                  <span className="font-mono text-xs font-bold text-[#0088CC] block uppercase tracking-wider">
                    RFQ REFERENCE: {submittedTicket.ticketId}
                  </span>
                  <h4 className="text-xl font-bold text-slate-900 mt-1">
                    Quotation Request Transmitted
                  </h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto mt-2 leading-relaxed">
                    Our International Export Desk in Surat has logged your RFQ for{" "}
                    <strong>{submittedTicket.itemCount} molecules</strong>. An export officer will email your preliminary proforma and technical dossier index within 4 business hours.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/919328286164?text=Hello%20Zelnex%2C%20I%20just%20submitted%20Tender%20RFQ%20${submittedTicket.ticketId}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-md transition-colors"
                  >
                    <span>Notify Via WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedTicket(null);
                      closeDrawer();
                    }}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-md transition-colors"
                  >
                    Close Drawer
                  </button>
                </div>
              </div>
            ) : items.length === 0 ? (
              /* Empty Cart State */
              <div className="py-16 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                  <Package className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-slate-700">No Formulations In RFQ List</h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
                  Browse our 580+ WHO-GMP catalog and click &ldquo;+ Add to RFQ&rdquo; on any formulation to build your commercial tender quote.
                </p>
                <button
                  type="button"
                  onClick={closeDrawer}
                  className="mt-2 px-4 py-1.5 bg-[#0088CC] hover:bg-[#0077b3] text-white text-xs font-bold rounded transition-colors"
                >
                  Explore Formulations
                </button>
              </div>
            ) : (
              /* Active Selected Formulations List & Form */
              <>
                {/* Actions Bar */}
                <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100">
                  <span className="font-semibold text-slate-700">
                    Selected Molecules ({items.length})
                  </span>
                  <button
                    type="button"
                    onClick={handleExportSelectedCsv}
                    className="inline-flex items-center gap-1 text-[#0088CC] hover:text-[#006699] font-bold transition-colors cursor-pointer"
                  >
                    <FileDown className="w-3.5 h-3.5" />
                    <span>Download Selection CSV</span>
                  </button>
                </div>

                {/* Items Container */}
                <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="p-2.5 bg-slate-50 border border-slate-200 rounded-md flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="font-semibold text-slate-900 truncate">
                          {item.composition}
                        </div>
                        <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono mt-0.5">
                          <span>{item.dosage || item.dosageForm}</span>
                          <span>•</span>
                          <span className="text-[#0088CC] truncate">{item.categoryName}</span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="text-slate-400 hover:text-rose-600 p-1 transition-colors"
                        title="Remove from list"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* RFQ Form */}
                <form onSubmit={handleSubmitRfq} className="pt-4 border-t border-slate-200 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wide">
                    <Building2 className="w-4 h-4 text-[#0088CC]" />
                    <span>Procurement &amp; Dispatch Details</span>
                  </div>

                  {/* Honeypot hidden */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      value={buyerData.website_hp}
                      onChange={(e) => setBuyerData({ ...buyerData, website_hp: e.target.value })}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {serverError && (
                    <div className="p-3 rounded bg-rose-50 border border-rose-200 text-rose-800 text-xs">
                      {serverError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block text-slate-600 mb-1">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={buyerData.name}
                        onChange={(e) => setBuyerData({ ...buyerData, name: e.target.value })}
                        placeholder="Full Name"
                        className="w-full px-3 py-2 border border-slate-300 rounded focus:border-[#0088CC] focus:outline-none"
                      />
                      {errors.name && <p className="text-[10px] text-rose-500 mt-0.5">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-slate-600 mb-1">
                        Corporate Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={buyerData.email}
                        onChange={(e) => setBuyerData({ ...buyerData, email: e.target.value })}
                        placeholder="buyer@company.com"
                        className="w-full px-3 py-2 border border-slate-300 rounded focus:border-[#0088CC] focus:outline-none"
                      />
                      {errors.email && <p className="text-[10px] text-rose-500 mt-0.5">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-slate-600 mb-1">
                        Company / Hospital <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={buyerData.company}
                        onChange={(e) => setBuyerData({ ...buyerData, company: e.target.value })}
                        placeholder="Company Name"
                        className="w-full px-3 py-2 border border-slate-300 rounded focus:border-[#0088CC] focus:outline-none"
                      />
                      {errors.company && <p className="text-[10px] text-rose-500 mt-0.5">{errors.company}</p>}
                    </div>

                    <div>
                      <label className="block text-slate-600 mb-1">
                        Destination Country <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={buyerData.country}
                        onChange={(e) => setBuyerData({ ...buyerData, country: e.target.value })}
                        placeholder="e.g. Philippines, Kenya, UAE"
                        className="w-full px-3 py-2 border border-slate-300 rounded focus:border-[#0088CC] focus:outline-none"
                      />
                      {errors.country && <p className="text-[10px] text-rose-500 mt-0.5">{errors.country}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block text-slate-600 mb-1">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        value={buyerData.phone}
                        onChange={(e) => setBuyerData({ ...buyerData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-3 py-2 border border-slate-300 rounded focus:border-[#0088CC] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-600 mb-1">Delivery Incoterm</label>
                      <select
                        value={buyerData.deliveryTerm}
                        onChange={(e) =>
                          setBuyerData({
                            ...buyerData,
                            deliveryTerm: e.target.value as "FOB" | "CIF" | "CFR" | "Air DDP" | "Other",
                          })
                        }
                        className="w-full px-3 py-2 border border-slate-300 rounded focus:border-[#0088CC] focus:outline-none bg-white"
                      >
                        <option value="FOB">FOB JNPT / Mumbai</option>
                        <option value="CIF">CIF Destination Seaport</option>
                        <option value="Air DDP">Air Freight DDP</option>
                        <option value="CFR">CFR Destination Port</option>
                      </select>
                    </div>
                  </div>

                  <div className="text-xs">
                    <label className="flex items-center gap-2 text-slate-700 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={buyerData.dossierRequired}
                        onChange={(e) =>
                          setBuyerData({ ...buyerData, dossierRequired: e.target.checked })
                        }
                        className="rounded border-slate-300 text-[#0088CC] focus:ring-0"
                      />
                      <span>Request CTD Dossier (Modules 1–5) &amp; Stability Data for registration</span>
                    </label>
                  </div>

                  <div className="text-xs">
                    <label className="block text-slate-600 mb-1">Additional Specifications</label>
                    <textarea
                      rows={2}
                      value={buyerData.additionalNotes}
                      onChange={(e) => setBuyerData({ ...buyerData, additionalNotes: e.target.value })}
                      placeholder="Batch volumes, target packaging (Alu-Alu/PVC/Glass), or MOH submission deadline..."
                      className="w-full px-3 py-2 border border-slate-300 rounded focus:border-[#0088CC] focus:outline-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#0088CC] hover:bg-[#0077b3] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>REGISTERING TENDER RFQ...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>SUBMIT TENDER RFQ ({items.length} SKUs)</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 font-mono text-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Protected under Zelnex NDA • SLA &lt; 4 Hours</span>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
