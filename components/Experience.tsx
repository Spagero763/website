"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

type Role = {
  org: string;
  role: string;
  period: string;
  current: boolean;
  bullets: string[];
  images?: string[];
  event?: { label: string; href: string };
};

const roles: Role[] = [
  {
    org: "Open source",
    role: "Contributor, Stellar & EVM protocols",
    period: "Jun 2025 - Present",
    current: true,
    bullets: [
      "110 pull requests merged into 64 repositories I don't own, reviewed by their maintainers",
      "Soroban contract work on Grainlify: event versioning, an error-code registry, and multi-governor risk-flag governance for bounty escrow",
      "Security and privacy backend on Chioma: KYC encryption at rest, consent management, and structured audit logging",
      "Most of it through Drips Wave, structured open-source sprints rewarded on-chain",
    ],
  },
  {
    org: "Paycrypt",
    role: "Smart Contract Developer",
    period: "Jul 2025 - Mar 2026",
    current: false,
    bullets: [
      "Built and maintained the payment contracts behind an on-chain utility payments product on Base",
      "Owned transaction execution and user payment flows in production",
      "Tested with Foundry, with reliability as the priority since the contracts moved user funds",
    ],
  },
  {
    org: "ORYX",
    role: "Student Team Lead",
    period: "Oct 2025 - Dec 2025",
    current: false,
    bullets: [
      "Led a team of students to the Web3 Lagos Conference hosted by Web3Bridge",
      "Led smart contract development for a blockchain-based bounty platform",
      "Owned the on-chain reward mechanism and contract architecture decisions",
    ],
    images: ["/TEAM-LEAD1.jpg", "/TEAM-LEAD2.jpg", "/TEAM-LEAD3.jpg"],
    event: { label: "Web3 Lagos Conference, Web3Bridge", href: "https://event.web3bridge.com/" },
  },
  {
    org: "Web3Nova",
    role: "Blockchain Developer Intern",
    period: "Mar 2025 - Aug 2025",
    current: false,
    bullets: [
      "Wrote and deployed DApp smart contracts end to end",
      "Handled contract integration and the frontend deployment workflow",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line py-24">
      <div className="shell">
        <SectionHeading index="05" label="Experience" title="Where I've worked" />

        <div className="divide-y divide-line">
          {roles.map((r, i) => (
            <Reveal key={r.org + r.role} delay={i * 0.06}>
              <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-[200px_1fr] md:gap-10">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-display text-sm font-medium text-fg">{r.org}</span>
                    {r.current && (
                      <span className="rounded border border-ok-line bg-ok-soft px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-ok">
                        Now
                      </span>
                    )}
                  </div>
                  <div className="mt-1 font-mono text-xs text-faint">{r.period}</div>
                </div>

                <div>
                  <p className="mb-3 text-sm font-semibold text-fg">{r.role}</p>
                  <ul className="space-y-2">
                    {r.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {r.images && (
                    <div className="mt-5">
                      <div className="flex flex-wrap gap-3">
                        {r.images.map((src, idx) => (
                          <a
                            key={src}
                            href={src}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block h-24 w-32 overflow-hidden rounded-md border border-line"
                          >
                            <Image
                              src={src}
                              alt={`${r.org} at the Web3 Lagos Conference ${idx + 1}`}
                              width={256}
                              height={192}
                              className="h-full w-full object-cover"
                            />
                          </a>
                        ))}
                      </div>
                      {r.event && (
                        <a
                          href={r.event.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-fg"
                        >
                          <ExternalLink size={12} />
                          {r.event.label}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
