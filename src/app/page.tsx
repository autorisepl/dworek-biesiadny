import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { RoomsPreviewSection } from "@/components/sections/rooms-preview";
import { ServicesSection } from "@/components/sections/services";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <RoomsPreviewSection />
      <ServicesSection />
    </>
  );
}
