import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { KpoBanner } from "@/components/kpo-banner";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CookieConsent } from "@/components/cookie-consent";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
});

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dworekbiesiadny.pl"),
  title: "Dworek Biesiadny w Radzewicach — Pokoje, Restauracja, Wydarzenia",
  description:
    "Kameralny dworek nad starorzeczem Warty w Radzewicach. 8 apartamentów, restauracja, strefa wellness z sauną i balią, glamping, organizacja wesel i eventów. ~40 minut od Poznania.",
  keywords: [
    "dworek biesiadny",
    "radzewice",
    "noclegi wielkopolska",
    "restauracja warta",
    "sauna balia wellness",
    "glamping",
    "wesela radzewice",
  ],
  openGraph: {
    title: "Dworek Biesiadny w Radzewicach",
    description:
      "8 apartamentów, restauracja i strefa relaksu nad starorzeczem Warty. W sercu natury, ~40 min od Poznania.",
    type: "website",
    locale: "pl_PL",
    url: "https://dworekbiesiadny.pl",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Dworek Biesiadny w Radzewicach",
  description:
    "Kameralny obiekt nad starorzeczem Warty w Radzewicach, Wielkopolska. 8 apartamentów, restauracja, sauna, glamping.",
  url: "https://dworekbiesiadny.pl",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Radzewice",
    addressRegion: "Wielkopolska",
    addressCountry: "PL",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Sauna", value: true },
    { "@type": "LocationFeatureSpecification", name: "Balia", value: true },
    { "@type": "LocationFeatureSpecification", name: "Restauracja", value: true },
    { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Parking", value: true },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${playfair.variable} ${lato.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased font-body bg-warm-white text-gray-800">
        <KpoBanner />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
