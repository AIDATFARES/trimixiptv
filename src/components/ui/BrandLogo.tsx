export default function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex items-center gap-2.5 font-sans select-none ${compact ? "scale-90" : ""}`}>
      {/* Dynamic 3-Part Trimix Prism Emblem */}
      <div className="relative flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br from-[#00F0FF] via-[#7C3AED] to-[#8B5CF6] p-[1.5px] shadow-[0_0_22px_rgba(0,240,255,0.4)] group-hover:shadow-[0_0_28px_rgba(124,58,237,0.6)] transition-all duration-300">
        <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#060813]">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Top stream ray */}
            <path
              d="M12 2L19 6.5L12 11L5 6.5L12 2Z"
              fill="url(#trimix-cyan)"
            />
            {/* Left stream ray */}
            <path
              d="M4.5 8L11 12.2V19.5L4.5 15.3V8Z"
              fill="url(#trimix-violet)"
              opacity="0.9"
            />
            {/* Right stream ray */}
            <path
              d="M19.5 8L13 12.2V19.5L19.5 15.3V8Z"
              fill="url(#trimix-gradient)"
            />
            <defs>
              <linearGradient id="trimix-cyan" x1="5" y1="2" x2="19" y2="11" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00F0FF" />
                <stop offset="1" stopColor="#00A8FF" />
              </linearGradient>
              <linearGradient id="trimix-violet" x1="4.5" y1="8" x2="11" y2="19.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7C3AED" />
                <stop offset="1" stopColor="#A855F7" />
              </linearGradient>
              <linearGradient id="trimix-gradient" x1="13" y1="8" x2="19.5" y2="19.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00F0FF" />
                <stop offset="1" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5 text-xl sm:text-2xl font-black tracking-tight text-white">
          <span className="tracking-tight">TRIMIX</span>
          <span className="bg-gradient-to-r from-[#00F0FF] to-[#A855F7] bg-clip-text text-transparent">IPTV</span>
          <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#00F0FF]/15 to-[#8B5CF6]/15 px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-widest text-[#00F0FF] border border-[#00F0FF]/30 ml-0.5 shadow-sm">
            4K
          </span>
        </div>
        <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-stone-400 mt-0.5">
          ULTRA HD STREAMING
        </span>
      </div>
    </div>
  );
}
