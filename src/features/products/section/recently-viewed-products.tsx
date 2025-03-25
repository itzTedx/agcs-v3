"use client";

import { useEffect, useState } from "react";

import { RelatedProducts } from "@/features/services/components/related-products";
import { useRecentlyViewed } from "@/hooks/use-recently-viewed";
import { getRecentlyViewedProducts } from "@/sanity/lib/fetch";

export function RecentlyViewedProducts({
  productId,
  category,
}: {
  productId: string;
  category: string;
}) {
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

  return (
    <section className="container py-12">
      <h2 className="pb-3 text-2xl text-sky-800">Recently Viewed</h2>

      <RelatedProducts category={category} products={products} />
    </section>
  );
}
