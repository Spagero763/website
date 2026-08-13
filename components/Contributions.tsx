"use client";

import { GitPullRequest, ExternalLink, Github } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

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
const ALL_PRS =
  "https://github.com/search?q=is%3Apr+is%3Amerged+author%3ASpagero763&type=pullrequests";

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
    about: "Open-source housing protocol connecting landlords and renters.",
    contribution:
      "Security and data-privacy backend: KYC encryption at rest, data export, deletion and consent management, structured audit logging, and routing cleanup.",
    prs: 3,
    live: "https://chioma-kappa.vercel.app",
    repo: "https://github.com/chioma-housing-protocol-I/chioma",
  },
  {
    project: "Lance",
    ecosystem: "Stellar / Soroban",
    about: "Freelancer marketplace with Soroban smart contract escrow.",
    contribution:
      "Structured JSON logging and wallet-provider integration for the marketplace frontend.",
    prs: 2,
    live: "https://lance-online.vercel.app",
    repo: "https://github.com/DXmakers/lance",
  },
];

const moreRepos = [
  { repo: "sublime247/mobile-money", prs: 8 },
  { repo: "NFTopia-Foundation/nftopia-stellar", prs: 5 },
  { repo: "Disciplr-Org/Disciplr-Contracts", prs: 5 },
  { repo: "ancore-org/ancore", prs: 4 },
  { repo: "Akanimoh12/Stellar-Tipz", prs: 4 },
  { repo: "Nullifier-Systems/velo", prs: 3 },
  { repo: "LabsCrypt/remitlend", prs: 3 },
  { repo: "GalactiGuild/Stellar-Guilds", prs: 3 },
  { repo: "Alien-Protocol/Alien-Protocol", prs: 3 },
];

const totals = [
  { n: "110", l: "PRs merged into repos I don't own" },
  { n: "64", l: "Repositories contributed to" },
  { n: "292", l: "Merged PRs in total" },
];

const prLink = (repo: string) => `${repo}/pulls?q=is%3Apr+is%3Amerged+author%3ASpagero763`;

export default function Contributions() {
  return (
    <section id="contributions" className="border-t border-line py-24">
      <div className="shell">
        <SectionHeading index="03" label="Open source" title="Code other teams merged" />

        <Reveal className="-mt-4 mb-10">
          <p className="max-w-2xl leading-relaxed text-muted">
            Most of my work lives in other people&apos;s repositories, reviewed and merged by their
            maintainers. A lot of it came through{" "}
            <a
              href={DRIPS}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline-offset-4 hover:underline"
            >
              Drips Wave
            </a>
            , structured open-source sprints rewarded on-chain. Every number here links to the
            merged pull requests.
          </p>
        </Reveal>

        <Reveal>
          <dl className="mb-14 grid grid-cols-1 gap-6 border-y border-line py-7 sm:grid-cols-3">
            {totals.map(({ n, l }) => (
              <div key={l}>
                <dt className="font-display text-3xl font-medium tracking-tightest text-fg">{n}</dt>
                <dd className="mt-1 text-xs leading-snug text-faint">{l}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {contributions.map((c, i) => (
            <Reveal key={c.project} delay={i * 0.08} className="h-full">
              <div className="panel flex h-full flex-col rounded-lg p-6 transition-colors hover:border-[color:var(--line-strong)]">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="font-mono text-xs uppercase tracking-[0.12em] text-accent">
                    {c.ecosystem}
                  </span>
                  <span className="inline-flex flex-shrink-0 items-center gap-1.5 rounded border border-line bg-elevated px-2 py-0.5 font-mono text-[11px] text-muted">
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
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-faint">
            Other repositories
          </h3>
          <ul className="grid grid-cols-1 gap-x-10 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
            {moreRepos.map(({ repo, prs }) => (
              <li key={repo} className="border-b border-line py-2.5">
                <a
                  href={prLink(`https://github.com/${repo}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3"
                >
                  <span className="truncate font-mono text-xs text-muted transition-colors group-hover:text-fg">
                    {repo}
                  </span>
                  <span className="flex-shrink-0 font-mono text-[11px] text-accent">{prs} PRs</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={ALL_PRS}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-fg transition-colors hover:text-accent"
          >
            <Github size={15} />
            Browse all 292 merged pull requests
          </a>
        </Reveal>
      </div>
    </section>
  );
}
