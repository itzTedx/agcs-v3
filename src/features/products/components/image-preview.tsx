"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";

interface ImagePreviewProps {
  data?: SanityImageSource[] | null;
  alt?: string | null;
  autoplayDelay?: number;
}

export const ImagePreview = ({
  data,
  alt,
  autoplayDelay,
}: ImagePreviewProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [thumbnailApi, setThumbnailApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!mainApi || !thumbnailApi) {
      return;
    }

    const handleTopSelect = () => {
      const selected = mainApi.selectedScrollSnap();
      setCurrent(selected);
      thumbnailApi.scrollTo(selected);
    };

    const handleBottomSelect = () => {
      const selected = thumbnailApi.selectedScrollSnap();
      setCurrent(selected);
      mainApi.scrollTo(selected);
    };

    mainApi.on("select", handleTopSelect);
    thumbnailApi.on("select", handleBottomSelect);

    return () => {
      mainApi.off("select", handleTopSelect);
      thumbnailApi.off("select", handleBottomSelect);
    };
  }, [mainApi, thumbnailApi]);

  const handleClick = useCallback(
    (index: number) => {
      if (!mainApi || !thumbnailApi) {
        return;
      }
      thumbnailApi.scrollTo(index);
      mainApi.scrollTo(index);
      setCurrent(index);
    },
    [mainApi, thumbnailApi]
  );

  const mainImage = useMemo(
    () =>
      data?.map((image, index) => (
        <CarouselItem
          key={index}
          className="w-full cursor-pointer pl-4"
          data-carousel-item={`image-${index + 1}`}
        >
          <div className="relative aspect-square overflow-hidden rounded-md bg-white">
            {image && (
              <div
                className={cn(
                  "relative aspect-square overflow-hidden rounded-lg"
                )}
              >
                <Image
                  src={urlFor(image).url()}
                  alt={alt ?? ""}
                  title={alt ?? ""}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                  quality={90}
                  className="transition-transform duration-300 hover:scale-105"
                  priority={index === 0}
                  placeholder="blur"
                  blurDataURL={urlFor(image)
                    .width(10)
                    .quality(20)
                    .blur(10)
                    .url()}
                />
              </div>
            )}
          </div>
        </CarouselItem>
      )),
    [data, alt]
  );

  const thumbnailImages = useMemo(
    () =>
      data?.map((image, index) => (
        <CarouselItem
          key={index}
          className={cn(
            "group relative aspect-square w-full shrink-0 basis-1/4 cursor-pointer overflow-hidden rounded-md pt-2 max-md:pl-4 md:basis-1/6"
          )}
          onClick={() => handleClick(index)}
          data-carousel-thumbnail={`thumb-${index + 1}`}
        >
          {image && (
            <div
              className={cn(
                "relative aspect-square overflow-hidden rounded-lg border-white bg-white",
                index === current ? "border-2" : ""
              )}
            >
              <Image
                src={urlFor(image).url()}
                alt={`${alt ?? ""} thumbnail ${index + 1}`}
                title={`${alt ?? ""} thumbnail ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                sizes="(min-width: 1024px) 10vw, (min-width: 640px) 15vw, 25vw"
                quality={75}
                placeholder="blur"
                blurDataURL={urlFor(image).width(10).quality(20).blur(10).url()}
                className="transition-[filter] group-hover:brightness-110"
              />
            </div>
          )}
        </CarouselItem>
      )),
    [data, alt, current, handleClick]
  );

  return (
    <div className="sticky top-20 col-span-3 flex h-fit flex-col-reverse gap-4 md:flex-row">
      {isMounted && (
        <>
          <Carousel
            setApi={setThumbnailApi}
            opts={{
              align: "start",
            }}
            orientation={isDesktop ? "vertical" : "horizontal"}
            className="my-2 h-28 md:h-fit md:w-20"
          >
            <CarouselContent className="-ml-4 flex max-md:-ml-4 md:-mt-2 md:h-[34rem]">
              {thumbnailImages}
            </CarouselContent>

            {data && data.length > 6 && (
              <CarouselPrevious className="max-md:-left-3 md:-top-3 md:size-6" />
            )}
            {data && data.length > 6 && (
              <CarouselNext className="max-md:-right-3 md:-bottom-3 md:size-6" />
            )}
          </Carousel>

          <Carousel
            setApi={setMainApi}
            className="shrink-0 grow"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: autoplayDelay || 3000,
                stopOnMouseEnter: true,
              }),
            ]}
          >
            <CarouselContent className="-ml-4">{mainImage}</CarouselContent>
          </Carousel>
        </>
      )}
    </div>
  );
};
