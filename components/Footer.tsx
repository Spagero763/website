export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="shell flex flex-col items-center justify-between gap-3 sm:flex-row">
        <span className="font-mono text-sm font-semibold text-fg">
          afolabi<span className="text-accent">.</span>
        </span>
        <p className="font-mono text-xs text-faint">
          © 2026 Afolabi Ayomide Emmanuel. Smart Contract Engineer.
        </p>
      </div>
    </footer>
  );
}
