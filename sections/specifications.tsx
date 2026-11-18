"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Archive,
  ArrowUpDown,
  Bath,
  BedDouble,
  CarFront,
  CookingPot,
  DoorClosed,
  DoorOpen,
  Flame,
  Flower2,
  House,
  Sofa,
  Sun,
  Trees,
  Utensils,
  Users,
  WashingMachine,
  Waves,
  Wrench,
} from "lucide-react";

type FloorFeature = [string, LucideIcon];

const floorFeatures: { floor: string; icon: string; features: FloorFeature[] }[] = [
  {
    floor: "Ground Floor",
    icon: "⌂",
    features: [
      ["Carport", CarFront], ["Entrance", DoorOpen], ["Foyer", DoorClosed], ["Staircase", ArrowUpDown],
      ["Front Garden", Trees], ["Meeting Room", Users], ["Storage Room", Archive], ["Utility Room", Wrench],
      ["Powder Room", Bath], ["Maid Bedroom", BedDouble], ["Maid Bathroom", Bath], ["Maid Quarter", House],
      ["Laundry Area", WashingMachine], ["Back Garden", Trees], ["Lift Area", ArrowUpDown],
    ],
  },
  {
    floor: "1st Floor",
    icon: "▤",
    features: [
      ["Staircase", ArrowUpDown], ["Courtyard", Flower2], ["Pantry", CookingPot], ["Dining Area", Utensils],
      ["Living Room", Sofa], ["Swimming Pool", Waves], ["Guest Bedroom with ensuite bathroom (pool view)", BedDouble],
      ["Common Bathroom", Bath], ["Lift Area", ArrowUpDown],
    ],
  },
  {
    floor: "2nd Floor",
    icon: "▤",
    features: [
      ["Staircase", ArrowUpDown], ["Outdoor Deck", Sun], ["Lift Area", ArrowUpDown], ["Storage Room", Archive], 
      ["2 Kids Bedrooms with ensuite bathrooms (pool view)", BedDouble],
      ["1 Master Bedroom with ensuite bathroom and wardrobe (pool view)", BedDouble],
    ],
  },
  {
    floor: "3rd Floor",
    icon: "▤",
    features: [
      ["Function Room", Users], ["Powder Room", Bath], ["Outdoor Deck", Sun], ["BBQ Area", Flame],
      ["Roof Garden", Trees], ["Lift Area", ArrowUpDown],
    ],
  },
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
  const [activeFloorPage, setActiveFloorPage] = useState(0);
  const [activeFloorPlan, setActiveFloorPlan] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const floorPage = floorFeatures[activeFloorPage];
  const plan = floorPlans[activeFloorPlan];

  const changePlan = (direction: number) => {
    setActiveFloorPlan((index) => (index + direction + floorPlans.length) % floorPlans.length);
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
                <img src={plan.src} alt={plan.label + " floor plan"} className="max-h-full w-full object-contain" />
                <button type="button" onClick={() => setZoomed(true)} aria-label="Zoom floor plan" className="absolute right-3 top-3 inline-flex items-center gap-2 border border-white/30 bg-black/50 px-3 py-2 text-[9px] uppercase tracking-[.15em] text-white backdrop-blur-sm hover:bg-black/70">Zoom ↗</button>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
              <div><p className="text-[9px] uppercase tracking-[.2em] text-white/55">Floor plan</p><p className="mt-2 text-sm text-white/90">{plan.label}</p></div>
              <div className="flex items-center gap-2">
                <button type="button" aria-label="Previous floor plan" onClick={() => changePlan(-1)} className="spec-arrow border-white/20 text-white hover:bg-white/10">←</button>
                <span className="px-1 text-[10px] tabular-nums text-white/65">{activeFloorPlan + 1} / {floorPlans.length}</span>
                <button type="button" aria-label="Next floor plan" onClick={() => changePlan(1)} className="spec-arrow border-white/20 text-white hover:bg-white/10">→</button>
              </div>
            </div>
          </div>

          <div className="flex min-h-[390px] flex-col bg-[#f1ede8] p-6 md:min-h-[480px] md:p-8 lg:p-9">
            <div className="grid grid-cols-3 gap-3 border-b border-[#d8d0c7] pb-5">
              {[
                { label: "Completion", value: "Q2 2027" },
                { label: "Total area", value: "300 M²" },
                { label: "Build size", value: "800 M²" },
              ].map((item) => <div key={item.label} className="min-w-0">
                <p className="text-[9px] uppercase tracking-[.08em] text-[#827b72]">{item.label}</p>
                <p className="mt-2 text-lg font-semibold tracking-[-.04em] text-[#171715] md:text-xl">{item.value}</p>
              </div>)}
            </div>
            <div className="mt-5">
              <p className="text-[9px] uppercase tracking-[.18em] text-[#827b72]">Floor features</p>
              <h3 className="mt-1 text-xl font-semibold tracking-tight text-[#171715]">{floorPage.floor}</h3>
            </div>


            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
              {floorPage.features.map(([feature, Icon]) => (
                <div key={feature} className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center text-[#8b8175]">
                    <Icon size={19} strokeWidth={1.6} />
                  </span>
                  <span className="text-[11px] leading-5 text-[#33312d] md:text-xs">{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-auto flex items-center justify-between pt-4">
              <span className="text-[9px] uppercase tracking-[.14em] text-[#827b72]">RE House Residence</span>
              <div className="flex shrink-0 items-center gap-1.5">
                <button type="button" aria-label="Previous floor features" onClick={() => setActiveFloorPage((p) => (p + floorFeatures.length - 1) % floorFeatures.length)} className="spec-arrow">←</button>
                <span className="px-1 text-[10px] tabular-nums text-[#827b72]">{activeFloorPage + 1} / {floorFeatures.length}</span>
                <button type="button" aria-label="Next floor features" onClick={() => setActiveFloorPage((p) => (p + 1) % floorFeatures.length)} className="spec-arrow">→</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {zoomed && <div role="dialog" aria-modal="true" aria-label={plan.label + " floor plan enlarged"} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8" onClick={() => setZoomed(false)}>
        <button type="button" aria-label="Close floor plan zoom" onClick={() => setZoomed(false)} className="absolute right-5 top-5 z-10 border border-white/40 px-4 py-3 text-white hover:bg-white/10">✕</button>
        <img src={plan.src} alt={plan.label + " floor plan"} onClick={(event) => event.stopPropagation()} className="max-h-[90vh] max-w-[95vw] object-contain" />
      </div>}
    </section>
  );
}
