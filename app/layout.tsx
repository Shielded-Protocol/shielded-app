import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shielded Protocol — Private DeFi on Stellar",
  description:
    "Shield your assets with zero-knowledge proofs on the Stellar blockchain. Private transactions with regulatory compliance via encrypted viewing keys.",
  keywords: ["DeFi", "Stellar", "zero-knowledge", "privacy", "ZK proofs", "Soroban", "compliance"],
  openGraph: {
    title: "Shielded Protocol — Private DeFi on Stellar",
    description:
      "Shield your assets with zero-knowledge proofs on the Stellar blockchain. Private transactions with regulatory compliance.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shielded Protocol — Private DeFi on Stellar",
    description: "Private, compliant DeFi built on Stellar using ZK proofs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
