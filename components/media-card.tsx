import Image from "next/image";

type MediaCardProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  onClick?: () => void;
};

export function MediaCard({ src, alt, className, priority = false, onClick }: MediaCardProps) {
  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden border border-black/5 bg-zinc-100 ${
        onClick ? "cursor-pointer group/card" : ""
      } ${className ?? ""}`}
    >
      <div className="absolute inset-0 z-10 bg-[linear-gradient(to_top,rgba(0,0,0,0.14),transparent_45%)] transition-opacity group-hover/card:opacity-0" />
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover/card:scale-110"
      />
    </div>
  );
}
