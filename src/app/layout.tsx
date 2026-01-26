import type { Metadata } from "next";
import { Poppins, Oswald, Montserrat } from "next/font/google";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "./globals.css";

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
  title: "Kilvington Digital Marketing | Exclusive ROI-Focused Agency",
  description: "Kilvington Digital Marketing provides exclusive, high-ROI digital solutions for conservative businesses. One client per industry, per territory. Maximum results.",
  openGraph: {
    title: "Kilvington Digital Marketing",
    description: "Exclusive Focus. Maximum Results.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${oswald.variable} ${montserrat.variable}`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
