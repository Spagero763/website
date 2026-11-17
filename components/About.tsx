"use client";

import Reveal from "./ui/Reveal";
import TextReveal from "./ui/TextReveal";
import SectionHeading from "./ui/SectionHeading";

const facts = [
  { k: "Languages", v: "Solidity, Cairo, Rust, TypeScript" },
  { k: "Testing", v: "Foundry, with fork tests against live deployments" },
  { k: "Focus", v: "Protocols, security review, AI agents, full stack" },
  { k: "Based in", v: "Ondo, Nigeria. Remote or relocation." },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-28">
      <div className="shell">
        <SectionHeading index="01" label="About" title="What I actually do" />

        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-24">
          <div>
            <TextReveal
              as="p"
              className="font-display text-2xl font-medium leading-snug text-fg sm:text-3xl"
            >
              I write the contracts that hold the money, then build everything a person needs to
              use them.
            </TextReveal>

            <Reveal className="mt-8 space-y-5 leading-relaxed text-muted pretty" stagger={0.1}>
              <p>
                Most smart contract engineers stop at the contract. I keep going: the security
                review, the AI agent or back end that drives it, the payment rails, and an interface
                someone can use on a cheap phone. Cruce, Gambit, Bell and Convoy are all on mainnet,
                and each one started from a specific leak I could measure.
              </p>
              <p>
                The Uniswap Hook Incubator taught me to argue a mechanism with numbers instead of
                adjectives. A year in the Cyfrin Updraft security curriculum, and a hundred merged
                pull requests in other teams&apos; Soroban and Solidity codebases, taught me to read
                code that is not mine and to expect mine to be read.
              </p>
              <p>
                Everything on this site links to source you can read or an address you can look up
                on a block explorer. Nothing here is a screenshot of something I cannot show you.
              </p>
            </Reveal>
          </div>

          <Reveal as="dl" className="border-t border-line lg:mt-3" stagger={0.08} y={14}>
            {facts.map(({ k, v }) => (
              <div key={k} className="grid grid-cols-1 gap-1 border-b border-line py-5">
                <dt className="eyebrow text-faint">{k}</dt>
                <dd className="mt-1 text-base text-fg">{v}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
