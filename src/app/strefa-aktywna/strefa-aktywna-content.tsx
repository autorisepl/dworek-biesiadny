"use client";

import { MotionDiv } from "@/components/motion";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { Zap, Bike, MapPin, Clock, Users, ChevronRight, Phone, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { BOOKING_ENGINE_URL } from "@/lib/booking";

const bikes = [
  {
    type: "electric" as const,
    name: "Rower elektryczny",
    price: 150,
    unit: "dzień",
    icon: Zap,
    color: "bg-primary",
    textColor: "text-white",
    accentColor: "text-accent",
    description:
      "Nowoczesne rowery elektryczne z wspomaganiem — idealne do dłuższych tras wzdłuż Warty i do Mosiny. Bez wysiłku, z przyjemnością.",
    features: [
      "Wspomaganie elektryczne do 25 km/h",
      "Zasięg do 80 km na jednym ładowaniu",
      "Ładowanie w dworku wliczone",
      "Kask w cenie",
      "Idealne dla każdego poziomu sprawności",
    ],
    image: null,
    imagePlaceholder: "Rower elektryczny Dworek Biesiadny",
  },
  {
    type: "classic" as const,
    name: "Rower klasyczny",
    price: 70,
    unit: "dzień",
    icon: Bike,
    color: "bg-cream",
    textColor: "text-primary-dark",
    accentColor: "text-accent",
    description:
      "Sprawne rowery trekkingowe dla tych, którzy lubią pedałować w swoim rytmie. Wiele przerzutek, wygodna rama.",
    features: [
      "Rower trekkingowy 21-biegowy",
      "Damski i męski",
      "Koszyk lub sakwy na życzenie",
      "Pompka i łańcuszek w zestawie",
      "Dla dzieci od 10 lat",
    ],
    image: null,
    imagePlaceholder: "Rower klasyczny Dworek Biesiadny",
  },
];

const routes = [
  {
    name: "Trasa Nadwarciańska",
    distance: "12 km",
    difficulty: "Łatwa",
    description: "Szlak wzdłuż starorzecza Warty przez Łąki Nadwarciańskie. Płaski, idealny dla rodzin.",
    icon: "🌿",
  },
  {
    name: "Mosina i z powrotem",
    distance: "18 km",
    difficulty: "Umiarkowana",
    description: "Do centrum Mosiny przez pola i lasy. Po drodze Rogalin i galeria w zamku.",
    icon: "🏘️",
  },
  {
    name: "Pętla Rogalińska",
    distance: "35 km",
    difficulty: "Dla aktywnych",
    description: "Przez Rogalin, wzdłuż Warty, z widokiem na pola i zalew. Wersja dla rowerzystów.",
    icon: "🌳",
  },
];

export function StrefaAktywnaContent() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-primary-dark text-white py-24 md:py-36 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <PhotoPlaceholder className="w-full h-full" label="Zdjęcie — Łąki nadwarciańskie przy dworku" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/70 to-primary-dark/95" />
        <div className="relative max-w-4xl mx-auto text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <p className="font-body text-accent text-xs tracking-widest uppercase mb-4">Dworek Biesiadny</p>
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-4">Strefa dla aktywnych</h1>
            <p className="font-heading text-xl md:text-2xl italic text-accent mb-6">Odkryj okolicę na dwóch kółkach</p>
            <p className="font-body text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-10">
              Kilkanaście rowerów elektrycznych i klasycznych czeka na naszych gości. Łąki
              Nadwarciańskie, starorzecze Warty i okolice Rogalina — wszystko dostępne bez wysiłku.
            </p>
            <a href="#rowery" className={cn(buttonVariants(), "bg-accent hover:bg-accent-light text-white font-body font-semibold px-8 h-14 text-base")}>
              Zobacz rowery
            </a>
          </MotionDiv>
        </div>
      </section>

      {/* Bikes */}
      <section id="rowery" className="py-20 md:py-28 px-4 md:px-8 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35 }}
            className="mb-14"
          >
            <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">Wypożyczalnia</p>
            <h2 className="font-heading text-3xl md:text-5xl text-primary-dark mb-6">Nasze rowery</h2>
            <div className="w-16 h-0.5 bg-accent mb-6" />
            <p className="font-body text-gray-600 text-base md:text-lg max-w-2xl">
              Dysponujemy kilkunastoma rowerami elektrycznymi i klasycznymi dostępnymi dla gości
              dworku. Rezerwacja telefonicznie lub przy zameldowaniu.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bikes.map((bike, i) => (
              <MotionDiv
                key={bike.type}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.35, delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-cream"
              >
                {/* Image */}
                <div className="relative aspect-[16/9]">
                  <PhotoPlaceholder className="w-full h-full" label={bike.imagePlaceholder} />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={cn("w-11 h-11 rounded-xl flex items-center justify-center", bike.type === "electric" ? "bg-primary" : "bg-cream")}>
                        <bike.icon className={cn("w-5 h-5", bike.type === "electric" ? "text-white" : "text-primary")} />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl text-primary-dark font-bold">{bike.name}</h3>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-heading text-3xl font-bold text-primary-dark">{bike.price} zł</p>
                      <p className="font-body text-xs text-gray-400">/{bike.unit}</p>
                    </div>
                  </div>

                  <p className="font-body text-gray-600 text-sm leading-relaxed mb-6">{bike.description}</p>

                  <ul className="space-y-2">
                    {bike.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 font-body text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-primary/60 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionDiv>
            ))}
          </div>

          {/* Info strip */}
          <MotionDiv
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35 }}
            className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {[
              { icon: Clock, label: "Godziny wypożyczalni", value: "7:00 – 21:00, codziennie" },
              { icon: MapPin, label: "Odbiór i zwrot", value: "Na miejscu w dworku" },
              { icon: Users, label: "Rezerwacja", value: "Telefonicznie lub przy zameldowaniu" },
            ].map((item) => (
              <div key={item.label} className="bg-cream rounded-2xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body text-xs text-gray-400 uppercase tracking-widest mb-0.5">{item.label}</p>
                  <p className="font-body text-sm font-medium text-primary-dark">{item.value}</p>
                </div>
              </div>
            ))}
          </MotionDiv>
        </div>
      </section>

      {/* Routes */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35 }}
            className="mb-12"
          >
            <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">Trasy</p>
            <h2 className="font-heading text-3xl md:text-5xl text-primary-dark mb-6">Gdzie pojechać?</h2>
            <div className="w-16 h-0.5 bg-accent" />
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {routes.map((route, i) => (
              <MotionDiv
                key={route.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-cream hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{route.icon}</div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-body text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{route.distance}</span>
                  <span className="font-body text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full">{route.difficulty}</span>
                </div>
                <h3 className="font-heading text-lg text-primary-dark font-bold mb-2">{route.name}</h3>
                <p className="font-body text-sm text-gray-500 leading-relaxed">{route.description}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery strip from otoczenie */}
      <section className="py-16 px-4 md:px-8 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3 rounded-2xl overflow-hidden">
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} className="relative aspect-square overflow-hidden rounded-xl">
                <PhotoPlaceholder className="w-full h-full" label={`Zdjęcie — Okolice dworku, widok ${n}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-8 bg-primary-dark text-white text-center">
        <div className="max-w-2xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
          >
            <p className="font-body text-accent text-xs tracking-widest uppercase mb-4">Zarezerwuj pobyt</p>
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">Gotowy na przygodę?</h2>
            <p className="font-body text-white/70 mb-8 leading-relaxed">
              Zarezerwuj nocleg i wypożycz rower na miejscu. Łąki Nadwarciańskie czekają.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={BOOKING_ENGINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants(), "bg-accent hover:bg-accent-light text-white font-body font-semibold h-14 px-8 text-base")}
              >
                Zarezerwuj pokój
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
              <a
                href="tel:+48691845079"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-body font-semibold h-14 px-8 text-base rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4" />
                +48 691 845 079
              </a>
            </div>
          </MotionDiv>
        </div>
      </section>
    </main>
  );
}
