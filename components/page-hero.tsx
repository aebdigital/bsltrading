"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedButtonText } from "@/components/animated-button-text";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  cta?: {
    href: string;
    label: string;
  };
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  cta,
}: PageHeroProps) {
  return (
    <section className="relative h-[40vh] min-h-[20rem] overflow-hidden border-b border-black/5 bg-[#111]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(58,183,155,0.22),transparent_28%),linear-gradient(to_top,rgba(0,0,0,0.68),rgba(0,0,0,0.2))]" />
      <div className="relative mx-auto flex h-full w-[95vw] items-end py-10 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <p className="mb-5 text-[11px] font-black uppercase tracking-normal text-primary">
            {eyebrow}
          </p>
          <h1 className="text-3xl font-black uppercase leading-[0.92] tracking-tight text-white md:text-5xl">
            {title.replace(/\.$/, "")}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/80 md:text-lg">
            {description}
          </p>
          {cta ? (
            <div className="mt-8">
              <Link
                href={cta.href}
                className="group relative inline-flex items-center justify-center overflow-hidden border border-white/20 bg-white/10 px-8 py-4 text-[11px] font-black uppercase tracking-normal text-white backdrop-blur-sm transition-colors hover:border-primary hover:bg-primary"
              >
                <AnimatedButtonText>{cta.label}</AnimatedButtonText>
              </Link>
            </div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
