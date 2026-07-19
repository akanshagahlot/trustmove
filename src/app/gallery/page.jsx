import Navbar from "../../component/navbar";
import GalleryHero from "../../component/galleryhero";
import GalleryPhotos from "../../component/galleryphotos";
import Footer from "../../component/footer";

export const metadata = {
  title:
    "Gallery | South Packer and Movers Home Shifting Services in India",

  description:
    "Explore the South Packer and Movers gallery showcasing our home shifting services in India, packing and shifting services, office packers and movers, home packers and movers, and professional relocation projects across India.",

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