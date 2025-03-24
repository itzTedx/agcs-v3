import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { IconArrowLeft } from "@tabler/icons-react";

import { Card } from "@/components/global/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Breadcrumb from "@/features/products/components/breadcrumb";
import { ImagePreview } from "@/features/products/components/image-preview";
import { getServiceBySlug, getServicesCategories } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";

export async function generateStaticParams() {
  const categories = await getServicesCategories();

  return categories.map(async (category) => {
    const service = await getServiceBySlug(category.slug?.current!);

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

export const revalidate = 3600; // Revalidate every hour

export default async function ServicePage({
  params,
}: {
  params: Promise<{ category: string; service: string }>;
}) {
  const { category: categoryQuery, service: query } = await params;

  const service = await getServiceBySlug(query);

  console.log("Services: ", service);

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
      <Breadcrumb
        segments={[
          { title: "Services", href: "/services" },
          { title: categoryQuery, href: `/services/${categoryQuery}` },
          { title: service.servicesTitle! },
        ]}
      />
      <div className="container grid gap-6 pb-12 md:grid-cols-5">
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
            <p className="pt-3 text-lg font-light">
              {service?.servicesDescription}
            </p>
          </section>
        </article>
      </div>
      {service.products && service.products.length !== 0 && (
        <section className="container">
          <h3>Related Products for {service?.servicesTitle}</h3>

          <Carousel className="w-full">
            <CarouselContent className="-ml-6">
              {service.products.map((product, i) => (
                <CarouselItem
                  key={i}
                  className="pl-6 md:basis-1/3 lg:basis-1/4"
                >
                  <div key={product.slug?.current}>
                    <Card
                      className="aspect-square"
                      title={product.title!}
                      alt={product.title!}
                      image={product.thumbnail}
                      key={product._id}
                      link={`/products/${slug}/${product.slug?.current}`}
                      priority={i < 3} // Prioritize loading first 3 images
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
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
  const { category: categoryQuery, service: serviceQuery } = params;
  const service = await getServiceBySlug(serviceQuery);

  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.servicesTitle} | AGCS Services`,
    description: service.servicesDescription,
    keywords: [
      `${service.servicesTitle}`,
      "AGCS services",
      categoryQuery,
      service.metaTagKeyword!,
    ],
    openGraph: {
      title: service.servicesTitle!,
      description: service.servicesDescription!,
      type: "article",
      publishedTime: new Date().toISOString(),
      authors: ["AGCS"],
    },
    twitter: {
      card: "summary_large_image",
      title: service.servicesTitle!,
      description: service.servicesDescription!,
    },
  };
}
