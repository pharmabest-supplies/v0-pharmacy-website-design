import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#f0f7ff] to-[#e0f2fe] overflow-hidden pt-12 lg:pt-20 pb-20 lg:pb-32">
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-200/20 blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] rounded-full bg-indigo-200/20 blur-3xl" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[13px] font-bold mb-6">
              <CheckCircle2 className="w-4 h-4" />
              Trusted by 100+ Ontario Pharmacies
            </div>

            <h1 className="mb-6">
              Your Partner for{" "}
              <span className="text-blue-600">Pharmacy Supplies</span>
            </h1>

            <p className="text-slate-600 text-lg lg:text-xl leading-relaxed max-w-[540px] mb-10">
              Premium quality thermal labels, receipt rolls, printers, and accessories.
              Lowest prices, fast Ontario-wide delivery, and dedicated support for every pharmacy.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a href="#products" className="btn-brand group">
                Shop Our Products
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              <a href="#custom" className="btn-outline">
                Get a Custom Quote
              </a>
              <a href="tel:+16474292677" className="btn-outline">
                Call to Order: (647) 429-2677
              </a>
            </div>

            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-blue-200/50 max-w-[500px]">
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-slate-900">100+</span>
                <span className="text-[13px] font-semibold text-slate-500 uppercase tracking-wider mt-1">Ontario Pharmacies</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-slate-900">24h</span>
                <span className="text-[13px] font-semibold text-slate-500 uppercase tracking-wider mt-1">Ships Within</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-slate-900">20%</span>
                <span className="text-[13px] font-semibold text-slate-500 uppercase tracking-wider mt-1">More Per Box</span>
              </div>
            </div>
          </div>

          {/* Right: product collage */}
          <div className="relative">
            <div className="relative h-[450px] lg:h-[550px] flex items-center justify-center">
              {/* Main circle background */}
              <div className="absolute w-[80%] aspect-square rounded-full bg-white/40 shadow-inner" />
              
              {/* Images */}
              <div className="absolute top-[5%] left-[5%] w-[55%] aspect-square rounded-3xl overflow-hidden bg-white shadow-2xl shadow-blue-900/10 -rotate-3 transition-transform hover:rotate-0 duration-500 z-20 border border-white/50">
                <Image
                  src="/product-thermal-printer.jpg"
                  alt="Thermal printer"
                  fill
                  className="object-cover p-2 rounded-3xl"
                  sizes="400px"
                />
              </div>

              <div className="absolute bottom-[5%] right-[5%] w-[50%] aspect-square rounded-3xl overflow-hidden bg-white shadow-2xl shadow-blue-900/10 rotate-6 transition-transform hover:rotate-0 duration-500 z-10 border border-white/50">
                <Image
                 src="/product-plain-thermal-labels.jpg"
                  alt="Thermal labels"
                  fill
                  className="object-cover p-2 rounded-3xl"
                  sizes="350px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
