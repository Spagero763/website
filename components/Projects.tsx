"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ChainLogo from "./ChainLogo";
import SectionHeading from "./ui/SectionHeading";
import Magnetic from "./ui/Magnetic";
import Spotlight from "./ui/Spotlight";
import Reveal from "./ui/Reveal";
import { projects, type Project } from "@/data/projects";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 border-t border-line">
      <div className="shell">
        <SectionHeading index="02" label="Selected work" title="Things I've shipped" />

        <div className="flex flex-col gap-24 sm:gap-28">
          {featured.map((project, i) => (
            <CaseStudy key={project.slug} project={project} index={i} flipped={i % 2 === 1} />
          ))}
        </div>

        {more.length > 0 && (
          <div className="mt-24">
            <Reveal className="mb-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">More work</h3>
            </Reveal>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {more.map((project, i) => (
                <MoreCard key={project.slug} project={project} delay={i * 0.08} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function CaseStudy({ project, index, flipped }: { project: Project; index: number; flipped: boolean }) {
  return (
    <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
      <motion.div
        initial={{ opacity: 0, x: flipped ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease }}
        className={`group relative ${flipped ? "lg:order-2" : ""}`}
      >
        <Spotlight className="card-hairline relative overflow-hidden rounded-2xl p-1.5 shadow-card">
          <Link href={`/work/${project.slug}`} className="relative block overflow-hidden rounded-[0.9rem]">
            <Image
              src={project.preview as string}
              alt={`${project.name} preview`}
              width={800}
              height={500}
              className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent" />
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-line bg-ink/70 px-3 py-1.5 backdrop-blur">
              <ChainLogo chain={project.chain} size={16} />
              <span className="font-mono text-xs text-fg">{project.chain}</span>
            </div>
            {project.status === "live" && (
              <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-400 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Live
              </span>
            )}
          </Link>
        </Spotlight>
        <div className={`absolute -z-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl ${flipped ? "-left-6 -bottom-6" : "-right-6 -bottom-6"}`} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.1, ease }}
        className={flipped ? "lg:order-1" : ""}
      >
        <div className="mb-4 flex items-center gap-3 font-mono text-xs text-faint">
          <span className="text-accent">{String(index + 1).padStart(2, "0")}</span>
          <span className="h-px w-6 bg-line" />
          <span>{project.year}</span>
        </div>

        <h3 className="font-display text-2xl font-medium tracking-tightest text-fg sm:text-3xl">
          {project.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-accent">{project.tagline}</p>

        <p className="mt-4 max-w-md leading-relaxed text-muted">{project.description}</p>

        <div className="mt-7 grid grid-cols-3 gap-4 border-y border-line py-5">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <div className="font-display text-lg font-medium text-fg sm:text-xl">{m.value}</div>
              <div className="mt-0.5 text-[11px] leading-tight text-faint">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-line bg-surface px-2 py-0.5 font-mono text-[11px] text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Magnetic strength={0.25}>
            <Link
              href={`/work/${project.slug}`}
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-glow"
            >
              Read case study
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Magnetic>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2.5 text-sm text-muted transition-colors hover:text-fg"
            >
              <ExternalLink size={14} />
              Live demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2.5 text-sm text-muted transition-colors hover:text-fg"
            >
              <Github size={15} />
              Source
            </a>
          )}
        </div>
      </motion.div>
    </article>
  );
}

function MoreCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <Spotlight tilt={4} className="card-hairline group flex h-full flex-col rounded-2xl p-6 transition-colors hover:border-white/20">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ChainLogo chain={project.chain} size={16} />
            <span className="font-mono text-xs text-faint">{project.chain}</span>
          </div>
          <span className="rounded-full border border-line bg-elevated px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted">
            {project.category}
          </span>
        </div>

        <Link href={`/work/${project.slug}`} className="font-display text-lg font-medium text-fg transition-colors hover:text-accent">
          {project.name}
        </Link>
        <p className="mt-1 text-xs font-medium text-accent">{project.tagline}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

        <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-line pt-4">
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-fg transition-colors hover:text-accent"
          >
            Case study
            <ArrowUpRight size={12} />
          </Link>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-fg"
            >
              <Github size={12} />
              Source
            </a>
          )}
        </div>
      </Spotlight>
    </Reveal>
  );
}
