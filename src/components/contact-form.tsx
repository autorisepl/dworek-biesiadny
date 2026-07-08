"use client";

import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Send, Loader2 } from "lucide-react";

const INQUIRY_TYPES = [
  "Rezerwacja noclegu",
  "Organizacja wesela",
  "Organizacja eventu / imprezy",
  "Restauracja",
  "Strefa Wellness",
  "Glamping",
  "Inne",
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  inquiry_type: string;
  message: string;
};

const EMPTY: FormData = {
  name: "",
  email: "",
  phone: "",
  inquiry_type: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [loading, setLoading] = useState(false);

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.inquiry_type || !form.message) {
      toast.error("Wypełnij wszystkie wymagane pola.");
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.from("inquiries").insert([
        {
          name: form.name,
          email: form.email,
          phone: form.phone || null,
          inquiry_type: form.inquiry_type,
          message: form.message,
        },
      ]);
      if (error) throw error;
      toast.success("Wiadomość wysłana! Odpiszemy w ciągu 24 godzin.");
      setForm(EMPTY);
    } catch {
      toast.error("Coś poszło nie tak. Spróbuj ponownie lub napisz bezpośrednio na e-mail.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block font-body text-xs text-gray-500 uppercase tracking-wide mb-1.5">
            Imię i nazwisko <span className="text-accent">*</span>
          </label>
          <Input
            value={form.name}
            onChange={set("name")}
            placeholder="Jan Kowalski"
            required
            className="font-body"
          />
        </div>
        <div>
          <label className="block font-body text-xs text-gray-500 uppercase tracking-wide mb-1.5">
            Adres e-mail <span className="text-accent">*</span>
          </label>
          <Input
            type="email"
            value={form.email}
            onChange={set("email")}
            placeholder="jan@example.com"
            required
            className="font-body"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block font-body text-xs text-gray-500 uppercase tracking-wide mb-1.5">
            Telefon <span className="text-gray-400">(opcjonalnie)</span>
          </label>
          <Input
            type="tel"
            value={form.phone}
            onChange={set("phone")}
            placeholder="+48 600 000 000"
            className="font-body"
          />
        </div>
        <div>
          <label className="block font-body text-xs text-gray-500 uppercase tracking-wide mb-1.5">
            Dotyczy <span className="text-accent">*</span>
          </label>
          <select
            value={form.inquiry_type}
            onChange={set("inquiry_type")}
            required
            className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 font-body text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            <option value="" disabled>Wybierz temat</option>
            {INQUIRY_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block font-body text-xs text-gray-500 uppercase tracking-wide mb-1.5">
          Wiadomość <span className="text-accent">*</span>
        </label>
        <Textarea
          value={form.message}
          onChange={set("message")}
          placeholder="Opisz swoje zapytanie — termin, liczba osób, pytania..."
          required
          rows={5}
          className="font-body resize-none"
        />
      </div>

      <p className="font-body text-xs text-gray-400">
        Pola oznaczone <span className="text-accent">*</span> są wymagane. Odpowiadamy
        w ciągu 24 godzin w dni robocze.
      </p>

      <button
        type="submit"
        disabled={loading}
        className={cn(
          buttonVariants({ variant: "default" }),
          "bg-primary hover:bg-primary-dark text-white font-body font-medium px-8 py-3 flex items-center gap-2 disabled:opacity-60"
        )}
      >
        {loading ? (
          <><Loader2 className="w-4 h-4 animate-spin" /> Wysyłanie...</>
        ) : (
          <><Send className="w-4 h-4" /> Wyślij wiadomość</>
        )}
      </button>
    </form>
  );
}
