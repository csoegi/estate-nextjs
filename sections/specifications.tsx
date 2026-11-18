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

const floorPlans = [
  { label: "Ground floor", src: "https://pub-b88054ccbe3b4e9589a7fdae837d1072.r2.dev/floor-0.jpg" },
  { label: "1st floor", src: "https://pub-b88054ccbe3b4e9589a7fdae837d1072.r2.dev/floor-1.jpg" },
  { label: "2nd floor", src: "https://pub-b88054ccbe3b4e9589a7fdae837d1072.r2.dev/floor-2.jpg" },
  { label: "3rd floor", src: "https://pub-b88054ccbe3b4e9589a7fdae837d1072.r2.dev/floor-3.jpg" },
  { label: "Rooftop", src: "https://pub-b88054ccbe3b4e9589a7fdae837d1072.r2.dev/floor-4.jpg" },
];

function Blueprint({ floor, src, onZoom }: { floor: string; src: string; onZoom: () => void }) {
  return (
    <div className="relative flex h-full min-h-[280px] items-center justify-center bg-[#111311]">
      <img src={src} alt={`${floor} floor plan`} className="max-h-full w-full object-contain" />
      <button type="button" onClick={onZoom} aria-label="Zoom floor plan" className="absolute right-3 top-3 inline-flex items-center gap-2 border border-white/30 bg-black/50 px-3 py-2 text-[9px] uppercase tracking-[.15em] text-white backdrop-blur-sm hover:bg-black/70">Zoom <span aria-hidden="true">↗</span></button>
    </div>
  );
}

