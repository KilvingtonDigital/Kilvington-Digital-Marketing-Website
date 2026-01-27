import type { Metadata } from "next";
import { Poppins, Oswald, Montserrat } from "next/font/google";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "./globals.css";
import JsonLd from "../components/JsonLd";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Kilvington Digital | SEO Services, GEO & AIO Agency (NC)",
  description: "Premier Digital Marketing Agency specializing in Technical SEO, Generative Engine Optimization (GEO), and AI Revenue Agents (AIO). We build high-performance revenue engines. One client per industry, per territory.",
  openGraph: {
    title: "Kilvington Digital | SEO Services, GEO & AIO Agency",
    description: "Exclusive Focus. Maximum Results. Specializing in Technical SEO, GEO, and AI Revenue Agents.",
    type: "website",
  },
  other: {
    "ai-context": "/ai-context"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${oswald.variable} ${montserrat.variable}`}>
        <JsonLd />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
