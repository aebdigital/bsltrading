import Link from "next/link";

import { MediaCard } from "@/components/media-card";
import { PageHero } from "@/components/page-hero";
import { apartmentProject } from "@/lib/site-content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Byty Strážske",
  description:
    "Projekt Byty Strážske s videami, pôdorysmi, exteriérmi, interiérmi a preklikmi na predajné ponuky.",
  path: "/byty-strazske",
  image: "/legacy/uploads/2023/08/Exterier_10.png",
  keywords: ["Byty Strážske", "predaj bytov Strážske", "developerský projekt"],
  type: "article",
});

export default function BytyStrazskePage() {
  return (
    <main>
      <PageHero
        eyebrow="Byty Strážske"
        title="Moderné bývanie v rezidencii Byty Strážske"
        description={apartmentProject.summary}
        image="/legacy/uploads/2023/08/Exterier_10.png"
        imageAlt="Byty Strážske"
      />

      <section className="mx-auto grid w-[95vw] gap-6 py-16 md:py-24 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[2rem] border border-black/5 bg-white p-7 shadow-[0_12px_35px_rgba(0,0,0,0.05)] md:p-10">
          <p className="text-[11px] font-black uppercase tracking-[0.3em] text-primary italic">
            Projekt
          </p>
          <h2 className="mt-4 text-4xl font-black uppercase tracking-tight text-navy">
            {apartmentProject.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-navy/72">{apartmentProject.intro}</p>
          <div className="mt-8 flex flex-col gap-3">
            {apartmentProject.saleLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                className="inline-flex rounded-full border border-black/10 bg-zinc-50 px-6 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-navy italic transition-colors hover:border-primary hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {apartmentProject.videos.map((video) => (
            <article
              key={video.src}
              className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_12px_35px_rgba(0,0,0,0.05)]"
            >
              <video className="h-72 w-full bg-black object-cover" controls preload="metadata">
                <source src={video.src} type="video/mp4" />
              </video>
              <div className="p-5">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-navy italic">
                  {video.title}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {apartmentProject.galleries.map((gallery) => (
        <section key={gallery.title} className="mx-auto w-[95vw] pb-16 md:pb-24">
          <div className="mb-8 max-w-3xl">
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.3em] text-primary italic">Galéria projektu</p>
            <h2 className="text-3xl font-black uppercase tracking-tight text-navy md:text-5xl">
              {gallery.title}
            </h2>
            {gallery.description ? (
              <p className="mt-4 text-base leading-relaxed text-navy/68">{gallery.description}</p>
            ) : null}
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {gallery.items.map((item, index) => (
              <MediaCard
                key={item.src}
                src={item.src}
                alt={item.alt}
                priority={index < 3}
                className="h-72 md:h-80"
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
