import { Metadata } from "next";
import BlogsClient from "@/components/blogs/BlogsClient";
import { FAQ_DATA } from "@/data/faq";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Pharmaceutical Regulatory Insights & Technical Knowledge Base",
  description:
    "Technical guides, eCTD submission insights, Zone IVb stability protocols, WHO-GMP auditing standards, and international cold-chain logistics for pharmaceutical importers and distributors.",
  keywords: [
    "pharmaceutical regulatory insights",
    "eCTD submission guide",
    "Zone IVb stability testing",
    "WHO-GMP cleanroom standards",
    "cold chain pharma logistics",
    "COPP apostille legalization",
    "bioequivalence study protocols",
  ],
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Technical Knowledge Base & Regulatory FAQ | Zelnex Pharmaceuticals",
    description:
      "Expert answers and whitepapers on eCTD dossier licensing, Zone IVb stability testing, WHO-GMP auditing, and pharmaceutical export logistics.",
    url: "https://zelnexpharma.com/blogs",
    type: "website",
  },
};

export default function BlogsPage() {
  const faqSchemaItems = FAQ_DATA.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }));

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Insights & Technical FAQ", url: "/blogs" },
        ]}
      />
      <FAQJsonLd items={faqSchemaItems} />
      <BlogsClient />
    </>
  );
}
