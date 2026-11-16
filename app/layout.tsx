import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import PageTransition from "@/components/PageTransition";
import Cursor from "@/components/Cursor";
import { EMAIL, SITE } from "@/data/site";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Afolabi Ayomide Emmanuel | Smart Contract Engineer",
  description:
    "Smart contract engineer working in Solidity, Cairo and Rust. Products live on Celo, Base, Starknet and NEAR mainnet, a Uniswap v4 hook, and 104 pull requests merged into other teams' repositories.",
  keywords: [
    "Smart Contract Engineer",
    "Solidity Developer",
    "Cairo",
    "Rust",
    "Uniswap v4 Hooks",
    "Foundry",
    "DeFi Engineer",
    "Web3 Developer",
  ],
  authors: [{ name: "Afolabi Ayomide Emmanuel" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Afolabi Ayomide Emmanuel | Smart Contract Engineer",
    description:
      "Solidity, Cairo and Rust. Products live on Celo, Base, Starknet and NEAR mainnet, and a Uniswap v4 hook.",
    url: SITE,
    siteName: "Afolabi Ayomide Emmanuel",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Afolabi Ayomide Emmanuel | Smart Contract Engineer",
    description:
      "Solidity, Cairo and Rust. Products live on Celo, Base, Starknet and NEAR mainnet, and a Uniswap v4 hook.",
    creator: "@Spagero71",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <Script id="js-flag" strategy="beforeInteractive">
          {`document.documentElement.classList.add("js")`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Afolabi Ayomide Emmanuel",
              url: SITE,
              jobTitle: "Smart Contract Engineer",
              email: EMAIL,
              sameAs: [
                "https://github.com/Spagero763",
                "https://x.com/Spagero71",
                "https://www.linkedin.com/in/afolabi-ayomide-emmanuel-bba6b9367/",
              ],
              knowsAbout: [
                "Solidity",
                "Cairo",
                "Rust",
                "Uniswap v4 hooks",
                "Foundry",
                "DeFi",
              ],
            }),
          }}
        />
        <a href="#hero" className="skip-link">Skip to content</a>
        <SmoothScroll />
        <ScrollProgress />
        <Cursor />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
