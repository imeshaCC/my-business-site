import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
title: {
default: "Rippa Mini Excavators in Iceland",
template: "%s — Rippa Ísland",
},
description:
"Rippa mini excavators for sale in Iceland. Browse models, view specs, and contact us for a viewing.",
openGraph: {
title: "Rippa Mini Excavators in Iceland",
description:
"Rippa mini excavators for sale in Iceland. Browse models, view specs, and contact us for a viewing.",
type: "website",
locale: "is_IS",
},
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="is">
<body className="min-h-dvh bg-white text-black antialiased">
<Header />
<main className="mx-auto max-w-6xl px-4">{children}</main>
<Footer />
</body>
</html>
);
}