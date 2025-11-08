"use client";
import Image from "next/image";
import { useState } from "react";


export default function ProductGallery({ images }: { images: string[] }) {
const [active, setActive] = useState(0);
const current = images[active] ?? images[0];
return (
<div>
<div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-100">
<Image src={current} alt="Product image" fill className="object-cover" />
</div>
{images.length > 1 && (
<div className="mt-3 grid grid-cols-5 gap-2">
{images.map((src, i) => (
<button
key={src + i}
onClick={() => setActive(i)}
className={
"relative aspect-[4/3] overflow-hidden rounded border " +
(i === active ? "ring-2 ring-black" : "opacity-80 hover:opacity-100")
}
>
<Image src={src} alt={`thumb-${i}`} fill className="object-cover" />
</button>
))}
</div>
)}
</div>
);
}