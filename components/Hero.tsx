"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Github, Twitter, Linkedin, Send, Download, ArrowRight } from "lucide-react";
import CountUp from "./ui/CountUp";

const ease = [0.22, 1, 0.36, 1] as const;

const socials = [
  { label: "GitHub", href: "https://github.com/Spagero763", icon: Github },
  { label: "Twitter", href: "https://x.com/Spagero71", icon: Twitter },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/afolabi-ayomide-emmanuel-bba6b9367/", icon: Linkedin },
  { label: "Telegram", href: "https://t.me/Spagerobaseeth", icon: Send },
];

const stats = [
  { n: 292, l: "Pull requests merged" },
  { n: 64, l: "Repos I contributed to" },
  { n: 12, l: "Verifiable contract addresses" },
  { n: 6, l: "Chains deployed on" },
];

const HEADLINE = "I build on-chain protocols and test them like an attacker.";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="hero" className="relative overflow-hidden pb-20 pt-36 sm:pt-40">
      <div className="shell">
        <div className="grid items-center gap-14 lg:grid-cols-[1.55fr_1fr] lg:gap-20">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease }}
              className="flex items-center gap-4"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                Afolabi Ayomide Emmanuel
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.1, ease }}
                className="h-px w-16 origin-left bg-line-strong"
              />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Smart contract engineer
              </span>
            </motion.div>

            <h1 className="mt-7 font-display text-display font-medium text-fg">
              {reduce
                ? HEADLINE
                : HEADLINE.split(" ").map((word, i) => (
                    <span key={word + i} className="inline-block overflow-hidden align-bottom">
                      <motion.span
                        className="inline-block"
                        initial={{ y: "110%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.85, delay: 0.18 + i * 0.05, ease }}
                      >
                        {word}&nbsp;
                      </motion.span>
                    </span>
                  ))}
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease }}
            >
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
                I work in Solidity and Cairo. I have shipped a ten-contract identity and lending
                protocol, payment contracts that ran in production on Base for nine months, and a
                security watcher live on Mantle. Most of my recent code sits in other people&apos;s
                repositories, reviewed and merged by their maintainers, so you can read all of it.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-card transition-all hover:bg-accent-hover hover:shadow-lift"
                >
                  See the work
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href="/AFOLABI_AYOMIDE_EMMANUEL.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card card-hover inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-fg"
                >
                  <Download size={16} />
                  Download CV
                </a>
              </div>

              <p className="mt-7 text-sm text-faint">
                Open to smart contract, protocol and security roles. Remote or relocation.
              </p>

              <div className="mt-6 flex items-center gap-2">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="card card-hover flex h-10 w-10 items-center justify-center rounded-lg text-muted hover:text-accent"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease }}
            className="order-first mx-auto w-full max-w-[16rem] lg:order-none lg:max-w-none"
          >
            <div className="card rounded-2xl p-2.5">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="/avatar.jpg"
                  alt="Afolabi Ayomide Emmanuel"
                  width={640}
                  height={780}
                  className="aspect-[4/5] w-full object-cover object-top"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease }}
          className="card mt-20 grid grid-cols-2 rounded-2xl md:grid-cols-4"
        >
          {stats.map(({ n, l }, i) => (
            <div
              key={l}
              className={`px-6 py-7 sm:px-8 ${i % 2 === 1 ? "border-l border-line" : ""} ${
                i > 1 ? "border-t border-line md:border-t-0" : ""
              } ${i > 0 ? "md:border-l md:border-line" : ""}`}
            >
              <dt className="font-display text-stat font-medium text-fg">
                <CountUp to={n} />
              </dt>
              <dd className="mt-2 text-xs leading-snug text-faint">{l}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
