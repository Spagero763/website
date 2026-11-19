"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, useGSAP, reducedMotion } from "@/lib/gsap";
import { onEnter } from "@/lib/inview";

type Props = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delay?: number;
  y?: number;
  duration?: number;
  variant?: "up" | "fade" | "line" | "clip" | "scale";
  stagger?: number;
  start?: string;
  id?: string;
  mode?: "scroll" | "load";
  play?: boolean;
};

export default function Reveal({
  children,
  className,
  as: Tag = "div",
  delay = 0,
  y = 28,
  duration = 1,
  variant = "up",
  stagger,
  start = "top 88%",
  id,
  mode = "scroll",
  play = true,
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

      const targets = stagger !== undefined ? Array.from(el.children) : el;

      const from: gsap.TweenVars = { opacity: 0 };
      const to: gsap.TweenVars = { opacity: 1, duration, delay, ease: "power3.out" };

      if (variant === "up") {
        from.y = y;
        to.y = 0;
      } else if (variant === "line") {
        from.scaleX = 0;
        from.opacity = 1;
        to.scaleX = 1;
        to.ease = "power4.inOut";
        to.duration = duration * 1.2;
      } else if (variant === "clip") {
        from.clipPath = "inset(0 0 100% 0)";
        from.opacity = 1;
        to.clipPath = "inset(0 0 0% 0)";
        to.ease = "power4.inOut";
        to.duration = duration * 1.25;
      } else if (variant === "scale") {
        from.scale = 0.96;
        from.y = 16;
        to.scale = 1;
        to.y = 0;
      }

      if (stagger !== undefined) to.stagger = stagger;
      gsap.set(targets, from);
      el.classList.add("is-ready");

      if (mode === "load") {
        gsap.to(targets, to);
        return;
      }
      return onEnter(
        el,
        start,
        contextSafe!(() => {
          gsap.to(targets, to);
        })
      );
    },
    { scope: ref, dependencies: [play] }
  );

  return (
    <Tag ref={ref} id={id} data-reveal className={className}>
      {children}
    </Tag>
  );
}
