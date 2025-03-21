import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Card } from "@/components/global/card";
import Header from "@/components/global/header";
import {
  getCategories,
  getServiceCategoryBySlug,
  getServicesByCategory,
} from "@/sanity/lib/fetch";

type Props = {
  params: { category: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = await getServiceCategoryBySlug(params.category);

  return {
    title: `${category?.category} Services - Allied Gulf Construction`,
    description: category?.description,
    openGraph: {
      title: `${category?.category} Services - Allied Gulf Construction`,
      description: category?.description ?? "",
    },
  };
}

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((category) => ({
    category: category.slug?.current,
  }));
}

export default async function ServicesByCategoryPage({ params }: Props) {
  try {
    const services = await getServicesByCategory(params.category);
    const category = await getServiceCategoryBySlug(params.category);

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
              link={`/services/${params.category}/${service.servicesSlug?.current}`}
              priority={true}
            />
          ))}
        </section>
      </div>
    );
  } catch (error) {
    return notFound();
  }
}
