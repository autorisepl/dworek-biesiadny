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
    category: "Śniadania",
    items: ["[PLACEHOLDER_MENU]"],
  },
  {
    category: "Zupy",
    items: ["[PLACEHOLDER_MENU]"],
  },
  {
    category: "Dania główne",
    items: ["[PLACEHOLDER_MENU]"],
  },
  {
    category: "Desery",
    items: ["[PLACEHOLDER_MENU]"],
  },
  {
    category: "Napoje",
    items: ["[PLACEHOLDER_MENU]"],
  },
  {
    category: "Wina i alkohole",
    items: ["[PLACEHOLDER_MENU]"],
  },
];

export default function RestauracjaPage() {
  return (
    <div className="min-h-screen bg-warm-white">
      <section className="relative py-28 md:py-36 px-4 md:px-8 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=800&fit=crop"
          alt="Restauracja Dworek Biesiadny"
          fill
          priority
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
              { icon: Phone, label: "Rezerwacja stolika: [PLACEHOLDER_PHONE]" },
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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">Menu</p>
            <h2 className="font-heading text-3xl md:text-4xl text-primary-dark mb-4">
              Karta dań
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
            <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 inline-block">
              <p className="font-body text-sm text-primary-dark">
                Pełne menu jest w przygotowaniu — dane otrzymamy od właściciela.
              </p>
              <p className="font-body text-xs text-gray-500 mt-1">
                Zadzwoń lub napisz, aby dowiedzieć się o aktualnej ofercie.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuSections.map((section) => (
              <div key={section.category} className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-heading text-xl text-primary-dark mb-4 pb-3 border-b border-cream">
                  {section.category}
                </h3>
                {section.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between py-2 font-body text-sm text-gray-400 italic"
                  >
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            ))}
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
