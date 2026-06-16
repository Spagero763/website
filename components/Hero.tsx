"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Send, Download, ArrowUpRight } from "lucide-react";
import Magnetic from "./ui/Magnetic";
import CountUp from "./ui/CountUp";
import { TypeAnimation } from "react-type-animation";

const socials = [
  { label: "GitHub", href: "https://github.com/Spagero763", icon: Github },
  { label: "Twitter", href: "https://x.com/Spagero71", icon: Twitter },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/afolabi-ayomide-emmanuel-bba6b9367/", icon: Linkedin },
  { label: "Telegram", href: "https://t.me/Spagerobaseeth", icon: Send },
];

const stats = [
  { n: "7", l: "Products shipped" },
  { n: "6", l: "Chains shipped" },
  { n: "14", l: "Contracts in one protocol" },
];

const chains = ["Avalanche", "Base", "Celo", "Starknet", "Mantle", "Stellar"];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16">
      <Backdrop />

      <div className="shell relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 mb-7 rounded-full border border-line bg-surface/60 px-3 py-1.5 backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-medium tracking-wide text-muted">
                Available for work
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease }}
              className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-5"
            >
              Afolabi Ayomide Emmanuel
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] font-medium leading-[1.05] tracking-tightest text-fg"
            >
              I build{" "}
              <span className="font-serif italic font-normal text-gradient">secure</span>{" "}
              on-chain systems people can trust.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-5 font-mono text-sm text-muted"
            >
              <span className="text-accent">$</span>{" "}
              <TypeAnimation
                sequence={[
                  "building secure smart contracts",
                  2000,
                  "auditing for vulnerabilities",
                  2000,
                  "shipping on EVM and Starknet",
                  2000,
                  "optimizing gas, every wei",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                className="text-fg"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease }}
              className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-muted"
            >
              Smart contract engineer shipping production identity protocols, payment
              infrastructure, and private trading across EVM and Starknet. Security and
              gas efficiency come first, always.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Magnetic>
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform"
                >
                  View my work
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Magnetic>
              <a
                href="/AFOLABI_AYOMIDE_EMMANUEL.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/50 px-6 py-3 text-sm font-semibold text-fg backdrop-blur transition-colors hover:border-[color:var(--line-strong)]"
              >
                <Download size={15} />
                Download CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-8 flex items-center gap-1"
            >
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-faint transition-colors hover:bg-elevated hover:text-fg"
                >
                  <Icon size={17} />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="card-hairline relative overflow-hidden rounded-3xl p-1.5 shadow-card">
              <div className="relative overflow-hidden rounded-[1.35rem]">
                <Image
                  src="/avatar.jpg"
                  alt="Afolabi Ayomide Emmanuel"
                  width={640}
                  height={720}
                  className="aspect-[4/5] w-full object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-line bg-ink/70 p-4 backdrop-blur">
                  <div className="flex items-center justify-between font-mono text-[11px] text-muted">
                    <span className="text-fg">status</span>
                    <span className="text-emerald-400">deployed</span>
                  </div>
                  <div className="mt-1 flex items-center justify-between font-mono text-[11px] text-muted">
                    <span className="text-fg">focus</span>
                    <span>solidity / cairo</span>
                  </div>
                  <div className="mt-1 flex items-center justify-between font-mono text-[11px] text-muted">
                    <span className="text-fg">audited</span>
                    <span>security-first</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -right-6 -top-6 -z-10 h-40 w-40 rounded-full bg-accent/30 blur-3xl" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          className="mt-16 grid grid-cols-3 gap-6 border-t border-line pt-8 max-w-2xl"
        >
          {stats.map(({ n, l }) => (
            <div key={l}>
              <CountUp value={n} className="font-display text-2xl sm:text-3xl font-medium text-fg" />
              <div className="mt-1 text-xs text-faint">{l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <ChainMarquee items={chains} />
    </section>
  );
}

function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent 75%)",
        }}
      />
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-24 top-10 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 top-1/3 h-[24rem] w-[24rem] rounded-full bg-accent-2/10 blur-[120px]"
      />
    </div>
  );
}

function ChainMarquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="absolute bottom-0 left-0 right-0 border-t border-line bg-ink/40 py-3 backdrop-blur">
      <div className="flex w-max animate-marquee items-center gap-12 px-6">
        {row.map((c, i) => (
          <span key={`${c}-${i}`} className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
