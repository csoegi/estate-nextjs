import Image from "next/image";

const images = [
  { src: "/assets/galleryImage1.png", alt: "Residence exterior and landscape" },
  { src: "/assets/galleryImage2.png", alt: "Contemporary living space" },
  { src: "/assets/galleryImage3.png", alt: "Architectural details" },
  { src: "/assets/galleryImage4.png", alt: "Residential architecture" },
  { src: "/assets/house.png", alt: "The residence" },
];

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-20 bg-[#eee8e1] py-20 md:py-28">
      <div className="section-shell">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[30%_70%] lg:gap-8">
          <div className="flex flex-col items-start pr-4">
            <p className="section-kicker">The residence</p>
            <h2 className="editorial-title mt-8 max-w-sm text-5xl md:text-6xl">Spaces with purpose.</h2>
            <p className="mt-7 max-w-[310px] text-sm leading-7 text-[#827b72]">A considered home shaped around the way you live. Explore the architecture, interiors, and details that make every space feel distinctly yours.</p>
            <a href="#specifications" className="mt-9 inline-flex items-center gap-5 border-b border-[#292722]/40 pb-2 text-[10px] uppercase tracking-[.16em]">Discover the details <span className="text-lg">⟶</span></a>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {images.map((item, index) => (
              <div key={item.src} className={`image-card ${index === 0 || index === 3 ? "row-span-2 min-h-[420px] md:min-h-[520px]" : "min-h-[200px] md:min-h-[245px]"}`}>
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
