import Link from "next/link";
import { notFound } from "next/navigation";

import { Card } from "@/components/global/card";
import Header from "@/components/global/header";
import { Button } from "@/components/ui/button";
import {
  getCategories,
  getProductCategoryBySlug,
  getProductsBySlug,
} from "@/sanity/lib/fetch";

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

      <section className="relative container grid grid-cols-4 gap-12">
        <aside className="sticky top-12 h-fit py-12">
          <p className="font-light">Looking for our other</p>
          <h2 className="mb-3 text-2xl">Products</h2>
          <ul className="space-y-3">
            {categories.map((cat) => (
              <li key={cat._id}>
                <Button
                  className="bg-primary/10 w-full justify-start border-sky-300 shadow-none"
                  asChild
                >
                  <Link href={`/products/${cat.slug?.current}`}>
                    {cat.category}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </aside>
        <div className="col-span-3 grid grid-cols-3 gap-6 py-12">
          <div className="col-span-3">
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
