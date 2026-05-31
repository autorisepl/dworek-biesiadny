"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { Fish, PersonStanding, Bike, Flame, TreePine } from "lucide-react";

const MotionDiv = dynamic(
  () => import("framer-motion").then((m) => m.motion.div),
  { ssr: false }
);

const attractions = [
  {
    icon: Fish,
    title: "Rybactwo",
    description:
      "Pomost na stawie do łowienia ryb — sprzęt można wypożyczyć na miejscu. Dostęp do Warty dla bardziej wymagających wędkarzy.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=400&fit=crop",
  },
  {
    icon: PersonStanding,
    title: "Nordic walking",
    description:
      "Kilometry szlaków wzdłuż starorzecza Warty. Łąki Nadwarciańskie i starodrzew akacji tworzą trasy na każdą kondycję.",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop",
  },
  {
    icon: Bike,
    title: "Rowery elektryczne",
    description:
      "Kilkanaście rowerów elektrycznych czeka w wypożyczalni na tych, którzy chcą zwiedzić okolicę bez wysiłku.",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop",
  },
  {
    icon: Flame,
    title: "Ogniska",
    description:
      "Dwa ogniska z widokiem na łąki. Wieczorny ogień, cisza i widok na starorzecze — najlepszy koniec dnia.",
    image: "https://images.unsplash.com/photo-1475483768296-6163e8f3e121?w=600&h=400&fit=crop",
  },
  {
    icon: TreePine,
    title: "Widoki natury",
    description:
      "Starorzecze Warty, łąki nadwarciańskie, starodrzew akacji na skarpie, polany i las. Rano z balkonu słychać papugi z woliery w ogrodzie.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=400&fit=crop",
  },
];

export function AttractionsSection() {
  return (
    <section id="atrakcje" className="py-20 md:py-28 px-4 md:px-8 bg-warm-white">
      <div className="max-w-7xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">
            Aktywności
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-primary-dark mb-6">
            Atrakcje w okolicy
          </h2>
          <div className="w-16 h-0.5 bg-accent mb-6" />
          <p className="font-body text-gray-600 text-base md:text-lg max-w-2xl">
            Pomost do wędkowania, rowery elektryczne, ogniska, szlaki nordic walking i papugi w
            ogrodzie. W Radzewicach nuda nie istnieje.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {attractions.map((item, i) => (
            <MotionDiv
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full">
                    <item.icon className="w-4 h-4 text-primary" />
                    <span className="font-body text-xs font-medium text-primary-dark">
                      {item.title}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="font-body text-sm text-gray-500 leading-relaxed">
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
