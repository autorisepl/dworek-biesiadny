"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const MotionDiv = dynamic(
  () => import("framer-motion").then((m) => m.motion.div),
  { ssr: false }
);

export function ContactPreviewSection() {
  return (
    <section id="kontakt" className="py-20 md:py-28 px-4 md:px-8 bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">
              Kontakt
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-white mb-6">
              Napisz do nas
            </h2>
            <div className="w-16 h-0.5 bg-accent mb-8" />
            <p className="font-body text-white/80 leading-relaxed mb-8 text-base md:text-lg">
              Napisz do nas — odpowiadamy w ciągu 24 godzin w dni robocze. Zaznacz czego
              dotyczy zapytanie: rezerwacja noclegu, organizacja wydarzenia, restauracja lub
              inne.
            </p>

            <div className="space-y-4 mb-10">
              {[
                { icon: MapPin, label: "Radzewice, Wielkopolska" },
                { icon: Phone, label: "[PLACEHOLDER_PHONE]" },
                { icon: Mail, label: "[PLACEHOLDER_EMAIL]" },
                { icon: Clock, label: "Odpowiadamy w ciągu 24h" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 font-body text-white/80">
                  <item.icon className="w-5 h-5 text-accent shrink-0" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <Link
              href="/kontakt"
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-accent hover:bg-accent-light text-white font-body font-medium px-8 py-3"
              )}
            >
              Przejdź do formularza
            </Link>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 rounded-2xl p-8 border border-white/10"
          >
            <p className="font-heading text-xl text-white mb-6">Szybkie zapytanie</p>
            <div className="space-y-4">
              <div>
                <label className="font-body text-xs text-white/60 uppercase tracking-wide block mb-1">
                  Imię i nazwisko
                </label>
                <div className="h-10 bg-white/10 rounded-lg border border-white/10" />
              </div>
              <div>
                <label className="font-body text-xs text-white/60 uppercase tracking-wide block mb-1">
                  Email
                </label>
                <div className="h-10 bg-white/10 rounded-lg border border-white/10" />
              </div>
              <div>
                <label className="font-body text-xs text-white/60 uppercase tracking-wide block mb-1">
                  Wiadomość
                </label>
                <div className="h-24 bg-white/10 rounded-lg border border-white/10" />
              </div>
              <p className="font-body text-xs text-white/40 text-center mt-2">
                Pełny formularz dostępny na{" "}
                <Link href="/kontakt" className="underline hover:text-accent transition-colors">
                  stronie kontaktowej
                </Link>
              </p>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
