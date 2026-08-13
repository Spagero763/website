export type Deployment = {
  name: string;
  address: string;
  network: string;
  explorer: string;
};

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
  contracts?: string[];
  deployments?: Deployment[];
};

const celoscan = (a: string) => `https://celoscan.io/address/${a}`;
const fuji = (a: string) => `https://testnet.snowtrace.io/address/${a}`;
const mantlescan = (a: string) => `https://mantlescan.xyz/address/${a}`;

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
      { value: "3", label: "Solidity contracts" },
      { value: "95%", label: "Winner payout" },
      { value: "5", label: "Classic games" },
    ],
    tech: ["Solidity", "Foundry", "Celo", "USDm", "Next.js"],
    preview: "/Gambit.png",
    live: "https://www.bestgambit.live",
    github: "https://github.com/Spagero763/gambit",
    status: "live",
    contracts: ["ArcadeEscrow", "RewardsVault", "WeeklyCup"],
    problem:
      "Skill-gaming platforms hold player funds and decide payouts, so players have to trust the house. There was no fair, trustless way to stake real money on a head to head match.",
    approach:
      "A MiniPay-native arcade on Celo where smart contracts escrow both players' stakes and release the pot to the winner on settlement. Players practice free against bots, then stake stablecoins head to head.",
    highlights: [
      "ArcadeEscrow locks both stakes and pays out trustlessly",
      "Winner receives 95% of the pot, settled on-chain",
      "RewardsVault and WeeklyCup handle payouts and knockout tournaments",
      "Foundry test suites for the escrow and vault contracts",
      "Five games: Chess, Tic-Tac-Toe, Snakes & Ladders, Block Blitz, Naija Whot",
      "Built mobile-first for MiniPay on Celo",
    ],
    role: "Smart contracts and on-chain settlement",
  },
  {
    slug: "veraflow",
    name: "Veraflow",
    tagline: "On-chain identity & credit protocol",
    description:
      "Identity and lending protocol for underbanked workers, built as ten contracts across identity, credentials, lending, and governance. Work credentials become soulbound NFTs, and an on-chain reputation score unlocks collateral-free lending.",
    chain: "Avalanche",
    category: "EVM",
    year: "2025",
    featured: true,
    metrics: [
      { value: "10", label: "Deployed contracts" },
      { value: "0-1000", label: "Reputation score range" },
      { value: "4", label: "Protocol modules" },
    ],
    tech: ["Solidity", "Foundry", "Avalanche", "Soulbound NFTs", "OpenZeppelin", "Next.js"],
    preview: "/veraflow-preview.jpg",
    live: "https://veraflow-delta.vercel.app/",
    github: "https://github.com/Spagero763/veraflow",
    status: "live",
    contracts: [
      "WorkerIdentity",
      "CredentialRegistry",
      "CredentialVerifier",
      "SoulboundCredential",
      "ReputationScore",
      "LendingPool",
      "LoanManager",
      "CollateralOracle",
      "IssuerGovernance",
      "DisputeResolver",
    ],
    deployments: [
      { name: "WorkerIdentity", address: "0x7C937A7E3C1c7C6D1776f69650Bfd1516103F766", network: "Avalanche Fuji", explorer: fuji("0x7C937A7E3C1c7C6D1776f69650Bfd1516103F766") },
      { name: "CredentialRegistry", address: "0x7dc6ee61c094c794131fc4181e4b35bcf1a63dad", network: "Avalanche Fuji", explorer: fuji("0x7dc6ee61c094c794131fc4181e4b35bcf1a63dad") },
      { name: "CredentialVerifier", address: "0x9e8fd6776d72f9c71471aabc98f6f0e2333f4928", network: "Avalanche Fuji", explorer: fuji("0x9e8fd6776d72f9c71471aabc98f6f0e2333f4928") },
      { name: "SoulboundCredential", address: "0xdc7041742002f70ec635015b2e10fe52dd406a3d", network: "Avalanche Fuji", explorer: fuji("0xdc7041742002f70ec635015b2e10fe52dd406a3d") },
      { name: "ReputationScore", address: "0x263A2433a6D7CA34222120F21c2F68d0D1D1AA7a", network: "Avalanche Fuji", explorer: fuji("0x263A2433a6D7CA34222120F21c2F68d0D1D1AA7a") },
      { name: "LendingPool", address: "0x04DD8F6Ec0B13c689Ee479555910bc79B7496dCc", network: "Avalanche Fuji", explorer: fuji("0x04DD8F6Ec0B13c689Ee479555910bc79B7496dCc") },
      { name: "LoanManager", address: "0x4b66edc9e30711ffa273c84e5f1df46be9103cc1", network: "Avalanche Fuji", explorer: fuji("0x4b66edc9e30711ffa273c84e5f1df46be9103cc1") },
      { name: "CollateralOracle", address: "0xd35374e2621f16580eb093b9792773e34caba76a", network: "Avalanche Fuji", explorer: fuji("0xd35374e2621f16580eb093b9792773e34caba76a") },
      { name: "IssuerGovernance", address: "0xcbab6c09fc25ef215a0ee00c5481e8d5195fee4a", network: "Avalanche Fuji", explorer: fuji("0xcbab6c09fc25ef215a0ee00c5481e8d5195fee4a") },
      { name: "DisputeResolver", address: "0x112bfe9b03ab35146463632b15e5fb220278418b", network: "Avalanche Fuji", explorer: fuji("0x112bfe9b03ab35146463632b15e5fb220278418b") },
    ],
    problem:
      "Underbanked workers can't access credit because they lack a formal financial history, even when they hold real, verifiable work credentials.",
    approach:
      "An identity and lending protocol on Avalanche that converts work credentials into soulbound NFTs and computes an on-chain reputation score to unlock collateral-free lending. Split into four modules so identity, credentials, lending, and governance stay independently upgradeable.",
    highlights: [
      "Ten contracts across identity, credentials, lending, and governance",
      "Soulbound NFTs for non-transferable work credentials",
      "Reputation scoring from 0 to 1000 drives borrowing power",
      "LendingPool and LoanManager handle collateral-free loans",
      "IssuerGovernance and DisputeResolver keep credential issuers accountable",
      "Built on OpenZeppelin, deployed and verifiable on Fuji",
    ],
    role: "Protocol architecture and the full contract suite",
  },
  {
    slug: "bicvar",
    name: "Bicvar",
    tagline: "Private dark pool trading on Starknet",
    description:
      "Privacy-preserving trading protocol written in Cairo. A commit-reveal scheme built on Poseidon hashing keeps orders confidential until settlement, so large orders don't broadcast their intent to the mempool.",
    chain: "Starknet",
    category: "Starknet",
    year: "2025",
    featured: true,
    metrics: [
      { value: "Cairo", label: "Starknet contracts" },
      { value: "Poseidon", label: "Hash commitments" },
      { value: "Commit-reveal", label: "Order flow" },
    ],
    tech: ["Cairo", "Starknet", "Poseidon Hash", "Commit-Reveal", "Argent X"],
    preview: "/bicvar-preview.jpg",
    live: "https://bicvar-starknet.vercel.app/",
    github: "https://github.com/Spagero763/BICVAR-starknet",
    status: "live",
    contracts: ["darkpool", "interfaces", "mock_token"],
    problem:
      "Public order books leak trading intent, exposing large orders to MEV and front-running.",
    approach:
      "A dark pool on Starknet using a commit-reveal scheme built on Poseidon hashing. Traders submit a hash commitment first and reveal the order later, so intent stays private during the window where front-running would happen.",
    highlights: [
      "Commit-reveal order flow with Poseidon hash commitments",
      "Order details stay private until the reveal step",
      "Cairo contracts written for Starknet",
      "Argent X wallet integration",
    ],
    role: "Cairo contract design and the cryptographic scheme",
  },
  {
    slug: "paycrypt",
    name: "Paycrypt",
    tagline: "Buy utilities directly on-chain",
    description:
      "On-chain payment infrastructure on Base. Smart contracts handled transaction execution and user payment flows, built for production reliability and simplicity.",
    chain: "Base",
    category: "EVM",
    year: "2025 - 2026",
    featured: true,
    metrics: [
      { value: "Base", label: "Deployment target" },
      { value: "Foundry", label: "Test framework" },
      { value: "9 mo", label: "In production" },
    ],
    tech: ["Solidity", "Base", "Foundry", "OpenZeppelin", "Ethers.js"],
    preview: "/paycrypt-preview.jpg",
    github: "https://github.com/Spagero763/Paycrypt",
    status: "completed",
    problem: "Paying for everyday utilities on-chain is clunky and unreliable for normal users.",
    approach:
      "On-chain payment infrastructure on Base where smart contracts handled transaction execution and user payment flows. This was paid work over nine months, and the product has since gone offline.",
    highlights: [
      "Payment contracts written and maintained for Base",
      "Transaction execution and user payment flows",
      "Foundry tested with a focus on reliability",
      "Open-source repository",
    ],
    role: "Smart contract development, as a paid engineer on the team",
  },
  {
    slug: "edupay",
    name: "EduPay",
    tagline: "Pay-per-chapter education platform",
    description:
      "Education marketplace for African learners, live on Celo mainnet. Students pay tutors per chapter in cUSD via MiniPay, with 95% of revenue going straight to tutors and instant on-chain settlement.",
    chain: "Celo",
    category: "EVM",
    year: "2025",
    featured: true,
    metrics: [
      { value: "Mainnet", label: "Live on Celo" },
      { value: "95%", label: "Revenue to tutors" },
      { value: "cUSD", label: "Stablecoin payments" },
    ],
    tech: ["Solidity", "Foundry", "Celo", "cUSD", "MiniPay", "IPFS", "Next.js"],
    preview: "/edupay-preview.jpg",
    live: "https://edu-pay-one.vercel.app/",
    github: "https://github.com/Spagero763/EduPay",
    status: "live",
    deployments: [
      {
        name: "EduPay",
        address: "0xDBA56f8d23c69Dbd9659be4ca18133962BC86191",
        network: "Celo mainnet",
        explorer: celoscan("0xDBA56f8d23c69Dbd9659be4ca18133962BC86191"),
      },
    ],
    problem:
      "African learners and tutors lose most of their money to platform fees and slow, unreliable payment rails.",
    approach:
      "An education marketplace on Celo where students pay tutors per chapter in cUSD through MiniPay. Settlement is on-chain and immediate, so tutors are paid per chapter instead of waiting on a payout cycle.",
    highlights: [
      "Deployed to Celo mainnet and verifiable on Celoscan",
      "Pay-per-chapter model settled in cUSD",
      "95% of revenue goes directly to tutors",
      "MiniPay integration for mobile-first payments",
      "IPFS content storage",
    ],
    role: "Smart contract development and integration",
  },
  {
    slug: "chainsentinel",
    name: "ChainSentinel",
    tagline: "Smart contract auditor + live anomaly feed",
    description:
      "Security tooling live on Mantle mainnet. It audits smart contracts, streams an on-chain anomaly feed, and records detections to an agent identity contract while alerting over Telegram and Discord.",
    chain: "Mantle",
    category: "Security",
    year: "2026",
    featured: false,
    metrics: [
      { value: "Mainnet", label: "Live on Mantle" },
      { value: "Live", label: "Anomaly feed" },
      { value: "2", label: "Alert channels" },
    ],
    tech: ["TypeScript", "Solidity", "Mantle", "Security", "Webhooks"],
    live: "https://chainsentinel-app.vercel.app/",
    github: "https://github.com/Spagero763/chainsentinel",
    status: "live",
    deployments: [
      {
        name: "Agent identity",
        address: "0xd933c28d0fc2283cca10f4361226c75f7ffeb39e",
        network: "Mantle mainnet",
        explorer: mantlescan("0xd933c28d0fc2283cca10f4361226c75f7ffeb39e"),
      },
    ],
    problem:
      "On-chain anomalies and risky contract behaviour often go unnoticed until after funds are gone.",
    approach:
      "A Mantle contract auditor paired with a watcher that monitors on-chain activity, records detections to an agent identity contract, and pushes alerts to Telegram and Discord as they happen.",
    highlights: [
      "Agent identity contract deployed to Mantle mainnet",
      "Automated contract auditing against common vulnerability patterns",
      "Live on-chain anomaly detection feed",
      "Telegram and Discord alerting",
    ],
    role: "Security tooling and on-chain monitoring",
  },
  {
    slug: "stellarmind",
    name: "StellarMind",
    tagline: "AI agent marketplace on Stellar",
    description:
      "A marketplace where Claude-powered agents buy and sell services from each other, paying over x402 micropayments on Stellar with no human approving each transaction.",
    chain: "Stellar",
    category: "AI",
    year: "2026",
    featured: false,
    metrics: [
      { value: "x402", label: "Payment protocol" },
      { value: "Claude", label: "Agent runtime" },
      { value: "Stellar", label: "Settlement layer" },
    ],
    tech: ["Stellar", "x402", "Claude API", "TypeScript", "AI Agents"],
    github: "https://github.com/Spagero763/stellarmind",
    status: "completed",
    problem:
      "Autonomous agents need a way to pay each other without a human approving every transaction.",
    approach:
      "An agent marketplace on Stellar where Claude-powered agents settle payments through x402 micropayments, so an agent can buy a service, pay for it, and earn from its own work unattended.",
    highlights: [
      "Claude-powered autonomous agents",
      "x402 micropayments settled on Stellar",
      "Agents transact without human approval in the loop",
      "Connects AI tooling to on-chain settlement",
    ],
    role: "Agent design and payment integration",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
