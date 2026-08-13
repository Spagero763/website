"use client";

import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#contributions", label: "Open source" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const sectionIds = ["about", "projects", "contributions", "skills", "experience", "education", "certificates", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
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
      className={`fixed left-0 right-0 top-0 z-50 transition-colors duration-200 ${
        scrolled ? "border-b border-line bg-page/90 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="shell flex items-center justify-between py-4">
        <a href="#hero" className="font-mono text-sm font-semibold tracking-tight text-fg">
          afolabi<span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const isActive = activeId === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm transition-colors ${
                  isActive ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="mailto:afolabiayomide870@gmail.com"
            className="hidden items-center rounded-md border border-line px-4 py-2 text-sm font-semibold text-fg transition-colors hover:border-[color:var(--line-strong)] md:inline-flex"
          >
            Get in touch
          </a>

          <button
            className="text-muted transition-colors hover:text-fg md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="flex flex-col gap-4 border-t border-line bg-page px-6 py-5 md:hidden">
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
            className="mt-1 rounded-md bg-accent px-4 py-2.5 text-center text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
}
