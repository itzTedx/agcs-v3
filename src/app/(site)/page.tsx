import Link from "next/link";

import { Card } from "@/components/global/card";
import { Button } from "@/components/ui/button";
import { Header } from "@/features/home/components/header";
import { About } from "@/features/home/sections/about";
import { Hero } from "@/features/home/sections/hero";
import { getHomeServices } from "@/sanity/lib/fetch";

export default async function Home() {
  const services = await getHomeServices();
  return (
    <main>
      <Hero />
      <About />
      <Header>Services</Header>
      <section className="container grid grid-cols-3 gap-6 py-12">
        {services.map((service) => (
          <Card
            key={service._id}
            title={service.servicesTitle}
            image={service.thumbnail}
            alt={service.metaTagTitle}
          />
        ))}
        <Button asChild className="col-start-2">
          <Link href="/">View More</Link>
        </Button>
      </section>
    </main>
  );
}
