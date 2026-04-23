"use client";

import { useLightbox } from "./lightbox-context";
import { MediaCard } from "./media-card";

type GalleryImage = {
  src: string;
  alt: string;
};

type GalleryGridProps = {
  images: GalleryImage[];
  priorityCount?: number;
  columns?: string;
  className?: string;
};

export function GalleryGrid({
  images,
  priorityCount = 3,
  columns = "grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
  className,
}: GalleryGridProps) {
  const { open } = useLightbox();

  return (
    <div className={`${columns} ${className ?? ""}`}>
      {images.map((image, index) => (
        <MediaCard
          key={image.src}
          src={image.src}
          alt={image.alt}
          priority={index < priorityCount}
          className="h-72 md:h-80"
          onClick={() => open(images, index)}
        />
      ))}
    </div>
  );
}
