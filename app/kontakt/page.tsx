import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { AnimatedButtonText } from "@/components/animated-button-text";
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
        <div className="space-y-6">
          <div className="border border-black/5 bg-white p-7 shadow-[0_16px_40px_rgba(0,0,0,0.05)] md:p-10">

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

            <div className="mt-8">
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

          <div className="overflow-hidden border border-black/5 bg-zinc-100 shadow-[0_16px_40px_rgba(0,0,0,0.05)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.5642999403816!2d21.902636977284614!3d48.92364029107931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473eb50387092305%3A0x804c642fef369c61!2sBSL%20TRADING%20s.r.o.!5e0!3m2!1ssk!2ssk!4v1713289000000!5m2!1ssk!2ssk"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BSL TRADING mapa"
            ></iframe>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {contacts.map((contact) => (
            <article
              key={contact.email}
              className="border border-black/5 bg-white p-6 shadow-[0_12px_35px_rgba(0,0,0,0.05)]"
            >
              <p className="text-[11px] font-black uppercase tracking-normal text-primary">
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
        </div>
      </section>
    </main>
  );
}
