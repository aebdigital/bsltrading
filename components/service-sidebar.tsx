import Link from "next/link";

import type { Service } from "@/lib/site-content";

type ServiceSidebarProps = {
  currentSlug?: string;
  services: Service[];
};

export function ServiceSidebar({ currentSlug, services }: ServiceSidebarProps) {
  return (
    <aside className="h-fit self-start rounded-[2rem] border border-black/5 bg-white p-5 shadow-[0_12px_35px_rgba(0,0,0,0.05)] lg:sticky lg:top-28">
      <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
        Naše služby
      </p>
      <nav className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
        {services.map((service) => {
          const isCurrent = service.slug === currentSlug;

          return (
            <Link
              key={service.slug}
              href={service.href}
              className={`min-w-[14rem] rounded-[1.5rem] border px-4 py-4 transition-all lg:min-w-0 ${
                isCurrent
                  ? "border-primary bg-primary text-white shadow-lg shadow-primary/20"
                  : "border-black/5 bg-zinc-50 text-navy hover:border-primary/40 hover:bg-white"
              }`}
            >
              <p className="text-lg font-semibold uppercase leading-tight tracking-tight">
                {service.menuLabel}
              </p>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
