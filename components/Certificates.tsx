"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Maximize2, X } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image?: string;
  link?: string;
  linkLabel?: string;
};

const certificates: Certificate[] = [
  {
    title: "Claude Certified Architect",
    issuer: "DevCompass",
    date: "Jun 2026",
    description:
      "Building production applications on the Claude API: prompt engineering, tool use, and agent design.",
    image: "/claude-architect-certificate-devcompass.png",
    link: "https://www.devcompass.ai/course/claude-certified-architect-prep",
    linkLabel: "View course",
  },
  {
    title: "Starknet Developer Camp",
    issuer: "StarkWare / Starknet Foundation",
    date: "2025",
    description:
      "Cairo contract development, Starknet architecture, and deployment. The certificate is an NFT you can look up on-chain.",
    link: "https://starkscan.co/contract/0x07606caC9053e9B8B573A4b0A0cE608880F64869e24B8A605210d7a85bB6E5F1",
    linkLabel: "View on Starkscan",
  },
  {
    title: "Smart Contract Security & Auditing",
    issuer: "Cyfrin Updraft",
    date: "Jan 2025 - Jan 2026",
    description:
      "A year on auditing methodology, Solidity vulnerability patterns, advanced Foundry, and audit case studies.",
    link: "https://profiles.cyfrin.io/u/afolabispagero71/achievements",
    linkLabel: "View achievements",
  },
];

export default function Certificates() {
  const [lightbox, setLightbox] = useState<Certificate | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="certificates" className="border-t border-line py-28">
      <div className="shell">
        <SectionHeading index="07" label="Credentials" title="Certificates" />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {certificates.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.08} className="h-full">
              <div className="card card-hover flex h-full flex-col overflow-hidden rounded-2xl">
                {cert.image && (
                  <button
                    type="button"
                    onClick={() => setLightbox(cert)}
                    aria-label={`View ${cert.title} certificate`}
                    className="group relative block h-44 w-full overflow-hidden border-b border-line bg-page"
                  >
                    <Image
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      fill
                      className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </button>
                )}

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-lg font-medium text-fg">{cert.title}</h3>
                  <p className="mt-1.5 font-mono text-[11px] text-accent">
                    {cert.issuer} · {cert.date}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                    {cert.description}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-line pt-5">
                    {cert.image && (
                      <button
                        type="button"
                        onClick={() => setLightbox(cert)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-fg transition-colors hover:text-accent"
                      >
                        <Maximize2 size={12} />
                        View
                      </button>
                    )}
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-accent"
                      >
                        <ExternalLink size={12} />
                        {cert.linkLabel}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox?.image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-[rgba(12,12,16,0.82)] p-4 backdrop-blur-sm sm:p-10"
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setLightbox(null)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-lg border border-ink-line text-ink-muted transition-colors hover:text-ink-fg"
            >
              <X size={18} />
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl"
            >
              <Image
                src={lightbox.image}
                alt={`${lightbox.title} certificate`}
                width={1400}
                height={1000}
                className="h-auto max-h-[85vh] w-full rounded-xl bg-surface object-contain shadow-lift"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
