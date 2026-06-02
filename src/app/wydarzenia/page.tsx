import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Heart, Users, Briefcase, PartyPopper, CheckCircle } from "lucide-react";
import { PhotoPlaceholder } from "@/components/photo-placeholder";

export const metadata: Metadata = {
  title: "Wesela i wydarzenia — Dworek Biesiadny w Radzewicach",
  description:
    "Organizacja wesel, komunii, 18-stek i eventów firmowych. Trzy przestrzenie eventowe: sala w dworku, zabytkowa stajnia i kopuła glamping nad Wartą.",
};

const eventTypes = [
  {
    icon: Heart,
    title: "Wesela",
    description:
      "Ceremonia i przyjęcie weselne w jednym miejscu. Nocleg dla wszystkich gości na miejscu — 8 apartamentów. Trzy przestrzenie do wyboru: sala w dworku, stajnia, kopuła glamping.",
  },
  {
    icon: PartyPopper,
    title: "Komunie i 18-tki",
    description:
      "Kameralne uroczystości rodzinne w otoczeniu łąk nadwarciańskich i starodrzewu akacji. Restauracja na miejscu, strefa relaksu dla dorosłych, ogród i woliera dla dzieci.",
  },
  {
    icon: Briefcase,
    title: "Eventy firmowe",
    description:
      "Wyjazdowe szkolenia, integracje, spotkania strategiczne z dala od biura. Restauracja, nocleg, sauna — wszystko w jednym miejscu, ~40 minut od Poznania.",
  },
  {
    icon: Users,
    title: "Urodziny i inne",
    description:
      "Każde przyjęcie na miarę — od kameralnych kolacji po imprezy dla całej rodziny. Dwa ogniska, wypożyczalnia rowerów elektrycznych, szlaki nordic walking.",
  },
];

const venues = [
  {
    name: "Sala w dworku",
    description:
      "Główna przestrzeń eventowa na większe przyjęcia. Klimat szlacheckiego dworku, widok na łąki nadwarciańskie. Pełne zaplecze gastronomiczne restauracji.",
    capacity: "[PLACEHOLDER: pojemność]",
  },
  {
    name: "Stara stajnia",
    description:
      "Zabytkowy budynek z charakterem na kameralne spotkania. Oryginalny klimat, stonowane oświetlenie, rustykalne detale. Idealna na spotkania do kilkudziesięciu osób.",
    capacity: "[PLACEHOLDER: pojemność]",
  },
  {
    name: "Kopuła glamping",
    description:
      "37,5 m² przy starorzeczu Warty. Uroczystości w plenerze przy naturze — bez rezygnacji z wygody. Kameralne wesela, osiemnastki, komunie pod gwiazdami.",
    capacity: "Do kilkunastu osób",
  },
];

const included = [
  "Nocleg dla gości — 8 apartamentów na miejscu",
  "Restauracja z kuchnią z lokalnych produktów",
  "Strefa relaksu: sauna, balia, jacuzzi",
  "Dwa ogniska z widokiem na łąki",
  "Wypożyczalnia rowerów elektrycznych",
  "Bezpłatny parking na terenie obiektu",
  "Woliera z papugami i gołębiami w ogrodzie",
  "Szlaki nordic walking wzdłuż Warty",
];

export default function WydarzeniaPage() {
  return (
    <div className="min-h-screen bg-warm-white">
      {/* Hero */}
      <section className="relative py-28 md:py-36 px-4 md:px-8 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&h=800&fit=crop"
          alt="Sala eventowa Dworek Biesiadny"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary-dark/65" />
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">
            Uroczystości
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Wesela i wydarzenia
          </h1>
          <div className="w-16 h-0.5 bg-accent mb-6" />
          <p className="font-body text-white/90 text-base md:text-xl max-w-2xl leading-relaxed">
            Trzy przestrzenie eventowe o różnym charakterze — wesela, komunie, osiemnastki,
            imprezy firmowe. Nocleg dla gości na miejscu, restauracja i strefa relaksu w cenie
            otoczenia.
          </p>
        </div>
      </section>

      {/* Rodzaje wydarzeń */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">
              Co organizujemy
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-primary-dark mb-4">
              Rodzaje wydarzeń
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventTypes.map((event) => (
              <div
                key={event.title}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative">
                  <PhotoPlaceholder
                    className="aspect-[16/7]"
                    label={`Zdjęcie — ${event.title}`}
                  />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2 z-10">
                    <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center shrink-0">
                      <event.icon className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="font-heading text-lg text-primary-dark font-bold">
                      {event.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-body text-gray-700 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Przestrzenie */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">
              Przestrzenie
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-primary-dark mb-4">
              Gdzie zorganizujesz swoje wydarzenie
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {venues.map((venue) => (
              <div
                key={venue.name}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <PhotoPlaceholder
                  className="aspect-[4/3]"
                  label={`Zdjęcie — ${venue.name}`}
                />
                <div className="p-6">
                  <h3 className="font-heading text-xl text-primary-dark mb-1 font-bold">
                    {venue.name}
                  </h3>
                  <p className="font-body text-xs text-accent mb-3">{venue.capacity}</p>
                  <p className="font-body text-gray-700 text-sm leading-relaxed">
                    {venue.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* W pakiecie */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-primary-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">
                W pakiecie
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
                Co zawiera rezerwacja
              </h2>
              <div className="w-16 h-0.5 bg-accent mb-8" />
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-3 font-body text-sm text-white/85">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 rounded-2xl p-10 border border-white/10 text-center">
              <p className="font-heading text-2xl text-white mb-4">
                Zapytaj o dostępność terminu
              </p>
              <p className="font-body text-white/75 text-sm mb-8 leading-relaxed">
                Odpowiadamy w ciągu 24 godzin w dni robocze. Opisz wydarzenie, termin i
                liczbę gości — wrócimy z ofertą.
              </p>
              <Link
                href="/kontakt"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "bg-accent hover:bg-accent-light text-white font-body font-semibold px-8 py-4 h-14"
                )}
              >
                Napisz do nas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
