// Fires once when the element's top crosses the line named by `start` ("top 88%"),
// or straight away if the page loaded already scrolled past it.
export function onEnter(el: Element, start: string, cb: () => void) {
  const pct = /(\d+)%/.exec(start);
  const inset = pct ? 100 - Number(pct[1]) : 12;

  const io = new IntersectionObserver(
    ([entry]) => {
      const r = entry.boundingClientRect;
      if (r.width === 0 && r.height === 0) return;
      const line = entry.rootBounds?.bottom ?? window.innerHeight;
      if (!entry.isIntersecting && r.top >= line) return;
      io.disconnect();
      cb();
    },
    { rootMargin: `0px 0px -${inset}% 0px` }
  );

  io.observe(el);
  return () => io.disconnect();
}
