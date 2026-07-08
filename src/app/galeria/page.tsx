import type { Metadata } from "next";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { GalleryLightbox } from "@/components/gallery-lightbox";
import type { GalleryImage } from "@/components/gallery-lightbox";

export const metadata: Metadata = {
  title: "Galeria — Dworek Biesiadny w Radzewicach",
  description:
    "Galeria zdjęć Dworku Biesiadnego w Radzewicach — apartamenty, strefa relaksu, restauracja, glamping, otoczenie i organizowane wydarzenia.",
};

const images: GalleryImage[] = [
  { src: "/images/hero/hero-dworek-front.jpg", alt: "Dworek Biesiadny — widok od frontu", category: "Obiekt", hasPhoto: true },
  { src: "/images/rooms/apt-1-a.jpg", alt: "Apartament 1 — łóżko King size z widokiem na łąki", category: "Pokoje", hasPhoto: true },
  { src: "/images/wellness/sauna-a.jpg", alt: "Sauna zewnętrzna z panoramicznym oknem", category: "Relaks", hasPhoto: true },
  { src: "", alt: "Starodrzew akacji przy dworku", category: "Otoczenie", hasPhoto: false },
  { src: "/images/glamping/kopula-a.jpg", alt: "Kopuła glamping przy starorzeczu Warty", category: "Glamping", hasPhoto: true },
  { src: "/images/events/sala-a.jpg", alt: "Sala w dworku — restauracja i wydarzenia", category: "Restauracja", hasPhoto: true },
  { src: "", alt: "Starorzecze Warty", category: "Otoczenie", hasPhoto: false },
  { src: "/images/rooms/apt-debowy-a.jpg", alt: "Apartament Dębowy — lamele z naturalnego drewna", category: "Pokoje", hasPhoto: true },
  { src: "", alt: "Uroczystość weselna w Dworku Biesiadnym", category: "Wydarzenia", hasPhoto: false },
  { src: "/images/hero/hero-dworek-alt.jpg", alt: "Dworek Biesiadny — inne ujęcie", category: "Obiekt", hasPhoto: true },
  { src: "/images/glamping/kopula-b.jpg", alt: "Kopuła glamping — wnętrze", category: "Glamping", hasPhoto: true },
  { src: "/images/rooms/apt-5-a.jpg", alt: "Apartament 5 — widok z balkonu", category: "Pokoje", hasPhoto: true },
  { src: "", alt: "Ogród i okolice dworku", category: "Otoczenie", hasPhoto: false },
  { src: "/images/events/stara-stajnia.jpg", alt: "Stara stajnia — kameralne wydarzenie", category: "Wydarzenia", hasPhoto: true },
  { src: "/images/wellness/balia-nocna.jpg", alt: "Balia drewniana — ujęcie nocne", category: "Relaks", hasPhoto: true },
  { src: "/images/rooms/apt-trzcinowy-a.jpg", alt: "Apartament Trzcinowy — LED podświetlenie", category: "Pokoje", hasPhoto: true },
  { src: "", alt: "Komunie i uroczystości rodzinne", category: "Wydarzenia", hasPhoto: false },
  { src: "/images/rooms/apt-rzeka-a.jpg", alt: "Apartament Nad Rzeką", category: "Pokoje", hasPhoto: true },
  { src: "", alt: "Otoczenie przyrodnicze — wędkowanie", category: "Otoczenie", hasPhoto: false },
  { src: "/images/rooms/room-3-a.jpg", alt: "Pokój 3 — widok na zachód", category: "Pokoje", hasPhoto: true },
  { src: "/images/wellness/sauna-b.jpg", alt: "Sauna zewnętrzna — wnętrze", category: "Relaks", hasPhoto: true },
  { src: "", alt: "Szlaki nordic walking wzdłuż Warty", category: "Otoczenie", hasPhoto: false },
  { src: "/images/rooms/room-12-a.jpg", alt: "Pokój 12", category: "Pokoje", hasPhoto: true },
  { src: "/images/events/sala-b.jpg", alt: "Sala w dworku — inne ujęcie", category: "Restauracja", hasPhoto: true },
];

export default function GaleriaPage() {
  return (
    <div className="min-h-screen bg-warm-white">
      <section className="relative py-28 md:py-36 px-4 md:px-8 overflow-hidden">
        <PhotoPlaceholder className="absolute inset-0 w-full h-full" label="Zdjęcie — Łąki nadwarciańskie wokół dworku" />
        <div className="absolute inset-0 bg-primary-dark/65" />
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">
            Zdjęcia
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">Galeria</h1>
          <div className="w-16 h-0.5 bg-accent mb-6" />
          <p className="font-body text-white/80 text-base md:text-xl max-w-2xl">
            Dworek, apartamenty, strefa relaksu, restauracja, glamping i otoczenie łąk
            nadwarciańskich. Kliknij zdjęcie, żeby je powiększyć.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <GalleryLightbox images={images} />
        </div>
      </section>
    </div>
  );
}
