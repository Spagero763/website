import type Lenis from "lenis";

let instance: Lenis | null = null;

export const setLenis = (l: Lenis | null) => {
  instance = l;
};

export const getLenis = () => instance;

export function scrollToTarget(target: string | number | HTMLElement, immediate = false) {
  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(target, { immediate, offset: typeof target === "number" ? 0 : -8 });
    return;
  }
  if (typeof target === "number") {
    window.scrollTo({ top: target, behavior: immediate ? "auto" : "smooth" });
    return;
  }
  const el = typeof target === "string" ? document.querySelector(target) : target;
  el?.scrollIntoView({ behavior: immediate ? "auto" : "smooth" });
}
