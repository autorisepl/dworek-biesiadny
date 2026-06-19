import type { Metadata } from "next";
import Image from "next/image";
import { GalleryLightbox } from "@/components/gallery-lightbox";
import type { GalleryImage } from "@/components/gallery-lightbox";

export const metadata: Metadata = {
  title: "Galeria — Dworek Biesiadny w Radzewicach",
  description:
    "Galeria zdjęć Dworku Biesiadnego w Radzewicach — apartamenty, strefa relaksu, restauracja, glamping, otoczenie i organizowane wydarzenia.",
};

const images: GalleryImage[] = [
  { src: "/images/otoczenie/otoczenie-1.jpg", alt: "Łąki nadwarciańskie wokół Dworku Biesiadnego", category: "Otoczenie" },
  { src: "/images/rooms/apartament-1.jpg", alt: "Apartament 1 — łóżko King size z widokiem na łąki", category: "Pokoje" },
  { src: "/images/wellness/wellness-1.jpg", alt: "Sauna zewnętrzna z panoramicznym oknem", category: "Relaks" },
  { src: "/images/otoczenie/otoczenie-2.jpg", alt: "Starodrzew akacji przy dworku", category: "Otoczenie" },
  { src: "/images/glamping/glamping-1.jpg", alt: "Kopuła glamping przy starorzeczu Warty", category: "Glamping" },
  { src: "/images/wydarzenia/wydarzenie-1.jpg", alt: "Sala eventowa — Dworek Biesiadny", category: "Wydarzenia" },
  { src: "/images/otoczenie/otoczenie-3.jpg", alt: "Starorzecze Warty", category: "Otoczenie" },
  { src: "/images/rooms/apartament-debowy.jpg", alt: "Apartament Dębowy — lamele z naturalnego drewna", category: "Pokoje" },
  { src: "/images/wydarzenia/wydarzenie-2.jpg", alt: "Uroczystość weselna w Dworku Biesiadnym", category: "Wydarzenia" },
  { src: "/images/otoczenie/otoczenie-4.jpg", alt: "Widok z okien dworku", category: "Otoczenie" },
  { src: "/images/glamping/glamping-2.jpg", alt: "Kopuła glamping — wnętrze nocne", category: "Glamping" },
  { src: "/images/rooms/apartament-5.jpg", alt: "Apartament 5 — widok z balkonu", category: "Pokoje" },
  { src: "/images/otoczenie/otoczenie-5.jpg", alt: "Ogród i okolice dworku", category: "Otoczenie" },
  { src: "/images/wydarzenia/wydarzenie-3.jpg", alt: "Stara stajnia — kameralne wydarzenie", category: "Wydarzenia" },
  { src: "/images/otoczenie/otoczenie-6.jpg", alt: "Łąki Nadwarciańskie o zmierzchu", category: "Otoczenie" },
  { src: "/images/glamping/glamping-3.jpg", alt: "Glamping — nocleg pod gwiazdami przy Warcie", category: "Glamping" },
  { src: "/images/wydarzenia/wydarzenie-4.jpg", alt: "Komunie i uroczystości rodzinne", category: "Wydarzenia" },
  { src: "/images/otoczenie/otoczenie-7.jpg", alt: "Otoczenie przyrodnicze — wędkowanie", category: "Otoczenie" },
  { src: "/images/wydarzenia/wydarzenie-5.jpg", alt: "Eventy firmowe w dworku", category: "Wydarzenia" },
  { src: "/images/otoczenie/otoczenie-8.jpg", alt: "Szlaki nordic walking wzdłuż Warty", category: "Otoczenie" },
  { src: "/images/wydarzenia/wydarzenie-6.jpg", alt: "Przyjęcie okolicznościowe", category: "Wydarzenia" },
  { src: "/images/otoczenie/otoczenie-9.jpg", alt: "Przyroda wokół Radzewic", category: "Otoczenie" },
  { src: "/images/wydarzenia/wydarzenie-7.jpg", alt: "Dekoracje — uroczystość w dworku", category: "Wydarzenia" },
  { src: "/images/wydarzenia/wydarzenie-8.jpg", alt: "Bankiet weselny — Dworek Biesiadny", category: "Wydarzenia" },
];

export default function GaleriaPage() {
  return (
    <div className="min-h-screen bg-warm-white">
      <section className="relative py-28 md:py-36 px-4 md:px-8 overflow-hidden">
        <Image
          src="/images/otoczenie/otoczenie-1.jpg"
          alt="Łąki nadwarciańskie wokół Dworku Biesiadnego"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
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
