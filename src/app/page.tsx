import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DashboardPreview from "@/components/DashboardPreview";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Sticky Header */}
      <Navbar />
      
      {/* Main Sections */}
      <main className="flex-1 w-full">
        {/* Hero & Logo Marquee */}
        <Hero />
        
        {/* Dashboard Preview */}
        <DashboardPreview />
        
        {/* Features (6 cards) */}
        <Features />
        
        {/* Benefits Grid */}
        <Benefits />
        
        {/* Customer Testimonials Grid */}
        <Testimonials />
        
        {/* Pricing (3 Plans with Monthly/Annually billing switcher) */}
        <Pricing />
        
        {/* Expandable FAQs Accordion */}
        <FAQ />
        
        {/* Newsletter Signup Call To Action */}
        <CTA />
      </main>
      
      {/* Footer & Links Grid */}
      <Footer />
    </>
  );
}
