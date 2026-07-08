"use client";

import { MotionDiv } from "@/components/motion";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Leaf, Clock, MapPin, Heart } from "lucide-react";

export function RestaurantSection() {
  return (
    <section id="restauracja" className="py-20 md:py-28 px-4 md:px-8 bg-warm-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <MotionDiv
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35 }}
          >
            <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">Kuchnia</p>
            <h2 className="font-heading text-3xl md:text-5xl text-primary-dark mb-6">Restauracja</h2>
            <div className="w-16 h-0.5 bg-accent mb-8" />
            <p className="font-body text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
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

            {/* Piekarnia Blaszkowiak */}
            <div className="bg-cream rounded-2xl border border-accent/15 p-5 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-body text-xs text-accent uppercase tracking-widest mb-1">Lokalna współpraca</p>
                  <h3 className="font-heading text-base font-bold text-primary-dark mb-1">
                    Piekarnia Blaszkowiak
                  </h3>
                  <p className="font-body text-sm text-gray-600 leading-relaxed">
                    Nasze wypieki — torty, ciasta, ciastka i pieczywo — pochodzą z rodzinnej Piekarni
                    Blaszkowiak. To lokalna, rodzinna pracownia, która od lat dostarcza nam wyroby
                    najwyższej jakości. To dla nas nie tylko dostawca — to rodzina.
                  </p>
                </div>
              </div>
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
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35, delay: 0.1 }}
          >
            <div className="aspect-[3/4] rounded-2xl shadow-xl overflow-hidden">
              <Image
                src="/images/events/sala-a.jpg"
                alt="Restauracja Dworek Biesiadny — sala jadalna"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
