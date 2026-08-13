"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

type Role = {
  org: string;
  role: string;
  period: string;
  kind: string;
  bullets: string[];
  images?: string[];
  event?: { label: string; href: string };
};

const roles: Role[] = [
  {
    org: "Paycrypt",
    role: "Smart Contract Developer",
    period: "Jul 2025 - Mar 2026",
    kind: "Paid role",
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
    kind: "Team lead",
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
    kind: "Internship",
    bullets: [
      "Wrote and deployed DApp smart contracts end to end",
      "Handled contract integration and the frontend deployment workflow",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line py-28">
      <div className="shell">
        <SectionHeading index="05" label="Experience" title="Where I've worked" />

        <div className="relative">
          <span
            aria-hidden
            className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-line md:block"
          />

          <div className="flex flex-col gap-5">
            {roles.map((r, i) => (
              <Reveal key={r.org} delay={i * 0.07}>
                <div className="relative md:pl-12">
                  <span
                    aria-hidden
                    className="absolute left-0 top-8 hidden h-[15px] w-[15px] rounded-full border-2 border-page bg-line-strong md:block"
                  />

                  <div className="card card-hover rounded-2xl p-7 sm:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-xl font-medium text-fg">{r.org}</h3>
                        <p className="mt-1 text-sm font-semibold text-accent">{r.role}</p>
                      </div>
                      <div className="text-right">
                        <span className="font-mono text-xs text-faint">{r.period}</span>
                        <p className="mt-1.5 inline-flex rounded border border-line bg-elevated px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
                          {r.kind}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                      {r.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-3 text-sm leading-relaxed text-muted"
                        >
                          <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    {r.images && (
                      <div className="mt-6">
                        <div className="flex flex-wrap gap-3">
                          {r.images.map((src, idx) => (
                            <a
                              key={src}
                              href={src}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group block h-24 w-32 overflow-hidden rounded-lg border border-line"
                            >
                              <Image
                                src={src}
                                alt={`${r.org} at the Web3 Lagos Conference ${idx + 1}`}
                                width={256}
                                height={192}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                              />
                            </a>
                          ))}
                        </div>
                        {r.event && (
                          <a
                            href={r.event.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-accent"
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
      </div>
    </section>
  );
}
