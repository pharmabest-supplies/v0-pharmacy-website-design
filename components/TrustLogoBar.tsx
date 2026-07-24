import Image from "next/image";
const logos = [
  { src: "/logo-pharmasave.png", alt: "Pharmasave" },
];
export default function TrustLogoBar() {
  const items = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <section className="bg-white py-12 lg:py-16 border-b border-slate-50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <p className="text-center text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-10">
          Preferred supplier for leading banners
        </p>
      </div>

      <div className="overflow-hidden relative">
        {/* Fades */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        
        <div className="marquee-track marquee-slow items-center">
          {items.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-12 lg:px-20 shrink-0"
            >
              <div className="relative h-12 lg:h-14 w-[160px] opacity-40 hover:opacity-100 transition-all duration-500 grayscale hover:grayscale-0 scale-90 hover:scale-105">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="160px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
