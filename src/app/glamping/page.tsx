import type { Metadata } from "next";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BOOKING_ENGINE_URL } from "@/lib/booking";
import { Maximize, Moon, Users, TreePine, Waves, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Glamping — Kopuła nad Wartą — Dworek Biesiadny w Radzewicach",
  description:
    "Kopuła glamping 37,5 m² przy starorzeczu Warty. Nocleg w naturze z widokiem przez transparentne ściany lub kameralne wydarzenie — komunie, wesela, osiemnastki w plenerze.",
};

const features = [
  { icon: Maximize, title: "37,5 m²", description: "Komfortowa przestrzeń dla noclegu lub eventu" },
  { icon: TreePine, title: "Przy Warcie", description: "Starorzecze Warty, polany, las — bez sąsiadów" },
  { icon: Moon, title: "Nocleg w naturze", description: "Pełen komfort z widokiem na naturę" },
  { icon: Users, title: "Venue eventowe", description: "Komunie, 18-tki, kameralne wesela w plenerze" },
  { icon: Waves, title: "Cisza i przestrzeń", description: "Oderwanie od miasta na wyciągnięcie ręki" },
  { icon: Star, title: "Wyjątkowe miejsce", description: "Transparentne ściany — niebo, las, Warta" },
];

export default function GlampingPage() {
  return (
    <div className="min-h-screen bg-warm-white">
      <section className="relative py-28 md:py-36 px-4 md:px-8 overflow-hidden">
        <Image
          src="/images/glamping/kopula-a.jpg"
          alt="Kopuła glamping przy starorzeczu Warty"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">
            Glamping
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Kopuła nad Wartą
          </h1>
          <div className="w-16 h-0.5 bg-accent mb-6" />
          <p className="font-body text-white/85 text-base md:text-xl max-w-2xl leading-relaxed">
            37,5 m² przy starorzeczu Warty. Nocleg w naturze lub kameralne wydarzenie — bez
            rezygnacji z wygody. Cisza, przestrzeń i brak sąsiadów za ścianą w cenie.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href={BOOKING_ENGINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-accent hover:bg-accent-light text-white font-body font-medium px-8 py-3"
              )}
            >
              Zarezerwuj kopułę
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">
              Kopuła
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-primary-dark mb-4">
              Co oferuje glamping
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-6 text-center group hover:shadow-md transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg text-primary-dark font-bold mb-2">{f.title}</h3>
                <p className="font-body text-gray-500 text-sm">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-photo strip — all glamping images */}
      <section className="px-4 md:px-8 pb-0 pt-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-3">
            {[
              { src: "/images/glamping/kopula-a.jpg", alt: "Kopuła glamping — widok zewnętrzny" },
              { src: "/images/glamping/kopula-b.jpg", alt: "Wnętrze kopuły glamping" },
              { src: "/images/hero/hero-dworek-alt.jpg", alt: "Dworek Biesiadny — otoczenie natury" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-600"
                  sizes="(max-width:768px) 33vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] relative rounded-2xl shadow-xl overflow-hidden">
              <Image
                src="/images/glamping/kopula-b.jpg"
                alt="Wnętrze kopuły glamping — Dworek Biesiadny"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">
                Dwa zastosowania
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-primary-dark mb-6">
                Nocleg i event w jednym
              </h2>
              <div className="w-16 h-0.5 bg-accent mb-8" />
              <div className="space-y-6">
                <div className="bg-cream rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Moon className="w-5 h-5 text-accent" />
                    <h3 className="font-heading text-lg text-primary-dark font-bold">Nocleg</h3>
                  </div>
                  <p className="font-body text-gray-600 text-sm leading-relaxed">
                    Pełen komfort noclegowy z widokiem na naturę przez transparentne ściany.
                    Starorzecze Warty tuż obok, polany i las w zasięgu wzroku. Cisza, której
                    nie znajdziesz nigdzie indziej.
                  </p>
                </div>
                <div className="bg-cream rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-5 h-5 text-accent" />
                    <h3 className="font-heading text-lg text-primary-dark font-bold">Wydarzenie</h3>
                  </div>
                  <p className="font-body text-gray-600 text-sm leading-relaxed">
                    Komunie, osiemnastki i kameralne wesela w plenerze przy starorzeczu
                    Warty. Bez rezygnacji z wygody — restauracja i nocleg dla gości w dworku
                    obok.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href={BOOKING_ENGINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "bg-primary hover:bg-primary-dark text-white font-body font-medium px-8 py-3"
                  )}
                >
                  Zapytaj o dostępność
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
