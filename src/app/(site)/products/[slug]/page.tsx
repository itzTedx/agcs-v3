import { notFound } from "next/navigation";

import { Card } from "@/components/global/card";
import Header from "@/components/global/header";
import { Sidebar } from "@/features/products/components/sidebar";
import {
  getCategories,
  getProductCategoryBySlug,
  getProductsBySlug,
} from "@/sanity/lib/fetch";

interface ProductPageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = await getProductCategoryBySlug(slug);

  return {
    title: `${category?.category || "Products"} | AGCS`,
    description:
      category?.description || "Browse our wide range of construction products",
    openGraph: {
      title: `${category?.category || "Products"} | AGCS`,
      description:
        category?.description ||
        "Browse our wide range of construction products",
    },
  };
}

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
  const { slug } = await params;
  try {
    const [products, category, categories] = await Promise.all([
      getProductsBySlug(slug),
      getProductCategoryBySlug(slug),
      getCategories(),
    ]);

    if (!products || products.length === 0) return notFound();

    const text = {
      title: "Get the best products at",
      subtext: "Allied Gulf Construction Services W.L.L",
    };

    return (
      <div>
        <Header text={text} />
        <section className="relative container grid gap-12 lg:grid-cols-4">
          <Sidebar data={categories} />
          <div className="grid gap-6 pt-12 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3 lg:py-12">
            <div className="md:col-span-3">
              <h1 className="text-4xl font-medium text-sky-600">
                {category?.category}
              </h1>
              {category?.description && (
                <p className="text-lg font-light text-gray-900">
                  {category.description}
                </p>
              )}
            </div>
            {products.map((product, index) => (
              <Card
                className="aspect-square"
                title={product.title}
                alt={product.title}
                image={product.thumbnail}
                key={product._id}
                link={`/products/${slug}/${product.slug?.current}`}
                priority={index < 3} // Prioritize loading first 3 images
              />
            ))}
          </div>
        </section>
      </div>
    );
  } catch (error) {
    console.error("Error loading products:", error);
    return notFound();
  }
}
