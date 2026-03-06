"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import Image from "next/image";

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
					className="w-full cursor-pointer pl-4"
					data-carousel-item={`image-${index + 1}`}
					key={`image-${index + 1}`}
				>
					<div className="relative aspect-square overflow-hidden rounded-md bg-white">
						{image && (
							<div
								className={cn(
									"relative aspect-square overflow-hidden rounded-lg"
								)}
							>
								<Image
									alt={alt ?? ""}
									blurDataURL={urlFor(image)
										.width(10)
										.quality(20)
										.blur(10)
										.url()}
									className="transition-transform duration-300 hover:scale-105"
									fill
									placeholder="blur"
									priority={index === 0}
									quality={90}
									sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
									src={urlFor(image).url()}
									style={{ objectFit: "cover" }}
									title={alt ?? ""}
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
					className={cn(
						"group relative aspect-square w-full shrink-0 basis-1/4 cursor-pointer overflow-hidden rounded-md pt-2 max-md:pl-4 md:basis-1/6"
					)}
					data-carousel-thumbnail={`thumb-${index + 1}`}
					key={`thumb-${index + 1}`}
					onClick={() => handleClick(index)}
				>
					{image && (
						<div
							className={cn(
								"relative aspect-square overflow-hidden rounded-lg border-white bg-white",
								index === current ? "border-2" : ""
							)}
						>
							<Image
								alt={`${alt ?? ""} thumbnail ${index + 1}`}
								blurDataURL={urlFor(image).width(10).quality(20).blur(10).url()}
								className="transition-[filter] group-hover:brightness-110"
								fill
								placeholder="blur"
								quality={75}
								sizes="(min-width: 1024px) 10vw, (min-width: 640px) 15vw, 25vw"
								src={urlFor(image).url()}
								style={{ objectFit: "cover" }}
								title={`${alt ?? ""} thumbnail ${index + 1}`}
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
						className="my-2 h-28 md:h-fit md:w-20"
						opts={{
							align: "start",
						}}
						orientation={isDesktop ? "vertical" : "horizontal"}
						setApi={setThumbnailApi}
					>
						<CarouselContent className="-ml-4 flex max-md:-ml-4 md:-mt-2 md:h-136">
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
						setApi={setMainApi}
					>
						<CarouselContent className="-ml-4">{mainImage}</CarouselContent>
					</Carousel>
				</>
			)}
		</div>
	);
};
