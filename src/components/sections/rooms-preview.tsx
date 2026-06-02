"use client";

import { MotionDiv } from "@/components/motion";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RoomCard } from "@/components/room-card";
import { rooms } from "@/lib/rooms-data";

export function RoomsPreviewSection() {
  return (
    <section id="pokoje" className="py-20 md:py-28 px-4 md:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35 }}
        >
          <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">
            Noclegi
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-primary-dark mb-6">
            Nasze apartamenty
          </h2>
          <div className="w-16 h-0.5 bg-accent mb-4" />
          <p className="font-body text-gray-700 text-base md:text-lg max-w-2xl mb-10">
            Każdy z ośmiu apartamentów ma własny charakter — Dębowy z lamelami z naturalnego
            drewna, Trzcinowy z LED-owym podświetleniem, Nad Rzeką z obrazem mostka nad Wartą.
            Pokoje od 15 do 25 m², łóżka King size, Netflix, światłowód.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room, i) => (
            <MotionDiv
              key={room.slug}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
            >
              <RoomCard room={room} />
            </MotionDiv>
          ))}
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/pokoje"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-primary text-white hover:bg-primary-dark font-body font-medium px-8"
            )}
          >
            Zobacz wszystkie pokoje
          </Link>
        </MotionDiv>
      </div>
    </section>
  );
}
