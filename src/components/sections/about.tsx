"use client";

import { MotionDiv } from "@/components/motion";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="o-nas" className="py-20 md:py-28 px-4 md:px-8 bg-warm-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <MotionDiv
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35 }}
          >
            <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">O nas</p>
            <h2 className="font-heading text-3xl md:text-5xl text-primary-dark mb-6">
              Dworek nad starorzeczem Warty
            </h2>
            <div className="w-16 h-0.5 bg-accent mb-8" />
            <p className="font-body text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
              Dworek stoi na skarpie opadającej ku starorzeczu Warty, otoczony starodrzewem
              akacji i dębami, które pamiętają więcej niż niejeden przewodnik. W ogrodzie
              znajduje się woliera z papugami i gołębiami — słychać je z balkonów apartamentów
              na piętrze.
            </p>
            <p className="font-body text-gray-700 leading-relaxed text-base md:text-lg">
              Łąki Nadwarciańskie rozciągające się za dworkiem tworzą krajobraz, w którym tempo
              dnia wyznacza natura, nie zegarek.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { value: "8", label: "Apartamentów" },
                { value: "37,5 m²", label: "Kopuła glamping" },
                { value: "~40 min", label: "Z centrum Poznania" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-cream rounded-lg">
                  <p className="font-heading text-2xl text-primary-dark font-bold">{stat.value}</p>
                  <p className="font-body text-xs text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl shadow-xl overflow-hidden">
              <Image
                src="/images/otoczenie/otoczenie-2.jpg"
                alt="Dworek Biesiadny w Radzewicach — widok ogólny"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-xl shadow-lg border-4 border-white overflow-hidden hidden md:block">
              <Image
                src="/images/otoczenie/otoczenie-3.jpg"
                alt="Otoczenie Dworku Biesiadnego"
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
