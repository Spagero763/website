"use client";

import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-line bg-ink/70 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="shell flex items-center justify-between py-4">
        <a href="#hero" className="font-mono text-sm font-semibold tracking-tight text-fg">
          afolabi<span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="mailto:afolabiayomide870@gmail.com"
          className="hidden items-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 md:inline-flex"
        >
          Hire me
        </a>

        <button
          className="text-muted transition-colors hover:text-fg md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-4 border-t border-line bg-ink/95 px-6 py-5 backdrop-blur-xl md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="py-1 text-sm text-muted hover:text-fg"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:afolabiayomide870@gmail.com"
            className="mt-1 rounded-full bg-accent px-4 py-2.5 text-center text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Hire me
          </a>
        </div>
      )}
    </header>
  );
}
