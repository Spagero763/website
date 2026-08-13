export default function Footer() {
  return (
    <footer className="ink border-t border-ink-line py-10">
      <div className="shell flex flex-col items-center justify-between gap-3 sm:flex-row">
        <span className="font-mono text-sm font-semibold text-ink-fg">
          afolabi<span className="text-ink-muted">.</span>
        </span>
        <p className="font-mono text-xs text-ink-muted">
          © 2026 Afolabi Ayomide Emmanuel. Smart contract engineer.
        </p>
      </div>
    </footer>
  );
}
