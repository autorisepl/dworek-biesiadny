"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { cn } from "@/lib/utils";

const MotionDiv = dynamic(
  () => import("framer-motion").then((m) => m.motion.div),
  { ssr: false }
);

const galleryItems = [
  { label: "Dworek — widok zewnętrzny", tall: false },
  { label: "Apartament", tall: true },
  { label: "Łąki nadwarciańskie", tall: false },
  { label: "Sauna zewnętrzna", tall: true },
  { label: "Restauracja", tall: false },
  { label: "Kopuła glamping", tall: false },
  { label: "Ognisko", tall: false },
  { label: "Sala eventowa", tall: true },
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
          <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">Galeria</p>
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
          {galleryItems.map((item, i) => (
            <MotionDiv
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="break-inside-avoid"
            >
              <PhotoPlaceholder
                className={cn("w-full rounded-xl shadow-sm", item.tall ? "h-72" : "h-48")}
                label={item.label}
              />
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
