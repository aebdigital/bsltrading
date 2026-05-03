import Link from "next/link";

import { CookieSettingsButton } from "@/components/cookie-consent";
import { company, contacts, navItems } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#161616] pb-10 pt-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(29,80,162,0.22),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(239,29,36,0.1),transparent_35%)]" />
      <div className="relative mx-auto grid w-[95vw] gap-16 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="text-2xl font-black uppercase tracking-tighter text-white md:text-3xl">
              BSL TRADING
            </p>
            <p className="text-[11px] font-black uppercase tracking-normal text-primary">
              Stavebná spoločnosť
            </p>
          </div>
          <div className="max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
            <p className="mb-7">
              BSL TRADING s.r.o. sa venuje rekonštrukciám, stavebným prácam, zatepľovaniu budov,
              výkopovým prácam aj technickým zásahom pre bytové, občianske a komerčné stavby.
            </p>
            <div className="space-y-2">
              <p>{company.address[0]}</p>
              <p>{company.address[1]}</p>
              <p>IČO: {company.businessInfo.ico}</p>
              <p>DIČ: {company.businessInfo.dic}</p>
            </div>
            <div className="pt-4">
              <a
                href={company.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center bg-[#1877F2] text-white transition-opacity hover:opacity-85"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9.101 24v-11.063h-3.842v-4.414h3.842v-3.256c0-3.814 2.329-5.89 5.73-5.89 1.629 0 3.03.121 3.437.176v3.986h-2.359c-1.85 0-2.208.88-2.208 2.169v2.835h4.414l-.574 4.414h-3.84v11.063z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <p className="text-[11px] font-black uppercase tracking-normal text-white/45">
            Navigácia
          </p>
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base text-white/75 transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <p className="text-[11px] font-black uppercase tracking-normal text-white/45">
            Kontakty
          </p>
          <div className="space-y-6">
            {contacts.map((contact) => (
              <div key={contact.email} className="space-y-1">
                <p className="text-sm font-black uppercase tracking-normal text-primary">
                  {contact.role}
                </p>
                <p className="text-xl font-black uppercase tracking-tight">{contact.name}</p>
                <a
                  href={contact.phoneHref}
                  className="block text-white/75 transition-colors hover:text-primary"
                >
                  {contact.phone}
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="block text-sm uppercase tracking-normal text-white/60 transition-colors hover:text-primary"
                >
                  {contact.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-16 flex w-[95vw] flex-col gap-5 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
        <p className="text-[11px] font-bold uppercase tracking-normal text-white/40">
          © 2026 BSL TRADING | All rights reserved
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/65">
          <CookieSettingsButton className="transition-colors hover:text-primary">
            Cookies
          </CookieSettingsButton>
          <Link
            href="/ochrana-osobnych-udajov"
            className="transition-colors hover:text-primary"
          >
            Ochrana osobných údajov
          </Link>
          <a
            href="https://aebdigital.sk"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-primary"
          >
            Tvorba webu - AEB Digital
          </a>
        </div>
      </div>
    </footer>
  );
}
