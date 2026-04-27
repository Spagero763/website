"use client";

import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  description: string;
  link?: string;
  linkLabel?: string;
  badge: string;
  badgeColor: string;
  status: "earned" | "in-progress";
};

const certificates: Certificate[] = [
  {
    title: "Starknet Developer Camp",
    issuer: "StarkWare / Starknet Foundation",
    date: "2025",
    description:
      "On-chain NFT certificate awarded to graduates of the Starknet Developer Camp program. Covers Cairo smart contract development, Starknet architecture, and deploying production contracts on Starknet.",
    link: "https://starkscan.co/contract/0x07606caC9053e9B8B573A4b0A0cE608880F64869e24B8A605210d7a85bB6E5F1",
    linkLabel: "View on Starkscan",
    badge: "STARK",
    badgeColor: "#EC796B",
    status: "earned",
  },
  {
    title: "Smart Contract Security & Auditing",
    issuer: "Cyfrin Updraft",
    date: "2025 — Present",
    description:
      "Comprehensive smart contract security curriculum covering auditing methodology, Solidity vulnerability patterns, formal verification, advanced Foundry techniques, and real-world audit case studies.",
    link: "https://updraft.cyfrin.io",
    linkLabel: "View Program",
    badge: "CYFRIN",
    badgeColor: "#3b82f6",
    status: "in-progress",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 bg-[#020617]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="font-mono text-blue-400 text-sm mb-3 tracking-wider">
            // credentials
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Certificates
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.title}
              variants={item}
              className="bg-[#0f172a] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/[0.14] transition-colors duration-300"
            >
              {/* Top stripe */}
              <div
                className="h-1.5 w-full"
                style={{
                  background: `linear-gradient(90deg, ${cert.badgeColor}, ${cert.badgeColor}60)`,
                }}
              />

              <div className="p-6">
                {/* Icon + badge */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${cert.badgeColor}18`,
                      border: `1px solid ${cert.badgeColor}30`,
                    }}
                  >
                    <Award size={20} style={{ color: cert.badgeColor }} />
                  </div>
                  <span
                    className={`px-2.5 py-1 text-xs font-medium rounded-full border ${
                      cert.status === "earned"
                        ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
                        : "text-amber-400 bg-amber-500/10 border-amber-500/20"
                    }`}
                  >
                    {cert.status === "earned" ? "Earned" : "In Progress"}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white font-semibold mb-1">{cert.title}</h3>
                <p className="text-xs font-medium mb-3" style={{ color: cert.badgeColor }}>
                  {cert.issuer} · {cert.date}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {cert.description}
                </p>

                {/* Link */}
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={11} />
                    {cert.linkLabel}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
