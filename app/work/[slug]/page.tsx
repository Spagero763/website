import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, Github, Check } from "lucide-react";
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

const short = (a: string) => `${a.slice(0, 10)}...${a.slice(-8)}`;

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen pb-24">
      <header className="sticky top-0 z-50 border-b border-line bg-page/90 backdrop-blur">
        <div className="shell flex items-center justify-between py-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
          >
            <ArrowLeft size={15} />
            Back to work
          </Link>
          <Link href="/" className="font-mono text-sm font-semibold text-fg">
            afolabi<span className="text-accent">.</span>
          </Link>
        </div>
      </header>

      <div className="shell pt-14">
        <Reveal>
          <div className="mb-5 flex flex-wrap items-center gap-3 font-mono text-xs text-faint">
            <span className="flex items-center gap-2 rounded-md border border-line bg-surface px-2.5 py-1.5">
              <ChainLogo chain={project.chain} size={14} />
              <span className="text-fg">{project.chain}</span>
            </span>
            <span>{project.year}</span>
            {project.status === "live" && (
              <span className="rounded-md border border-ok-line bg-ok-soft px-2 py-1 font-semibold uppercase tracking-wide text-ok">
                Live
              </span>
            )}
            {project.status === "completed" && (
              <span className="rounded-md border border-line bg-elevated px-2 py-1 uppercase tracking-wide text-muted">
                Completed
              </span>
            )}
          </div>

          <h1 className="font-display text-4xl font-medium tracking-tightest text-fg sm:text-5xl">
            {project.name}
          </h1>
          <p className="mt-3 text-lg font-semibold text-accent">{project.tagline}</p>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{project.description}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Visit live
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 text-sm font-semibold text-fg transition-colors hover:border-[color:var(--line-strong)]"
              >
                <Github size={15} />
                Source code
              </a>
            )}
          </div>
        </Reveal>

        {project.preview && (
          <Reveal delay={0.1} className="mt-12">
            <div className="overflow-hidden rounded-lg border border-line">
              <Image
                src={project.preview}
                alt={`${project.name} preview`}
                width={1400}
                height={875}
                className="w-full object-cover"
                priority
              />
            </div>
          </Reveal>
        )}

        <Reveal delay={0.1}>
          <dl className="mt-12 grid grid-cols-3 gap-6 border-y border-line py-7">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <dt className="font-display text-xl font-medium text-fg sm:text-2xl">{m.value}</dt>
                <dd className="mt-1 text-xs text-faint">{m.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr]">
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
            {project.contracts && (
              <Reveal>
                <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Contracts</h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.contracts.map((c) => (
                    <li
                      key={c}
                      className="rounded border border-line bg-surface px-2 py-1 font-mono text-[11px] text-muted"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </div>

          <Reveal>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Highlights</h2>
            <ul className="mt-4 space-y-2.5">
              {project.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-3 rounded-md border border-line bg-surface p-3.5 text-sm leading-relaxed text-muted"
                >
                  <Check size={14} className="mt-0.5 flex-shrink-0 text-accent" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded border border-line bg-surface px-2 py-1 font-mono text-[11px] text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {project.deployments && (
          <Reveal className="mt-16">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              On-chain deployments
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
              Every address below is live on {project.deployments[0].network} and links to the block
              explorer, so you can read the deployed bytecode yourself.
            </p>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[34rem] border-collapse text-left">
                <thead>
                  <tr className="border-b border-line">
                    <th className="pb-2 pr-4 font-mono text-[11px] uppercase tracking-wider text-faint">
                      Contract
                    </th>
                    <th className="pb-2 pr-4 font-mono text-[11px] uppercase tracking-wider text-faint">
                      Address
                    </th>
                    <th className="pb-2 font-mono text-[11px] uppercase tracking-wider text-faint">
                      Network
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {project.deployments.map((d) => (
                    <tr key={d.address} className="border-b border-line">
                      <td className="py-3 pr-4 text-sm font-semibold text-fg">{d.name}</td>
                      <td className="py-3 pr-4">
                        <a
                          href={d.explorer}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-xs text-accent hover:underline"
                        >
                          {short(d.address)}
                          <ExternalLink size={11} />
                        </a>
                      </td>
                      <td className="py-3 font-mono text-xs text-muted">{d.network}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        )}

        <Reveal className="mt-16 border-t border-line pt-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-fg transition-colors hover:text-accent"
          >
            <ArrowLeft size={15} />
            See all work
          </Link>
        </Reveal>
      </div>
    </main>
  );
}
