import dynamic from "next/dynamic";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { IconArrowLeft } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import Breadcrumb from "@/features/products/components/breadcrumb";
import { RecentlyViewedProducts } from "@/features/products/section/recently-viewed-products";
import { RelatedProducts } from "@/features/products/section/related-products";
import {
  getCategories,
  getProductBySlug,
  getProductsBySlug,
} from "@/sanity/lib/fetch";

const ImagePreview = dynamic(() =>
  import("@/features/products/components/image-preview").then(
    (mod) => mod.ImagePreview
  )
);

const PortableText = dynamic(() =>
  import("@portabletext/react").then((mod) => mod.PortableText)
);

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string; product: string }>;
}) {
  const { slug, product: query } = await params;
  const product = await getProductBySlug(query);

  if (!product) return notFound();

  return (
    <>
      <Breadcrumb
        segments={[
          { title: "Products", href: "/products" },
          { title: slug, href: `/products/${slug}` },
          { title: product.title! },
        ]}
      />
      <section className="relative container grid gap-6 pb-12 md:grid-cols-5">
        <Suspense
          fallback={
            <div className="bg-muted aspect-square w-full animate-pulse rounded-lg" />
          }
        >
          <ImagePreview data={product.image} alt={product.title} />
        </Suspense>

        <div className="md:col-span-2 md:p-6">
          <Link
            href={`/products/${slug}`}
            className="hidden items-center gap-1 text-sm md:flex"
          >
            <IconArrowLeft className="size-4" />
            Back to Products
          </Link>
          <h1 className="text-4xl font-bold md:pt-4">{product.title}</h1>
          <p className="py-3 text-lg font-light">{product.description}</p>

          <Button asChild size="lg">
            <Link href="/">Order Now</Link>
          </Button>

          <div className="prose py-6">
            <h2 className="text-sm text-gray-700">Description:</h2>
            <PortableText value={product.body!} />
          </div>
        </div>
      </section>

      <RelatedProducts slug={slug} />
      <RecentlyViewedProducts productId={product._id} category={slug} />
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; product: string }>;
}) {
  const { product: query } = await params;
  const product = await getProductBySlug(query);

  if (!product)
    return {
      title: "Product Not Found",
    };

  return {
    title: `${product.title} | AGCS Products`,
    description: product.description,
    openGraph: {
      title: `${product.title} | AGCS Products`,
      description:
        product.description || "Browse our wide range of construction products",
    },
  };
}

export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map(async (category) => {
    const products = await getProductsBySlug(category.slug?.current!);

    return products.map((product) => ({
      slug: category.slug?.current,
      product: product.slug?.current,
    }));
  });
}
