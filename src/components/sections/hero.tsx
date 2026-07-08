"use client";

import { MotionDiv } from "@/components/motion";
import Image from "next/image";
import Link from "next/link";
import { WeatherWidget } from "@/components/weather-widget";
import { BOOKING_ENGINE_URL } from "@/lib/booking";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      <Image
        src="/images/hero/hero-dworek-front.jpg"
        alt="Dworek Biesiadny w Radzewicach — widok od frontu"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "center 40%" }}
      />
      {/* Cinematic gradient — shows landscape at top, readable text at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/92 via-primary-dark/30 to-transparent" />

      <div className="absolute top-6 right-6 z-20">
        <WeatherWidget />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24">
        <MotionDiv
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-body text-accent text-xs tracking-[0.35em] uppercase mb-4">
            Radzewice, Wielkopolska
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-3 leading-[1.05]">
            Dworek Biesiadny
          </h1>
          <p className="font-heading text-xl md:text-2xl italic text-accent mb-6">
            W sercu natury
          </p>
          <div className="w-10 h-px bg-accent/60 mb-6" />
          <p className="font-body text-sm md:text-base text-white/70 max-w-lg mb-9 leading-relaxed">
            Kameralny obiekt nad starorzeczem Warty — 8 apartamentów, restauracja i strefa
            wellness w otoczeniu łąk nadwarciańskich i starodrzewu akacji.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={BOOKING_ENGINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 bg-accent hover:bg-accent-light text-white font-body font-semibold px-8 rounded-lg transition-colors duration-200"
            >
              Zarezerwuj pobyt
            </a>
            <Link
              href="/pokoje"
              className="inline-flex items-center justify-center h-12 border border-white/40 text-white hover:bg-white/10 font-body font-semibold px-8 rounded-lg transition-colors duration-200"
            >
              Nasze pokoje
            </Link>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
