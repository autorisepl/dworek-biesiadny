"use client";

import { MotionDiv } from "@/components/motion";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { cn } from "@/lib/utils";
import { Heart, Users, Briefcase, PartyPopper } from "lucide-react";

const eventTypes = [
  { icon: Heart, title: "Wesela", description: "Ceremonia i przyjęcie w jednym miejscu. Nocleg dla wszystkich gości na miejscu." },
  { icon: PartyPopper, title: "Komunie i 18-tki", description: "Kameralne uroczystości rodzinne w otoczeniu łąk i starodrzewu akacji." },
  { icon: Briefcase, title: "Eventy firmowe", description: "Wyjazdowe szkolenia, integracje, spotkania strategiczne z dala od biura." },
  { icon: Users, title: "Urodziny i inne", description: "Każde przyjęcie na miarę — od kameralnych kolacji po imprezy dla całej rodziny." },
];

const venues = [
  { name: "Dworek", description: "Główna sala na większe przyjęcia. Klimat szlacheckiego dworku, łąki w tle.", image: "/images/events/sala-a.jpg", hasPhoto: true },
  { name: "Stara stajnia", description: "Zabytkowy budynek na kameralne spotkania do kilkudziesięciu osób.", image: "/images/events/stara-stajnia.jpg", hasPhoto: true },
  { name: "Kopuła glamping", description: "37,5 m² przy starorzeczu Warty — uroczystości w plenerze z wygodą.", image: "/images/glamping/kopula-a.jpg", hasPhoto: true },
];

const eventGalleryPaths = [
  "/images/events/sala-a.jpg",
  "/images/events/sala-b.jpg",
  "/images/events/stara-stajnia.jpg",
  "/images/glamping/kopula-a.jpg",
  "/images/glamping/kopula-b.jpg",
  "/images/hero/hero-dworek-alt.jpg",
];

export function EventsSection() {
  return (
    <section id="wydarzenia" className="py-20 md:py-28 px-4 md:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35 }}
          className="mb-14"
        >
          <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">Uroczystości</p>
          <h2 className="font-heading text-3xl md:text-5xl text-primary-dark mb-6">Wydarzenia</h2>
          <div className="w-16 h-0.5 bg-accent mb-6" />
          <p className="font-body text-gray-700 text-base md:text-lg max-w-2xl">
            Trzy przestrzenie eventowe, nocleg dla gości na miejscu i otoczenie łąk nadwarciańskich.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {eventTypes.map((event, i) => (
            <MotionDiv
              key={event.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 text-center group hover:shadow-md transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                <event.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg text-primary-dark mb-2 font-bold">{event.title}</h3>
              <p className="font-body text-gray-500 text-xs leading-relaxed">{event.description}</p>
            </MotionDiv>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {venues.map((venue, i) => (
            <MotionDiv
              key={venue.name}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {venue.hasPhoto ? (
                  <Image
                    src={venue.image}
                    alt={`${venue.name} — Dworek Biesiadny`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                ) : (
                  <PhotoPlaceholder className="w-full h-full" label={venue.name} />
                )}
              </div>
              <div className="p-5">
                <h3 className="font-heading text-xl text-primary-dark font-bold mb-1">{venue.name}</h3>
                <p className="font-body text-gray-500 text-sm">{venue.description}</p>
              </div>
            </MotionDiv>
          ))}
        </div>

        {/* Event gallery */}
        <MotionDiv
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-12"
        >
          {eventGalleryPaths.map((src) => (
            <div key={src} className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src={src}
                alt="Wydarzenie w Dworku Biesiadnym"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
                sizes="(max-width:768px) 33vw, 16vw"
              />
            </div>
          ))}
        </MotionDiv>

        <div className="text-center">
          <Link
            href="/wydarzenia"
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-primary hover:bg-primary-dark text-white font-body font-medium px-8 py-3"
            )}
          >
            Zapytaj o termin
          </Link>
        </div>
      </div>
    </section>
  );
}
