import { notFound } from "next/navigation";

import { Card } from "@/components/global/card";
import Header from "@/components/global/header";
import { Sidebar } from "@/features/products/components/sidebar";
import {
  getCategories,
  getProductCategoryBySlug,
  getProductsBySlug,
} from "@/sanity/lib/fetch";

export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map((category) => ({
    slug: category.slug?.current,
  }));
}
export default async function ProductsBySlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const param = await params;
  const products = await getProductsBySlug(param.slug);
  const category = await getProductCategoryBySlug(param.slug);
  const categories = await getCategories();

  if (!products || products.length === 0) return notFound();

  const text = {
    title: "Get the best products at",
    subtext: "Allied Gulf Construction Services W.L.L",
  };

  return (
    <div>
      <Header text={text} />

      <section className="relative container grid gap-12 md:grid-cols-4">
        <Sidebar data={categories} />
        <div className="grid gap-6 pt-12 sm:grid-cols-2 md:col-span-3 md:grid-cols-3 md:py-12">
          <div className="md:col-span-3">
            <h2 className="text-4xl font-medium text-sky-600">
              {category?.category}
            </h2>
            <p className="text-lg font-light text-gray-900">
              {category?.description}
            </p>
          </div>
          {products.map((product) => (
            <Card
              className="aspect-square"
              title={product.title}
              alt={product.title}
              image={product.thumbnail}
              key={product._id}
              link={`/products/${param.slug}/${product.slug?.current}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
