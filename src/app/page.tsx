import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { RoomsPreviewSection } from "@/components/sections/rooms-preview";
import { ServicesSection } from "@/components/sections/services";
import { GallerySection } from "@/components/sections/gallery";
import { AttractionsSection } from "@/components/sections/attractions";
import { SpaSection } from "@/components/sections/spa";
import { RestaurantSection } from "@/components/sections/restaurant";
import { EventsSection } from "@/components/sections/events";
import { GlampingSection } from "@/components/sections/glamping";
import { PricingSection } from "@/components/sections/pricing";
import { ReviewsSection } from "@/components/sections/reviews";
import { LocationSection } from "@/components/sections/location";
import { ContactPreviewSection } from "@/components/sections/contact-preview";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <RoomsPreviewSection />
      <ServicesSection />
      <GallerySection />
      <AttractionsSection />
      <SpaSection />
      <RestaurantSection />
      <EventsSection />
      <GlampingSection />
      <PricingSection />
      <ReviewsSection />
      <LocationSection />
      <ContactPreviewSection />
    </>
  );
}
