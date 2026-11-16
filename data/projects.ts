export type Deployment = {
  name: string;
  address: string;
  network: string;
  explorer: string;
};

export type Proof = {
  label: string;
  detail: string;
  href: string;
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
  preview: string;
  mobile?: string;
  live?: string;
  github?: string;
  status: "live" | "testnet";
  problem: string;
  solution: string;
  useCase: string;
  design: string[];
  highlights: string[];
  role: string;
  contracts?: string[];
  deployments?: Deployment[];
  proof?: Proof[];
};

const celoscan = (a: string) => `https://celoscan.io/address/${a}`;
const celotx = (h: string) => `https://celoscan.io/tx/${h}`;
const basescan = (a: string) => `https://basescan.org/address/${a}`;
const unichain = (a: string) => `https://unichain-sepolia.blockscout.com/address/${a}`;

export const projects: Project[] = [
  {
    slug: "cruce",
    name: "Cruce",
    tagline: "Currency exchange between Latin America and Nigeria",
    description:
      "A currency exchange agent on Celo. Say what you hold and what you need. It prices every hop on Textile, Uniswap and Mento, takes the best one, and sends the result to any wallet in about thirty seconds. One signature, no gas, no account.",
    chain: "Celo",
    category: "Payments",
    year: "2026",
    featured: true,
    metrics: [
      { value: "56", label: "Currency pairs" },
      { value: "3", label: "Venues priced on every hop" },
      { value: "18.5 s", label: "Fastest recorded order" },
    ],
    tech: ["TypeScript", "viem", "x402", "Permit2", "Uniswap v3 and v4", "Mento", "Postgres", "React", "GSAP"],
    preview: "/work/cruce.jpg",
    mobile: "/work/cruce-mobile.jpg",
    live: "https://usecruce.xyz",
    github: "https://github.com/Spagero763/cruce",
    status: "live",
    problem:
      "Pesos, reais, naira and dollars all sit on Celo as stablecoins, but every venue trades them against the dollar. Someone holding pesos who needs reais makes two trades, pays two spreads, and watches the price move in between. Off-chain, the exchange counter takes 5 to 10% for the same thing.",
    solution:
      "An agent quotes each hop on every venue that trades the pair and takes the best output. The payer signs once over x402. The agent sells what was paid, holds dollars for a few seconds, buys the target currency and pays it out. Every quote carries a guaranteed minimum, and an order that cannot reach it is refunded instead of filled short.",
    useCase:
      "A freelancer paid in pesos sends reais to a supplier from MiniPay, MetaMask or an email sign-in. Builders plug in through an npm package or a link and earn a third of the fee on every order that carries their code. Other agents use it to pay any x402 service in whatever currency they hold.",
    design: [
      "One card does the whole job. The amount, the rate, the fee and the guaranteed minimum are all visible before anything is signed.",
      "The official and street rates sit under every quote, so the price is judged against what a counter would have given.",
      "A 45 second price hold counts down under the button, and the quote renews itself when it lapses.",
      "Every wallet and chain error is rewritten as one sentence that says what to do next.",
      "English, Spanish and Portuguese. Motion is GSAP with Lenis, plus a lite mode that drops the heavy effects on slow phones.",
    ],
    highlights: [
      "Best price routing across Textile FX, Uniswap v3 and v4, and Mento, priced again at fill time",
      "x402 payments: EIP-3009 for dollar tokens and Permit2 with a sponsored approval for pesos and reais, so the payer never needs CELO",
      "Crash-safe orders: every hash is recorded before its receipt is awaited, and no leg is ever sent twice",
      "Quotes more than 8% from the reference cross rate are refused",
      "No contract holds a balance and the agent holds nothing between orders",
      "41 tests across the router, engine, payment paths and store",
    ],
    role: "Everything: the routing engine, venue integrations, payment rails, recovery logic, the SDK and the interface.",
    proof: [
      {
        label: "Agent wallet",
        detail: "Every leg of every order, from one address",
        href: celoscan("0x242C4917FdaFB48A845BFD4356D81AE45EE6E77e"),
      },
      {
        label: "wBRL to cNGN in 25.5 s",
        detail: "Paid over x402 with Permit2, two Textile legs",
        href: celotx("0x6250b06ad52473560cd2ac001f005e7ccb19a11def49038996959c80ff974a2e"),
      },
      {
        label: "USD₮ to wBRL in 18.5 s",
        detail: "Paid over x402, filled on Textile",
        href: celotx("0xd7a2ce0002ddf855e2741c35dad4ef829a2b93a794233b3f9d04576dd825460f"),
      },
      {
        label: "Uniswap v4 fill",
        detail: "USDC to wBRL",
        href: celotx("0xfc4eee83a53190b001d9e7c8eb3306dd080f551951ec470efee0715d9ec0970e"),
      },
    ],
  },
  {
    slug: "vernier",
    name: "Vernier",
    tagline: "A Uniswap v4 hook for yield-bearing assets",
    description:
      "A Uniswap v4 hook that reads the rate a yield token publishes about itself and corrects the pool's curve by exactly how stale it has become, so accrual reaches liquidity providers instead of the first bot to notice.",
    chain: "Unichain",
    category: "DeFi",
    year: "2026",
    featured: true,
    metrics: [
      { value: "53", label: "Foundry tests" },
      { value: "0 wei", label: "Between quote and execution" },
      { value: "2", label: "Verified contracts" },
    ],
    tech: ["Solidity", "Uniswap v4 hooks", "Foundry", "ERC-4626", "Operator attestation", "Next.js", "wagmi"],
    preview: "/work/vernier.jpg",
    mobile: "/work/vernier-mobile.jpg",
    live: "https://vernier-xi.vercel.app",
    github: "https://github.com/Spagero763/vernier",
    status: "testnet",
    contracts: ["VernierParHook", "RateAttestationService"],
    deployments: [
      {
        name: "VernierParHook",
        address: "0x80e4a79F2297E3CcE4F68ae535b2508187C6c644",
        network: "Unichain Sepolia",
        explorer: unichain("0x80e4a79F2297E3CcE4F68ae535b2508187C6c644"),
      },
      {
        name: "RateAttestationService",
        address: "0x415302aDd60A138c872E07019Dc9E0a77b284292",
        network: "Unichain Sepolia",
        explorer: unichain("0x415302aDd60A138c872E07019Dc9E0a77b284292"),
      },
    ],
    problem:
      "Staking tokens, yield-bearing stablecoins and tokenized treasuries have a fair price that moves on a schedule the token itself publishes. An AMM quotes from reserves and knows nothing about it, so the pool keeps quoting yesterday's price and a bot buys the difference. For this asset class that is a continuous, predictable transfer out of LP positions.",
    solution:
      "The token publishes its rate, so the factor by which the curve has gone stale is known exactly. The hook applies that factor to the curve's own price and settles the correction to in-range liquidity. Real premium or discount stays on the curve, and only the part that is already public is removed. The obvious alternative, a fee sized to the gap, is measured in the repository and leaves the pool a hundred times more mispriced than doing nothing.",
    useCase:
      "Liquidity providers in staked ETH, yield-bearing stablecoin and tokenized treasury pools, who today lose the accrual to arbitrage. Integrators price swaps through the v4 Quoter, which simulates the hook, so the correction is visible before a trade is sent.",
    design: [
      "The dashboard makes one argument: two pools on the same pair, fee, spacing and starting price, read live, where the only difference is the hook.",
      "Earnings per LP position are drawn as two bars side by side, so the result is read off the chain instead of taken on trust.",
      "Three sections only: the proof, a place to try it with your own wallet, and how it works.",
      "Numbers are set in a mono face so digits line up. Transitions are Framer Motion.",
    ],
    highlights: [
      "The correction lands on the leg the swapper did not specify, so neither exact input nor exact output routes around it",
      "Rate movement is bounded by implied APR over elapsed time, and a reading past the bound is clamped, not rejected, so a disturbed rate source cannot freeze the pool",
      "The operator attestation service can only withhold a correction, never set a price",
      "Fork test runs against the PoolManager deployed on Unichain Sepolia, which rejects settlement a local one accepts",
      "Quoter test asserts quote equals execution to the wei on both swap types",
      "Hook address mined so its low bits encode the four permissions v4 reads",
    ],
    role: "Mechanism design, the hook and attestation contracts, the test suite, deployment and the dashboard. Built as my capstone in the Uniswap Hook Incubator.",
  },
  {
    slug: "gambit",
    name: "Gambit",
    tagline: "Classic skill games for real stakes, inside MiniPay",
    description:
      "A MiniPay arcade on Celo. Play chess, Whot and three other classics free against a bot, or stake stablecoins head to head. An escrow contract holds both stakes and pays the winner 95% on settlement.",
    chain: "Celo",
    category: "Consumer",
    year: "2026",
    featured: true,
    metrics: [
      { value: "5", label: "Games" },
      { value: "95%", label: "Of the pot to the winner" },
      { value: "3", label: "Stablecoins accepted" },
    ],
    tech: ["Solidity", "Foundry", "Next.js", "wagmi", "viem", "Supabase", "Framer Motion"],
    preview: "/work/gambit.jpg",
    mobile: "/work/gambit-mobile.jpg",
    live: "https://www.bestgambit.live",
    github: "https://github.com/Spagero763/gambit",
    status: "live",
    contracts: ["ArcadeEscrow", "RewardsVault", "WeeklyCup"],
    deployments: [
      {
        name: "ArcadeEscrow",
        address: "0xB34548Ad3A45C2a571f99341e5fb32abB4FACd05",
        network: "Celo mainnet",
        explorer: celoscan("0xB34548Ad3A45C2a571f99341e5fb32abB4FACd05"),
      },
      {
        name: "RewardsVault",
        address: "0x8f5f57b0851b1FC374d2dcE52cB9F83cC005346E",
        network: "Celo mainnet",
        explorer: celoscan("0x8f5f57b0851b1fc374d2dce52cb9f83cc005346e"),
      },
      {
        name: "WeeklyCup",
        address: "0x6043bec74cfE8bF00D395DdddD2C2f85a9915A15",
        network: "Celo mainnet",
        explorer: celoscan("0x6043bec74cfe8bf00d395ddddd2c2f85a9915a15"),
      },
    ],
    problem:
      "Staking money on a game of skill normally means trusting a house to hold the pot and decide who gets paid. On a phone in Lagos or Nairobi it also means card payments that fail and withdrawals that take days.",
    solution:
      "Both players' stakes go into an escrow contract on Celo. The match is played, the result is settled on-chain and the winner is paid from the contract, with join and settle windows so funds cannot be stranded. Free play against a bot comes first, so nobody stakes on a game they have not tried.",
    useCase:
      "MiniPay users who already hold dollar stablecoins on their phone. Two friends open a room, each stakes a dollar, and the winner is paid before the app is closed. MiniPay has accepted it.",
    design: [
      "Built for one thumb: a bottom tab bar, large tap targets, and a Play versus AI button that works before any sign-in.",
      "Each game has its own board art, from the Whot deck to the chess set, so the lobby reads as an arcade and not a dashboard.",
      "A thirty second tour on first visit, a daily reward and a daily challenge give a reason to come back.",
      "While the wallet is holding a transaction the screen says so in plain words.",
      "Framer Motion for card deals, piece moves and screen transitions.",
    ],
    highlights: [
      "ArcadeEscrow locks both stakes and pays out on settlement, with join and settle windows",
      "Stakes in USDm, USDT or USDC",
      "40% of every fee returns to players as cashback and invite rewards",
      "Five games: Chess, Naija Whot, Tic-Tac-Toe, Snakes and Ladders, Block Blitz",
      "28 Foundry tests across the escrow, vault and cup contracts",
      "Accepted by MiniPay",
    ],
    role: "Everything: the contracts, settlement and rewards logic, the five games and the interface.",
  },
  {
    slug: "bell",
    name: "Bell",
    tagline: "A price for tokenized stocks while the exchange is closed",
    description:
      "Tokenized equities on Base trade around the clock, but their price feed stops at the New York close. Bell is a market that runs only in those hours, and a drop-in feed that serves its price.",
    chain: "Base",
    category: "DeFi",
    year: "2026",
    featured: true,
    metrics: [
      { value: "$5.6M", label: "Traded in one weekend with no reference price" },
      { value: "65 h", label: "Weekend oracle blackout" },
      { value: "3", label: "Contracts on Base mainnet" },
    ],
    tech: ["Solidity", "Foundry", "Chainlink", "LMSR", "Next.js", "wagmi", "Framer Motion", "GSAP"],
    preview: "/work/bell.jpg",
    mobile: "/work/bell-mobile.jpg",
    live: "https://usebell.vercel.app",
    github: "https://github.com/Spagero763/bell",
    status: "live",
    contracts: ["MarketClock", "GapMarket", "ImpliedOpenFeed"],
    deployments: [
      {
        name: "MarketClock",
        address: "0x8162b02A347F705Ee8d0d92fa297707436D39128",
        network: "Base mainnet",
        explorer: basescan("0x8162b02A347F705Ee8d0d92fa297707436D39128"),
      },
      {
        name: "GapMarket",
        address: "0x07eB9fB97b0eF270d85750A72E3d7a316af9CC18",
        network: "Base mainnet",
        explorer: basescan("0x07eB9fB97b0eF270d85750A72E3d7a316af9CC18"),
      },
      {
        name: "ImpliedOpenFeed",
        address: "0xce0B075d9B2BA71F4C8097e3A43e7D1240505173",
        network: "Base mainnet",
        explorer: basescan("0xce0B075d9B2BA71F4C8097e3A43e7D1240505173"),
      },
    ],
    problem:
      "From the closing bell in New York until the next one, the Chainlink feed behind a tokenized stock holds its last print and the mint and redeem path is shut. The token keeps trading. Over one weekend, reconstructed from swap events, 16,909 trades and $5.6 million changed hands in Apple's pool at a price nobody could check, and Monday opened two percent lower.",
    solution:
      "MarketClock carries the New York calendar on-chain and proves each closed window with two feed rounds that anyone can submit and nobody can fake. GapMarket runs only while the exchange is shut: twenty one buckets over the next opening print, scored with LMSR, so it is always quoted and its worst-case loss is bounded and posted up front. ImpliedOpenFeed serves the market's expected price through the same interface as the Chainlink feed it wraps.",
    useCase:
      "Lending markets and perps venues that read a tokenized equity feed can point at Bell's feed and stop going blind at the close. Traders with a view on Monday's open get a venue to express it.",
    design: [
      "The landing page is a clock. A live countdown to the next bell fills the screen, because the product only exists between bells.",
      "Three readings sit side by side: the frozen Chainlink price, the pool price and Bell's implied open. The gap is visible at a glance.",
      "A serif headline over a near-black grid, with amber reserved for closed and green for live.",
      "The page reads Base directly, with no backend in between. Motion is Framer Motion and GSAP.",
    ],
    highlights: [
      "Close and open prints are proved on-chain by checking the neighbouring feed rounds, so no keeper has to be online at the right second",
      "LMSR book with a bounded worst-case loss, posted as subsidy before the book opens",
      "The feed falls back to the underlying when the book is thin or drifts too far",
      "On-chain calendar with daylight saving and published closures",
      "Fork test against the live Chainlink feed",
    ],
    role: "Research from on-chain swap data, mechanism design, three contracts, the tests and the front end.",
  },
  {
    slug: "charter",
    name: "Charter",
    tagline: "A private fund whose manager cannot break its own rules",
    description:
      "An AI manager proposes trades. A guardian inside a hardware enclave holds the fund's only key, checks every proposal against a mandate fixed at launch, and signs only what passes. Positions stay private, and every decision, including every rejection, is logged.",
    chain: "NEAR",
    category: "Funds",
    year: "2026",
    featured: true,
    metrics: [
      { value: "8", label: "Mandate rules checked before every signature" },
      { value: "0", label: "Keys held by a person or a model" },
      { value: "6", label: "Chains you can deposit from" },
    ],
    tech: ["Rust", "near-sdk", "WASI", "Intel TDX", "NEAR Intents", "ChaCha20-Poly1305", "React", "Framer Motion"],
    preview: "/work/charter.jpg",
    mobile: "/work/charter-mobile.jpg",
    live: "https://charter-tawny.vercel.app",
    github: "https://github.com/Spagero763/charter",
    status: "live",
    deployments: [
      {
        name: "Fund contract",
        address: "charter.spageroadmin.near",
        network: "NEAR mainnet",
        explorer: "https://nearblocks.io/address/charter.spageroadmin.near",
      },
    ],
    problem:
      "Public on-chain vaults expose every position, so strategies get copied and traded against. Private vaults fix that and create the opposite problem: a depositor cannot know the manager is doing what was promised. Both failures come from the same place. Whoever holds the signing key can do anything.",
    solution:
      "The key exists only inside one specific build of a guardian program running in an Intel TDX enclave. The manager seals each proposal to the guardian's key. The guardian marks the book with signed quotes, simulates the trade, checks each rule and signs only if all pass. Trades settle on NEAR Intents' confidential balances, and the contract keeps a hash-chained log anyone can recompute.",
    useCase:
      "Depositors who want a managed fund without having to trust the manager. They see a verified share price, the mandate and every decision. An auditor granted a viewing key can open the full book in their own browser, and nobody else can.",
    design: [
      "The fund page puts the share price and the mandate next to each other, because the promise and its result are the product.",
      "Rejected proposals appear in the activity log in red, with the rule they broke. The failures are the proof the guardian works.",
      "The viewing key page decrypts the holdings in the browser. A wrong key simply shows no grant.",
      "Serif headings on a dark ledger layout with a single gold action colour. Transitions are Framer Motion.",
    ],
    highlights: [
      "The guardian's key is derived inside the enclave from the program hash and the calling contract, so a new build is a new key with no funds",
      "Proposals are sealed with HKDF-SHA256 and ChaCha20-Poly1305, and the chain carries only ciphertext",
      "Every mark and trade uses a quote signed by the venue, verified before it is trusted",
      "The mandate is frozen once the first depositor is in",
      "A forged message telling the manager to ignore its limits ends in a rejection from the guardian",
      "Deposits from Ethereum, Base, Arbitrum, Solana, Bitcoin and Polygon",
    ],
    role: "Everything: the NEAR contract, the enclave guardian and its mandate engine, the operator tooling and the app.",
  },
  {
    slug: "convoy",
    name: "Convoy",
    tagline: "Batch execution that hides size and timing",
    description:
      "Starknet's privacy pool hides who you are, not how much or when. Convoy cuts orders into identical lots and settles every order in a batch as one swap at one rate, so no single order can be picked out.",
    chain: "Starknet",
    category: "Privacy",
    year: "2026",
    featured: true,
    metrics: [
      { value: "3", label: "Batches settled on mainnet" },
      { value: "2", label: "Batches voided and refunded" },
      { value: "1", label: "Swap per batch, however many orders" },
    ],
    tech: ["Cairo", "Starknet", "STRK20", "Ekubo", "starknet.js", "Next.js", "GSAP"],
    preview: "/work/convoy.jpg",
    mobile: "/work/convoy-mobile.jpg",
    live: "https://convoy-brown.vercel.app",
    github: "https://github.com/Spagero763/convoy",
    status: "live",
    deployments: [
      {
        name: "Venue",
        address: "0x489be26596b25a288f35708f776b1dacd1dde52be25b9c178a6277f8c524f56",
        network: "Starknet mainnet",
        explorer:
          "https://voyager.online/contract/0x489be26596b25a288f35708f776b1dacd1dde52be25b9c178a6277f8c524f56",
      },
    ],
    problem:
      "A private swap still has a public leg, and that leg carries the size and the timing. Shield 1,337.42 STRK, swap 1,337.42 STRK forty seconds later, and the pool's guarantee has been undone by arithmetic anyone can do.",
    solution:
      "Three rules, stacked. Orders are whole numbers of one fixed lot, so sizes stop being fingerprints. A sealed batch leaves as a single swap at a single clearing rate, so the chain sees a sum and not its parts. Output is claimed later, into a fresh note, by whoever holds the order key. A batch that draws too few orders refuses to execute and refunds one for one.",
    useCase:
      "Anyone moving value out of the privacy pool into a public market without linking the trade back to their deposit. The venue runs on Starknet mainnet and routes STRK to USDC through Ekubo.",
    design: [
      "The board draws the batch exactly as the chain sees it, as stacked lots, so a user can see what an observer could learn.",
      "The size picker shows how many orders already hold each size and points to the one that buys the most cover.",
      "A page called What leaks lists what stays public next to what is hidden. A privacy tool that overclaims is worse than none.",
      "Wallet prompts are explained before they appear: committing raises two approvals, and the page says why.",
      "Mono type on a faint grid, with GSAP for batch progress and state changes.",
    ],
    highlights: [
      "Deployed and exercised end to end on Starknet mainnet",
      "Batch 005 settled a two lot order and a one lot order as one transaction at one rate",
      "Batches below the minimum order count void and refund instead of executing in a crowd too small to hide in",
      "Orders are bearer instruments: the claim key can be handed to anyone",
      "Redemption is pro rata from what the one swap actually returned, so there is no per-order price to correlate",
    ],
    role: "Everything: the Cairo venue contract, the batch lifecycle tooling, the mainnet deployment and the app.",
  },
  {
    slug: "bureau",
    name: "Bureau",
    tagline: "An autonomous FX desk on Celo",
    description:
      "A trading agent that compares the on-chain price of every Mento stablecoin with real exchange rates, trades the drift inside hard cost limits, and sells its live market data per call over x402.",
    chain: "Celo",
    category: "Agents",
    year: "2026",
    featured: false,
    metrics: [
      { value: "$3,391", label: "Desk volume, tagged on-chain" },
      { value: "1,147", label: "Trades" },
      { value: "14", label: "Currencies watched" },
    ],
    tech: ["TypeScript", "viem", "Mento SDK", "x402", "Express", "ERC-8004"],
    preview: "/work/bureau.jpg",
    live: "https://kiosk-three-topaz.vercel.app",
    github: "https://github.com/Spagero763/bureau",
    status: "live",
    problem:
      "Mento lists stablecoins for more than a dozen currencies, and their on-chain prices drift from real exchange rates with nobody watching most of them. The data that would show the drift is not sold anywhere an agent can buy it without opening an account.",
    solution:
      "A loop discovers every tradable Mento stable on-chain, ranks them by deviation from a reference rate, and buys the cheap side when the gap clears a threshold. A daily cost cap, per-trade sizing with a gas reserve, slippage limits and a kill switch bound the downside. The same data is sold per request: the server answers 402, the client signs a gasless USDC authorisation, and the data comes back.",
    useCase:
      "Other agents and developers who need live FX rates for Celo stablecoins and want to pay a cent per call with no API key. The dashboard gives anyone the same view for free, delayed.",
    design: [
      "One dashboard: a markets table with deviation in basis points, the desk's trade log with explorer links, and stat tiles backed by on-chain transactions.",
      "Cheap and rich are colour coded, so the drift worth trading is readable at a glance.",
    ],
    highlights: [
      "Stablecoins only, with a hard daily cost cap and an authenticated kill switch",
      "Discovers markets on-chain instead of reading a hardcoded pair list",
      "Pay per call data over x402, with no accounts and no API keys",
      "Registered on-chain as ERC-8004 agent 9675",
      "Selected for the Prezenti Season 3 builder cohort on Celo",
    ],
    role: "Everything: the trading engine, risk limits, the paid API and the dashboard.",
  },
  {
    slug: "kobo",
    name: "Kobo",
    tagline: "Send naira on-chain without holding CELO",
    description:
      "Naira payments on Celo where the network fee is paid in the token being sent. It works from a web app, a REST API, an MCP server and an agent skill, all on the same rails.",
    chain: "Celo",
    category: "Payments",
    year: "2026",
    featured: false,
    metrics: [
      { value: "2", label: "Naira stablecoins supported" },
      { value: "4", label: "Ways in: web, API, MCP, skill" },
      { value: "3", label: "Contracts on Celo mainnet" },
    ],
    tech: ["TypeScript", "Solidity", "viem", "Celo fee abstraction", "Mento", "x402", "MCP"],
    preview: "/work/kobo.jpg",
    mobile: "/work/kobo-mobile.jpg",
    live: "https://kobo-gamma.vercel.app",
    github: "https://github.com/Spagero763/kobo",
    status: "live",
    contracts: ["Circles", "Payout", "Personhood"],
    deployments: [
      {
        name: "Circles",
        address: "0xce0B075d9B2BA71F4C8097e3A43e7D1240505173",
        network: "Celo mainnet",
        explorer: celoscan("0xce0b075d9b2ba71f4c8097e3a43e7d1240505173"),
      },
      {
        name: "Payout",
        address: "0xdfCF531070a11c94464768547FF239E6BacF4B00",
        network: "Celo mainnet",
        explorer: celoscan("0xdfcf531070a11c94464768547ff239e6bacf4b00"),
      },
      {
        name: "Personhood",
        address: "0x2101de8279476359B4d33C3A5131634b2228c4aa",
        network: "Celo mainnet",
        explorer: celoscan("0x2101de8279476359b4d33c3a5131634b2228c4aa"),
      },
    ],
    problem:
      "Sending money home is the most common reason a Nigerian touches crypto, and the worst served. The usual on-chain version asks you to hold two assets, one of which exists only to pay fees, and to understand why a transfer failed for reasons that have nothing to do with your balance.",
    solution:
      "A naira stablecoin removes the currency problem and fee abstraction removes the gas problem. Kobo sends both naira stablecoins on Celo and takes the fee from whatever allowed token the sender already holds. The quote names the fee token before anything is signed. The recipient can be paid in their own currency, with the exchange settled in the same transaction.",
    useCase:
      "A person sends naira from the web app inside MiniPay. An agent sends naira by calling a tool. A seller checks whether a transfer alert is real by pasting its hash.",
    design: [
      "One narrow column sized for a phone inside MiniPay, where the wallet connects on its own.",
      "The fee token is named before the signature, instead of the transfer failing at the wallet.",
      "A Check tab reads the chain and says whether a payment really landed, which defeats faked transfer screenshots.",
    ],
    highlights: [
      "The sender never holds CELO, the fee asset or the destination currency",
      "Supports both NGNm and cNGN, which differ by twelve decimal places",
      "A token check reads decimals off each contract and fails if the registry disagrees",
      "Receipt verification sold at one cent per call over x402",
    ],
    role: "Everything: the contracts, the send and receipt API, the MCP server and the web app.",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const deploymentCount = projects.reduce((n, p) => n + (p.deployments?.length ?? 0), 0);
