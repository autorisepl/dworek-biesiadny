import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { WhyDworek } from "@/components/why-dworek";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { wydarzeniaOferty } from "@/lib/wydarzenia-oferty-data";
import { Check, Info } from "lucide-react";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return wydarzeniaOferty.map((o) => ({ slug: o.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const oferta = wydarzeniaOferty.find((o) => o.slug === params.slug);
  if (!oferta) return { title: "Oferta nie znaleziona" };
  return {
    title: `${oferta.title} — Dworek Biesiadny w Radzewicach`,
    description: oferta.heroDescription,
  };
}

export default function OfertaWydarzeniaPage({ params }: Props) {
  const oferta = wydarzeniaOferty.find((o) => o.slug === params.slug);
  if (!oferta) notFound();

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Hero */}
      <section className="relative py-28 md:py-36 px-4 md:px-8 overflow-hidden">
        <PhotoPlaceholder
          className="absolute inset-0 w-full h-full"
          label={`Zdjęcie — ${oferta.title}`}
        />
        <div className="absolute inset-0 bg-primary-dark/70" />
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">
            Wydarzenia
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">{oferta.title}</h1>
          <div className="w-16 h-0.5 bg-accent mb-6" />
          <p className="font-heading text-lg md:text-xl italic text-accent/90 mb-4 max-w-2xl">
            {oferta.tagline}
          </p>
          <p className="font-body text-white/85 text-base md:text-lg max-w-2xl leading-relaxed">
            {oferta.heroDescription}
          </p>
        </div>
      </section>

      {/* Menu */}
      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">Menu</p>
            <h2 className="font-heading text-3xl md:text-4xl text-primary-dark mb-4">
              Co znajdziesz w ofercie
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {oferta.menuSections.map((section) => (
              <div key={section.category} className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-heading text-lg text-primary-dark mb-4 pb-3 border-b border-cream">
                  {section.category}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 font-body text-sm text-gray-700">
                      <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cennik */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">Cennik</p>
            <h2 className="font-heading text-3xl md:text-4xl text-primary-dark mb-4">Pakiety</h2>
            <div className="w-16 h-0.5 bg-accent mx-auto" />
          </div>

          <div
            className={cn(
              "grid grid-cols-1 gap-6 mb-10",
              oferta.packages.length === 2 ? "md:grid-cols-2 max-w-3xl mx-auto" : "md:grid-cols-3"
            )}
          >
            {oferta.packages.map((pkg) => (
              <div key={pkg.name} className="bg-white rounded-2xl p-8 border-2 border-transparent hover:border-accent/30 transition-colors shadow-sm">
                <h3 className="font-heading text-xl text-primary-dark font-bold mb-1">{pkg.name}</h3>
                {pkg.note && <p className="font-body text-xs text-gray-500 mb-4">{pkg.note}</p>}
                <p className="font-heading text-2xl font-bold text-primary">{pkg.price}</p>
              </div>
            ))}
          </div>

          {oferta.addons.length > 0 && (
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
              <div className="px-6 py-4 border-b border-cream">
                <h3 className="font-heading text-lg text-primary-dark font-bold">Opcje dodatkowe</h3>
              </div>
              {oferta.addons.map((addon, i) => (
                <div
                  key={addon.name}
                  className={cn(
                    "flex items-center justify-between px-6 py-3 font-body text-sm",
                    i % 2 === 0 ? "bg-white" : "bg-cream"
                  )}
                >
                  <span className="text-gray-700">{addon.name}</span>
                  <span className="font-medium text-primary-dark shrink-0 ml-4">{addon.price}</span>
                </div>
              ))}
            </div>
          )}

          {oferta.infoOrganizacyjne.length > 0 && (
            <div className="flex items-start gap-3 bg-accent/10 border border-accent/20 rounded-xl p-4 max-w-3xl mx-auto">
              <Info className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <ul className="space-y-1">
                {oferta.infoOrganizacyjne.map((info) => (
                  <li key={info} className="font-body text-sm text-gray-700">
                    {info}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <WhyDworek />

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 bg-primary-dark text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            Zapytaj o termin
          </h2>
          <p className="font-body text-white/80 mb-8">
            Odpowiadamy w ciągu 24 godzin w dni robocze. Opisz liczbę gości i termin —
            wrócimy z ofertą.
          </p>
          <Link
            href="/kontakt"
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-accent hover:bg-accent-light text-white font-body font-semibold px-10 py-4 h-14"
            )}
          >
            Napisz do nas
          </Link>
        </div>
      </section>
    </div>
  );
}
