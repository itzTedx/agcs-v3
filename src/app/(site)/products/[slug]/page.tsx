import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { Card } from "@/components/global/card";
import Header from "@/components/global/header";
import {
  CardSkeleton,
  SidebarSkeleton,
} from "@/features/products/components/loading-skeletons";
import { Sidebar } from "@/features/products/components/sidebar";
import {
  getCategories,
  getProductCategoryBySlug,
  getProductsBySlug,
} from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";

export default async function ProductsBySlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.title,
        description: product.description,
        image: product.thumbnail && urlFor(product.thumbnail).url,
        url: `/products/${slug}/${product.slug?.current}`,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div>
        <Header text={text} />
        <main className="relative container grid gap-12 lg:grid-cols-4">
          <Suspense fallback={<SidebarSkeleton />}>
            <Sidebar data={categories} />
          </Suspense>
          <Suspense fallback={<CardSkeleton />}>
            <div className="grid gap-6 pt-12 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3 lg:py-12">
              <div className="md:col-span-3">
                <h1 className="text-4xl font-medium text-sky-600">
                  {category?.category}
                </h1>
                {category?.description && (
                  <p className="text-muted-foreground text-lg font-light">
                    {category.description}
                  </p>
                )}
              </div>
              {products.map((product, index) => (
                <Card
                  className="aspect-square"
                  title={product.title}
                  alt={`${product.title} - Construction Product by AGCS`}
                  image={product.thumbnail}
                  key={product._id}
                  link={`/products/${slug}/${product.slug?.current}`}
                  priority={index < 3}
                />
              ))}
            </div>
          </Suspense>
        </main>
      </div>
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = await getProductCategoryBySlug(slug);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://alliedgulf.me";

  return {
    title: `${category?.category || "Products"} | AGCS`,
    description:
      category?.description || "Browse our wide range of construction products",
    keywords: `${category?.category}, construction products, AGCS, building materials, `,
    robots: "index, follow",
    alternates: {
      canonical: `${baseUrl}/products/${slug}`,
    },
    openGraph: {
      title: `${category?.category || "Products"} | AGCS`,
      description:
        category?.description ||
        "Browse our wide range of construction products",
      type: "website",
      url: `${baseUrl}/products/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((category) => ({
    slug: category.slug?.current,
  }));
}
