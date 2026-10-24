"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, Maximize2, X } from "lucide-react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { getLenis, scrollToTarget } from "@/lib/scroll";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { roles, stack, training, type Training } from "@/data/background";

const groups = [
  { id: "stack", label: "Stack", hint: "What I work with" },
  { id: "experience", label: "Experience", hint: "Where I've worked" },
  { id: "training", label: "Training", hint: "How I learned this" },
];

export default function Background() {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState("stack");
  const [lightbox, setLightbox] = useState<Training | null>(null);
  const overlay = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      groups.forEach((g) => {
        ScrollTrigger.create({
          trigger: `#${g.id}`,
          start: "top 45%",
          end: "bottom 45%",
          onToggle: (self) => self.isActive && setActive(g.id),
        });
      });
    },
    { scope: root }
  );

  const close = () => {
    const el = overlay.current;
    if (!el) return setLightbox(null);
    gsap.to(el, { opacity: 0, duration: 0.25, onComplete: () => setLightbox(null) });
    gsap.to(el.firstElementChild, { scale: 0.96, y: 10, duration: 0.25 });
  };

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    getLenis()?.stop();
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      getLenis()?.start();
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox]);

  useGSAP(
    () => {
      const el = overlay.current;
      if (!el) return;
      gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.3 });
      gsap.fromTo(
        el.firstElementChild,
        { scale: 0.94, y: 24 },
        { scale: 1, y: 0, duration: 0.6, ease: "power4.out" }
      );
    },
    { dependencies: [lightbox] }
  );

  return (
    <section id="background" className="border-t border-line py-24 pb-40">
      <div ref={root} className="shell grid gap-12 lg:grid-cols-[17rem_1fr] lg:gap-20">
        <div className="self-start lg:sticky lg:top-[calc(var(--nav-h)+2rem)]">
          <SectionHeading index="04" label="Background" title="Stack, roles and training" className="mb-8" />
          <Reveal as="nav" aria-label="Background sections" className="hidden lg:block" variant="fade">
            <ul className="border-t border-line">
              {groups.map((g) => {
                const on = active === g.id;
                return (
                  <li key={g.id} className="border-b border-line">
                    <button
                      type="button"
                      onClick={() => scrollToTarget(`#${g.id}`)}
                      className="group flex w-full items-center justify-between py-3.5 text-left"
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`h-px origin-left bg-accent transition-all duration-500 ease-out ${
                            on ? "w-6" : "w-0"
                          }`}
                        />
                        <span
                          className={`font-display text-xl transition-colors duration-300 ${
                            on ? "text-fg" : "text-faint group-hover:text-muted"
                          }`}
                        >
                          {g.label}
                        </span>
                      </span>
                      <span className="font-mono text-[11px] text-faint">{g.hint}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>

        <div className="min-w-0">
          <div id="stack" className="scroll-mt-28">
            <Reveal variant="fade" className="mb-6 flex items-center gap-4">
              <h3 className="eyebrow text-accent">Stack</h3>
              <span className="h-px flex-1 bg-line" />
            </Reveal>
            <div className="border-t border-line">
              {stack.map((g) => (
                <Reveal
                  key={g.title}
                  y={16}
                  className="grid gap-3 border-b border-line py-6 sm:grid-cols-[11rem_1fr] sm:gap-8"
                >
                  <h4 className="font-display text-lg font-medium text-fg">{g.title}</h4>
                  <ul className="flex flex-wrap gap-x-2 gap-y-1.5 self-center">
                    {g.items.map((item, j) => (
                      <li key={item} className="flex items-center text-base text-muted">
                        <span className="transition-colors duration-300 hover:text-fg">{item}</span>
                        {j < g.items.length - 1 && <span className="ml-2 text-line-strong">·</span>}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>

          <div id="experience" className="mt-20 scroll-mt-28">
            <Reveal variant="fade" className="mb-6 flex items-center gap-4">
              <h3 className="eyebrow text-accent">Experience</h3>
              <span className="h-px flex-1 bg-line" />
            </Reveal>
            <div className="border-t border-line">
              {roles.map((r) => (
                <Reveal key={r.org} y={18} className="border-b border-line py-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h4 className="font-display text-2xl font-medium text-fg">{r.org}</h4>
                      <p className="mt-1 text-sm font-semibold text-accent">{r.role}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="rounded-full border border-line bg-elevated px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
                        {r.kind}
                      </span>
                      <span className="font-mono text-xs text-faint">{r.period}</span>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {r.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm leading-relaxed text-muted pretty">
                        <span className="mt-[9px] h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  {r.images && (
                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      {r.images.map((src, idx) => (
                        <a
                          key={src}
                          href={src}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group block h-20 w-28 overflow-hidden rounded-lg border border-line"
                        >
                          <Image
                            src={src}
                            alt={`${r.org} at the Web3 Lagos Conference ${idx + 1}`}
                            width={224}
                            height={160}
                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                          />
                        </a>
                      ))}
                      {r.event && (
                        <a
                          href={r.event.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline ml-1 inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-fg"
                        >
                          <ExternalLink size={12} />
                          {r.event.label}
                        </a>
                      )}
                    </div>
                  )}
                </Reveal>
              ))}
            </div>
          </div>

          <div id="training" className="mt-20 scroll-mt-28">
            <Reveal variant="fade" className="mb-6 flex items-center gap-4">
              <h3 className="eyebrow text-accent">Training</h3>
              <span className="h-px flex-1 bg-line" />
            </Reveal>
            <div className="border-t border-line">
              {training.map((t) => (
                <Reveal
                  key={t.org}
                  y={18}
                  className="grid gap-4 border-b border-line py-8 md:grid-cols-[1fr_auto] md:gap-8"
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-start gap-x-5 gap-y-3">
                      <div className="min-w-0 flex-1">
                        <h4 className="font-display text-2xl font-medium text-fg">{t.org}</h4>
                        <p className="mt-1 text-sm font-semibold text-accent">{t.program}</p>
                        <p className="mt-1.5 font-mono text-xs text-faint">{t.period}</p>
                      </div>
                      {t.image && (
                        <button
                          type="button"
                          onClick={() => setLightbox(t)}
                          aria-label={`View ${t.program} certificate`}
                          className="group relative h-20 w-32 flex-shrink-0 overflow-hidden rounded-lg border border-line bg-surface"
                        >
                          <Image
                            src={t.image}
                            alt={`${t.program} certificate`}
                            fill
                            sizes="8rem"
                            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                          />
                          <span className="absolute inset-0 flex items-center justify-center bg-ink/0 text-ink-fg opacity-0 transition-all duration-300 group-hover:bg-ink/40 group-hover:opacity-100">
                            <Maximize2 size={14} />
                          </span>
                        </button>
                      )}
                    </div>
                    <ul className="mt-4 space-y-2">
                      {t.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-sm leading-relaxed text-muted pretty">
                          <span className="mt-[9px] h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={t.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 self-start font-mono text-xs text-muted transition-colors hover:text-fg md:self-center"
                  >
                    {t.linkLabel}
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line transition-all duration-500 ease-out group-hover:border-fg group-hover:bg-fg group-hover:text-page">
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-500 ease-out group-hover:rotate-45"
                      />
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      {lightbox?.image && (
        <div
          ref={overlay}
          role="dialog"
          aria-modal="true"
          aria-label={`${lightbox.program} certificate`}
          onClick={close}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(12,12,16,0.86)] p-4 backdrop-blur-sm sm:p-10"
        >
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-4xl">
            <Image
              src={lightbox.image}
              alt={`${lightbox.program} certificate`}
              width={1400}
              height={1000}
              className="h-auto max-h-[85vh] w-full rounded-xl bg-surface object-contain shadow-lift"
            />
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-ink-line text-ink-muted transition-colors hover:bg-ink-surface hover:text-ink-fg"
          >
            <X size={18} />
          </button>
        </div>
      )}
    </section>
  );
}
