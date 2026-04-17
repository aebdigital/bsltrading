import Link from "next/link";

import { MediaCard } from "@/components/media-card";
import { PageHero } from "@/components/page-hero";
import { referenceProjects } from "@/lib/site-content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Referencie",
  description:
    "Prehľad referencií a realizácií spoločnosti BSL TRADING od bytových domov po občianske a komerčné stavby.",
  path: "/referencie",
  image: "/legacy/uploads/2020/07/bez-facingu-interaktiv-page-027-scaled.jpg",
  keywords: ["referencie BSL TRADING", "realizácie stavieb", "projekty Humenné"],
});

export default function ReferencesPage() {
  const featured = referenceProjects.filter((project) => !project.archiveOnly);
  const archive = referenceProjects.filter((project) => project.archiveOnly);

  return (
    <main>
      <PageHero
        eyebrow="Referencie"
        title="Vybrané realizácie a firemné portfólio."
        description="Výber projektov spoločnosti BSL TRADING vrátane bytových domov, občianskych stavieb, spevnených plôch a ďalších realizácií."
        image="/legacy/uploads/2020/07/bez-facingu-interaktiv-page-027-scaled.jpg"
        imageAlt="Referencie BSL Trading"
      />

      <section className="mx-auto w-[95vw] py-16 md:py-24">
        <div className="mb-8 max-w-3xl">
          <p className="mb-4 text-[11px] font-black uppercase tracking-[0.3em] text-primary italic">
            Detailné projekty
          </p>
          <h2 className="text-4xl font-black uppercase tracking-tight text-navy md:text-6xl">
            Vybrané projekty s rozsahom prác, lokalitou a obdobím realizácie.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={`/referencie/${project.slug}`}
              className="group overflow-hidden rounded-[2rem] border border-black/5 bg-white transition-all hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(0,0,0,0.05)]"
            >
              <div className="relative h-72">
                <MediaCard src={project.coverImage} alt={project.title} className="h-full rounded-none border-0 transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[11px] font-black uppercase tracking-[0.28em] text-primary italic">
                    {project.yearLabel}
                  </p>
                  <p className="text-[11px] font-black uppercase tracking-[0.28em] text-navy/45 italic">
                    {project.location}
                  </p>
                </div>
                <h2 className="text-2xl font-black uppercase tracking-tight text-navy">
                  {project.title}
                </h2>
                <p className="text-base leading-relaxed text-navy/68">{project.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-black/5 bg-white py-16 md:py-24">
        <div className="mx-auto grid w-[95vw] gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.3em] text-primary italic">
              Ďalšie realizácie
            </p>
            <h2 className="text-4xl font-black uppercase tracking-tight text-navy md:text-6xl">
              Ďalšie projekty z firemného portfólia.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy/68">
              Prehľad ďalších realizácií spoločnosti BSL TRADING z bytovej, občianskej a komerčnej výstavby.
            </p>
          </div>
          <div className="grid gap-3">
            {archive.map((project) => (
              <Link
                key={project.slug}
                href={`/referencie/${project.slug}`}
                className="flex flex-col gap-2 rounded-[1.5rem] border border-black/5 bg-zinc-50 px-5 py-4 transition-colors hover:border-primary/35 hover:bg-white"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <h3 className="text-lg font-black uppercase tracking-tight text-navy">
                    {project.title}
                  </h3>
                  <p className="text-[11px] font-black uppercase tracking-[0.28em] text-primary italic">
                    {project.yearLabel}
                  </p>
                </div>
                <p className="text-sm text-navy/65">{project.location}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
