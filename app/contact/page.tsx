import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionDivider } from "@/components/SectionDivider";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfoCards } from "@/components/contact/ContactInfoCards";
import { ContactForm } from "@/components/contact/ContactForm";
import { HowWeHelp } from "@/components/contact/HowWeHelp";
import { OfficeMap } from "@/components/contact/OfficeMap";
import { ContactCta } from "@/components/contact/ContactCta";

export const metadata: Metadata = {
  title: "Contact Us & Global Export Desk | Zelnex Pharmaceuticals",
  description:
    "Get in touch with Zelnex Pharmaceuticals Pvt. Ltd. Connect with our institutional desk for commercial generic formulations, WHO-GMP contract manufacturing, eCTD dossier licensing, and export partnerships.",
  openGraph: {
    title: "Contact Us | Zelnex Pharmaceuticals",
    description:
      "Connect with Zelnex Pharmaceuticals. Inquire about 800+ finished formulations, regulatory dossiers, and global distribution licensing.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F8FAFC] text-[#0B1E48] font-['Inter',sans-serif] selection:bg-[#006EDC] selection:text-white">
        
        {/* 1. Hero Section */}
        <ContactHero />

        {/* 2. Main Two-Column Contact Section */}
        <section
          id="contact-form-section"
          className="relative py-16 sm:py-24 overflow-hidden border-b border-blue-100"
          style={{
            background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 50%, #F8FAFC 100%)",
          }}
        >
          {/* Subtle Grid Pattern */}
          <div
            className="pointer-events-none absolute inset-0 z-0 opacity-25"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0, 110, 220, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 110, 220, 0.15) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
            aria-hidden
          />

          <div className="relative z-10 mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              
              {/* Left Column (5 Cols): Institutional Information & Channels */}
              <div className="lg:col-span-5 w-full">
                <div className="sticky top-28">
                  <div className="mb-6">
                    <span className="text-[11px] font-['JetBrains_Mono',monospace] font-bold uppercase tracking-[0.16em] text-[#006EDC] block mb-1">
                      DIRECT CHANNELS
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E48] tracking-tight font-['Space_Grotesk',sans-serif]">
                      Institutional Contact Information
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      Reach our corporate headquarters directly or connect with specialized departments for regulatory, tender, and export requirements.
                    </p>
                  </div>

                  <ContactInfoCards />
                </div>
              </div>

              {/* Right Column (7 Cols): High-End Interactive Form */}
              <div className="lg:col-span-7 w-full">
                <ContactForm />
              </div>

            </div>
          </div>
        </section>

        {/* 3. "How Can We Help You?" Guidance Matrix */}
        <HowWeHelp />

        {/* 4. Geographic Hubs & Interactive Map */}
        <OfficeMap />

        {/* 5. Pre-Footer Call to Action */}
        <ContactCta />

      </main>

      {/* 6. Footer Divider & Footer */}
      <SectionDivider from="#06132D" to="#06132d" />
      <Footer />
    </>
  );
}
