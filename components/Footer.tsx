"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Reveal from "./ui/Reveal";
import { scrollToTarget } from "@/lib/scroll";

const fmt = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Africa/Lagos",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="ink overflow-hidden pb-8 pt-28">
      <div className="shell">
        <Reveal variant="clip" duration={1.1} className="border-b border-ink-line pb-6">
          <p
            aria-hidden
            className="select-none font-display text-wordmark font-medium text-ink-fg"
          >
            afolabi<span className="text-ink-muted">.</span>
          </p>
        </Reveal>

        <div className="mt-6 grid gap-6 text-xs sm:grid-cols-3 sm:items-center">
          <p className="font-mono text-ink-muted">
            © 2026 Afolabi Ayomide Emmanuel. Senior blockchain engineer.
          </p>
          <p className="font-mono tabular-nums text-ink-muted sm:text-center">
            Ondo, Nigeria <span className="text-ink-fg">{time || "--:--:--"}</span> WAT
          </p>
          <div className="sm:text-right">
            <button
              type="button"
              onClick={() => scrollToTarget(0)}
              className="group inline-flex items-center gap-2 font-mono text-ink-muted transition-colors hover:text-ink-fg"
            >
              Back to top
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-ink-line transition-colors group-hover:bg-ink-fg group-hover:text-ink">
                <ArrowUp size={13} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
