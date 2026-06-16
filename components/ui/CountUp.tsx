"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type Props = {
  value: string;
  className?: string;
};

const parse = (value: string) => value.match(/^(\d+)(.*)$/);

export default function CountUp({ value, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(() => {
    const m = parse(value);
    return m ? `0${m[2]}` : value;
  });

  useEffect(() => {
    const m = parse(value);
    if (!inView || !m) return;
    const target = parseInt(m[1], 10);
    const suffix = m[2];
    const duration = 1100;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * target) + suffix);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
