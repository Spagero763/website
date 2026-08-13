"use client";

import Image from "next/image";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const facts = [
  { k: "Languages", v: "Solidity, Cairo, TypeScript" },
  { k: "Testing", v: "Foundry, unit and fuzz, fork tests" },
  { k: "Chains", v: "Celo, Base, Avalanche, Mantle, Starknet, Stellar" },
  { k: "Open source", v: "110 PRs merged into 64 external repos" },
];

export default function About() {
  return (
    <section id="about" className="border-t border-line py-24">
      <div className="shell">
        <SectionHeading index="01" label="About" title="What I actually do" />

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal>
            <p className="text-lg leading-relaxed text-muted">
              I write the contracts that hold the money. That has meant an escrow that pays out a
              1v1 match on Celo, a ten-contract identity and lending protocol on Avalanche, a
              dark pool in Cairo that hides orders until settlement, and nine months of payment
              contracts on Base for a product with real users.
            </p>
            <p className="mt-5 leading-relaxed text-muted">
              Before I ship anything I try to break it. That habit came from a year in the Cyfrin
              Updraft security curriculum and from reviewing other people&apos;s code, which is
              most of what I do now: 110 pull requests merged into repositories I don&apos;t own,
              mostly Soroban and Solidity work on other teams&apos; protocols.
            </p>
            <p className="mt-5 leading-relaxed text-muted">
              I&apos;m open to smart contract, protocol, and security roles. Everything on this
              site links to source you can read or an address you can look up.
            </p>

            <dl className="mt-10 divide-y divide-line border-y border-line">
              {facts.map(({ k, v }) => (
                <div key={k} className="grid grid-cols-1 gap-1 py-3.5 sm:grid-cols-[9rem_1fr]">
                  <dt className="font-mono text-xs uppercase tracking-[0.14em] text-faint">{k}</dt>
                  <dd className="text-sm text-muted">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.12} className="mx-auto w-full max-w-xs">
            <div className="overflow-hidden rounded-lg border border-line">
              <Image
                src="/profile.jpg"
                alt="Afolabi Ayomide Emmanuel"
                width={480}
                height={560}
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
