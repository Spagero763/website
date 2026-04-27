"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Code2, Zap, Layers } from "lucide-react";

const stats = [
  { value: "6+", label: "Projects Deployed" },
  { value: "5", label: "Chains Built On" },
  { value: "14+", label: "Smart Contracts" },
  { value: "1+", label: "Year Building" },
];

const highlights = [
  { icon: Shield, text: "Security-first — every contract designed to resist attack" },
  { icon: Code2, text: "Deep EVM internals: storage, calldata, execution flow" },
  { icon: Zap, text: "Foundry-based fuzz, fork, and unit testing on all projects" },
  { icon: Layers, text: "Multi-chain across EVM ecosystems and Starknet (Cairo)" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#020617]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-mono text-blue-400 text-sm mb-3 tracking-wider">
              // about me
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-snug">
              I build blockchain systems{" "}
              <span className="text-slate-400">that hold in production.</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-5">
              I&apos;m a smart contract engineer focused on building secure, production-ready
              blockchain infrastructure. My work spans on-chain identity systems, DeFi payment
              layers, and privacy-preserving trading protocols — always with security and gas
              efficiency at the core.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              I specialize in Solidity and Cairo, with deep experience in EVM internals,
              rigorous Foundry-based testing (fuzz and fork), and gas optimization.
              I&apos;ve deployed contracts across Base, Avalanche, Celo, and Starknet,
              and I&apos;m actively deepening my smart contract security expertise through
              Cyfrin Updraft&apos;s auditing curriculum.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="mt-0.5 w-8 h-8 flex items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20 flex-shrink-0">
                    <Icon size={14} className="text-blue-400" />
                  </div>
                  <span className="text-slate-400 text-sm leading-relaxed">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Photo + stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col items-center lg:items-end gap-8"
          >
            {/* Photo */}
            <div className="relative w-72 h-72">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 to-cyan-500/8 rounded-2xl" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/profile.jpg"
                  alt="Afolabi Ayomide Emmanuel"
                  fill
                  className="object-cover object-top"
                />
              </div>
              {/* Offset border accent */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-blue-500/20 -z-10" />
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-[#0f172a] border border-white/[0.06] rounded-xl p-4 text-center hover:border-white/[0.12] transition-colors"
                >
                  <div className="text-3xl font-bold text-white mb-1">{value}</div>
                  <div className="text-xs text-slate-500">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
