"use client";

import { GitPullRequest, ExternalLink, Github } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import Spotlight from "./ui/Spotlight";

type Contribution = {
  project: string;
  ecosystem: string;
  about: string;
  contribution: string;
  prs: number;
  live: string;
  repo: string;
};

const DRIPS = "https://www.drips.network/wave/users/3b1e45d0-0d8c-4c3a-b8a0-df4854374b32";

const contributions: Contribution[] = [
  {
    project: "Grainlify",
    ecosystem: "Stellar / Soroban",
    about: "On-chain bounty and escrow platform on Stellar.",
    contribution:
      "Soroban contract work: event versioning with compatibility tests, an error-code registry, and bounty-escrow risk-flag governance with multi-governor controls and audit events.",
    prs: 4,
    live: "https://grainlify.0xo.in",
    repo: "https://github.com/Jagadeeshftw/grainlify",
  },
  {
    project: "Chioma",
    ecosystem: "Stellar",
    about: "Open-source housing protocol on Stellar connecting landlords and renters.",
    contribution:
      "Security and data-privacy backend: KYC encryption at rest, data export, deletion and consent management, structured audit logging, and routing cleanup.",
    prs: 3,
    live: "https://chioma-kappa.vercel.app",
    repo: "https://github.com/chioma-housing-protocol-I/chioma",
  },
  {
    project: "Lance",
    ecosystem: "Stellar / Soroban",
    about: "Freelancer marketplace on Stellar with Soroban smart contract escrow.",
    contribution:
      "Structured JSON logging and wallet-provider integration for the marketplace frontend.",
    prs: 2,
    live: "https://lance-online.vercel.app",
    repo: "https://github.com/DXmakers/lance",
  },
];

const prLink = (repo: string) =>
  `${repo}/pulls?q=is%3Apr+is%3Amerged+author%3ASpagero763`;

export default function Contributions() {
  return (
    <section id="contributions" className="py-24 border-t border-line">
      <div className="shell">
        <SectionHeading index="03" label="Open source" title="Contributions that shipped" />

        <Reveal className="mb-10 -mt-4">
          <p className="max-w-2xl leading-relaxed text-muted">
            Merged contributions to Stellar ecosystem projects through{" "}
            <a
              href={DRIPS}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline-offset-4 hover:underline"
            >
              Drips Wave
            </a>
            , structured open-source sprints rewarded on-chain. Every contribution below links to
            the merged pull requests, so the work is verifiable.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {contributions.map((c, i) => (
            <Reveal key={c.project} delay={i * 0.08} className="h-full">
              <Spotlight tilt={4} className="card-hairline group flex h-full flex-col rounded-2xl p-6 transition-colors hover:border-[color:var(--line-strong)]">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
                    {c.ecosystem}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-elevated px-2.5 py-1 font-mono text-[11px] text-muted">
                    <GitPullRequest size={11} />
                    {c.prs} merged
                  </span>
                </div>

                <h3 className="font-display text-lg font-medium text-fg">{c.project}</h3>
                <p className="mt-1 text-sm text-muted">{c.about}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-faint">{c.contribution}</p>

                <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-line pt-4">
                  <a
                    href={prLink(c.repo)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-fg transition-colors hover:text-accent"
                  >
                    <GitPullRequest size={12} />
                    My PRs
                  </a>
                  <a
                    href={c.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-fg"
                  >
                    <ExternalLink size={12} />
                    Live
                  </a>
                  <a
                    href={c.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-fg"
                  >
                    <Github size={12} />
                    Repo
                  </a>
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
