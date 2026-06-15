import Reveal from "./Reveal";

type Props = {
  index: string;
  label: string;
  title: string;
};

export default function SectionHeading({ index, label, title }: Props) {
  return (
    <Reveal className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-accent">{index}</span>
        <span className="h-px w-8 bg-line" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {label}
        </span>
      </div>
      <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tightest text-fg">
        {title}
      </h2>
    </Reveal>
  );
}
