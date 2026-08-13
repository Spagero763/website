"use client";

import { ExternalLink, Github, ArrowRight, FileCode2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ChainLogo from "./ChainLogo";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { projects, type Project } from "@/data/projects";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="border-t border-line py-24">
      <div className="shell">
        <SectionHeading index="02" label="Selected work" title="Things I've shipped" />

        <div className="flex flex-col gap-20">
          {featured.map((project, i) => (
            <CaseStudy key={project.slug} project={project} index={i} flipped={i % 2 === 1} />
          ))}
        </div>

        {more.length > 0 && (
          <div className="mt-20">
            <Reveal className="mb-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-faint">More work</h3>
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
    <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <Reveal className={flipped ? "lg:order-2" : ""}>
        <Link
          href={`/work/${project.slug}`}
          className="group block overflow-hidden rounded-lg border border-line transition-colors hover:border-[color:var(--line-strong)]"
        >
          <div className="relative">
            <Image
              src={project.preview as string}
              alt={`${project.name} preview`}
              width={800}
              height={500}
              className="aspect-[16/10] w-full object-cover object-top"
            />
            <div className="absolute left-3 top-3 flex items-center gap-2 rounded-md border border-line bg-page/90 px-2.5 py-1.5 backdrop-blur">
              <ChainLogo chain={project.chain} size={15} />
              <span className="font-mono text-xs text-fg">{project.chain}</span>
            </div>
            {project.status === "live" && (
              <span className="absolute right-3 top-3 rounded-md border border-ok-line bg-ok-soft px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-ok">
                Live
              </span>
            )}
          </div>
        </Link>
      </Reveal>

      <Reveal delay={0.1} className={flipped ? "lg:order-1" : ""}>
        <div className="mb-4 flex items-center gap-3 font-mono text-xs text-faint">
          <span className="text-accent">{String(index + 1).padStart(2, "0")}</span>
          <span className="h-px w-6 bg-line" />
          <span>{project.year}</span>
        </div>

        <h3 className="font-display text-2xl font-medium tracking-tightest text-fg sm:text-3xl">
          {project.name}
        </h3>
        <p className="mt-1 text-sm font-semibold text-accent">{project.tagline}</p>

        <p className="mt-4 max-w-md leading-relaxed text-muted">{project.description}</p>

        <dl className="mt-7 grid grid-cols-3 gap-4 border-y border-line py-5">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <dt className="font-display text-lg font-medium text-fg sm:text-xl">{m.value}</dt>
              <dd className="mt-0.5 text-[11px] leading-tight text-faint">{m.label}</dd>
            </div>
          ))}
        </dl>

        {project.deployments && (
          <p className="mt-4 inline-flex items-center gap-2 rounded-md bg-accent-soft px-2.5 py-1.5 font-mono text-[11px] text-accent">
            <FileCode2 size={12} />
            {project.deployments.length}{" "}
            {project.deployments.length === 1 ? "contract" : "contracts"} verifiable on{" "}
            {project.deployments[0].network}
          </p>
        )}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded border border-line bg-surface px-2 py-0.5 font-mono text-[11px] text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-4">
          <Link
            href={`/work/${project.slug}`}
            className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Read case study
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
            >
              <ExternalLink size={14} />
              Live
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
            >
              <Github size={15} />
              Source
            </a>
          )}
        </div>
      </Reveal>
    </article>
  );
}

function MoreCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="panel flex h-full flex-col rounded-lg p-6 transition-colors hover:border-[color:var(--line-strong)]">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ChainLogo chain={project.chain} size={15} />
            <span className="font-mono text-xs text-faint">{project.chain}</span>
          </div>
          <span className="rounded border border-line bg-elevated px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
            {project.category}
          </span>
        </div>

        <Link
          href={`/work/${project.slug}`}
          className="font-display text-lg font-medium text-fg transition-colors hover:text-accent"
        >
          {project.name}
        </Link>
        <p className="mt-1 text-xs font-semibold text-accent">{project.tagline}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

        {project.deployments && (
          <p className="mt-4 font-mono text-[11px] text-accent">
            Deployed to {project.deployments[0].network}
          </p>
        )}

        <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-line pt-4">
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-fg transition-colors hover:text-accent"
          >
            Case study
            <ArrowRight size={12} />
          </Link>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-fg"
            >
              <ExternalLink size={12} />
              Live
            </a>
          )}
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
      </div>
    </Reveal>
  );
}
