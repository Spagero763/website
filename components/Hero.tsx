"use client";

import Image from "next/image";
import { Github, Twitter, Linkedin, Send, Download, ArrowRight } from "lucide-react";

const socials = [
  { label: "GitHub", href: "https://github.com/Spagero763", icon: Github },
  { label: "Twitter", href: "https://x.com/Spagero71", icon: Twitter },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/afolabi-ayomide-emmanuel-bba6b9367/", icon: Linkedin },
  { label: "Telegram", href: "https://t.me/Spagerobaseeth", icon: Send },
];

const stats = [
  { n: "292", l: "Merged pull requests" },
  { n: "64", l: "Repos contributed to" },
  { n: "6", l: "Chains deployed on" },
];

export default function Hero() {
  return (
    <section id="hero" className="border-b border-line pt-32 pb-16">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-20 lg:items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-faint">
              Afolabi Ayomide Emmanuel
            </p>

            <h1 className="mt-5 font-display text-4xl font-medium leading-[1.08] tracking-tightest text-fg sm:text-5xl">
              I build on-chain protocols and test them like an attacker.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Smart contract engineer working in Solidity and Cairo. I have shipped a
              ten-contract identity and lending protocol, payment contracts running on Celo
              and Base, and a security watcher on Mantle. Most of my recent work is merged
              into other people&apos;s repositories, so you can read it.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                See the work
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="/AFOLABI_AYOMIDE_EMMANUEL.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 text-sm font-semibold text-fg transition-colors hover:border-[color:var(--line-strong)]"
              >
                <Download size={15} />
                Download CV
              </a>
            </div>

            <div className="mt-9 flex items-center gap-1">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-md text-faint transition-colors hover:bg-elevated hover:text-fg"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div className="order-first w-full max-w-[15rem] lg:order-none lg:max-w-none">
            <div className="overflow-hidden rounded-lg border border-line">
              <Image
                src="/avatar.jpg"
                alt="Afolabi Ayomide Emmanuel"
                width={640}
                height={720}
                className="aspect-[4/5] w-full object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>

        <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-8 border-t border-line pt-8">
          {stats.map(({ n, l }) => (
            <div key={l}>
              <dt className="font-display text-3xl font-medium tracking-tightest text-fg">{n}</dt>
              <dd className="mt-1 text-xs leading-snug text-faint">{l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
