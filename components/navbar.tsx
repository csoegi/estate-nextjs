"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  ["Home", "#home"],
  ["Gallery", "#gallery"],
  ["Specifications", "#specifications"],
  ["Builder", "#builder"],
  ["Contact", "#contact"],
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#eee8e1]/95 text-[#292722] shadow-sm backdrop-blur-md" : "bg-transparent text-white"}`}>
      <nav className="section-shell flex h-[78px] items-center justify-between">
        <a href="#home" aria-label="Citraland Raffles home" className="flex flex-col leading-none">
          <span className="text-[17px] tracking-[.22em]">CITRALAND</span>
          <span className="mt-1 text-[8px] tracking-[.38em] opacity-75">RAFFLES SURABAYA</span>
        </a>
        <div className="hidden items-center gap-9 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-[10px] uppercase tracking-[.13em] opacity-90 transition-opacity hover:opacity-60">{label}</a>
          ))}
        </div>
        <button type="button" aria-label="Toggle navigation" aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)} className="grid size-10 place-items-center md:hidden">
          <span className="text-2xl leading-none">{mobileOpen ? "×" : "☰"}</span>
        </button>
      </nav>
      {mobileOpen && <div className="border-t border-black/10 bg-[#eee8e1] px-6 py-5 text-[#292722] md:hidden">
        <div className="flex flex-col gap-5">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setMobileOpen(false)} className="text-xs uppercase tracking-[.16em]">{label}</a>)}</div>
      </div>}
    </header>
  );
}
