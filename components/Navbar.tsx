"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap, ScrollTrigger, useGSAP, reducedMotion } from "@/lib/gsap";
import { getLenis } from "@/lib/scroll";
import TransitionLink from "./TransitionLink";
import { EMAIL } from "@/data/site";

const links = [
  { href: "/#about", id: "about", label: "About" },
  { href: "/#capabilities", id: "capabilities", label: "What I do" },
  { href: "/#projects", id: "projects", label: "Work" },
  { href: "/#contributions", id: "contributions", label: "Open source" },
  { href: "/#background", id: "background", label: "Background" },
  { href: "/#contact", id: "contact", label: "Contact" },
];

const sectionIds = ["about", "capabilities", "projects", "contributions", "background", "contact"];

export default function Navbar() {
  const header = useRef<HTMLElement>(null);
  const pill = useRef<HTMLSpanElement>(null);
  const nav = useRef<HTMLElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const mounted = useRef(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

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
            gsap.to(el, {
              yPercent: hidden ? -100 : 0,
              duration: 0.55,
              ease: "power3.out",
              overwrite: true,
            });
          }
        },
      });
    },
    { scope: header }
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const p = pill.current;
    const container = nav.current;
    if (!p || !container) return;
    const active = container.querySelector<HTMLElement>(`[data-id="${activeId}"]`);
    if (!active) {
      gsap.to(p, { opacity: 0, duration: 0.25 });
      return;
    }
    gsap.to(p, {
      x: active.offsetLeft,
      width: active.offsetWidth,
      opacity: 1,
      duration: reducedMotion() ? 0 : 0.5,
      ease: "power3.out",
    });
  }, [activeId]);

  useGSAP(
    () => {
      const el = menu.current;
      if (!el) return;
      if (!mounted.current) {
        mounted.current = true;
        return;
      }
      const items = el.querySelectorAll("[data-menu-item]");
      if (open) {
        getLenis()?.stop();
        document.body.style.overflow = "hidden";
        gsap
          .timeline()
          .set(el, { display: "flex" })
          .fromTo(
            el,
            { clipPath: "inset(0 0 100% 0)" },
            { clipPath: "inset(0 0 0% 0)", duration: 0.7, ease: "power4.inOut" }
          )
          .fromTo(
            items,
            { yPercent: 110 },
            { yPercent: 0, duration: 0.8, stagger: 0.06, ease: "power4.out" },
            0.3
          );
      } else {
        getLenis()?.start();
        document.body.style.overflow = "";
        gsap
          .timeline()
          .to(items, { yPercent: -110, duration: 0.4, stagger: 0.03, ease: "power3.in" })
          .to(el, { clipPath: "inset(0 0 100% 0)", duration: 0.6, ease: "power4.inOut" }, 0.15)
          .set(el, { display: "none" });
      }
    },
    { dependencies: [open], scope: menu }
  );

  return (
    <>
      <header
        ref={header}
        className={`fixed left-0 right-0 top-0 z-[80] transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled && !open
            ? "border-b border-line bg-page/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="shell flex h-[var(--nav-h)] items-center justify-between">
          <TransitionLink
            href="/"
            className={`relative z-[2] font-mono text-sm font-semibold tracking-tight transition-colors duration-500 ${
              open ? "text-ink-fg" : "text-fg"
            }`}
          >
            afolabi<span className={open ? "text-ink-muted" : "text-accent"}>.</span>
          </TransitionLink>

          <nav
            ref={nav}
            aria-label="Primary"
            className="relative hidden items-center md:flex"
          >
            <span
              ref={pill}
              aria-hidden
              className="absolute left-0 top-0 h-full rounded-full bg-elevated opacity-0"
            />
            {links.map((l) => (
              <TransitionLink
                key={l.href}
                href={l.href}
                data-id={l.id}
                className={`relative z-[1] rounded-full px-3.5 py-2 text-sm transition-colors duration-300 ${
                  activeId === l.id ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {l.label}
              </TransitionLink>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <span className="hidden items-center gap-2 font-mono text-[11px] text-muted lg:flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ok opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ok" />
              </span>
              Available for work
            </span>
            <a
              href={`mailto:${EMAIL}`}
              className="btn btn-primary hidden !py-2.5 !px-4 text-[13px] md:inline-flex"
            >
              Get in touch
            </a>

            <button
              className={`relative z-[2] flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full md:hidden ${
                open ? "text-ink-fg" : "text-fg"
              }`}
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span
                className={`block h-px w-5 bg-current transition-transform duration-500 ease-in-out ${
                  open ? "translate-y-[3px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-5 bg-current transition-transform duration-500 ease-in-out ${
                  open ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        ref={menu}
        className="ink fixed inset-0 z-[75] hidden flex-col justify-between px-6 pb-8 pt-28 md:!hidden"
        style={{ clipPath: "inset(0 0 100% 0)" }}
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {links.map((l, i) => (
            <span key={l.href} className="overflow-hidden border-b border-ink-line py-3">
              <TransitionLink
                href={l.href}
                data-menu-item
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between font-display text-4xl font-medium text-ink-fg"
              >
                {l.label}
                <span className="font-mono text-xs text-ink-muted">0{i + 1}</span>
              </TransitionLink>
            </span>
          ))}
        </nav>

        <div className="overflow-hidden">
          <div data-menu-item className="flex flex-col gap-4">
            <a href={`mailto:${EMAIL}`} className="btn btn-light justify-center">
              Get in touch
              <ArrowUpRight size={16} />
            </a>
            <p className="text-center font-mono text-[11px] text-ink-muted">
              Ondo, Nigeria. Available for work.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
