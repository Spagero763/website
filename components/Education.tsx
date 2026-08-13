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
    <section id="education" className="border-t border-line py-28">
      <div className="shell">
        <SectionHeading index="06" label="Training" title="How I learned this" />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {entries.map((e, i) => (
            <Reveal key={e.org} delay={i * 0.07} className="h-full">
              <div className="card card-hover flex h-full flex-col rounded-2xl p-7 sm:p-8">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-medium text-fg">{e.org}</h3>
                  <span className="font-mono text-xs text-faint">{e.period}</span>
                </div>
                <p className="mt-1.5 text-sm font-semibold text-accent">{e.program}</p>

                <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                  {e.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
