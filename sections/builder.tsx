import Image from "next/image";

export function Builder() {
  return (
    <section id="builder" className="scroll-mt-20 bg-[#eee8e1] py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-12"><p className="section-kicker">The people behind it</p><h2 className="editorial-title mt-7 text-5xl md:text-6xl">Crafted with intent.</h2></div>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="grid min-h-[340px] grid-cols-1 bg-[#e5dfd7] md:grid-cols-[40%_60%]">
            <div className="relative min-h-[360px] overflow-hidden bg-[#c8c0b5] md:min-h-full">
              <Image src="/assets/ivan-priatman.jpg" alt="Ivan Priatman, Architect" fill sizes="40vw" className="object-contain md:object-cover" />
            </div>
            <div className="flex flex-col justify-end p-6 md:p-9">
              <p className="text-[9px] uppercase tracking-[.2em] text-[#827b72]">Architecture & design</p>
              <h3 className="editorial-title mt-4 text-3xl md:text-4xl">Ivan Priatman</h3>
              <p className="mt-4 text-xs leading-6 text-[#827b72]">The principal architect behind the exceptional RE House residence design. </p>
            </div>
          </article>
          <article className="flex min-h-[340px] flex-col justify-between bg-[#292a27] p-7 text-[#eee8e1] md:p-10">
            <div className="relative flex size-20 items-center justify-center border border-white/35 text-center text-xs tracking-[.18em]">
            <Image src="/assets/hexacons-logo.jpg" alt="Hexacons Construction" fill sizes="40vw" className="object-cover" />
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-[.2em] text-white/55">Development & construction</p>
              <h3 className="editorial-title mt-4 text-3xl md:text-4xl">Hexacons Construction</h3>
              <p className="mt-4 max-w-md text-xs leading-6 text-white/65">A renowned property development and construction partner for the RE House residence.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
