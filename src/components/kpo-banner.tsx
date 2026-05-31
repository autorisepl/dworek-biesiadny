import Link from "next/link";

export function KpoBanner() {
  return (
    <div className="sticky top-0 z-50 bg-primary-dark text-white text-xs py-1.5 text-center">
      <Link
        href="/dotacja-kpo"
        className="hover:underline flex items-center justify-center gap-2"
      >
        <span>🇪🇺</span>
        <span>Projekt współfinansowany z Krajowego Planu Odbudowy i Zwiększania Odporności</span>
        <span className="underline font-medium">Dowiedz się więcej</span>
      </Link>
    </div>
  );
}
