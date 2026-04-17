import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { StructuredData } from "@/components/structured-data";
import { company, contacts } from "@/lib/site-content";
import { buildPageMetadata, createBreadcrumbJsonLd, createContactPageJsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Kontakt",
  description:
    "Kontaktné údaje firmy BSL TRADING vrátane sídla, telefónov, e-mailov, navigácie a kontaktného formulára cez SMTP2GO.",
  path: "/kontakt",
  image: "/images/about.jpg",
  keywords: ["kontakt BSL TRADING", "telefón BSL TRADING", "email BSL TRADING"],
});

export default function ContactPage() {
  return (
    <main>
      <StructuredData
        id="contact-structured-data"
        data={[
          createContactPageJsonLd(),
          createBreadcrumbJsonLd([
            { name: "Domov", path: "/" },
            { name: "Kontakt", path: "/kontakt" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Kontakt"
        title="Všetky dôležité kontakty na jednom mieste."
        description="Kontakty na vedenie firmy, obchodného zástupcu a projektového manažéra vrátane sídla a kontaktného formulára."
        image="/images/about.jpg"
        imageAlt="Kontakt BSL Trading"
      />

      <section className="mx-auto grid w-[95vw] gap-6 py-16 md:py-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2.2rem] border border-black/5 bg-white p-7 shadow-[0_16px_40px_rgba(0,0,0,0.05)] md:p-10">
          <p className="text-[11px] font-black uppercase tracking-[0.3em] text-primary italic">
            Firma
          </p>
          <h2 className="mt-4 text-4xl font-black uppercase tracking-tight text-navy">
            {company.name}
          </h2>
          <div className="mt-8 space-y-4 text-lg text-navy/72">
            <p>{company.address[0]}</p>
            <p>{company.address[1]}</p>
            <p>IČO: {company.businessInfo.ico}</p>
            <p>DIČ: {company.businessInfo.dic}</p>
            <p>{company.email}</p>
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={company.phoneHref}
              className="inline-flex rounded-full bg-navy px-8 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-white italic transition-colors hover:bg-primary"
            >
              Zavolať
            </a>
            <a
              href={`mailto:${company.email}`}
              className="inline-flex rounded-full border border-black/10 bg-white px-8 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-navy italic transition-colors hover:border-primary hover:text-primary"
            >
              Napísať e-mail
            </a>
          </div>
          <a
            href={company.facebook}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex text-[11px] font-black uppercase tracking-[0.28em] text-primary italic"
          >
            Facebook
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {contacts.map((contact) => (
            <article
              key={contact.email}
              className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_12px_35px_rgba(0,0,0,0.05)]"
            >
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-primary italic">
                {contact.role}
              </p>
              <h3 className="mt-3 text-2xl font-black uppercase tracking-tight text-navy">
                {contact.name}
              </h3>
              <div className="mt-5 space-y-3 text-base text-navy/72">
                <a href={contact.phoneHref} className="block transition-colors hover:text-primary">
                  {contact.phone}
                </a>
                <a href={`mailto:${contact.email}`} className="block break-all transition-colors hover:text-primary">
                  {contact.email}
                </a>
              </div>
            </article>
          ))}

          <ContactForm />

          <div className="rounded-[2rem] border border-black/5 bg-zinc-100 p-6 shadow-[0_12px_35px_rgba(0,0,0,0.05)] md:col-span-2">
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-primary italic">
              Sídlo firmy
            </p>
            <div className="mt-5 grid gap-4 text-base text-navy/70 md:grid-cols-2">
              <p>
                Suchý Jarok 1299/1
                <br />
                066 01 Humenné
              </p>
              <div className="flex flex-col gap-3">
                <p>Priame otvorenie navigácie k sídlu firmy.</p>
                <a
                  href={company.mapHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-black/10 bg-white px-5 py-3 text-[11px] font-black uppercase tracking-[0.24em] text-navy italic transition-colors hover:border-primary hover:text-primary"
                >
                  Otvoriť mapu
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
