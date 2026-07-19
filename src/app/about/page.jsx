import Navbar from "../../component/navbar";
import AboutHero from "../../component/abouthero";
import AboutStory from "../../component/aboutstory";
import Stats from "../../component/stats";
import CoreValues from "../../component/corevalues";
import Team from "../../component/team";
import Footer from "../../component/footer";

export const metadata = {
  title:
    "About Speed Packer and Mover | Best Packers and Movers India | Home Shifting Services",
  description:
    "Learn about Speed Packer and Mover, one of the best packers and movers in India. We provide home shifting services in India, packing and shifting services, office packers and movers, home packers and movers, room shifting services near me, and reliable packing and movers near me.",
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

export default function AboutPage() {
  return (
    <>
      {/* Global Responsive Navigation Header */}
      <Navbar />
      
      <main>
        {/* Banner with infrastructure text and visual dark overlay */}
        <AboutHero />
        
        {/* Brand narrative, Mission, and Vision split panel grid */}
        <AboutStory />
        
        {/* High-impact numbers showcase banner */}
        <Stats />
        
        {/* Integrity and operation parameters card block */}
        <CoreValues />
        
        {/* Team profiles and specialist roster grid */}
        <Team />
      </main>

      {/* Global Standard Custom Footer Grid */}
      <Footer />
    </>
  );
}