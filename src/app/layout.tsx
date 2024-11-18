'use client';
import type { Metadata } from "next";
import localFont from "next/font/local";
import { usePathname } from 'next/navigation';
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { WhatsAppCTA } from "./components/WhatsappCTA";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <WhatsAppCTA />
        {!isHome && <Footer />}
      </body>
    </html>
  );
}
