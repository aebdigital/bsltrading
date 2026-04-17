import Image from "next/image";

type MediaCardProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function MediaCard({ src, alt, className, priority = false }: MediaCardProps) {
  return (
    <div className={`relative overflow-hidden rounded-[1.75rem] border border-black/5 bg-zinc-100 ${className ?? ""}`}>
      <div className="absolute inset-0 z-10 bg-[linear-gradient(to_top,rgba(0,0,0,0.14),transparent_45%)]" />
      <Image src={src} alt={alt} fill priority={priority} sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
    </div>
  );
}
