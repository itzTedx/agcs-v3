"use client";

import { useEffect, useState } from "react";

import { Card } from "@/components/global/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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

  if (products.length > 4)
    return (
      <section className="container py-12">
        <h2 className="pb-3 text-2xl text-sky-800">Recently Viewed</h2>

        <Carousel className="w-full">
          <CarouselContent className="-ml-6">
            {products.map((product) => (
              <CarouselItem
                key={product._id}
                className="pl-6 md:basis-1/3 lg:basis-1/4"
              >
                <Card
                  className="aspect-square"
                  title={product.title}
                  alt={product.title}
                  image={product.thumbnail}
                  link={`/products/${category}/${product.slug?.current}`}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    );

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
            link={`/products/${category}/${product.slug?.current}`}
          />
        ))}
      </div>
    </section>
  );
}
