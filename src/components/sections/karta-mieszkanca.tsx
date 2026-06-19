"use client";

import { MotionDiv } from "@/components/motion";
import { BadgeCheck, Percent } from "lucide-react";

export function KartaMieszkanBanner() {
  return (
    <section className="py-10 px-4 md:px-8 bg-warm-white">
      <div className="max-w-7xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6 rounded-2xl border-2 border-[#1a6b3a]/20 bg-gradient-to-r from-[#1a6b3a]/5 via-white to-[#1a6b3a]/5 px-8 py-6 shadow-sm">
            {/* Badge icon */}
            <div className="flex items-center gap-4 shrink-0">
              <div className="w-16 h-16 rounded-full bg-[#1a6b3a] flex items-center justify-center shadow-md">
                <BadgeCheck className="w-9 h-9 text-white" />
              </div>
              <div>
                <p className="font-body text-xs text-gray-400 uppercase tracking-widest mb-0.5">Dla mieszkańców</p>
                <p className="font-heading text-xl font-bold text-[#1a6b3a] leading-tight">Karta Mieszkańca<br />Mosiny</p>
              </div>
            </div>

            <div className="hidden md:block w-px h-12 bg-[#1a6b3a]/15" />

            <div className="flex-1 text-center md:text-left">
              <h3 className="font-heading text-lg md:text-xl text-primary-dark font-bold mb-1">
                Akceptujemy Kartę Mieszkańca Mosiny
              </h3>
              <p className="font-body text-sm text-gray-600 leading-relaxed">
                Jesteś mieszkańcem gminy Mosina? Pokaż Kartę Mieszkańca i skorzystaj z
                przysługujących Ci zniżek na noclegi, restaurację i strefę relaksu w Dworku Biesiadnym.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-[#1a6b3a] text-white rounded-xl px-5 py-3 shrink-0">
              <Percent className="w-5 h-5" />
              <div className="text-center">
                <p className="font-heading text-xl font-bold leading-none">Zniżki</p>
                <p className="font-body text-xs leading-none mt-0.5 text-white/80">dla posiadaczy</p>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
