"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Search, X } from "lucide-react";
import { catalogCategories, catalogProducts, categoryLabels, productKey, type CatalogProduct } from "@/lib/catalog";
import { categoryMeta } from "@/lib/category-meta";

/** Lowercase and drop the invisible word-joiners used to control Thai line breaks, so they never block a match. */
function normalize(text: string) {
  return text.replace(/⁠/g, "").toLowerCase();
}

const searchIndex = catalogProducts.map((product) => ({
  product,
  text: normalize([product.id, product.name, product.description, product.category, categoryLabels[product.category]].filter(Boolean).join(" ")),
}));

export function ProductCatalog() {
  const [query, setQuery] = useState("");
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  const results = terms.length ? searchIndex.filter((entry) => terms.every((term) => entry.text.includes(term))).map((entry) => entry.product) : [];

  return (
    <section className="mx-auto max-w-7xl px-8 max-md:px-5">
      <div className="mb-12 max-md:mb-8">
        <label className="sr-only" htmlFor="product-search">
          ค้นหาสินค้า
        </label>
        <div className="relative">
          <Search className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input
            autoComplete="off"
            className="w-full rounded-xl border border-slate-200 bg-white py-4 pl-14 pr-12 text-lg shadow-sm transition-all placeholder:text-slate-400 focus:border-[#005ea3] focus:outline-none focus:ring-2 focus:ring-[#005ea3]/30 max-md:text-base"
            id="product-search"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="ค้นหาสินค้า เช่น มอเตอร์, จาระบี, RO, SC-1008"
            type="search"
            value={query}
          />
          {query && (
            <button
              aria-label="ล้างคำค้นหา"
              className="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              onClick={() => setQuery("")}
              type="button"
            >
              <X size={18} />
            </button>
          )}
        </div>
        {terms.length > 0 && (
          <p className="mt-3 text-sm text-slate-500" role="status">
            {results.length > 0 ? `พบ ${results.length} รายการ สำหรับ "${query.trim()}"` : `ไม่พบสินค้าที่ตรงกับ "${query.trim()}"`}
          </p>
        )}
      </div>

      {terms.length > 0 ? (
        results.length > 0 ? (
          <ProductGrid products={results} />
        ) : (
          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center max-md:p-6">
            <p className="text-lg font-bold text-slate-900">ไม่เจอสินค้าที่ต้องการ?</p>
            <p className="mt-2 text-slate-600">ลองค้นด้วยคำอื่น หรือส่งชื่อรุ่น รูปสินค้า หรือสเปกมาให้ทีมงานช่วยจัดหาได้</p>
            <Link className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#005ea3] px-5 py-3 font-bold text-white hover:bg-[#0077cc]" href="/quote">
              ส่งคำขอจัดหา <ArrowRight size={18} />
            </Link>
          </div>
        )
      ) : (
        <div className="space-y-16 max-md:space-y-12">
          {catalogCategories.map((category) => {
            const Icon = categoryMeta[category].icon;
            const image = categoryMeta[category].image;
            const products = catalogProducts.filter((product) => product.category === category);
            return (
              <section id={category} key={category} className="scroll-mt-28">
                <div className="mb-8 grid overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 md:grid-cols-[1fr_minmax(0,44%)]">
                  <div className="flex flex-col justify-center p-8 max-md:order-2 max-md:p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#005ea3] text-white">
                        <Icon size={22} />
                      </span>
                      <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#005ea3]">{category}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 max-md:text-2xl md:text-4xl">{categoryLabels[category]}</h2>
                    <p className="mt-3 max-w-xl text-slate-600">{categoryMeta[category].note}</p>
                    <span className="mt-5 self-start rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-600 ring-1 ring-slate-200">{products.length} รายการ</span>
                  </div>
                  <div className={`flex aspect-[16/9] items-center justify-center max-md:order-1 md:aspect-auto md:min-h-64 ${image ? image.className : "bg-[#1b5989]"}`}>
                    {image ? (
                      <img alt={`ตัวอย่างสินค้า${categoryLabels[category]} SaveCost`} className={`h-full max-h-80 w-full object-contain p-4 ${image.imgClassName ?? ""}`} src={image.src} />
                    ) : (
                      <Icon size={96} className="text-white/30" />
                    )}
                  </div>
                </div>
                <ProductGrid products={products} />
              </section>
            );
          })}
        </div>
      )}
    </section>
  );
}

function ProductGrid({ products }: { products: CatalogProduct[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 max-md:gap-3 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <article key={productKey(product)} className="group flex min-h-60 flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#005ea3]/40 hover:shadow-xl max-md:min-h-0 max-md:p-5">
          <div className="mb-5 max-md:mb-3">
            <div className="mb-4 flex items-center justify-between gap-3 max-md:mb-2">
              <div className="text-xs font-bold tracking-[0.2em] text-[#005ea3]">{product.id}</div>
              <span className="max-w-[190px] rounded-full bg-slate-100 max-md:hidden px-3 py-1 text-right text-xs font-bold leading-snug whitespace-nowrap text-slate-500">{categoryLabels[product.category]}</span>
            </div>
            <h3 className="max-w-[22rem] text-xl font-bold leading-snug text-slate-900 group-hover:text-[#005ea3] max-md:text-lg">{product.name}</h3>
          </div>
          <p className="flex-1 leading-7 text-slate-600 max-md:text-[0.95rem]">{product.description}</p>
          <Link className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#005ea3] max-md:mt-3" href={`/quote?product=${encodeURIComponent(productKey(product))}`}>
            ขอราคาสินค้านี้ <ArrowRight size={16} />
          </Link>
        </article>
      ))}
    </div>
  );
}
