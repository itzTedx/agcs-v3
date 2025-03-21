"use client";

import Image from "next/image";
import { useEffect } from "react";

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
      className="columns-2 gap-2 md:columns-3 md:gap-6"
      aria-label="Achievement gallery"
    >
      {galleries.map(
        (gallery, i) =>
          gallery.image && (
            <figure
              key={gallery._id || i}
              className={cn(
                "relative mt-2 inline-block w-full overflow-hidden rounded-lg md:mt-6"
              )}
            >
              <Image
                src={urlFor(gallery.image).url()}
                alt={gallery.image.alt ?? ""}
                width={500}
                height={360}
                className="object-cover"
                priority={i === 0}
                loading={i === 0 ? "eager" : "lazy"}
                aria-labelledby={`gallery-title-${i}`}
              />
              {gallery.title && (
                <figcaption id={`gallery-title-${i}`} className="sr-only">
                  {gallery.title}
                </figcaption>
              )}
            </figure>
          )
      )}
    </section>
  );
}
