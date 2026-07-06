import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { rooms } from "@/lib/rooms-data";
import { Users, Maximize, BedDouble, Eye, Bath, Check, ArrowLeft, Wifi, Coffee } from "lucide-react";
import { RoomImageSlider } from "@/components/room-image-slider";
import { BookingButton } from "@/components/booking-button";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return rooms.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const room = rooms.find((r) => r.slug === params.slug);
  if (!room) return { title: "Pokój nie znaleziony" };
  return {
    title: `${room.name} — Dworek Biesiadny w Radzewicach`,
    description: room.description,
  };
}

export default function RoomPage({ params }: Props) {
  const room = rooms.find((r) => r.slug === params.slug);
  if (!room) notFound();

  const currentIndex = rooms.findIndex((r) => r.slug === params.slug);
  const prevRoom = currentIndex > 0 ? rooms[currentIndex - 1] : null;
  const nextRoom = currentIndex < rooms.length - 1 ? rooms[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Hero slider — full viewport height */}
      <div className="relative h-[55vh] md:h-[65vh] overflow-hidden">
        <RoomImageSlider
          images={room.images}
          alt={`${room.name} — Dworek Biesiadny w Radzewicach`}
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 md:px-8 pb-10 max-w-7xl mx-auto">
          <Link
            href="/pokoje"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white font-body text-sm mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Wszystkie pokoje
          </Link>
          <h1 className="font-heading text-4xl md:text-6xl text-white font-bold mb-3">{room.name}</h1>
          <div className="flex flex-wrap gap-3">
            <span className="bg-white/20 backdrop-blur text-white px-3 py-1.5 rounded-full font-body text-sm flex items-center gap-1.5">
              <Maximize className="w-3.5 h-3.5" /> {room.size} m²
            </span>
            <span className="bg-white/20 backdrop-blur text-white px-3 py-1.5 rounded-full font-body text-sm flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" /> max {room.maxGuests} osób
            </span>
            {room.images.length > 1 && (
              <span className="bg-white/20 backdrop-blur text-white px-3 py-1.5 rounded-full font-body text-sm">
                {room.images.length} zdjęcia
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Content */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="font-heading text-2xl text-primary-dark mb-4">O apartamencie</h2>
              <p className="font-body text-gray-600 leading-relaxed text-lg">{room.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: BedDouble, title: "Łóżka", content: room.beds },
                { icon: Eye, title: "Widok", content: room.view },
                { icon: Bath, title: "Łazienka", content: room.bathroom },
              ].map((item) => (
                <div key={item.title} className="bg-cream rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <item.icon className="w-5 h-5 text-accent" />
                    <h3 className="font-heading text-base text-primary-dark font-bold">{item.title}</h3>
                  </div>
                  <p className="font-body text-gray-600 text-sm">{item.content}</p>
                </div>
              ))}

              <div className="bg-cream rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Check className="w-5 h-5 text-accent" />
                  <h3 className="font-heading text-base text-primary-dark font-bold">Wyposażenie</h3>
                </div>
                <ul className="space-y-1">
                  {room.features.map((f) => (
                    <li key={f} className="font-body text-gray-600 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="font-heading text-base text-primary-dark font-bold mb-4">
                Wyposażenie wspólne dla wszystkich gości
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  "TV internetowa 100+ kanałów + Netflix",
                  "WiFi światłowodowe",
                  "Ekspres do kawy na korytarzu",
                  "Lodówka z kostkarką",
                  "Zamrażarka",
                  "Woda filtrowana z dystrybutora",
                  "Woda źródlana z kranika",
                  "Naczynia, sztućce, kieliszki, czajnik",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 font-body text-sm text-gray-600">
                    <Wifi className="w-3.5 h-3.5 text-accent shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking sidebar */}
          <div>
            <div className="bg-primary-dark text-white rounded-2xl p-8 sticky top-8">
              <p className="font-body text-white/60 text-sm mb-1">Dostępność i ceny</p>
              <p className="font-heading text-xl text-white font-bold mb-1">{room.name}</p>
              <p className="font-body text-white/50 text-xs mb-6">
                Cena zależy od terminu — sprawdź dostępność poniżej.
              </p>

              {/*
                BOOKING ENGINE WIDGET — PLACEHOLDER
                =====================================
                Zastąp poniższy div kodem widgetu systemu rezerwacji.
                Przykład podpięcia Booking.com Button Widget:
                  <div id="booking-widget" data-hotel-id="TWOJE_ID"></div>
                  <script async src="https://www.booking.com/widget.js"></script>

                Lub np. Profitroom / Hotres / Eviivo widget.
              */}
              <div
                id={`booking-engine-room-${room.slug}`}
                className="booking-engine-placeholder mb-4 bg-white/5 border border-white/10 rounded-xl p-4 text-center"
              >
                <p className="font-body text-white/40 text-xs">
                  [MIEJSCE NA WIDGET SYSTEMU REZERWACJI]
                </p>
              </div>

              {/* BOOKING ENGINE: BookingButton triggers booking engine modal */}
              <BookingButton
                roomSlug={room.slug}
                label="Zarezerwuj ten pokój"
                size="lg"
                className="w-full justify-center mb-3"
              />
              <BookingButton
                roomSlug={room.slug}
                label="Sprawdź dostępność"
                size="default"
                variant="outline"
                className="w-full justify-center border-white/20 text-white/70 hover:border-accent hover:text-white hover:bg-transparent"
              />

              <div className="mt-6 pt-6 border-t border-white/10 space-y-2">
                {[
                  { icon: Maximize, label: `${room.size} m²` },
                  { icon: Users, label: `Max ${room.maxGuests} osób` },
                  { icon: Coffee, label: "Aneks kuchenny" },
                  { icon: Wifi, label: "WiFi światłowodowe" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 font-body text-sm text-white/70">
                    <item.icon className="w-4 h-4 text-accent" />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Prev / Next navigation */}
        {(prevRoom || nextRoom) && (
          <div className="mt-16 pt-10 border-t border-gray-100">
            <p className="font-body text-sm text-gray-400 uppercase tracking-wide mb-6">
              Inne apartamenty
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {prevRoom && (
                <Link
                  href={`/pokoje/${prevRoom.slug}`}
                  className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                  <div>
                    <p className="font-body text-xs text-gray-400">Poprzedni</p>
                    <p className="font-heading text-primary-dark group-hover:text-primary transition-colors">
                      {prevRoom.name}
                    </p>
                  </div>
                </Link>
              )}
              {nextRoom && (
                <Link
                  href={`/pokoje/${nextRoom.slug}`}
                  className="flex items-center justify-end gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow group md:ml-auto w-full"
                >
                  <div className="text-right">
                    <p className="font-body text-xs text-gray-400">Następny</p>
                    <p className="font-heading text-primary-dark group-hover:text-primary transition-colors">
                      {nextRoom.name}
                    </p>
                  </div>
                  <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors rotate-180" />
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
