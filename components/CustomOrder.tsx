"use client";

import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import { Send, CheckCircle } from "lucide-react";

const productOptions = [
  "Plain Thermal Labels",
  "Plain Thermal Receipts",
  "Custom Thermal Labels",
  "Custom Thermal Receipts",
  "Thermal Printer",
  "Other (Please specify)",
];

export default function CustomOrder() {
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      productType: fd.get("productType"),
      quantity: fd.get("quantity"),
      pharmacyName: fd.get("pharmacyName"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      details: fd.get("details"),
    };

    setSubmitting(true);
    try {
      const res = await fetch("/api/custom-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(await res.text());
      toast.success("Quote request submitted! We'll get back to you within 1 business day.");
      form.reset();
    } catch {
      toast.error("Couldn't submit your request. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="custom"
      className="bg-[#f0f7ff] py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-400/20 blur-[100px] rounded-full -translate-x-1/2" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Info */}
          <div className="relative z-10">
            <div className="section-label mb-6">Custom Orders</div>
            <h2 className="mb-6">
              Tailored solutions for your <span className="text-blue-600">unique pharmacy</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-lg">
              Whether you need unique branding or high-volume wholesale pricing,
              we provide customized quotes designed to scale with your business.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-600/10 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold mb-1">Response within 24 hours</h4>
                  <p className="text-slate-500 text-sm">Our team reviews and responds to all requests within one business day.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-600/10 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold mb-1">Volume-based discounts</h4>
                  <p className="text-slate-500 text-sm">Unlock lower per-unit pricing for high-quantity roll orders.</p>
                </div>
              </div>
            </div>

            {/* Visual product stack */}
            <div className="relative h-[320px] max-w-md hidden sm:block">
              <div className="absolute left-0 bottom-0 w-[220px] aspect-square rounded-[32px] overflow-hidden bg-white shadow-2xl rotate-[-6deg] p-3 border border-slate-100">
                <Image
                  src="/product-custom-thermal-labels.jpg"
                  alt="Custom labels"
                  fill
                  className="object-cover rounded-[24px]"
                  sizes="220px"
                />
              </div>
              <div className="absolute left-[140px] top-0 w-[240px] aspect-square rounded-[32px] overflow-hidden bg-white shadow-2xl rotate-[8deg] p-3 border border-slate-100">
                <Image
                  src="/product-plain-thermal-labels.jpg"
                  alt="Thermal labels"
                  fill
                  className="object-cover rounded-[24px]"
                  sizes="240px"
                />
              </div>
              <div className="absolute right-4 bottom-8 bg-blue-600 text-white rounded-full px-6 py-3 text-[12px] font-black uppercase tracking-widest shadow-xl rotate-[-4deg] z-20 border-4 border-white">
                Branded For You
              </div>
            </div>
          </div>

          {/* Right: Form card */}
          <div className="bg-white rounded-[40px] p-8 lg:p-12 shadow-2xl shadow-blue-900/10 border border-slate-100">
            <h3 className="text-2xl font-black mb-8 text-slate-900">
              Request a Custom Quote
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <Field label="Product Type">
                <select
                  name="productType"
                  required
                  defaultValue=""
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-[15px] font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select a product category...</option>
                  {productOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </Field>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field label="Quantity (Rolls)">
                  <input
                    name="quantity"
                    type="text"
                    required
                    placeholder="e.g. 50"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-[15px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                  />
                </Field>
                <Field label="Pharmacy Name">
                  <input
                    name="pharmacyName"
                    type="text"
                    required
                    placeholder="e.g. Queen St. Pharmacy"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-[15px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field label="Email Address">
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@pharmacy.com"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-[15px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                  />
                </Field>
                <Field label="Phone Number">
                  <input
                    name="phone"
                    type="tel"
                    placeholder="(647) 000-0000"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-[15px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                  />
                </Field>
              </div>

              <Field label="Details & Requirements">
                <textarea
                  name="details"
                  rows={4}
                  placeholder="Tell us about your branding, logo, or special requirements..."
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-[15px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all resize-none"
                />
              </Field>

              <button
                type="submit"
                disabled={submitting}
                className="w-full btn-brand !py-5 !text-base group shadow-xl shadow-blue-600/20 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting..." : "Submit Custom Request"}
                <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              <p className="text-[12px] text-slate-400 text-center font-semibold">
                Most quotes are delivered within 1 business day.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-[11px] font-black uppercase tracking-widest text-slate-600 mb-3 ml-1">
        {label}
      </span>
      {children}
    </label>
  );
}
