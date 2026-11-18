"use client";

import { useState } from "react";

export function GalleryModal({ images }: { images: string[] }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  if (!images.length) return null;
  return (
    <>
      <button type="button" onClick={() => { setActive(0); setOpen(true); }} className="mt-9 inline-flex items-center gap-5 border-b border-[#292722]/40 pb-2 text-[10px] uppercase tracking-[.16em]">View gallery <span className="text-lg">⟶</span></button>
      {open && <div role="dialog" aria-modal="true" aria-label="Residence gallery" className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8" onClick={() => setOpen(false)}>
        <button type="button" aria-label="Close gallery" onClick={() => setOpen(false)} className="absolute right-5 top-5 z-10 border border-white/40 px-4 py-3 text-white hover:bg-white/10">✕</button>
        <button type="button" aria-label="Previous gallery image" onClick={(e) => {e.stopPropagation();setActive((a)=>(a-1+images.length)%images.length);}} className="absolute left-3 md:left-8 z-10 border border-white/40 px-4 py-3 text-white hover:bg-white/10">←</button>
        <div className="flex max-h-[90vh] max-w-[90vw] flex-col items-center gap-3" onClick={(e)=>e.stopPropagation()}>
          <img src={images[active]} alt={`Residence gallery image ${active+1}`} className="max-h-[82vh] max-w-full object-contain" />
          <p className="text-xs tracking-widest text-white/65">{String(active+1).padStart(2,"0")} / {String(images.length).padStart(2,"0")}</p>
        </div>
        <button type="button" aria-label="Next gallery image" onClick={(e) => {e.stopPropagation();setActive((a)=>(a+1)%images.length);}} className="absolute right-3 md:right-8 z-10 border border-white/40 px-4 py-3 text-white hover:bg-white/10">→</button>
      </div>}
    </>
  );
}
