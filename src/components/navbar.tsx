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

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LogoPlaceholder() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
        <span className="font-heading text-white text-sm font-bold">DB</span>
      </div>
      <div className="hidden sm:block">
        <p className="font-heading text-sm font-bold text-primary-dark leading-none">Dworek Biesiadny</p>
        <p className="font-body text-xs text-gray-400 leading-none mt-0.5">w Radzewicach</p>
      </div>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={cn("w-full h-20 bg-white border-b border-cream transition-shadow duration-200", scrolled && "shadow-sm")}>
      <div className="max-w-7xl mx-auto h-full px-4 md:px-8 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center shrink-0">
          <LogoPlaceholder />
        </Link>

        <div className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="font-body text-sm text-gray-700 hover:text-primary transition-colors whitespace-nowrap">
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 ml-1 border-l border-cream pl-4">
            <a
              href="https://www.instagram.com/dworek_biesiadny"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Dworek Biesiadny"
              className="text-gray-400 hover:text-primary transition-colors p-1"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.facebook.com/DworekBiesiadny"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Dworek Biesiadny"
              className="text-gray-400 hover:text-primary transition-colors p-1"
            >
              <FacebookIcon />
            </a>
          </div>
          <Link
            href="/kontakt"
            className={cn(buttonVariants({ variant: "default" }), "bg-primary text-white hover:bg-primary-dark font-body font-medium whitespace-nowrap ml-1")}
          >
            Zarezerwuj
          </Link>
        </div>

        <Sheet>
          <SheetTrigger render={<button aria-label="Otwórz menu" className="md:hidden p-2 text-primary-dark" />}>
            <Menu className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-warm-white">
            <div className="flex flex-col gap-5 mt-8 px-2">
              <LogoPlaceholder />
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="font-body text-base text-gray-700 hover:text-primary transition-colors py-1 border-b border-cream">
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 py-1">
                <a href="https://www.instagram.com/dworek_biesiadny" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors flex items-center gap-2 font-body text-sm">
                  <InstagramIcon /> Instagram
                </a>
                <a href="https://www.facebook.com/DworekBiesiadny" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors flex items-center gap-2 font-body text-sm">
                  <FacebookIcon /> Facebook
                </a>
              </div>
              <Link href="/kontakt" className={cn(buttonVariants({ variant: "default" }), "bg-primary text-white hover:bg-primary-dark font-body font-medium justify-center")}>
                Zarezerwuj pobyt
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
