"use client";

import { MotionDiv } from "@/components/motion";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const galleryItems = [
  { src: "/images/otoczenie/otoczenie-1.jpg", alt: "Łąki nadwarciańskie wokół dworku", featured: true },
  { src: "/images/rooms/apartament-1.jpg", alt: "Apartament — łóżko King size" },
  { src: "/images/wellness/wellness-1.jpg", alt: "Sauna zewnętrzna z widokiem" },
  { src: "/images/otoczenie/otoczenie-5.jpg", alt: "Ogród Dworku Biesiadnego" },
  { src: "/images/glamping/glamping-1.jpg", alt: "Kopuła glamping przy Warcie" },
  { src: "/images/otoczenie/otoczenie-6.jpg", alt: "Łąki w okolicach dworku" },
  { src: "/images/wydarzenia/wydarzenie-1.jpg", alt: "Sala eventowa — Dworek Biesiadny" },
  { src: "/images/wydarzenia/wydarzenie-7.jpg", alt: "Uroczystość weselna w Dworku", wide: true },
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
          className="mb-10"
        >
          <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">Galeria</p>
          <h2 className="font-heading text-3xl md:text-5xl text-primary-dark mb-4">
            Obrazy z Radzewic
          </h2>
          <div className="w-16 h-0.5 bg-accent mb-4" />
          <p className="font-body text-gray-600 text-base max-w-xl">
            Dworek, apartamenty, strefa relaksu i łąki nadwarciańskie.
          </p>
        </MotionDiv>

        {/* Editorial bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px] md:auto-rows-[210px]">
          {/* Featured: col-span-2, row-span-2 (tall) */}
          <MotionDiv
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden"
          >
            <Image
              src={galleryItems[0].src}
              alt={galleryItems[0].alt}
              fill
              className="object-cover hover:scale-103 transition-transform duration-700"
              sizes="(max-width:768px) 100vw, 50vw"
              priority
            />
          </MotionDiv>

          {/* Items 1–4: fill right 2 cols, 2 rows */}
          {galleryItems.slice(1, 5).map((item, i) => (
            <MotionDiv
              key={item.src}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: (i + 1) * 0.07 }}
              className="relative rounded-xl overflow-hidden"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width:768px) 50vw, 25vw"
              />
            </MotionDiv>
          ))}

          {/* Bottom row: 1 + 1 + wide(col-span-2) */}
          {galleryItems.slice(5, 7).map((item, i) => (
            <MotionDiv
              key={item.src}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: (i + 5) * 0.07 }}
              className="relative rounded-xl overflow-hidden"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width:768px) 50vw, 25vw"
              />
            </MotionDiv>
          ))}
          {/* Wide bottom-right item */}
          <MotionDiv
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.5 }}
            className="col-span-2 relative rounded-xl overflow-hidden"
          >
            <Image
              src={galleryItems[7].src}
              alt={galleryItems[7].alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width:768px) 100vw, 50vw"
            />
          </MotionDiv>
        </div>

        <div className="text-center mt-10">
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
