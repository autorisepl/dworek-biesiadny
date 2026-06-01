"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  const openCookieSettings = () => {
    window.dispatchEvent(new CustomEvent("open-cookie-settings"));
  };

  return (
    <footer className="bg-primary-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Kontakt</h3>
            <ul className="space-y-3 font-body text-sm text-white/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span>Długa 1B, Radzewice 62-022</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href="tel:+48691845079" className="hover:text-accent transition-colors">
                  +48 691 845 079
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href="mailto:info@dworek-biesiadny.pl" className="hover:text-accent transition-colors">
                  info@dworek-biesiadny.pl
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Szybkie linki</h3>
            <ul className="space-y-2 font-body text-sm">
              {[
                { href: "/pokoje", label: "Pokoje" },
                { href: "/restauracja", label: "Restauracja" },
                { href: "/strefa-relaksu", label: "Strefa relaksu" },
                { href: "/glamping", label: "Glamping" },
                { href: "/galeria", label: "Galeria" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/80 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Informacje</h3>
            <ul className="space-y-2 font-body text-sm">
              <li>
                <Link href="/polityka-prywatnosci" className="text-white/80 hover:text-accent transition-colors">
                  Polityka prywatności
                </Link>
              </li>
              <li>
                <Link href="/regulamin" className="text-white/80 hover:text-accent transition-colors">
                  Regulamin
                </Link>
              </li>
              <li>
                <button onClick={openCookieSettings} className="text-white/80 hover:text-accent transition-colors text-left">
                  Ustawienia cookies
                </button>
              </li>
              <li>
                <Link href="/dotacja-kpo" className="text-white/80 hover:text-accent transition-colors">
                  Dotacja KPO
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 font-body text-xs text-white/50">
          <p>© 2024 Dworek Biesiadny w Radzewicach. Wszelkie prawa zastrzeżone.</p>
          <p>
            Realizacja:{" "}
            <a href="https://autorise.pl" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              Autorise.pl
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
