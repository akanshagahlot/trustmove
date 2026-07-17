'use client';
import Navbar from "../component/navbar";
import Hero from "../component/hero";
import Services from "../component/services";
import Process from "../component/process";
import WhyChooseUs from "../component/whychooseus";
import Testimonials from "../component/testimonals";
import Footer from "../component/footer";

export default function Home() {
  return (
    <>
      {/* Global layout structures */}
      <Navbar />
      
      <main>
        {/* Main landing section containing entry quote form */}
        <Hero />
        
        {/* Dynamic services showcase grid */}
        <Services />
        
        {/* Relocation operational workflow */}
        <Process />
        
        {/* Core corporate values and statistics */}
        <WhyChooseUs />
        
        {/* Client reviews and trust verification items */}
        <Testimonials />
      </main>

      {/* Structured footer with complete reference layout */}
      <Footer />
    </>
  );
}
