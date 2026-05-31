"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X, Cookie, ShieldCheck, BarChart3 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "cookie-consent";

type ConsentState = {
  necessary: true;
  analytics: boolean;
};

function getStored(): ConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveConsent(analytics: boolean) {
  const state: ConsentState = { necessary: true, analytics };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  return state;
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analyticsChecked, setAnalyticsChecked] = useState(false);

  useEffect(() => {
    if (!getStored()) setVisible(true);

    const handler = () => {
      setShowDetails(true);
      setVisible(true);
    };
    window.addEventListener("open-cookie-settings", handler);
    return () => window.removeEventListener("open-cookie-settings", handler);
  }, []);

  const acceptAll = () => {
    saveConsent(true);
    setVisible(false);
  };

  const acceptNecessary = () => {
    saveConsent(false);
    setVisible(false);
  };

  const saveCustom = () => {
    saveConsent(analyticsChecked);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-2xl mx-auto bg-primary-dark text-white rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
        {!showDetails ? (
          <div className="p-6">
            <div className="flex items-start gap-4 mb-5">
              <Cookie className="w-6 h-6 text-accent shrink-0 mt-0.5" />
              <div>
                <h2 className="font-heading text-lg font-bold mb-1">
                  Używamy plików cookies
                </h2>
                <p className="font-body text-sm text-white/75 leading-relaxed">
                  Stosujemy niezbędne pliki cookies do działania strony. Opcjonalnie —
                  analityczne, które pomagają nam rozumieć jak korzystasz ze strony.{" "}
                  <Link
                    href="/polityka-prywatnosci"
                    className="text-accent underline hover:text-accent-light"
                  >
                    Polityka prywatności
                  </Link>
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={acceptAll}
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "bg-accent hover:bg-accent-light text-white font-body font-medium flex-1"
                )}
              >
                Akceptuj wszystkie
              </button>
              <button
                onClick={acceptNecessary}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "border-white/30 text-white hover:bg-white/10 font-body flex-1"
                )}
              >
                Tylko niezbędne
              </button>
              <button
                onClick={() => setShowDetails(true)}
                className="font-body text-sm text-white/50 hover:text-white transition-colors underline underline-offset-4 text-center"
              >
                Ustawienia
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-heading text-lg font-bold">Ustawienia cookies</h2>
              <button
                onClick={() => { setShowDetails(false); if (!getStored()) setVisible(true); else setVisible(false); }}
                className="text-white/50 hover:text-white transition-colors"
                aria-label="Zamknij"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start justify-between gap-4 bg-white/5 rounded-xl p-4">
                <div className="flex gap-3">
                  <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body text-sm font-medium">Niezbędne</p>
                    <p className="font-body text-xs text-white/60 leading-relaxed mt-0.5">
                      Wymagane do działania strony. Nie można ich wyłączyć.
                    </p>
                  </div>
                </div>
                <div className="shrink-0">
                  <span className="font-body text-xs text-accent">Zawsze włączone</span>
                </div>
              </div>

              <div className="flex items-start justify-between gap-4 bg-white/5 rounded-xl p-4">
                <div className="flex gap-3">
                  <BarChart3 className="w-5 h-5 text-white/50 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body text-sm font-medium">Analityczne</p>
                    <p className="font-body text-xs text-white/60 leading-relaxed mt-0.5">
                      Pomagają nam rozumieć jak goście korzystają ze strony (Google Analytics).
                      Nie zbierają danych osobowych.
                    </p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0">
                  <input
                    type="checkbox"
                    checked={analyticsChecked}
                    onChange={(e) => setAnalyticsChecked(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-10 h-5 bg-white/20 peer-checked:bg-accent rounded-full transition-colors after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-5" />
                </label>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={saveCustom}
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "bg-accent hover:bg-accent-light text-white font-body font-medium flex-1"
                )}
              >
                Zapisz ustawienia
              </button>
              <button
                onClick={acceptAll}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "border-white/30 text-white hover:bg-white/10 font-body flex-1"
                )}
              >
                Akceptuj wszystkie
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
