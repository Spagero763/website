import ChainLogo from "./ChainLogo";
import { chains } from "@/data/site";

export default function ChainMarquee({ invert = false }: { invert?: boolean }) {
  const items = [...chains, ...chains];
  return (
    <div
      className={`marquee mask-fade-x overflow-hidden border-y py-5 ${
        invert ? "border-ink-line" : "border-line"
      }`}
      aria-label="Chains deployed on"
    >
      <div className="marquee-track">
        {items.map((c, i) => (
          <span
            key={`${c}-${i}`}
            className={`flex items-center gap-3 pr-14 font-mono text-xs uppercase tracking-[0.18em] ${
              invert ? "text-ink-muted" : "text-muted"
            }`}
            aria-hidden={i >= chains.length}
          >
            <ChainLogo chain={c} size={20} />
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
