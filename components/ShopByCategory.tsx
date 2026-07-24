import Image from "next/image";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Thermal Labels",
    description: "High-adhesion labels for prescription bottles and general pharmacy use.",
    image: "/product-plain-thermal-labels.jpg",
    bg: "bg-blue-50",
    hoverBg: "hover:bg-blue-100/80",
    href: "#products",
    accent: "text-blue-600",
  },
  {
    title: "Thermal Receipts",
    description: "Crystal-clear receipt rolls for long-lasting transaction records.",
    image: "/product-plain-thermal-receipts.jpg",
    bg: "bg-indigo-50",
    hoverBg: "hover:bg-indigo-100/80",
    href: "#products",
    accent: "text-indigo-600",
  },
  {
    title: "Custom Printing",
    description: "Branded labels and receipts with your pharmacy's logo and contact info.",
    image: "/product-plain-thermal-labels.jpg",
    bg: "bg-sky-50",
    hoverBg: "hover:bg-sky-100/80",
    href: "#products",
    accent: "text-sky-600",
  },
  {
    title: "Printers & Accessories",
    description: "Fast, reliable thermal printers built for high-volume pharmacy workflows.",
    image: "/product-thermal-printer.jpg",
    bg: "bg-slate-50",
    hoverBg: "hover:bg-slate-100/80",
    href: "#products",
    accent: "text-slate-600",
  },
];

export default function ShopByCategory() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <div className="section-label mb-4 justify-center">Browse Categories</div>
          <h2 className="text-slate-900">Everything your pharmacy needs</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <a
              key={cat.title}
              href={cat.href}
              className={`group relative rounded-[32px] overflow-hidden p-8 lg:p-12 flex flex-col sm:flex-row items-center gap-8 min-h-[280px] transition-all duration-500 ${cat.bg} ${cat.hoverBg} border border-transparent hover:border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/50`}
            >
              <div className="relative z-10 flex-1">
                <h3 className={`text-2xl lg:text-3xl font-black leading-tight mb-3 text-slate-900 group-hover:scale-[1.02] transition-transform origin-left`}>
                  {cat.title}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed mb-6 max-w-[280px]">
                  {cat.description}
                </p>
                <span className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider text-slate-900 group-hover:gap-3 transition-all">
                  Shop Category
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>

              <div className="relative w-[200px] lg:w-[260px] aspect-square flex-shrink-0">
                <div className="absolute inset-0 bg-white/40 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700" />
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-contain relative z-10 drop-shadow-2xl group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-700"
                  sizes="260px"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
