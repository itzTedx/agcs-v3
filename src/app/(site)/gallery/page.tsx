import Image from "next/image";

import { cn } from "@/lib/utils";
import { getGalleries } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";

export default async function GalleryPage() {
  const galleries = await getGalleries();

  console.log("Gallery: ", galleries);

  return (
    <div className="container py-4 md:py-12">
      <header className="md:py-9">
        <h1 className="text-center text-4xl md:text-6xl">Our Gallery</h1>
        <p className="text-center text-lg font-light text-gray-600 md:mt-2 md:text-xl">
          Discover our portfolio of successful team
        </p>
      </header>

      <section
        className="columns-2 gap-3 md:columns-3 md:gap-6"
        aria-label="Achievement gallery"
      >
        {galleries.map(
          (gallery, i) =>
            gallery.image && (
              <div
                key={i}
                className={cn(
                  "relative mt-3 inline-block w-full overflow-hidden rounded-lg md:mt-6"
                )}
              >
                <Image
                  src={urlFor(gallery.image).url()}
                  alt={gallery.image.alt ?? ""}
                  title={gallery.title ?? ""}
                  width={500}
                  height={360}
                  className="object-cover"
                />
              </div>
            )
        )}
      </section>
    </div>
  );
}
