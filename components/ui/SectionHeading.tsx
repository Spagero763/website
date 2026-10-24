"use client";

import Reveal from "./Reveal";
import TextReveal from "./TextReveal";

type Props = {
  index: string;
  label: string;
  title: string;
  invert?: boolean;
  className?: string;
};

export default function SectionHeading({ index, label, title, invert = false, className }: Props) {
  return (
    <div className={className ?? "mb-16"}>
      <Reveal variant="fade" className="flex items-center gap-4">
        <span className="font-mono text-xs font-medium text-accent">{index}</span>
        <Reveal
          as="span"
          variant="line"
          delay={0.15}
          className={`h-px w-14 origin-left ${invert ? "bg-ink-line" : "bg-line-strong"}`}
        >
          {null}
        </Reveal>
        <span className={`eyebrow ${invert ? "text-ink-muted" : "text-muted"}`}>{label}</span>
      </Reveal>
      <TextReveal
        as="h2"
        delay={0.1}
        className={`mt-6 max-w-3xl font-display text-section font-medium balance ${
          invert ? "text-ink-fg" : "text-fg"
        }`}
      >
        {title}
      </TextReveal>
    </div>
  );
}
