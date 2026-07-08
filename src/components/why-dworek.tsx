import { Home, Users, ChefHat, BedDouble, Award } from "lucide-react";

const reasons = [
  { icon: Home, label: "Kameralna przestrzeń" },
  { icon: Users, label: "Klimatyczna Stajenka i teren zielony" },
  { icon: Award, label: "Profesjonalna obsługa" },
  { icon: ChefHat, label: "Doskonała kuchnia" },
  { icon: BedDouble, label: "Noclegi na miejscu" },
  { icon: Award, label: "Ponad 18 lat doświadczenia" },
];

export function WhyDworek() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">
            Dlaczego my
          </p>
          <h2 className="font-heading text-2xl md:text-3xl text-primary-dark">
            Dlaczego Dworek Biesiadny
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {reasons.map((reason) => (
            <div
              key={reason.label}
              className="bg-white rounded-xl p-5 text-center flex flex-col items-center gap-3 shadow-sm"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <reason.icon className="w-5 h-5" />
              </div>
              <p className="font-body text-xs text-gray-600 leading-snug">{reason.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
