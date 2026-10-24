import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        page: "var(--page)",
        surface: "var(--surface)",
        elevated: "var(--elevated)",
        ink: "var(--ink)",
        "ink-surface": "var(--ink-surface)",
        "ink-fg": "var(--ink-fg)",
        "ink-muted": "var(--ink-muted)",
        "ink-line": "var(--ink-line)",
        fg: "var(--fg)",
        muted: "var(--muted)",
        faint: "var(--faint)",
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        "accent-soft": "var(--accent-soft)",
        "accent-line": "var(--accent-line)",
        ok: "var(--ok)",
        "ok-soft": "var(--ok-soft)",
        "ok-line": "var(--ok-line)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        card: "var(--shadow-card)",
        lift: "var(--shadow-lift)",
        deck: "var(--shadow-deck)",
      },
      fontSize: {
        hero: ["clamp(2.75rem, 7.4vw, 6.75rem)", { lineHeight: "0.94", letterSpacing: "-0.04em" }],
        display: ["clamp(2.5rem, 6.2vw, 4.75rem)", { lineHeight: "0.98", letterSpacing: "-0.035em" }],
        section: ["clamp(2rem, 3.8vw, 3.25rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        stat: ["clamp(2.25rem, 4vw, 3.5rem)", { lineHeight: "1", letterSpacing: "-0.035em" }],
        wordmark: ["clamp(4rem, 18vw, 17rem)", { lineHeight: "0.85", letterSpacing: "-0.05em" }],
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
      maxWidth: {
        shell: "76rem",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
        "in-out": "cubic-bezier(0.76, 0, 0.24, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
