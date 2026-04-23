import { PageHero } from "@/components/page-hero";
import { StructuredData } from "@/components/structured-data";
import { company, contacts } from "@/lib/site-content";
import { buildPageMetadata, createBreadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Ochrana osobných údajov",
  description:
    "Zásady ochrany osobných údajov spoločnosti BSL TRADING s informáciami o kontaktnom formulári, cookies a právach dotknutých osôb.",
  path: "/ochrana-osobnych-udajov",
  image: "/images/about.jpg",
  keywords: ["ochrana osobných údajov", "GDPR BSL TRADING", "cookies BSL TRADING"],
});

const effectiveDate = "17. 4. 2026";

export default function PrivacyPolicyPage() {
  const managingDirector = contacts.find((contact) => contact.role === "Konateľ") ?? contacts[0];

  return (
    <main>
      <StructuredData
        id="privacy-policy-breadcrumbs"
        data={createBreadcrumbJsonLd([
          { name: "Domov", path: "/" },
          { name: "Ochrana osobných údajov", path: "/ochrana-osobnych-udajov" },
        ])}
      />

      <PageHero
        eyebrow="GDPR"
        title="Ochrana osobných údajov."
        description="Informácie o tom, aké osobné údaje spracúva spoločnosť BSL TRADING pri používaní webu, kontaktného formulára a nastavení cookies."
        image="/images/about.jpg"
        imageAlt="Ochrana osobných údajov BSL TRADING"
      />

      <section className="mx-auto grid w-[95vw] gap-6 py-16 md:py-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border border-black/5 bg-white p-7 shadow-[0_12px_35px_rgba(0,0,0,0.05)] md:p-10">
          <p className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">
            Prevádzkovateľ
          </p>
          <h2 className="mt-4 text-4xl font-black uppercase tracking-tight text-navy">
            {company.name}
          </h2>
          <div className="mt-7 space-y-3 text-base leading-relaxed text-navy/72">
            <p>IČO: {company.businessInfo.ico}</p>
            <p>Konateľ: {managingDirector.name}</p>
            <p>E-mail: {company.email}</p>
            <p>Tel.: {company.phone}</p>
            <p>
              {company.address[0]}
              <br />
              {company.address[1]}
            </p>
          </div>
        </div>

        <div className="border border-black/5 bg-white p-7 shadow-[0_12px_35px_rgba(0,0,0,0.05)] md:p-10">
          <p className="text-base leading-relaxed text-navy/72">
            Tieto Zásady ochrany osobných údajov (ďalej len „Zásady“) popisujú, aké
            osobné údaje spracúvame v súvislosti s používaním našej webovej stránky,
            kontaktného formulára a nastavení cookies.
          </p>
        </div>
      </section>

      <section className="mx-auto w-[95vw] pb-16 md:pb-24">
        <div className="grid gap-6">
          <article className="border border-black/5 bg-white p-7 shadow-[0_12px_35px_rgba(0,0,0,0.05)] md:p-10">
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">
              I. Kontaktný formulár
            </p>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-navy/72">
              <p>
                Na stránke www.bsltrading.sk prevádzkujeme kontaktný formulár, ktorého
                účelom je umožniť vám:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>položiť otázku k našim službám a realizáciám,</li>
                <li>požiadať o cenovú ponuku,</li>
                <li>kontaktovať nás v súvislosti s novou zákazkou alebo spoluprácou.</li>
              </ul>
              <div>
                <p className="font-semibold text-navy">Rozsah spracúvaných údajov:</p>
                <ul className="mt-2 list-disc space-y-2 pl-5">
                  <li>meno a priezvisko,</li>
                  <li>e-mailová adresa,</li>
                  <li>telefónne číslo (voliteľne),</li>
                  <li>obsah vašej správy.</li>
                </ul>
              </div>
              <p>
                <span className="font-semibold text-navy">Účel spracovania:</span> Spracúvame
                uvedené údaje, aby sme vás mohli kontaktovať a reagovať na váš dopyt.
              </p>
              <p>
                <span className="font-semibold text-navy">Právny základ:</span> Článok 6 ods. 1
                písm. b) GDPR – plnenie opatrení pred uzavretím zmluvy na žiadosť
                dotknutej osoby.
              </p>
              <p>
                <span className="font-semibold text-navy">Doba uchovávania:</span> Osobné údaje
                uchovávame maximálne 10 rokov od ukončenia komunikácie, pokiaľ nevznikne
                ďalší zmluvný vzťah alebo zákonná povinnosť uchovávania.
              </p>
            </div>
          </article>

          <article className="border border-black/5 bg-white p-7 shadow-[0_12px_35px_rgba(0,0,0,0.05)] md:p-10">
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">
              II. Súbory cookies
            </p>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-navy/72">
              <p>Na našej webovej stránke používame cookies na nasledujúce účely:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <span className="font-semibold text-navy">Nevyhnutné cookies</span> –
                  zabezpečujú základnú funkčnosť stránky, uloženie relácie a vašich
                  nastavení súhlasu.
                </li>
                <li>
                  <span className="font-semibold text-navy">Štatistické cookies</span> –
                  pomáhajú nám pochopiť, ako návštevníci stránku používajú; nasadzujeme
                  ich len so súhlasom používateľa.
                </li>
                <li>
                  <span className="font-semibold text-navy">Marketingové cookies</span> –
                  používajú sa len po výslovnom súhlase používateľa a iba v prípade
                  nasadenia marketingových alebo remarketingových nástrojov na stránke.
                </li>
              </ul>
              <p>
                <span className="font-semibold text-navy">Správa súhlasov:</span> Používateľ
                môže svoj súhlas kedykoľvek udeliť, zmeniť alebo odvolať prostredníctvom
                cookie lišty a nastavení cookies dostupných na stránke.
              </p>
            </div>
          </article>

          <article className="border border-black/5 bg-white p-7 shadow-[0_12px_35px_rgba(0,0,0,0.05)] md:p-10">
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">
              III. Práva dotknutej osoby
            </p>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-navy/72">
              <p>Podľa nariadenia GDPR máte nasledujúce práva:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>prístup k osobným údajom, ktoré spracúvame,</li>
                <li>oprava nepresných alebo neúplných údajov,</li>
                <li>vymazanie („právo zabudnutia“), ak na spracovanie už nie je právny základ,</li>
                <li>obmedzenie spracovania,</li>
                <li>prenosnosť údajov,</li>
                <li>odvolanie súhlasu – stane sa účinným dňom odvolania,</li>
                <li>
                  podanie sťažnosti u Úradu na ochranu osobných údajov Slovenskej republiky,
                  Námestie 1. mája 18, 811 06 Bratislava, www.dataprotection.gov.sk.
                </li>
              </ul>
              <p>
                V prípade otázok alebo uplatnenia vašich práv nás môžete kontaktovať na{" "}
                <a
                  href={`mailto:${company.email}`}
                  className="font-semibold text-primary underline underline-offset-4"
                >
                  {company.email}
                </a>{" "}
                alebo na telefónnom čísle{" "}
                <a
                  href={company.phoneHref}
                  className="font-semibold text-primary underline underline-offset-4"
                >
                  {company.phone}
                </a>
                .
              </p>
              <p>
                Tieto Zásady nadobúdajú účinnosť dňom <span className="font-semibold text-navy">{effectiveDate}</span>.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
