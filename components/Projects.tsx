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
      mm.add("(prefers-reduced-motion: no-preference)", () => {
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
          dots.forEach((d, j) => {
            d.classList.toggle("is-active", j === i);
            if (j === i) d.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
          });
        };
        setCurrent(0);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            pin: true,
            anticipatePin: 1,
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

        const go = (i: number) => {
          const st = trigger.current;
          if (!st) return;
          scrollToTarget(st.start + ((st.end - st.start) * i) / (n - 1));
        };

        const onKey = (e: KeyboardEvent) => {
          const st = trigger.current;
          if (!st || !st.isActive) return;
          if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
          const next = gsap.utils.clamp(0, n - 1, current + (e.key === "ArrowRight" ? 1 : -1));
          if (next === current) return;
          e.preventDefault();
          go(next);
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
    <section id="projects" className="border-t border-line pb-32 lg:pb-40">
      <div ref={stage} data-stage>
        <div className="shell flex h-[100svh] flex-col pb-5 pt-[calc(var(--nav-h)+0.25rem)] sm:pb-7 lg:pt-[calc(var(--nav-h)+1rem)]">
          <div className="flex shrink-0 items-end justify-between gap-6 border-b border-line pb-4 lg:pb-5">
            <div className="min-w-0">
              <Reveal variant="fade" className="flex items-center gap-4">
                <span className="font-mono text-xs font-medium text-accent">02</span>
                <Reveal as="span" variant="line" delay={0.15} className="h-px w-10 origin-left bg-line-strong sm:w-14">
                  {null}
                </Reveal>
                <span className="eyebrow text-muted">Selected work</span>
              </Reveal>
              <TextReveal
                as="h2"
                delay={0.1}
                className="mt-3 font-display text-2xl font-medium text-fg sm:text-3xl lg:mt-4 lg:text-section"
              >
                Products I designed and shipped
              </TextReveal>
            </div>

            <div className="flex shrink-0 items-center gap-4 lg:gap-5">
              <span className="hidden max-w-[11rem] text-right font-mono text-[11px] leading-snug text-faint lg:block">
                Scroll or use the arrow keys to move through the work
              </span>
              <div className="relative h-14 w-14 lg:h-[72px] lg:w-[72px]">
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
                <span className="absolute inset-0 flex items-center justify-center font-mono text-xs font-medium text-fg lg:text-sm">
                  <span data-counter>01</span>
                  <span className="mx-0.5 text-line-strong">/</span>
                  <span className="text-faint">{pad(n)}</span>
                </span>
              </div>
            </div>
          </div>

          <div className="flex min-h-0 flex-1 flex-col gap-4 pt-4 lg:grid lg:grid-cols-[1.15fr_1fr] lg:gap-12 lg:pt-6 xl:gap-16">
            <div className="relative min-h-[9rem] flex-1 overflow-hidden rounded-2xl border border-line bg-ink shadow-deck lg:min-h-0">
              {featured.map((p, i) => (
                <div
                  key={p.slug}
                  data-stage-image
                  className="absolute inset-0"
                  style={{ zIndex: i, clipPath: "inset(0 0 0 0)" }}
                >
                  <div className="relative h-full w-full bg-ink">
                    <Image
                      src={p.preview}
                      alt={`${p.name} preview`}
                      fill
                      sizes="100vw"
                      priority={i === 0}
                      className="object-cover object-left-top lg:hidden"
                    />
                    <div className="absolute inset-0 hidden lg:block">
                      <div className="absolute left-[6%] right-[6%] top-[7%] overflow-hidden rounded-xl border border-ink-line shadow-lift">
                        <Image
                          src={p.preview}
                          alt={`${p.name} on desktop`}
                          width={1600}
                          height={1000}
                          sizes="48vw"
                          priority={i === 0}
                          className="aspect-[16/10] w-full object-cover object-top"
                        />
                      </div>
                      {p.mobile && (
                        <div className="absolute bottom-[-5%] right-[9%] w-[26%] rounded-[1.5rem] border border-ink-line bg-ink p-1 shadow-lift">
                          <Image
                            src={p.mobile}
                            alt={`${p.name} on a phone`}
                            width={390}
                            height={800}
                            sizes="14vw"
                            className="aspect-[390/800] w-full rounded-[1.2rem] object-cover object-top"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full border border-ink-line bg-[rgba(18,18,24,0.82)] py-1 pl-1.5 pr-2.5 shadow-sm backdrop-blur lg:bottom-5 lg:left-[6%] lg:top-auto lg:py-1.5 lg:pl-2 lg:pr-3">
                    <ChainLogo chain={p.chain} size={16} />
                    <span className="font-mono text-[11px] font-medium text-ink-fg lg:text-xs">{p.chain}</span>
                  </div>
                  {p.status === "live" ? (
                    <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-ok-line bg-ok-soft px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-ok shadow-sm lg:bottom-[4.25rem] lg:left-[6%] lg:right-auto lg:top-auto lg:px-3 lg:py-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-ok" />
                      Mainnet
                    </span>
                  ) : (
                    <span className="absolute right-3 top-3 rounded-full border border-ink-line bg-[rgba(18,18,24,0.82)] px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-ink-muted shadow-sm lg:bottom-[4.25rem] lg:left-[6%] lg:right-auto lg:top-auto lg:px-3 lg:py-1.5">
                      Testnet
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

            <div className="grid shrink-0 lg:self-center">
              {featured.map((p, i) => (
                <div key={p.slug} data-stage-text className="col-start-1 row-start-1">
                  <StageText project={p} index={i} total={n} />
                </div>
              ))}
            </div>
          </div>

          <div className="no-scrollbar -mx-6 flex shrink-0 gap-2 overflow-x-auto px-6 pt-4 sm:-mx-8 sm:px-8 lg:mx-0 lg:gap-2.5 lg:px-0 lg:pt-6">
            {featured.map((p, i) => (
              <button
                key={p.slug}
                type="button"
                data-stage-dot
                onClick={() => jump(i)}
                aria-label={`Go to ${p.name}`}
                className="stage-dot group flex shrink-0 items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-[11px] text-faint transition-colors duration-300 hover:text-fg"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current transition-transform duration-300 group-[.is-active]:scale-125" />
                {p.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* reduced motion fallback, shown by CSS only when the stage is hidden */}
      <div data-stage-fallback className="hidden">
        <div className="shell pt-24">
          <SectionHeading index="02" label="Selected work" title="Products I designed and shipped" className="mb-8" />
        </div>
        <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:px-8">
          {featured.map((p, i) => (
            <FallbackCard key={p.slug} project={p} index={i} total={n} />
          ))}
        </div>
        <p className="shell mt-4 font-mono text-[11px] text-faint">Swipe to move through the work</p>
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
                  className="group grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-3 py-6 sm:grid-cols-[3rem_1fr_auto]"
                >
                  <span className="hidden font-mono text-xs text-faint sm:block">{pad(n + i + 1)}</span>
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
    <div className={`flex flex-wrap items-center ${compact ? "gap-x-5 gap-y-3" : "gap-x-5 gap-y-3 lg:gap-x-6 lg:gap-y-4"}`}>
      <TransitionLink
        href={`/work/${project.slug}`}
        label={project.name}
        className={`btn btn-primary ${compact ? "!px-5 !py-3 text-[13px]" : "!px-5 !py-3 text-[13px] lg:!px-6 lg:!py-3.5 lg:text-sm"}`}
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
          className={`link-underline items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-fg ${
            compact ? "inline-flex" : "hidden sm:inline-flex"
          }`}
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
      <div className="flex items-center justify-between font-mono text-[11px] text-faint lg:text-xs">
        <span>
          <span className="font-medium text-accent">{pad(index + 1)}</span>
          <span className="mx-1.5 text-line-strong">/</span>
          {pad(total)}
        </span>
        <span>
          {project.year} <span className="mx-1.5 text-line-strong">/</span> {project.category}
        </span>
      </div>

      <h3 className="mt-3 font-display text-3xl font-medium tracking-tightest text-fg sm:text-4xl lg:mt-6 lg:text-5xl xl:text-6xl">
        {project.name}
      </h3>
      <p className="mt-1.5 text-sm font-semibold text-accent lg:mt-3 lg:text-base">{project.tagline}</p>
      <p className="mt-2.5 max-w-lg text-sm leading-relaxed text-muted pretty line-clamp-2 sm:line-clamp-3 lg:mt-4 lg:text-base xl:line-clamp-4 [@media(max-height:720px)]:hidden lg:[@media(max-height:720px)]:block">
        {project.description}
      </p>

      <dl className="mt-3 grid grid-cols-3 gap-4 border-t border-line pt-3 lg:mt-6 lg:gap-5 lg:pt-5">
        {project.metrics.map((m) => (
          <div key={m.label}>
            <dt className="font-display text-xl font-medium tracking-tightest text-fg lg:text-2xl">{m.value}</dt>
            <dd className="mt-0.5 text-[10px] leading-tight text-faint lg:mt-1 lg:text-[11px]">{m.label}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-4 hidden flex-wrap gap-2 sm:flex lg:mt-5">
        {(project.deployments || project.proof) && (
          <p className="inline-flex items-center gap-2 rounded-full border border-accent-line bg-accent-soft px-3 py-1.5 font-mono text-[11px] font-medium text-accent">
            <FileCode2 size={12} />
            {project.deployments
              ? `${project.deployments.length} ${
                  project.deployments.length === 1 ? "address" : "addresses"
                } on ${project.deployments[0].network}`
              : "Transactions on Celo mainnet"}
          </p>
        )}
        {project.tech.slice(0, 4).map((t) => (
          <span
            key={t}
            className="rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-[11px] text-muted"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-3 lg:mt-7">
        <Links project={project} />
      </div>
    </div>
  );
}

function FallbackCard({ project, index, total }: { project: Project; index: number; total: number }) {
  return (
    <article className="card flex w-[84vw] max-w-sm shrink-0 snap-center flex-col overflow-hidden rounded-2xl">
      <TransitionLink
        href={`/work/${project.slug}`}
        label={project.name}
        className="relative block aspect-[16/10] overflow-hidden border-b border-line"
      >
        <Image
          src={project.preview}
          alt={`${project.name} preview`}
          fill
          sizes="84vw"
          className="object-cover object-left-top"
        />
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
        <h3 className="mt-4 font-display text-3xl font-medium tracking-tightest text-fg">{project.name}</h3>
        <p className="mt-1.5 text-sm font-semibold text-accent">{project.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-3">{project.description}</p>
        <div className="mt-6">
          <Links project={project} compact />
        </div>
      </div>
    </article>
  );
}
