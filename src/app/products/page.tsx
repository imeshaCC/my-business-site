"use client";
import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ProductsPage() {
  const [min, setMin] = useState<number | "">("");
  const [max, setMax] = useState<number | "">("");

  const filtered = useMemo(() => {
    // Currently most items use priceNote. If you later add `price` (number),
    // the filter will apply. For now it just returns all.
    return products.filter((p) => {
      if (typeof p.price !== "number") return true;
      const aboveMin = min === "" || p.price >= min;
      const belowMax = max === "" || p.price <= max;
      return aboveMin && belowMax;
    });
  }, [min, max]);

  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold">Products</h1>

      {/* Price filter */}
      <div className="mt-4 flex flex-wrap items-end gap-3 rounded-xl border p-4">
        <div>
          <label className="block text-xs text-black/60">Min price (ISK)</label>
          <input
            type="number"
            className="mt-1 w-40 rounded border px-3 py-2"
            value={min}
            onChange={(e) => setMin(e.target.value === "" ? "" : Number(e.target.value))}
            placeholder="e.g. 1,000,000"
          />
        </div>
        <div>
          <label className="block text-xs text-black/60">Max price (ISK)</label>
          <input
            type="number"
            className="mt-1 w-40 rounded border px-3 py-2"
            value={max}
            onChange={(e) => setMax(e.target.value === "" ? "" : Number(e.target.value))}
            placeholder="e.g. 5,000,000"
          />
        </div>
        <button
          onClick={() => { setMin(""); setMax(""); }}
          className="rounded bg-blue-600 px-4 py-2 text-white"
        >
          Clear
        </button>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => <ProductCard key={p.slug} product={p} />)}
      </div>
    </div>
  );
}