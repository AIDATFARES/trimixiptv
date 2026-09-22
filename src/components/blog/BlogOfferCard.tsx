"use client";

import Link from "next/link";
import { CirclePlay, Sparkles, MessageSquare } from "lucide-react";

export default function BlogOfferCard() {
  return (
    <div className="my-10 rounded-2xl border border-[#00F0FF]/30 bg-gradient-to-r from-[#060813] via-[#12182c] to-[#060813] p-6 md:p-8 shadow-[0_0_30px_rgba(0,240,255,0.15)] relative overflow-hidden not-prose">
      {/* Background Ambient Glow */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00F0FF]/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-600/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 w-full">
        <div className="space-y-3 text-center md:text-left w-full md:w-2/3">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00F0FF]/30 bg-[#00F0FF]/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[#00F0FF]">
            <Sparkles className="w-3 h-3 text-[#00F0FF]" />
            <span>FLASH 4K PREMIUM IPTV OFFER</span>
          </div>
          <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">
            Stream 2026 NFL &amp; Sports in <span className="text-[#00F0FF]">4K &amp; 60FPS</span>
          </h3>
          <p className="text-stone-300 text-xs md:text-sm leading-relaxed">
            Get instant access to over 50,000 live sports channels, 120,000+ movies &amp; series, and 24/7 priority sports coverage with Trimix IPTV across all your favorite devices.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 w-full sm:w-auto">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#7C3AED] px-6 py-3 text-xs font-black uppercase tracking-wider text-white shadow-[0_0_20px_rgba(0,240,255,0.35)] hover:scale-105 transition-transform"
          >
            <CirclePlay className="w-4 h-4" />
            View Subscription Plans
          </Link>
          <a
            href="https://wa.me/213552069874?text=Hello%2C%20I%20am%20interested%20in%20Trimix%20IPTV%20for%20live%20sports%20streaming."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-[#080b18] px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-white hover:border-[#00F0FF] hover:text-[#00F0FF] transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            Instant WhatsApp Trial
          </a>
        </div>
      </div>
    </div>
  );
}
