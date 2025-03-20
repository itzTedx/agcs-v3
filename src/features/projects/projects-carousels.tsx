"use client";

import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { urlFor } from "@/sanity/lib/image";

import { PROJECTS_CAROUSEL_QUERYResult } from "../../../sanity.types";

export function ProjectsCarousel({
  data,
}: {
  data: PROJECTS_CAROUSEL_QUERYResult;
}) {
  return (
    <Carousel
      className="w-full"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {data.map((project) => (
          <CarouselItem key={project._id}>
            <Card className="p-0">
              <CardContent className="relative flex h-72 w-full items-center justify-center">
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
                    priority
                  />
                )}
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
