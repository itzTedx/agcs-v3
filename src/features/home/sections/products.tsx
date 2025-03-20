import Link from "next/link";
import { memo } from "react";

import { Card } from "@/components/global/card";
import { Button } from "@/components/ui/button";
import { getHomeProducts } from "@/sanity/lib/fetch";

import { Header } from "../components/header";

const ProductCard = memo(({ product }: { product: any }) => (
  <div
    className="max-lg:last-of-type:hidden max-sm:last-of-type:block"
    key={product._id}
  >
    <Card
      title={product.category}
      image={product.image}
      alt={product.category}
      link={`/products/${product.slug?.current}`}
    />
  </div>
));
ProductCard.displayName = "ProductCard";

export const Products = async () => {
  const products = await getHomeProducts();
  return (
    <section
      aria-label="Product Categories"
      title="Our Product Categories"
      className="py-16"
    >
      <Header>Products</Header>
      <div className="container grid grid-cols-1 gap-4 py-12 sm:grid-cols-2 sm:gap-3 md:gap-6 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
        <Button
          asChild
          className="sm:col-span-2 lg:col-span-1 lg:col-start-2"
          aria-label="View more products"
        >
          <Link href="/products">View More</Link>
        </Button>
      </div>
    </section>
  );
};
