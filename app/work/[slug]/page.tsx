import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ExternalLink, Github, Check } from "lucide-react";
import { projects, getProject } from "@/data/projects";
import ChainLogo from "@/components/ChainLogo";
import Reveal from "@/components/ui/Reveal";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Work" };
  const title = `${project.name} | ${project.tagline}`;
  return {
    title,
    description: project.description,
    openGraph: { title, description: project.description, type: "article" },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen pb-28">
      <header className="sticky top-0 z-50 border-b border-line bg-ink/70 backdrop-blur-xl">
        <div className="shell flex items-center justify-between py-4">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg">
            <ArrowLeft size={15} />
            Back to work
          </Link>
          <Link href="/" className="font-mono text-sm font-semibold text-fg">
            afolabi<span className="text-accent">.</span>
          </Link>
        </div>
      </header>

      <div className="shell pt-16">
        <Reveal>
          <div className="mb-5 flex items-center gap-3 font-mono text-xs text-faint">
            <span className="flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5">
              <ChainLogo chain={project.chain} size={15} />
              <span className="text-fg">{project.chain}</span>
            </span>
            <span>{project.year}</span>
            {project.status === "live" && (
              <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Live
              </span>
            )}
          </div>

          <h1 className="font-display text-4xl font-medium tracking-tightest text-fg sm:text-5xl">
            {project.name}
          </h1>
          <p className="mt-3 text-lg text-accent">{project.tagline}</p>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{project.description}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-glow"
              >
                Visit live
                <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-fg transition-colors hover:border-white/25"
              >
                <Github size={15} />
                Source code
              </a>
            )}
          </div>
        </Reveal>

        {project.preview && (
          <Reveal delay={0.1} className="mt-12">
            <div className="card-hairline overflow-hidden rounded-2xl p-1.5 shadow-card">
              <Image
                src={project.preview}
                alt={`${project.name} preview`}
                width={1400}
                height={875}
                className="w-full rounded-[0.9rem] object-cover"
                priority
              />
            </div>
          </Reveal>
        )}

        <Reveal delay={0.1}>
          <div className="mt-14 grid grid-cols-3 gap-6 border-y border-line py-7">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <div className="font-display text-xl font-medium text-fg sm:text-2xl">{m.value}</div>
                <div className="mt-1 text-xs text-faint">{m.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-10">
            <Reveal>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">The problem</h2>
              <p className="mt-3 leading-relaxed text-muted">{project.problem}</p>
            </Reveal>
            <Reveal>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">The approach</h2>
              <p className="mt-3 leading-relaxed text-muted">{project.approach}</p>
            </Reveal>
            <Reveal>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">My role</h2>
              <p className="mt-3 leading-relaxed text-muted">{project.role}</p>
            </Reveal>
          </div>

          <Reveal>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Highlights</h2>
            <ul className="mt-4 space-y-3">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4 text-sm leading-relaxed text-muted">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border border-accent/30 bg-accent/10">
                    <Check size={12} className="text-accent" />
                  </span>
                  {h}
                </li>
              ))}
            </ul>

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
          </Reveal>
        </div>

        <Reveal className="mt-20 border-t border-line pt-10">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold text-fg transition-colors hover:text-accent">
            <ArrowLeft size={15} />
            See all work
          </Link>
        </Reveal>
      </div>
    </main>
  );
}
