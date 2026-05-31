import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dotacja KPO — Dworek Biesiadny w Radzewicach",
  description:
    "Informacja o projekcie współfinansowanym z Krajowego Planu Odbudowy i Zwiększania Odporności (KPO) — Dworek Biesiadny w Radzewicach.",
};

export default function DotacjaKPOPage() {
  return (
    <div className="min-h-screen bg-warm-white py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Flagi UE */}
        <div className="flex items-center gap-4 mb-10 p-5 bg-cream rounded-2xl border border-gray-100">
          <div className="flex items-center gap-3">
            <span className="text-4xl" aria-label="Flaga Unii Europejskiej">🇪🇺</span>
            <span className="text-4xl" aria-label="Flaga Polski">🇵🇱</span>
          </div>
          <div>
            <p className="font-body text-xs text-gray-500 uppercase tracking-wide">
              Projekt współfinansowany przez
            </p>
            <p className="font-heading text-base text-primary-dark font-bold leading-snug">
              Unię Europejską ze środków<br />Krajowego Planu Odbudowy
            </p>
          </div>
        </div>

        <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">
          Dotacja
        </p>
        <h1 className="font-heading text-4xl md:text-5xl text-primary-dark mb-6">
          Projekt KPO
        </h1>
        <div className="w-16 h-0.5 bg-accent mb-10" />

        <div className="font-body text-gray-700 space-y-8">
          <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="font-heading text-xl text-primary-dark mb-5 font-bold">
              Informacja o projekcie
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Nazwa projektu", value: "[PLACEHOLDER_KPO — nazwa projektu]" },
                { label: "Numer projektu", value: "[PLACEHOLDER_KPO — numer projektu]" },
                { label: "Beneficjent", value: "Dworek Biesiadny w Radzewicach" },
                { label: "Wartość projektu", value: "[PLACEHOLDER_KPO — wartość całkowita]" },
                { label: "Dofinansowanie UE", value: "[PLACEHOLDER_KPO — kwota dofinansowania]" },
                { label: "Okres realizacji", value: "[PLACEHOLDER_KPO — daty]" },
              ].map((item) => (
                <div key={item.label} className="bg-cream rounded-xl p-4">
                  <p className="font-body text-xs text-gray-400 uppercase tracking-wide mb-1">
                    {item.label}
                  </p>
                  <p className="font-body text-sm text-primary-dark font-medium">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-heading text-xl text-primary-dark mb-3 font-bold">
              Cel projektu
            </h2>
            <p className="text-sm leading-relaxed">
              [PLACEHOLDER_KPO — opis celu projektu, zakres inwestycji i oczekiwane
              rezultaty zgodnie z dokumentacją wniosku o dofinansowanie]
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-primary-dark mb-3 font-bold">
              Zakres inwestycji
            </h2>
            <p className="text-sm leading-relaxed">
              [PLACEHOLDER_KPO — szczegółowy opis zakresu rzeczowego projektu]
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-primary-dark mb-3 font-bold">
              Efekty projektu
            </h2>
            <p className="text-sm leading-relaxed">
              [PLACEHOLDER_KPO — wskaźniki produktu i rezultatu projektu]
            </p>
          </section>

          <div className="bg-primary-dark text-white rounded-2xl p-8 mt-4">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🇪🇺</span>
              <div>
                <p className="font-heading text-base font-bold">
                  Finansowane przez Unię Europejską
                </p>
                <p className="font-body text-xs text-white/60">
                  NextGenerationEU — Krajowy Plan Odbudowy i Zwiększania Odporności
                </p>
              </div>
            </div>
            <p className="font-body text-xs text-white/60 leading-relaxed">
              Projekt współfinansowany z Krajowego Planu Odbudowy i Zwiększania Odporności,
              finansowanego ze środków Unii Europejskiej — NextGenerationEU. Treść niniejszej
              strony odzwierciedla wyłącznie stanowisko autora i Komisja Europejska nie ponosi
              odpowiedzialności za zawarte tu informacje.
            </p>
          </div>

          <p className="text-xs text-gray-400 pt-4 border-t border-gray-100">
            Ostatnia aktualizacja: 2024
          </p>
        </div>
      </div>
    </div>
  );
}
