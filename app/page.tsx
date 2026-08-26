import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FlowingVector } from "@/components/FlowingVector";
import { Overview } from "@/components/Overview";
import { WhoWeAre } from "@/components/WhoWeAre";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Categories } from "@/components/Categories";
import { Certifications } from "@/components/Certifications";
import { GrowingNetwork } from "@/components/GrowingNetwork";
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

          {/* Overview Section */}
          <Overview />

          {/* WhoWeAre Reference Section */}
          <WhoWeAre />

          {/* ProductShowcase Section */}
          <ProductShowcase />

          {/* ProductShowcase (white) → Categories (luminous sapphire #164e96) */}
          <SectionDivider from="#ffffff" to="#164e96" flip />

          {/* Categories: luminous sapphire blue */}
          <Categories />

          {/* Categories (#0d3063) → Certifications (white) */}
          <SectionDivider from="#0d3063" to="#ffffff" />

          {/* Certifications: bg-white */}
          <Certifications />

          {/* GrowingNetwork: bg-white */}
          <GrowingNetwork />

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
