"use client";

import { MotionDiv } from "@/components/motion";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { cn } from "@/lib/utils";
import { Thermometer, Droplets, Waves, Users, Wifi, Zap } from "lucide-react";

const saunaFeatures = [
  { icon: Users, label: "6–8 osób" },
  { icon: Thermometer, label: "Piec Harvia 10,5 KW" },
  { icon: Wifi, label: "Sterowanie WiFi" },
  { icon: Zap, label: "Piec na drewno" },
];

const baliaFeatures = [
  { icon: Users, label: "4–6 osób" },
  { icon: Droplets, label: "Hydromasaż 8 dysz" },
  { icon: Waves, label: "LED kolorowe" },
  { icon: Thermometer, label: "Opalana drewnem" },
];

const spaItems = [
  {
    title: "Sauna",
    subtitle: "Platforma mobilna · 6–8 osób",
    features: saunaFeatures,
    desc: "Świerk skandynawski klasa A, ławy abachi, panoramiczne okno 200×250 cm na starorzecze Warty. Piec Harvia 10,5 KW WiFi + piec na drewno.",
    image: "/images/wellness/wellness-1.jpg",
    imagePosition: "center top",
    hasPhoto: true,
  },
  {
    title: "Balia",
    subtitle: "Drewniana · ø 200 cm · z hydromasażem",
    features: baliaFeatures,
    desc: "Opalana drewnem — piec zewnętrzny, więc woda nie pachnie dymem. Hydromasaż (8 dysz), kolorowe LED, termopokrywa. Widok na starorzecze Warty.",
    image: "/images/otoczenie/otoczenie-6.jpg",
    imagePosition: "center 40%",
    hasPhoto: true,
  },
];

export function SpaSection() {
  return (
    <section id="strefa-relaksu" className="py-20 md:py-28 px-4 md:px-8 bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">Relaks</p>
          <h2 className="font-heading text-3xl md:text-5xl text-white mb-6">Strefa relaksu</h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
          <p className="font-body text-white/80 text-base md:text-lg max-w-2xl mx-auto">
            Sauna z widokiem na starorzecze Warty, balia drewniana opalana drewnem, jacuzzi.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {spaItems.map((item, i) => (
            <MotionDiv
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-accent/40 transition-colors duration-300"
            >
              <div className="relative aspect-[4/3]">
                {item.hasPhoto && item.image ? (
                  <Image
                    src={item.image}
                    alt={`${item.title} — Dworek Biesiadny strefa relaksu`}
                    fill
                    className="object-cover"
                    style={{ objectPosition: item.imagePosition ?? "center" }}
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                ) : (
                  <PhotoPlaceholder className="w-full h-full" label={item.title} />
                )}
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl text-white font-bold mb-1">{item.title}</h3>
                <p className="font-body text-accent text-sm mb-3">{item.subtitle}</p>
                <p className="font-body text-white/80 text-sm leading-relaxed mb-4">{item.desc}</p>
                <div className="grid grid-cols-2 gap-2">
                  {item.features.map((f) => (
                    <div key={f.label} className="flex items-center gap-2 text-xs font-body text-white/60">
                      <f.icon className="w-3.5 h-3.5 text-accent shrink-0" />
                      {f.label}
                    </div>
                  ))}
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/strefa-relaksu"
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-accent hover:bg-accent-light text-white font-body font-medium px-8 py-3"
            )}
          >
            Dowiedz się więcej
          </Link>
        </div>
      </div>
    </section>
  );
}
