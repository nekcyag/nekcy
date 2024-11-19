
'use client';

import { usePathname } from 'next/navigation';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { WhatsAppCTA } from "./components/WhatsappCTA";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({
  children
}: ClientLayoutProps) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <div className="antialiased">
      <Header />
      <main>
        {children}
      </main>
      <WhatsAppCTA />
      {!isHome && <Footer />}
    </div>
  );
}