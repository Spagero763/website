"use client";

import { useRef } from "react";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { gsap, SplitText, useGSAP, reducedMotion } from "@/lib/gsap";
import Image from "next/image";
import { useIntro } from "./Intro";
import CountUp from "./ui/CountUp";
import Magnetic from "./ui/Magnetic";
import ChainMarquee from "./ChainMarquee";
import TransitionLink from "./TransitionLink";
import { CV, MERGED_PRS, MERGED_PRS_URL, MERGED_REPOS } from "@/data/site";
import { deploymentCount } from "@/data/projects";

const stats = [
  { n: MERGED_PRS, l: "Pull requests merged into other teams' repos", href: MERGED_PRS_URL, external: true },
  { n: MERGED_REPOS, l: "Repositories that merged my code", href: "/#contributions", external: false },
  { n: deploymentCount, l: "Contract addresses you can look up", href: "/#projects", external: false },
  { n: 5, l: "Mainnets shipped on", href: "/#projects", external: false },
];

export default function Hero() {
  const { done } = useIntro();
  const root = useRef<HTMLElement>(null);

  useGSAP(
    (_, contextSafe) => {
      const el = root.current;
      if (!el) return;

      const q = gsap.utils.selector(el);
      const ready = () => el.querySelectorAll("[data-h]").forEach((n) => n.classList.add("is-ready"));

      if (reducedMotion()) {
        ready();
        return;
      }
      if (!done) return;

      let split: SplitText | null = null;
      let cancelled = false;

      const run = contextSafe!(() => {
        if (cancelled) return;
        const h1 = q("h1")[0];
        split = SplitText.create(h1, {
          type: "lines",
          mask: "lines",
          linesClass: "split-line",
          autoSplit: true,
          onSplit(self) {
            gsap.set(self.lines, { yPercent: 110 });
            ready();
            return gsap
              .timeline({ defaults: { ease: "power4.out" } })
              .fromTo(
                q("[data-meta] > *"),
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.08 },
                0
              )
              .fromTo(
                q("[data-rule]"),
                { scaleX: 0 },
                { scaleX: 1, duration: 1.1, ease: "power4.inOut" },
                0.1
              )
              .to(self.lines, { yPercent: 0, duration: 1.3, stagger: 0.1 }, 0.15)
              .fromTo(
                q("[data-portrait]"),
                { clipPath: "inset(100% 0 0 0)" },
                { clipPath: "inset(0% 0 0 0)", duration: 1.4, ease: "power4.inOut" },
                0.3
              )
              .fromTo(
                q("[data-portrait] img"),
                { scale: 1.2 },
                { scale: 1, duration: 1.8, ease: "power3.out" },
                0.3
              )
              .fromTo(
                q("[data-copy] > *"),
                { opacity: 0, y: 24 },
                { opacity: 1, y: 0, duration: 1, stagger: 0.1 },
                0.75
              )
              .fromTo(
                q("[data-stats] > *"),
                { opacity: 0, y: 18 },
                { opacity: 1, y: 0, duration: 0.9, stagger: 0.08 },
                1
              )
              .fromTo(
                q("[data-strip]"),
                { opacity: 0 },
                { opacity: 1, duration: 1 },
                1.2
              );
          },
        });
      });

      document.fonts.ready.then(run);

      gsap.to(q("[data-portrait]"), {
        yPercent: 10,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true },
      });

      gsap.to(q("[data-hero-copy]"), {
        yPercent: -8,
        opacity: 0.4,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true },
      });

      if (window.matchMedia("(pointer: fine)").matches) {
        const portrait = q("[data-portrait]")[0] as HTMLElement | undefined;
        const frame = q("[data-portrait-frame]")[0] as HTMLElement | undefined;
        if (portrait && frame) {
          gsap.set(frame, { transformPerspective: 900 });
          const rx = gsap.quickTo(frame, "rotationX", { duration: 0.7, ease: "power3.out" });
          const ry = gsap.quickTo(frame, "rotationY", { duration: 0.7, ease: "power3.out" });
          const tilt = (e: MouseEvent) => {
            const r = portrait.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width - 0.5;
            const py = (e.clientY - r.top) / r.height - 0.5;
            ry(px * 10);
            rx(-py * 10);
          };
          const reset = () => {
            rx(0);
            ry(0);
          };
          portrait.addEventListener("mousemove", tilt);
          portrait.addEventListener("mouseleave", reset);
        }
      }

      return () => {
        cancelled = true;
        split?.revert();
      };
    },
    { scope: root, dependencies: [done] }
  );

  return (
    <section id="hero" ref={root} className="relative flex min-h-[100svh] flex-col justify-end">
      <div className="shell pt-32 sm:pt-36" data-hero-copy>
        <div data-h className="flex items-center gap-4" data-reveal>
          <div data-meta className="contents">
            <span className="eyebrow text-muted">Afolabi Ayomide Emmanuel</span>
            <span data-rule className="h-px w-12 origin-left bg-line-strong sm:w-20" />
            <span className="eyebrow text-accent">Blockchain engineer</span>
          </div>
        </div>

        <div className="mt-8 grid items-end gap-10 lg:grid-cols-[1fr_17rem] lg:gap-16 xl:grid-cols-[1fr_19rem]">
          <h1
            data-h
            data-split
            className="font-display text-hero font-medium text-fg balance lg:text-display"
          >
            I design the protocol, write the contracts, and ship the product.
          </h1>

          <div
            data-portrait
            className="order-first w-32 sm:w-40 lg:order-none lg:w-full"
            style={{ clipPath: "inset(0 0 0% 0)" }}
          >
            <div
              data-portrait-frame
              className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-card"
            >
              <Image
                src="/avatar.jpg"
                alt="Afolabi Ayomide Emmanuel"
                fill
                sizes="(min-width: 1024px) 19rem, 10rem"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>

        <div
          data-h
          data-reveal
          data-copy
          className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-[1fr_1fr] lg:items-start"
        >
          <p className="max-w-xl text-lg leading-relaxed text-muted pretty">
            I work in Solidity, Cairo and Rust, across protocol design, security review, AI
            agents and the full stack around them. This year I put a currency exchange agent, a
            staking arcade and a market for tokenized stocks on mainnet, graduated from the Uniswap
            Hook Incubator, and had {MERGED_PRS} pull requests merged into other teams&apos;
            repositories. Everything here links to source or an address you can check.
          </p>

          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            <Magnetic>
              <TransitionLink href="/#projects" className="btn btn-primary">
                See the work
                <ArrowDown size={15} />
              </TransitionLink>
            </Magnetic>
            <Magnetic>
              <a href={CV} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <Download size={15} />
                Download CV
              </a>
            </Magnetic>
          </div>
        </div>
      </div>

      <div className="shell mt-16 lg:mt-20">
        <dl
          data-h
          data-reveal
          data-stats
          className="grid grid-cols-2 gap-x-6 border-t border-line md:grid-cols-4"
        >
          {stats.map(({ n, l, href, external }, i) => {
            const inner = (
              <>
                <dt className="flex items-start font-display text-stat font-medium text-fg">
                  <CountUp to={n} mode="load" play={done} delay={1.1 + i * 0.1} />
                </dt>
                <dd className="mt-2 flex items-center gap-1.5 text-xs leading-snug text-faint transition-colors duration-300 group-hover:text-fg">
                  {l}
                  <ArrowUpRight
                    size={12}
                    className="-translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </dd>
              </>
            );
            const cls = `group block py-7 ${i % 2 === 1 ? "pl-6 md:pl-0" : ""} ${
              i > 0 ? "md:border-l md:border-line md:pl-6" : ""
            } ${i > 1 ? "border-t border-line md:border-t-0" : ""}`;
            return external ? (
              <a key={l} href={href} target="_blank" rel="noopener noreferrer" className={cls}>
                {inner}
              </a>
            ) : (
              <TransitionLink key={l} href={href} className={cls}>
                {inner}
              </TransitionLink>
            );
          })}
        </dl>
      </div>

      <div data-strip className="opacity-0">
        <ChainMarquee />
      </div>
    </section>
  );
}
