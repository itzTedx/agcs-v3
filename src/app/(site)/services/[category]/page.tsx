import { notFound } from "next/navigation";

import { Card } from "@/components/global/card";
import Header from "@/components/global/header";
import {
  getCategories,
  getServiceCategoryBySlug,
  getServicesByCategory,
} from "@/sanity/lib/fetch";

export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map((category) => ({
    slug: category.slug?.current,
  }));
}
export default async function ServicesByCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const param = await params;
  const services = await getServicesByCategory(param.category);
  const category = await getServiceCategoryBySlug(param.category);

  if (!services || services.length === 0) return notFound();

  const text = {
    title: "Get the best services at",
    subtext: "Allied Gulf Construction Services W.L.L",
  };

  return (
    <div>
      <Header text={text} />

      <section className="container grid gap-4 py-12 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
        <div className="sm:col-span-2 md:col-span-3">
          <h2 className="text-4xl font-medium text-sky-600">
            {category?.category}
          </h2>
          <p className="text-lg font-light text-gray-900">
            {category?.description}
          </p>
        </div>
        {services.map((service) => (
          <Card
            className="aspect-video"
            title={service.servicesTitle}
            image={service.thumbnail}
            key={service._id}
            link={`/services/${param.category}/${service.servicesSlug!?.current}`}
          />
        ))}
      </section>
    </div>
  );
}
