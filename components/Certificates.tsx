"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Award, Maximize2, X } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import Spotlight from "./ui/Spotlight";

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image?: string;
  link?: string;
  linkLabel?: string;
  status: "earned" | "in-progress";
};

const certificates: Certificate[] = [
  {
    title: "Claude Certified Architect Prep",
    issuer: "DevCompass",
    date: "2026",
    description:
      "Preparation program for Anthropic's Claude Certified Architect certification. Covers building production applications with Claude, the Claude API, prompt engineering, agents and tool use, and AI fluency.",
    image: "/claude-architect-certificate-devcompass.png",
    link: "https://www.devcompass.ai/course/claude-certified-architect-prep",
    linkLabel: "View course",
    status: "earned",
  },
  {
    title: "Starknet Developer Camp",
    issuer: "StarkWare / Starknet Foundation",
    date: "2025",
    description:
      "On-chain NFT certificate awarded to graduates of the Starknet Developer Camp. Covers Cairo smart contract development, Starknet architecture, and deploying production contracts.",
    link: "https://starkscan.co/contract/0x07606caC9053e9B8B573A4b0A0cE608880F64869e24B8A605210d7a85bB6E5F1",
    linkLabel: "View on Starkscan",
    status: "earned",
  },
  {
    title: "Smart Contract Security & Auditing",
    issuer: "Cyfrin Updraft",
    date: "2025 to Present",
    description:
      "Comprehensive security curriculum covering auditing methodology, Solidity vulnerability patterns, formal verification, advanced Foundry techniques, and real audit case studies.",
    link: "https://profiles.cyfrin.io/u/afolabispagero71/achievements",
    linkLabel: "View achievements",
    status: "in-progress",
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
    <section id="certificates" className="py-24 border-t border-line">
      <div className="shell">
        <SectionHeading index="06" label="Credentials" title="Certificates & training" />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {certificates.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.08} className="h-full">
              <Spotlight tilt={4} className="card-hairline group flex h-full flex-col overflow-hidden rounded-2xl transition-colors hover:border-white/20">
                {cert.image && (
                  <button
                    type="button"
                    onClick={() => setLightbox(cert)}
                    aria-label={`View ${cert.title} certificate`}
                    className="relative block h-52 w-full overflow-hidden border-b border-line bg-elevated"
                  >
                    <Image
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      fill
                      className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-ink/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-2 rounded-full border border-line bg-ink/80 px-4 py-2 text-xs font-medium text-fg backdrop-blur">
                        <Maximize2 size={13} />
                        View certificate
                      </span>
                    </span>
                  </button>
                )}

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-5 flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10">
                      <Award size={20} className="text-accent" />
                    </div>
                    <span
                      className={`rounded-full border px-2.5 py-1 text-xs font-medium ${
                        cert.status === "earned"
                          ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                          : "border-amber-500/20 bg-amber-500/10 text-amber-400"
                      }`}
                    >
                      {cert.status === "earned" ? "Earned" : "In progress"}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-medium text-fg">{cert.title}</h3>
                  <p className="mt-1 text-xs font-medium text-accent">
                    {cert.issuer} · {cert.date}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{cert.description}</p>

                  <div className="mt-5 flex items-center gap-4">
                    {cert.image && (
                      <button
                        type="button"
                        onClick={() => setLightbox(cert)}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-fg transition-colors hover:text-accent"
                      >
                        <Maximize2 size={12} />
                        View certificate
                      </button>
                    )}
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-muted transition-colors hover:text-fg"
                      >
                        <ExternalLink size={12} />
                        {cert.linkLabel}
                      </a>
                    )}
                  </div>
                </div>
              </Spotlight>
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
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm sm:p-10"
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface/70 text-muted transition-colors hover:text-fg"
            >
              <X size={18} />
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-4xl"
            >
              <Image
                src={lightbox.image}
                alt={`${lightbox.title} certificate`}
                width={1400}
                height={1000}
                className="h-auto max-h-[85vh] w-full rounded-xl object-contain"
              />
              <p className="mt-3 text-center font-mono text-xs text-faint">
                {lightbox.title} · {lightbox.issuer}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
