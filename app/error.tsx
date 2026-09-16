"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { RefreshCcw, PhoneCall, AlertTriangle } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[Zelnex Runtime Error]:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] flex flex-col items-center justify-center p-6 font-['Outfit',sans-serif]">
      <div className="max-w-lg w-full bg-white border border-slate-200 rounded-2xl shadow-xl p-8 sm:p-10 text-center space-y-6">
        <div className="w-14 h-14 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto border border-rose-200">
          <AlertTriangle className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs font-bold text-rose-600 tracking-wider uppercase">
            APPLICATION RUNTIME NOTICE
          </span>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Unexpected System Exception
          </h1>
          <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
            An unexpected error occurred while rendering this interface. Our technical infrastructure has logged the incident.
          </p>
          {error.digest && (
            <p className="text-[10px] font-mono text-slate-400">
              Audit Reference ID: {error.digest}
            </p>
          )}
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0088CC] hover:bg-[#0077b3] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer shadow-xs"
          >
            <RefreshCcw className="w-3.5 h-3.5" />
            <span>Retry Operation</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors"
          >
            Return to Home
          </Link>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-500 font-mono">
          <PhoneCall className="w-3.5 h-3.5 text-[#0088CC]" />
          <span>Export Emergency Desk: +91 93282 86164</span>
        </div>
      </div>
    </div>
  );
}
