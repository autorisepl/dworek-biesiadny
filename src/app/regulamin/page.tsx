import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regulamin â€” Dworek Biesiadny w Radzewicach",
  description: "Regulamin pobytu, rezerwacji i korzystania z usĹ‚ug Dworku Biesiadnego w Radzewicach.",
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
              Â§ 1. Postanowienia ogĂłlne
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-sm leading-relaxed">
              <li>
                Niniejszy Regulamin okreĹ›la zasady pobytu oraz korzystania z usĹ‚ug
                Dworku Biesiadnego w Radzewicach, Długa 1B, Radzewice 62-022 (dalej:
                â€žObiekt").
              </li>
              <li>
                Dokonanie rezerwacji jest rĂłwnoznaczne z akceptacjÄ… niniejszego
                Regulaminu.
              </li>
              <li>
                Obiekt jest otwarty przez caĹ‚y rok. Recepcja dostÄ™pna w godzinach
                ustalonych indywidualnie z goĹ›ciem.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-primary-dark mb-3">
              Â§ 2. Rezerwacje
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-sm leading-relaxed">
              <li>
                Rezerwacji moĹĽna dokonaÄ‡ przez formularz kontaktowy na stronie
                dworekbiesiadny.pl, telefonicznie lub mailowo.
              </li>
              <li>
                Rezerwacja jest potwierdzona po uiszczeniu zadatku w wysokoĹ›ci ustalonej
                indywidualnie â€” nie mniej niĹĽ 30% wartoĹ›ci pobytu.
              </li>
              <li>
                PĹ‚atnoĹ›Ä‡ pozostaĹ‚ej kwoty nastÄ™puje najpĂłĹşniej w dniu przyjazdu, chyba
                ĹĽe ustalono inaczej.
              </li>
              <li>
                W przypadku rezygnacji z rezerwacji na mniej niĹĽ 14 dni przed planowanym
                przyjazdem zadatek nie podlega zwrotowi, chyba ĹĽe strony uzgodniÄ…
                inaczej.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-primary-dark mb-3">
              Â§ 3. Doba hotelowa
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-sm leading-relaxed">
              <li>Doba hotelowa trwa od godziny 15:00 do godziny 11:00 dnia nastÄ™pnego.</li>
              <li>
                WczeĹ›niejsze zameldowanie lub pĂłĹşniejsze wymeldowanie jest moĹĽliwe po
                wczeĹ›niejszym uzgodnieniu z Obiektem i moĹĽe wiÄ…zaÄ‡ siÄ™ z dodatkowÄ… opĹ‚atÄ….
              </li>
              <li>
                Ĺ»yczenia dotyczÄ…ce godziny zameldowania GoĹ›Ä‡ powinien zgĹ‚osiÄ‡ przy
                rezerwacji lub najpĂłĹşniej dzieĹ„ przed przyjazdem.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-primary-dark mb-3">
              Â§ 4. Zasady pobytu
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-sm leading-relaxed">
              <li>
                GoĹ›Ä‡ ponosi odpowiedzialnoĹ›Ä‡ finansowÄ… za wszelkie szkody wyrzÄ…dzone
                podczas pobytu w Obiekcie.
              </li>
              <li>
                Na terenie caĹ‚ego Obiektu obowiÄ…zuje caĹ‚kowity zakaz palenia tytoniu i
                e-papierosĂłw, z wyjÄ…tkiem wyznaczonych miejsc.
              </li>
              <li>
                W godzinach 22:00â€“7:00 obowiÄ…zuje cisza nocna. Prosimy o szanowanie
                spokoju innych goĹ›ci.
              </li>
              <li>
                ZwierzÄ™ta domowe sÄ… akceptowane po wczeĹ›niejszym uzgodnieniu z Obiektem
                i mogÄ… wiÄ…zaÄ‡ siÄ™ z dodatkowÄ… opĹ‚atÄ….
              </li>
              <li>
                Liczba osĂłb przebywajÄ…cych w pokoju nie moĹĽe przekraczaÄ‡ liczby podanej
                przy rezerwacji i maksymalnej pojemnoĹ›ci danego apartamentu.
              </li>
              <li>
                GoĹ›Ä‡ jest zobowiÄ…zany do niezwĹ‚ocznego zgĹ‚oszenia wszelkich szkĂłd lub
                usterek wykrytych w pokoju.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-primary-dark mb-3">
              Â§ 5. Strefa relaksu
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-sm leading-relaxed">
              <li>
                Strefa relaksu (sauna, balia, jacuzzi) dostÄ™pna jest wyĹ‚Ä…cznie dla GoĹ›ci
                Obiektu w godzinach ustalonych przez administracjÄ™.
              </li>
              <li>
                Korzystanie ze strefy relaksu przez osoby w stanie wskazujÄ…cym na
                spoĹĽycie alkoholu jest zabronione.
              </li>
              <li>
                Z sauny i balii nie mogÄ… korzystaÄ‡ osoby z przeciwwskazaniami zdrowotnymi.
                Obiekt nie ponosi odpowiedzialnoĹ›ci za skutki korzystania ze strefy relaksu
                wbrew wskazaniom lekarskim.
              </li>
              <li>ObowiÄ…zuje zakaz wnoszenia szklanego naczynia na teren sauny i balii.</li>
              <li>
                Rezerwacja strefy relaksu odbywa siÄ™ w recepcji lub z wyprzedzeniem drogÄ…
                elektronicznÄ….
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-primary-dark mb-3">
              Â§ 6. Restauracja
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-sm leading-relaxed">
              <li>
                Restauracja Obiektu dziaĹ‚a w godzinach podanych na stronie lub ustalonych
                przy rezerwacji.
              </li>
              <li>
                Rezerwacja stolika jest moĹĽliwa telefonicznie lub przez formularz
                kontaktowy.
              </li>
              <li>
                Obiekt zastrzega sobie prawo do zmian w menu bez wczeĹ›niejszego
                powiadomienia.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-primary-dark mb-3">
              Â§ 7. Organizacja wydarzeĹ„
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-sm leading-relaxed">
              <li>
                Organizacja wesel, komunii, urodzin, eventĂłw firmowych i innych wydarzeĹ„
                odbywa siÄ™ na podstawie odrÄ™bnej umowy zawieranej z Obiektem.
              </li>
              <li>
                SzczegĂłĹ‚owe warunki, w tym wymagany zadatek i warunki anulacji, okreĹ›la
                indywidualna umowa.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-primary-dark mb-3">
              Â§ 8. OdpowiedzialnoĹ›Ä‡ Obiektu
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-sm leading-relaxed">
              <li>
                Obiekt nie ponosi odpowiedzialnoĹ›ci za zgubione lub skradzione rzeczy
                wartoĹ›ciowe. Prosimy o korzystanie z sejfĂłw dostÄ™pnych w apartamentach
                (o ile sÄ… dostÄ™pne) lub przekazanie kosztownoĹ›ci do depozytu.
              </li>
              <li>
                Obiekt zastrzega sobie prawo do odmowy przyjÄ™cia GoĹ›ci, ktĂłrzy w trakcie
                poprzedniego pobytu dopuĹ›cili siÄ™ naruszenia Regulaminu lub ktĂłrych
                zachowanie zakĹ‚Ăłca spokĂłj innych GoĹ›ci.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-primary-dark mb-3">
              Â§ 9. Reklamacje
            </h2>
            <p className="text-sm leading-relaxed">
              Wszelkie reklamacje dotyczÄ…ce usĹ‚ug Ĺ›wiadczonych przez Obiekt naleĹĽy
              skĹ‚adaÄ‡ w formie pisemnej na adres: info@dworek-biesiadny.pl lub listownie na
              adres Obiektu. Reklamacje sÄ… rozpatrywane w ciÄ…gu 14 dni roboczych.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-primary-dark mb-3">
              Â§ 10. Postanowienia koĹ„cowe
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-sm leading-relaxed">
              <li>
                W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie majÄ…
                przepisy Kodeksu cywilnego oraz innych wĹ‚aĹ›ciwych przepisĂłw prawa
                polskiego.
              </li>
              <li>
                Obiekt zastrzega sobie prawo do zmiany Regulaminu. Zmiany wchodzÄ… w ĹĽycie
                z dniem opublikowania na stronie internetowej.
              </li>
              <li>Regulamin obowiÄ…zuje od 2024 r.</li>
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
