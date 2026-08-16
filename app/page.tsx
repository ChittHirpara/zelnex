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
import { DigitalEpochSection } from "@/components/DigitalEpochSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Clean Hero section — free of vector overlays */}
        <Hero />

        {/* Scroll-animated flowing SVG vector vine with 5 blooming botanical nodes */}
        <div id="vector-wrapper" className="relative">
          <FlowingVector />
          <Overview />
          <WhoWeAre />
          <Expertise />
          <ProductShowcase />
          <Categories />
          <Packaging />
          <Certifications />
          <GrowingNetwork />
          <DigitalEpochSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
