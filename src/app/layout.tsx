// layout.tsx (Server Component)
import type { Metadata } from "next";
import { metadata as siteMetadata } from "./metadata";
import ClientLayout from "./ClientLayout";
import "./globals.css";

export const metadata: Metadata = {
  ...siteMetadata
} as Metadata;

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}


