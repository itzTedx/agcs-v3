import Link from "next/link";

import { Card } from "@/components/global/card";
import { Button } from "@/components/ui/button";
import { getHomeProducts } from "@/sanity/lib/fetch";

export const Products = async () => {
  const products = await getHomeProducts();
  return (
    <section className="container grid grid-cols-3 gap-6 py-12">
      {products.map((product) => (
        <Card
          key={product._id}
          title={product.category}
          image={product.image}
          alt={product.category}
        />
      ))}
      <Button asChild className="col-start-2">
        <Link href="/">View More</Link>
      </Button>
    </section>
  );
};
