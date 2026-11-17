"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-[720px] h-[92svh] max-h-[1000px] items-end overflow-hidden bg-[#272725] text-white">
      <div className="absolute inset-0 bg-[url('/hero-image.png')] bg-cover bg-[center_54%]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20" />
      <div className="section-shell relative z-10 pb-24 pt-36 md:pb-32">
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="mb-7 text-[10px] uppercase tracking-[.28em] text-white/75">A residence beyond the ordinary</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: .08 }} className="editorial-title max-w-[850px] text-[clamp(4rem,10vw,9.5rem)]">
          A place to<br /><span className="italic">belong.</span>
        </motion.h1>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8, delay: .35 }} className="mt-8 flex items-center gap-5">
          <span className="h-px w-12 bg-white/70" />
          <p className="max-w-md text-[11px] uppercase tracking-[.19em] text-white/85 md:text-xs">Discover a considered way of living at Citraland Raffles Surabaya</p>
        </motion.div>
        <a href="#gallery" className="mt-12 inline-flex items-center gap-4 border-b border-white/60 pb-2 text-[10px] uppercase tracking-[.18em] transition-opacity hover:opacity-65">Explore the residence <span aria-hidden>↘</span></a>
      </div>
      <div className="absolute bottom-8 right-8 hidden text-[9px] tracking-[.2em] text-white/70 md:block">SURABAYA · INDONESIA</div>
    </section>
  );
}
