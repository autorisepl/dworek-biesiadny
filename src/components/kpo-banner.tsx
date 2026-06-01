import Link from "next/link";
import Image from "next/image";

export function KpoBanner() {
  return (
    <div className="w-full bg-white border-b border-gray-200">
      <Link
        href="/dotacja-kpo"
        className="flex items-center justify-center py-2 px-4 hover:bg-gray-50 transition-colors duration-200"
        title="Projekt współfinansowany z Krajowego Planu Odbudowy i Zwiększania Odporności"
      >
        <Image
          src="/KPO_banner.png"
          alt="Projekt współfinansowany z Krajowego Planu Odbudowy i Zwiększania Odporności — NextGenerationEU"
          width={550}
          height={70}
          className="w-auto object-contain"
          style={{ height: "70px" }}
          priority
          unoptimized
        />
      </Link>
    </div>
  );
}
