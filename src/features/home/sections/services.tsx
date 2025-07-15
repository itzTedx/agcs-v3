import Link from "next/link";
import { Suspense } from "react";

import { Card } from "@/components/global/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getHomeServices } from "@/sanity/lib/fetch";

import { Header } from "../components/header";

const ServicesSkeleton = () => {
  return (
    <>
      {[1, 2, 3].map((i) => (
        <div key={i} className="space-y-3">
          <Skeleton className="h-[200px] w-full rounded-xl" />
          <Skeleton className="h-4 w-[250px]" />
        </div>
      ))}
    </>
  );
};

export const Services = async () => {
  const services = await getHomeServices();
  return (
    <section aria-labelledby="services-title">
      <Header id="services-title">Services</Header>
      <div className="container grid gap-4 py-12 sm:gap-12">
        <Suspense fallback={<ServicesSkeleton />}>
          {services.map((service) => (
            <div key={service._id}>
              <div className="grid grid-cols-1 items-center justify-center gap-1 pb-4 md:grid-cols-2 md:gap-3">
                <h3 className="text-primary-foreground text-3xl font-medium">
                  <Link href={`/services/${service.slug?.current}/`}>
                    {service.category}
                  </Link>
                </h3>
                <p className="text-sm font-light">{service.description}</p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                {service.relatedServices.map((item) => (
                  <Card
                    key={item._id}
                    title={item.servicesTitle}
                    image={item.thumbnail}
                    alt={`${service.category} Services - Allied gulf construction services`}
                    link={`/services/${service.slug?.current}/${item.servicesSlug?.current}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </Suspense>
        <h4 className="sr-only">
          Explore our services more in the services section
        </h4>
      </div>
      <div className="container grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Button
          asChild
          className="md:col-span-2 lg:col-span-1 lg:col-start-2"
          aria-label="View all services"
        >
          <Link href="/services">View More Services</Link>
        </Button>
      </div>
    </section>
  );
};
