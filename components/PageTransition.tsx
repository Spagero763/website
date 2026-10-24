"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { gsap, ScrollTrigger, reducedMotion } from "@/lib/gsap";
import { getLenis } from "@/lib/scroll";

type Ctx = { navigate: (href: string, label?: string) => void };

const TransitionContext = createContext<Ctx>({ navigate: () => {} });

export const usePageTransition = () => useContext(TransitionContext);

export default function PageTransition({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const overlay = useRef<HTMLDivElement>(null);
  const pending = useRef<string | null>(null);

  const navigate = useCallback(
    (href: string, label?: string) => {
      const el = overlay.current;
      if (!el || reducedMotion()) {
        router.push(href);
        return;
      }
      if (pending.current) return;
      pending.current = href;
      getLenis()?.stop();

      const mark = el.querySelector("[data-mark]");
      const title = el.querySelector<HTMLElement>("[data-label]");
      if (title) title.textContent = label ?? "";

      gsap
        .timeline()
        .set(el, { display: "flex", clipPath: "inset(100% 0 0 0)" })
        .to(el, { clipPath: "inset(0% 0 0 0)", duration: 0.8, ease: "power4.inOut" })
        .fromTo(
          mark,
          { opacity: 0, yPercent: 30 },
          { opacity: 1, yPercent: 0, duration: 0.5, ease: "power3.out" },
          0.4
        )
        .fromTo(
          title,
          { yPercent: 110 },
          { yPercent: 0, duration: 0.7, ease: "power4.out" },
          0.45
        )
        .add(() => router.push(href), 0.75);
    },
    [router]
  );

  useEffect(() => {
    const el = overlay.current;
    if (!el || !pending.current) return;
    pending.current = null;

    const mark = el.querySelector("[data-mark]");
    const title = el.querySelector("[data-label]");
    getLenis()?.start();

    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      gsap
        .timeline({ delay: 0.15 })
        .to(title, { yPercent: -110, duration: 0.45, ease: "power3.in" })
        .to(mark, { opacity: 0, yPercent: -30, duration: 0.35, ease: "power3.in" }, 0.05)
        .to(el, { clipPath: "inset(0 0 100% 0)", duration: 0.85, ease: "power4.inOut" }, 0.2)
        .set(el, { display: "none" });
    });
  }, [pathname]);

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}
      <div
        ref={overlay}
        aria-hidden
        className="ink pointer-events-none fixed inset-0 z-[110] hidden flex-col items-center justify-center gap-5"
        style={{ clipPath: "inset(100% 0 0 0)" }}
      >
        <span data-mark className="font-mono text-sm font-semibold text-ink-fg">
          afolabi<span className="text-ink-muted">.</span>
        </span>
        <span className="block overflow-hidden px-6 py-[0.1em]">
          <span
            data-label
            className="block font-display text-display font-medium text-ink-fg"
          />
        </span>
      </div>
    </TransitionContext.Provider>
  );
}
