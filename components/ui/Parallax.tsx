"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP, reducedMotion } from "@/lib/gsap";

type Props = {
  children: ReactNode;
  className?: string;
  amount?: number;
  scale?: number;
};

export default function Parallax({ children, className, amount = 12, scale = 1.12 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || reducedMotion()) return;
      const inner = el.firstElementChild;
      if (!inner) return;

      gsap.fromTo(
        inner,
        { yPercent: -amount, scale },
        {
          yPercent: amount,
          scale,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        }
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={`overflow-hidden ${className ?? ""}`}>
      {children}
    </div>
  );
}
