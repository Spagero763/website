"use client";

import Image from "next/image";
import { Shield, Code2, Zap, Layers } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const highlights = [
  { icon: Shield, text: "Security-first. Every contract is designed to resist attack." },
  { icon: Code2, text: "Deep EVM internals: storage, calldata, and execution flow." },
  { icon: Zap, text: "Foundry fuzz, fork, and unit testing on every project." },
  { icon: Layers, text: "Multi-chain across EVM ecosystems and Starknet with Cairo." },
];

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-line">
      <div className="shell">
        <SectionHeading index="01" label="About" title="Engineering on-chain systems that hold" />

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <Reveal>
            <p className="text-lg leading-relaxed text-muted">
              I&apos;m a smart contract engineer focused on secure, production-ready blockchain
              infrastructure. My work spans on-chain identity systems, payment layers, and
              privacy-preserving trading protocols, always with security and gas efficiency at
              the core.
            </p>
            <p className="mt-5 leading-relaxed text-muted">
              I specialize in Solidity and Cairo, with deep experience in EVM internals,
              rigorous Foundry testing, and gas optimization. I&apos;ve deployed contracts
              across Base, Avalanche, Celo, Starknet, Mantle, and Stellar, and built my
              security foundation through the Cyfrin Updraft auditing curriculum.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {highlights.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10">
                    <Icon size={15} className="text-accent" />
                  </div>
                  <span className="text-sm leading-relaxed text-muted">{text}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative mx-auto w-full max-w-xs">
            <div className="card-hairline overflow-hidden rounded-2xl p-1.5 shadow-card">
              <Image
                src="/profile.jpg"
                alt="Afolabi Ayomide Emmanuel"
                width={480}
                height={560}
                className="aspect-[4/5] w-full rounded-[0.9rem] object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 -z-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
