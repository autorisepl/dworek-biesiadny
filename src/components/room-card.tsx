import Link from "next/link";
import { Users, Maximize } from "lucide-react";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import type { Room } from "@/lib/rooms-data";

export function RoomCard({ room }: { room: Room }) {
  return (
    <Link href={`/pokoje/${room.slug}`}>
      <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
        <div className="relative aspect-[4/3] overflow-hidden">
          <PhotoPlaceholder className="w-full h-full" label={room.name} />
          <div className="absolute top-3 right-3 flex gap-2">
            <span className="bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-body flex items-center gap-1">
              <Maximize className="w-3 h-3" /> {room.size} m²
            </span>
            <span className="bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-body flex items-center gap-1">
              <Users className="w-3 h-3" /> max {room.maxGuests}
            </span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-heading text-xl text-primary-dark mb-2">{room.name}</h3>
          <p className="text-gray-500 text-sm font-body line-clamp-2">{room.description}</p>
          <p className="text-accent text-sm font-body mt-3 group-hover:underline">
            Zobacz szczegóły →
          </p>
        </div>
      </div>
    </Link>
  );
}
