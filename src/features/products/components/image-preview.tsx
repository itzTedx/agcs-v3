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
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [thumbnailApi, setThumbnailApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

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
        <CarouselItem key={index} className="w-full cursor-pointer pl-4">
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
                  style={{
                    objectFit: "cover",
                  }}
                  sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                  quality={100}
                  className="transition-transform duration-300 hover:scale-105"
                  priority
                />
              </div>
            )}
          </div>
        </CarouselItem>
      )),
    []
  );

  const thumbnailImages = useMemo(
    () =>
      data?.map((image, index) => (
        <CarouselItem
          key={index}
          className={cn(
            "relative aspect-square w-full basis-1/5 overflow-hidden rounded-md border-white bg-white pt-0 pl-0",
            index === current ? "border-2" : ""
          )}
          onClick={() => handleClick(index)}
        >
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
                style={{
                  objectFit: "cover",
                }}
                sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                quality={100}
              />
            </div>
          )}
        </CarouselItem>
      )),
    [current, handleClick]
  );

  return (
    <div className="sticky top-20 col-span-3 flex h-fit gap-4">
      <Carousel setApi={setThumbnailApi} orientation="vertical">
        <CarouselContent className="m-1 w-24 gap-3">
          {thumbnailImages}
        </CarouselContent>
        {current > 3 && <CarouselPrevious />}
        {current > 3 && <CarouselNext />}
      </Carousel>
      <Carousel
        setApi={setMainApi}
        className="shrink-0 grow"
        plugins={[
          Autoplay({
            delay: autoplayDelay || 2000,
          }),
        ]}
      >
        <CarouselContent className="-ml-4">{mainImage}</CarouselContent>
      </Carousel>
    </div>
  );
};
