"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MotionDiv = dynamic(
  () => import("framer-motion").then((m) => m.motion.div),
  { ssr: false }
);

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&h=1080&fit=crop"
        alt="Dworek Biesiadny w Radzewicach — widok z zewnątrz"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/70 via-primary-dark/40 to-primary-dark/60" />

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-accent text-sm tracking-widest uppercase mb-4">
            Radzewice, Wielkopolska
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-4">
            Dworek Biesiadny
          </h1>
          <p className="font-heading text-2xl md:text-3xl italic text-accent mb-6">
            W sercu natury
          </p>
          <p className="font-body text-base md:text-lg text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
            Kameralny obiekt nad starorzeczem Warty — 8 apartamentów, restauracja i strefa
            relaksu w otoczeniu łąk nadwarciańskich i starodrzewu akacji. Miejsce na spokojny
            wypoczynek, rodzinne uroczystości i firmowe wyjazdy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-accent hover:bg-accent-light text-white font-body font-medium px-8 py-4 text-base"
              )}
            >
              Zarezerwuj pobyt
            </Link>
            <Link
              href="/pokoje"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-primary-dark font-body font-medium px-8 py-4 text-base rounded-lg transition-colors duration-200"
            >
              Nasze pokoje
            </Link>
          </div>
        </MotionDiv>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="font-body text-xs tracking-widest uppercase">Przewiń</span>
          <div className="w-px h-8 bg-white/40 animate-pulse" />
        </MotionDiv>
      </div>
    </section>
  );
}
