import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { IconArrowLeft } from "@tabler/icons-react";

import Breadcrumb from "@/features/products/components/breadcrumb";
import { ImagePreview } from "@/features/products/components/image-preview";
import { getServiceBySlug, getServicesCategories } from "@/sanity/lib/fetch";

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
    openGraph: {
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

    return (
      <>
        <Breadcrumb
          segments={[
            { title: "Services", href: "/services" },
            { title: params.category, href: `/services/${params.category}` },
            { title: service.servicesTitle! },
          ]}
        />
        <div className="container grid gap-6 pb-12 md:grid-cols-5">
          <ImagePreview
            data={service?.servicesImage}
            alt={service?.servicesTitle}
          />

          <div className="md:col-span-2 md:px-6">
            <Link
              href={`/services/${params.category}`}
              className="hidden items-center gap-1 text-sm md:flex"
            >
              <IconArrowLeft className="size-4" />
              Back to services
            </Link>
            <h1 className="text-4xl font-bold md:pt-4">
              {service?.servicesTitle}
            </h1>
            <p className="pt-3 text-lg font-light">
              {service?.servicesDescription}
            </p>
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error("Error loading service:", error);
    return notFound();
  }
}
