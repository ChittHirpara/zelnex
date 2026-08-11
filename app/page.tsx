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
import { CtaFooter } from "@/components/CtaFooter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Clean Hero section — free of vector overlays */}
        <Hero />

        {/* Scroll-animated S-curve neon vector line starts at Overview section */}
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
          <CtaFooter />
        </div>
      </main>
      <Footer />
    </>
  );
}
