"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

const MotionDiv = dynamic(
  () => import("framer-motion").then((m) => m.motion.div),
  { ssr: false }
);

export function AboutSection() {
  return (
    <section id="o-nas" className="py-20 md:py-28 px-4 md:px-8 bg-warm-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">
              O nas
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-primary-dark mb-6">
              Dworek nad starorzeczem Warty
            </h2>
            <div className="w-16 h-0.5 bg-accent mb-8" />
            <p className="font-body text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
              Dworek stoi na skarpie opadającej ku starorzeczu Warty, otoczony starodrzewem
              akacji i dębami, które pamiętają więcej niż niejeden przewodnik. W ogrodzie
              znajduje się woliera z papugami i gołębiami — słychać je z balkonów apartamentów
              na piętrze.
            </p>
            <p className="font-body text-gray-600 leading-relaxed text-base md:text-lg">
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
                  <p className="font-heading text-2xl text-primary-dark font-bold">
                    {stat.value}
                  </p>
                  <p className="font-body text-xs text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop"
                alt="Łąki nadwarciańskie w otoczeniu dworku"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-xl overflow-hidden shadow-lg border-4 border-white hidden md:block">
              <Image
                src="https://images.unsplash.com/photo-1475483768296-6163e8f3e121?w=400&h=400&fit=crop"
                alt="Ognisko przy dworku"
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
