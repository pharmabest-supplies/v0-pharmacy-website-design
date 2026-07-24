import Image from "next/image";
import { Star, ShoppingCart } from "lucide-react";
import { fetchShopifyProducts, formatPrice, productUrl } from "@/lib/shopify";

function stripHtml(html: string) {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function shortDescription(html: string, max = 120) {
  const text = stripHtml(html);
  return text.length > max ? text.slice(0, max).trimEnd() + "…" : text;
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i < count ? "fill-current" : "text-slate-200"}`}
        />
      ))}
    </div>
  );
}

export default async function FeaturedProducts() {
  const products = await fetchShopifyProducts();

  const cards = products.map((product) => {
    const variant = product.variants[0];
    return {
      handle: product.handle,
      title: product.title,
      description: shortDescription(product.body_html),
      image: product.images[0]?.src,
      price: variant ? formatPrice(variant.price) : "—",
      oldPrice: variant?.compare_at_price ? formatPrice(variant.compare_at_price) : null,
      url: productUrl(product.handle),
    };
  });

  return (
    <section id="products" className="bg-slate-50 py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="section-label mb-4">Essential Supplies</div>
            <h2 className="mb-4 text-slate-900">Premium quality for every pharmacy</h2>
            <p className="text-slate-600 text-lg">
              We provide the most trusted thermal labels and receipt rolls for Pharmasave
   and independent pharmacy locations across Ontario.
            </p>
          </div>
          <div className="hidden md:block">
            <a href="#custom" className="btn-outline">
              Custom Orders
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {cards.map((product) => (
            <article
              key={product.handle}
              className="card-modern group p-4 flex flex-col"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-100 mb-4">
                {product.image && (
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 33vw, 50vw"
                  />
                )}
              </div>

              <div className="flex items-center gap-2 mb-2">
                <Stars count={5} />
              </div>

              <h3 className="text-base font-extrabold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                {product.title}
              </h3>
              <p className="text-[13px] text-slate-500 leading-relaxed mb-4 line-clamp-2">
                {product.description}
              </p>

              <div className="mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-black text-slate-900">
                        {product.price}
                      </span>
                      {product.oldPrice && (
                        <span className="text-xs text-red-500 line-through font-bold">
                          {product.oldPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-primary !py-2.5 !text-[13px] group/btn"
                >
                  Order Now
                  <ShoppingCart className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="md:hidden flex justify-center mt-12">
          <a href="#custom" className="btn-outline w-full">
            Custom Orders
          </a>
        </div>
      </div>
    </section>
  );
}
