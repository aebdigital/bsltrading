import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { certificates } from "@/lib/site-content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Certifikáty",
  description:
    "Prehľad certifikátov, licencií a odborných dokumentov spoločnosti BSL TRADING.",
  path: "/certifikaty",
  image: "/legacy/uploads/2025/12/licenciaETICs.jpg",
  keywords: ["certifikáty BSL TRADING", "ETICS licencia", "stavebné certifikáty"],
});

export default function CertificatesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Certifikáty"
        title="Certifikáty a licencie spoločnosti."
        description="Prehľad odborných dokumentov, certifikátov a licencií BSL TRADING na jednom mieste."
        image="/legacy/uploads/2025/12/licenciaETICs.jpg"
        imageAlt="Náhľad certifikátu BSL Trading"
      />

      <section className="mx-auto w-[95vw] py-16 md:py-24">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {certificates.map((certificate) => (
            <Link
              key={certificate.slug}
              href={certificate.pdfUrl}
              target="_blank"
              aria-label={`Otvoriť PDF: ${certificate.title}`}
              className="group overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_12px_35px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(0,0,0,0.08)]"
            >
              <div className="relative aspect-[210/297] bg-zinc-100">
                <span className="absolute right-4 top-4 z-10 rounded-full bg-primary px-3 py-1 text-[10px] font-black uppercase tracking-[0.24em] text-white">
                  PDF
                </span>
                <Image
                  src={certificate.previewImage}
                  alt={certificate.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>
              <span className="sr-only">{certificate.title}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
