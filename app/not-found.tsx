import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Search, ArrowRight, PhoneCall, Building2, Layers } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] flex flex-col font-['Outfit',sans-serif] selection:bg-[#0088CC] selection:text-white">
      <Navbar />

      <main className="flex-1 flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0088CC] text-xs font-mono font-bold tracking-wider uppercase">
            <span>ERROR 404 // RESOURCE NOT LOCATED</span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#1B324F] tracking-tight">
              Page Not Found
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed">
              The regulatory file, product page, or document you are seeking has been archived or relocated. You can search our active formulary below.
            </p>
          </div>

          {/* Search Box */}
          <form
            action="/categories"
            method="GET"
            className="max-w-md mx-auto relative flex items-center bg-white border border-slate-300 rounded-lg shadow-sm focus-within:border-[#0088CC] focus-within:ring-1 focus-within:ring-[#0088CC] overflow-hidden"
          >
            <Search className="w-4 h-4 text-slate-400 ml-3.5 shrink-0" />
            <input
              type="text"
              name="search"
              placeholder="Search 355+ formulations or APIs..."
              className="w-full px-3 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2.5 bg-[#0088CC] text-white text-xs font-bold hover:bg-[#0077b3] transition-colors shrink-0"
            >
              Search
            </button>
          </form>

          {/* Core Navigation Pathways */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 text-left">
            <Link
              href="/categories"
              className="p-4 bg-white border border-slate-200 hover:border-[#0088CC] rounded-lg shadow-xs transition-all group"
            >
              <div className="w-7 h-7 rounded bg-blue-50 text-[#0088CC] flex items-center justify-center mb-2">
                <Layers className="w-4 h-4" />
              </div>
              <h2 className="text-xs font-bold text-slate-900 group-hover:text-[#0088CC] transition-colors">
                Product Portfolio
              </h2>
              <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-2">
                355+ formulations across 13 categories.
              </p>
            </Link>

            <Link
              href="/services"
              className="p-4 bg-white border border-slate-200 hover:border-[#0088CC] rounded-lg shadow-xs transition-all group"
            >
              <div className="w-7 h-7 rounded bg-blue-50 text-[#0088CC] flex items-center justify-center mb-2">
                <Building2 className="w-4 h-4" />
              </div>
              <h2 className="text-xs font-bold text-slate-900 group-hover:text-[#0088CC] transition-colors">
                Services &amp; DRA
              </h2>
              <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-2">
                Contract manufacturing and CTD dossiers.
              </p>
            </Link>

            <Link
              href="/contact"
              className="p-4 bg-white border border-slate-200 hover:border-[#0088CC] rounded-lg shadow-xs transition-all group"
            >
              <div className="w-7 h-7 rounded bg-blue-50 text-[#0088CC] flex items-center justify-center mb-2">
                <PhoneCall className="w-4 h-4" />
              </div>
              <h2 className="text-xs font-bold text-slate-900 group-hover:text-[#0088CC] transition-colors">
                Surat Export Desk
              </h2>
              <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-2">
                Direct corporate assistance &amp; RFQs.
              </p>
            </Link>
          </div>

          {/* Return Home Button */}
          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1B324F] hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
            >
              <span>Return to Corporate Homepage</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
