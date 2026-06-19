"use client";

import { useState } from "react";
import { rooms } from "@/lib/rooms-data";
import { CalendarDays, User, Phone, Mail, Bed, Users, CheckCircle2, ChevronRight, ArrowLeft, Banknote, StickyNote } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Step = "details" | "confirm" | "success";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  roomSlug: string;
  guests: number;
  notes: string;
}

const initialForm: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  checkIn: "",
  checkOut: "",
  roomSlug: rooms[0].slug,
  guests: 2,
  notes: "",
};

function getTodayStr() {
  return new Date().toISOString().split("T")[0];
}

function getTomorrowStr() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
}

function getNights(checkIn: string, checkOut: string) {
  if (!checkIn || !checkOut) return 0;
  return Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000);
}

function formatDatePL(str: string) {
  if (!str) return "—";
  return new Date(str).toLocaleDateString("pl-PL", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function RezerwacjaPage() {
  const [step, setStep] = useState<Step>("details");
  const [form, setForm] = useState<FormData>({ ...initialForm, checkIn: getTodayStr(), checkOut: getTomorrowStr() });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [reservationNumber, setReservationNumber] = useState<string>("");

  const selectedRoom = rooms.find((r) => r.slug === form.roomSlug) ?? rooms[0];
  const nights = getNights(form.checkIn, form.checkOut);

  function update(field: keyof FormData, value: string | number) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function validate(): string | null {
    if (!form.firstName.trim()) return "Imię jest wymagane.";
    if (!form.lastName.trim()) return "Nazwisko jest wymagane.";
    if (!form.email.trim() || !form.email.includes("@")) return "Podaj poprawny adres e-mail.";
    if (!form.checkIn) return "Wybierz datę przyjazdu.";
    if (!form.checkOut) return "Wybierz datę wyjazdu.";
    if (nights <= 0) return "Data wyjazdu musi być późniejsza niż przyjazdu.";
    return null;
  }

  async function submit() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/rezerwacja", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          roomName: selectedRoom.name,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Błąd serwera.");
      setReservationNumber(data.reservationNumber);
      setStep("success");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Spróbuj ponownie.");
    } finally {
      setLoading(false);
    }
  }

  if (step === "success") {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-xl max-w-lg w-full p-10 text-center">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-primary" />
          </div>
          <p className="font-body text-xs text-accent uppercase tracking-widest mb-2">Rezerwacja przyjęta</p>
          <h1 className="font-heading text-3xl text-primary-dark mb-4">Dziękujemy!</h1>
          <p className="font-body text-gray-600 text-sm leading-relaxed mb-6">
            Twoja rezerwacja została przyjęta. Potwierdzenie wysłaliśmy na adres{" "}
            <span className="font-semibold text-primary">{form.email}</span>.
          </p>
          <div className="bg-cream rounded-2xl p-5 mb-6 text-left">
            <p className="font-body text-xs text-gray-400 uppercase tracking-widest mb-3">Szczegóły</p>
            <div className="space-y-2 font-body text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Numer rezerwacji</span>
                <span className="font-bold text-primary-dark tracking-wider">{reservationNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Apartament</span>
                <span className="font-medium text-primary-dark">{selectedRoom.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Check-in</span>
                <span className="font-medium text-primary-dark">{formatDatePL(form.checkIn)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Check-out</span>
                <span className="font-medium text-primary-dark">{formatDatePL(form.checkOut)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Płatność</span>
                <span className="font-medium text-green-700">Gotówka w dworku</span>
              </div>
            </div>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-body font-medium px-8 py-3 rounded-xl transition-colors"
          >
            Wróć na stronę główną
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <Link href="/" className="inline-flex items-center gap-2 font-body text-sm text-gray-500 hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Wróć na stronę główną
          </Link>
          <p className="text-accent font-body text-xs tracking-widest uppercase mb-2">Noclegi</p>
          <h1 className="font-heading text-4xl md:text-5xl text-primary-dark mb-2">Rezerwacja</h1>
          <p className="font-body text-gray-500 text-sm">Dworek Biesiadny w Radzewicach · Płatność gotówką przy zameldowaniu</p>
        </div>

        {/* Steps indicator */}
        <div className="flex items-center gap-3 mb-10 font-body text-sm">
          <div className={cn("flex items-center gap-2 px-4 py-2 rounded-full transition-colors", step === "details" ? "bg-primary text-white" : "bg-white text-primary border border-primary")}>
            <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">1</span>
            Dane
          </div>
          <ChevronRight className="w-4 h-4 text-gray-300" />
          <div className={cn("flex items-center gap-2 px-4 py-2 rounded-full transition-colors", step === "confirm" ? "bg-primary text-white" : "bg-white text-gray-400 border border-gray-200")}>
            <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">2</span>
            Potwierdzenie
          </div>
        </div>

        {step === "details" && (
          <div className="bg-white rounded-3xl shadow-sm border border-cream p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Check-in */}
              <div>
                <label className="block font-body text-xs text-gray-500 uppercase tracking-widest mb-2">
                  <CalendarDays className="w-3.5 h-3.5 inline mr-1" />
                  Data przyjazdu *
                </label>
                <input
                  type="date"
                  value={form.checkIn}
                  min={getTodayStr()}
                  onChange={(e) => update("checkIn", e.target.value)}
                  className="w-full border border-cream rounded-xl px-4 py-3 font-body text-sm text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition bg-cream/50"
                />
              </div>

              {/* Check-out */}
              <div>
                <label className="block font-body text-xs text-gray-500 uppercase tracking-widest mb-2">
                  <CalendarDays className="w-3.5 h-3.5 inline mr-1" />
                  Data wyjazdu *
                </label>
                <input
                  type="date"
                  value={form.checkOut}
                  min={form.checkIn || getTomorrowStr()}
                  onChange={(e) => update("checkOut", e.target.value)}
                  className="w-full border border-cream rounded-xl px-4 py-3 font-body text-sm text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition bg-cream/50"
                />
              </div>

              {/* Room */}
              <div className="md:col-span-2">
                <label className="block font-body text-xs text-gray-500 uppercase tracking-widest mb-2">
                  <Bed className="w-3.5 h-3.5 inline mr-1" />
                  Apartament *
                </label>
                <select
                  value={form.roomSlug}
                  onChange={(e) => update("roomSlug", e.target.value)}
                  className="w-full border border-cream rounded-xl px-4 py-3 font-body text-sm text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition bg-cream/50"
                >
                  {rooms.map((r) => (
                    <option key={r.slug} value={r.slug}>
                      {r.name} — do {r.maxGuests} osób, {r.size} m²
                    </option>
                  ))}
                </select>
              </div>

              {/* Guests */}
              <div>
                <label className="block font-body text-xs text-gray-500 uppercase tracking-widest mb-2">
                  <Users className="w-3.5 h-3.5 inline mr-1" />
                  Liczba gości *
                </label>
                <select
                  value={form.guests}
                  onChange={(e) => update("guests", Number(e.target.value))}
                  className="w-full border border-cream rounded-xl px-4 py-3 font-body text-sm text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition bg-cream/50"
                >
                  {Array.from({ length: selectedRoom.maxGuests }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? "osoba" : n < 5 ? "osoby" : "osób"}</option>
                  ))}
                </select>
              </div>

              {/* First name */}
              <div>
                <label className="block font-body text-xs text-gray-500 uppercase tracking-widest mb-2">
                  <User className="w-3.5 h-3.5 inline mr-1" />
                  Imię *
                </label>
                <input
                  type="text"
                  value={form.firstName}
                  onChange={(e) => update("firstName", e.target.value)}
                  placeholder="Jan"
                  className="w-full border border-cream rounded-xl px-4 py-3 font-body text-sm text-primary-dark placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition bg-cream/50"
                />
              </div>

              {/* Last name */}
              <div>
                <label className="block font-body text-xs text-gray-500 uppercase tracking-widest mb-2">
                  <User className="w-3.5 h-3.5 inline mr-1" />
                  Nazwisko *
                </label>
                <input
                  type="text"
                  value={form.lastName}
                  onChange={(e) => update("lastName", e.target.value)}
                  placeholder="Kowalski"
                  className="w-full border border-cream rounded-xl px-4 py-3 font-body text-sm text-primary-dark placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition bg-cream/50"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-body text-xs text-gray-500 uppercase tracking-widest mb-2">
                  <Mail className="w-3.5 h-3.5 inline mr-1" />
                  E-mail *
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="jan@example.com"
                  className="w-full border border-cream rounded-xl px-4 py-3 font-body text-sm text-primary-dark placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition bg-cream/50"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block font-body text-xs text-gray-500 uppercase tracking-widest mb-2">
                  <Phone className="w-3.5 h-3.5 inline mr-1" />
                  Telefon
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="+48 600 000 000"
                  className="w-full border border-cream rounded-xl px-4 py-3 font-body text-sm text-primary-dark placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition bg-cream/50"
                />
              </div>

              {/* Notes */}
              <div className="md:col-span-2">
                <label className="block font-body text-xs text-gray-500 uppercase tracking-widest mb-2">
                  <StickyNote className="w-3.5 h-3.5 inline mr-1" />
                  Uwagi (opcjonalnie)
                </label>
                <textarea
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  rows={3}
                  placeholder="Specjalne życzenia, alergie, godzina przyjazdu..."
                  className="w-full border border-cream rounded-xl px-4 py-3 font-body text-sm text-primary-dark placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition bg-cream/50 resize-none"
                />
              </div>
            </div>

            {/* Payment info */}
            <div className="mt-6 flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-5 py-4">
              <Banknote className="w-5 h-5 text-green-700 shrink-0" />
              <p className="font-body text-sm text-green-800">
                <span className="font-semibold">Płatność gotówką</span> — zapłacisz przy zameldowaniu w dworku. Żadnych przedpłat online.
              </p>
            </div>

            {error && (
              <p className="mt-4 text-sm font-body text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                {error}
              </p>
            )}

            <div className="mt-8 flex justify-end">
              <button
                onClick={() => {
                  const err = validate();
                  if (err) { setError(err); return; }
                  setError(null);
                  setStep("confirm");
                }}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-body font-semibold px-8 py-3.5 rounded-xl transition-colors"
              >
                Dalej — sprawdź dane
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {step === "confirm" && (
          <div className="bg-white rounded-3xl shadow-sm border border-cream p-8 md:p-10">
            <h2 className="font-heading text-2xl text-primary-dark mb-6">Sprawdź dane rezerwacji</h2>

            <div className="bg-cream rounded-2xl p-6 mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-body text-sm">
                {[
                  { label: "Apartament", value: selectedRoom.name },
                  { label: "Liczba nocy", value: `${nights} ${nights === 1 ? "noc" : nights < 5 ? "noce" : "nocy"}` },
                  { label: "Check-in", value: formatDatePL(form.checkIn) },
                  { label: "Check-out", value: formatDatePL(form.checkOut) },
                  { label: "Goście", value: `${form.guests} os.` },
                  { label: "Gość", value: `${form.firstName} ${form.lastName}` },
                  { label: "E-mail", value: form.email },
                  { label: "Telefon", value: form.phone || "—" },
                ].map((row) => (
                  <div key={row.label}>
                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-0.5">{row.label}</p>
                    <p className="text-primary-dark font-medium">{row.value}</p>
                  </div>
                ))}
              </div>
              {form.notes && (
                <div className="mt-4 pt-4 border-t border-cream/70">
                  <p className="text-gray-400 text-xs uppercase tracking-widest mb-0.5">Uwagi</p>
                  <p className="font-body text-sm text-primary-dark">{form.notes}</p>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-5 py-4 mb-8">
              <Banknote className="w-5 h-5 text-green-700 shrink-0" />
              <p className="font-body text-sm text-green-800">
                <span className="font-semibold">Gotówka w dworku</span> — płatność przy zameldowaniu. Na Twój e-mail wyślemy potwierdzenie.
              </p>
            </div>

            {error && (
              <p className="mb-4 text-sm font-body text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                {error}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-between">
              <button
                onClick={() => setStep("details")}
                className="inline-flex items-center gap-2 border border-gray-200 text-gray-600 hover:border-primary hover:text-primary font-body font-medium px-6 py-3 rounded-xl transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Wróć i edytuj
              </button>
              <button
                onClick={submit}
                disabled={loading}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark disabled:opacity-60 text-white font-body font-semibold px-8 py-3.5 rounded-xl transition-colors"
              >
                {loading ? "Wysyłanie..." : "Potwierdź rezerwację"}
                {!loading && <CheckCircle2 className="w-4 h-4" />}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
