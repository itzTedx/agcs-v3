import Link from "next/link";

import { Card } from "@/components/global/card";
import { Button } from "@/components/ui/button";
import { getHomeProducts } from "@/sanity/lib/fetch";

export const Products = async () => {
  const products = await getHomeProducts();
  return (
    <section className="container grid grid-cols-1 gap-4 py-12 sm:grid-cols-2 sm:gap-3 md:gap-6 lg:grid-cols-3">
      {products.map((product) => (
        <div
          className="max-lg:last-of-type:hidden max-sm:last-of-type:block"
          key={product._id}
        >
          <Card
            title={product.category}
            image={product.image}
            alt={product.category}
          />
        </div>
      ))}
      <Button asChild className="sm:col-span-2 lg:col-span-1 lg:col-start-2">
        <Link href="/">View More</Link>
      </Button>
    </section>
  );
};
