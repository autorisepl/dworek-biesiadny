import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Users, Thermometer, Zap, Wifi, Droplets, Waves } from "lucide-react";


export const metadata: Metadata = {
  title: "Strefa relaksu — Sauna, Balia, Jacuzzi — Dworek Biesiadny",
  description:
    "Sauna zewnętrzna panoramiczna na 6–8 osób z widokiem na starorzecze Warty, balia drewniana opalana drewnem z hydromasażem oraz jacuzzi. Dworek Biesiadny w Radzewicach.",
};

export default function StrefaRelaksuPage() {
  return (
    <div className="min-h-screen bg-warm-white">
      {/* Hero */}
      <section className="relative py-28 md:py-36 px-4 md:px-8 overflow-hidden">
        <Image
          src="/images/wellness/wellness-1.jpg"
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
            Strefa relaksu
          </h1>
          <div className="w-16 h-0.5 bg-accent mb-6" />
          <p className="font-body text-white/90 text-base md:text-xl max-w-2xl leading-relaxed">
            Sauna z widokiem na starorzecze Warty, balia drewniana opalana drewnem i jacuzzi.
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
                src="/images/wellness/wellness-1.jpg"
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
                src="/images/wellness/wellness-1.jpg"
                alt="Balia drewniana w strefie relaksu"
                fill
                className="object-cover"
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

      {/* Jacuzzi */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">03</p>
              <h2 className="font-heading text-3xl md:text-4xl text-primary-dark mb-6">
                Jacuzzi
              </h2>
              <div className="w-16 h-0.5 bg-accent mb-8" />
              <p className="font-body text-gray-700 leading-relaxed mb-8">
                Jacuzzi przy saunie zewnętrznej uzupełnia strefę relaksu. Razem tworzą
                kompletny rytm: sauna — zimny prysznic — jacuzzi — balia pod gwiazdami.
                Dostępne wyłącznie dla gości dworku.
              </p>
              <div className="flex items-center gap-2 bg-cream rounded-lg px-3 py-2 font-body text-sm text-primary-dark w-fit">
                <Waves className="w-4 h-4 text-accent" />
                Dostępne dla gości dworku
              </div>
            </div>
            <div className="aspect-[4/3] rounded-2xl shadow-xl overflow-hidden">
              <Image
                src="/images/wellness/wellness-1.jpg"
                alt="Jacuzzi przy saunie zewnętrznej — strefa relaksu"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 bg-primary-dark text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            Zarezerwuj wieczór w strefie relaksu
          </h2>
          <p className="font-body text-white/80 mb-8">
            Strefa relaksu dostępna dla gości dworku. Zarezerwuj apartament i zaplanuj
            wieczór w saunie z widokiem na Wartę.
          </p>
          <Link
            href="/rezerwacja"
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-accent hover:bg-accent-light text-white font-body font-semibold px-10 py-4 h-14"
            )}
          >
            Zarezerwuj pobyt
          </Link>
        </div>
      </section>
    </div>
  );
}
