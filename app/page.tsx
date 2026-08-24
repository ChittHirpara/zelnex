import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FlowingVector } from "@/components/FlowingVector";
import { Overview } from "@/components/Overview";
import { WhoWeAre } from "@/components/WhoWeAre";
import { Expertise } from "@/components/Expertise";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Categories } from "@/components/Categories";
import { Packaging } from "@/components/Packaging";
import { Certifications } from "@/components/Certifications";
import { GrowingNetwork } from "@/components/GrowingNetwork";
import { FAQSection } from "@/components/FAQSection";
import { DigitalEpochSection } from "@/components/DigitalEpochSection";
import { Footer } from "@/components/Footer";
import { SectionDivider } from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero section with smooth bottom white fade */}
        <Hero />

        {/* Scroll-animated flowing SVG vector vine with 5 blooming botanical nodes */}
        <div id="vector-wrapper" className="relative overflow-hidden">
          <FlowingVector />

          {/* Overview: bg-white */}
          <Overview />

          {/* Overview (white) → WhoWeAre (dark navy) */}
          <SectionDivider from="#ffffff" to="#0b1e48" flip />

          {/* WhoWeAre: bg-navy */}
          <WhoWeAre />

          {/* WhoWeAre (dark navy) → Expertise (white) */}
          <SectionDivider from="#0b1e48" to="#ffffff" />

          {/* Expertise: bg-white */}
          <Expertise />

          {/* ProductShowcase: bg-white */}
          <ProductShowcase />

          {/* ProductShowcase (white) → Categories (rich sapphire navy #0b224d) */}
          <SectionDivider from="#ffffff" to="#0b224d" flip />

          {/* Categories: rich sapphire navy atmosphere */}
          <Categories />

          {/* Categories (#061533) → Certifications (white) */}
          <SectionDivider from="#061533" to="#ffffff" />

          {/* Certifications: bg-white */}
          <Certifications />

          {/* Packaging: bg-white */}
          <Packaging />

          {/* GrowingNetwork: bg-white */}
          <GrowingNetwork />

          {/* Highly Animated FAQ Section: bg-white */}
          <FAQSection />

          {/* DigitalEpochSection / Contact: bg-white with embedded video card */}
          <DigitalEpochSection />
        </div>
      </main>

      {/* DigitalEpoch (white) → Footer (deep dark navy #06132d) */}
      <SectionDivider from="#ffffff" to="#06132d" />
      <Footer />
    </>
  );
}
