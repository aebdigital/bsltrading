import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { MediaCard } from "@/components/media-card";
import { PageHero } from "@/components/page-hero";
import { StructuredData } from "@/components/structured-data";
import { getReferenceProject, referenceProjects } from "@/lib/site-content";
import { buildPageMetadata, createBreadcrumbJsonLd } from "@/lib/seo";

type ReferencePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return referenceProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ReferencePageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getReferenceProject(slug);

  if (!project) {
    return {};
  }

  return buildPageMetadata({
    title: `${project.title} | Referencie`,
    description: project.summary,
    path: `/referencie/${project.slug}`,
    image: project.coverImage,
    keywords: [project.title, project.location, ...project.tags],
    type: "article",
  });
}

export default async function ReferenceDetailPage({ params }: ReferencePageProps) {
  const { slug } = await params;
  const project = getReferenceProject(slug);

  if (!project) {
    notFound();
  }

  const related = referenceProjects.filter((item) => item.slug !== project.slug).slice(0, 4);

  return (
    <main>
      <StructuredData
        id={`reference-${project.slug}-structured-data`}
        data={createBreadcrumbJsonLd([
          { name: "Domov", path: "/" },
          { name: "Referencie", path: "/referencie" },
          { name: project.title, path: `/referencie/${project.slug}` },
        ])}
      />
      <PageHero
        eyebrow={project.yearLabel}
        title={`${project.title}, ${project.location}`}
        description={project.summary}
        image={project.coverImage}
        imageAlt={project.title}
      />

      <section className="mx-auto grid w-[95vw] gap-8 py-16 md:py-24 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-[2.2rem] border border-black/5 bg-white p-7 shadow-[0_12px_35px_rgba(0,0,0,0.05)] md:p-10">
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-primary italic">
              Projekt
            </p>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-tight text-navy">
              {project.title}
            </h2>
            <div className="mt-6 space-y-3 text-base text-navy/72">
              <p>Lokalita: {project.location}</p>
              <p>Obdobie: {project.yearLabel}</p>
            </div>

            {project.lead ? (
              <p className="mt-6 text-xl font-medium italic leading-relaxed text-navy/72">{project.lead}</p>
            ) : null}

            {project.scope?.length ? (
              <div className="mt-8 space-y-3">
                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-primary italic">
                  Rozsah prác
                </p>
                <ul className="space-y-3">
                  {project.scope.map((item) => (
                    <li
                      key={item}
                      className="rounded-[1.35rem] border border-black/5 bg-zinc-50 px-4 py-3 text-base text-navy/72"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {project.archiveOnly ? (
              <div className="mt-8 rounded-[1.5rem] border border-dashed border-black/10 bg-zinc-50 p-5">
                <p className="text-sm leading-relaxed text-navy/68">
                  Pri tomto projekte sú k dispozícii stručné identifikačné údaje o lokalite, období a type realizácie.
                </p>
              </div>
            ) : null}

            <div className="mt-8 flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-primary italic"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-5">
          {project.gallery.map((image, index) => (
            <MediaCard
              key={image.src}
              src={image.src}
              alt={image.alt}
              priority={index === 0}
              className={index === 0 ? "h-[28rem] md:h-[36rem]" : "h-[24rem] md:h-[30rem]"}
            />
          ))}
        </div>
      </section>

      <section className="border-t border-black/5 bg-white py-16 md:py-24">
        <div className="mx-auto w-[95vw]">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-[11px] font-black uppercase tracking-[0.3em] text-primary italic">
                Ďalšie referencie
              </p>
              <h2 className="text-3xl font-black uppercase tracking-tight text-navy md:text-5xl">
                Prejsť na ďalší projekt z portfólia.
              </h2>
            </div>
            <Link
              href="/referencie"
              className="text-[11px] font-black uppercase tracking-[0.28em] text-navy italic transition-colors hover:text-primary"
            >
              Späť na referencie
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/referencie/${item.slug}`}
                className="overflow-hidden rounded-[2rem] border border-black/5 bg-zinc-50 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_42px_rgba(0,0,0,0.05)]"
              >
                <div className="relative h-48">
                  <MediaCard src={item.coverImage} alt={item.title} className="h-full rounded-none border-0" />
                </div>
                <div className="space-y-2 p-5">
                  <p className="text-[11px] font-black uppercase tracking-[0.28em] text-primary italic">
                    {item.yearLabel}
                  </p>
                  <h3 className="text-xl font-black uppercase tracking-tight text-navy">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
