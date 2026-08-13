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
    <section id="contact" className="border-t border-line py-28">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-accent">Contact</p>
          <h2 className="font-display text-4xl font-medium leading-[1.1] tracking-tightest text-fg sm:text-5xl">
            Hiring for a contract role? Let&apos;s talk.
          </h2>
          <p className="mt-6 leading-relaxed text-muted">
            I&apos;m looking for smart contract, protocol, or security work, full-time or contract.
            Send me the repo and what you need done and I&apos;ll tell you straight whether I&apos;m
            the right person for it.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <Mail size={15} />
              {EMAIL}
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/AFOLABI_AYOMIDE_EMMANUEL.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-line px-6 py-3.5 text-sm font-semibold text-fg transition-colors hover:border-[color:var(--line-strong)]"
            >
              Download CV
            </a>
          </div>

          <div className="mt-10 flex items-center gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-faint transition-colors hover:border-[color:var(--line-strong)] hover:text-fg"
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
