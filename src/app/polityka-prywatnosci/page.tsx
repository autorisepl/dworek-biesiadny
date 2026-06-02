import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka prywatnoĹ›ci â€” Dworek Biesiadny w Radzewicach",
  description:
    "Polityka prywatnoĹ›ci i ochrony danych osobowych Dworku Biesiadnego w Radzewicach zgodna z RODO.",
};

export default function PolitykaPrywatnosci() {
  return (
    <div className="min-h-screen bg-warm-white py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">
          Informacje prawne
        </p>
        <h1 className="font-heading text-4xl md:text-5xl text-primary-dark mb-6">
          Polityka prywatnoĹ›ci
        </h1>
        <div className="w-16 h-0.5 bg-accent mb-10" />

        <div className="prose prose-gray max-w-none font-body text-gray-700 space-y-8">
          <section>
            <h2 className="font-heading text-2xl text-primary-dark mb-3">
              1. Administrator danych osobowych
            </h2>
            <p className="leading-relaxed">
              Administratorem danych osobowych jest Dworek Biesiadny w Radzewicach,
              Długa 1B, Radzewice 62-022, e-mail: info@dworek-biesiadny.pl, tel.:
              +48 691 845 079.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-primary-dark mb-3">
              2. Jakie dane zbieramy
            </h2>
            <p className="leading-relaxed mb-3">
              Zbieramy dane osobowe wyĹ‚Ä…cznie w zakresie niezbÄ™dnym do realizacji usĹ‚ug:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>
                <strong>Formularz kontaktowy / rezerwacyjny:</strong> imiÄ™ i nazwisko,
                adres e-mail, numer telefonu (opcjonalnie), treĹ›Ä‡ zapytania.
              </li>
              <li>
                <strong>Pliki cookies:</strong> dane techniczne (adres IP, przeglÄ…darka,
                czas wizyty) zbierane przez niezbÄ™dne pliki cookies oraz â€” po udzieleniu
                zgody â€” przez analityczne pliki cookies (Google Analytics).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-primary-dark mb-3">
              3. Podstawa prawna i cel przetwarzania
            </h2>
            <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed">
              <li>
                <strong>Art. 6 ust. 1 lit. b RODO</strong> â€” przetwarzanie niezbÄ™dne do
                wykonania umowy lub podjÄ™cia dziaĹ‚aĹ„ na ĹĽÄ…danie osoby, ktĂłrej dane dotyczÄ…
                (obsĹ‚uga rezerwacji, odpowiedĹş na zapytanie).
              </li>
              <li>
                <strong>Art. 6 ust. 1 lit. a RODO</strong> â€” zgoda osoby, ktĂłrej dane
                dotyczÄ… (analityczne pliki cookies â€” wyĹ‚Ä…cznie po wyraĹĽeniu zgody).
              </li>
              <li>
                <strong>Art. 6 ust. 1 lit. f RODO</strong> â€” uzasadniony interes
                administratora (bezpieczeĹ„stwo strony, niezbÄ™dne cookies techniczne).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-primary-dark mb-3">
              4. Okres przechowywania danych
            </h2>
            <p className="leading-relaxed">
              Dane przekazane przez formularz kontaktowy przechowujemy przez okres
              niezbÄ™dny do obsĹ‚ugi zapytania lub realizacji rezerwacji, nie dĹ‚uĹĽej niĹĽ 3
              lata od ostatniego kontaktu. Dane z analitycznych cookies (Google Analytics)
              przechowywane sÄ… zgodnie z warunkami Google LLC â€” domyĹ›lnie do 26 miesiÄ™cy.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-primary-dark mb-3">
              5. Prawa osĂłb, ktĂłrych dane dotyczÄ…
            </h2>
            <p className="leading-relaxed mb-3">
              PrzysĹ‚ugujÄ… Ci nastÄ™pujÄ…ce prawa:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed">
              <li>Prawo dostÄ™pu do danych (art. 15 RODO)</li>
              <li>Prawo do sprostowania danych (art. 16 RODO)</li>
              <li>Prawo do usuniÄ™cia danych (â€žprawo do bycia zapomnianym", art. 17 RODO)</li>
              <li>Prawo do ograniczenia przetwarzania (art. 18 RODO)</li>
              <li>Prawo do przenoszenia danych (art. 20 RODO)</li>
              <li>Prawo do sprzeciwu wobec przetwarzania (art. 21 RODO)</li>
              <li>
                Prawo do cofniÄ™cia zgody w dowolnym momencie (nie wpĹ‚ywa na zgodnoĹ›Ä‡ z
                prawem przetwarzania przed cofniÄ™ciem)
              </li>
              <li>
                Prawo wniesienia skargi do organu nadzorczego â€” Prezesa UrzÄ™du Ochrony
                Danych Osobowych (ul. Stawki 2, 00-193 Warszawa)
              </li>
            </ul>
            <p className="leading-relaxed mt-3">
              Aby skorzystaÄ‡ z praw, skontaktuj siÄ™ z nami: info@dworek-biesiadny.pl
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-primary-dark mb-3">
              6. Pliki cookies
            </h2>
            <p className="leading-relaxed mb-3">
              Stosujemy dwa rodzaje plikĂłw cookies:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed">
              <li>
                <strong>NiezbÄ™dne:</strong> wymagane do prawidĹ‚owego dziaĹ‚ania strony
                (sesja, preferencje cookies). Nie wymagajÄ… zgody, nie moĹĽna ich wyĹ‚Ä…czyÄ‡.
              </li>
              <li>
                <strong>Analityczne (opcjonalne):</strong> Google Analytics â€” zbierajÄ…
                anonimowe dane statystyczne o ruchu na stronie. Aktywowane wyĹ‚Ä…cznie po
                wyraĹĽeniu zgody. MoĹĽesz cofnÄ…Ä‡ zgodÄ™ w dowolnym momencie klikajÄ…c
                â€žUstawienia cookies" w stopce strony.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-primary-dark mb-3">
              7. Przekazywanie danych
            </h2>
            <p className="leading-relaxed">
              Dane osobowe nie sÄ… sprzedawane ani przekazywane podmiotom trzecim bez
              Twojej zgody, z wyjÄ…tkiem podmiotĂłw przetwarzajÄ…cych dane w naszym imieniu
              (hosting, baza danych Supabase, Google Analytics â€” wyĹ‚Ä…cznie po wyraĹĽeniu
              zgody) oraz sytuacji wymaganych przepisami prawa.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-primary-dark mb-3">
              8. Kontakt w sprawach ochrony danych
            </h2>
            <p className="leading-relaxed">
              W sprawach zwiÄ…zanych z ochronÄ… danych osobowych skontaktuj siÄ™ z nami:{" "}
              <strong>info@dworek-biesiadny.pl</strong>
            </p>
          </section>

          <p className="text-xs text-gray-400 pt-4 border-t border-gray-100">
            Ostatnia aktualizacja: 2024
          </p>
        </div>
      </div>
    </div>
  );
}
