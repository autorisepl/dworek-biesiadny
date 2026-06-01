import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  label?: string;
};

export function PhotoPlaceholder({ className, label = "Miejsce na zdjęcie" }: Props) {
  return (
    <div
      className={cn(
        "bg-gray-100 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center gap-2",
        className
      )}
    >
      <ImageIcon className="w-8 h-8 text-gray-300" />
      <p className="font-body text-xs text-gray-400 uppercase tracking-widest text-center px-4">
        {label}
      </p>
    </div>
  );
}
