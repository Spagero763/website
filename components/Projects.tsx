"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Lock } from "lucide-react";
import Image from "next/image";
import ChainLogo from "./ChainLogo";
import SectionHeading from "./ui/SectionHeading";

type Project = {
  name: string;
  tagline: string;
  description: string;
  chain: string;
  chainColor: string;
  category: string;
  tech: string[];
  preview: string;
  live?: string;
  github?: string;
  status: "live" | "in-progress" | "completed";
};

const projects: Project[] = [
  {
    name: "Veraflow",
    tagline: "On-Chain Identity & Credit Protocol",
    description:
      "Decentralized identity and lending platform for underbanked workers. Converts work credentials into soulbound NFTs and enables collateral-free lending based on on-chain reputation scoring (0–1000). 14 smart contracts with full test coverage.",
    chain: "Avalanche",
    chainColor: "#E84142",
    category: "EVM",
    tech: ["Solidity", "Avalanche", "Soulbound NFTs", "OpenZeppelin", "Next.js"],
    preview: "/veraflow-preview.jpg",
    live: "https://veraflow-delta.vercel.app/",
    status: "live",
  },
  {
    name: "Bicvar",
    tagline: "Private Dark Pool Trading on Starknet",
    description:
      "Privacy-preserving on-chain trading protocol. Implements a commit-reveal scheme via Poseidon hashing for confidential order submission — enabling dark pool trading with MEV resistance and no information leakage.",
    chain: "Starknet",
    chainColor: "#EC796B",
    category: "Starknet",
    tech: ["Cairo", "Starknet", "Poseidon Hash", "Commit-Reveal", "Argent X"],
    preview: "/bicvar-preview.jpg",
    live: "https://bicvar-starknet.vercel.app/",
    status: "live",
  },
  {
    name: "Paycrypt",
    tagline: "Your Direct Access to Buying Utilities Onchain",
    description:
      "On-chain payment infrastructure on Base. Smart contracts handle secure transaction execution, user payment flows, and production-ready on-chain payment processing with a focus on reliability and simplicity.",
    chain: "Base",
    chainColor: "#0052FF",
    category: "EVM",
    tech: ["Solidity", "Base", "Foundry", "OpenZeppelin", "Ethers.js"],
    preview: "/paycrypt-preview.jpg",
    live: "https://www.paycrypt.org/",
    github: "https://github.com/Spagero763/Paycrypt",
    status: "live",
  },
  {
    name: "EduPay",
    tagline: "Pay-per-Chapter Education Platform",
    description:
      "Decentralized educational marketplace for African learners. Students pay tutors per chapter in cUSD stablecoins via MiniPay — 95% of revenue goes directly to tutors with instant on-chain settlement.",
    chain: "Celo",
    chainColor: "#35D07F",
    category: "EVM",
    tech: ["Solidity", "Celo", "cUSD", "MiniPay", "IPFS", "Next.js"],
    preview: "/edupay-preview.jpg",
    live: "https://edu-pay-one.vercel.app/",
    status: "live",
  },
];

const categories = ["All", "EVM", "Starknet"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 border-t border-line">
      <div className="shell">

        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading index="01" label="Selected work" title="Things I've shipped" />
          <div className="mb-12 flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                  active === cat
                    ? "bg-fg text-ink"
                    : "border border-line text-muted hover:text-fg"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="group card-hairline flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:border-white/20 hover:shadow-card"
              >
                <div className="relative h-48 w-full overflow-hidden bg-elevated">
                  <Image
                    src={project.preview}
                    alt={`${project.name} preview`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60" />
                  <span className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-semibold backdrop-blur ${
                    project.status === "live"
                      ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                      : "border border-line bg-ink/50 text-muted"
                  }`}>
                    {project.status === "live" ? "Live" : project.status}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex items-center gap-1.5">
                    <ChainLogo chain={project.chain} size={16} />
                    <span className="font-mono text-xs text-faint">{project.chain}</span>
                  </div>

                  <h3 className="font-display text-lg font-medium text-fg">
                    {project.name}
                  </h3>
                  <p className="mb-3 text-xs font-medium text-accent">{project.tagline}</p>

                  <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-line bg-elevated px-2 py-0.5 font-mono text-[11px] text-muted"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="rounded-md px-2 py-0.5 font-mono text-[11px] text-faint">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="mt-4 flex items-center gap-4 border-t border-line pt-4">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-fg transition-colors hover:text-accent"
                      >
                        <ExternalLink size={11} />
                        Live demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-fg"
                      >
                        <Github size={11} />
                        GitHub
                      </a>
                    )}
                    {!project.live && !project.github && (
                      <span className="flex items-center gap-1.5 text-xs text-faint">
                        <Lock size={10} />
                        Private repo
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
