import Link from "next/link";
import { GalleryGrid } from "@/components/gallery-grid";
import { PageHero } from "@/components/page-hero";
import { AnimatedButtonText } from "@/components/animated-button-text";
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

      <section className="mx-auto w-[95vw] py-16 md:py-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {apartmentProject.videos.map((video) => (
            <article
              key={video.src}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <div className="overflow-hidden border border-black/5 bg-black shadow-[0_12px_35px_rgba(0,0,0,0.05)]">
                <video className="h-72 w-full object-cover" controls preload="metadata">
                  <source src={video.src} type="video/mp4" />
                </video>
              </div>
              <p className="text-sm font-black uppercase tracking-normal text-navy">
                {video.title}
              </p>
            </article>
          ))}
        </div>
      </section>

      {apartmentProject.galleries.map((gallery) => (
        <section key={gallery.title} className="mx-auto w-[95vw] pb-16 md:pb-24">
          <div className="mb-8 max-w-3xl">
            <p className="mb-4 text-[11px] font-black uppercase tracking-normal text-primary">Galéria projektu</p>
            <h2 className="text-3xl font-black uppercase tracking-tight text-navy md:text-5xl">
              {gallery.title}
            </h2>
            {gallery.description ? (
              <p className="mt-4 text-base leading-relaxed text-navy/68">{gallery.description}</p>
            ) : null}
          </div>
          <GalleryGrid images={gallery.items} />
        </section>
      ))}
    </main>
  );
}
