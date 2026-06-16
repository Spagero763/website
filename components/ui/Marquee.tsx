type Props = {
  items: string[];
  className?: string;
};

export default function Marquee({ items, className }: Props) {
  const row = [...items, ...items];
  return (
    <div className={`relative overflow-hidden border-y border-line py-6 ${className ?? ""}`}>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent"
        aria-hidden
      />
      <div className="flex w-max animate-marquee items-center gap-8">
        {row.map((item, i) => (
          <div key={`${item}-${i}`} className="flex items-center gap-8">
            <span className="font-display text-2xl font-medium tracking-tightest text-fg/80 sm:text-3xl">
              {item}
            </span>
            <span className="text-accent">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
