import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MediaCard } from "@/components/media-card";
import { PageHero } from "@/components/page-hero";
import { ServiceSidebar } from "@/components/service-sidebar";
import { StructuredData } from "@/components/structured-data";
import { getService, services } from "@/lib/site-content";
import { buildPageMetadata, createBreadcrumbJsonLd, createServiceJsonLd } from "@/lib/seo";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {};
  }

  return buildPageMetadata({
    title: service.title,
    description: service.summary,
    path: service.href,
    image: service.heroImage,
    keywords: [service.title, service.category, ...service.highlights],
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <StructuredData
        id={`service-${service.slug}-structured-data`}
        data={[
          createServiceJsonLd(service),
          createBreadcrumbJsonLd([
            { name: "Domov", path: "/" },
            { name: "Služby", path: "/nase-sluzby" },
            { name: service.title, path: service.href },
          ]),
        ]}
      />
      <PageHero
        eyebrow={service.category}
        title={service.title}
        description={service.intro}
        image={service.heroImage}
        imageAlt={service.title}
        cta={{ href: "/kontakt", label: "Vyžiadať kontakt" }}
      />

      <section className="mx-auto grid w-[95vw] gap-8 py-16 md:py-24 lg:grid-cols-[20rem_minmax(0,1fr)]">
        <ServiceSidebar currentSlug={service.slug} services={services} />

        <div className="space-y-10">
          {service.sections.map((section) => (
            <article
              key={section.title}
              className="rounded-[2.2rem] border border-black/5 bg-white p-7 shadow-[0_12px_35px_rgba(0,0,0,0.05)] md:p-10"
            >
              <h2 className="text-3xl font-black uppercase tracking-tight text-navy md:text-4xl">
                {section.title}
              </h2>

              {section.body ? (
                <p className="mt-5 max-w-4xl text-lg leading-relaxed text-navy/72">{section.body}</p>
              ) : null}

              {section.bullets?.length ? (
                <ul className="mt-6 grid gap-3 md:grid-cols-2">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-[1.4rem] border border-black/5 bg-zinc-50 px-5 py-4 text-base text-navy/72"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}

              {section.table ? (
                <div className="mt-6 overflow-hidden rounded-[1.8rem] border border-black/5">
                  <table className="w-full border-collapse bg-zinc-50 text-left">
                    <thead>
                      <tr className="bg-navy text-white">
                        {section.table.columns.map((column) => (
                          <th
                            key={column}
                            className="px-5 py-4 text-[11px] font-black uppercase tracking-[0.24em] italic"
                          >
                            {column}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row) => (
                        <tr key={row.join("-")} className="border-t border-black/5">
                          {row.map((cell) => (
                            <td key={cell} className="px-5 py-4 text-base text-navy/72">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}

              {section.gallery?.length ? (
                <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {section.gallery.map((image, index) => (
                    <MediaCard
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      priority={index < 3}
                      className="h-72 md:h-80"
                    />
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
