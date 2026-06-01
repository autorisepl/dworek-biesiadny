"use client";

import dynamic from "next/dynamic";
import { Car, Clock, MapPin, ParkingCircle } from "lucide-react";

const MotionDiv = dynamic(
  () => import("framer-motion").then((m) => m.motion.div),
  { ssr: false }
);

export function LocationSection() {
  return (
    <section id="dojazd" className="py-20 md:py-28 px-4 md:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">
            Dojazd
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-primary-dark mb-6">
            Jak do nas trafić
          </h2>
          <div className="w-16 h-0.5 bg-accent mb-6" />
          <p className="font-body text-gray-600 text-base md:text-lg max-w-2xl">
            Dworek Biesiadny znajduje się w Radzewicach w województwie wielkopolskim. Dojazd
            z centrum Poznania zajmuje około 40 minut.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-gray-100">
              <iframe
                src="https://maps.google.com/maps?q=Dluga+1B,+Radzewice,+62-022,+Polska&output=embed&hl=pl"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "320px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa dojazdu do Dworek Biesiadny w Radzewicach"
              />
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {[
              {
                icon: MapPin,
                title: "Adres",
                content: "ul. Długa 1B, 62-022 Radzewice\nwojewództwo wielkopolskie",
              },
              {
                icon: Clock,
                title: "Czas dojazdu",
                content: "~40 minut z centrum Poznania\nAutostrada A2 / droga krajowa nr 92",
              },
              {
                icon: Car,
                title: "Dojazd samochodem",
                content:
                  "Z Poznania kieruj się na zachód w stronę Środy Wielkopolskiej, następnie skręć w kierunku Radzewic. Nawigacja GPS prowadzi bezpośrednio na miejsce.",
              },
              {
                icon: ParkingCircle,
                title: "Parking",
                content: "Bezpłatny parking na terenie obiektu dla wszystkich gości.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body font-medium text-primary-dark text-sm mb-1">
                    {item.title}
                  </p>
                  <p className="font-body text-gray-500 text-sm leading-relaxed whitespace-pre-line">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
