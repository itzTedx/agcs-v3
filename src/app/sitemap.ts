import type { MetadataRoute } from "next";

import {
  getCategories,
  getServicesByCategory,
  getServicesCategories,
} from "@/sanity/lib/fetch";

const BASE_URL = "https://www.alliedgulf.me";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const servicesCategoriesQuery = await getServicesCategories();
  const products = await getCategories();

  const servicesCategoriesEntries: MetadataRoute.Sitemap =
    servicesCategoriesQuery.map((s) => ({
      url: `${BASE_URL}/services/${s.slug?.current}`,
      priority: 0.8,
      lastModified: s._createdAt,
      changefreq: "weekly",
    }));

  const servicesByCategoryEntries = (
    await Promise.all(
      servicesCategoriesQuery.map(async (s) => {
        const services = await getServicesByCategory(s.slug?.current!);
        return services.map((c) => ({
          url: `${BASE_URL}/services/${s.slug?.current}/${c.servicesSlug?.current}`,
          priority: 0.8,
          lastModified: s._createdAt,
        }));
      })
    )
  ).flat();

  const productsCategoriesEntries: MetadataRoute.Sitemap = products.map(
    (s) => ({
      url: `${BASE_URL}/products/${s.slug?.current}`,
      priority: 0.8,
      lastModified: s._updatedAt,
      changefreq: "weekly",
    })
  );

  const productsByCategoryEntries = (
    await Promise.all(
      products.map(async (s) => {
        const services = await getServicesByCategory(s.slug?.current!);
        return services.map((c) => ({
          url: `${BASE_URL}/services/${s.slug?.current}/${c.servicesSlug?.current}`,
          priority: 0.8,
          lastModified: s._updatedAt,
        }));
      })
    )
  ).flat();

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
    ...servicesByCategoryEntries,
    {
      url: `${BASE_URL}/products`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...productsCategoriesEntries,
    ...productsByCategoryEntries,
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
