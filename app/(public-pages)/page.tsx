import { HeroSection } from "@/sections/hero-sections";
import { Gallery } from "@/sections/gallery";
import { Specifications } from "@/sections/specifications";
import { Builder } from "@/sections/builder";
import { Contact } from "@/sections/contact";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Gallery />
      <Specifications />
      <Builder />
      <Contact />
    </main>
  );
}
