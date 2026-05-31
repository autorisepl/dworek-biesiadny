"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/pokoje", label: "Pokoje" },
  { href: "/restauracja", label: "Restauracja" },
  { href: "/strefa-relaksu", label: "Strefa relaksu" },
  { href: "/glamping", label: "Glamping" },
  { href: "/wydarzenia", label: "Wydarzenia" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-8 z-40 h-16 bg-white/80 backdrop-blur-md border-b border-cream transition-shadow duration-200",
        scrolled && "shadow-sm"
      )}
    >
      <div className="max-w-7xl mx-auto h-full px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="font-heading text-xl text-primary-dark font-bold">
          Dworek Biesiadny
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-gray-700 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-primary text-white hover:bg-primary-dark font-body font-medium"
            )}
          >
            Zarezerwuj
          </Link>
        </div>

        <Sheet>
          <SheetTrigger
            render={
              <button aria-label="Otwórz menu" className="md:hidden p-2 text-primary-dark" />
            }
          >
            <Menu className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-warm-white">
            <div className="flex flex-col gap-6 mt-8">
              <p className="font-heading text-lg text-primary-dark font-bold px-2">
                Dworek Biesiadny
              </p>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-base text-gray-700 hover:text-primary transition-colors px-2 py-1"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/kontakt"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "bg-primary text-white hover:bg-primary-dark font-body font-medium mx-2"
                )}
              >
                Zarezerwuj pobyt
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
