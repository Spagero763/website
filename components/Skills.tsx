"use client";

import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const groups = [
  {
    title: "Smart contracts",
    items: [
      "Solidity",
      "Cairo",
      "Soroban (Rust)",
      "EVM internals",
      "Protocol architecture",
      "Upgradeable contracts",
      "OpenZeppelin",
    ],
  },
  {
    title: "Testing & security",
    items: [
      "Foundry",
      "Fuzz testing",
      "Fork testing",
      "Gas optimization",
      "Reentrancy protection",
      "Access control",
      "Commit-reveal schemes",
    ],
  },
  {
    title: "Integration & tooling",
    items: [
      "Ethers.js",
      "Wagmi",
      "Viem",
      "Claude API & AI agents",
      "x402 payments",
      "Chainlink oracles",
      "Deployment pipelines",
    ],
  },
  {
    title: "Chains I have shipped on",
    items: ["Celo", "Base", "Avalanche", "Mantle", "Starknet", "Stellar"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28">
      <div className="shell">
        <SectionHeading index="04" label="Stack" title="What I work with" />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.07} className="h-full">
              <div className="card card-hover h-full rounded-2xl p-7">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  {g.title}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-line bg-page px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent-line hover:text-fg"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
