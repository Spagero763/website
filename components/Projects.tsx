"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, ExternalLink, FileCode2, Github } from "lucide-react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { scrollToTarget } from "@/lib/scroll";
import ChainLogo from "./ChainLogo";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import TextReveal from "./ui/TextReveal";
import TransitionLink from "./TransitionLink";
import { projects, type Project } from "@/data/projects";

const RADIUS = 26;
const CIRC = 2 * Math.PI * RADIUS;
const pad = (n: number) => String(n).padStart(2, "0");

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);
  const stage = useRef<HTMLDivElement>(null);
  const trigger = useRef<ScrollTrigger | null>(null);
  const n = featured.length;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const el = stage.current;
        if (!el) return;
        const images = gsap.utils.toArray<HTMLElement>("[data-stage-image]", el);
        const texts = gsap.utils.toArray<HTMLElement>("[data-stage-text]", el);
        const dots = gsap.utils.toArray<HTMLElement>("[data-stage-dot]", el);
        const ring = el.querySelector("[data-ring]");
        const counter = el.querySelector("[data-counter]");

        gsap.set(images.slice(1), { clipPath: "inset(100% 0 0 0)" });
        gsap.set(
          images.slice(1).map((i) => i.firstElementChild),
          { scale: 1.12 }
        );
        gsap.set(texts.slice(1), { autoAlpha: 0, y: 36 });
        gsap.set(ring, { strokeDasharray: CIRC, strokeDashoffset: CIRC });

        let current = -1;
        const setCurrent = (i: number) => {
          if (i === current) return;
          current = i;
          if (counter) counter.textContent = pad(i + 1);
          dots.forEach((d, j) => d.classList.toggle("is-active", j === i));
        };
        setCurrent(0);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            pin: true,
            start: "top top",
            end: () => `+=${(n - 1) * 70}%`,
            scrub: 0.7,
            snap: {
              snapTo: 1 / (n - 1),
              duration: { min: 0.2, max: 0.5 },
              delay: 0.05,
              ease: "power2.inOut",
            },
            onUpdate: (self) => setCurrent(Math.round(self.progress * (n - 1))),
          },
        });
        trigger.current = tl.scrollTrigger ?? null;

        for (let i = 1; i < n; i++) {
          const at = i - 1;
          tl.to(images[i], { clipPath: "inset(0% 0 0 0)", duration: 1, ease: "none" }, at)
            .to(images[i].firstElementChild, { scale: 1, duration: 1, ease: "none" }, at)
            .to(images[i - 1].firstElementChild, { yPercent: -12, duration: 1, ease: "none" }, at)
            .to(texts[i - 1], { autoAlpha: 0, y: -36, duration: 0.45, ease: "none" }, at)
            .to(texts[i], { autoAlpha: 1, y: 0, duration: 0.45, ease: "none" }, at + 0.55);
        }
        tl.to(ring, { strokeDashoffset: 0, duration: n - 1, ease: "none" }, 0);

        const onKey = (e: KeyboardEvent) => {
          const st = trigger.current;
          if (!st || !st.isActive) return;
          if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
          const next = gsap.utils.clamp(0, n - 1, current + (e.key === "ArrowRight" ? 1 : -1));
          if (next === current) return;
          e.preventDefault();
          scrollToTarget(st.start + ((st.end - st.start) * next) / (n - 1));
        };
        window.addEventListener("keydown", onKey);

        return () => {
          window.removeEventListener("keydown", onKey);
          trigger.current = null;
        };
      });
      return () => mm.revert();
    },
    { scope: stage }
  );

  const jump = (i: number) => {
    const st = trigger.current;
    if (!st) return;
    scrollToTarget(st.start + ((st.end - st.start) * i) / (n - 1));
  };

  return (
    <section id="projects" className="border-t border-line pb-40">
      {/* desktop: pinned stage */}
      <div ref={stage} className="hidden lg:block">
        <div className="shell flex h-[100svh] flex-col pb-7 pt-[calc(var(--nav-h)+1rem)]">
          <div className="flex items-end justify-between gap-8 border-b border-line pb-5">
            <div>
              <Reveal variant="fade" className="flex items-center gap-4">
                <span className="font-mono text-xs font-medium text-accent">02</span>
                <Reveal as="span" variant="line" delay={0.15} className="h-px w-14 origin-left bg-line-strong">
                  {null}
                </Reveal>
                <span className="eyebrow text-muted">Selected work</span>
              </Reveal>
              <TextReveal
                as="h2"
                delay={0.1}
                className="mt-4 font-display text-section font-medium text-fg"
              >
                Protocols I designed and shipped
              </TextReveal>
            </div>

            <div className="flex items-center gap-5">
              <span className="max-w-[11rem] text-right font-mono text-[11px] leading-snug text-faint">
                Scroll or use the arrow keys to move through the work
              </span>
              <div className="relative h-[72px] w-[72px]">
                <svg viewBox="0 0 72 72" className="h-full w-full -rotate-90">
                  <circle cx="36" cy="36" r={RADIUS} fill="none" stroke="var(--line)" strokeWidth="1.5" />
                  <circle
                    data-ring
                    cx="36"
                    cy="36"
                    r={RADIUS}
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center font-mono text-sm font-medium text-fg">
                  <span data-counter>01</span>
                  <span className="mx-0.5 text-line-strong">/</span>
                  <span className="text-faint">{pad(n)}</span>
                </span>
              </div>
            </div>
          </div>

          <div className="grid min-h-0 flex-1 grid-cols-[1.15fr_1fr] gap-12 pt-6 xl:gap-16">
            <div className="relative overflow-hidden rounded-2xl border border-line bg-ink shadow-deck">
              {featured.map((p, i) => (
                <div
                  key={p.slug}
                  data-stage-image
                  className="absolute inset-0"
                  style={{ zIndex: i, clipPath: "inset(0 0 0 0)" }}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={p.preview as string}
                      alt={`${p.name} preview`}
                      fill
                      sizes="55vw"
                      priority={i === 0}
                      className="object-cover object-left-top"
                    />
                  </div>
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-line bg-surface/95 py-1.5 pl-2 pr-3 shadow-sm backdrop-blur">
                    <ChainLogo chain={p.chain} size={16} />
                    <span className="font-mono text-xs font-medium text-fg">{p.chain}</span>
                  </div>
                  {p.status === "live" && (
                    <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-ok-line bg-ok-soft px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-ok shadow-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-ok" />
                      Live
                    </span>
                  )}
                  <TransitionLink
                    href={`/work/${p.slug}`}
                    label={p.name}
                    data-cursor="View"
                    aria-label={`${p.name} case study`}
                    className="absolute inset-0"
                  />
                </div>
              ))}
            </div>

            <div className="relative overflow-hidden">
              {featured.map((p, i) => (
                <div
                  key={p.slug}
                  data-stage-text
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <StageText project={p} index={i} total={n} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2.5 pt-6">
            {featured.map((p, i) => (
              <button
                key={p.slug}
                type="button"
                data-stage-dot
                onClick={() => jump(i)}
                aria-label={`Go to ${p.name}`}
                className="stage-dot group flex items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-[11px] text-faint transition-colors duration-300 hover:text-fg"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current transition-transform duration-300 group-[.is-active]:scale-125" />
                {p.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* mobile and tablet: swipe carousel */}
      <div className="lg:hidden">
        <div className="shell pt-24">
          <SectionHeading index="02" label="Selected work" title="Protocols I designed and shipped" className="mb-8" />
        </div>
        <Reveal variant="fade">
          <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:px-8">
            {featured.map((p, i) => (
              <MobileCard key={p.slug} project={p} index={i} total={n} />
            ))}
          </div>
          <p className="shell mt-4 font-mono text-[11px] text-faint">Swipe to move through the work</p>
        </Reveal>
      </div>

      {more.length > 0 && (
        <div className="shell mt-20 lg:mt-24">
          <Reveal className="mb-5 flex items-center gap-4">
            <h3 className="eyebrow text-muted">Also built</h3>
            <span className="h-px flex-1 bg-line" />
          </Reveal>
          <Reveal as="ul" className="border-t border-line" stagger={0.1} y={16}>
            {more.map((project, i) => (
              <li key={project.slug} className="border-b border-line">
                <TransitionLink
                  href={`/work/${project.slug}`}
                  label={project.name}
                  className="group grid items-center gap-x-6 gap-y-3 py-6 sm:grid-cols-[3rem_1fr_auto]"
                >
                  <span className="font-mono text-xs text-faint">{pad(n + i + 1)}</span>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="font-display text-2xl font-medium text-fg transition-transform duration-500 ease-out group-hover:translate-x-1 sm:text-3xl">
                      {project.name}
                    </span>
                    <span className="text-sm text-muted">{project.tagline}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="hidden items-center gap-2 font-mono text-xs text-muted sm:flex">
                      <ChainLogo chain={project.chain} size={16} />
                      {project.chain}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-all duration-500 ease-out group-hover:border-fg group-hover:bg-fg group-hover:text-page">
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-500 ease-out group-hover:rotate-45"
                      />
                    </span>
                  </div>
                </TransitionLink>
              </li>
            ))}
          </Reveal>
        </div>
      )}
    </section>
  );
}

function Links({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <div className={`flex flex-wrap items-center ${compact ? "gap-x-5 gap-y-3" : "gap-x-6 gap-y-4"}`}>
      <TransitionLink
        href={`/work/${project.slug}`}
        label={project.name}
        className={`btn btn-primary ${compact ? "!px-5 !py-3 text-[13px]" : ""}`}
      >
        Read case study
        <ArrowRight size={15} />
      </TransitionLink>
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-fg"
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
          className="link-underline inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-fg"
        >
          <Github size={14} />
          Source
        </a>
      )}
    </div>
  );
}

function StageText({ project, index, total }: { project: Project; index: number; total: number }) {
  return (
    <div>
      <div className="flex items-center justify-between font-mono text-xs text-faint">
        <span>
          <span className="font-medium text-accent">{pad(index + 1)}</span>
          <span className="mx-1.5 text-line-strong">/</span>
          {pad(total)}
        </span>
        <span>
          {project.year} <span className="mx-1.5 text-line-strong">/</span> {project.category}
        </span>
      </div>

      <h3 className="mt-6 font-display text-5xl font-medium tracking-tightest text-fg xl:text-6xl">
        {project.name}
      </h3>
      <p className="mt-3 text-base font-semibold text-accent">{project.tagline}</p>
      <p className="mt-4 max-w-lg leading-relaxed text-muted pretty line-clamp-3 xl:line-clamp-4">
        {project.description}
      </p>

      <dl className="mt-6 grid grid-cols-3 gap-5 border-t border-line pt-5">
        {project.metrics.map((m) => (
          <div key={m.label}>
            <dt className="font-display text-2xl font-medium tracking-tightest text-fg">{m.value}</dt>
            <dd className="mt-1 text-[11px] leading-tight text-faint">{m.label}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.deployments && (
          <p className="inline-flex items-center gap-2 rounded-full border border-accent-line bg-accent-soft px-3 py-1.5 font-mono text-[11px] font-medium text-accent">
            <FileCode2 size={12} />
            {project.deployments.length}{" "}
            {project.deployments.length === 1 ? "address" : "addresses"} verifiable on{" "}
            {project.deployments[0].network}
          </p>
        )}
        {project.tech.slice(0, 5).map((t) => (
          <span
            key={t}
            className="rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-[11px] text-muted"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-7">
        <Links project={project} />
      </div>
    </div>
  );
}

function MobileCard({ project, index, total }: { project: Project; index: number; total: number }) {
  return (
    <article className="card flex w-[84vw] max-w-sm shrink-0 snap-center flex-col overflow-hidden rounded-2xl">
      <TransitionLink
        href={`/work/${project.slug}`}
        label={project.name}
        className="relative block aspect-[16/10] overflow-hidden border-b border-line"
      >
        <Image
          src={project.preview as string}
          alt={`${project.name} preview`}
          fill
          sizes="84vw"
          className="object-cover object-left-top"
        />
        <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full border border-line bg-surface/95 py-1 pl-1.5 pr-2.5 shadow-sm backdrop-blur">
          <ChainLogo chain={project.chain} size={14} />
          <span className="font-mono text-[11px] font-medium text-fg">{project.chain}</span>
        </div>
        {project.status === "live" && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-ok-line bg-ok-soft px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-ok">
            <span className="h-1.5 w-1.5 rounded-full bg-ok" />
            Live
          </span>
        )}
      </TransitionLink>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between font-mono text-[11px] text-faint">
          <span>
            <span className="font-medium text-accent">{pad(index + 1)}</span>
            <span className="mx-1 text-line-strong">/</span>
            {pad(total)}
          </span>
          <span>{project.year}</span>
        </div>
        <h3 className="mt-4 font-display text-3xl font-medium tracking-tightest text-fg">
          {project.name}
        </h3>
        <p className="mt-1.5 text-sm font-semibold text-accent">{project.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-3">{project.description}</p>

        <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-line pt-4">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <dt className="font-display text-xl font-medium tracking-tightest text-fg">{m.value}</dt>
              <dd className="mt-0.5 text-[10px] leading-tight text-faint">{m.label}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6">
          <Links project={project} compact />
        </div>
      </div>
    </article>
  );
}
