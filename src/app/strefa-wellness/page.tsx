import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Users, Thermometer, Zap, Wifi, Droplets, Waves, Check, Flame } from "lucide-react";

export const metadata: Metadata = {
  title: "Strefa Wellness — Sauna i Balia — Dworek Biesiadny",
  description:
    "Sauna zewnętrzna panoramiczna na 6–8 osób z widokiem na starorzecze Warty oraz balia drewniana opalana drewnem z hydromasażem. Dworek Biesiadny w Radzewicach.",
};

const wellnessPackages = [
  {
    name: "Pobyt swobodny",
    subtitle: "Dla gości dworku i osób z zewnątrz",
    variants: [
      { duration: "90 minut", price: "99 zł/os" },
      { duration: "120 minut", price: "149 zł/os" },
    ],
    includes: [
      "Sauna i balia",
      "Ręcznik kąpielowy",
      "Herbata wellness z miodem z pasieki Dworku lub karafka wody z miętą/pokrzywą",
      "Wybór olejku eterycznego do sauny",
    ],
    highlight: false,
  },
  {
    name: "Prywatna strefa dla pary",
    subtitle: "Sauna i balia na wyłączność",
    variants: [{ duration: "90 minut", price: "320 zł/para" }],
    includes: [
      "Prywatny dostęp do sauny i balii",
      "Szlafroki",
      "Ręczniki kąpielowe i saunowe",
      "Herbata wellness z miodem",
      "Karafka wody z miętą/pokrzywą",
      "Olejek eteryczny",
    ],
    highlight: true,
  },
  {
    name: "Kameralne grupy",
    subtitle: "4–6 osób, każda kolejna +99 zł",
    variants: [{ duration: "120 minut", price: "690 zł/grupę" }],
    includes: [
      "Sauna i balia na wyłączność",
      "Karafka wody",
      "Olejek eteryczny",
      "Kameralna atmosfera",
    ],
    addons: "Opcje dodatkowe: ognisko lub grill, deska przekąsek, słodki kącik.",
    highlight: false,
  },
];

export default function StrefaWellnessPage() {
  return (
    <div className="min-h-screen bg-warm-white">
      {/* Hero */}
      <section className="relative py-28 md:py-36 px-4 md:px-8 overflow-hidden">
        <Image
          src="/images/wellness/sauna-a.jpg"
          alt="Sauna zewnętrzna z widokiem na starorzecze Warty"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary-dark/65" />
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">
            Relaks
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Strefa Wellness
          </h1>
          <div className="w-16 h-0.5 bg-accent mb-6" />
          <p className="font-body text-white/90 text-base md:text-xl max-w-2xl leading-relaxed">
            Sauna z widokiem na starorzecze Warty i balia drewniana opalana drewnem.
            Wieczorem w balii z widokiem na polany — lepszy reset niż jakikolwiek retreat za
            trzy razy większe pieniądze.
          </p>
        </div>
      </section>

      {/* Sauna */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">01</p>
              <h2 className="font-heading text-3xl md:text-4xl text-primary-dark mb-6">
                Sauna zewnętrzna
              </h2>
              <div className="w-16 h-0.5 bg-accent mb-8" />
              <p className="font-body text-gray-700 leading-relaxed mb-6">
                Sauna na platformie mobilnej mieści do ośmiu osób. Wnętrze ze świerku
                skandynawskiego klasy A — drewno pracuje równomiernie i nie pęka. Ławy z drewna
                abachi nie nagrzewają się i nie parzą dłoni.
              </p>
              <p className="font-body text-gray-700 leading-relaxed mb-8">
                Panoramiczne okno 200×250 cm wychodzi na starorzecze Warty. Piec elektryczny
                Harvia 10,5 KW ze sterowaniem WiFi plus tradycyjny piec na drewno — każdy
                wybiera według preferencji. Przedsionek z ławkami i wieszakami, drzwi ze
                szkła hartowanego 8 mm, leżaki na zewnątrz.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Users, label: "6–8 osób" },
                  { icon: Thermometer, label: "Piec Harvia 10,5 KW" },
                  { icon: Wifi, label: "Sterowanie WiFi" },
                  { icon: Zap, label: "Piec na drewno" },
                ].map((f) => (
                  <div
                    key={f.label}
                    className="flex items-center gap-2 bg-cream rounded-lg px-3 py-2 font-body text-sm text-primary-dark"
                  >
                    <f.icon className="w-4 h-4 text-accent shrink-0" />
                    {f.label}
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-cream rounded-lg px-3 py-2 font-body text-xs text-gray-600">
                Wymiary zewnętrzne: 200×500 cm · Okno panoramiczne: 200×250 cm ·
                Oświetlenie LED RGB z pilotem
              </div>
            </div>
            <div className="aspect-[4/5] rounded-2xl shadow-xl overflow-hidden">
              <Image
                src="/images/wellness/sauna-b.jpg"
                alt="Sauna zewnętrzna z panoramicznym oknem na starorzecze Warty"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Balia */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="aspect-[4/5] rounded-2xl shadow-xl overflow-hidden order-2 md:order-1">
              <Image
                src="/images/wellness/balia-nocna.jpg"
                alt="Balia drewniana opalana drewnem — Dworek Biesiadny strefa wellness"
                fill
                className="object-cover"
                style={{ objectPosition: "center 40%" }}
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">02</p>
              <h2 className="font-heading text-3xl md:text-4xl text-primary-dark mb-6">
                Balia drewniana
              </h2>
              <div className="w-16 h-0.5 bg-accent mb-8" />
              <p className="font-body text-gray-700 leading-relaxed mb-6">
                Balia opalana drewnem — piec zewnętrzny, więc woda nie pachnie dymem. Wkład
                z włókna szklanego jest łatwy w utrzymaniu i wygodny w dotyku. Termopokrywa
                zatrzymuje ciepło, schody ułatwiają wejście.
              </p>
              <p className="font-body text-gray-700 leading-relaxed mb-8">
                Hydromasaż z ośmiu dysz i kolorowe podświetlenie LED robią swoje wieczorami.
                Widok na polany i starorzecze Warty — tego nie zrobi żaden spa w centrum
                miasta.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Users, label: "4–6 osób" },
                  { icon: Droplets, label: "Hydromasaż 8 dysz" },
                  { icon: Waves, label: "LED kolorowe" },
                  { icon: Thermometer, label: "Opalana drewnem" },
                ].map((f) => (
                  <div
                    key={f.label}
                    className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 font-body text-sm text-primary-dark"
                  >
                    <f.icon className="w-4 h-4 text-accent shrink-0" />
                    {f.label}
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-white rounded-lg px-3 py-2 font-body text-xs text-gray-600">
                Średnica: 200 cm · Wkład z włókna szklanego · Termopokrywa i schody w zestawie
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sauna i balia razem */}
      <section className="px-4 md:px-8 py-16 bg-warm-white">
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl relative aspect-[16/9]">
          <Image
            src="/images/wellness/sauna-balia-razem.jpg"
            alt="Sauna i balia razem — Strefa Wellness Dworek Biesiadny"
            fill
            className="object-cover"
            sizes="(max-width:1024px) 100vw, 1024px"
          />
        </div>
      </section>

      {/* Cennik */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">Cennik</p>
            <h2 className="font-heading text-3xl md:text-4xl text-primary-dark mb-4">
              Warianty strefy wellness
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {wellnessPackages.map((pkg) => (
              <div
                key={pkg.name}
                className={cn(
                  "rounded-2xl p-8 border-2 flex flex-col",
                  pkg.highlight
                    ? "bg-primary text-white border-primary shadow-xl scale-[1.03]"
                    : "bg-white text-primary-dark border-transparent hover:border-accent/30 transition-colors"
                )}
              >
                {pkg.highlight && (
                  <p className="font-body text-xs text-accent tracking-widest uppercase mb-2">
                    Popularne
                  </p>
                )}
                <h3 className={cn("font-heading text-xl font-bold mb-1", pkg.highlight ? "text-white" : "text-primary-dark")}>
                  {pkg.name}
                </h3>
                <p className={cn("font-body text-sm mb-5", pkg.highlight ? "text-white/70" : "text-gray-500")}>
                  {pkg.subtitle}
                </p>

                <div className="space-y-1 mb-6">
                  {pkg.variants.map((v) => (
                    <div key={v.duration} className="flex items-center justify-between">
                      <span className={cn("font-body text-sm", pkg.highlight ? "text-white/80" : "text-gray-600")}>
                        {v.duration}
                      </span>
                      <span className={cn("font-heading text-xl font-bold", pkg.highlight ? "text-accent" : "text-primary")}>
                        {v.price}
                      </span>
                    </div>
                  ))}
                </div>

                <ul className="space-y-2 mb-4 flex-1">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 font-body text-sm">
                      <Check className={cn("w-4 h-4 shrink-0 mt-0.5", pkg.highlight ? "text-accent" : "text-primary")} />
                      <span className={pkg.highlight ? "text-white/80" : "text-gray-700"}>{item}</span>
                    </li>
                  ))}
                </ul>

                {pkg.addons && (
                  <div className={cn("flex items-start gap-2 rounded-lg px-3 py-2 mb-6 font-body text-xs", pkg.highlight ? "bg-white/10 text-white/70" : "bg-cream text-gray-600")}>
                    <Flame className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    {pkg.addons}
                  </div>
                )}

                <Link
                  href="/kontakt"
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "w-full justify-center font-body font-medium mt-auto",
                    pkg.highlight
                      ? "bg-accent hover:bg-accent-light text-white border-accent"
                      : "bg-primary hover:bg-primary-dark text-white"
                  )}
                >
                  Zapytaj o termin
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 bg-primary-dark text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            Zarezerwuj wieczór w strefie wellness
          </h2>
          <p className="font-body text-white/80 mb-8">
            Strefa Wellness dostępna dla gości dworku i osób z zewnątrz. Napisz do nas i
            zaplanuj wieczór w saunie z widokiem na Wartę.
          </p>
          <Link
            href="/kontakt"
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-accent hover:bg-accent-light text-white font-body font-semibold px-10 py-4 h-14"
            )}
          >
            Zapytaj o termin
          </Link>
        </div>
      </section>
    </div>
  );
}
