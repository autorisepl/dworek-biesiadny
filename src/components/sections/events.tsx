"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Heart, Users, Briefcase, PartyPopper } from "lucide-react";

const MotionDiv = dynamic(
  () => import("framer-motion").then((m) => m.motion.div),
  { ssr: false }
);

const eventTypes = [
  {
    icon: Heart,
    title: "Wesela",
    description: "Ceremonia i przyjęcie w jednym miejscu. Nocleg dla wszystkich gości na miejscu.",
  },
  {
    icon: PartyPopper,
    title: "Komunie i 18-tki",
    description: "Kameralne uroczystości rodzinne w otoczeniu łąk i starodrzewu akacji.",
  },
  {
    icon: Briefcase,
    title: "Eventy firmowe",
    description: "Wyjazdowe szkolenia, integracje, spotkania strategiczne z dala od biura.",
  },
  {
    icon: Users,
    title: "Urodziny i inne",
    description: "Każde przyjęcie na miarę — od kameralnych kolacji po imprezy dla całej rodziny.",
  },
];

const venues = [
  {
    name: "Dworek",
    description: "Główna sala na większe przyjęcia. Klimat szlacheckiego dworku, łąki w tle.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=400&fit=crop",
  },
  {
    name: "Stara stajnia",
    description: "Zabytkowy budynek na kameralne spotkania do kilkudziesięciu osób.",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=400&fit=crop",
  },
  {
    name: "Kopuła glamping",
    description: "37,5 m² przy starorzeczu Warty — uroczystości w plenerze z wygodą.",
    image: "https://images.unsplash.com/photo-1618767689160-da3fb810aad7?w=600&h=400&fit=crop",
  },
];

export function EventsSection() {
  return (
    <section id="wydarzenia" className="py-20 md:py-28 px-4 md:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">
            Uroczystości
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-primary-dark mb-6">
            Wydarzenia
          </h2>
          <div className="w-16 h-0.5 bg-accent mb-6" />
          <p className="font-body text-gray-600 text-base md:text-lg max-w-2xl">
            Trzy przestrzenie eventowe o różnym charakterze, nocleg dla gości na miejscu i
            otoczenie łąk nadwarciańskich. Wesela, komunie, osiemnastki, imprezy firmowe.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {eventTypes.map((event, i) => (
            <MotionDiv
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
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

        <p className="font-body text-accent text-sm tracking-widest uppercase mb-6">
          Przestrzenie
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {venues.map((venue, i) => (
            <MotionDiv
              key={venue.name}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={venue.image}
                  alt={venue.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-heading text-xl text-white font-bold mb-1">{venue.name}</h3>
                  <p className="font-body text-white/80 text-sm">{venue.description}</p>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Link
            href="/wydarzenia"
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-primary hover:bg-primary-dark text-white font-body font-medium px-8 py-3"
            )}
          >
            Zapytaj o termin
          </Link>
        </MotionDiv>
      </div>
    </section>
  );
}
