"use client";

import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

type Entry = {
  org: string;
  program: string;
  period: string;
  bullets: string[];
};

const entries: Entry[] = [
  {
    org: "DevCompass",
    program: "Claude Certified Architect",
    period: "May 2026 - Jun 2026",
    bullets: [
      "Selected into the Claude Certified Architect program, certified June 2026",
      "Built AI applications on the Claude API, including tool use and agent loops",
    ],
  },
  {
    org: "Cyfrin Updraft",
    program: "Smart contract security and auditing",
    period: "Jan 2025 - Jan 2026",
    bullets: [
      "Solidity security, advanced Foundry testing, and vulnerability analysis on real codebases",
      "Worked through the Foundry, security, and assembly tracks",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="border-t border-line py-24">
      <div className="shell">
        <SectionHeading index="06" label="Training" title="How I learned this" />

        <div className="divide-y divide-line">
          {entries.map((e, i) => (
            <Reveal key={e.org} delay={i * 0.06}>
              <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-[200px_1fr] md:gap-10">
                <div>
                  <span className="font-display text-sm font-medium text-fg">{e.org}</span>
                  <div className="mt-1 font-mono text-xs text-faint">{e.period}</div>
                </div>
                <div>
                  <p className="mb-3 text-sm font-semibold text-fg">{e.program}</p>
                  <ul className="space-y-2">
                    {e.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-sm leading-relaxed text-muted"
                      >
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
