import { Card } from "@/components/global/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  SanityImageCrop,
  SanityImageHotspot,
  Slug,
  internalGroqTypeReferenceTo,
} from "../../../../sanity.types";

interface PRODUCTS_TYPES {
  _id: string;
  title: string;
  servicesTitle: string | null;
  servicesSlug: Slug | null;
  category: string;
  slug: Slug;
  thumbnail: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
}

export const OtherServices = ({
  products,
  category,
}: {
  products: PRODUCTS_TYPES[];
  category: string;
}) => {
  if (products.length > 4)
    return (
      <Carousel className="w-full">
        <CarouselContent className="-ml-6">
          {products.map((product) => (
            <CarouselItem
              key={product._id}
              className="pl-6 md:basis-1/3 lg:basis-1/4"
            >
              <Card
                className="aspect-square"
                title={product.title}
                alt={product.title}
                image={product.thumbnail}
                link={`/services/${category}/${product.slug?.current}`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );

  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
      {products.map((product) => (
        <Card
          key={product._id}
          className="aspect-square"
          title={product.title}
          alt={product.title}
          image={product.thumbnail}
          link={`/services/${product.category}/${product.slug?.current}`}
        />
      ))}
    </div>
  );
};
