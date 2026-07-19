

import Navbar from "../../../component/navbar";
import BlogDetailContent from "../../../component/blogdetailcontent";
import Footer from "../../../component/footer";
export const metadata = {
  title:
    "Home Shifting Tips | Best Packers and Movers India | TrustMove Blog",

  description:
    "Discover expert home shifting tips from TrustMove. Learn how to pack efficiently, prepare for moving day, avoid common relocation mistakes, and enjoy a smooth home shifting experience with the best packers and movers in India.",

  keywords: [
    "home shifting tips",
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
    "moving tips",
    "packing tips",
    "relocation guide",
    "moving checklist",
  ],

  alternates: {
    canonical: "/blog/shifting-tips",
  },

  openGraph: {
    title:
      "Home Shifting Tips | TrustMove Blog",
    description:
      "Get professional moving and packing tips from TrustMove to make your home relocation safe, easy, and stress-free.",
    url: "/blog/shifting-tips",
    siteName: "TrustMove",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Home Shifting Tips | TrustMove Blog",
    description:
      "Expert packing, moving, and relocation tips from the best packers and movers in India.",
  },

  robots: {
    index: true,
    follow: true,
  },
};
export default function ShiftingTipsPage() {
  return (
    <>
      <Navbar />
      <main>
        <BlogDetailContent />
      </main>
      <Footer />
    </>
  );
}