"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Lock } from "lucide-react";
import ChainLogo from "./ChainLogo";

type Project = {
  name: string;
  tagline: string;
  description: string;
  chain: string;
  chainColor: string;
  category: string;
  tech: string[];
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
    tech: ["Solidity", "Avalanche", "Soulbound NFTs", "OpenZeppelin", "React", "Next.js"],
    live: "https://veraflow-delta.vercel.app/",
    status: "live",
  },
  {
    name: "Bicvar",
    tagline: "Private Trading System",
    description:
      "Privacy-preserving on-chain trading protocol on Starknet. Implements a commit-reveal scheme via Poseidon hashing for confidential order submission — enabling dark pool trading with MEV resistance and delayed order revelation.",
    chain: "Starknet",
    chainColor: "#EC796B",
    category: "Starknet",
    tech: ["Cairo", "Starknet", "Poseidon Hash", "Commit-Reveal", "Argent X", "Braavos"],
    live: "https://bicvar-starknet.vercel.app/",
    status: "live",
  },
  {
    name: "Paycrypt",
    tagline: "On-Chain Payment Infrastructure",
    description:
      "Smart contracts for secure crypto payment processing on Base. Handles transaction execution, user payment flows, and contract reliability for production-ready on-chain payment infrastructure with a focus on simplicity.",
    chain: "Base",
    chainColor: "#0052FF",
    category: "EVM",
    tech: ["Solidity", "Base", "Foundry", "OpenZeppelin", "Ethers.js"],
    github: "https://github.com/Spagero763/Paycrypt",
    status: "in-progress",
  },
  {
    name: "EduPay",
    tagline: "Pay-per-Chapter Education Platform",
    description:
      "Decentralized educational marketplace for African learners. Students pay tutors per chapter in cUSD stablecoins with MiniPay integration — 95% of revenue goes directly to tutors with instant on-chain settlement.",
    chain: "Celo",
    chainColor: "#35D07F",
    category: "EVM",
    tech: ["Solidity", "Celo", "cUSD", "MiniPay", "IPFS", "Next.js"],
    live: "https://edu-pay-one.vercel.app/",
    status: "live",
  },
  {
    name: "TeachAgent",
    tagline: "AI Blockchain Tutor with Micropayments",
    description:
      "AI-powered educational chatbot specialized in Celo blockchain. Charges 0.001 CELO per query via on-chain micropayments, powered by Llama 3.3 70B. Supports MetaMask, Valora, and MiniPay — mobile-first.",
    chain: "Celo",
    chainColor: "#35D07F",
    category: "AI",
    tech: ["Solidity", "TypeScript", "Llama 3.3 70B", "Celo", "MiniPay", "Vercel"],
    github: "https://github.com/Spagero763/TeachAgent",
    status: "live",
  },
  {
    name: "MemeVibe",
    tagline: "Social NFT Mini App",
    description:
      "Social NFT platform on Base using the Farcaster mini-app framework. On-chain NFT minting, social interaction mechanics, and content creation features for the decentralized social web.",
    chain: "Base",
    chainColor: "#0052FF",
    category: "EVM",
    tech: ["Solidity", "Base", "Farcaster", "Next.js", "TypeScript", "Tailwind"],
    status: "completed",
  },
];

const categories = ["All", "EVM", "Starknet", "AI"];

const statusBadge = {
  live: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  "in-progress": "text-amber-400 bg-amber-500/10 border-amber-500/20",
  completed: "text-slate-400 bg-slate-500/10 border-slate-500/20",
};

const statusLabel = {
  live: "Live",
  "in-progress": "In Progress",
  completed: "Completed",
};

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 bg-[#020617]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="font-mono text-blue-400 text-sm mb-3 tracking-wider">
            // projects
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Things I&apos;ve built
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Production-deployed smart contract systems — from DeFi infrastructure and
            on-chain identity to privacy-preserving trading.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                  : "bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Cards */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.name}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="group bg-[#0f172a] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/[0.16] hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Card header */}
                <div
                  className="relative h-36 overflow-hidden flex items-end p-4"
                  style={{
                    background: `linear-gradient(145deg, ${project.chainColor}14 0%, ${project.chainColor}05 60%, transparent 100%)`,
                    borderBottom: `1px solid ${project.chainColor}12`,
                  }}
                >
                  {/* Large decorative chain text */}
                  <div
                    className="absolute -bottom-3 -right-2 text-[5.5rem] font-black leading-none select-none pointer-events-none"
                    style={{ color: project.chainColor, opacity: 0.05 }}
                  >
                    {project.chain.slice(0, 4).toUpperCase()}
                  </div>

                  {/* Chain logo — prominent top-left */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <ChainLogo chain={project.chain} size={26} />
                    <span
                      className="text-xs font-semibold"
                      style={{ color: project.chainColor }}
                    >
                      {project.chain}
                    </span>
                  </div>

                  {/* Status badge — top-right */}
                  <span
                    className={`absolute top-4 right-4 px-2.5 py-1 text-[10px] font-medium rounded-full border ${
                      statusBadge[project.status]
                    }`}
                  >
                    {statusLabel[project.status]}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="mb-3">
                    <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
                      {project.name}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 mt-0.5">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 flex-1">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[11px] text-slate-500 bg-white/[0.04] border border-white/[0.06] rounded"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-0.5 text-[11px] text-slate-600 rounded">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/[0.06]">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <ExternalLink size={12} />
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                      >
                        <Github size={12} />
                        GitHub
                      </a>
                    )}
                    {!project.live && !project.github && (
                      <span className="flex items-center gap-1.5 text-xs text-slate-600">
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
