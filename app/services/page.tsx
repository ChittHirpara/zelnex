import { Metadata } from "next";
import ServicesClient from "@/components/services/ServicesClient";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Contract Manufacturing & Drug Regulatory Affairs (eCTD Dossiers)",
  description:
    "End-to-end pharmaceutical manufacturing and regulatory affairs services. CTD/eCTD Modules 1-5 ready for MOH submissions, WHO-GMP contract formulation, private label supply for institutional hospital tenders, and 355+ generic formulations.",
  keywords: [
    "pharmaceutical contract manufacturing India",
    "eCTD dossier licensing",
    "MOH drug registration assistance",
    "WHO-GMP third party pharma manufacturing",
    "Zone IVb stability testing",
    "institutional tender drug supply",
    "custom pharmaceutical formulation Surat",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Contract Manufacturing & Regulatory Affairs | Zelnex Pharmaceuticals",
    description:
      "WHO-GMP validated contract manufacturing, private-label supply for tenders, and complete CTD/eCTD dossier licensing across 50+ global export markets.",
    url: "https://zelnexpharma.com/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services & Capabilities", url: "/services" },
        ]}
      />
      <ServicesClient />
    </>
  );
}
