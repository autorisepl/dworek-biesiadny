import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Leaf, Clock, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Restauracja — Dworek Biesiadny w Radzewicach",
  description:
    "Restauracja w dworku serwuje dania przygotowywane z lokalnych produktów. Menu zmienia się sezonowo i uwzględnia kuchnię regionalną Wielkopolski.",
};

const menuSections = [
  {
    category: "Kawa i herbata",
    items: [
      { name: "Kawa z ekspresu", price: "15 zł" },
      { name: "Espresso", price: "15 zł" },
      { name: "Espresso Doppio", price: "15 zł" },
      { name: "Cafe Macchiato", price: "18 zł" },
      { name: "Cappuccino", price: "18 zł" },
      { name: "Cafe Latte", price: "18 zł" },
      { name: "Kawa mrożona", price: "25 zł" },
    ],
  },
  {
    category: "Napoje zimne",
    items: [
      { name: "Woda gazowana Kropla Beskidu", price: "8 zł" },
      { name: "Woda niegazowana Kropla Beskidu", price: "8 zł" },
      { name: "Coca-Cola 200ml", price: "10 zł" },
      { name: "Fanta Orange 200ml", price: "10 zł" },
      { name: "Sprite 200ml", price: "10 zł" },
      { name: "Tonik Kinley 200ml", price: "10 zł" },
      { name: "Fuze Tea 250ml", price: "10 zł" },
    ],
  },
  {
    category: "Soki (250ml)",
    items: [
      { name: "Sok pomarańczowy", price: "10 zł" },
      { name: "Sok grejpfrutowy", price: "10 zł" },
      { name: "Sok jabłkowy", price: "10 zł" },
      { name: "Sok z czarnej porzeczki", price: "10 zł" },
    ],
  },
  {
    category: "Zupy",
    items: [
      { name: "Rosół z makaronem", price: "21 zł" },
      { name: "Czernina z kluseczkami", price: "29 zł" },
      { name: "Zupa dworska", price: "29 zł" },
    ],
  },
  {
    category: "Sałatki",
    items: [
      {
        name: "Sałatka grecka — sałata mix, pomidorki, ogórek zielony, papryka, ser feta, czerwona cebula, oliwki, sos vinegrette, bułeczki z pieca",
        price: "36 zł",
      },
      {
        name: "Cezar z kurczakiem — sałata rzymska, grzanki czosnkowe, parmezan, sos cezar",
        price: "42 zł",
      },
    ],
  },
  {
    category: "Dania główne",
    items: [
      { name: "DeVolaille z masłem i pietruszką, frytki, bukiet surówek", price: "42 zł" },
      {
        name: "Polędwiczka wieprzowa w sosie ze świeżych kurek, kluski półfrancuskie, warzywa gotowane",
        price: "62 zł",
      },
      { name: "Schab z kostką, puree, kapusta zasmażana", price: "52 zł" },
      { name: "Rolada wołowa, pampuchy, sos, modra kapusta", price: "69 zł" },
      {
        name: "Burger wołowy — 100% wołowiny, bułka maślana, pikle, sałata, sos dworski, frytki",
        price: "46 zł",
      },
    ],
  },
  {
    category: "Dania dla dzieci",
    items: [
      {
        name: "Polędwiczki drobiowe w chrupiącej panierce, frytki, surówka z białej kapusty",
        price: "35 zł",
      },
      {
        name: "Naleśniki z serkiem waniliowym, świeże owoce sezonowe, bita śmietana",
        price: "35 zł",
      },
    ],
  },
  {
    category: "Rybne przysmaki",
    items: [
      { name: "Radzewicki Pstrąg, frytki, surówki", price: "65 zł" },
      { name: "Sandacz na maśle tymiankowym, puree, szpinak, sos maślano-cytrynowy", price: "75 zł" },
    ],
  },
  {
    category: "Desery",
    items: [
      { name: "Sernik z lodami czekoladowymi i wiśnią", price: "38 zł" },
      { name: "Lody waniliowe z gorącymi malinami i bitą śmietaną", price: "38 zł" },
      { name: "Szarlotka dworska z lodami i bitą śmietaną", price: "38 zł" },
    ],
  },
];

export default function RestauracjaPage() {
  return (
    <div className="min-h-screen bg-warm-white">
      <section className="relative py-28 md:py-36 px-4 md:px-8 overflow-hidden">
        <Image
          src="/images/events/sala-b.jpg"
          alt="Restauracja Dworek Biesiadny — sala jadalna"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary-dark/70" />
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">
            Kuchnia
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">Restauracja</h1>
          <div className="w-16 h-0.5 bg-accent mb-6" />
          <p className="font-body text-white/85 text-base md:text-xl max-w-2xl leading-relaxed">
            Restauracja w dworku serwuje dania przygotowywane z lokalnych produktów. Menu
            zmienia się sezonowo i uwzględnia kuchnię regionalną Wielkopolski.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-6">
            {[
              { icon: Leaf, label: "Lokalne produkty, sezonowe menu" },
              { icon: Clock, label: "Śniadania, obiady, kolacje" },
              { icon: Phone, label: "Rezerwacja stolika: +48 691 845 079" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 shadow-sm font-body text-sm text-primary-dark"
              >
                <item.icon className="w-4 h-4 text-accent" />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">Menu</p>
            <h2 className="font-heading text-3xl md:text-4xl text-primary-dark mb-4">
              Karta dań
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuSections.map((section) => (
              <div key={section.category} className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-heading text-xl text-primary-dark mb-4 pb-3 border-b border-cream">
                  {section.category}
                </h3>
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-start justify-between gap-4 py-2 font-body text-sm text-gray-700"
                  >
                    <span>{item.name}</span>
                    <span className="font-medium text-primary-dark shrink-0">{item.price}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="bg-cream rounded-2xl p-6 mt-8">
            <p className="font-body text-xs text-gray-500 text-center">
              Karta alkoholi i win dostępna na miejscu u obsługi.
            </p>
          </div>

          <div className="text-center mt-14">
            <p className="font-body text-gray-600 mb-4">
              Masz pytania o menu lub chcesz zarezerwować stolik?
            </p>
            <Link
              href="/kontakt"
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-primary hover:bg-primary-dark text-white font-body font-medium px-8 py-3"
              )}
            >
              Napisz do nas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
