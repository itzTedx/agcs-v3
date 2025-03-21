import { Metadata } from "next";
import { Suspense } from "react";

import { Card } from "@/components/global/card";
import Header from "@/components/global/header";
import { getServicesCategories } from "@/sanity/lib/fetch";

export const metadata: Metadata = {
  title: "Services we providing in Bahrain | Allied Gulf Construction Services",
  description:
    "Explore our comprehensive range of services offered throughout the project lifecycle. From planning to final installation, we handle multiple developments with expertise.",
  openGraph: {
    title: "Our Services | Allied Gulf Construction Services",
    description: "Comprehensive project services from planning to completion",
    type: "website",
  },
};

export default async function ServicesPage() {
  const text = {
    title: "Services we providing",
    subtext: "in Middle East",
  };

  const services = await getServicesCategories();

  return (
    <div>
      <Header text={text} />
      <article className="container py-12">
        <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          <div className="sm:col-span-2 md:col-span-3">
            <p className="font-light text-gray-900">
              Our services are offered through the lifecycle of each project.
              We're proficient in handling multiple developments simultaneously,
              from initial planning through the final installments.
            </p>
            <h2 className="text-4xl font-light">
              <span className="font-medium text-sky-600">Services</span>{" "}
              Categories
            </h2>
          </div>
          <Suspense fallback={<div>Loading services...</div>}>
            {services.map((service) => (
              <Card
                title={service.category}
                alt={`${service.category} services category`}
                image={service.image}
                key={service._id}
                link={`/services/${service.slug?.current}`}
              />
            ))}
          </Suspense>
        </section>
      </article>
    </div>
  );
}
