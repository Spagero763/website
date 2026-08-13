"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

type Props = {
  index: string;
  label: string;
  title: string;
  invert?: boolean;
};

export default function SectionHeading({ index, label, title, invert = false }: Props) {
  return (
    <div className="mb-14">
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs font-medium text-accent">{index}</span>
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className={`h-px w-14 origin-left ${invert ? "bg-ink-line" : "bg-line-strong"}`}
          />
          <span
            className={`font-mono text-xs uppercase tracking-[0.2em] ${
              invert ? "text-ink-muted" : "text-muted"
            }`}
          >
            {label}
          </span>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <h2
          className={`mt-5 max-w-3xl font-display text-section font-medium balance ${
            invert ? "text-ink-fg" : "text-fg"
          }`}
        >
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
