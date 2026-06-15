"use client";

import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const roles = [
  {
    org: "Paycrypt",
    role: "Smart Contract Developer",
    period: "Jul 2025 - Present",
    current: true,
    bullets: [
      "Building and maintaining smart contracts for on-chain payment systems on Base",
      "Working on transaction execution, user payment flows, and contract reliability",
      "Focused on security and simplicity of production payment infrastructure",
    ],
  },
  {
    org: "ORYX",
    role: "Student Team Lead",
    period: "Oct 2025 - Present",
    current: true,
    bullets: [
      "Leading smart contract development for a blockchain-based bounty platform",
      "Responsible for on-chain reward mechanisms and contract architecture decisions",
    ],
  },
  {
    org: "Cyfrin Updraft",
    role: "Security Curriculum Student",
    period: "Jan 2025 - Present",
    current: true,
    bullets: [
      "Completing an industry-leading smart contract security and auditing curriculum",
      "Covering Solidity security, advanced Foundry testing, and real-world vulnerability analysis",
    ],
  },
  {
    org: "Web3Nova",
    role: "Blockchain Developer Intern",
    period: "Mar 2025 - Aug 2025",
    current: false,
    bullets: [
      "Built and deployed DApp smart contracts end-to-end",
      "Gained hands-on experience with contract integration and frontend deployment workflows",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-line">
      <div className="shell">
        <SectionHeading index="04" label="Track record" title="Where I've worked" />

        <div className="divide-y divide-line">
          {roles.map((r, i) => (
            <Reveal key={r.org + r.role} delay={i * 0.06}>
              <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-[200px_1fr] md:gap-10">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-display text-sm font-medium text-fg">{r.org}</span>
                    {r.current && (
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    )}
                  </div>
                  <div className="mt-1 font-mono text-xs text-faint">{r.period}</div>
                </div>

                <div>
                  <p className="mb-3 text-sm font-semibold text-fg">{r.role}</p>
                  <ul className="space-y-2">
                    {r.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
