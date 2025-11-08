import { notFound } from "next/navigation";
import { getProduct } from "@/data/products";
import ProductGallery from "@/components/ProductGallery";


export async function generateStaticParams() {
const { products } = await import("@/data/products");
return products.map((p) => ({ slug: p.slug }));
}


export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = getProduct(slug);
if (!product) return notFound();


const price =
typeof product.price === "number"
? new Intl.NumberFormat("is-IS", { style: "currency", currency: "ISK", maximumFractionDigits: 0 }).format(product.price)
: product.priceNote ?? "";


return (
<article className="mt-10 grid gap-8 lg:grid-cols-2">
<ProductGallery images={product.images} />
<div>
<h1 className="text-3xl font-bold">{product.name}</h1>
{price && <div className="mt-2 text-lg font-semibold">{price}</div>}
<p className="mt-4 text-black/70">{product.short}</p>


<h2 className="mt-8 text-lg font-semibold">Helstu upplýsingar</h2>
<dl className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
{product.specs.map((s) => (
<div key={s.label} className="rounded border p-3">
<dt className="text-xs uppercase tracking-wide text-black/60">{s.label}</dt>
<dd className="text-sm">{s.value}</dd>
</div>
))}
</dl>


<div className="mt-8 flex gap-3">
<a href="mailto:info@mybusiness.com" className="rounded-full bg-black px-5 py-3 text-white">Hafa samband</a>
<a href="tel:+3541234567" className="rounded-full border px-5 py-3">Hringja</a>
</div>
</div>
</article>
);
}