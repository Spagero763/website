import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const SITE = "https://afolabi.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Afolabi Ayomide Emmanuel | Smart Contract Engineer",
  description:
    "Smart contract engineer building secure, production-ready on-chain systems across EVM chains and Starknet. Solidity, Cairo, Foundry, and a security-first approach.",
  keywords: [
    "Smart Contract Engineer",
    "Solidity Developer",
    "Cairo",
    "Starknet",
    "Foundry",
    "Web3 Developer",
    "Blockchain Security",
  ],
  authors: [{ name: "Afolabi Ayomide Emmanuel" }],
  openGraph: {
    title: "Afolabi Ayomide Emmanuel | Smart Contract Engineer",
    description:
      "Building secure, production-ready on-chain systems across EVM chains and Starknet.",
    url: SITE,
    siteName: "Afolabi Ayomide Emmanuel",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Afolabi Ayomide Emmanuel | Smart Contract Engineer",
    description:
      "Building secure, production-ready on-chain systems across EVM chains and Starknet.",
    creator: "@Spagero71",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} font-sans antialiased grain`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
