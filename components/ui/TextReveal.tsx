"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, SplitText, useGSAP, reducedMotion } from "@/lib/gsap";

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

      const run = contextSafe!(() => {
        if (cancelled) return;
        split = SplitText.create(el, {
          type,
          mask: type,
          linesClass: "split-line",
          wordsClass: "split-word",
          autoSplit: true,
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
            if (mode === "scroll") {
              vars.scrollTrigger = { trigger: el, start, once: true };
            }
            return gsap.to(targets, vars);
          },
        });
      });

      document.fonts.ready.then(run);

      return () => {
        cancelled = true;
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
