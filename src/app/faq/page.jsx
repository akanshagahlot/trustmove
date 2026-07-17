'use client';

import Navbar from "../../component/navbar";
import FAQHero from "../../component/faqhero";
import FAQAccordion from "../../component/faqaccordion";
import Footer from "../../component/footer";
export const metadata = {
  title:
    "FAQ | TrustMove Home Shifting Services in India | Packers and Movers India",

  description:
    "Find answers to frequently asked questions about TrustMove's home shifting services in India, packing and shifting services, office packers and movers, home packers and movers, and relocation process.",

  keywords: [
    "home shifting services in india",
    "packers and movers india",
    "packing and movers near me",
    "home packers and movers",
    "home shifting services",
    "packing and shifting services",
    "office packers and movers",
    "packers and movers",
    "room shifting services near me",
    "the best packers and movers",
  ],
};

export default function FAQPage() {
  return (
    <>
      {/* Global Responsive Navigation Header */}
      
      
      <main>
        <Navbar />
        {/* Banner with minimalist image overlay and current route breadcrumbs */}
        <FAQHero />
        
        {/* Interactive, animated category dropdown grids */}
        <FAQAccordion />
        <Footer />
      </main>

      {/* Global Standard Base Footer Grid */}
      
    </>
  );
}