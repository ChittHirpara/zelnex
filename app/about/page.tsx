import type { Metadata } from "next";
import { MaskedCardsZelnexTheme } from "@/components/about/MaskedCardsZelnexTheme";

export const metadata: Metadata = {
  title: "Quality Healthcare & Formulations | Zelnex Pharmaceuticals",
  description:
    "Zelnex Pharmaceuticals Pvt. Ltd.—WHO-GMP certified finished generic pharmaceutical formulations, 150+ ready CTD/eCTD dossiers, and turnkey global supply chain.",
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
  openGraph: {
    title: "Quality Healthcare | Zelnex Pharmaceuticals",
    description:
      "WHO-GMP certified finished generic pharmaceutical formulations, 150+ ready CTD/eCTD dossiers, and turnkey global supply chain.",
    url: "https://zelnexpharma.com/about",
    siteName: "Zelnex Pharmaceuticals Pvt. Ltd.",
    locale: "en_US",
    type: "website",
  },
};

export default function AboutPage() {
  return <MaskedCardsZelnexTheme />;
}

