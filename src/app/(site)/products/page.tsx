import { Card } from "@/components/global/card";
import Header from "@/components/global/header";
import { getCategories } from "@/sanity/lib/fetch";

export default async function ProductsPage() {
  const text = {
    title: "Get the best products at",
    subtext: "Allied Gulf Construction Services W.L.L",
  };
  const products = await getCategories();
  return (
    <div>
      <Header text={text} />
      <section className="container grid gap-4 py-12 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
        <div className="sm:col-span-2 md:col-span-3">
          <p className="font-light text-gray-900">
            Looking for Specialty Materials?
          </p>
          <h2 className="text-4xl font-light">
            <span className="font-medium text-sky-600">Products</span>{" "}
            Categories
          </h2>
        </div>
        {products.map((product) => (
          <Card
            title={product.category}
            alt={product.category}
            image={product.image}
            key={product._id}
            link={`/products/${product.slug?.current}`}
          />
        ))}
      </section>
    </div>
  );
}
