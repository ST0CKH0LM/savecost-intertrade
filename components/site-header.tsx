"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { SaveCostLogo } from "@/components/savecost-logo";

const navItems = [
  { href: "/", label: "หน้าหลัก" },
  { href: "/about", label: "เกี่ยวกับเรา" },
  { href: "/products", label: "สินค้า" },
  { href: "/contact", label: "ติดต่อเรา" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200/50 bg-white/70 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:grid md:grid-cols-3 md:px-8 md:py-4">
        <div className="flex min-w-0 justify-start">
          <Link href="/" className="flex items-center" aria-label="SaveCost home">
            <SaveCostLogo className="h-10 sm:h-12 md:h-14" />
          </Link>
        </div>

        <div className="hidden items-center justify-center gap-8 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium tracking-tight transition-all duration-300 ${
                  active
                    ? "border-b-2 border-blue-700 pb-1 text-blue-700"
                    : "text-slate-600 hover:text-blue-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex shrink-0 items-center justify-end gap-4">
          <Link
            href="/quote"
            className="hidden rounded-xl bg-[#005ea3] px-5 py-2.5 text-sm font-medium tracking-tight text-white shadow-md transition-all duration-300 hover:bg-[#0077cc] active:scale-95 active:opacity-80 sm:inline-flex"
          >
            ขอใบเสนอราคา
          </Link>
          <button
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            className="p-2 text-slate-600 md:hidden"
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white px-5 py-4 md:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm font-bold ${
                    active ? "bg-blue-50 text-[#005ea3]" : "text-slate-600"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/quote"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-xl bg-[#005ea3] px-4 py-3 text-center text-sm font-bold text-white"
            >
              ขอใบเสนอราคา
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
