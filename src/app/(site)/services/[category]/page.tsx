import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Card } from "@/components/global/card";
import { Cta } from "@/components/global/cta";
import Header from "@/components/global/header";
import Breadcrumb from "@/features/products/components/breadcrumb";
import {
  getCategories,
  getServiceCategoryBySlug,
  getServicesByCategory,
} from "@/sanity/lib/fetch";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: query } = await params;

  const category = await getServiceCategoryBySlug(query);
  const categoryName = category?.category || "";
  const description = category?.description || "";

  return {
    title: `${categoryName} Services - Allied Gulf Construction`,
    description: description,
    keywords: `${categoryName.toLowerCase()} services, construction services, allied gulf construction, bahrain construction, ${categoryName.toLowerCase()}`,
    openGraph: {
      title: `${categoryName} Services - Allied Gulf Construction`,
      description: description,
      type: "website",
      locale: "en_US",
      siteName: "Allied Gulf Construction",
    },
    twitter: {
      card: "summary_large_image",
      title: `${categoryName} Services - Allied Gulf Construction`,
      description: description,
    },
    alternates: {
      canonical: `https://alliedgulfconstruction.com/services/${query}`,
    },
  };
}

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((category) => ({
    category: category.slug?.current,
  }));
}

export const revalidate = 1800; // Revalidate every half hour

export default async function ServicesByCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: query } = await params;

  const services = await getServicesByCategory(query);
  const category = await getServiceCategoryBySlug(query);

  if (!services || services.length === 0) return notFound();

  const text = {
    title: "Get the best services at",
    subtext: "Allied Gulf Construction Services W.L.L",
  };

  // Create JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${category?.category} Services`,
    description: category?.description,
    itemListElement: services.map((service, index) => ({
      "@type": "Service",
      position: index + 1,
      name: service.servicesTitle,
      url: `https://alliedgulf.me/services/${query}/${service.servicesSlug?.current}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Header text={text} />
        <section className="container grid gap-4 pb-12 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          <Breadcrumb
            segments={[
              { title: "Services", href: "/services" },
              {
                title: category?.category || "Services",
              },
            ]}
          />
          <div className="sm:col-span-2 md:col-span-3">
            <h1 className="text-4xl font-medium text-sky-600">
              {category?.category} Services
            </h1>
            <p className="text-muted-foreground text-lg font-light">
              {category?.description}
            </p>
          </div>
          {services.map((service) => (
            <Card
              className="aspect-video"
              title={service.servicesTitle}
              image={service.thumbnail}
              key={service._id}
              link={`/services/${query}/${service.servicesSlug?.current}`}
              priority={true}
            />
          ))}
        </section>
        <Cta />
      </main>
    </>
  );
}
