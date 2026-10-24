import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, ExternalLink, Github, Check } from "lucide-react";
import { projects, getProject } from "@/data/projects";
import ChainLogo from "@/components/ChainLogo";
import CaseHeader from "@/components/CaseHeader";
import NextProject from "@/components/NextProject";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";
import TextReveal from "@/components/ui/TextReveal";
import Parallax from "@/components/ui/Parallax";
import Magnetic from "@/components/ui/Magnetic";

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
    alternates: { canonical: `/work/${slug}` },
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

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <CaseHeader />
      <main className="min-h-screen">
        <div className="shell pt-36 sm:pt-40">
          <Reveal
            mode="load"
            variant="fade"
            className="mb-8 flex flex-wrap items-center gap-3 font-mono text-xs text-faint"
          >
            <span className="flex items-center gap-2 rounded-full border border-line bg-surface py-1.5 pl-2 pr-3">
              <ChainLogo chain={project.chain} size={15} />
              <span className="font-medium text-fg">{project.chain}</span>
            </span>
            <span>{project.year}</span>
            <span className="text-line-strong">/</span>
            <span>{project.category}</span>
            {project.status === "live" && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-ok-line bg-ok-soft px-2.5 py-1 font-semibold uppercase tracking-wide text-ok">
                <span className="h-1.5 w-1.5 rounded-full bg-ok" />
                Live
              </span>
            )}
            {project.status === "completed" && (
              <span className="rounded-full border border-line bg-elevated px-2.5 py-1 uppercase tracking-wide text-muted">
                Completed
              </span>
            )}
          </Reveal>

          <TextReveal
            as="h1"
            mode="load"
            delay={0.1}
            className="max-w-5xl font-display text-hero font-medium text-fg balance"
          >
            {project.name}
          </TextReveal>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
            <Reveal mode="load" delay={0.45}>
              <p className="text-xl font-semibold text-accent">{project.tagline}</p>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted pretty">
                {project.description}
              </p>
            </Reveal>

            <Reveal mode="load" delay={0.6} className="flex flex-wrap items-center gap-3 lg:justify-end">
              {project.live && (
                <Magnetic>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Visit live site
                    <ArrowUpRight size={15} />
                  </a>
                </Magnetic>
              )}
              {project.github && (
                <Magnetic>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                  >
                    <Github size={15} />
                    Source code
                  </a>
                </Magnetic>
              )}
            </Reveal>
          </div>
        </div>

        {project.preview && (
          <div className="shell mt-16">
            <Reveal mode="load" variant="clip" delay={0.5} duration={1.1} className="rounded-3xl">
              <Parallax className="rounded-3xl border border-line shadow-deck" amount={8} scale={1.12}>
                <Image
                  src={project.preview}
                  alt={`${project.name} preview`}
                  width={1600}
                  height={1000}
                  className="aspect-[16/9] w-full object-cover object-top"
                  priority
                />
              </Parallax>
            </Reveal>
          </div>
        )}

        <div className="shell">
          <Reveal
            as="dl"
            className="mt-16 grid grid-cols-1 border-t border-line sm:grid-cols-3"
            stagger={0.1}
          >
            {project.metrics.map((m, i) => (
              <div
                key={m.label}
                className={`py-8 ${i > 0 ? "border-t border-line sm:border-l sm:border-t-0 sm:pl-8" : ""}`}
              >
                <dt className="font-display text-stat font-medium text-fg">{m.value}</dt>
                <dd className="mt-2 text-xs text-faint">{m.label}</dd>
              </div>
            ))}
          </Reveal>

          <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.15fr] lg:gap-24">
            <div className="space-y-14">
              <Block label="The problem" text={project.problem} />
              <Block label="The approach" text={project.approach} />
              <Block label="My role" text={project.role} />
              {project.contracts && (
                <Reveal>
                  <h2 className="eyebrow text-accent">Contracts</h2>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.contracts.map((c) => (
                      <li
                        key={c}
                        className="rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-[11px] text-muted"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}
            </div>

            <div>
              <Reveal>
                <h2 className="eyebrow text-accent">Highlights</h2>
              </Reveal>
              <Reveal as="ul" className="mt-6 border-t border-line" stagger={0.08} y={16}>
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-4 border-b border-line py-5 text-base leading-relaxed text-muted pretty"
                  >
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                      <Check size={11} strokeWidth={3} />
                    </span>
                    {h}
                  </li>
                ))}
              </Reveal>

              <Reveal className="mt-8 flex flex-wrap gap-2" stagger={0.04} y={10}>
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-[11px] text-muted"
                  >
                    {t}
                  </span>
                ))}
              </Reveal>
            </div>
          </div>

          {project.deployments && (
            <div className="mt-28">
              <Reveal>
                <h2 className="eyebrow text-accent">On-chain deployments</h2>
              </Reveal>
              <TextReveal
                as="p"
                className="mt-5 max-w-2xl font-display text-2xl font-medium leading-snug text-fg sm:text-3xl"
              >
                Every address below is live on {project.deployments[0].network} and links to the
                block explorer, so you can read the deployed bytecode yourself.
              </TextReveal>
              <Reveal className="card mt-10 overflow-hidden rounded-2xl" variant="fade">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[34rem] border-collapse text-left">
                    <thead>
                      <tr className="border-b border-line bg-page">
                        <th className="eyebrow px-6 py-4 font-normal text-faint">Contract</th>
                        <th className="eyebrow px-6 py-4 font-normal text-faint">Address</th>
                        <th className="eyebrow px-6 py-4 font-normal text-faint">Network</th>
                      </tr>
                    </thead>
                    <Reveal as="tbody" stagger={0.06} y={10}>
                      {project.deployments.map((d, i) => (
                        <tr
                          key={d.address}
                          className={`transition-colors hover:bg-page ${i > 0 ? "border-t border-line" : ""}`}
                        >
                          <td className="px-6 py-4 text-sm font-semibold text-fg">{d.name}</td>
                          <td className="px-6 py-4">
                            <a
                              href={d.explorer}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link-underline inline-flex items-center gap-1.5 font-mono text-xs text-accent"
                            >
                              {short(d.address)}
                              <ExternalLink size={11} />
                            </a>
                          </td>
                          <td className="px-6 py-4 font-mono text-xs text-muted">{d.network}</td>
                        </tr>
                      ))}
                    </Reveal>
                  </table>
                </div>
              </Reveal>
            </div>
          )}
        </div>

        <NextProject project={next} />
      </main>
      <Footer />
    </>
  );
}

function Block({ label, text }: { label: string; text: string }) {
  return (
    <Reveal>
      <h2 className="eyebrow text-accent">{label}</h2>
      <p className="mt-5 text-lg leading-relaxed text-muted pretty">{text}</p>
    </Reveal>
  );
}
