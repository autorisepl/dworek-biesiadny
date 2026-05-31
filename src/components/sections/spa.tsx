"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Thermometer, Droplets, Waves, Users, Wifi, Zap } from "lucide-react";

const MotionDiv = dynamic(
  () => import("framer-motion").then((m) => m.motion.div),
  { ssr: false }
);

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

export function SpaSection() {
  return (
    <section id="strefa-relaksu" className="py-20 md:py-28 px-4 md:px-8 bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">
            Relaks
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-white mb-6">
            Strefa relaksu
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
          <p className="font-body text-white/80 text-base md:text-lg max-w-2xl mx-auto">
            Sauna z widokiem na starorzecze Warty, balia drewniana opalana drewnem, jacuzzi.
            Wieczorem w balii — lepszy reset niż jakikolwiek retreat za trzy razy większe
            pieniądze.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sauna */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-accent/40 transition-colors duration-300"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1540555700478-4be289fbec6c?w=800&h=600&fit=crop"
                alt="Sauna zewnętrzna z panoramicznym oknem na starorzecze Warty"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="font-heading text-2xl text-white font-bold">Sauna</h3>
                <p className="font-body text-accent text-sm">Platforma mobilna</p>
              </div>
            </div>
            <div className="p-6">
              <p className="font-body text-white/80 text-sm leading-relaxed mb-5">
                Świerk skandynawski klasa A, ławy z drewna abachi. Panoramiczne okno
                200×250 cm wychodzi na starorzecze Warty. Piec elektryczny Harvia 10,5 KW
                ze sterowaniem WiFi plus tradycyjny piec na drewno — do wyboru.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {saunaFeatures.map((f) => (
                  <div key={f.label} className="flex items-center gap-2 text-xs font-body text-white/60">
                    <f.icon className="w-3.5 h-3.5 text-accent shrink-0" />
                    {f.label}
                  </div>
                ))}
              </div>
            </div>
          </MotionDiv>

          {/* Balia */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-accent/40 transition-colors duration-300"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop"
                alt="Balia drewniana opalana drewnem"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="font-heading text-2xl text-white font-bold">Balia</h3>
                <p className="font-body text-accent text-sm">Drewniana, ø 200 cm</p>
              </div>
            </div>
            <div className="p-6">
              <p className="font-body text-white/80 text-sm leading-relaxed mb-5">
                Balia drewniana opalana drewnem na cztery osoby. Hydromasaż (8 dysz),
                kolorowe podświetlenie LED, termopokrywa i schody. Wkład z włókna
                szklanego — łatwy w utrzymaniu.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {baliaFeatures.map((f) => (
                  <div key={f.label} className="flex items-center gap-2 text-xs font-body text-white/60">
                    <f.icon className="w-3.5 h-3.5 text-accent shrink-0" />
                    {f.label}
                  </div>
                ))}
              </div>
            </div>
          </MotionDiv>

          {/* Jacuzzi */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-accent/40 transition-colors duration-300"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop"
                alt="Jacuzzi przy saunie"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="font-heading text-2xl text-white font-bold">Jacuzzi</h3>
                <p className="font-body text-accent text-sm">Przy saunie</p>
              </div>
            </div>
            <div className="p-6">
              <p className="font-body text-white/80 text-sm leading-relaxed mb-5">
                Jacuzzi uzupełnia strefę relaksu przy saunie zewnętrznej. Razem tworzą
                kompletną przestrzeń wypoczynku — sauna, zimny prysznic, jacuzzi, balia
                pod gwiazdami.
              </p>
              <div className="flex items-center gap-2 text-xs font-body text-white/60">
                <Waves className="w-3.5 h-3.5 text-accent" />
                Dostępne dla gości dworku
              </div>
            </div>
          </MotionDiv>
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/strefa-relaksu"
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-accent hover:bg-accent-light text-white font-body font-medium px-8 py-3"
            )}
          >
            Dowiedz się więcej
          </Link>
        </MotionDiv>
      </div>
    </section>
  );
}
