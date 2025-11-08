import Link from "next/link";


export default function Footer() {
return (
<footer className="mt-16 border-t">
<div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-3">
<div>
<div className="text-lg font-semibold">Rippa Ísland</div>
<p className="mt-2 text-sm text-black/70">
Sala á Rippa minigröfum og verkfærum. Traust þjónusta & ráðgjöf.
</p>
</div>
<div>
<div className="text-sm font-medium uppercase tracking-wide text-black/60">Tenglar</div>
<ul className="mt-3 space-y-2 text-sm">
<li><Link href="/products" className="hover:underline">Products</Link></li>
<li><Link href="/about" className="hover:underline">About</Link></li>
</ul>
</div>
<div>
<div className="text-sm font-medium uppercase tracking-wide text-black/60">Hafa samband</div>
<ul className="mt-3 space-y-1 text-sm">
<li>Email: <a href="mailto:info@mybusiness.com" className="underline">info@mybusiness.com</a></li>
<li>Sími: <a href="tel:+3541234567" className="underline">+354 123 4567</a></li>
<li>Staðsetning: Reykjavík, Ísland</li>
</ul>
</div>
</div>
<div className="border-t py-4 text-center text-xs text-black/60">© {new Date().getFullYear()} Rippa Ísland — All rights reserved.</div>
</footer>
);
}