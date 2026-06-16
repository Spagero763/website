export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  chain: string;
  category: string;
  year: string;
  featured: boolean;
  metrics: { value: string; label: string }[];
  tech: string[];
  preview?: string;
  live?: string;
  github?: string;
  status: "live" | "in-progress" | "completed";
  problem: string;
  approach: string;
  highlights: string[];
  role: string;
};

export const projects: Project[] = [
  {
    slug: "gambit",
    name: "Gambit",
    tagline: "Play classic games, stake USDm",
    description:
      "Skill-gaming platform on Celo where players stake stablecoins in 1v1 matches across five classic games. Smart contracts hold the pot in escrow and settle on-chain, with winners taking 95%. Free practice against bots, plus leaderboards and tournaments.",
    chain: "Celo",
    category: "EVM",
    year: "2026",
    featured: true,
    metrics: [
      { value: "95%", label: "Winner payout" },
      { value: "5", label: "Classic games" },
      { value: "USDm", label: "On-chain stakes" },
    ],
    tech: ["Solidity", "Celo", "USDm", "On-chain Escrow", "Next.js"],
    preview: "/Gambit.png",
    live: "https://www.bestgambit.live",
    status: "live",
    problem:
      "Skill-gaming platforms hold player funds and decide payouts, so players have to trust the house. There was no fair, trustless way to stake real money on a head to head match.",
    approach:
      "A MiniPay-native arcade on Celo where smart contracts escrow both players' stakes and release the pot to the winner on settlement. Players practice free against bots, then stake stablecoins head to head.",
    highlights: [
      "Escrow contracts lock both stakes and pay out trustlessly",
      "Winner receives 95% of the pot, settled on-chain",
      "Five games: Chess, Tic-Tac-Toe, Snakes & Ladders, Block Blitz, Naija Whot",
      "Knockout tournaments and live match viewing",
      "Built mobile-first for MiniPay on Celo",
    ],
    role: "Smart contracts and on-chain settlement",
  },
  {
    slug: "veraflow",
    name: "Veraflow",
    tagline: "On-chain identity & credit protocol",
    description:
      "Decentralized identity and lending platform for underbanked workers. Work credentials become soulbound NFTs, and on-chain reputation scoring unlocks collateral-free lending.",
    chain: "Avalanche",
    category: "EVM",
    year: "2025",
    featured: true,
    metrics: [
      { value: "14", label: "Smart contracts" },
      { value: "0-1000", label: "Reputation scoring" },
      { value: "100%", label: "Test coverage" },
    ],
    tech: ["Solidity", "Avalanche", "Soulbound NFTs", "OpenZeppelin", "Next.js"],
    preview: "/veraflow-preview.jpg",
    live: "https://veraflow-delta.vercel.app/",
    status: "live",
    problem:
      "Underbanked workers can't access credit because they lack a formal financial history, even when they hold real, verifiable work credentials.",
    approach:
      "A decentralized identity and lending protocol on Avalanche that converts work credentials into soulbound NFTs and computes an on-chain reputation score to unlock collateral-free lending.",
    highlights: [
      "14 smart contracts with full test coverage",
      "Soulbound NFTs for non-transferable credentials",
      "Reputation scoring from 0 to 1000",
      "Collateral-free lending driven by reputation",
      "OpenZeppelin-based, security-reviewed architecture",
    ],
    role: "Protocol architecture and full contract suite",
  },
  {
    slug: "bicvar",
    name: "Bicvar",
    tagline: "Private dark pool trading on Starknet",
    description:
      "Privacy-preserving on-chain trading protocol. A commit-reveal scheme built on Poseidon hashing keeps orders confidential, enabling dark pool trading with MEV resistance and no information leakage.",
    chain: "Starknet",
    category: "Starknet",
    year: "2025",
    featured: true,
    metrics: [
      { value: "MEV", label: "Resistant by design" },
      { value: "Poseidon", label: "Hash commitments" },
      { value: "0", label: "Information leakage" },
    ],
    tech: ["Cairo", "Starknet", "Poseidon Hash", "Commit-Reveal", "Argent X"],
    preview: "/bicvar-preview.jpg",
    live: "https://bicvar-starknet.vercel.app/",
    status: "live",
    problem:
      "Public order books leak trading intent, exposing large orders to MEV and front-running.",
    approach:
      "A privacy-preserving dark pool on Starknet using a commit-reveal scheme built on Poseidon hashing, so orders stay confidential until reveal.",
    highlights: [
      "Commit-reveal order flow with Poseidon hash commitments",
      "MEV resistant by design, no information leakage",
      "Cairo contracts deployed on Starknet",
      "Argent X wallet integration",
    ],
    role: "Cairo contract design and cryptographic scheme",
  },
  {
    slug: "paycrypt",
    name: "Paycrypt",
    tagline: "Buy utilities directly on-chain",
    description:
      "On-chain payment infrastructure on Base. Smart contracts handle secure transaction execution and user payment flows, built for production reliability and simplicity.",
    chain: "Base",
    category: "EVM",
    year: "2025",
    featured: true,
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
    problem: "Paying for everyday utilities on-chain is clunky and unreliable for normal users.",
    approach:
      "On-chain payment infrastructure on Base where smart contracts handle secure transaction execution and user payment flows, built for production reliability.",
    highlights: [
      "Production payment contracts live on Base",
      "Secure transaction execution and payment flows",
      "Foundry tested with a focus on reliability",
      "Open-source repository",
    ],
    role: "Smart contract development",
  },
  {
    slug: "edupay",
    name: "EduPay",
    tagline: "Pay-per-chapter education platform",
    description:
      "Decentralized education marketplace for African learners. Students pay tutors per chapter in cUSD via MiniPay, with most of the revenue going straight to tutors and instant on-chain settlement.",
    chain: "Celo",
    category: "EVM",
    year: "2025",
    featured: true,
    metrics: [
      { value: "95%", label: "Revenue to tutors" },
      { value: "cUSD", label: "Stablecoin payments" },
      { value: "Instant", label: "On-chain settlement" },
    ],
    tech: ["Solidity", "Celo", "cUSD", "MiniPay", "IPFS", "Next.js"],
    preview: "/edupay-preview.jpg",
    live: "https://edu-pay-one.vercel.app/",
    github: "https://github.com/Spagero763/EduPay",
    status: "live",
    problem:
      "African learners and tutors lose most of their money to platform fees and slow, unreliable payment rails.",
    approach:
      "A decentralized education marketplace on Celo where students pay tutors per chapter in cUSD via MiniPay, with instant on-chain settlement.",
    highlights: [
      "Pay-per-chapter model in cUSD stablecoins",
      "95% of revenue goes directly to tutors",
      "Instant on-chain settlement via MiniPay",
      "IPFS content storage",
    ],
    role: "Smart contract development and integration",
  },
  {
    slug: "chainsentinel",
    name: "ChainSentinel",
    tagline: "Smart contract auditor + live anomaly feed",
    description:
      "Security tooling for Mantle that audits smart contracts and streams a live on-chain anomaly feed, with a watcher that records detections and sends Telegram and Discord alerts.",
    chain: "Mantle",
    category: "Security",
    year: "2026",
    featured: false,
    metrics: [
      { value: "Mantle", label: "Network" },
      { value: "Live", label: "Anomaly feed" },
      { value: "24/7", label: "Monitoring" },
    ],
    tech: ["TypeScript", "Mantle", "Solidity", "Security", "Webhooks"],
    github: "https://github.com/Spagero763/chainsentinel",
    status: "completed",
    problem:
      "On-chain anomalies and risky contract behavior often go unnoticed until after funds are lost.",
    approach:
      "A Mantle smart contract auditor paired with a live anomaly watcher that monitors on-chain activity, records detections to an agent identity, and pushes real-time alerts to Telegram and Discord.",
    highlights: [
      "Automated smart contract auditing on Mantle",
      "Live on-chain anomaly detection feed",
      "Telegram and Discord alerting",
      "Detections recorded to an on-chain agent identity",
    ],
    role: "Security tooling and on-chain monitoring",
  },
  {
    slug: "stellarmind",
    name: "StellarMind",
    tagline: "AI agent marketplace on Stellar",
    description:
      "A marketplace where Claude-powered AI agents buy, sell, and earn autonomously using x402 micropayments on Stellar.",
    chain: "Stellar",
    category: "AI",
    year: "2026",
    featured: false,
    metrics: [
      { value: "x402", label: "Micropayments" },
      { value: "Claude", label: "AI agents" },
      { value: "Stellar", label: "Network" },
    ],
    tech: ["Stellar", "x402", "Claude API", "TypeScript", "AI Agents"],
    github: "https://github.com/Spagero763/stellarmind",
    status: "completed",
    problem:
      "Autonomous AI agents need a way to transact value with each other without a human approving every payment.",
    approach:
      "An agent marketplace on Stellar where Claude-powered agents pay each other through x402 micropayments to buy and sell services autonomously.",
    highlights: [
      "Claude-powered autonomous agents",
      "x402 micropayments on Stellar",
      "Agents buy, sell, and earn without human intervention",
      "Connects AI tooling to on-chain settlement",
    ],
    role: "AI agent and payment integration",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
