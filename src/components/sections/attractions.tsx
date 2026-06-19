"use client";

import { MotionDiv } from "@/components/motion";
import Image from "next/image";
import { Fish, PersonStanding, Bike, Flame, TreePine, Rabbit, Footprints } from "lucide-react";

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
    description: "Na terenie dworku mieszka rodzinka baranów i owiec. W wolierze papugi i gołębie — widoczne z balkonu apartamentów od strony wschodniej.",
    image: "/images/otoczenie/otoczenie-2.jpg",
  },
  {
    icon: Footprints,
    title: "Daniele w okolicy",
    description: "W okolicach dworku czasem przechodzi stadem dzikie daniele. Spacer wzdłuż starorzecza Warty o świcie lub zmierzchu daje największą szansę na spotkanie.",
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
          className="mb-12"
        >
          <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">Aktywności</p>
          <h2 className="font-heading text-3xl md:text-5xl text-primary-dark mb-6">
            Atrakcje w okolicy
          </h2>
          <div className="w-16 h-0.5 bg-accent mb-6" />
        </MotionDiv>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-5">
          {attractions.map((item, i) => (
            <MotionDiv
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.title} — Dworek Biesiadny okolice`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 14vw"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <item.icon className="w-4 h-4 text-accent" />
                  <h3 className="font-body text-sm font-medium text-primary-dark">{item.title}</h3>
                </div>
                <p className="font-body text-xs text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
