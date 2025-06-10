import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { IconArrowLeft } from "@tabler/icons-react";
import { PortableText } from "next-sanity";

import Breadcrumb from "@/features/products/components/breadcrumb";
import { ImagePreview } from "@/features/products/components/image-preview";
import { RelatedProducts } from "@/features/services/components/related-products";
import { getServiceBySlug, getServicesCategories } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";

export async function generateStaticParams() {
  const categories = await getServicesCategories();

  return categories
    .filter(
      (category): category is typeof category & { slug: { current: string } } =>
        Boolean(category.slug?.current)
    )
    .map(async (category) => {
      const service = await getServiceBySlug(category.slug.current);

      return service
        ? [
            {
              slug: category.slug?.current,
              service: service.servicesSlug?.current,
            },
          ]
        : [];
    });
}

export const revalidate = 1800; // Revalidate every half hour

export default async function ServicePage({
  params,
}: {
  params: Promise<{ category: string; service: string }>;
}) {
  const { category: categoryQuery, service: query } = await params;

  const service = await getServiceBySlug(query);
  console.log("services from sanity: ", service);

  if (!service) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.servicesTitle,
    description: service.servicesDescription,
    provider: {
      "@type": "Organization",
      name: "AGCS",
    },
    image: service.servicesImage && urlFor(service?.servicesImage).url,
    category: categoryQuery,
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container">
        <Breadcrumb
          segments={[
            { title: "Services", href: "/services" },
            {
              title: categoryQuery
                .replace(/-/g, " ")
                .replace(/\b\w/g, (char) => char.toUpperCase()),
              href: `/services/${categoryQuery}`,
            },
            { title: service.servicesTitle! },
          ]}
        />
        <div className="grid gap-6 pb-12 md:grid-cols-5">
          <figure className="md:col-span-3">
            <ImagePreview
              data={service?.servicesImage}
              alt={service?.servicesTitle}
            />
          </figure>

          <article className="md:col-span-2 md:px-6">
            <nav>
              <Link
                href={`/services/${categoryQuery}`}
                className="hidden items-center gap-1 text-sm md:flex"
                aria-label={`Back to ${categoryQuery} services`}
              >
                <IconArrowLeft className="size-4" />
                Back to services
              </Link>
            </nav>
            <header>
              <h1 className="text-4xl font-bold md:pt-4">
                {service?.servicesTitle}
              </h1>
            </header>
            <section className="service-description">
              <article className="prose dark:prose-invert py-6">
                {service.servicesDescription && (
                  <PortableText value={service.servicesDescription} />
                )}
              </article>
              {/* <p className="pt-3 text-lg font-light">
                {service?.servicesDescription}
              </p> */}
            </section>
          </article>
        </div>
      </div>
      {/* <pre className="text-wrap">{JSON.stringify(service, null, 2)}</pre> */}
      {service.relatedProducts && service.relatedProducts.length !== 0 && (
        <section className="container pt-12">
          <h3 className="pb-3 text-2xl text-sky-800">
            Related Products for {service?.servicesTitle}
          </h3>

          <RelatedProducts
            category={categoryQuery}
            products={service.relatedProducts.map((product) => ({
              ...product,
              category: product.category?.slug?.current || "",
              thumbnail: product.thumbnail?.asset?._ref || "",
              slug: product.slug
                ? { current: product.slug.current || "" }
                : undefined,
            }))}
          />
        </section>
      )}
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { category: string; service: string };
}): Promise<Metadata> {
  const { category: categoryQuery, service: serviceQuery } = await params;
  const service = await getServiceBySlug(serviceQuery);

  if (!service) return { title: "Service Not Found" };

  return {
    title: service.metaTagTitle
      ? `${service.metaTagTitle} - Allied Gulf`
      : `${service.servicesTitle} | AGCS Services`,
    description: service.metaTagDescription,
    keywords: [
      `${service.servicesTitle}`,
      "allied gulf",
      "bahrain",
      categoryQuery,
      ...(service.metaTagKeyword
        ? service.metaTagKeyword
            .split(/[,\n]+/)
            .map((keyword) => keyword.trim())
            .filter(Boolean)
        : []),
    ],
    openGraph: {
      title: service.servicesTitle!,
      description: service.metaTagDescription!,
      type: "article",
      publishedTime: new Date().toISOString(),
      authors: ["AGCS"],
    },
    twitter: {
      card: "summary_large_image",
      title: service.servicesTitle!,
      description: service.metaTagDescription!,
    },
  };
}
