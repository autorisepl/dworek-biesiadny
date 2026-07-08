"use client";

import { MotionDiv } from "@/components/motion";
import Link from "next/link";
import Image from "next/image";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const galleryItems = [
  { src: "/images/rooms/apt-debowy-a.jpg", alt: "Apartament Dębowy — lamele z naturalnego drewna", hasPhoto: true },
  { src: "", alt: "Zdjęcie — Łąki nadwarciańskie wokół dworku", hasPhoto: false },
  { src: "/images/wellness/sauna-a.jpg", alt: "Sauna zewnętrzna z widokiem na starorzecze Warty", hasPhoto: true },
  { src: "/images/glamping/kopula-b.jpg", alt: "Kopuła glamping — wnętrze", hasPhoto: true },
  { src: "/images/rooms/apt-1-a.jpg", alt: "Apartament 1 — łóżko King size", hasPhoto: true },
  { src: "", alt: "Zdjęcie — Ogród Dworku Biesiadnego", hasPhoto: false },
  { src: "/images/events/sala-a.jpg", alt: "Sala eventowa — Dworek Biesiadny", hasPhoto: true },
  { src: "", alt: "Zdjęcie — Uroczystość weselna w Dworku", wide: true, hasPhoto: false },
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
            {galleryItems[0].hasPhoto ? (
              <Image
                src={galleryItems[0].src}
                alt={galleryItems[0].alt}
                fill
                className="object-cover hover:scale-103 transition-transform duration-700"
                sizes="(max-width:768px) 100vw, 50vw"
                priority
              />
            ) : (
              <PhotoPlaceholder className="w-full h-full" label={galleryItems[0].alt} />
            )}
          </MotionDiv>

          {/* Items 1–4: fill right 2 cols, 2 rows */}
          {galleryItems.slice(1, 5).map((item, i) => (
            <MotionDiv
              key={item.alt}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: (i + 1) * 0.07 }}
              className="relative rounded-xl overflow-hidden"
            >
              {item.hasPhoto ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width:768px) 50vw, 25vw"
                />
              ) : (
                <PhotoPlaceholder className="w-full h-full" label={item.alt} />
              )}
            </MotionDiv>
          ))}

          {/* Bottom row: 1 + 1 + wide(col-span-2) */}
          {galleryItems.slice(5, 7).map((item, i) => (
            <MotionDiv
              key={item.alt}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: (i + 5) * 0.07 }}
              className="relative rounded-xl overflow-hidden"
            >
              {item.hasPhoto ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width:768px) 50vw, 25vw"
                />
              ) : (
                <PhotoPlaceholder className="w-full h-full" label={item.alt} />
              )}
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
            {galleryItems[7].hasPhoto ? (
              <Image
                src={galleryItems[7].src}
                alt={galleryItems[7].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width:768px) 100vw, 50vw"
              />
            ) : (
              <PhotoPlaceholder className="w-full h-full" label={galleryItems[7].alt} />
            )}
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
