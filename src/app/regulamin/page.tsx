import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regulamin — Dworek Biesiadny w Radzewicach",
  description: "Regulamin pobytu, rezerwacji i korzystania z usług Dworku Biesiadnego w Radzewicach.",
};

export default function ReguaminPage() {
  return (
    <div className="min-h-screen bg-warm-white py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">
          Informacje prawne
        </p>
        <h1 className="font-heading text-4xl md:text-5xl text-primary-dark mb-6">
          Regulamin
        </h1>
        <div className="w-16 h-0.5 bg-accent mb-10" />

        <div className="font-body text-gray-700 space-y-8">
          <section>
            <h2 className="font-heading text-2xl text-primary-dark mb-3">
              § 1. Postanowienia ogólne
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-sm leading-relaxed">
              <li>
                Niniejszy Regulamin określa zasady pobytu oraz korzystania z usług
                Dworku Biesiadnego w Radzewicach, D�uga 1B, Radzewice 62-022 (dalej:
                „Obiekt").
              </li>
              <li>
                Dokonanie rezerwacji jest równoznaczne z akceptacją niniejszego
                Regulaminu.
              </li>
              <li>
                Obiekt jest otwarty przez cały rok. Recepcja dostępna w godzinach
                ustalonych indywidualnie z gościem.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-primary-dark mb-3">
              § 2. Rezerwacje
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-sm leading-relaxed">
              <li>
                Rezerwacji można dokonać przez formularz kontaktowy na stronie
                dworekbiesiadny.pl, telefonicznie lub mailowo.
              </li>
              <li>
                Rezerwacja jest potwierdzona po uiszczeniu zadatku w wysokości ustalonej
                indywidualnie — nie mniej niż 30% wartości pobytu.
              </li>
              <li>
                Płatność pozostałej kwoty następuje najpóźniej w dniu przyjazdu, chyba
                że ustalono inaczej.
              </li>
              <li>
                W przypadku rezygnacji z rezerwacji na mniej niż 14 dni przed planowanym
                przyjazdem zadatek nie podlega zwrotowi, chyba że strony uzgodnią
                inaczej.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-primary-dark mb-3">
              § 3. Doba hotelowa
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-sm leading-relaxed">
              <li>Doba hotelowa trwa od godziny 15:00 do godziny 11:00 dnia następnego.</li>
              <li>
                Wcześniejsze zameldowanie lub późniejsze wymeldowanie jest możliwe po
                wcześniejszym uzgodnieniu z Obiektem i może wiązać się z dodatkową opłatą.
              </li>
              <li>
                Życzenia dotyczące godziny zameldowania Gość powinien zgłosić przy
                rezerwacji lub najpóźniej dzień przed przyjazdem.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-primary-dark mb-3">
              § 4. Zasady pobytu
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-sm leading-relaxed">
              <li>
                Gość ponosi odpowiedzialność finansową za wszelkie szkody wyrządzone
                podczas pobytu w Obiekcie.
              </li>
              <li>
                Na terenie całego Obiektu obowiązuje całkowity zakaz palenia tytoniu i
                e-papierosów, z wyjątkiem wyznaczonych miejsc.
              </li>
              <li>
                W godzinach 22:00–7:00 obowiązuje cisza nocna. Prosimy o szanowanie
                spokoju innych gości.
              </li>
              <li>
                Zwierzęta domowe są akceptowane po wcześniejszym uzgodnieniu z Obiektem
                i mogą wiązać się z dodatkową opłatą.
              </li>
              <li>
                Liczba osób przebywających w pokoju nie może przekraczać liczby podanej
                przy rezerwacji i maksymalnej pojemności danego apartamentu.
              </li>
              <li>
                Gość jest zobowiązany do niezwłocznego zgłoszenia wszelkich szkód lub
                usterek wykrytych w pokoju.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-primary-dark mb-3">
              § 5. Strefa relaksu
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-sm leading-relaxed">
              <li>
                Strefa relaksu (sauna, balia, jacuzzi) dostępna jest wyłącznie dla Gości
                Obiektu w godzinach ustalonych przez administrację.
              </li>
              <li>
                Korzystanie ze strefy relaksu przez osoby w stanie wskazującym na
                spożycie alkoholu jest zabronione.
              </li>
              <li>
                Z sauny i balii nie mogą korzystać osoby z przeciwwskazaniami zdrowotnymi.
                Obiekt nie ponosi odpowiedzialności za skutki korzystania ze strefy relaksu
                wbrew wskazaniom lekarskim.
              </li>
              <li>Obowiązuje zakaz wnoszenia szklanego naczynia na teren sauny i balii.</li>
              <li>
                Rezerwacja strefy relaksu odbywa się w recepcji lub z wyprzedzeniem drogą
                elektroniczną.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-primary-dark mb-3">
              § 6. Restauracja
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-sm leading-relaxed">
              <li>
                Restauracja Obiektu działa w godzinach podanych na stronie lub ustalonych
                przy rezerwacji.
              </li>
              <li>
                Rezerwacja stolika jest możliwa telefonicznie lub przez formularz
                kontaktowy.
              </li>
              <li>
                Obiekt zastrzega sobie prawo do zmian w menu bez wcześniejszego
                powiadomienia.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-primary-dark mb-3">
              § 7. Organizacja wydarzeń
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-sm leading-relaxed">
              <li>
                Organizacja wesel, komunii, urodzin, eventów firmowych i innych wydarzeń
                odbywa się na podstawie odrębnej umowy zawieranej z Obiektem.
              </li>
              <li>
                Szczegółowe warunki, w tym wymagany zadatek i warunki anulacji, określa
                indywidualna umowa.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-primary-dark mb-3">
              § 8. Odpowiedzialność Obiektu
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-sm leading-relaxed">
              <li>
                Obiekt nie ponosi odpowiedzialności za zgubione lub skradzione rzeczy
                wartościowe. Prosimy o korzystanie z sejfów dostępnych w apartamentach
                (o ile są dostępne) lub przekazanie kosztowności do depozytu.
              </li>
              <li>
                Obiekt zastrzega sobie prawo do odmowy przyjęcia Gości, którzy w trakcie
                poprzedniego pobytu dopuścili się naruszenia Regulaminu lub których
                zachowanie zakłóca spokój innych Gości.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-primary-dark mb-3">
              § 9. Reklamacje
            </h2>
            <p className="text-sm leading-relaxed">
              Wszelkie reklamacje dotyczące usług świadczonych przez Obiekt należy
              składać w formie pisemnej na adres: info@dworek-biesiadny.pl lub listownie na
              adres Obiektu. Reklamacje są rozpatrywane w ciągu 14 dni roboczych.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-primary-dark mb-3">
              § 10. Postanowienia końcowe
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-sm leading-relaxed">
              <li>
                W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają
                przepisy Kodeksu cywilnego oraz innych właściwych przepisów prawa
                polskiego.
              </li>
              <li>
                Obiekt zastrzega sobie prawo do zmiany Regulaminu. Zmiany wchodzą w życie
                z dniem opublikowania na stronie internetowej.
              </li>
              <li>Regulamin obowiązuje od 2024 r.</li>
            </ol>
          </section>

          <p className="text-xs text-gray-400 pt-4 border-t border-gray-100">
            Ostatnia aktualizacja: 2024
          </p>
        </div>
      </div>
    </div>
  );
}
