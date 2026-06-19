"use client";

import { MotionDiv } from "@/components/motion";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const pricingTiers = [
  {
    name: "Pokój 3",
    subtitle: "15 m² · max 4 osoby",
    price: "Od zapytania",
    unit: "",
    features: ["Netflix", "Biurko", "Stoliczek kawowy", "Aneks kuchenny"],
    highlight: false,
  },
  {
    name: "Apartamenty 1–2",
    subtitle: "20 m² · max 5 osób",
    price: "Od zapytania",
    unit: "",
    features: ["Balkon", "Klimatyzacja", "Wanna narożna", "Widok na łąki"],
    highlight: true,
  },
  {
    name: "Apartament 4",
    subtitle: "25 m² · max 6 osób",
    price: "Od zapytania",
    unit: "",
    features: ["Największy apartament", "4 miejsca do spania", "Netflix", "Biurko"],
    highlight: false,
  },
];

export function PricingSection() {
  return (
    <section id="cennik" className="py-20 md:py-28 px-4 md:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35 }}
          className="text-center mb-14"
        >
          <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">
            Ceny
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-primary-dark mb-6">
            Cennik
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
          <p className="font-body text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
            Ceny zależą od terminu i dostępności. Napisz do nas, żeby sprawdzić aktualną
            ofertę i dostępność w wybranym terminie.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pricingTiers.map((tier, i) => (
            <MotionDiv
              key={tier.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className={cn(
                "rounded-2xl p-8 border-2 transition-all duration-300",
                tier.highlight
                  ? "bg-primary text-white border-primary shadow-xl scale-[1.03]"
                  : "bg-white text-primary-dark border-cream hover:border-accent/30 hover:shadow-md"
              )}
            >
              {tier.highlight && (
                <p className="font-body text-xs text-accent tracking-widest uppercase mb-3">
                  Najpopularniejszy
                </p>
              )}
              <h3 className={cn(
                "font-heading text-xl font-bold mb-1",
                tier.highlight ? "text-white" : "text-primary-dark"
              )}>
                {tier.name}
              </h3>
              <p className={cn(
                "font-body text-sm mb-6",
                tier.highlight ? "text-white/70" : "text-gray-600"
              )}>
                {tier.subtitle}
              </p>
              <div className="mb-6">
                <span className={cn(
                  "font-heading text-3xl font-bold",
                  tier.highlight ? "text-accent" : "text-primary"
                )}>
                  {tier.price}
                </span>
                <span className={cn(
                  "font-body text-sm ml-1",
                  tier.highlight ? "text-white/60" : "text-gray-400"
                )}>
                  {tier.unit}
                </span>
              </div>
              <ul className="space-y-2 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 font-body text-sm">
                    <Check className={cn(
                      "w-4 h-4 shrink-0",
                      tier.highlight ? "text-accent" : "text-primary"
                    )} />
                    <span className={tier.highlight ? "text-white/80" : "text-gray-700"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/rezerwacja"
                className={cn(
                  buttonVariants({ variant: tier.highlight ? "default" : "outline" }),
                  "w-full justify-center font-body font-medium",
                  tier.highlight
                    ? "bg-accent hover:bg-accent-light text-white border-accent"
                    : "border-primary text-primary hover:bg-primary hover:text-white"
                )}
              >
                Zarezerwuj
              </Link>
            </MotionDiv>
          ))}
        </div>

        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <Link
            href="/cennik"
            className="font-body text-sm text-primary hover:text-primary-dark underline underline-offset-4 transition-colors"
          >
            Zobacz pełny cennik →
          </Link>
        </MotionDiv>
      </div>
    </section>
  );
}
