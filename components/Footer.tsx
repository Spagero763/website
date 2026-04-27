export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/[0.06] bg-[#020617]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="font-mono text-sm">
          <span className="text-blue-400">{"{"}</span>
          <span className="text-slate-400 mx-0.5">AAE</span>
          <span className="text-blue-400">{"}"}</span>
          <span className="text-slate-600 ml-2">— Smart Contract Engineer</span>
        </div>
        <p className="text-slate-700 text-xs">
          © 2026 Afolabi Ayomide Emmanuel. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
