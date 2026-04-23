"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navItems } from "@/lib/site-content";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-500 ${
        isScrolled
          ? "border-black/5 bg-white/85 shadow-sm backdrop-blur-2xl"
          : "border-transparent bg-white/70 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex w-[95vw] items-center justify-between gap-6 py-5">
        <Link href="/" className="shrink-0 leading-none">
          <span className="flex flex-col">
            <span className="text-2xl font-black uppercase tracking-tighter text-navy md:text-3xl">
              BSL TRADING
            </span>
            <span className="mt-1 text-[11px] font-black uppercase tracking-normal text-primary">
              Stavebná spoločnosť
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative text-[11px] font-black uppercase tracking-normal transition-colors ${
                isActive(pathname, item.href) ? "text-primary" : "text-navy hover:text-primary"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  isActive(pathname, item.href) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center lg:flex">
          <Link
            href="/kontakt"
            className="bg-navy px-6 py-3 text-[11px] font-black uppercase tracking-normal text-white transition-colors hover:bg-primary"
          >
            Kontakt
          </Link>
        </div>

        <button
          type="button"
          className="flex flex-col gap-1.5 p-2 lg:hidden"
          aria-label="Otvoriť menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="h-0.5 w-7 bg-navy" />
          <span className="h-0.5 w-7 bg-navy" />
        </button>
      </div>

      <div
        className={`border-t border-black/5 bg-white px-[2.5vw] transition-all duration-500 lg:hidden ${
          isOpen ? "max-h-[32rem] py-6" : "max-h-0 overflow-hidden py-0"
        }`}
      >
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative w-fit text-sm font-black uppercase tracking-normal ${
                isActive(pathname, item.href) ? "text-primary" : "text-navy"
              }`}
            >
              {item.label}
              {isActive(pathname, item.href) && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary" />
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
