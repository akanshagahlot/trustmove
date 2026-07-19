import Navbar from "../../component/navbar";
import ContactHero from "../../component/contacthero";
import ContactCards from "../../component/contactcards";
import ContactForm from "../../component/contactform";
import Footer from "../../component/footer";

export const metadata = {
  title:
    "Contact Speed Packer and Mover | Home Shifting Services in India | Packers and Movers India",

  description:
    "Contact Speed Packer and Mover for reliable home shifting services in India. Our team provides professional packing and shifting services, office packers and movers, home packers and movers, and trusted relocation solutions across India.",

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

export default function ContactPage() {
  return (
    <>
      {/* Global Navigation Layout */}
      <Navbar />
      
      <main>
        {/* Contact Banner with descriptive customer support image overlay */}
        <ContactHero />
        
        {/* Quick channels grid for Direct Call, Email, and Address info */}
        <ContactCards />
        
        {/* Message submission interface split with responsive Google Map */}
        <ContactForm />
      </main>

      {/* Global Standard Custom Footer Grid */}
      <Footer />
    </>
  );
}