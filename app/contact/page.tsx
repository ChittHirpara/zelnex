import { Metadata } from "next";
import ContactClient from "@/components/contact/ContactClient";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Contact International Export Desk & Surat Corporate Headquarters",
  description:
    "Connect with Zelnex Pharmaceuticals corporate headquarters in Surat, Gujarat, India. Request technical CTD dossiers, quotation for WHO-GMP finished formulations, or private label contract manufacturing.",
  keywords: [
    "contact pharmaceutical exporter India",
    "Zelnex Surat headquarters",
    "pharma export inquiry Surat",
    "CTD dossier request",
    "contract manufacturing inquiry",
    "international medicine procurement",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact International Export Desk | Zelnex Pharmaceuticals",
    description:
      "Direct corporate liaison desks at Platinum Plaza, Surat, Gujarat. Connect for pharmaceutical export orders, CTD dossier licensing, and contract manufacturing inquiries.",
    url: "https://zelnexpharma.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Contact & Inquiries", url: "/contact" },
        ]}
      />
      <ContactClient />
    </>
  );
}
