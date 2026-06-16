import Reveal from "./Reveal";
import RevealText from "./RevealText";

type Props = {
  index: string;
  label: string;
  title: string;
};

export default function SectionHeading({ index, label, title }: Props) {
  return (
    <div className="mb-12">
      <Reveal>
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-xs text-accent">{index}</span>
          <span className="h-px w-8 bg-line" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            {label}
          </span>
        </div>
      </Reveal>
      <RevealText
        as="h2"
        text={title}
        delay={0.1}
        className="flex flex-wrap font-display text-3xl font-medium leading-[1.1] tracking-tightest text-fg sm:text-4xl"
      />
    </div>
  );
}
