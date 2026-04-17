import type { MetadataRoute } from "next";

import { referenceProjects, services } from "@/lib/site-content";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "/",
    "/nase-sluzby",
    "/referencie",
    "/certifikaty",
    "/byty-strazske",
    "/kontakt",
    "/ochrana-osobnych-udajov",
  ];

  const staticEntries = staticRoutes.map((path, index) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.8,
  })) satisfies MetadataRoute.Sitemap;

  const serviceEntries = services.map((service) => ({
    url: absoluteUrl(service.href),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const referenceEntries = referenceProjects.map((project) => ({
    url: absoluteUrl(`/referencie/${project.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: project.archiveOnly ? 0.65 : 0.75,
  }));

  return [...staticEntries, ...serviceEntries, ...referenceEntries];
}
