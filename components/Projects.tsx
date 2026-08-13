"use client";

import { ExternalLink, Github, ArrowRight, ArrowUpRight, FileCode2 } from "lucide-react";
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
    <section id="projects" className="border-t border-line py-28">
      <div className="shell">
        <SectionHeading index="02" label="Selected work" title="Protocols I designed and shipped" />

        <div className="flex flex-col gap-24">
          {featured.map((project, i) => (
            <CaseStudy key={project.slug} project={project} index={i} flipped={i % 2 === 1} />
          ))}
        </div>

        {more.length > 0 && (
          <div className="mt-24">
            <Reveal className="mb-8 flex items-center gap-4">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">More work</h3>
              <span className="h-px flex-1 bg-line" />
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

function CaseStudy({
  project,
  index,
  flipped,
}: {
  project: Project;
  index: number;
  flipped: boolean;
}) {
  return (
    <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <Reveal className={flipped ? "lg:order-2" : ""}>
        <Link
          href={`/work/${project.slug}`}
          className="card card-hover group block overflow-hidden rounded-2xl p-2.5"
        >
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src={project.preview as string}
              alt={`${project.name} preview`}
              width={900}
              height={563}
              className="aspect-[16/10] w-full object-cover object-top transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            />
            <div className="absolute left-3 top-3 flex items-center gap-2 rounded-lg border border-line bg-surface/95 px-2.5 py-1.5 shadow-sm backdrop-blur">
              <ChainLogo chain={project.chain} size={15} />
              <span className="font-mono text-xs font-medium text-fg">{project.chain}</span>
            </div>
            {project.status === "live" && (
              <span className="absolute right-3 top-3 rounded-lg border border-ok-line bg-ok-soft px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-ok shadow-sm">
                Live
              </span>
            )}
            <span className="absolute bottom-3 right-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-lg bg-accent text-white opacity-0 shadow-card transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <ArrowUpRight size={16} />
            </span>
          </div>
        </Link>
      </Reveal>

      <Reveal delay={0.12} className={flipped ? "lg:order-1" : ""}>
        <div className="mb-5 flex items-center gap-3 font-mono text-xs text-faint">
          <span className="font-medium text-accent">{String(index + 1).padStart(2, "0")}</span>
          <span className="h-px w-8 bg-line-strong" />
          <span>{project.year}</span>
          <span className="text-line-strong">/</span>
          <span>{project.category}</span>
        </div>

        <h3 className="font-display text-3xl font-medium tracking-tightest text-fg sm:text-4xl">
          {project.name}
        </h3>
        <p className="mt-2 text-base font-semibold text-accent">{project.tagline}</p>

        <p className="mt-5 max-w-lg leading-relaxed text-muted">{project.description}</p>

        <dl className="mt-8 grid grid-cols-3 gap-5 border-y border-line py-6">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <dt className="font-display text-2xl font-medium tracking-tightest text-fg">
                {m.value}
              </dt>
              <dd className="mt-1 text-[11px] leading-tight text-faint">{m.label}</dd>
            </div>
          ))}
        </dl>

        {project.deployments && (
          <p className="mt-5 inline-flex items-center gap-2 rounded-lg border border-accent-line bg-accent-soft px-3 py-2 font-mono text-[11px] font-medium text-accent">
            <FileCode2 size={13} />
            {project.deployments.length}{" "}
            {project.deployments.length === 1 ? "address" : "addresses"} you can verify on{" "}
            {project.deployments[0].network}
          </p>
        )}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-[11px] text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Link
            href={`/work/${project.slug}`}
            className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white shadow-card transition-all hover:bg-accent-hover hover:shadow-lift"
          >
            Read case study
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              <ExternalLink size={14} />
              Live site
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
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
      <div className="card card-hover flex h-full flex-col rounded-2xl p-7">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ChainLogo chain={project.chain} size={18} />
            <span className="font-mono text-xs font-medium text-fg">{project.chain}</span>
          </div>
          <span className="rounded-md border border-line bg-elevated px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
            {project.category}
          </span>
        </div>

        <Link
          href={`/work/${project.slug}`}
          className="group inline-flex items-center gap-2 font-display text-xl font-medium text-fg transition-colors hover:text-accent"
        >
          {project.name}
          <ArrowUpRight
            size={16}
            className="text-faint transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
          />
        </Link>
        <p className="mt-1.5 text-sm font-semibold text-accent">{project.tagline}</p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

        {project.deployments && (
          <p className="mt-5 inline-flex items-center gap-2 self-start rounded-lg border border-accent-line bg-accent-soft px-2.5 py-1.5 font-mono text-[11px] font-medium text-accent">
            <FileCode2 size={12} />
            Deployed to {project.deployments[0].network}
          </p>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-5 border-t border-line pt-5">
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
              className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-accent"
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
              className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-accent"
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
