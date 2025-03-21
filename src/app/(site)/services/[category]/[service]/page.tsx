import Link from "next/link";
import { notFound } from "next/navigation";

import { IconArrowLeft } from "@tabler/icons-react";

import Breadcrumb from "@/features/products/components/breadcrumb";
import { ImagePreview } from "@/features/products/components/image-preview";
import { getServiceBySlug } from "@/sanity/lib/fetch";

// export async function generateStaticParams() {
//   const categories = await getCategories();

//   return categories.map(async (category) => {
//     const products = await getServiceBySlug(category.slug?.current!);

//     return products.map((product) => ({
//       slug: category.slug?.current,
//       product: product.slug?.current,
//     }));
//   });
// }

export default async function ServicePage({
  params,
}: {
  params: Promise<{ category: string; service: string }>;
}) {
  const parm = await params;
  const service = await getServiceBySlug(parm.service);

  console.log("Service: ", service);

  if (!service) return notFound();

  return (
    <>
      <Breadcrumb
        segments={[
          { title: "Services", href: "/services" },
          { title: parm.service, href: `/services/${parm.service}` },
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
            href={`/services/${parm.category}`}
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
}
