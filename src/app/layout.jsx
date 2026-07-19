import '../app/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata = {
  title: "Speed Packer and Mover Packers & Movers",
  description:
    "Speed Packer and Mover Packers & Movers provides reliable home shifting, office relocation, packing, unpacking, loading, unloading, and transportation services across India.",

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}