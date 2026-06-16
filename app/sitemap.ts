import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const SITE = "https://spagero.tech";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: SITE,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projects.map((p) => ({
      url: `${SITE}/work/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
