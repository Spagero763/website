"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import TransitionLink from "./TransitionLink";
import Reveal from "./ui/Reveal";
import TextReveal from "./ui/TextReveal";
import Parallax from "./ui/Parallax";
import type { Project } from "@/data/projects";

export default function NextProject({ project }: { project: Project }) {
  return (
    <section className="ink mt-28">
      <TransitionLink
        href={`/work/${project.slug}`}
        label={project.name}
        data-cursor="Next"
        className="group block"
      >
        <div className="shell grid items-center gap-10 py-24 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <Reveal variant="fade" className="eyebrow text-ink-muted">
              Next case study
            </Reveal>
            <TextReveal
              as="h2"
              className="mt-6 font-display text-display font-medium text-ink-fg"
              delay={0.1}
            >
              {project.name}
            </TextReveal>
            <Reveal delay={0.25} className="mt-5 flex flex-wrap items-center gap-6">
              <p className="max-w-md text-lg text-ink-muted">{project.tagline}</p>
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-ink-line text-ink-fg transition-all duration-500 ease-out group-hover:bg-ink-fg group-hover:text-ink">
                <ArrowRight size={18} className="transition-transform duration-500 ease-out group-hover:translate-x-0.5" />
              </span>
            </Reveal>
          </div>
          {project.preview && (
            <Reveal variant="clip" delay={0.15} className="rounded-2xl">
              <Parallax className="rounded-2xl" amount={8} scale={1.15}>
                <Image
                  src={project.preview}
                  alt={`${project.name} preview`}
                  width={1200}
                  height={750}
                  className="aspect-[16/10] w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                />
              </Parallax>
            </Reveal>
          )}
        </div>
      </TransitionLink>
    </section>
  );
}
