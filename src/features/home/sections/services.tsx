import Link from "next/link";

import { Card } from "@/components/global/card";
import { Button } from "@/components/ui/button";
import { getHomeServices } from "@/sanity/lib/fetch";

export const Services = async () => {
  const services = await getHomeServices();
  return (
    <section className="container grid grid-cols-1 gap-4 py-12 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <div
          className="max-lg:last-of-type:hidden max-sm:last-of-type:block"
          key={service._id}
        >
          <Card
            title={service.servicesTitle}
            image={service.thumbnail}
            alt={service.metaTagTitle}
          />
        </div>
      ))}
      <Button asChild className="md:col-span-2 lg:col-span-1 lg:col-start-2">
        <Link href="/">View More</Link>
      </Button>
    </section>
  );
};
