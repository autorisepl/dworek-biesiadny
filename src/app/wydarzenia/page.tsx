import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { wydarzeniaOferty } from "@/lib/wydarzenia-oferty-data";
import { Heart, Users, Briefcase, PartyPopper, CheckCircle, Flame, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Wesela i wydarzenia — Dworek Biesiadny w Radzewicach",
  description:
    "Organizacja wesel, komunii, 18-stek i eventów firmowych. Trzy przestrzenie eventowe: sala w dworku, zabytkowa stajnia i kopuła glamping nad Wartą.",
};

const eventTypes = [
  {
    icon: Heart,
    title: "Wesela",
    imageLabel: "Zdjęcie — Wesele, ceremonia lub przyjęcie",
    description:
      "Ceremonia i przyjęcie weselne w jednym miejscu. Nocleg dla wszystkich gości na miejscu — 8 apartamentów. Trzy przestrzenie do wyboru: sala w dworku, stajnia, kopuła glamping.",
  },
  {
    icon: PartyPopper,
    title: "Komunie i 18-tki",
    imageLabel: "Zdjęcie — Komunia lub 18-tka, uroczystość rodzinna",
    description:
      "Kameralne uroczystości rodzinne w otoczeniu łąk nadwarciańskich i starodrzewu akacji. Restauracja na miejscu, strefa relaksu dla dorosłych, ogród i woliera dla dzieci.",
  },
  {
    icon: Briefcase,
    title: "Eventy firmowe",
    imageLabel: "Zdjęcie — Event firmowy, integracja",
    description:
      "Wyjazdowe szkolenia, integracje, spotkania strategiczne z dala od biura. Restauracja, nocleg, sauna — wszystko w jednym miejscu, ~40 minut od Poznania.",
  },
  {
    icon: Users,
    title: "Urodziny i inne",
    imageLabel: "Zdjęcie — Przyjęcie okolicznościowe",
    description:
      "Każde przyjęcie na miarę — od kameralnych kolacji po imprezy dla całej rodziny. Dwa ogniska, wypożyczalnia rowerów elektrycznych, szlaki nordic walking.",
  },
];

const venues = [
  {
    name: "Sala w dworku",
    image: "/images/events/sala-a.jpg",
    hasPhoto: true,
    description:
      "Główna przestrzeń eventowa na większe przyjęcia. Klimat szlacheckiego dworku, widok na łąki nadwarciańskie. Pełne zaplecze gastronomiczne restauracji.",
    capacity: "Zapytaj o pojemność",
  },
  {
    name: "Stara stajnia",
    image: "/images/events/stara-stajnia.jpg",
    hasPhoto: true,
    description:
      "Zabytkowy budynek z charakterem na kameralne spotkania. Oryginalny klimat, stonowane oświetlenie, rustykalne detale. Idealna na spotkania do kilkudziesięciu osób.",
    capacity: "Zapytaj o pojemność",
  },
  {
    name: "Kopuła glamping",
    image: "/images/glamping/kopula-a.jpg",
    hasPhoto: true,
    description:
      "37,5 m² przy starorzeczu Warty. Uroczystości w plenerze przy naturze — bez rezygnacji z wygody. Kameralne wesela, osiemnastki, komunie pod gwiazdami.",
    capacity: "Do kilkunastu osób",
  },
];

const included = [
  "Nocleg dla gości — 8 apartamentów na miejscu",
  "Restauracja z kuchnią z lokalnych produktów",
  "Strefa Wellness: sauna i balia",
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
          src="/images/events/sala-a.jpg"
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
              <Link
                href="/kontakt"
                key={event.title}
                className="block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative">
                  <div className="relative aspect-[16/7] overflow-hidden">
                    <PhotoPlaceholder className="absolute inset-0 w-full h-full" label={event.imageLabel} />
                    <div className="absolute inset-0 bg-primary-dark/30" />
                  </div>
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
              </Link>
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
                <div className="relative aspect-[4/3] overflow-hidden">
                  {venue.hasPhoto ? (
                    <Image
                      src={venue.image}
                      alt={`${venue.name} — Dworek Biesiadny`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width:768px) 100vw, 33vw"
                    />
                  ) : (
                    <PhotoPlaceholder className="w-full h-full" label={`Zdjęcie — ${venue.name}`} />
                  )}
                </div>
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

      {/* Grill i Ognisko */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">
              Catering plenerowy
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-primary-dark mb-4">
              Grill i ognisko
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {wydarzeniaOferty.map((oferta) => (
              <Link
                key={oferta.slug}
                href={`/wydarzenia/${oferta.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative aspect-[16/7] overflow-hidden">
                  <PhotoPlaceholder className="absolute inset-0 w-full h-full" label={`Zdjęcie — ${oferta.title}`} />
                  <div className="absolute inset-0 bg-primary-dark/30" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2 z-10">
                    <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center shrink-0">
                      <Flame className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="font-heading text-lg text-white font-bold">{oferta.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-body text-gray-700 text-sm leading-relaxed mb-4">
                    {oferta.heroDescription}
                  </p>
                  <span className="inline-flex items-center gap-1 font-body text-sm text-primary group-hover:text-primary-dark transition-colors">
                    Zobacz cennik <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
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
