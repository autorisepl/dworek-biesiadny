import type { Metadata } from "next";
import { StrefaAktywnaContent } from "./strefa-aktywna-content";

export const metadata: Metadata = {
  title: "Strefa dla aktywnych — Rowery elektryczne i nie tylko | Dworek Biesiadny",
  description:
    "Wypożyczalnia rowerów elektrycznych (150 zł/dzień) i klasycznych (70 zł/dzień) w Dworku Biesiadnym w Radzewicach. Odkryj Łąki Nadwarciańskie na dwóch kółkach.",
  openGraph: {
    title: "Strefa dla aktywnych — Rowery | Dworek Biesiadny",
    description: "Wypożyczalnia rowerów elektrycznych i klasycznych. Idealne trasy wzdłuż Warty.",
  },
};

export default function StrefaAktywnaPage() {
  return <StrefaAktywnaContent />;
}
