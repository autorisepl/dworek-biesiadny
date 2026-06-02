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
  { src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop", alt: "Dworek — widok zewnętrzny", category: "Obiekt" },
  { src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=1000&fit=crop", alt: "Apartament z łóżkiem King size", category: "Pokoje" },
  { src: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&h=600&fit=crop", alt: "Wnętrze apartamentu", category: "Pokoje" },
  { src: "https://images.unsplash.com/photo-1540555700478-4be289fbec6c?w=800&h=800&fit=crop", alt: "Sauna zewnętrzna", category: "Relaks" },
  { src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=500&fit=crop", alt: "Łąki nadwarciańskie", category: "Otoczenie" },
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop", alt: "Restauracja Dworek Biesiadny", category: "Restauracja" },
  { src: "https://images.unsplash.com/photo-1618767689160-da3fb810aad7?w=800&h=700&fit=crop", alt: "Kopuła glamping", category: "Glamping" },
  { src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=900&fit=crop", alt: "Sala eventowa — wesele", category: "Wydarzenia" },
  { src: "https://images.unsplash.com/photo-1475483768296-6163e8f3e121?w=800&h=500&fit=crop", alt: "Ognisko przy dworku", category: "Otoczenie" },
  { src: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop", alt: "Rowery elektryczne", category: "Otoczenie" },
  { src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop", alt: "Apartament Dębowy", category: "Pokoje" },
  { src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=900&fit=crop", alt: "Dworek od strony ogrodu", category: "Obiekt" },
  { src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=800&fit=crop", alt: "Skarpa nad starorzeczem Warty", category: "Otoczenie" },
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop", alt: "Sala restauracyjna", category: "Restauracja" },
  { src: "https://images.unsplash.com/photo-1540555700478-4be289fbec6c?w=600&h=900&fit=crop", alt: "Strefa relaksu — sauna i balia", category: "Relaks" },
  { src: "https://images.unsplash.com/photo-1618767689160-da3fb810aad7?w=600&h=400&fit=crop", alt: "Wnętrze kopuły glamping", category: "Glamping" },
];

export default function GaleriaPage() {
  return (
    <div className="min-h-screen bg-warm-white">
      <section className="relative py-28 md:py-36 px-4 md:px-8 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&h=800&fit=crop"
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
