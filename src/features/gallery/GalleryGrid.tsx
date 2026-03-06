"use client";

import { useEffect } from "react";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";

import { GALLERY_QUERYResult } from "../../../sanity.types";

export default function GalleryGrid({
	galleries,
}: {
	galleries: GALLERY_QUERYResult;
}) {
	// Enable view transitions
	useEffect(() => {
		document.documentElement.style.setProperty(
			"view-transition-name",
			"gallery-grid"
		);
	}, []);

	return (
		<section
			aria-label="Achievement gallery"
			className="columns-2 gap-2 md:columns-3 md:gap-6"
		>
			{galleries.map(
				(gallery, i) =>
					gallery.image && (
						<figure
							className={cn(
								"relative mt-2 inline-block w-full overflow-hidden rounded-lg md:mt-6"
							)}
							key={gallery._id || i}
						>
							<Image
								alt={gallery.image.alt ?? ""}
								aria-labelledby={`gallery-title-${i}`}
								className="object-cover"
								height={360}
								loading={i === 0 ? "eager" : "lazy"}
								priority={i === 0}
								src={urlFor(gallery.image).url()}
								width={500}
							/>
							{gallery.title && (
								<figcaption className="sr-only" id={`gallery-title-${i}`}>
									{gallery.title}
								</figcaption>
							)}
						</figure>
					)
			)}
		</section>
	);
}
