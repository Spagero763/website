"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Menu } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#contributions", label: "Open source" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const sectionIds = [
  "about",
  "projects",
  "contributions",
  "skills",
  "experience",
  "education",
  "certificates",
  "contact",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-page/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="shell flex items-center justify-between py-4">
        <a
          href="#hero"
          className="font-mono text-sm font-semibold tracking-tight text-fg transition-opacity hover:opacity-70"
        >
          afolabi<span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const isActive = activeId === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative rounded-md px-3 py-2 text-sm transition-colors ${
                  isActive ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 -z-10 rounded-md bg-elevated"
                  />
                )}
                {l.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="mailto:afolabispagero71@gmail.com"
            className="hidden items-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent-hover hover:shadow-card md:inline-flex"
          >
            Get in touch
          </a>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg text-muted transition-colors hover:bg-elevated hover:text-fg md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-page md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-md py-2.5 text-sm text-muted transition-colors hover:text-fg"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="mailto:afolabispagero71@gmail.com"
                className="mt-3 rounded-lg bg-accent px-4 py-3 text-center text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
