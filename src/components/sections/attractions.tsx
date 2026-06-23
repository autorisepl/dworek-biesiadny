"use client";

import { MotionDiv } from "@/components/motion";
import Image from "next/image";
import { Fish, PersonStanding, Bike, Flame, TreePine, Rabbit, Footprints } from "lucide-react";
import { cn } from "@/lib/utils";

const attractions = [
  {
    icon: Fish,
    title: "Rybactwo",
    description: "Pomost na stawie do łowienia ryb — sprzęt można wypożyczyć na miejscu. Dostęp do Warty dla bardziej wymagających wędkarzy.",
    image: "/images/otoczenie/otoczenie-7.jpg",
  },
  {
    icon: PersonStanding,
    title: "Nordic walking",
    description: "Kilometry szlaków wzdłuż starorzecza Warty. Łąki Nadwarciańskie i starodrzew akacji tworzą trasy na każdą kondycję.",
    image: "/images/otoczenie/otoczenie-8.jpg",
  },
  {
    icon: Bike,
    title: "Rowery elektryczne",
    description: "Kilkanaście rowerów elektrycznych czeka w wypożyczalni na tych, którzy chcą zwiedzić okolicę bez wysiłku.",
    image: "/images/otoczenie/otoczenie-9.jpg",
  },
  {
    icon: Flame,
    title: "Ogniska",
    description: "Dwa ogniska z widokiem na łąki. Wieczorny ogień, cisza i widok na starorzecze — najlepszy koniec dnia.",
    image: "/images/otoczenie/otoczenie-6.jpg",
  },
  {
    icon: TreePine,
    title: "Widoki natury",
    description: "Starorzecze Warty, łąki nadwarciańskie, starodrzew akacji na skarpie. Rano z balkonu słychać papugi z woliery w ogrodzie.",
    image: "/images/otoczenie/otoczenie-1.jpg",
  },
  {
    icon: Rabbit,
    title: "Zwierzęta na miejscu",
    description: "Na terenie dworku mieszka rodzinka baranów i owiec. W wolierze papugi i gołębie — widoczne z balkonu apartamentów.",
    image: "/images/otoczenie/otoczenie-2.jpg",
  },
  {
    icon: Footprints,
    title: "Daniele w okolicy",
    description: "W okolicach dworku czasem przechodzi stadem dzikie daniele. Spacer wzdłuż starorzecza o świcie lub zmierzchu daje największą szansę na spotkanie.",
    image: "/images/otoczenie/otoczenie-3.jpg",
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
              <Image
                src={item.image}
                alt={`${item.title} — Dworek Biesiadny`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes={
                  i === 0
                    ? "(max-width:640px) 100vw, (max-width:1024px) 50vw, 50vw"
                    : "(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                }
              />
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
