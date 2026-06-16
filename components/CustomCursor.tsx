"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [down, setDown] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 280, damping: 26, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 280, damping: 26, mass: 0.5 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    setEnabled(true);
    document.body.classList.add("cursor-none");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement | null;
      setHovering(!!target?.closest("a, button, input, [data-cursor]"));
    };
    const onDown = () => setDown(true);
    const onUp = () => setDown(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.body.classList.remove("cursor-none");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* reticle ring */}
      <motion.div
        aria-hidden
        style={{ x: ringX, y: ringY }}
        className="pointer-events-none fixed left-0 top-0 z-[100] -ml-5 -mt-5 h-10 w-10"
        animate={{ scale: hovering ? 1.7 : down ? 0.8 : 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <div
          className={`h-full w-full rounded-full border border-dashed transition-colors duration-200 ${
            hovering ? "animate-[spin_3s_linear_infinite] border-accent bg-accent/10" : "animate-spin-slow border-accent/70"
          }`}
        />
      </motion.div>

      {/* core dot */}
      <motion.div
        aria-hidden
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[100] -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_2px_var(--accent)]"
        animate={{ scale: hovering ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
