import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Afolabi Ayomide Emmanuel — Smart Contract Engineer",
  description:
    "Smart contract engineer building secure, production-ready blockchain systems on EVM chains and Starknet. Experienced in Solidity, EVM internals, Foundry testing, and smart contract security.",
  openGraph: {
    title: "Afolabi Ayomide Emmanuel — Smart Contract Engineer",
    description:
      "Smart contract engineer building secure, production-ready blockchain systems on EVM chains and Starknet.",
    type: "website",
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
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#020617] text-slate-50`}
      >
        {children}
      </body>
    </html>
  );
}
