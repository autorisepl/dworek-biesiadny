"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Leaf, Clock, MapPin } from "lucide-react";

const MotionDiv = dynamic(
  () => import("framer-motion").then((m) => m.motion.div),
  { ssr: false }
);

const menuHighlights = [
  { category: "Śniadania", items: ["[PLACEHOLDER_MENU]"] },
  { category: "Obiady", items: ["[PLACEHOLDER_MENU]"] },
  { category: "Kolacje", items: ["[PLACEHOLDER_MENU]"] },
];

export function RestaurantSection() {
  return (
    <section id="restauracja" className="py-20 md:py-28 px-4 md:px-8 bg-warm-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">
              Kuchnia
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-primary-dark mb-6">
              Restauracja
            </h2>
            <div className="w-16 h-0.5 bg-accent mb-8" />
            <p className="font-body text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
              Restauracja w dworku serwuje dania przygotowywane z lokalnych produktów. Menu
              zmienia się sezonowo i uwzględnia kuchnię regionalną Wielkopolski.
            </p>

            <div className="space-y-3 mb-8">
              {[
                { icon: Leaf, label: "Lokalne produkty, sezonowe menu" },
                { icon: Clock, label: "Śniadania, obiady, kolacje" },
                { icon: MapPin, label: "Na terenie dworku" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 font-body text-gray-600">
                  <item.icon className="w-5 h-5 text-accent shrink-0" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <div className="bg-cream rounded-xl p-6 mb-6">
              <p className="font-heading text-primary-dark text-lg mb-3">Menu sezonowe</p>
              <div className="grid grid-cols-3 gap-4">
                {menuHighlights.map((section) => (
                  <div key={section.category}>
                    <p className="font-body text-xs text-accent font-medium uppercase tracking-wide mb-2">
                      {section.category}
                    </p>
                    {section.items.map((item) => (
                      <p key={item} className="font-body text-xs text-gray-500">{item}</p>
                    ))}
                  </div>
                ))}
              </div>
              <p className="font-body text-xs text-gray-400 mt-4 italic">
                Pełne menu dostępne wkrótce
              </p>
            </div>

            <Link
              href="/restauracja"
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-primary hover:bg-primary-dark text-white font-body font-medium px-8"
              )}
            >
              Zobacz menu
            </Link>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop"
                alt="Restauracja Dworek Biesiadny"
                fill
                className="object-cover"
              />
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
