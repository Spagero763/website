import { ArrowLeft } from "lucide-react";
import TransitionLink from "@/components/TransitionLink";
import TextReveal from "@/components/ui/TextReveal";
import Reveal from "@/components/ui/Reveal";

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col justify-between">
      <header className="shell flex h-[var(--nav-h)] items-center justify-between">
        <TransitionLink href="/" className="font-mono text-sm font-semibold text-fg">
          afolabi<span className="text-accent">.</span>
        </TransitionLink>
        <span className="eyebrow text-faint">404</span>
      </header>

      <div className="shell pb-20">
        <TextReveal as="h1" mode="load" className="font-display text-hero font-medium text-fg">
          Nothing at this address.
        </TextReveal>
        <Reveal mode="load" delay={0.5} className="mt-8 flex flex-wrap items-center gap-6">
          <p className="max-w-md text-lg leading-relaxed text-muted">
            The page you were after is not here. Everything that is lives on the home page.
          </p>
          <TransitionLink href="/" className="btn btn-primary">
            <ArrowLeft size={15} />
            Back home
          </TransitionLink>
        </Reveal>
      </div>
    </main>
  );
}
