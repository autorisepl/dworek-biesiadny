"use client";

import dynamic from "next/dynamic";
import { BedDouble, Utensils, CalendarHeart, Waves, Tent } from "lucide-react";

const MotionDiv = dynamic(
  () => import("framer-motion").then((m) => m.motion.div),
  { ssr: false }
);

const services = [
  {
    icon: BedDouble,
    title: "Noclegi",
    description:
      "Osiem apartamentów — od kameralnych dwuosobowych po rodzinne dla sześciu osób. Łóżka King size, Netflix, światłowód. Aneks kuchenny na korytarzu.",
  },
  {
    icon: Utensils,
    title: "Restauracja",
    description:
      "Restauracja z kuchnią opartą na lokalnych produktach. Menu zmienia się sezonowo i uwzględnia kuchnię regionalną Wielkopolski.",
  },
  {
    icon: CalendarHeart,
    title: "Wydarzenia",
    description:
      "Wesela, komunie, osiemnastki, imprezy firmowe. Trzy przestrzenie eventowe — dworek, zabytkowa stajnia i kopuła glamping.",
  },
  {
    icon: Waves,
    title: "Strefa relaksu",
    description:
      "Sauna panoramiczna na 8 osób z widokiem na starorzecze Warty. Balia drewniana z hydromasażem. Jacuzzi przy saunie.",
  },
  {
    icon: Tent,
    title: "Glamping",
    description:
      "Kopuła o powierzchni 37,5 m² przy starorzeczu Warty. Pełen komfort noclegowy z widokiem na naturę — lub przestrzeń eventowa.",
  },
];

export function ServicesSection() {
  return (
    <section id="uslugi" className="py-20 md:py-28 px-4 md:px-8 bg-warm-white">
      <div className="max-w-7xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">
            Co oferujemy
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-primary-dark mb-6">
            Usługi
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
          <p className="font-body text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Wszystko w jednym miejscu — od spokojnego noclegu przez rodzinne przyjęcie, aż po
            wieczór w saunie z widokiem na Wartę.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {services.map((service, i) => (
            <MotionDiv
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-cream rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-base text-primary-dark mb-2 font-bold">
                {service.title}
              </h3>
              <p className="font-body text-gray-500 text-xs leading-relaxed">
                {service.description}
              </p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
