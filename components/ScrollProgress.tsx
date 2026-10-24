"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ref.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { start: 0, end: "max", scrub: 0.4 },
      }
    );
  });

  return (
    <div
      ref={ref}
      aria-hidden
      className="fixed left-0 right-0 top-0 z-[70] h-0.5 origin-left bg-accent"
    />
  );
}
