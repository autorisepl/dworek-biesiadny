import type { Metadata } from "next";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Calendar, Briefcase, Megaphone, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Aktualnosci — Dworek Biesiadny w Radzewicach",
  description:
    "Aktualnosci Dworku Biesiadnego — oferty pracy, nadchodzace wydarzenia, ogłoszenia sezonowe i nowosci z obiektu.",
};

type PostCategory = "Praca" | "Wydarzenie" | "Ogłoszenie";

interface Post {
  category: PostCategory;
  date: string;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
}

const posts: Post[] = [
  {
    category: "Praca",
    date: "2 czerwca 2026",
    title: "Poszukujemy kelnera / kelnerki — sezon letni 2026",
    description:
      "Zatrudnimy do pracy w restauracji i obsługi gości. Wymagana dyspozycyjność w weekendy. Oferujemy umowę zlecenie, elastyczne godziny i miłą atmosferę pracy w kameralnym obiekcie nad Wartą. CV prosimy przesłać na adres: info@dworek-biesiadny.pl",
    href: "/kontakt",
    linkLabel: "Napisz do nas",
  },
  {
    category: "Wydarzenie",
    date: "1 czerwca 2026",
    title: "Noc Swietojanska — 21 czerwca 2026",
    description:
      "Zapraszamy na wieczor przy ognisku nad starorzeczem Warty. W programie: ognisko, muzyka na zywo, pieczone kielbasy i wianek puszczany o polnocy. Nocleg w apartamentach — ostatnie wolne miejsca. Wstep platny.",
    href: "/kontakt",
    linkLabel: "Zapytaj o bilety",
  },
  {
    category: "Ogłoszenie",
    date: "28 maja 2026",
    title: "Wolne terminy — lipiec i sierpien 2026",
    description:
      "Mamy jeszcze dostepne terminy na noclegi i organizacje uroczystosci w lipcu oraz sierpniu. Szczegolnie polecamy weekendy sierpniowe — idealne na wesele lub rodzinne spotkanie. Zapytaj o dostepnosc i aktualny cennik.",
    href: "/kontakt",
    linkLabel: "Sprawdz dostepnosc",
  },
];

const categoryConfig: Record<PostCategory, { icon: typeof Calendar; color: string; bg: string }> = {
  Praca: { icon: Briefcase, color: "text-blue-700", bg: "bg-blue-50 border-blue-200" },
  Wydarzenie: { icon: Calendar, color: "text-accent", bg: "bg-accent/10 border-accent/20" },
  "Ogłoszenie": { icon: Megaphone, color: "text-primary", bg: "bg-primary/10 border-primary/20" },
};

export default function AktualnosciPage() {
  return (
    <div className="min-h-screen bg-warm-white">
      {/* Hero */}
      <section className="relative py-28 md:py-36 px-4 md:px-8 overflow-hidden">
        <PhotoPlaceholder className="absolute inset-0 w-full h-full" label="Zdjęcie — Dworek, widok ogólny" />
        <div className="absolute inset-0 bg-primary-dark/65" />
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">
            Co nowego
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Aktualnosci
          </h1>
          <div className="w-16 h-0.5 bg-accent mb-6" />
          <p className="font-body text-white/85 text-base md:text-xl max-w-2xl leading-relaxed">
            Oferty pracy, nadchodzace wydarzenia, ogłoszenia i nowosci z Dworku Biesiadnego.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-heading text-2xl text-primary-dark mb-3">Brak aktualnosci</p>
              <p className="font-body text-gray-500">Zajrzyj wkrotce — pojawia sie tu nowe informacje.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {posts.map((post, i) => {
                const config = categoryConfig[post.category];
                const Icon = config.icon;
                return (
                  <article
                    key={i}
                    className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-cream"
                  >
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-5">
                        <span className={cn("inline-flex items-center gap-1.5 text-xs font-body font-medium px-3 py-1 rounded-full border", config.bg, config.color)}>
                          <Icon className="w-3.5 h-3.5" />
                          {post.category}
                        </span>
                        <span className="font-body text-xs text-gray-400">{post.date}</span>
                      </div>
                      <h2 className="font-heading text-xl md:text-2xl text-primary-dark font-bold mb-3 leading-snug">
                        {post.title}
                      </h2>
                      <p className="font-body text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                        {post.description}
                      </p>
                      {post.href && (
                        <Link
                          href={post.href}
                          className={cn(
                            buttonVariants({ variant: "outline" }),
                            "border-primary text-primary hover:bg-primary hover:text-white font-body font-medium gap-1.5"
                          )}
                        >
                          {post.linkLabel}
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          <div className="mt-12 text-center">
            <p className="font-body text-gray-500 text-sm">
              Masz pytania? Zadzwon lub napisz —{" "}
              <Link href="/kontakt" className="text-primary underline underline-offset-4 hover:text-primary-dark transition-colors">
                strona kontaktowa
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
