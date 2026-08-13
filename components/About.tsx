"use client";

import Image from "next/image";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const facts = [
  { k: "Languages", v: "Solidity, Cairo, Rust (Soroban), TypeScript" },
  { k: "Testing", v: "Foundry unit, fuzz and fork tests" },
  { k: "Chains", v: "Celo, Base, Avalanche, Mantle, Starknet, Stellar" },
  { k: "Focus", v: "Protocol architecture and contract security" },
];

export default function About() {
  return (
    <section id="about" className="border-t border-line py-28">
      <div className="shell">
        <SectionHeading index="01" label="About" title="What I actually do" />

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          <Reveal>
            <p className="text-xl leading-relaxed text-fg">
              I write the contracts that hold the money.
            </p>
            <p className="mt-5 leading-relaxed text-muted">
              That has meant an escrow that settles a 1v1 match on Celo, a ten-contract identity and
              lending protocol on Avalanche, a dark pool in Cairo that keeps orders hidden until
              settlement, and nine months of payment contracts on Base for a product with real
              users paying real bills.
            </p>
            <p className="mt-5 leading-relaxed text-muted">
              Before I ship anything I try to break it. That habit came from a year in the Cyfrin
              Updraft security curriculum and from reviewing other people&apos;s code, which is a
              large part of what I do: 110 pull requests merged into repositories I don&apos;t own,
              mostly Soroban and Solidity work sitting inside other teams&apos; protocols.
            </p>
            <p className="mt-5 leading-relaxed text-muted">
              Everything on this site links to source you can read or an address you can look up on
              a block explorer. Nothing here is a screenshot of something I cannot show you.
            </p>

            <dl className="mt-10 overflow-hidden rounded-2xl border border-line">
              {facts.map(({ k, v }, i) => (
                <div
                  key={k}
                  className={`grid grid-cols-1 gap-1 bg-surface px-6 py-4 sm:grid-cols-[9rem_1fr] ${
                    i > 0 ? "border-t border-line" : ""
                  }`}
                >
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                    {k}
                  </dt>
                  <dd className="text-sm text-muted">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.12} className="mx-auto w-full max-w-sm">
            <div className="card rounded-2xl p-2.5">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="/profile.jpg"
                  alt="Afolabi Ayomide Emmanuel"
                  width={560}
                  height={700}
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
