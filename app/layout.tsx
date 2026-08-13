import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const SITE = "https://spagero.tech";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Afolabi Ayomide Emmanuel | Smart Contract Engineer",
  description:
    "Smart contract engineer working in Solidity and Cairo. Deployed protocols on Celo, Base, Avalanche, Mantle and Starknet, with 110 pull requests merged into other teams' repositories.",
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
  alternates: { canonical: "/" },
  openGraph: {
    title: "Afolabi Ayomide Emmanuel | Smart Contract Engineer",
    description:
      "Solidity and Cairo engineer. Deployed contracts on Celo, Base, Avalanche, Mantle and Starknet.",
    url: SITE,
    siteName: "Afolabi Ayomide Emmanuel",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Afolabi Ayomide Emmanuel | Smart Contract Engineer",
    description:
      "Solidity and Cairo engineer. Deployed contracts on Celo, Base, Avalanche, Mantle and Starknet.",
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
        className={`${GeistSans.variable} ${GeistMono.variable} ${spaceGrotesk.variable} font-sans antialiased`}
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
        <a href="#hero" className="skip-link">Skip to content</a>
        <SmoothScroll />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
