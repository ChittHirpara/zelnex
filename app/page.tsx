import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FlowingVector } from "@/components/FlowingVector";
import { Overview } from "@/components/Overview";
import { Expertise } from "@/components/Expertise";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Categories } from "@/components/Categories";
import { PackagingMatrix } from "@/components/PackagingMatrix";
import { CertificatesSection } from "@/components/CertificatesSection";
import { GrowingNetwork } from "@/components/GrowingNetwork";
import { DigitalEpochSection } from "@/components/DigitalEpochSection";
import { Footer } from "@/components/Footer";
import { SectionDivider } from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="home">
        {/* Main Hero Section */}
        <Hero />

        {/* Scroll-animated flowing SVG vector wrapper */}
        <div id="vector-wrapper" className="relative overflow-hidden">
          <FlowingVector />

          {/* 1. Company Overview (Technical Minimalist Blueprint with Inter + JetBrains Mono) */}
          <Overview />

          {/* 2. 4 Capabilities Pillar Cards */}
          <Expertise />

          {/* 3. Frosted Matte Glass Product Showcase */}
          <ProductShowcase />

          {/* 4. Therapeutic Fan Carousel: Categories */}
          <Categories />

          {/* 5. Precision Dosage Forms & High-Barrier Packaging */}
          <PackagingMatrix />

          {/* 6. Global Accreditations & Regulatory Licensure */}
          <CertificatesSection />

          {/* 7. Global Flight Radar Network */}
          <GrowingNetwork />

          {/* 8. Institutional Contact Desk: bg-white */}
          <DigitalEpochSection />
        </div>
      </main>

      {/* Footer Divider & Footer */}
      <SectionDivider from="#ffffff" to="#06132d" />
      <Footer />
    </>
  );
}
