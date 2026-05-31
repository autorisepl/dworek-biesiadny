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

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop",
    alt: "Dworek — widok zewnętrzny",
    category: "Obiekt",
  },
  {
    src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=1000&fit=crop",
    alt: "Apartament z łóżkiem King size",
    category: "Pokoje",
  },
  {
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=500&fit=crop",
    alt: "Łąki nadwarciańskie",
    category: "Otoczenie",
  },
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbec6c?w=800&h=800&fit=crop",
    alt: "Sauna zewnętrzna z panoramicznym oknem",
    category: "Relaks",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    alt: "Restauracja",
    category: "Restauracja",
  },
  {
    src: "https://images.unsplash.com/photo-1618767689160-da3fb810aad7?w=800&h=700&fit=crop",
    alt: "Kopuła glamping",
    category: "Glamping",
  },
  {
    src: "https://images.unsplash.com/photo-1475483768296-6163e8f3e121?w=800&h=500&fit=crop",
    alt: "Ognisko przy dworku",
    category: "Atrakcje",
  },
  {
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=900&fit=crop",
    alt: "Sala weselna w dworku",
    category: "Wydarzenia",
  },
];

export function GallerySection() {
  return (
    <section id="galeria" className="py-20 md:py-28 px-4 md:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">
            Galeria
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-primary-dark mb-6">
            Obrazy z Radzewic
          </h2>
          <div className="w-16 h-0.5 bg-accent mb-6" />
          <p className="font-body text-gray-600 text-base md:text-lg max-w-2xl">
            Dworek, apartamenty, strefa relaksu i łąki nadwarciańskie — pełna galeria na
            osobnej stronie.
          </p>
        </MotionDiv>

        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <MotionDiv
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="break-inside-avoid"
            >
              <div className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <div className="relative w-full">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={600}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/30 transition-colors duration-300 flex items-end">
                  <div className="p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="bg-accent text-white text-xs font-body px-2 py-1 rounded">
                      {img.category}
                    </span>
                    <p className="text-white text-sm font-body mt-1">{img.alt}</p>
                  </div>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/galeria"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "border-2 border-primary text-primary hover:bg-primary hover:text-white font-body font-medium px-8 py-3"
            )}
          >
            Zobacz pełną galerię
          </Link>
        </MotionDiv>
      </div>
    </section>
  );
}
