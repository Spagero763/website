"use client";

import { useRef } from "react";
import { gsap, useGSAP, reducedMotion } from "@/lib/gsap";

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
    () => {
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
      if (mode === "scroll") {
        vars.scrollTrigger = { trigger: el, start: "top 90%", once: true };
      }
      gsap.to(state, vars);
    },
    { dependencies: [play, to] }
  );

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
