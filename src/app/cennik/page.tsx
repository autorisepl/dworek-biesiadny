import type { Metadata } from "next";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BOOKING_ENGINE_URL } from "@/lib/booking";
import { Check, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Cennik — Dworek Biesiadny w Radzewicach",
  description:
    "Cennik noclegów, strefy relaksu i wydarzeń w Dworku Biesiadnym w Radzewicach. Zapytaj o dostępność i aktualne ceny.",
};

const roomPrices = [
  {
    name: "Pokój 3",
    details: "15 m² · max 4 osoby",
    features: ["2 łóżka pojedyncze + sofa", "Netflix, biurko", "Widok na zachód"],
    price: "Od zapytania",
    highlight: false,
  },
  {
    name: "Apartament Trzcinowy",
    details: "15 m² · max 2 osoby",
    features: ["2 łóżka 100 cm", "Klimatyzacja, LED", "Widok na ogrody"],
    price: "Od zapytania",
    highlight: false,
  },
  {
    name: "Apartament Dębowy",
    details: "15 m² · max 4 osoby",
    features: ["King size + sofa 160 cm", "Lamele dębowe", "Widok na skarpa/Warta"],
    price: "Od zapytania",
    highlight: false,
  },
  {
    name: "Apartament Nad Rzeką",
    details: "18 m² · max 4 osoby",
    features: ["King size + dostawka", "Balkon, klimatyzacja", "Obraz Warty na ścianie"],
    price: "Od zapytania",
    highlight: false,
  },
  {
    name: "Apartamenty 1 i 2",
    details: "20 m² · max 5 osób",
    features: ["King size + pojedyncze + sofa", "Balkon, klimatyzacja", "Wanna narożna, widok na łąki"],
    price: "Od zapytania",
    highlight: true,
  },
  {
    name: "Apartament 5",
    details: "22 m² · max 6 osób",
    features: ["King size + sofa 160 cm", "Balkon nad wejściem", "Widok na wolierę z papugami"],
    price: "Od zapytania",
    highlight: false,
  },
  {
    name: "Apartament 4",
    details: "25 m² · max 6 osób",
    features: ["King size + 2 pojedyncze + sofa", "Największy apartament", "Widok na łąkę i las"],
    price: "Od zapytania",
    highlight: false,
  },
];

const additionalPrices = [
  { name: "Strefa Wellness (sauna + balia)", price: "Od 99 zł/os", note: "zobacz cennik wellness" },
  { name: "Wypożyczalnia rowerów elektrycznych", price: "Od zapytania", note: "za rower / dzień" },
  { name: "Kopuła glamping — nocleg", price: "Od zapytania", note: "za noc" },
  { name: "Kopuła glamping — event", price: "Wycena indywidualna", note: "wycena indywidualna" },
  { name: "Organizacja wesela / eventu", price: "Wycena indywidualna", note: "wycena indywidualna" },
];

export default function CennikPage() {
  return (
    <div className="min-h-screen bg-warm-white">
      <section className="relative py-28 md:py-36 px-4 md:px-8 overflow-hidden">
        <Image
          src="/images/rooms/apt-1-a.jpg"
          alt="Apartamenty Dworek Biesiadny — cennik noclegów"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary-dark/70" />
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">Ceny</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">Cennik</h1>
          <div className="w-16 h-0.5 bg-accent mb-6" />
          <p className="font-body text-white/90 text-base md:text-xl max-w-2xl">
            Ceny zależą od terminu i dostępności. Napisz lub zadzwoń — odpowiadamy w ciągu
            24 godzin.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start gap-3 bg-accent/10 border border-accent/20 rounded-xl p-4 mb-12 max-w-2xl">
            <Info className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <p className="font-body text-sm text-gray-700">
              Poniższe ceny są orientacyjne — aktualna oferta i dostępność po kontakcie.
              Ceny za noc dla całego apartamentu. W cenie: WiFi, aneks kuchenny, parking.
            </p>
          </div>

          <h2 className="font-heading text-2xl md:text-3xl text-primary-dark mb-8">
            Noclegi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-16">
            {roomPrices.map((room) => (
              <div
                key={room.name}
                className={cn(
                  "rounded-2xl p-6 border-2 flex flex-col",
                  room.highlight
                    ? "bg-primary text-white border-primary shadow-xl"
                    : "bg-white border-cream hover:border-accent/30 transition-colors"
                )}
              >
                {room.highlight && (
                  <p className="font-body text-xs text-accent tracking-widest uppercase mb-2">
                    Najpopularniejszy
                  </p>
                )}
                <h3 className={cn(
                  "font-heading text-lg font-bold mb-1",
                  room.highlight ? "text-white" : "text-primary-dark"
                )}>
                  {room.name}
                </h3>
                <p className={cn(
                  "font-body text-xs mb-4",
                  room.highlight ? "text-white/60" : "text-gray-400"
                )}>
                  {room.details}
                </p>
                <p className={cn(
                  "font-heading text-2xl font-bold mb-4",
                  room.highlight ? "text-accent" : "text-primary"
                )}>
                  {room.price}
                </p>
                <ul className="space-y-1.5 mb-6 flex-1">
                  {room.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 font-body text-xs">
                      <Check className={cn(
                        "w-3.5 h-3.5 shrink-0",
                        room.highlight ? "text-accent" : "text-primary"
                      )} />
                      <span className={room.highlight ? "text-white/80" : "text-gray-500"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={BOOKING_ENGINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "w-full justify-center font-body text-sm mt-auto",
                    room.highlight
                      ? "bg-accent hover:bg-accent-light text-white border-accent"
                      : "bg-cream text-primary hover:bg-primary hover:text-white border-transparent"
                  )}
                >
                  Zarezerwuj
                </a>
              </div>
            ))}
          </div>

          <h2 className="font-heading text-2xl md:text-3xl text-primary-dark mb-8">
            Pozostałe usługi
          </h2>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-12">
            {additionalPrices.map((item, i) => (
              <div
                key={item.name}
                className={cn(
                  "flex items-center justify-between px-6 py-4 font-body",
                  i % 2 === 0 ? "bg-white" : "bg-cream"
                )}
              >
                <div>
                  <p className="text-sm text-primary-dark font-medium">{item.name}</p>
                  <p className="text-xs text-gray-400">{item.note}</p>
                </div>
                <p className="text-sm font-bold text-primary">{item.price}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="font-body text-gray-500 mb-4">
              Nie znalazłeś odpowiedzi? Napisz — wrócimy z ofertą dopasowaną do Twoich
              potrzeb.
            </p>
            <a
              href={BOOKING_ENGINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-primary hover:bg-primary-dark text-white font-body font-medium px-8 py-3"
              )}
            >
              Zarezerwuj
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
