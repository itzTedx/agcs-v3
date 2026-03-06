"use client";

import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

import { urlFor } from "@/sanity/lib/image";

import { FEATURED_PROJECTS_QUERYResult } from "../../../sanity.types";

export function FeaturedCarousel({
	data,
}: {
	data: FEATURED_PROJECTS_QUERYResult;
}) {
	return (
		<Carousel
			className="container w-full"
			plugins={[
				Autoplay({
					delay: 2000,
				}),
				WheelGesturesPlugin(),
			]}
		>
			<CarouselContent>
				{data.map((project) => (
					<CarouselItem key={project._id}>
						<div className="grid gap-4 p-1 md:grid-cols-2 md:gap-12">
							<Card className="p-0">
								<CardContent className="relative flex aspect-video items-center justify-center">
									{project.image && (
										<Image
											alt={project.title ?? "Certificate Image"}
											className="rounded-md"
											fill
											loading="lazy"
											quality={100}
											sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
											src={urlFor(project.image).url()}
											style={{
												objectFit: "cover",
											}}
											title={project.title ?? "Certificate"}
										/>
									)}
								</CardContent>
							</Card>
							<div>
								<Badge>Top Projects in Bahrain</Badge>
								<h2 className="py-3 text-2xl md:text-4xl">{project.title}</h2>
								<p className="font-light text-base">{project.description}</p>
								<div className="flex flex-wrap gap-2 py-4">
									{project.tags?.map((tag) => (
										<Badge key={tag}>{tag}</Badge>
									))}
								</div>
							</div>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<div className="absolute right-0 flex w-fit gap-3">
				<CarouselPrevious className="relative left-0 translate-x-0 translate-y-0" />
				<CarouselNext className="relative right-0 translate-x-0 translate-y-0" />
			</div>
		</Carousel>
	);
}
