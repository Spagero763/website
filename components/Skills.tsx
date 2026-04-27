"use client";

import { motion } from "framer-motion";

type SkillCategory = {
  title: string;
  color: "blue" | "red" | "cyan" | "purple";
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Smart Contracts",
    color: "blue",
    skills: [
      "Solidity",
      "Cairo",
      "Foundry",
      "Hardhat",
      "OpenZeppelin",
      "Upgradeable Contracts",
      "Contract Architecture",
    ],
  },
  {
    title: "Security & Testing",
    color: "red",
    skills: [
      "Fuzz Testing",
      "Fork Testing",
      "Gas Optimization",
      "Reentrancy Guards",
      "Access Control",
      "Static Analysis",
      "Commit-Reveal Schemes",
    ],
  },
  {
    title: "Web3 & Frontend",
    color: "cyan",
    skills: [
      "Ethers.js",
      "Wagmi",
      "Viem",
      "Web3.js",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Chains & Infra",
    color: "purple",
    skills: [
      "EVM",
      "Starknet",
      "Avalanche",
      "Base",
      "Celo",
      "Chainlink",
      "IPFS",
      "Vercel",
    ],
  },
];

const colorMap = {
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    text: "text-blue-400",
    dot: "bg-blue-400",
    header: "text-blue-400",
  },
  red: {
    bg: "bg-red-500/10",
    border: "border-red-500/20",
    text: "text-red-400",
    dot: "bg-red-400",
    header: "text-red-400",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    text: "text-cyan-400",
    dot: "bg-cyan-400",
    header: "text-cyan-400",
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    text: "text-purple-400",
    dot: "bg-purple-400",
    header: "text-purple-400",
  },
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#090e1a]">
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
            // technical skills
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            What I work with
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {skillCategories.map((cat) => {
            const c = colorMap[cat.color];
            return (
              <motion.div
                key={cat.title}
                variants={item}
                className="bg-[#0f172a] border border-white/[0.06] rounded-2xl p-6 hover:border-white/[0.12] transition-colors duration-300"
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${c.dot}`} />
                  <h3 className={`text-xs font-semibold uppercase tracking-widest ${c.header}`}>
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 text-sm rounded-lg border ${c.bg} ${c.border} ${c.text}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
