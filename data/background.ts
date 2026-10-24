export const stack = [
  {
    title: "Smart contracts",
    items: [
      "Solidity",
      "Cairo",
      "Soroban (Rust)",
      "EVM internals",
      "Protocol architecture",
      "Upgradeable contracts",
      "OpenZeppelin",
    ],
  },
  {
    title: "Testing and security",
    items: [
      "Foundry",
      "Fuzz testing",
      "Fork testing",
      "Gas optimization",
      "Reentrancy protection",
      "Access control",
      "Commit-reveal schemes",
    ],
  },
  {
    title: "Integration and tooling",
    items: [
      "Ethers.js",
      "Wagmi",
      "Viem",
      "Claude API and agents",
      "x402 payments",
      "Chainlink oracles",
      "Deployment pipelines",
    ],
  },
];

export type Role = {
  org: string;
  role: string;
  period: string;
  kind: string;
  bullets: string[];
  images?: string[];
  event?: { label: string; href: string };
};

export const roles: Role[] = [
  {
    org: "Paycrypt",
    role: "Smart Contract Developer",
    period: "Jul 2025 - Mar 2026",
    kind: "Paid role",
    bullets: [
      "Built and maintained the payment contracts behind an on-chain utility payments product on Base",
      "Owned transaction execution and user payment flows in production",
      "Tested with Foundry, with reliability as the priority since the contracts moved user funds",
    ],
  },
  {
    org: "ORYX",
    role: "Student Team Lead",
    period: "Oct 2025 - Dec 2025",
    kind: "Team lead",
    bullets: [
      "Led a team of students to the Web3 Lagos Conference hosted by Web3Bridge",
      "Led smart contract development for a blockchain-based bounty platform",
      "Owned the on-chain reward mechanism and contract architecture decisions",
    ],
    images: ["/TEAM-LEAD1.jpg", "/TEAM-LEAD2.jpg", "/TEAM-LEAD3.jpg"],
    event: { label: "Web3 Lagos Conference, Web3Bridge", href: "https://event.web3bridge.com/" },
  },
  {
    org: "Web3Nova",
    role: "Blockchain Developer Intern",
    period: "Mar 2025 - Aug 2025",
    kind: "Internship",
    bullets: [
      "Wrote and deployed DApp smart contracts end to end",
      "Handled contract integration and the frontend deployment workflow",
    ],
  },
];

export type Training = {
  org: string;
  program: string;
  period: string;
  bullets: string[];
  link: string;
  linkLabel: string;
  image?: string;
};

export const training: Training[] = [
  {
    org: "Cyfrin Updraft",
    program: "Smart contract security and auditing",
    period: "Jan 2025 - Aug 2026",
    bullets: [
      "Auditing methodology, Solidity vulnerability patterns and advanced Foundry on real codebases",
      "Worked through the Foundry, security and assembly tracks",
    ],
    link: "https://profiles.cyfrin.io/u/afolabispagero71/achievements",
    linkLabel: "Achievements",
  },
  {
    org: "Starknet Developer Camp",
    program: "StarkWare and the Starknet Foundation",
    period: "2025",
    bullets: [
      "Cairo contract development, Starknet architecture and deployment",
      "The certificate is an NFT you can look up on-chain",
    ],
    link: "https://starkscan.co/contract/0x07606caC9053e9B8B573A4b0A0cE608880F64869e24B8A605210d7a85bB6E5F1",
    linkLabel: "Starkscan",
  },
  {
    org: "DevCompass",
    program: "Claude Certified Architect",
    period: "May 2026 - Jun 2026",
    bullets: [
      "Selected into the program and certified June 2026",
      "Production applications on the Claude API: tool use, agent loops and prompt design",
    ],
    link: "https://www.devcompass.ai/course/claude-certified-architect-prep",
    linkLabel: "Course",
    image: "/claude-architect-certificate-devcompass.png",
  },
];
