import { Card } from "@/components/global/card";
import Header from "@/components/global/header";
import { getServicesCategories } from "@/sanity/lib/fetch";

export default async function ServicesPage() {
  const text = {
    title: "Services we providing",
    subtext: "in Middle East",
  };

  const services = await getServicesCategories();
  return (
    <div>
      <Header text={text} />
      <section className="container grid gap-4 py-12 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
        <div className="sm:col-span-2 md:col-span-3">
          <p className="font-light text-gray-900">
            Our services are offered through the lifecycle of each project.
            We’re proficient in handling multiple developments simultaneously,
            from initial planning through the final installments.
          </p>
          <h2 className="text-4xl font-light">
            <span className="font-medium text-sky-600">Services</span>{" "}
            Categories
          </h2>
        </div>
        {services.map((service) => (
          <Card
            title={service.category}
            alt={service.category}
            image={service.image}
            key={service._id}
            link={`/services/${service.slug?.current}`}
          />
        ))}
      </section>
    </div>
  );
}
