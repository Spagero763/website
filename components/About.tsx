"use client";

import Reveal from "./ui/Reveal";
import TextReveal from "./ui/TextReveal";
import SectionHeading from "./ui/SectionHeading";

const facts = [
  { k: "Languages", v: "Solidity, Cairo, Rust (Soroban), TypeScript" },
  { k: "Testing", v: "Foundry unit, fuzz and fork tests" },
  { k: "Focus", v: "Protocol architecture and contract security" },
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
              I write the contracts that hold the money, then spend the rest of my time trying to
              get it out.
            </TextReveal>

            <Reveal className="mt-8 space-y-5 leading-relaxed text-muted pretty" stagger={0.1}>
              <p>
                I design the contract architecture, write it, and then test it until I run out of
                ways to break it. The work ranges from an escrow that settles a head to head match
                to a dark pool that keeps orders hidden until settlement, and most of it is on
                mainnet with real users behind it.
              </p>
              <p>
                Trying to break things first is a habit I picked up from a year in the Cyfrin
                Updraft security curriculum and from reviewing other people&apos;s code inside
                other teams&apos; protocols, mostly Soroban and Solidity.
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
