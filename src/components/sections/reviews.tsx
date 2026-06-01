"use client";

import dynamic from "next/dynamic";
import { Star, Quote } from "lucide-react";

const MotionDiv = dynamic(
  () => import("framer-motion").then((m) => m.motion.div),
  { ssr: false }
);

const reviews = [
  {
    name: "Anna K.",
    date: "kwiecień 2025",
    rating: 5,
    text: "Piękne miejsce — dokładnie to, czego szukaliśmy na weekend z dziećmi. Apartament przestronny i czysty, za oknem łąki. Wracamy na pewno.",
    tag: "Pobyt rodzinny",
  },
  {
    name: "Marta i Tomasz W.",
    date: "sierpień 2024",
    rating: 5,
    text: "Wybraliśmy Dworek na nasze wesele i nie żałujemy ani chwili. Cudowna atmosfera, profesjonalna obsługa i bajkowe otoczenie. Goście byli zachwyceni.",
    tag: "Wesele",
  },
  {
    name: "Piotr M.",
    date: "luty 2025",
    rating: 5,
    text: "Przyszliśmy głównie dla sauny i balii — i to był najlepszy wieczór od lat. Gorąca balia o zmierzchu z widokiem na rzekę, cisza i spokój.",
    tag: "Strefa relaksu",
  },
];

export function ReviewsSection() {
  return (
    <section id="opinie" className="py-20 md:py-28 px-4 md:px-8 bg-warm-white">
      <div className="max-w-7xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">
            Opinie
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-primary-dark mb-6">
            Co mówią goście
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto" />
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <MotionDiv
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 relative"
            >
              <Quote className="w-8 h-8 text-accent/30 absolute top-6 right-6" />
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="font-body text-gray-600 text-sm leading-relaxed mb-6 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body font-medium text-primary-dark text-sm">{review.name}</p>
                  <p className="font-body text-gray-400 text-xs">{review.date}</p>
                </div>
                <span className="bg-cream text-primary-dark text-xs font-body px-2 py-1 rounded-full">
                  {review.tag}
                </span>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
