import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const price =
    typeof product.price === "number"
      ? new Intl.NumberFormat("is-IS", { style: "currency", currency: "ISK", maximumFractionDigits: 0 }).format(product.price)
      : product.priceNote ?? "";

  return (
    <Link href={`/products/${product.slug}`} className="group block overflow-hidden rounded-2xl border shadow-sm transition hover:shadow-md">
      {/* ✅ Consistent 4:3 card image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-100">
        <Image
          src={product.thumbnail}
          alt={product.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="line-clamp-1 text-lg font-semibold">{product.name}</h3>
        <p className="mt-1 text-sm text-black/70 line-clamp-2">{product.short}</p>
        {price && <div className="mt-3 text-sm font-medium">{price}</div>}
      </div>
    </Link>
  );
}
