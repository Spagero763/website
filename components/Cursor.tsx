"use client";

import { useRef } from "react";
import { gsap, useGSAP, reducedMotion } from "@/lib/gsap";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const d = dot.current;
    const r = ring.current;
    const l = label.current;
    if (!d || !r || !l) return;
    if (reducedMotion() || !window.matchMedia("(pointer: fine)").matches) return;

    document.documentElement.classList.add("has-cursor");
    gsap.set([d, r], { xPercent: -50, yPercent: -50 });

    const dx = gsap.quickTo(d, "x", { duration: 0.12, ease: "power3.out" });
    const dy = gsap.quickTo(d, "y", { duration: 0.12, ease: "power3.out" });
    const rx = gsap.quickTo(r, "x", { duration: 0.42, ease: "power3.out" });
    const ry = gsap.quickTo(r, "y", { duration: 0.42, ease: "power3.out" });

    let visible = false;
    let state: "idle" | "hover" | "view" = "idle";

    const setState = (next: typeof state, text?: string) => {
      if (next === state) return;
      state = next;
      if (text) l.textContent = text;
      gsap.to(r, {
        width: next === "view" ? 88 : next === "hover" ? 48 : 32,
        height: next === "view" ? 88 : next === "hover" ? 48 : 32,
        backgroundColor: next === "view" ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)",
        duration: 0.45,
        ease: "power3.out",
      });
      gsap.to(d, { scale: next === "idle" ? 1 : 0, duration: 0.3 });
      gsap.to(l, { opacity: next === "view" ? 1 : 0, duration: 0.25 });
    };

    const move = (e: MouseEvent) => {
      dx(e.clientX);
      dy(e.clientY);
      rx(e.clientX);
      ry(e.clientY);
      if (!visible) {
        visible = true;
        gsap.to([d, r], { opacity: 1, duration: 0.3 });
      }
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const view = t.closest<HTMLElement>("[data-cursor]");
      if (view) {
        setState("view", view.dataset.cursor || "View");
        return;
      }
      if (t.closest("a, button, [role='button'], input, textarea, select, label")) {
        setState("hover");
        return;
      }
      setState("idle");
    };

    const leave = () => {
      visible = false;
      gsap.to([d, r], { opacity: 0, duration: 0.3 });
    };

    const down = () => gsap.to(r, { scale: 0.85, duration: 0.2 });
    const up = () => gsap.to(r, { scale: 1, duration: 0.4, ease: "power3.out" });

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", over, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  });

  return (
    <>
      <div
        ref={dot}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[150] h-2 w-2 rounded-full bg-white opacity-0 mix-blend-difference"
      />
      <div
        ref={ring}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[150] flex h-8 w-8 items-center justify-center rounded-full border border-white opacity-0 mix-blend-difference"
      >
        <span
          ref={label}
          className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-black opacity-0"
        >
          View
        </span>
      </div>
    </>
  );
}
