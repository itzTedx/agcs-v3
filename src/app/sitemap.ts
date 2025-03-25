import type { MetadataRoute } from "next";

import { getServicesCategories } from "@/sanity/lib/fetch";

const BASE_URL = "https://www.alliedgulf.me";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const servicesCategoriesQuery = await getServicesCategories();

  const servicesCategoriesEntries: MetadataRoute.Sitemap =
    servicesCategoriesQuery.map((s) => ({
      url: `${BASE_URL}/distributions/${s.slug}`,
      priority: 0.8,
    }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/company/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/company/gallery`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/company/certifications`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...servicesCategoriesEntries,
    {
      url: `${BASE_URL}/products`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
