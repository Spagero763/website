"use client";

import { useRef } from "react";
import { gsap, useGSAP, reducedMotion } from "@/lib/gsap";
import { onEnter } from "@/lib/inview";

type Props = {
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
  play?: boolean;
  mode?: "scroll" | "load";
  delay?: number;
};

export default function CountUp({
  to,
  duration = 1.6,
  suffix = "",
  className,
  play = true,
  mode = "scroll",
  delay = 0,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    (_, contextSafe) => {
      const el = ref.current;
      if (!el) return;
      if (reducedMotion()) {
        el.textContent = `${to}${suffix}`;
        return;
      }
      if (mode === "load" && !play) return;

      const state = { v: 0 };
      const vars: gsap.TweenVars = {
        v: to,
        duration,
        delay,
        ease: "power3.out",
        onUpdate: () => {
          el.textContent = `${Math.round(state.v)}${suffix}`;
        },
      };
      if (mode === "load") {
        gsap.to(state, vars);
        return;
      }
      return onEnter(
        el,
        "top 90%",
        contextSafe!(() => {
          gsap.to(state, vars);
        })
      );
    },
    { dependencies: [play, to] }
  );

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
