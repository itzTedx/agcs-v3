import Link from "next/link";
import { notFound } from "next/navigation";

import { PortableText } from "@portabletext/react";

import Breadcrumb from "@/features/products/components/breadcrumb";
import { ImagePreview } from "@/features/products/components/image-preview";
import { getProduct } from "@/sanity/lib/fetch";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ product: string; slug: string }>;
}) {
  const parm = await params;
  const product = await getProduct(parm.product);

  if (!product) return notFound();

  return (
    <>
      <Breadcrumb />
      <div className="container grid grid-cols-5 gap-6 pb-12">
        <ImagePreview data={product?.image} alt={product?.title} />

        <div className="col-span-2 px-6">
          <Link href={`/products/${parm.slug}`}>Back to Products</Link>
          <h1 className="pt-4 text-4xl font-bold">{product?.title}</h1>
          <p className="pt-3 text-lg font-light">{product?.description}</p>
          <div className="pt-6">
            <PortableText value={product?.body!} />
          </div>
        </div>
      </div>
    </>
  );
}
