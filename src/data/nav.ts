export type NavItem = {
  label: string;
  href?: string;
  columns?: {
    title: string;
    links: { label: string; href: string }[];
  }[];
};

export const NAV: NavItem[] = [
  {
    label: "Mini Excavators",
    columns: [
      {
        title: "By Tonnage",
        links: [
          { label: "0.8 t", href: "/products?ton=0.8" },
          { label: "1.0 t", href: "/products?ton=1.0" },
          { label: "1.2 t", href: "/products?ton=1.2" },
          { label: "1.5 t", href: "/products?ton=1.5" },
          { label: "1.8 t", href: "/products?ton=1.8" },
          { label: "2.0 t", href: "/products?ton=2.0" },
          { label: "2.2 t", href: "/products?ton=2.2" },
          { label: "2.5 t", href: "/products?ton=2.5" },
          { label: "3.0 t", href: "/products?ton=3.0" },
          { label: "3.5 t", href: "/products?ton=3.5" },
          { label: "4.0 t", href: "/products?ton=4.0" },
          { label: "5.0 t", href: "/products?ton=5.0" }
        ],
      },
      {
        title: "Featured Models",
        // R319 is cited by Rippa as most popular. R10/R18/R32 are widely featured across official catalogs.
        links: [
          { label: "R319 (Popular)", href: "/products/rippa-r319" },
          { label: "R10", href: "/products/rippa-r10" },
          { label: "R18", href: "/products/rippa-r18" },
          { label: "R32", href: "/products/rippa-r32" },
        ],
      },
    ],
  },
  { label: "About", href: "/about" },
];