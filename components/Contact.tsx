"use client";

import { ArrowUpRight, Github, Twitter, Linkedin, Send } from "lucide-react";
import Reveal from "./ui/Reveal";
import Magnetic from "./ui/Magnetic";

const socials = [
  { label: "GitHub", href: "https://github.com/Spagero763", icon: Github },
  { label: "Twitter", href: "https://x.com/Spagero71", icon: Twitter },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/afolabi-ayomide-emmanuel-bba6b9367/", icon: Linkedin },
  { label: "Telegram", href: "https://t.me/Spagerobaseeth", icon: Send },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />
      <div className="shell relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-accent">
            Contact
          </p>
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tightest text-fg sm:text-5xl">
            Let&apos;s build something{" "}
            <span className="font-serif italic font-normal text-gradient">worth trusting</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted">
            Open to smart contract roles, security auditing, and freelance engagements.
            If you&apos;re building on-chain and need someone who treats security as
            non-negotiable, reach out.
          </p>

          <div className="mt-9 flex justify-center">
            <Magnetic>
              <a
                href="mailto:afolabiayomide870@gmail.com"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-glow"
              >
                afolabiayomide870@gmail.com
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-faint transition-colors hover:border-[color:var(--line-strong)] hover:text-fg"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
