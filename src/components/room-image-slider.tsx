"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PhotoPlaceholder } from "@/components/photo-placeholder";

interface Props {
  images: readonly string[];
  alt: string;
  sizes?: string;
  priority?: boolean;
}

export function RoomImageSlider({ images, alt, sizes, priority }: Props) {
  const [idx, setIdx] = useState(0);

  const prev = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setIdx((i) => (i - 1 + images.length) % images.length);
    },
    [images.length]
  );

  const next = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setIdx((i) => (i + 1) % images.length);
    },
    [images.length]
  );

  if (images.length === 0) {
    return <PhotoPlaceholder className="w-full h-full" label={`Zdjęcie — ${alt}`} />;
  }

  if (images.length === 1) {
    return (
      <Image
        src={images[0]}
        alt={alt}
        fill
        className="object-cover"
        sizes={sizes}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
      />
    );
  }

  return (
    <div className="relative w-full h-full group/slider">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${alt} — zdjęcie ${i + 1} z ${images.length}`}
          fill
          className={`object-cover transition-opacity duration-500 ${
            i === idx ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          sizes={sizes}
          priority={priority && i === 0}
          loading={priority && i === 0 ? "eager" : "lazy"}
        />
      ))}

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/65 text-white rounded-full p-1.5 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-200"
        aria-label="Poprzednie zdjęcie"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/65 text-white rounded-full p-1.5 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-200"
        aria-label="Następne zdjęcie"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.preventDefault();
              setIdx(i);
            }}
            className={`rounded-full transition-all duration-200 ${
              i === idx ? "w-4 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/60 hover:bg-white/90"
            }`}
            aria-label={`Zdjęcie ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
