"use client";

import { MotionDiv } from "@/components/motion";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { Fish, PersonStanding, Bike, Flame, TreePine, Rabbit, Footprints } from "lucide-react";
import { cn } from "@/lib/utils";

const attractions = [
  {
    icon: Fish,
    title: "Rybactwo",
    description: "Pomost na stawie do łowienia ryb — sprzęt można wypożyczyć na miejscu. Dostęp do Warty dla bardziej wymagających wędkarzy.",
    imageLabel: "Zdjęcie — Pomost i staw, rybactwo",
  },
  {
    icon: PersonStanding,
    title: "Nordic walking",
    description: "Kilometry szlaków wzdłuż starorzecza Warty. Łąki Nadwarciańskie i starodrzew akacji tworzą trasy na każdą kondycję.",
    imageLabel: "Zdjęcie — Szlak nordic walking wzdłuż Warty",
  },
  {
    icon: Bike,
    title: "Rowery elektryczne",
    description: "Kilkanaście rowerów elektrycznych czeka w wypożyczalni na tych, którzy chcą zwiedzić okolicę bez wysiłku.",
    imageLabel: "Zdjęcie — Wypożyczalnia rowerów elektrycznych",
  },
  {
    icon: Flame,
    title: "Ogniska",
    description: "Dwa ogniska z widokiem na łąki. Wieczorny ogień, cisza i widok na starorzecze — najlepszy koniec dnia.",
    imageLabel: "Zdjęcie — Ognisko, palenisko w plenerze",
  },
  {
    icon: TreePine,
    title: "Widoki natury",
    description: "Starorzecze Warty, łąki nadwarciańskie, starodrzew akacji na skarpie. Rano z balkonu słychać papugi z woliery w ogrodzie.",
    imageLabel: "Zdjęcie — Starorzecze Warty, widok ogólny",
  },
  {
    icon: Rabbit,
    title: "Zwierzęta na miejscu",
    description: "Na terenie dworku mieszka rodzinka baranów i owiec. W wolierze papugi i gołębie — widoczne z balkonu apartamentów.",
    imageLabel: "Zdjęcie — Zwierzęta na terenie dworku",
  },
  {
    icon: Footprints,
    title: "Daniele w okolicy",
    description: "W okolicach dworku czasem przechodzi stadem dzikie daniele. Spacer wzdłuż starorzecza o świcie lub zmierzchu daje największą szansę na spotkanie.",
    imageLabel: "Zdjęcie — Daniele w okolicy dworku",
  },
];

export function AttractionsSection() {
  return (
    <section id="atrakcje" className="py-20 md:py-28 px-4 md:px-8 bg-warm-white">
      <div className="max-w-7xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35 }}
          className="mb-10"
        >
          <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">Aktywności</p>
          <h2 className="font-heading text-3xl md:text-5xl text-primary-dark mb-4">
            Atrakcje w okolicy
          </h2>
          <div className="w-16 h-0.5 bg-accent" />
        </MotionDiv>

        {/* Editorial photo-card grid: featured first card + 6 regular */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {attractions.map((item, i) => (
            <MotionDiv
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: i * 0.07 }}
              className={cn(
                "group relative overflow-hidden rounded-2xl shadow-sm",
                i === 0
                  ? "sm:col-span-2 lg:col-span-2 h-80 lg:h-96"
                  : "h-56 lg:h-64"
              )}
            >
              <PhotoPlaceholder className="absolute inset-0 w-full h-full" label={item.imageLabel} />
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/85 via-primary-dark/15 to-transparent" />

              {/* Text overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-1.5">
                  <item.icon className="w-4 h-4 text-accent shrink-0" />
                  <h3 className="font-heading text-white font-bold text-base">{item.title}</h3>
                </div>
                <p
                  className={cn(
                    "font-body text-white/70 text-xs leading-relaxed",
                    i === 0
                      ? "block"
                      : "max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-300"
                  )}
                >
                  {item.description}
                </p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
