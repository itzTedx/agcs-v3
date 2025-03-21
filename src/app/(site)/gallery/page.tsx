import { Metadata } from "next";
import { Suspense } from "react";

import { getGalleries } from "@/sanity/lib/fetch";

import GalleryGrid from "../../../features/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Our Gallery",
  description:
    "Explore our portfolio of successful team achievements and projects at Allied gulf construction services",
  keywords: ["portfolio", "success stories", "gallery", "student projects"],
  openGraph: {
    title: "Our Gallery | AGCS",
    description:
      "Explore our portfolio of successful team achievements and projects",
  },
};

export default async function GalleryPage() {
  const galleries = await getGalleries();

  return (
    <div className="container py-4 md:py-12">
      <header className="md:py-9">
        <h1 className="text-center text-4xl md:text-6xl">Our Gallery</h1>
        <p className="text-center text-lg font-light text-gray-600 md:mt-2 md:text-xl">
          Discover our portfolio of successful team
        </p>
      </header>

      <Suspense fallback={<div>Loading gallery...</div>}>
        <GalleryGrid galleries={galleries} />
      </Suspense>
    </div>
  );
}
