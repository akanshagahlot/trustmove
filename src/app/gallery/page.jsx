'use client';

import Navbar from "../../component/navbar";
import GalleryHero from "../../component/galleryhero";
import GalleryPhotos from "../../component/galleryphotos";
import Footer from "../../component/footer";

export const metadata = {
  title:
    "Gallery | TrustMove Home Shifting Services in India | Packers and Movers India",

  description:
    "Explore the TrustMove gallery showcasing our home shifting services in India, packing and shifting services, office packers and movers, home packers and movers, and professional relocation projects across India.",

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
export default function GalleryPage() {
  return (
    <>
      {/* Global Navigation Layout */}
      <Navbar />
      
      <main>
        {/* Sub-page top visual banner with breadcrumbs */}
        <GalleryHero />
        
        {/* Core Media grid containing the 4 detailed operations photos */}
        <GalleryPhotos />
      </main>

      {/* Global standard base Footer element */}
      <Footer />
    </>
  );
}