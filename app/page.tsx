import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Overview } from "@/components/Overview";
import { Expertise } from "@/components/Expertise";
import { Footer } from "@/components/Footer";
import { FAQJsonLd } from "@/components/seo/JsonLd";

// Dynamically imported below-the-fold components for optimal initial bundle size and FCP/LCP
const FlowingVector = dynamic(
  () => import("@/components/FlowingVector").then((mod) => mod.FlowingVector)
);

const FormulationsHub = dynamic(
  () => import("@/components/FormulationsHub").then((mod) => mod.FormulationsHub)
);

const OurPackagingSection = dynamic(
  () => import("@/components/OurPackagingSection").then((mod) => mod.OurPackagingSection)
);

const Categories = dynamic(
  () => import("@/components/Categories").then((mod) => mod.Categories)
);

const CertificatesSection = dynamic(
  () => import("@/components/CertificatesSection").then((mod) => mod.CertificatesSection)
);

const GrowingNetwork = dynamic(
  () => import("@/components/GrowingNetwork").then((mod) => mod.GrowingNetwork)
);

const DigitalEpochSection = dynamic(
  () => import("@/components/DigitalEpochSection").then((mod) => mod.DigitalEpochSection)
);

const HOME_FAQS = [
  {
    question: "What pharmaceutical products does Zelnex export?",
    answer:
      "Zelnex exports over 355+ WHO-GMP certified finished pharmaceutical formulations across 6 dosage forms and 13 broad therapeutic categories including cardiovascular drugs, anti-diabetics, analgesics, anti-infectives, gastrointestinal agents, and respiratory medications in solid oral (tablets, capsules, effervescent tablets), liquid (syrups, suspensions), dry powders, and topical tube preparations.",
  },
  {
    question: "Are Zelnex formulations supported by CTD/eCTD dossiers for MOH registration?",
    answer:
      "Yes, Zelnex provides complete Common Technical Dossier (CTD) and electronic CTD (eCTD) Modules 1 through 5, supported by Zone IVb stability testing (30°C/75% RH for up to 36 months) and bioequivalence studies for expedited Ministry of Health (MOH) drug registration worldwide.",
  },
  {
    question: "Where is Zelnex Pharmaceuticals headquartered?",
    answer:
      "Zelnex Pharmaceuticals Pvt. Ltd. is headquartered at 117 - Platinum Plaza, Near VT Circle, Sarthana Jakatnaka, Surat - 395013, Gujarat, India, with active commercial export desks serving over 50 global destinations.",
  },
  {
    question: "Does Zelnex offer contract manufacturing and private labeling for international tenders?",
    answer:
      "Yes, Zelnex provides scalable contract manufacturing, third-party private labeling, custom barrier packaging (Alu-Alu, blister, sterile lyophilized vials), and institutional tender supply backed by WHO-GMP and ISO 9001:2015 certifications.",
  },
];

export default function Home() {
  return (
    <>
      <FAQJsonLd items={HOME_FAQS} />
      <Navbar />
      <main id="home">
        {/* Main Hero Section */}
        <Hero />

        {/* Scroll-animated flowing SVG vector wrapper */}
        <div id="vector-wrapper" className="relative overflow-hidden">
          <FlowingVector />

          {/* 1. Company Overview */}
          <Overview />

          {/* 2. 4 Capabilities Pillar Cards */}
          <Expertise />

          {/* 3. Finished Formulations & Precision Dosage Formats Hub */}
          <FormulationsHub />

          {/* 3.1 Primary & Secondary Packaging Formats Hub */}
          <OurPackagingSection />

          {/* 4. Therapeutic Fan Carousel: Categories */}
          <Categories />

          {/* 5. Global Accreditations & Regulatory Licensure */}
          <CertificatesSection />

          {/* 7. Global Flight Radar Network */}
          <GrowingNetwork />

          {/* 8. Institutional Contact Desk: bg-white */}
          <DigitalEpochSection />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
