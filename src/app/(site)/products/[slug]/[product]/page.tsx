import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PortableText } from "@portabletext/react";
import { IconArrowLeft } from "@tabler/icons-react";

import Breadcrumb from "@/features/products/components/breadcrumb";
import { ImagePreview } from "@/features/products/components/image-preview";
import {
  getCategories,
  getProductBySlug,
  getProductsBySlug,
} from "@/sanity/lib/fetch";

interface ProductPageProps {
  params: {
    product: string;
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = await getProductBySlug(params.product);

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

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductBySlug(params.product);

  if (!product) return notFound();

  return (
    <>
      <Breadcrumb
        segments={[
          { title: "Products", href: "/products" },
          { title: params.slug, href: `/products/${params.slug}` },
          { title: product.title! },
        ]}
      />
      <div className="container grid gap-6 pb-12 md:grid-cols-5">
        <ImagePreview data={product.image} alt={product.title} />

        <div className="md:col-span-2 md:px-6">
          <Link
            href={`/products/${params.slug}`}
            className="hidden items-center gap-1 text-sm md:flex"
          >
            <IconArrowLeft className="size-4" />
            Back to Products
          </Link>
          <h1 className="text-4xl font-bold md:pt-4">{product.title}</h1>
          <p className="pt-3 text-lg font-light">{product.description}</p>
          <div className="pt-6">
            <PortableText value={product.body!} />
          </div>
        </div>
      </div>
    </>
  );
}
