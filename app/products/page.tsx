import { Metadata } from "next";
import CategoriesClient from "@/components/categories/CategoriesClient";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "International Product Catalogue | 355+ Finished Formulations",
  description:
    "Explore 355+ WHO-GMP certified finished formulations across 6 dosage forms and 13 broad therapeutic categories: Tablets, Capsules, Effervescent Tablets, Syrups & Suspensions, Dry Powders, and Topical Preparations. CTD Dossiers available.",
  keywords: [
    "international product catalogue",
    "pharmaceutical product portfolio",
    "WHO-GMP formulations India",
    "finished dosage forms",
    "tablets capsules syrups manufacturer",
    "topical preparations pharma exporter",
    "CTD dossier ready molecules",
    "pharmaceutical export products Surat",
  ],
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "International Product Catalogue | Zelnex Pharmaceuticals",
    description:
      "Browse 355+ WHO-GMP certified pharmaceutical formulations categorized by dosage form and therapeutic segment. CTD Dossiers available for worldwide registration.",
    url: "https://zelnexpharma.com/products",
    type: "website",
  },
};

export default function ProductsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Product Portfolio", url: "/products" },
        ]}
      />
      <CategoriesClient />
    </>
  );
}
