"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  accent?: ReactNode;
};

const container = {
  hidden: {},
  show: (delay: number) => ({
    transition: { staggerChildren: 0.045, delayChildren: delay },
  }),
};

const word = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function RevealText({ text, className, delay = 0, as = "h2", accent }: Props) {
  const Tag = motion[as];
  const words = text.split(" ");

  return (
    <Tag
      variants={container}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="inline-flex overflow-hidden align-bottom">
          <motion.span variants={word} className="inline-block">
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
      {accent}
    </Tag>
  );
}
