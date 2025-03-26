import { Card } from "@/components/global/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface PRODUCTS_TYPES {
  _id: string;
  title: string | null;
  thumbnail: string;
  category: string;
  slug?: {
    current: string;
  };
}

export const RelatedProducts = ({
  products,
  category,
}: {
  products: PRODUCTS_TYPES[];
  category: string;
}) => {
  console.log(products);
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
                link={`/products/${category}/${product.slug?.current}`}
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
          link={`/products/${product.category}/${product.slug?.current}`}
        />
      ))}
    </div>
  );
};
