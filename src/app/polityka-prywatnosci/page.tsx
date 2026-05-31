import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka prywatności — Dworek Biesiadny w Radzewicach",
  description:
    "Polityka prywatności i ochrony danych osobowych Dworku Biesiadnego w Radzewicach zgodna z RODO.",
};

export default function PolitykaPrywatnosci() {
  return (
    <div className="min-h-screen bg-warm-white py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">
          Informacje prawne
        </p>
        <h1 className="font-heading text-4xl md:text-5xl text-primary-dark mb-6">
          Polityka prywatności
        </h1>
        <div className="w-16 h-0.5 bg-accent mb-10" />

        <div className="prose prose-gray max-w-none font-body text-gray-700 space-y-8">
          <section>
            <h2 className="font-heading text-2xl text-primary-dark mb-3">
              1. Administrator danych osobowych
            </h2>
            <p className="leading-relaxed">
              Administratorem danych osobowych jest Dworek Biesiadny w Radzewicach,
              [PLACEHOLDER_ADDRESS], e-mail: [PLACEHOLDER_EMAIL], tel.:
              [PLACEHOLDER_PHONE].
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-primary-dark mb-3">
              2. Jakie dane zbieramy
            </h2>
            <p className="leading-relaxed mb-3">
              Zbieramy dane osobowe wyłącznie w zakresie niezbędnym do realizacji usług:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>
                <strong>Formularz kontaktowy / rezerwacyjny:</strong> imię i nazwisko,
                adres e-mail, numer telefonu (opcjonalnie), treść zapytania.
              </li>
              <li>
                <strong>Pliki cookies:</strong> dane techniczne (adres IP, przeglądarka,
                czas wizyty) zbierane przez niezbędne pliki cookies oraz — po udzieleniu
                zgody — przez analityczne pliki cookies (Google Analytics).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-primary-dark mb-3">
              3. Podstawa prawna i cel przetwarzania
            </h2>
            <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed">
              <li>
                <strong>Art. 6 ust. 1 lit. b RODO</strong> — przetwarzanie niezbędne do
                wykonania umowy lub podjęcia działań na żądanie osoby, której dane dotyczą
                (obsługa rezerwacji, odpowiedź na zapytanie).
              </li>
              <li>
                <strong>Art. 6 ust. 1 lit. a RODO</strong> — zgoda osoby, której dane
                dotyczą (analityczne pliki cookies — wyłącznie po wyrażeniu zgody).
              </li>
              <li>
                <strong>Art. 6 ust. 1 lit. f RODO</strong> — uzasadniony interes
                administratora (bezpieczeństwo strony, niezbędne cookies techniczne).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-primary-dark mb-3">
              4. Okres przechowywania danych
            </h2>
            <p className="leading-relaxed">
              Dane przekazane przez formularz kontaktowy przechowujemy przez okres
              niezbędny do obsługi zapytania lub realizacji rezerwacji, nie dłużej niż 3
              lata od ostatniego kontaktu. Dane z analitycznych cookies (Google Analytics)
              przechowywane są zgodnie z warunkami Google LLC — domyślnie do 26 miesięcy.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-primary-dark mb-3">
              5. Prawa osób, których dane dotyczą
            </h2>
            <p className="leading-relaxed mb-3">
              Przysługują Ci następujące prawa:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed">
              <li>Prawo dostępu do danych (art. 15 RODO)</li>
              <li>Prawo do sprostowania danych (art. 16 RODO)</li>
              <li>Prawo do usunięcia danych („prawo do bycia zapomnianym", art. 17 RODO)</li>
              <li>Prawo do ograniczenia przetwarzania (art. 18 RODO)</li>
              <li>Prawo do przenoszenia danych (art. 20 RODO)</li>
              <li>Prawo do sprzeciwu wobec przetwarzania (art. 21 RODO)</li>
              <li>
                Prawo do cofnięcia zgody w dowolnym momencie (nie wpływa na zgodność z
                prawem przetwarzania przed cofnięciem)
              </li>
              <li>
                Prawo wniesienia skargi do organu nadzorczego — Prezesa Urzędu Ochrony
                Danych Osobowych (ul. Stawki 2, 00-193 Warszawa)
              </li>
            </ul>
            <p className="leading-relaxed mt-3">
              Aby skorzystać z praw, skontaktuj się z nami: [PLACEHOLDER_EMAIL]
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-primary-dark mb-3">
              6. Pliki cookies
            </h2>
            <p className="leading-relaxed mb-3">
              Stosujemy dwa rodzaje plików cookies:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed">
              <li>
                <strong>Niezbędne:</strong> wymagane do prawidłowego działania strony
                (sesja, preferencje cookies). Nie wymagają zgody, nie można ich wyłączyć.
              </li>
              <li>
                <strong>Analityczne (opcjonalne):</strong> Google Analytics — zbierają
                anonimowe dane statystyczne o ruchu na stronie. Aktywowane wyłącznie po
                wyrażeniu zgody. Możesz cofnąć zgodę w dowolnym momencie klikając
                „Ustawienia cookies" w stopce strony.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-primary-dark mb-3">
              7. Przekazywanie danych
            </h2>
            <p className="leading-relaxed">
              Dane osobowe nie są sprzedawane ani przekazywane podmiotom trzecim bez
              Twojej zgody, z wyjątkiem podmiotów przetwarzających dane w naszym imieniu
              (hosting, baza danych Supabase, Google Analytics — wyłącznie po wyrażeniu
              zgody) oraz sytuacji wymaganych przepisami prawa.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-primary-dark mb-3">
              8. Kontakt w sprawach ochrony danych
            </h2>
            <p className="leading-relaxed">
              W sprawach związanych z ochroną danych osobowych skontaktuj się z nami:{" "}
              <strong>[PLACEHOLDER_EMAIL]</strong>
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
