import type { Metadata } from "next";
import { MaskedCardsZelnexTheme } from "@/components/about/MaskedCardsZelnexTheme";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "About Zelnex | WHO-GMP Certified Pharmaceutical Manufacturer & Exporter",
  description:
    "Zelnex Pharmaceuticals Pvt. Ltd. is a premier WHO-GMP certified manufacturer and exporter based in Surat, Gujarat, India. Supplying 355+ finished formulations, 150+ ready CTD/eCTD dossiers, and turnkey global supply chain across 50+ countries.",
  keywords: [
    "Zelnex Pharmaceuticals",
    "About Zelnex",
    "Pharmaceutical Manufacturer India",
    "Pharma Exporter Surat Gujarat",
    "WHO-GMP Certified Formulations",
    "CTD eCTD Dossiers",
    "Zone IVb Stability Tested Medicines",
    "Generic Medicine Exporter",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Zelnex Pharmaceuticals | WHO-GMP Certified Manufacturer",
    description:
      "WHO-GMP certified finished generic pharmaceutical formulations, 150+ ready CTD/eCTD dossiers, and turnkey global supply chain across 50+ countries.",
    url: "https://zelnexpharma.com/about",
    siteName: "Zelnex Pharmaceuticals Pvt. Ltd.",
    locale: "en_US",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about" },
        ]}
      />
      <MaskedCardsZelnexTheme />
    </>
  );
}
