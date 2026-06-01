import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-cream px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
          <span className="font-heading text-2xl font-bold text-primary">DB</span>
        </div>
        <p className="font-body text-accent text-sm tracking-widest uppercase mb-4">
          Błąd 404
        </p>
        <h1 className="font-heading text-4xl md:text-5xl text-primary-dark font-bold mb-4">
          Strona nie istnieje
        </h1>
        <div className="w-12 h-0.5 bg-accent mx-auto mb-6" />
        <p className="font-body text-gray-500 text-base leading-relaxed mb-10">
          Nie znaleźliśmy strony, której szukasz. Być może adres jest nieprawidłowy lub
          strona została przeniesiona.
        </p>
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "default" }),
            "bg-primary hover:bg-primary-dark text-white font-body font-medium px-8 py-3 gap-2"
          )}
        >
          <Home className="w-4 h-4" />
          Wróć na stronę główną
        </Link>
      </div>
    </div>
  );
}
