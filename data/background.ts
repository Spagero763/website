export const stack = [
  {
    title: "Smart contracts",
    items: [
      "Solidity",
      "Cairo",
      "Rust (NEAR, Soroban)",
      "Uniswap v4 hooks",
      "EVM internals",
      "OpenZeppelin",
    ],
  },
  {
    title: "Security",
    items: [
      "Manual review",
      "Static analysis",
      "Foundry",
      "Fork testing",
      "Access control",
      "Reentrancy",
      "Oracle and rate source hardening",
    ],
  },
  {
    title: "AI and agents",
    items: [
      "Claude API",
      "Tool use and agent loops",
      "MCP servers",
      "x402 agent payments",
      "ERC-8004 agent identity",
      "Guards enforced outside the model",
    ],
  },
  {
    title: "Full stack",
    items: [
      "TypeScript",
      "Next.js and React",
      "Node and Express",
      "Postgres",
      "REST APIs",
      "viem and wagmi",
      "GSAP and Framer Motion",
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
      "Paid role on the team behind an on-chain utility payments product, where bills are paid in stablecoins",
      "Worked on the order contract: a user creates an order in USDT or USDC and it is marked settled or failed, with per-token limits, a pause switch and a blacklist",
      "Deployed on Base, Lisk and Celo. The Base contract recorded 209 orders, 169 of them settled",
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
    org: "Uniswap Hook Incubator",
    program: "Cohort 10 graduate, Atrium Academy",
    period: "Jul 2026 - Sep 2026",
    bullets: [
      "Uniswap v4 hook design: callbacks, custom accounting, hook permissions and testing against deployed pools",
      "Certificate of achievement issued 11 September 2026, for completing the cohort and building Vernier",
      "Held on-chain as token 15 of the UHI 10 Grads collection",
    ],
    link: "https://opensea.io/item/zora/0x67fbaecdb9bb85a774030ac578d836898bd6081d/15",
    linkLabel: "Certificate",
    image: "/uhi10-certificate.png",
  },
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
