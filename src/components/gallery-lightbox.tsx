"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";

export type GalleryImage = {
  src: string;
  alt: string;
  category: string;
  hasPhoto?: boolean;
};

const CATEGORIES = ["Wszystkie", "Obiekt", "Pokoje", "Relaks", "Otoczenie", "Restauracja", "Glamping", "Wydarzenia"];

export function GalleryLightbox({ images }: { images: GalleryImage[] }) {
  const [activeCategory, setActiveCategory] = useState("Wszystkie");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "Wszystkie" ? images : images.filter((img) => img.category === activeCategory);

  const prev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  };
  const next = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  };

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`font-body text-sm px-4 py-2 rounded-full border transition-all duration-200 ${
              activeCategory === cat
                ? "bg-primary text-white border-primary"
                : "bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {filtered.map((img, i) => (
          <div
            key={i}
            className="break-inside-avoid cursor-pointer group"
            onClick={() => setLightboxIndex(i)}
          >
            <div className={`relative rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 ${i % 3 === 0 ? "h-72" : "h-48"}`}>
              {img.hasPhoto ? (
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width:768px) 50vw, 25vw"
                />
              ) : (
                <div className="w-full h-full bg-gray-100 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center gap-2">
                  <ImageIcon className="w-8 h-8 text-gray-300" />
                  <p className="font-body text-xs text-gray-400 uppercase tracking-widest px-3 text-center">{img.alt}</p>
                </div>
              )}
              <span className="absolute bottom-2 right-2 bg-accent text-white text-xs font-body px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {img.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center font-body text-gray-400 py-20">Brak zdjęć w tej kategorii.</p>
      )}

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={() => setLightboxIndex(null)}>
          <button onClick={() => setLightboxIndex(null)} className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-10" aria-label="Zamknij">
            <X className="w-7 h-7" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 z-10" aria-label="Poprzednie">
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 z-10" aria-label="Następne">
            <ChevronRight className="w-8 h-8" />
          </button>
          <div
            className="relative rounded-xl overflow-hidden mx-12 w-full max-w-2xl aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            {filtered[lightboxIndex].hasPhoto ? (
              <>
                <Image
                  src={filtered[lightboxIndex].src}
                  alt={filtered[lightboxIndex].alt}
                  fill
                  className="object-contain bg-black"
                  sizes="672px"
                />
                <span className="absolute bottom-3 right-3 bg-accent text-white text-xs font-body px-3 py-1 rounded-full">
                  {filtered[lightboxIndex].category}
                </span>
              </>
            ) : (
              <div className="w-full h-full bg-gray-100 border-2 border-dashed border-gray-400 flex flex-col items-center justify-center gap-3">
                <ImageIcon className="w-16 h-16 text-gray-300" />
                <p className="font-body text-sm text-gray-500 text-center px-4">{filtered[lightboxIndex].alt}</p>
                <span className="bg-accent text-white text-xs font-body px-3 py-1 rounded-full">{filtered[lightboxIndex].category}</span>
              </div>
            )}
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-body text-white/50 text-xs">
            {lightboxIndex + 1} / {filtered.length}
          </div>
        </div>
      )}
    </>
  );
}
