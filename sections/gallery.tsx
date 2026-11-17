import Image from "next/image";

const images = [
  { src: "/assets/galleryImage1.png", alt: "Residence exterior and landscape", orientation: "vertical" },
  { src: "/assets/galleryImage2.png", alt: "Contemporary living space", orientation: "horizontal" },
  { src: "/assets/galleryImage3.png", alt: "Architectural details", orientation: "horizontal" },
  { src: "/assets/galleryImage4.png", alt: "Residential architecture", orientation: "vertical" },
  { src: "/assets/house.png", alt: "The residence", orientation: "horizontal" },
  // Reuse an existing project image as a temporary sixth gallery placeholder.
  { src: "/assets/house.png", alt: "Additional residence view", orientation: "horizontal" },
];

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-20 bg-[#eee8e1] py-20 md:py-28">
      <div className="section-shell">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,7fr)] lg:gap-8">
          <div className="flex flex-col items-start pr-4">
            <p className="section-kicker">The residence</p>
            <h2 className="editorial-title mt-8 max-w-sm text-5xl md:text-6xl">Spaces with purpose.</h2>
            <p className="mt-7 max-w-[310px] text-sm leading-7 text-[#827b72]">A considered home shaped around the way you live. Explore the architecture, interiors, and details that make every space feel distinctly yours.</p>
            <a href="#specifications" className="mt-9 inline-flex items-center gap-5 border-b border-[#292722]/40 pb-2 text-[10px] uppercase tracking-[.16em]">Discover the details <span className="text-lg">⟶</span></a>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {images.map((item, index) => (
              <div key={`${item.src}-${index}`} className={`image-card ${item.orientation === "vertical" ? "row-span-2 min-h-[420px] md:min-h-[520px]" : "min-h-[200px] md:min-h-[245px]"}`}>
                <Image src={item.src} alt={item.alt} fill sizes="(min-width: 1024px) 30vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[.13em] text-white/95">0{index + 1} / Residence</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
