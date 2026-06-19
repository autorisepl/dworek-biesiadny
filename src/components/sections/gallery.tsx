"use client";

import { MotionDiv } from "@/components/motion";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const galleryItems = [
  { src: "/images/otoczenie/otoczenie-1.jpg", alt: "Łąki nadwarciańskie wokół dworku", tall: false },
  { src: "/images/rooms/apartament-1.jpg", alt: "Apartament — łóżko King size", tall: true },
  { src: "/images/otoczenie/otoczenie-4.jpg", alt: "Starorzecze Warty", tall: false },
  { src: "/images/wellness/wellness-1.jpg", alt: "Sauna zewnętrzna z widokiem", tall: true },
  { src: "/images/otoczenie/otoczenie-5.jpg", alt: "Ogród Dworku Biesiadnego", tall: false },
  { src: "/images/glamping/glamping-1.jpg", alt: "Kopuła glamping przy Warcie", tall: false },
  { src: "/images/otoczenie/otoczenie-6.jpg", alt: "Łąki w okolicach dworku", tall: false },
  { src: "/images/wydarzenia/wydarzenie-1.jpg", alt: "Sala eventowa — Dworek Biesiadny", tall: true },
];

export function GallerySection() {
  return (
    <section id="galeria" className="py-20 md:py-28 px-4 md:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35 }}
          className="mb-12"
        >
          <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">Galeria</p>
          <h2 className="font-heading text-3xl md:text-5xl text-primary-dark mb-6">
            Obrazy z Radzewic
          </h2>
          <div className="w-16 h-0.5 bg-accent mb-6" />
          <p className="font-body text-gray-700 text-base md:text-lg max-w-2xl">
            Dworek, apartamenty, strefa relaksu i łąki nadwarciańskie — pełna galeria na
            osobnej stronie.
          </p>
        </MotionDiv>

        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {galleryItems.map((item, i) => (
            <MotionDiv
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="break-inside-avoid"
            >
              <div className={cn("relative w-full rounded-xl shadow-sm overflow-hidden", item.tall ? "h-72" : "h-48")}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
                />
              </div>
            </MotionDiv>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/galeria"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "border-2 border-primary text-primary hover:bg-primary hover:text-white font-body font-medium px-8 py-3"
            )}
          >
            Zobacz pełną galerię
          </Link>
        </div>
      </div>
    </section>
  );
}
