import { cn } from "@/lib/utils";
import { CalendarDays } from "lucide-react";

interface Props {
  className?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "default" | "lg";
  roomSlug?: string;
  label?: string;
}

/**
 * BOOKING ENGINE INTEGRATION
 * --------------------------
 * Replace href="#rezerwacja" with your booking engine URL or attach JS handler:
 *   document.querySelectorAll('.btn-booking').forEach(btn => {
 *     btn.addEventListener('click', (e) => {
 *       e.preventDefault();
 *       BookingEngine.open({ room: btn.dataset.roomSlug });
 *     });
 *   });
 *
 * The `data-room-slug` attribute provides room context to the booking engine.
 * Classes: `btn-booking` (all), `btn-booking--room` (room-specific).
 */
export function BookingButton({
  className,
  variant = "primary",
  size = "default",
  roomSlug,
  label = "Zarezerwuj",
}: Props) {
  return (
    <a
      href="#rezerwacja"
      data-room-slug={roomSlug}
      className={cn(
        "btn-booking inline-flex items-center gap-2 font-body font-semibold rounded-lg transition-colors duration-200 cursor-pointer",
        roomSlug && "btn-booking--room",
        size === "sm" && "px-4 py-2 text-xs",
        size === "default" && "px-6 py-3 text-sm",
        size === "lg" && "px-8 py-4 text-base",
        variant === "primary" && "bg-accent hover:bg-accent-light text-white",
        variant === "outline" &&
          "border-2 border-accent text-accent hover:bg-accent hover:text-white bg-transparent",
        variant === "ghost" && "text-accent hover:text-accent-light underline underline-offset-4",
        className
      )}
    >
      <CalendarDays className="w-4 h-4 shrink-0" />
      {label}
    </a>
  );
}
