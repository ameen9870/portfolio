export default function Footer() {
  return (
    <footer className="border-t border-[#ff5363]/10 px-6 py-7 md:px-10">
      <div className="mx-auto flex max-w-[1170px] flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="flex items-center gap-6">
          <span className="font-display text-xl font-bold tracking-[-0.09em] text-[#ff8290]">
            AM<span className="text-[#ff5363]">.</span>
          </span>

          <span className="text-[10px] text-white/35">
            Designed &amp; built by Ameen Muhammed T S
          </span>
        </div>

        <div className="flex items-center gap-3 text-[8px] uppercase tracking-[0.28em] text-white/30">
          <span>IDEAS</span>
          <span>→</span>
          <span>SYSTEMS</span>
          <span>→</span>
          <span>IMPACT</span>
          <span className="ml-2 h-1.5 w-1.5 rounded-full bg-[#ff5363] shadow-[0_0_10px_#ff5363]" />
        </div>
      </div>
    </footer>
  );
}