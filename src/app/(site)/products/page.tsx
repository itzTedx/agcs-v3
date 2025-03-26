import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Card } from "@/components/global/card";
import Header from "@/components/global/header";
import Breadcrumb from "@/features/products/components/breadcrumb";
import { getCategories } from "@/sanity/lib/fetch";

export const metadata: Metadata = {
  title:
    "Construction Products & Materials Categories | Allied Gulf Construction Services",
  description:
    "Explore our comprehensive range of specialty construction materials, building supplies, and industrial products. Quality construction materials for contractors and builders in Gulf region.",
  keywords:
    "construction materials, building supplies, construction products, specialty materials, Gulf construction supplies",
  openGraph: {
    title: "Construction Products & Materials | AGCS",
    description:
      "Premium construction materials and building supplies for professional contractors.",
    type: "website",
    locale: "en_US",
    siteName: "Allied Gulf Construction Services",
  },
};

export default async function ProductsPage() {
  const text = {
    title: "Get the best products at",
    subtext: "Allied Gulf Construction Services W.L.L",
  };
  const products = await getCategories();

  if (!products || products.length === 0) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.category,
      url: `/products/${product.slug?.current}`,
    })),
  };

  return (
    <main role="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header text={text} />
      <section className="container py-12" aria-label="Product Categories">
        <Breadcrumb segments={[{ title: "Products" }]} />
        <div className="pb-4 sm:col-span-2 md:col-span-3">
          <p className="text-muted-foreground font-light" role="doc-subtitle">
            Looking for Specialty Materials?
          </p>
          <h2 className="text-4xl font-light">
            <span className="font-medium text-sky-600">Products</span>{" "}
            Categories
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          {products.map((product, i) => (
            <Card
              title={product.category}
              alt={`${product.category} - Construction Materials Category`}
              image={product.image}
              key={product._id}
              link={`/products/${product.slug?.current}`}
              priority={i < 3}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
