"use client";

import { useEffect, useState } from "react";

import { Card } from "@/components/global/card";
import { useRecentlyViewed } from "@/hooks/use-recently-viewed";
import { getRecentlyViewedProducts } from "@/sanity/lib/fetch";

export function RecentlyViewedProducts({ productId }: { productId: string }) {
  const { recentIds, addToRecentlyViewed } = useRecentlyViewed();
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    addToRecentlyViewed(productId);
  }, [productId]);

  useEffect(() => {
    if (recentIds.length > 0) {
      getRecentlyViewedProducts(recentIds)
        .then(setProducts)
        .catch(console.error);
    }
  }, [recentIds]);

  if (!products?.length) return null;

  console.log("Products: ", products);

  return (
    <section className="container py-12">
      <h2 className="pb-3 text-2xl">Recently Viewed</h2>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {products.map((product) => (
          <Card
            key={product._id}
            className="aspect-square"
            title={product.title}
            alt={product.title}
            image={product.thumbnail}
            link={`/products/${product.categorySlug}/${product.slug?.current}`}
          />
        ))}
      </div>
    </section>
  );
}
