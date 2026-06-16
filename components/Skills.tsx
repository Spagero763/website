"use client";

import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const groups = [
  {
    title: "Smart contract development",
    items: ["Solidity", "Cairo", "EVM internals", "Contract architecture", "Upgradeable contracts", "OpenZeppelin"],
  },
  {
    title: "Testing & security",
    items: ["Foundry", "Fuzz testing", "Fork testing", "Gas optimization", "Reentrancy protection", "Access control", "Commit-reveal schemes"],
  },
  {
    title: "Web3 & integration",
    items: ["Ethers.js", "Web3.js", "Wagmi", "Viem", "Frontend integration", "Deployment pipelines"],
  },
  {
    title: "Chains",
    items: ["Avalanche", "Base", "Celo", "Starknet", "Chainlink oracles"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-line">
      <div className="shell">
        <SectionHeading index="04" label="Capabilities" title="What I work with" />

        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.06}>
              <h3 className="mb-4 border-b border-line pb-2 font-mono text-xs uppercase tracking-[0.2em] text-faint">
                {g.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-line bg-surface px-3 py-1.5 text-sm text-muted transition-colors hover:border-white/20 hover:text-fg"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
