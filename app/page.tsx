import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FlowingVector } from "@/components/FlowingVector";
import { Overview } from "@/components/Overview";
import { Expertise } from "@/components/Expertise";
import { FormulationsHub } from "@/components/FormulationsHub";
import { Categories } from "@/components/Categories";
import { CertificatesSection } from "@/components/CertificatesSection";
import { GrowingNetwork } from "@/components/GrowingNetwork";
import { DigitalEpochSection } from "@/components/DigitalEpochSection";
import { Footer } from "@/components/Footer";

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

          {/* 1. Company Overview */}
          <Overview />

          {/* 2. 4 Capabilities Pillar Cards */}
          <Expertise />

          {/* 3. Finished Formulations & Precision Dosage Formats Hub */}
          <FormulationsHub />

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
