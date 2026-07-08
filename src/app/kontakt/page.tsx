import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt i rezerwacje — Dworek Biesiadny w Radzewicach",
  description: "Skontaktuj się z Dworkiem Biesiadnym w Radzewicach. Formularz rezerwacji noclegu, organizacji wesela lub pytania o restaurację. Odpowiadamy w 24h.",
};

const contactDetails = [
  { icon: MapPin, label: "Adres", value: "Długa 1B, Radzewice 62-022" },
  { icon: Phone, label: "Telefon", value: "+48 691 845 079", href: "tel:+48691845079" },
  { icon: Mail, label: "E-mail", value: "info@dworek-biesiadny.pl", href: "mailto:info@dworek-biesiadny.pl" },
  { icon: Clock, label: "Odpowiedź", value: "W ciągu 24h w dni robocze" },
];

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-warm-white">
      <section className="relative py-28 md:py-36 px-4 md:px-8 overflow-hidden">
        <Image
          src="/images/hero/hero-dworek-front.jpg"
          alt="Dworek Biesiadny w Radzewicach — widok od frontu"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary-dark/70" />
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">Kontakt</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">Napisz do nas</h1>
          <div className="w-16 h-0.5 bg-accent mb-6" />
          <p className="font-body text-white/90 text-base md:text-xl max-w-2xl">
            Rezerwacja noclegu, zapytanie o wesele lub event, pytanie o restaurację — opisz czego potrzebujesz.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-2xl text-primary-dark mb-6">Dane kontaktowe</h2>
                <div className="space-y-5">
                  {contactDetails.map((item) => (
                    <div key={item.label} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-body text-xs text-gray-400 uppercase tracking-wide mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="font-body text-sm text-primary-dark hover:text-primary transition-colors">{item.value}</a>
                        ) : (
                          <p className="font-body text-sm text-primary-dark">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100">
                <iframe
                  src="https://maps.google.com/maps?q=Dluga+1B,+Radzewice,+62-022,+Polska&output=embed&hl=pl"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "240px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa — Dworek Biesiadny, Długa 1B Radzewice"
                />
              </div>

              <div className="bg-cream rounded-2xl p-6">
                <p className="font-heading text-base text-primary-dark font-bold mb-2">Dojazd</p>
                <p className="font-body text-sm text-gray-600 leading-relaxed">
                  ~40 minut z centrum Poznania. Bezpłatny parking na terenie obiektu dla wszystkich gości.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl text-primary-dark mb-8">Formularz kontaktowy</h2>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
