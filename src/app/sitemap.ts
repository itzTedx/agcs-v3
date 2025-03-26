import type { MetadataRoute } from "next";

import {
  getCategories,
  getPosts,
  getProductsBySlug,
  getServicesByCategory,
  getServicesCategories,
} from "@/sanity/lib/fetch";

const BASE_URL = "https://www.alliedgulf.me";

const createSitemapEntry = (
  path: string,
  priority: number,
  lastModified: string | Date,
  changeFrequency: "yearly" | "monthly" | "weekly" = "monthly"
) => ({
  url: `${BASE_URL}${path}`,
  priority,
  lastModified,
  changeFrequency,
});

const staticPages = [
  createSitemapEntry("", 1, new Date(), "weekly"),
  createSitemapEntry("/company/about", 0.7, new Date(), "yearly"),
  createSitemapEntry("/company/gallery", 0.6, new Date(), "yearly"),
  createSitemapEntry("/company/certifications", 0.5, new Date(), "yearly"),
  createSitemapEntry("/services", 0.9, new Date(), "weekly"),
  createSitemapEntry("/products", 0.9, new Date(), "weekly"),
  createSitemapEntry("/projects", 0.8, new Date(), "monthly"),
  createSitemapEntry("/posts", 0.8, new Date(), "monthly"),
  createSitemapEntry("/contact", 0.7, new Date(), "monthly"),
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    // Fetch all data in parallel
    const [servicesCategoriesQuery, productsCategoriesQuery, postsQuery] =
      await Promise.all([getServicesCategories(), getCategories(), getPosts()]);

    // Process services data
    const servicesCategoriesEntries = servicesCategoriesQuery.map((s) =>
      createSitemapEntry(
        `/services/${s.slug?.current}`,
        0.8,
        s._updatedAt,
        "weekly"
      )
    );

    // Fetch all services for each category in parallel
    const servicesByCategoryEntries = (
      await Promise.all(
        servicesCategoriesQuery.map((s) =>
          getServicesByCategory(s.slug?.current!).then((services) =>
            services.map((c) =>
              createSitemapEntry(
                `/services/${s.slug?.current}/${c.servicesSlug?.current}`,
                0.8,
                s._updatedAt
              )
            )
          )
        )
      )
    ).flat();

    // Process products data
    const productsCategoriesEntries = productsCategoriesQuery.map((s) =>
      createSitemapEntry(
        `/products/${s.slug?.current}`,
        0.8,
        s._updatedAt,
        "weekly"
      )
    );

    // Fetch all products for each category in parallel
    const productsByCategoryEntries = (
      await Promise.all(
        productsCategoriesQuery.map((s) =>
          getProductsBySlug(s.slug?.current!).then((products) =>
            products.map((c) =>
              createSitemapEntry(
                `/products/${s.slug?.current}/${c.slug?.current}`,
                0.8,
                s._updatedAt
              )
            )
          )
        )
      )
    ).flat();

    const postsEntries = postsQuery.map((s) =>
      createSitemapEntry(
        `/products/${s.slug?.current}`,
        0.8,
        s._updatedAt,
        "weekly"
      )
    );


    return [
      ...staticPages,
      ...servicesCategoriesEntries,
      ...servicesByCategoryEntries,
      ...productsCategoriesEntries,
      ...productsByCategoryEntries,
      ...postsEntries,
    ];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    // Return static pages if dynamic content fails
    return staticPages;
  }
}
