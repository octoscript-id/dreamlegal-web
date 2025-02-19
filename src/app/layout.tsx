import type { Metadata } from "next";
import { Libre_Baskerville, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsappFloatingButton from "@/components/FloatingButton";
import { metadataSEO } from "@/lib/metadataSEO";
import { Providers } from "./providers";

const LibreBaskerville = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const PlusJakartaSans = Plus_Jakarta_Sans({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = metadataSEO;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={`${LibreBaskerville.className} ${PlusJakartaSans.className} antialiased scroll-smooth`}
        >
          <WhatsappFloatingButton />
          <Navbar />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
