"use client";

import { ArrowRight, Github, Twitter, Linkedin, Send, Mail } from "lucide-react";
import Reveal from "./ui/Reveal";

const socials = [
  { label: "GitHub", href: "https://github.com/Spagero763", icon: Github },
  { label: "Twitter", href: "https://x.com/Spagero71", icon: Twitter },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/afolabi-ayomide-emmanuel-bba6b9367/",
    icon: Linkedin,
  },
  { label: "Telegram", href: "https://t.me/Spagerobaseeth", icon: Send },
];

const EMAIL = "afolabiayomide870@gmail.com";

export default function Contact() {
  return (
    <section id="contact" className="ink py-32">
      <div className="shell">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs font-medium text-ink-muted">08</span>
            <span className="h-px w-14 bg-ink-line" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
              Contact
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-3xl font-display text-display font-medium text-ink-fg balance">
            Hiring for a contract role? Let&apos;s talk.
          </h2>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted">
            I am available now and looking for smart contract, protocol or security work, full-time
            or contract. Send me the repo and what you need done, and I will tell you straight
            whether I am the right person for it.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center gap-2.5 rounded-lg bg-ink-fg px-6 py-4 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
            >
              <Mail size={16} />
              {EMAIL}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/AFOLABI_AYOMIDE_EMMANUEL.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-ink-line px-6 py-4 text-sm font-semibold text-ink-fg transition-colors hover:bg-ink-surface"
            >
              Download CV
            </a>
          </div>

          <div className="mt-12 flex items-center gap-2.5">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-ink-line text-ink-muted transition-colors hover:bg-ink-surface hover:text-ink-fg"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
