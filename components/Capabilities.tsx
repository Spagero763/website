"use client";

import { ArrowUpRight } from "lucide-react";
import Reveal from "./ui/Reveal";
import TextReveal from "./ui/TextReveal";
import TransitionLink from "./TransitionLink";

type Proof = { label: string; href: string; name?: string };

type Capability = {
  title: string;
  body: string;
  proofs: Proof[];
};

const capabilities: Capability[] = [
  {
    title: "Protocol and smart contracts",
    body: "Solidity, Cairo and Rust. I design the mechanism, write the contracts and deploy them: hooks, escrows, markets and funds.",
    proofs: [
      { label: "Vernier, a Uniswap v4 hook for yield-bearing assets", href: "/work/vernier", name: "Vernier" },
      { label: "Bell, three contracts on Base mainnet", href: "/work/bell", name: "Bell" },
      { label: "Convoy, a Cairo venue on Starknet mainnet", href: "/work/convoy", name: "Convoy" },
    ],
  },
  {
    title: "Security review and auditing",
    body: "Trained on the Cyfrin Updraft auditing track. I read a contract for the way the money leaves, write the finding up, and fix it.",
    proofs: [
      {
        label: "A multisig quorum one key could satisfy alone, found and fixed in Velo",
        href: "https://github.com/Nullifier-Systems/velo/pull/224",
      },
      { label: "ChainSentinel, a Solidity analyzer with 37 rules and an AI pass", href: "/work/chainsentinel", name: "ChainSentinel" },
      {
        label: "Cyfrin Updraft security and auditing record",
        href: "https://profiles.cyfrin.io/u/afolabispagero71/achievements",
      },
    ],
  },
  {
    title: "AI and agents",
    body: "An agent that holds keys and moves money needs limits a model cannot talk its way past. I build the agent and the guard around it. Claude Certified Architect.",
    proofs: [
      { label: "Charter, an AI fund manager held to its mandate by an enclave", href: "/work/charter", name: "Charter" },
      { label: "Cruce, an agent that prices, routes and settles currency orders", href: "/work/cruce", name: "Cruce" },
      { label: "Kobo, payments that other agents call over MCP", href: "/work/kobo", name: "Kobo" },
    ],
  },
  {
    title: "Full stack product",
    body: "The web2 half as well: React and Next.js front ends with real motion, Node back ends, Postgres, auth and payments.",
    proofs: [
      { label: "Gambit, five games and a phone-first interface", href: "/work/gambit", name: "Gambit" },
      {
        label: "Mobile Money, eight backend pull requests merged",
        href: "https://github.com/sublime247/mobile-money/pulls?q=is%3Apr+is%3Amerged+author%3ASpagero763",
      },
      { label: "Bureau, a pay per call API with a live dashboard", href: "/work/bureau", name: "Bureau" },
    ],
  },
];

const row =
  "group/proof flex items-center justify-between gap-4 py-3.5 text-sm leading-snug text-muted transition-colors duration-300 hover:text-fg";

export default function Capabilities() {
  return (
    <section id="capabilities" className="border-t border-line py-24 lg:py-28">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <Reveal variant="fade" className="eyebrow text-accent">
              What you can hire me for
            </Reveal>
            <TextReveal
              as="h2"
              delay={0.1}
              className="mt-5 font-display text-section font-medium text-fg"
            >
              Four things I do, each with proof
            </TextReveal>
          </div>
          <Reveal delay={0.15}>
            <p className="max-w-xl leading-relaxed text-muted pretty lg:justify-self-end">
              I work across the whole stack of an on-chain product, so one person can take it from a
              mechanism on paper to something people use. Every line of proof opens a case study, a
              merged pull request or a public record.
            </p>
          </Reveal>
        </div>

        <Reveal as="ul" className="mt-14 border-t border-line" stagger={0.1} y={18}>
          {capabilities.map((c, i) => (
            <li
              key={c.title}
              className="grid gap-6 border-b border-line py-9 lg:grid-cols-[4rem_1fr_1.1fr] lg:gap-10"
            >
              <span className="font-mono text-xs font-medium text-accent lg:pt-2">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-2xl font-medium text-fg sm:text-3xl">{c.title}</h3>
                <p className="mt-4 max-w-md leading-relaxed text-muted pretty">{c.body}</p>
              </div>
              <ul className="self-start border-t border-line lg:border-t-0">
                {c.proofs.map((p) => {
                  const inner = (
                    <>
                      <span>{p.label}</span>
                      <ArrowUpRight
                        size={14}
                        className="flex-shrink-0 text-faint transition-all duration-300 group-hover/proof:-translate-y-0.5 group-hover/proof:translate-x-0.5 group-hover/proof:text-accent"
                      />
                    </>
                  );
                  return (
                    <li key={p.href} className="border-b border-line last:border-b-0">
                      {p.name ? (
                        <TransitionLink href={p.href} label={p.name} className={row}>
                          {inner}
                        </TransitionLink>
                      ) : (
                        <a href={p.href} target="_blank" rel="noopener noreferrer" className={row}>
                          {inner}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
