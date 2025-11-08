"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  // local state for the small dropdown menu
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  // Close on outside click or ESC
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!open) return;
      const t = e.target as Node;
      if (menuRef.current && !menuRef.current.contains(t) && btnRef.current && !btnRef.current.contains(t)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Row: logo → hamburger → about → contact  */}
        <div className="flex h-14 md:h-16 items-center gap-3 md:gap-6">
          {/* 1) Logo (left) */}
          <Link href="/" aria-label="Home" className="inline-flex items-center">
            {/* Width/height satisfy Next/Image; CSS below scales proportionally */}
            <Image
              src="/logo.png"
              alt="Rippa logo"
              width={140}
              height={32}
              className="h-6 w-auto md:h-7 lg:h-8 object-contain"
              priority
            />
          </Link>

          {/* 2) Hamburger with 2 options (Mini Excavators, Skid Steer) */}
          <div className="relative">
            <button
              ref={btnRef}
              aria-haspopup="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center rounded-md px-3 py-2 text-xl md:text-xl font-medium hover:bg-blue-50"
            >
              <span aria-hidden>☰</span>
              <span className="sr-only">Browse categories</span>
            </button>

            {open && (
              <div
                ref={menuRef}
                role="menu"
                className="absolute left-0 mt-2 min-w-48 rounded-xl border bg-white p-2 text-sm md:text-base shadow-lg"
              >
                <Link
                  role="menuitem"
                  href="/products?cat=mini-excavators"
                  className="block rounded-md px-3 py-2 hover:bg-blue-50"
                  onClick={() => setOpen(false)}
                >
                  Mini Excavators
                </Link>
                <Link
                  role="menuitem"
                  href="/products?cat=skid-steer"
                  className="mt-1 block rounded-md px-3 py-2 hover:bg-blue-50"
                  onClick={() => setOpen(false)}
                >
                  Skid Steer
                </Link>
              </div>
            )}
          </div>

          {/* 3) About us & Contact us (text links) */}
          <nav className="flex items-center gap-3 md:gap-4 text-sm md:text-base">
            <Link href="/about" className="font-medium hover:text-blue-700">
              About us
            </Link>
            <Link
              href="/contact"
              className="font-medium hover:text-blue-700"
            >
              Contact us
            </Link>
          </nav>

          {/* Spacer pushes anything added later to the far right (optional) */}
          <div className="flex-1" />
        </div>
      </div>
    </header>
  );
}
