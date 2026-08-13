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
      },
      fontSize: {
        display: ["clamp(2.5rem, 6.2vw, 4.5rem)", { lineHeight: "0.98", letterSpacing: "-0.035em" }],
        section: ["clamp(1.9rem, 3.4vw, 2.75rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        stat: ["clamp(2rem, 3.6vw, 3rem)", { lineHeight: "1", letterSpacing: "-0.035em" }],
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
      maxWidth: {
        shell: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
