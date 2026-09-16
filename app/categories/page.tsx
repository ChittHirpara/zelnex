import { Metadata } from "next";
import CategoriesClient from "@/components/categories/CategoriesClient";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "International Product Catalogue | Dosage & Category Wise Formulations",
  description:
    "Explore 355+ WHO-GMP certified finished formulations across 6 dosage forms and 13 broad therapeutic categories: Tablets, Capsules, Effervescent Tablets, Syrups & Suspensions, Dry Powders, and Topical Preparations. CTD Dossiers available.",
  keywords: [
    "international product catalogue",
    "pharmaceutical product portfolio",
    "WHO-GMP formulations India",
    "finished dosage forms",
    "tablets capsules syrups manufacturer",
    "topical tube preparations pharma",
    "CTD dossier ready molecules",
    "pharmaceutical export categories",
  ],
  alternates: {
    canonical: "/categories",
  },
  openGraph: {
    title: "International Product Catalogue | Zelnex Pharmaceuticals",
    description:
      "Browse 355+ WHO-GMP certified pharmaceutical formulations categorized by dosage form and therapeutic segment. CTD Dossiers available for worldwide registration.",
    url: "https://zelnexpharma.com/categories",
    type: "website",
  },
};

export default function CategoriesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Product Portfolio", url: "/categories" },
        ]}
      />
      <CategoriesClient />
    </>
  );
}
