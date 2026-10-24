"use client";

import { useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import TransitionLink from "./TransitionLink";
import { EMAIL } from "@/data/site";

export default function CaseHeader() {
  const header = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useGSAP(
    () => {
      const el = header.current;
      if (!el) return;
      let hidden = false;
      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          const y = self.scroll();
          setScrolled(y > 24);
          const shouldHide = self.direction === 1 && y > 160;
          if (shouldHide !== hidden) {
            hidden = shouldHide;
            gsap.to(el, { yPercent: hidden ? -100 : 0, duration: 0.55, overwrite: true });
          }
        },
      });
    },
    { scope: header }
  );

  return (
    <header
      ref={header}
      className={`fixed left-0 right-0 top-0 z-[80] transition-[background-color,border-color] duration-500 ${
        scrolled ? "border-b border-line bg-page/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="shell flex h-[var(--nav-h)] items-center justify-between">
        <TransitionLink
          href="/#projects"
          label="Selected work"
          className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
        >
          <ArrowLeft size={15} className="transition-transform duration-300 group-hover:-translate-x-1" />
          Back to work
        </TransitionLink>
        <TransitionLink href="/" label="Home" className="font-mono text-sm font-semibold text-fg">
          afolabi<span className="text-accent">.</span>
        </TransitionLink>
        <a href={`mailto:${EMAIL}`} className="btn btn-primary hidden !px-4 !py-2.5 text-[13px] sm:inline-flex">
          Get in touch
        </a>
      </div>
    </header>
  );
}
