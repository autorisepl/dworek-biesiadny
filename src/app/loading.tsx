export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#1d3a2d]">
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="font-body text-[#c9a84c] text-xs tracking-[0.3em] uppercase">
            Radzewice, Wielkopolska
          </p>
          <h1
            className="text-white text-3xl md:text-4xl font-normal tracking-wide"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Dworek Biesiadny
          </h1>
          <p
            className="text-[#c9a84c] text-lg italic"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            W sercu natury
          </p>
        </div>

        <div className="flex items-center gap-2 mt-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-1.5 h-1.5 rounded-full bg-[#c9a84c]"
              style={{
                animation: "pulse-dot 1.2s ease-in-out infinite",
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 80%, 100% { opacity: 0.2; transform: scale(0.8); }
          40% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
