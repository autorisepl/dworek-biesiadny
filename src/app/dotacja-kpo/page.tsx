import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dotacja KPO — Dworek Biesiadny w Radzewicach",
  description:
    "Projekt KPOD.01.03-IW.01-B265/24 — Rozszerzenie i dywersyfikacja usług Dworku Biesiadnego w województwie Wielkopolskim. Dofinansowanie UE: 417 044,35 PLN.",
};

export default function DotacjaKPOPage() {
  return (
    <div className="min-h-screen bg-warm-white py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
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
              Unię Europejską ze środków<br />Krajowego Planu Odbudowy i Zwiększania Odporności
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
                {
                  label: "Nazwa projektu",
                  value: "Rozszerzenie i dywersyfikacja usług Dworku Biesiadnego w województwie Wielkopolskim",
                },
                {
                  label: "Numer projektu",
                  value: "KPOD.01.03-IW.01-B265/24",
                },
                {
                  label: "Beneficjent",
                  value: 'Justyna Błaszkowiak "Dworek Biesiadny"',
                },
                {
                  label: "Całkowita wartość projektu",
                  value: "641 508,18 PLN",
                },
                {
                  label: "Dofinansowanie UE",
                  value: "417 044,35 PLN (79,90%)",
                },
                {
                  label: "Program",
                  value: "Krajowy Plan Odbudowy i Zwiększania Odporności — inwestycja A1.2.1",
                },
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
              Celem projektu jest rozszerzenie i dywersyfikacja dotychczasowej działalności
              Dworku Biesiadnego poprzez wprowadzenie nowej usługi wypożyczania rowerów
              elektrycznych oraz unowocześnienie oferty noclegowej i gastronomicznej.
              Inwestycja ma na celu podniesienie komfortu gości, poprawę standardu obiektu
              oraz zwiększenie odporności przedsiębiorstwa na potencjalne kryzysy rynkowe.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-primary-dark mb-3 font-bold">
              Grupa docelowa
            </h2>
            <p className="text-sm leading-relaxed">
              Projekt skierowany jest do gości Dworku Biesiadnego — turystów krajowych i
              zagranicznych szukających aktywnego wypoczynku w otoczeniu natury Rogalińskiego
              Parku Krajobrazowego, a także do klientów biznesowych i społeczności lokalnej.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-primary-dark mb-3 font-bold">
              Efekty realizacji projektu
            </h2>
            <p className="text-sm leading-relaxed">
              Realizacja inwestycji pozwoli na wprowadzenie innowacyjnych usług rekreacyjnych,
              które znacząco podniosą atrakcyjność rynkową Dworku Biesiadnego. Dzięki
              automatyzacji procesów rezerwacji i zameldowania goście zyskają większą
              niezależność i wygodę, a obiekt poprawi swoją efektywność operacyjną. Wdrożenie
              proekologicznych rozwiązań energetycznych przyczyni się do ochrony środowiska
              naturalnego i zwiększy niezależność energetyczną obiektu. Całość działań
              zaowocuje stworzeniem nowoczesnego, bezpiecznego i konkurencyjnego miejsca,
              przygotowanego na dynamicznie zmieniające się potrzeby rynku turystycznego.
            </p>
          </section>

          <div className="bg-primary-dark text-white rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🇪🇺</span>
              <div>
                <p className="font-heading text-base font-bold">
                  Finansowane przez Unię Europejską — NextGenerationEU
                </p>
                <p className="font-body text-xs text-white/60">
                  #FunduszeEuropejskie #FunduszeUE #NextGenerationEU
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
            Ostatnia aktualizacja: 2025
          </p>
        </div>
      </div>
    </div>
  );
}
