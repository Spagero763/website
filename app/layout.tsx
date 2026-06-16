import type { Metadata } from "next";
import { Space_Grotesk, Instrument_Serif } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import CommandPalette from "@/components/CommandPalette";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const SITE = "https://spagero.tech";

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
        className={`${GeistSans.variable} ${GeistMono.variable} ${spaceGrotesk.variable} ${instrumentSerif.variable} font-sans antialiased grain`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Afolabi Ayomide Emmanuel",
              url: SITE,
              jobTitle: "Smart Contract Engineer",
              email: "afolabiayomide870@gmail.com",
              sameAs: [
                "https://github.com/Spagero763",
                "https://x.com/Spagero71",
                "https://www.linkedin.com/in/afolabi-ayomide-emmanuel-bba6b9367/",
              ],
              knowsAbout: [
                "Solidity",
                "Cairo",
                "Smart Contract Security",
                "Foundry",
                "Starknet",
                "EVM",
              ],
            }),
          }}
        />
        <SmoothScroll />
        <ScrollProgress />
        <CommandPalette />
        {children}
      </body>
    </html>
  );
}
