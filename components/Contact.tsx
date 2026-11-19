"use client";

import { ArrowUpRight, Download, Mail } from "lucide-react";
import Reveal from "./ui/Reveal";
import TextReveal from "./ui/TextReveal";
import Magnetic from "./ui/Magnetic";
import { CV, EMAIL, socials } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="ink relative z-[1] -mt-12 rounded-t-[2.5rem] pt-32 sm:rounded-t-[3.5rem]">
      <div className="shell">
        <Reveal variant="fade" className="flex items-center gap-4">
          <span className="font-mono text-xs font-medium text-ink-muted">05</span>
          <Reveal as="span" variant="line" delay={0.15} className="h-px w-14 origin-left bg-ink-line">
            {null}
          </Reveal>
          <span className="eyebrow text-ink-muted">Contact</span>
        </Reveal>

        <TextReveal
          as="h2"
          delay={0.1}
          className="mt-8 max-w-4xl font-display text-display font-medium text-ink-fg balance"
        >
          Hiring for a contract role? Let&apos;s talk.
        </TextReveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <Reveal delay={0.15}>
            <p className="max-w-xl text-lg leading-relaxed text-ink-muted pretty">
              I am available now and looking for smart contract, protocol or security work, full-time
              or contract. Send me the repo and what you need done, and I will tell you straight
              whether I am the right person for it.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Magnetic>
                <a
                  href={`mailto:${EMAIL}`}
                  className="btn btn-light !px-5 !py-4 text-[13px] sm:!px-7 sm:text-sm"
                >
                  <Mail size={16} className="flex-shrink-0" />
                  {EMAIL}
                  <ArrowUpRight size={16} className="hidden sm:block" />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={CV}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light !px-7 !py-4"
                >
                  <Download size={15} />
                  Download CV
                </a>
              </Magnetic>
            </div>
          </Reveal>

          <Reveal as="ul" className="border-t border-ink-line lg:mt-2" stagger={0.08} y={14}>
            {socials.map((s) => (
              <li key={s.label} className="border-b border-ink-line">
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 py-4"
                >
                  <span className="eyebrow text-ink-muted transition-colors group-hover:text-ink-fg">
                    {s.label}
                  </span>
                  <span className="flex items-center gap-2 font-mono text-sm text-ink-fg">
                    {s.handle}
                    <ArrowUpRight
                      size={14}
                      className="text-ink-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink-fg"
                    />
                  </span>
                </a>
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
