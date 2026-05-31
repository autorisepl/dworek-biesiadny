import type { Metadata } from "next";
import { RoomCard } from "@/components/room-card";
import { rooms } from "@/lib/rooms-data";
import { Wifi, Coffee, Snowflake, Tv } from "lucide-react";

export const metadata: Metadata = {
  title: "Pokoje i Apartamenty — Dworek Biesiadny w Radzewicach",
  description:
    "8 apartamentów od 15 do 25 m² z łóżkami King size, Netflix, światłowodem i aneksem kuchennym na korytarzu. Balkon, klimatyzacja, widoki na łąki nadwarciańskie.",
};

const commonAmenities = [
  { icon: Wifi, label: "WiFi światłowodowe" },
  { icon: Tv, label: "Netflix + 100+ kanałów" },
  { icon: Coffee, label: "Aneks kuchenny na korytarzu" },
  { icon: Snowflake, label: "Klimatyzacja (wybrane pokoje)" },
];

export default function PokojePage() {
  return (
    <div className="min-h-screen bg-warm-white">
      <section className="py-20 md:py-28 px-4 md:px-8 bg-primary-dark text-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">
            Noclegi
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
            Pokoje i apartamenty
          </h1>
          <div className="w-16 h-0.5 bg-accent mb-8" />
          <p className="font-body text-white/80 text-base md:text-xl max-w-2xl leading-relaxed">
            Osiem apartamentów — każdy z własnym charakterem. Od kameralnego Trzcinowego po
            rodzinny Apartament 4 na 25 m². Widoki na łąki nadwarciańskie, starodrzew akacji i
            starorzecze Warty.
          </p>
        </div>
      </section>

      <section className="py-10 px-4 md:px-8 bg-cream border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-sm text-gray-500 mb-4">Wyposażenie wspólne wszystkich pokoi:</p>
          <div className="flex flex-wrap gap-4">
            {commonAmenities.map((a) => (
              <div
                key={a.label}
                className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm font-body text-sm text-primary-dark"
              >
                <a.icon className="w-4 h-4 text-accent" />
                {a.label}
              </div>
            ))}
          </div>
          <p className="font-body text-xs text-gray-400 mt-3">
            Na korytarzu: ekspres do kawy, lodówka z kostkarką, zamrażarka, woda filtrowana
            z dystrybutora, woda źródlana z kranika, naczynia, sztućce, kieliszki, filiżanki,
            czajnik.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.map((room) => (
              <RoomCard key={room.slug} room={room} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
