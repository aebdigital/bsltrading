"use client";

import { useLightbox } from "./lightbox-context";
import { MediaCard } from "./media-card";

type GalleryImage = {
  src: string;
  alt: string;
};

type ReferenceGalleryProps = {
  images: GalleryImage[];
};

export function ReferenceGallery({ images }: ReferenceGalleryProps) {
  const { open } = useLightbox();

  return (
    <div className="space-y-5">
      {images.map((image, index) => (
        <MediaCard
          key={image.src}
          src={image.src}
          alt={image.alt}
          priority={index === 0}
          onClick={() => open(images, index)}
          className={index === 0 ? "h-[28rem] md:h-[36rem]" : "h-[24rem] md:h-[30rem]"}
        />
      ))}
    </div>
  );
}
