"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, SplitText, useGSAP, reducedMotion } from "@/lib/gsap";
import { onEnter } from "@/lib/inview";

type Props = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delay?: number;
  stagger?: number;
  duration?: number;
  mode?: "scroll" | "load";
  play?: boolean;
  start?: string;
  type?: "lines" | "words";
};

export default function TextReveal({
  children,
  className,
  as: Tag = "div",
  delay = 0,
  stagger = 0.09,
  duration = 1.1,
  mode = "scroll",
  play = true,
  start = "top 88%",
  type = "lines",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    (_, contextSafe) => {
      const el = ref.current;
      if (!el) return;
      if (reducedMotion()) {
        el.classList.add("is-ready");
        return;
      }
      if (mode === "load" && !play) return;

      let cancelled = false;
      let split: SplitText | null = null;
      // an aria-label is only valid on elements with a role, such as headings
      const labelled = typeof Tag === "string" && /^h[1-6]$/.test(Tag);
      let entered = mode !== "scroll";
      let tween: gsap.core.Tween | null = null;

      const run = contextSafe!(() => {
        if (cancelled) return;
        split = SplitText.create(el, {
          type,
          mask: type,
          linesClass: "split-line",
          wordsClass: "split-word",
          autoSplit: true,
          aria: labelled ? "auto" : "none",
          onSplit(self) {
            const targets = type === "lines" ? self.lines : self.words;
            gsap.set(targets, { yPercent: 110, rotate: type === "lines" ? 0.6 : 0 });
            el.classList.add("is-ready");
            const vars: gsap.TweenVars = {
              yPercent: 0,
              rotate: 0,
              duration,
              delay,
              stagger,
              ease: "power4.out",
            };
            tween = gsap.to(targets, { ...vars, paused: !entered });
            return tween;
          },
        });
      });

      document.fonts.ready.then(run);
      const stop =
        mode === "scroll"
          ? onEnter(el, start, () => {
              entered = true;
              tween?.play();
            })
          : undefined;

      return () => {
        cancelled = true;
        stop?.();
        split?.revert();
      };
    },
    { scope: ref, dependencies: [play] }
  );

  return (
    <Tag ref={ref} data-split className={className}>
      {children}
    </Tag>
  );
}
