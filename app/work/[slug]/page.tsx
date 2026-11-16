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
    openGraph: {
      title,
      description: project.description,
      type: "article",
      images: [{ url: project.preview, width: 1600, height: 1000 }],
    },
  };
}

const short = (a: string) =>
  a.startsWith("0x") && a.length > 24 ? `${a.slice(0, 10)}...${a.slice(-8)}` : a;

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
            {project.status === "live" ? (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-ok-line bg-ok-soft px-2.5 py-1 font-semibold uppercase tracking-wide text-ok">
                <span className="h-1.5 w-1.5 rounded-full bg-ok" />
                Live
              </span>
            ) : (
              <span className="rounded-full border border-line bg-elevated px-2.5 py-1 uppercase tracking-wide text-muted">
                Testnet
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
                    Open the product
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

        <div className="shell mt-16">
          <Reveal mode="load" variant="clip" delay={0.5} duration={1.1} className="rounded-3xl">
            <Parallax className="rounded-3xl border border-line shadow-deck" amount={6} scale={1.08}>
              <Image
                src={project.preview}
                alt={`${project.name} on desktop`}
                width={1600}
                height={1000}
                sizes="(min-width: 1280px) 1200px, 100vw"
                className="aspect-[16/10] w-full object-cover object-top"
                priority
              />
            </Parallax>
          </Reveal>
        </div>

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
                <dd className="mt-2 max-w-[16rem] text-xs leading-snug text-faint">{m.label}</dd>
              </div>
            ))}
          </Reveal>

          <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.15fr] lg:gap-24">
            <div className="space-y-14">
              <Block label="The problem" text={project.problem} />
              <Block label="The solution" text={project.solution} />
              <Block label="Who it is for" text={project.useCase} />
              <Block label="My role" text={project.role} />
            </div>

            <div>
              <Reveal>
                <h2 className="eyebrow text-accent">What is in it</h2>
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
        </div>

        <section className="mt-28 border-y border-line bg-surface py-24">
          <div
            className={`shell grid grid-cols-1 items-center gap-14 ${
              project.mobile ? "lg:grid-cols-[minmax(0,19rem)_1fr] lg:gap-24" : ""
            }`}
          >
            {project.mobile && (
              <Reveal variant="clip" duration={1.1} className="mx-auto w-full max-w-[17rem] rounded-[2.4rem] lg:max-w-none">
                <div className="rounded-[2.4rem] border border-line-strong bg-ink p-2 shadow-deck">
                  <Image
                    src={project.mobile}
                    alt={`${project.name} on a phone`}
                    width={780}
                    height={1688}
                    sizes="19rem"
                    className="aspect-[390/844] w-full rounded-[1.9rem] object-cover object-top"
                  />
                </div>
              </Reveal>
            )}

            <div>
              <Reveal>
                <h2 className="eyebrow text-accent">Interface and motion</h2>
              </Reveal>
              <TextReveal
                as="p"
                className="mt-5 max-w-2xl font-display text-2xl font-medium leading-snug text-fg sm:text-3xl"
              >
                I designed and built the interface as well. These are the decisions behind it.
              </TextReveal>
              <Reveal as="ol" className="mt-10 border-t border-line" stagger={0.08} y={16}>
                {project.design.map((d, i) => (
                  <li
                    key={d}
                    className="grid grid-cols-[2.5rem_1fr] gap-2 border-b border-line py-5 text-base leading-relaxed text-muted pretty"
                  >
                    <span className="pt-1 font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                    {d}
                  </li>
                ))}
              </Reveal>
            </div>
          </div>
        </section>

        <div className="shell">
          {project.deployments && (
            <div className="mt-28">
              <Reveal>
                <h2 className="eyebrow text-accent">On-chain deployments</h2>
              </Reveal>
              <TextReveal
                as="p"
                className="mt-5 max-w-2xl font-display text-2xl font-medium leading-snug text-fg sm:text-3xl"
              >
                {project.deployments.length === 1 ? "This address is" : "Every address below is"} live on{" "}
                {project.deployments[0].network} and links to the block explorer, so you can read
                what is deployed yourself.
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
                          key={d.name}
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

          {project.proof && (
            <div className="mt-28">
              <Reveal>
                <h2 className="eyebrow text-accent">Proof on mainnet</h2>
              </Reveal>
              <TextReveal
                as="p"
                className="mt-5 max-w-2xl font-display text-2xl font-medium leading-snug text-fg sm:text-3xl"
              >
                No contract holds a balance here, so the proof is the transactions themselves.
              </TextReveal>
              <Reveal as="ul" className="mt-10 border-t border-line" stagger={0.07} y={14}>
                {project.proof.map((p) => (
                  <li key={p.href} className="border-b border-line">
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group grid grid-cols-[1fr_auto] items-center gap-6 py-5"
                    >
                      <span>
                        <span className="block text-base font-semibold text-fg">{p.label}</span>
                        <span className="mt-1 block text-sm text-muted">{p.detail}</span>
                      </span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-all duration-500 ease-out group-hover:border-fg group-hover:bg-fg group-hover:text-page">
                        <ArrowUpRight
                          size={15}
                          className="transition-transform duration-500 ease-out group-hover:rotate-45"
                        />
                      </span>
                    </a>
                  </li>
                ))}
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
