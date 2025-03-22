import dynamic from "next/dynamic";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { IconArrowLeft } from "@tabler/icons-react";

import { Card } from "@/components/global/card";
import ExpandableCard from "@/components/layout/expandable-card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Breadcrumb from "@/features/products/components/breadcrumb";
import { RecentlyViewedProducts } from "@/features/products/components/recently-viewed-products";
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

interface ProductPageProps {
  params: {
    product: string;
    slug: string;
  };
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

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string; product: string }>;
}) {
  const { slug, product: query } = await params;
  const product = await getProductBySlug(query);
  const relatedProducts = await getProductsBySlug(slug);

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

        <div className="md:col-span-2 md:px-6">
          <div className="relative">
            <div className="bg-background sticky top-12 z-10 pt-6">
              <Link
                href={`/products/${slug}`}
                className="hidden items-center gap-1 text-sm md:flex"
              >
                <IconArrowLeft className="size-4" />
                Back to Products
              </Link>
              <h1 className="text-4xl font-bold md:pt-4">{product.title}</h1>
              <p className="py-3 text-lg font-light">{product.description}</p>
            </div>
            <ExpandableCard className="py-6">
              <PortableText value={product.body!} />
            </ExpandableCard>
          </div>
          <Button asChild size="lg">
            <Link href="/">Order Now</Link>
          </Button>
        </div>
      </section>
      <section className="container py-12">
        <h2 className="pb-3 text-2xl">Products related to {product.title}</h2>

        <Carousel className="w-full">
          <CarouselContent className="-ml-6">
            {relatedProducts.map((product, i) => (
              <CarouselItem key={i} className="pl-6 md:basis-1/3 lg:basis-1/4">
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

      <RecentlyViewedProducts productId={product._id} />
    </>
  );
}
