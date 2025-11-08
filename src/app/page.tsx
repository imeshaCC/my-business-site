import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function HomePage() {
  return (
    <div className="mt-10 space-y-16">
      {/* Hero */}
      <section className="grid gap-6 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Rippa Mini-gröfur</h1>
          <p className="mt-4 text-lg text-black/70">
            Nýjar og notaðar Rippa gröfur. Hágæða verkfæri, ráðgjöf og þjónusta á Íslandi.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/products" className="rounded-full bg-black px-5 py-3 text-white">Skoða vörur</Link>
            <a href="mailto:info@mybusiness.com" className="rounded-full border px-5 py-3">Hafa samband</a>
          </div>
        </div>

        {/* ✅ Responsive hero (16:9) */}
        <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
          <Image src="/images/hero.webp" alt="Rippa hero" fill className="object-cover" priority />
        </div>
      </section>

      {/* Featured */}
      <section>
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Vinsælar vörur</h2>
          <Link href="/products" className="text-sm underline">Sjá allar</Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* About */}
      <section className="prose max-w-none">
        <h2>Af hverju við?</h2>
        <p>
          Við sérhæfum okkur í Rippa mini-gröfum: áreiðanlegar vélar með frábæru verði. Við aðstoðum við
          val á réttri vél og bjóðum upp á persónulega ráðgjöf.
        </p>
      </section>
    </div>
  );
}
