import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { IconArrowLeft } from "@tabler/icons-react";

import Breadcrumb from "@/features/products/components/breadcrumb";
import { ImagePreview } from "@/features/products/components/image-preview";
import { getServiceBySlug, getServicesCategories } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";

export async function generateMetadata({
  params,
}: {
  params: { category: string; service: string };
}): Promise<Metadata> {
  const service = await getServiceBySlug(params.service);

  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.servicesTitle} | AGCS Services`,
    description: service.servicesDescription,
    keywords: [`${service.servicesTitle}`, "AGCS services", params.category],
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
  params: { category: string; service: string };
}) {
  try {
    const service = await getServiceBySlug(params.service);

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
      category: params.category,
    };

    return (
      <article>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Breadcrumb
          segments={[
            { title: "Services", href: "/services" },
            { title: params.category, href: `/services/${params.category}` },
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
                href={`/services/${params.category}`}
                className="hidden items-center gap-1 text-sm md:flex"
                aria-label={`Back to ${params.category} services`}
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
      </article>
    );
  } catch (error) {
    console.error("Error loading service:", error);
    return notFound();
  }
}
