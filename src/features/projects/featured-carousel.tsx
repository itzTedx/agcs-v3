"use client";

import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";

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
      ]}
    >
      <CarouselContent>
        {data.map((project) => (
          <CarouselItem key={project._id}>
            <div className="grid grid-cols-2 gap-12 p-1">
              <Card className="p-0">
                <CardContent className="relative flex aspect-video items-center justify-center">
                  {project.image && (
                    <Image
                      src={urlFor(project.image).url()}
                      alt={project.title ?? "Certificate Image"}
                      title={project.title ?? "Certificate"}
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                      sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                      quality={100}
                      className="rounded-md"
                      loading="lazy"
                    />
                  )}
                </CardContent>
              </Card>
              <div>
                <Badge>Top Projects in Bahrain</Badge>
                <h2 className="py-3 text-6xl">{project.title}</h2>
                <p className="text-lg font-light capitalize">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 py-4">
                  {project.tags?.map((tag) => <Badge key={tag}>{tag}</Badge>)}
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
