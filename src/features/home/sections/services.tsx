import { Suspense } from "react";

import { Route } from "next";
import Link from "next/link";

import { Card } from "@/components/global/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import { getHomeServices } from "@/sanity/lib/fetch";

import { Header } from "../components/header";

const ServicesSkeleton = () => {
	return (
		<>
			{[1, 2, 3].map((i) => (
				<div className="space-y-3" key={i}>
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
								<h3 className="font-medium text-3xl text-primary-foreground">
									<Link href={`/services/${service.slug?.current}/`}>
										{service.category}
									</Link>
								</h3>
								<p className="font-light text-sm">{service.description}</p>
							</div>
							<div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
								{service.relatedServices.map((item) => (
									<Card
										alt={`${service.category} Services - Allied gulf construction services`}
										image={item.thumbnail}
										key={item._id}
										link={
											`/services/${service.slug?.current}/${item.servicesSlug?.current}` as Route
										}
										title={item.servicesTitle}
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
					aria-label="View all services"
					asChild
					className="md:col-span-2 lg:col-span-1 lg:col-start-2"
				>
					<Link href="/services">View More Services</Link>
				</Button>
			</div>
		</section>
	);
};
