'use client';

import Navbar from "../../component/navbar";
import BlogHero from "../../component/bloghero";
import BlogCard from "../../component/blogcard";
import Footer from "../../component/footer";
export const metadata = {
  title:
    "TrustMove Blog | Home Shifting Services in India | Packers and Movers India",

  description:
    "Read the TrustMove Blog for expert home shifting services in India, packing and shifting services, office packers and movers, home packers and movers, and professional moving advice from one of the best packers and movers.",

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

  alternates: {
    canonical: "/blog",
  },

  openGraph: {
    title:
      "TrustMove Blog | Home Shifting Services in India",
    description:
      "Explore expert moving guides and relocation tips from TrustMove, one of the best packers and movers in India.",
    url: "/blog",
    siteName: "TrustMove",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "TrustMove Blog | Home Shifting Services in India",
    description:
      "Expert home shifting and packing guides from TrustMove.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <BlogHero />
        <BlogCard />
      </main>
      <Footer />
    </>
  );
}