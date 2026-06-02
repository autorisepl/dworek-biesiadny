"use client";

import { MotionDiv } from "@/components/motion";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1920&h=1080&fit=crop"
        alt="Łąki nadwarciańskie o świcie — okolice Dworku Biesiadnego"
        fill
        priority
          sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary-dark/60" />

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
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
          <p className="font-body text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Kameralny obiekt nad starorzeczem Warty — 8 apartamentów, restauracja i strefa
            relaksu w otoczeniu łąk nadwarciańskich i starodrzewu akacji. Miejsce na spokojny
            wypoczynek, rodzinne uroczystości i firmowe wyjazdy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center min-w-[220px] h-14 bg-accent hover:bg-accent-light text-white font-body font-semibold px-8 text-base rounded-lg transition-colors duration-200"
            >
              Zarezerwuj pobyt
            </Link>
            <Link
              href="/pokoje"
              className="inline-flex items-center justify-center min-w-[220px] h-14 border-2 border-white text-white hover:bg-white hover:text-primary-dark font-body font-semibold px-8 text-base rounded-lg transition-colors duration-200"
            >
              Nasze pokoje
            </Link>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
