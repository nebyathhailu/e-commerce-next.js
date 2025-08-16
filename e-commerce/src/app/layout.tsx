import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";

const inter = Inter({
  subsets:['latin'],
  weight:['400', '700'],
  variable:'--font-inter',
});

const poppins = Poppins({
  subsets:['latin'],
  weight:['400','500','700'],
  variable:'--font-poppins',
});

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "E-commerce UI/UX App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable
    }`}>
      <body>
        <Header/>
        <Navbar/>
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
