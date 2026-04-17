"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { MediaCard } from "@/components/media-card";
import { company, featuredReferences, featuredServices } from "@/lib/site-content";

export default function HomePageClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <main ref={containerRef} className="relative">
      {/* Sticky Hero Section */}
      <section className="sticky top-0 h-[85vh] min-h-[40rem] overflow-hidden bg-[#111]">
        <motion.div style={{ y, scale }} className="absolute inset-0 h-[120%] w-full">
          <Image
            src="/images/hero.jpg"
            alt="BSL Trading hero"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(58,183,155,0.24),transparent_30%),linear-gradient(to_top,rgba(0,0,0,0.76),rgba(0,0,0,0.2))]" />
        
        <motion.div 
          style={{ opacity }}
          className="relative mx-auto flex h-full w-[95vw] items-center py-20 md:py-24"
        >
          <div className="max-w-4xl">
            <p className="mb-6 text-[11px] font-black uppercase tracking-[0.34em] text-primary italic">
              Stavebná spoločnosť
            </p>
            <h1 className="text-5xl font-black uppercase leading-[0.85] tracking-tight text-white md:text-[7rem]">
              {company.heroTitle}
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)] md:text-2xl">
              {company.heroText}
            </p>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/nase-sluzby"
                className="inline-flex rounded-full bg-primary px-9 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-white italic transition-colors hover:bg-white hover:text-navy"
              >
                Naše služby
              </Link>
              <Link
                href="/referencie"
                className="inline-flex rounded-full border border-white/20 bg-white/10 px-9 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-white italic backdrop-blur-sm transition-colors hover:border-primary hover:bg-primary"
              >
                Referencie
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Content Wrapper that slides over the hero */}
      <div className="relative z-10 bg-[#f5f5f2] shadow-[0_-20px_50px_rgba(0,0,0,0.2)]">
        <section className="mx-auto w-[95vw] py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-5 text-[11px] font-black uppercase tracking-[0.34em] text-primary italic">
                O firme
              </p>
              <h2 className="text-4xl font-black uppercase leading-[0.9] tracking-tight text-navy md:text-6xl">
                Príbeh poctivej práce od drobných stavieb po väčšie realizácie.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {company.story.slice(0, 4).map((paragraph) => (
                <div key={paragraph} className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_12px_35px_rgba(0,0,0,0.04)]">
                  <p className="text-base leading-relaxed text-navy/72">{paragraph}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-black/5 bg-white py-20 md:py-28">
          <div className="mx-auto w-[95vw]">
            <div className="mb-10">
              <div>
                <p className="mb-4 text-[11px] font-black uppercase tracking-[0.34em] text-primary italic">
                  Služby
                </p>
                <h2 className="text-4xl font-black uppercase leading-[0.9] tracking-tight text-navy md:text-6xl">
                  Šesť nosných oblastí pre stavbu, obnovu aj technické zásahy.
                </h2>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {featuredServices.map((service) => (
                <Link
                  key={service.slug}
                  href={service.href}
                  className="group relative min-h-[24rem] overflow-hidden rounded-[2rem] bg-[#161616] transition-all hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.1)]"
                >
                  <div className="absolute inset-0">
                    <MediaCard
                      src={service.previewImage}
                      alt={service.title}
                      className="h-full rounded-none border-0 transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.8),rgba(0,0,0,0.28),rgba(0,0,0,0.1))]" />
                  <div className="absolute inset-x-0 bottom-0 z-10 bg-white/10 p-6 backdrop-blur-md md:p-7">
                    <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white md:text-base">
                      {service.summary}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-[95vw] py-20 md:py-28">
          <div className="mb-10">
            <div>
              <p className="mb-4 text-[11px] font-black uppercase tracking-[0.34em] text-primary italic">
                Referencie
              </p>
              <h2 className="text-4xl font-black uppercase leading-[0.9] tracking-tight text-navy md:text-6xl">
                Vybrané realizácie
              </h2>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {featuredReferences.slice(0, 3).map((project) => (
              <Link
                key={project.slug}
                href={`/referencie/${project.slug}`}
                className="group overflow-hidden rounded-[2rem] border border-black/5 bg-white transition-all hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(0,0,0,0.06)]"
              >
                <div className="relative h-72">
                  <MediaCard src={project.coverImage} alt={project.title} className="h-full rounded-none border-0 transition-transform duration-700 group-hover:scale-[1.03]" />
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
                  <h3 className="text-2xl font-black uppercase tracking-tight text-navy">
                    {project.title}
                  </h3>
                  <p className="text-base leading-relaxed text-navy/68">{project.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
