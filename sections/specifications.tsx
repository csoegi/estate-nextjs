"use client";

import { useState } from "react";

const slides = [
  [
    { label: "Completion", value: "Q2 2027" },
    { label: "Total area", value: "300 M²" },
    { label: "Build size", value: "800 M²" },
  ],
  [
    { label: "Carport", value: "24 M²" },
    { label: "Bedrooms", value: "5" },
    { label: "Bathrooms", value: "6" },
  ],
  [
    { label: "Swimming pool", value: "32 M²" },
    { label: "Meeting room", value: "20 M²" },
    { label: "Kitchen", value: "20 M²" },
  ],
  [
    { label: "Maid room & bathroom", value: "Yes" },
    { label: "Storage room", value: "20 M²" },
    { label: "Rooftop & outdoor patio", value: "120 M²" },
  ],
];

const floorPlans = [
  { label: "Ground floor", src: "/assets/floor-0.jpg" },
  { label: "1st floor", src: "/assets/floor-1.jpg" },
  { label: "2nd floor", src: "/assets/floor-2.jpg" },
  { label: "3rd floor", src: "/assets/floor-3.jpg" },
  { label: "Rooftop", src: "/assets/floor-4.jpg" },
  { label: "Front/Back View", src: "/assets/floor-5.jpg" },
  { label: "Front/Back View", src: "/assets/floor-6.jpg" },
  { label: "Side View", src: "/assets/floor-7.jpg" },
  { label: "Side View", src: "/assets/floor-8.jpg" },
  { label: "Side View", src: "/assets/floor-9.jpg" },
  { label: "Side View", src: "/assets/floor-10.jpg" },
  { label: "Side View", src: "/assets/floor-11.jpg" },
];

export function Specifications() {
  const [active, setActive] = useState(0);
  const [activeFloor, setActiveFloor] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const currentSlide = slides[active];
  const floor = floorPlans[activeFloor];

  const changeFloor = (direction: number) => {
    setActiveFloor((index) => (index + direction + floorPlans.length) % floorPlans.length);
  };

  return (
    <section id="specifications" className="scroll-mt-20 bg-[#111311] py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div><p className="section-kicker">Designed in detail</p><h2 className="editorial-title mt-7 text-5xl text-[#eee8e1] md:text-6xl">The specifications.</h2></div>
          <p className="max-w-sm text-sm leading-7 text-white/55">A closer look at the home, from its architectural planning to the spaces designed for everyday living.</p>
        </div>
        <div className="grid overflow-hidden border border-white/15 lg:grid-cols-[58%_42%]">
          <div className="relative flex min-h-[390px] flex-col justify-between bg-[#111311] p-5 md:min-h-[480px] md:p-8">
            <div className="min-h-0 flex-1">
              <div className="relative flex h-full min-h-[280px] items-center justify-center bg-[#111311]">
                <img src={floor.src} alt={`${floor.label} floor plan`} className="max-h-full w-full object-contain" />
                <button type="button" onClick={() => setZoomed(true)} aria-label="Zoom floor plan" className="absolute right-3 top-3 inline-flex items-center gap-2 border border-white/30 bg-black/50 px-3 py-2 text-[9px] uppercase tracking-[.15em] text-white backdrop-blur-sm hover:bg-black/70">Zoom ↗</button>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
              <div><p className="text-[9px] uppercase tracking-[.2em] text-white/55">Floor plan</p><p className="mt-2 text-sm text-white/90">{floor.label}</p></div>
              <div className="flex items-center gap-2">
                <button type="button" aria-label="Previous floor plan" onClick={() => changeFloor(-1)} className="spec-arrow border-white/20 text-white hover:bg-white/10">←</button>
                <span className="px-1 text-[10px] tabular-nums text-white/65">{activeFloor + 1} / {floorPlans.length}</span>
                <button type="button" aria-label="Next floor plan" onClick={() => changeFloor(1)} className="spec-arrow border-white/20 text-white hover:bg-white/10">→</button>
              </div>
            </div>
          </div>
          <div className="flex min-h-[330px] flex-col justify-between bg-[#f1ede8] p-7 md:min-h-[480px] md:p-10 lg:p-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-5">
              {currentSlide.map((item) => <div key={item.label}>
                <p className="text-[10px] tracking-[.08em] text-[#827b72]">{item.label}</p>
                <p className="mt-3 text-2xl font-semibold tracking-[-.05em] text-[#171715] md:text-[clamp(1.5rem,2.5vw,2.5rem)]">{item.value}</p>
              </div>)}
            </div>
            <div className="mt-12 flex flex-wrap items-end justify-between gap-6">
              <div><p className="text-[10px] uppercase tracking-[.16em] text-[#827b72]">Area Plan</p><p className="mt-2 text-sm">RE House Residence</p></div>
              <div className="flex items-center gap-2">
                <button type="button" aria-label="Previous specifications" onClick={() => setActive((index) => (index + slides.length - 1) % slides.length)} className="spec-arrow">←</button>
                <span className="px-2 text-[10px] tabular-nums text-[#827b72]">{active + 1} / {slides.length}</span>
                <button type="button" aria-label="Next specifications" onClick={() => setActive((index) => (index + 1) % slides.length)} className="spec-arrow">→</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {zoomed && <div role="dialog" aria-modal="true" aria-label={`${floor.label} floor plan enlarged`} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8" onClick={() => setZoomed(false)}>
        <button type="button" aria-label="Close floor plan zoom" onClick={() => setZoomed(false)} className="absolute right-5 top-5 z-10 border border-white/40 px-4 py-3 text-white hover:bg-white/10">✕</button>
        <img src={floor.src} alt={`${floor.label} floor plan`} onClick={(event) => event.stopPropagation()} className="max-h-[90vh] max-w-[95vw] object-contain" />
      </div>}
    </section>
  );
}
