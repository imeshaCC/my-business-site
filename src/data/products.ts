// src/data/products.ts

export type Spec = { label: string; value: string };

export type Product = {
  slug: string;
  name: string;
  price?: number;        // optional numeric price (ISK)
  priceNote?: string;    // e.g. "Contact for price"
  thumbnail: string;     // /images/...
  images: string[];      // /images/...
  short: string;         // short blurb
  specs: Spec[];
};

export const products: Product[] = [
  {
    slug: "rippa-r319",
    name: "Rippa R319 Mini Excavator (1.0t)",
    priceNote: "Contact for price",
    thumbnail: "/images/default-card.jpg",
    images: ["/images/default-card.jpg"],
    short: "Compact and popular 1-ton excavator — ideal for tight spaces.",
    specs: [
      { label: "Weight", value: "1.0 t" },
      { label: "Emissions", value: "EPA4 / Euro 5" },
      { label: "Dig depth", value: "≈1.5 m" },
    ],
  },
  {
    slug: "rippa-r10",
    name: "Rippa R10 Mini Excavator",
    priceNote: "Contact for price",
    thumbnail: "/images/default-card.jpg",
    images: ["/images/default-card.jpg"],
    short: "Versatile entry-class mini excavator.",
    specs: [
      { label: "Weight", value: "≈1.0 t" },
      { label: "Category", value: "Mini excavator" },
    ],
  },
  {
    slug: "rippa-r18",
    name: "Rippa R18 Mini Excavator (1.8t)",
    priceNote: "Contact for price",
    thumbnail: "/images/default-card.jpg",
    images: ["/images/default-card.jpg"],
    short: "More reach and power for small job sites.",
    specs: [{ label: "Weight", value: "1.8 t" }],
  },
  {
    slug: "rippa-r32",
    name: "Rippa R32 Mini Excavator (3.2t)",
    priceNote: "Contact for price",
    thumbnail: "/images/default-card.jpg",
    images: ["/images/default-card.jpg"],
    short: "Higher lifting capacity for demanding jobs.",
    specs: [{ label: "Weight", value: "≈3.2 t" }],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
