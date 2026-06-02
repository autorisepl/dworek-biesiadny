"use client";

import { MotionDiv } from "@/components/motion";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { cn } from "@/lib/utils";
import { Maximize, Moon, Users, TreePine } from "lucide-react";

const glampingFeatures = [
  { icon: Maximize, label: "37,5 m² powierzchni" },
  { icon: TreePine, label: "Przy starorzeczu Warty" },
  { icon: Moon, label: "Nocleg w naturze" },
  { icon: Users, label: "Events: komunie, wesela" },
];

export function GlampingSection() {
  return (
    <section id="glamping" className="py-20 md:py-28 px-4 md:px-8 bg-warm-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <MotionDiv
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35 }}
            className="order-2 md:order-1 relative"
          >
            <PhotoPlaceholder className="aspect-[4/3] rounded-2xl shadow-xl" label="Kopuła glamping" />
            <div className="absolute -top-4 -right-4 bg-accent text-white rounded-xl p-4 shadow-lg hidden md:block">
              <p className="font-heading text-2xl font-bold">37,5</p>
              <p className="font-body text-xs">m² kopuła</p>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="order-1 md:order-2"
          >
            <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">Glamping</p>
            <h2 className="font-heading text-3xl md:text-5xl text-primary-dark mb-6">Kopuła nad Wartą</h2>
            <div className="w-16 h-0.5 bg-accent mb-8" />
            <p className="font-body text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
              Kopuła o powierzchni 37,5 m² stoi przy starorzeczu Warty, na skraju rozległych polan.
              Wewnątrz — pełen komfort noclegowy z widokiem na naturę przez transparentne ściany.
            </p>
            <p className="font-body text-gray-700 leading-relaxed mb-8">
              Kopuła sprawdza się również jako przestrzeń eventowa: komunie, osiemnastki i kameralne
              wesela w plenerze. Cisza, przestrzeń i brak sąsiadów za ścianą w cenie.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {glampingFeatures.map((f) => (
                <div key={f.label} className="flex items-center gap-3 bg-cream rounded-lg p-3 font-body text-sm text-gray-700">
                  <f.icon className="w-4 h-4 text-accent shrink-0" />
                  {f.label}
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <Link
                href="/glamping"
                className={cn(buttonVariants({ variant: "default" }), "bg-primary hover:bg-primary-dark text-white font-body font-medium px-6")}
              >
                Zarezerwuj kopułę
              </Link>
              <Link href="/glamping" className="inline-flex items-center font-body text-sm text-primary hover:text-primary-dark transition-colors">
                Dowiedz się więcej →
              </Link>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
