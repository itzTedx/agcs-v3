import { Metadata } from "next";
import { Suspense } from "react";

import { Card } from "@/components/global/card";
import Header from "@/components/global/header";
import { getServicesCategories } from "@/sanity/lib/fetch";

export const metadata: Metadata = {
  title:
    "Construction & Engineering Services in Bahrain | Allied Gulf Construction",
  description:
    "Expert construction and engineering services in Bahrain and Middle East. Specialized in industrial, commercial, and residential projects with comprehensive lifecycle management.",
  keywords:
    "construction services Bahrain, engineering services Middle East, industrial construction, commercial construction, project lifecycle management",
  openGraph: {
    title:
      "Professional Construction & Engineering Services | Allied Gulf Construction",
    description:
      "Leading construction and engineering services provider in Bahrain and Middle East. Expert project management from planning to completion.",
    type: "website",
    locale: "en_US",
    siteName: "Allied Gulf Construction Services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction & Engineering Services | AGCS",
    description:
      "Expert construction and engineering services in Bahrain and Middle East",
  },
};

export default async function ServicesPage() {
  const text = {
    title: "Services we providing",
    subtext: "in Middle East",
  };

  const services = await getServicesCategories();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Allied Gulf Construction Services",
    description:
      "Professional construction and engineering services in Bahrain and Middle East",
    provider: {
      "@type": "Organization",
      name: "Allied Gulf Construction Services",
      areaServed: ["Bahrain", "Middle East"],
    },
    serviceType: services.map((service) => service.category),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header text={text} />
      <article className="container py-12">
        <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          <div className="sm:col-span-2 md:col-span-3">
            <p className="text-lg leading-relaxed font-light text-gray-900">
              Our comprehensive construction and engineering services are
              offered throughout the complete lifecycle of each project. With
              extensive experience in the Middle East, we excel in managing
              multiple developments simultaneously, from initial planning
              through to final installation and completion.
            </p>
            <h2 className="mt-2 text-4xl font-light">
              <span className="font-medium text-sky-600">Services</span>{" "}
              Categories
            </h2>
          </div>
          <Suspense
            fallback={
              <div aria-label="Loading services">Loading services...</div>
            }
          >
            {services.map((service, i) => (
              <Card
                title={service.category}
                alt={`${service.category} services category`}
                image={service.image}
                key={service._id}
                link={`/services/${service.slug?.current}`}
                date={service._createdAt}
                priority={i < 8}
                description={service.description}
              />
            ))}
          </Suspense>
        </section>
      </article>
    </main>
  );
}
