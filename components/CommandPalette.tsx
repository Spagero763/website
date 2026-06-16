"use client";

import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search, User, FolderGit2, GitPullRequest, Wrench, Briefcase, Award, Mail,
  Github, Twitter, Linkedin, Send, FileDown, CornerDownLeft,
} from "lucide-react";

type Action = {
  label: string;
  hint: string;
  icon: typeof User;
  run: () => void;
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const go = useCallback((href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  }, []);

  const actions: Action[] = [
    { label: "About", hint: "Who I am", icon: User, run: () => go("#about") },
    { label: "Work", hint: "Selected projects", icon: FolderGit2, run: () => go("#projects") },
    { label: "Open source", hint: "Drips Wave contributions", icon: GitPullRequest, run: () => go("#contributions") },
    { label: "Skills", hint: "What I work with", icon: Wrench, run: () => go("#skills") },
    { label: "Experience", hint: "Track record", icon: Briefcase, run: () => go("#experience") },
    { label: "Certificates", hint: "Credentials", icon: Award, run: () => go("#certificates") },
    { label: "Contact", hint: "Get in touch", icon: Mail, run: () => go("#contact") },
    { label: "Email me", hint: "afolabiayomide870@gmail.com", icon: Mail, run: () => go("mailto:afolabiayomide870@gmail.com") },
    { label: "Download CV", hint: "PDF resume", icon: FileDown, run: () => go("/AFOLABI_AYOMIDE_EMMANUEL.pdf") },
    { label: "GitHub", hint: "github.com/Spagero763", icon: Github, run: () => go("https://github.com/Spagero763") },
    { label: "Twitter", hint: "@Spagero71", icon: Twitter, run: () => go("https://x.com/Spagero71") },
    { label: "LinkedIn", hint: "Afolabi Ayomide", icon: Linkedin, run: () => go("https://www.linkedin.com/in/afolabi-ayomide-emmanuel-bba6b9367/") },
    { label: "Telegram", hint: "@Spagerobaseeth", icon: Send, run: () => go("https://t.me/Spagerobaseeth") },
  ];

  const filtered = actions.filter(
    (a) => a.label.toLowerCase().includes(query.toLowerCase()) || a.hint.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-cmdk", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-cmdk", onOpen);
    };
  }, []);

  useEffect(() => {
    setActive(0);
  }, [query, open]);

  const onListKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[active]?.run();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-start justify-center px-4 pt-[18vh]"
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="card-hairline relative w-full max-w-lg overflow-hidden rounded-2xl shadow-card"
          >
            <div className="flex items-center gap-3 border-b border-line px-4">
              <Search size={16} className="text-faint" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onListKey}
                placeholder="Jump to a section or link"
                className="w-full bg-transparent py-4 text-sm text-fg outline-none placeholder:text-faint"
              />
              <kbd className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-faint">esc</kbd>
            </div>
            <div className="max-h-72 overflow-y-auto p-2">
              {filtered.length === 0 && (
                <p className="px-3 py-6 text-center text-sm text-faint">No matches.</p>
              )}
              {filtered.map((a, i) => (
                <button
                  key={a.label}
                  onMouseEnter={() => setActive(i)}
                  onClick={a.run}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${
                    i === active ? "bg-elevated" : ""
                  }`}
                >
                  <a.icon size={16} className={i === active ? "text-accent" : "text-faint"} />
                  <span className="flex-1 text-sm text-fg">{a.label}</span>
                  <span className="text-xs text-faint">{a.hint}</span>
                  {i === active && <CornerDownLeft size={13} className="text-faint" />}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
