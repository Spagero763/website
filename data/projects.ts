export type Project = {
  name: string;
  tagline: string;
  description: string;
  chain: string;
  category: "EVM" | "Starknet";
  year: string;
  metrics: { value: string; label: string }[];
  tech: string[];
  preview: string;
  live?: string;
  github?: string;
  status: "live" | "in-progress" | "completed";
};

export const projects: Project[] = [
  {
    name: "Veraflow",
    tagline: "On-chain identity & credit protocol",
    description:
      "Decentralized identity and lending platform for underbanked workers. Work credentials become soulbound NFTs, and on-chain reputation scoring unlocks collateral-free lending.",
    chain: "Avalanche",
    category: "EVM",
    year: "2025",
    metrics: [
      { value: "14", label: "Smart contracts" },
      { value: "0-1000", label: "Reputation scoring" },
      { value: "100%", label: "Test coverage" },
    ],
    tech: ["Solidity", "Avalanche", "Soulbound NFTs", "OpenZeppelin", "Next.js"],
    preview: "/veraflow-preview.jpg",
    live: "https://veraflow-delta.vercel.app/",
    status: "live",
  },
  {
    name: "Bicvar",
    tagline: "Private dark pool trading on Starknet",
    description:
      "Privacy-preserving on-chain trading protocol. A commit-reveal scheme built on Poseidon hashing keeps orders confidential, enabling dark pool trading with MEV resistance and no information leakage.",
    chain: "Starknet",
    category: "Starknet",
    year: "2025",
    metrics: [
      { value: "MEV", label: "Resistant by design" },
      { value: "Poseidon", label: "Hash commitments" },
      { value: "0", label: "Information leakage" },
    ],
    tech: ["Cairo", "Starknet", "Poseidon Hash", "Commit-Reveal", "Argent X"],
    preview: "/bicvar-preview.jpg",
    live: "https://bicvar-starknet.vercel.app/",
    status: "live",
  },
  {
    name: "Paycrypt",
    tagline: "Buy utilities directly on-chain",
    description:
      "On-chain payment infrastructure on Base. Smart contracts handle secure transaction execution and user payment flows, built for production reliability and simplicity.",
    chain: "Base",
    category: "EVM",
    year: "2025",
    metrics: [
      { value: "Base", label: "Live in production" },
      { value: "Foundry", label: "Fully tested" },
      { value: "24/7", label: "On-chain settlement" },
    ],
    tech: ["Solidity", "Base", "Foundry", "OpenZeppelin", "Ethers.js"],
    preview: "/paycrypt-preview.jpg",
    live: "https://www.paycrypt.org/",
    github: "https://github.com/Spagero763/Paycrypt",
    status: "live",
  },
  {
    name: "EduPay",
    tagline: "Pay-per-chapter education platform",
    description:
      "Decentralized education marketplace for African learners. Students pay tutors per chapter in cUSD via MiniPay, with most of the revenue going straight to tutors and instant on-chain settlement.",
    chain: "Celo",
    category: "EVM",
    year: "2025",
    metrics: [
      { value: "95%", label: "Revenue to tutors" },
      { value: "cUSD", label: "Stablecoin payments" },
      { value: "Instant", label: "On-chain settlement" },
    ],
    tech: ["Solidity", "Celo", "cUSD", "MiniPay", "IPFS", "Next.js"],
    preview: "/edupay-preview.jpg",
    live: "https://edu-pay-one.vercel.app/",
    status: "live",
  },
];
