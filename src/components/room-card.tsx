import Link from "next/link";
import { Users, Maximize, ChevronRight } from "lucide-react";
import { RoomImageSlider } from "@/components/room-image-slider";
import { BookingButton } from "@/components/booking-button";
import type { Room } from "@/lib/rooms-data";

export function RoomCard({ room }: { room: Room }) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      {/* Image area with slider */}
      <Link href={`/pokoje/${room.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <RoomImageSlider
            images={room.images}
            alt={`${room.name} — Dworek Biesiadny`}
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          />
          <div className="absolute top-3 right-3 z-10 flex gap-2">
            <span className="bg-black/40 backdrop-blur-sm px-2 py-1 rounded text-xs font-body text-white flex items-center gap-1">
              <Maximize className="w-3 h-3" /> {room.size} m²
            </span>
            <span className="bg-black/40 backdrop-blur-sm px-2 py-1 rounded text-xs font-body text-white flex items-center gap-1">
              <Users className="w-3 h-3" /> max {room.maxGuests}
            </span>
          </div>
          {room.images.length > 1 && (
            <div className="absolute top-3 left-3 z-10 bg-black/40 backdrop-blur-sm px-2 py-1 rounded text-xs font-body text-white">
              {room.images.length} zdjęcia
            </div>
          )}
        </div>
      </Link>

      <div className="p-5">
        <Link href={`/pokoje/${room.slug}`} className="block group/title">
          <h3 className="font-heading text-xl text-primary-dark mb-1 group-hover/title:text-accent transition-colors">
            {room.name}
          </h3>
        </Link>
        <p className="text-gray-500 text-sm font-body line-clamp-2 mb-4">{room.description}</p>

        <div className="flex items-center justify-between">
          {/* BOOKING ENGINE: BookingButton opens the reservation widget */}
          <BookingButton
            roomSlug={room.slug}
            label="Zarezerwuj"
            size="sm"
          />
          <Link
            href={`/pokoje/${room.slug}`}
            className="inline-flex items-center gap-1 font-body text-sm text-gray-500 hover:text-primary-dark transition-colors"
          >
            Szczegóły <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
