"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP, reducedMotion } from "@/lib/gsap";
import { getLenis } from "@/lib/scroll";
import { useIntro } from "./Intro";

const words = ["Afolabi", "Ayomide", "Emmanuel"];

export default function Preloader() {
  const { finish } = useIntro();
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      let seen = false;
      try {
        seen = sessionStorage.getItem("intro-seen") === "1";
        sessionStorage.setItem("intro-seen", "1");
      } catch {}

      if (seen || reducedMotion()) {
        gsap.set(el, { display: "none" });
        finish();
        return;
      }

      document.body.style.overflow = "hidden";
      getLenis()?.stop();

      const counter = el.querySelector<HTMLElement>("[data-counter]");
      const wordEls = el.querySelectorAll("[data-word]");
      const rule = el.querySelector("[data-rule]");
      const n = { v: 0 };

      const release = () => {
        const before = document.documentElement.clientWidth;
        document.body.style.overflow = "";
        getLenis()?.start();
        finish();
        // where the scrollbar takes up room it comes back here and narrows the page,
        // so pinned sections have to re-measure
        requestAnimationFrame(() => {
          if (document.documentElement.clientWidth !== before) ScrollTrigger.refresh();
        });
      };

      gsap
        .timeline({
          defaults: { ease: "power4.out" },
          onComplete: () => gsap.set(el, { display: "none" }),
        })
        .to(n, {
          v: 100,
          duration: 0.85,
          ease: "power2.inOut",
          onUpdate: () => {
            if (counter) counter.textContent = String(Math.round(n.v)).padStart(3, "0");
          },
        })
        .fromTo(rule, { scaleX: 0 }, { scaleX: 1, duration: 0.85, ease: "power2.inOut" }, 0)
        .from(wordEls, { yPercent: 110, duration: 0.7, stagger: 0.06 }, 0.05)
        .to(wordEls, { yPercent: -110, duration: 0.45, stagger: 0.04, ease: "power3.in" }, 0.85)
        .to([counter, rule], { opacity: 0, duration: 0.3 }, 0.9)
        .to(
          el,
          {
            clipPath: "inset(0 0 100% 0)",
            duration: 0.8,
            ease: "power4.inOut",
            onStart: release,
          },
          1.05
        );
    },
    { scope: ref }
  );

  return (
    <div
      ref={ref}
      aria-hidden
      className="ink fixed inset-0 z-[120] flex flex-col justify-between px-6 py-6 sm:px-10 sm:py-8"
      style={{ clipPath: "inset(0 0 0% 0)" }}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-sm font-semibold text-ink-fg">
          afolabi<span className="text-ink-muted">.</span>
        </span>
        <span className="eyebrow text-ink-muted">Blockchain engineer</span>
      </div>

      <div className="flex flex-wrap gap-x-[0.25em] font-display text-hero font-medium text-ink-fg">
        {words.map((w) => (
          <span key={w} className="inline-block overflow-hidden py-[0.06em]">
            <span data-word className="inline-block">
              {w}
            </span>
          </span>
        ))}
      </div>

      <div className="flex items-end justify-between gap-6">
        <span data-rule className="mb-2 h-px flex-1 origin-left bg-ink-line" />
        <span
          data-counter
          className="font-mono text-5xl font-medium tabular-nums tracking-tight text-ink-fg sm:text-7xl"
        >
          000
        </span>
      </div>
    </div>
  );
}
