"use client";

import { useState } from "react";

const slides = [
  [
    { label: "Completion", value: "Q4 2026" },
    { label: "Total area", value: "0.12 HA" },
    { label: "Build size", value: "450 M²" },
  ],
  [
    { label: "Carport", value: "Details on request" },
    { label: "Bedrooms", value: "Details on request" },
    { label: "Bathrooms", value: "Details on request" },
  ],
  [
    { label: "Swimming pool", value: "Details on request" },
    { label: "Meeting room", value: "Details on request" },
    { label: "Kitchen", value: "Details on request" },
  ],
  [
    { label: "Maid room & bathroom", value: "Details on request" },
    { label: "Storage room", value: "Details on request" },
    { label: "Rooftop & outdoor patio", value: "Details on request" },
  ],
];

const floorPlans = ["Ground floor", "First floor", "Second floor"];

function Blueprint({ floor }: { floor: string }) {
  return (
    <svg viewBox="0 0 640 440" role="img" aria-label={`${floor} architectural floor plan placeholder`} className="h-full w-full">
      <rect width="640" height="440" fill="#111311" />
      <g stroke="#c8c8bd" strokeWidth="1.4" fill="none" opacity=".88">
        <path d="M72 62H560V360H72z M72 178H560 M72 270H560 M208 62V360 M360 62V360 M455 178V360 M208 178H360 M360 270H560" />
        <path d="M92 82H188V158H92z M228 82H340V158H228z M382 82H540V158H382z M92 198H188V250H92z M228 198H340V250H228z M92 290H188V340H92z M228 290H340V340H228z M382 290H438V340H382z M475 198H540V250H475z" strokeWidth="2" />
        <path d="M188 118h20m-10 -10v20 M340 118h20m-10 -10v20 M438 315h37m-18 -18v36 M188 225h40m-20 -20v40 M340 315h42" strokeWidth="1" />
        <path d="M72 44H560 M72 36v16 M560 36v16 M52 62V360 M44 62h16 M44 360h16" strokeDasharray="4 5" opacity=".6" />
        <path d="M102 170v16m-8 -8h16 M250 170v16m-8 -8h16 M410 170v16m-8 -8h16" />
      </g>
      <g fill="#c8c8bd" fontSize="10" letterSpacing="2" opacity=".7">
        <text x="72" y="24">{floor.toUpperCase()} PLAN</text><text x="500" y="405">TYPE C</text>
      </g>
    </svg>
  );
}

export function Specifications() {
  const [active, setActive] = useState(0);
  const [activeFloor, setActiveFloor] = useState(0);
  const current = slides[active];

  const changeFloor = (direction: number) => {
    setActiveFloor((currentFloor) => (currentFloor + direction + floorPlans.length) % floorPlans.length);
  };

  return (
    <section id="specifications" className="scroll-mt-20 bg-[#e5dfd7] py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div><p className="section-kicker">Designed in detail</p><h2 className="editorial-title mt-7 text-5xl md:text-6xl">The specifications.</h2></div>
          <p className="max-w-sm text-sm leading-7 text-[#827b72]">A closer look at the home, from its architectural planning to the spaces designed for everyday living.</p>
        </div>
        <div className="grid overflow-hidden border border-[#292722]/15 lg:grid-cols-[42%_58%]">
          <div className="relative flex min-h-[390px] flex-col justify-between bg-[#111311] p-5 md:min-h-[480px] md:p-8">
            <div className="min-h-0 flex-1">
              <Blueprint floor={floorPlans[activeFloor]} />
            </div>
            <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[9px] uppercase tracking-[.2em] text-white/55">Architectural concept · Type C</p>
                <p className="mt-2 text-sm text-white/90">{floorPlans[activeFloor]}</p>
              </div>
              <div className="flex items-center gap-2">
                <button type="button" aria-label="Previous floor plan" onClick={() => changeFloor(-1)} className="spec-arrow border-white/20 text-white hover:bg-white/10">←</button>
                <span className="px-1 text-[10px] tabular-nums text-white/65">0{activeFloor + 1} / 0{floorPlans.length}</span>
                <button type="button" aria-label="Next floor plan" onClick={() => changeFloor(1)} className="spec-arrow border-white/20 text-white hover:bg-white/10">→</button>
              </div>
            </div>
          </div>
          <div className="flex min-h-[330px] flex-col justify-between bg-[#f1ede8] p-7 md:min-h-[480px] md:p-10 lg:p-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-5">
              {current.map((item) => <div key={item.label}>
                <p className="text-[10px] tracking-[.08em] text-[#827b72]">{item.label}</p>
                <p className="mt-3 text-2xl font-semibold tracking-[-.05em] text-[#171715] md:text-[clamp(1.5rem,2.5vw,2.5rem)]">{item.value}</p>
              </div>)}
            </div>
            <div className="mt-12 flex flex-wrap items-end justify-between gap-6">
              <div><p className="text-[10px] uppercase tracking-[.16em] text-[#827b72]">Residence collection</p><p className="mt-2 text-sm">House Type C – Comfort Line</p></div>
              <div className="flex items-center gap-2">
                <button type="button" aria-label="Previous specifications" onClick={() => setActive((active + slides.length - 1) % slides.length)} className="spec-arrow">←</button>
                <span className="px-2 text-[10px] tabular-nums text-[#827b72]">0{active + 1} / 0{slides.length}</span>
                <button type="button" aria-label="Next specifications" onClick={() => setActive((active + 1) % slides.length)} className="spec-arrow">→</button>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4 text-[10px] leading-5 text-[#827b72]">Floor plan artwork is currently a reusable placeholder for each level and can be replaced with the final drawings. Additional room and facility dimensions are available from the sales team.</p>
      </div>
    </section>
  );
}
