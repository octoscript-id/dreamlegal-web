import type { Metadata } from "next";
import { Libre_Baskerville, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsappFloatingButton from "@/components/FloatingButton";
import { metadataSEO } from "@/lib/metadataSEO";
import { Providers } from "./providers";
import { GoogleTagManager } from "@next/third-parties/google";

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
    <html lang="en" suppressHydrationWarning>
      <Providers>
        <GoogleTagManager
          key="gtm"
          gtmId="AW-17046046621"
          dataLayer={{
            event: "conversion",
            send_to: "AW-17046046621/GeAHCLvkocIaEJ2PmMA_",
            value: 1.0,
            currency: "IDR",
          }}
        />
        <body
          className={`${LibreBaskerville.className} ${PlusJakartaSans.className} antialiased scroll-smooth`}
        >
          <noscript>
            <iframe
              key="gtm-noscript"
              src="https://www.googletagmanager.com/gtag/js?id=AW-17046046621"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <WhatsappFloatingButton />
          <Navbar />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
