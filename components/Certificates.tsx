"use client";

import { ExternalLink, Award } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  description: string;
  link?: string;
  linkLabel?: string;
  status: "earned" | "in-progress";
};

const certificates: Certificate[] = [
  {
    title: "Starknet Developer Camp",
    issuer: "StarkWare / Starknet Foundation",
    date: "2025",
    description:
      "On-chain NFT certificate awarded to graduates of the Starknet Developer Camp. Covers Cairo smart contract development, Starknet architecture, and deploying production contracts.",
    link: "https://starkscan.co/contract/0x07606caC9053e9B8B573A4b0A0cE608880F64869e24B8A605210d7a85bB6E5F1",
    linkLabel: "View on Starkscan",
    status: "earned",
  },
  {
    title: "Smart Contract Security & Auditing",
    issuer: "Cyfrin Updraft",
    date: "2025 to Present",
    description:
      "Comprehensive security curriculum covering auditing methodology, Solidity vulnerability patterns, formal verification, advanced Foundry techniques, and real audit case studies.",
    link: "https://updraft.cyfrin.io",
    linkLabel: "View program",
    status: "in-progress",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 border-t border-line">
      <div className="shell">
        <SectionHeading index="05" label="Credentials" title="Certificates & training" />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {certificates.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.08}>
              <div className="card-hairline group h-full rounded-2xl p-6 transition-colors hover:border-white/20">
                <div className="mb-5 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10">
                    <Award size={20} className="text-accent" />
                  </div>
                  <span
                    className={`rounded-full border px-2.5 py-1 text-xs font-medium ${
                      cert.status === "earned"
                        ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                        : "border-amber-500/20 bg-amber-500/10 text-amber-400"
                    }`}
                  >
                    {cert.status === "earned" ? "Earned" : "In progress"}
                  </span>
                </div>

                <h3 className="font-display text-lg font-medium text-fg">{cert.title}</h3>
                <p className="mt-1 text-xs font-medium text-accent">
                  {cert.issuer} · {cert.date}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{cert.description}</p>

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-muted transition-colors hover:text-fg"
                  >
                    <ExternalLink size={12} />
                    {cert.linkLabel}
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
