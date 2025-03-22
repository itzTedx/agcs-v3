import { Card } from "@/components/global/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getProductsBySlug } from "@/sanity/lib/fetch";

export async function RelatedProducts({ slug }: { slug: string }) {
  const relatedProducts = await getProductsBySlug(slug);
  return (
    <section className="container py-12">
      <h2 className="pb-3 text-2xl">Products related to this</h2>

      <Carousel className="w-full">
        <CarouselContent className="-ml-6">
          {relatedProducts.map((product, i) => (
            <CarouselItem key={i} className="pl-6 md:basis-1/3 lg:basis-1/4">
              <div key={product.slug?.current}>
                <Card
                  className="aspect-square"
                  title={product.title!}
                  alt={product.title!}
                  image={product.thumbnail}
                  key={product._id}
                  link={`/products/${slug}/${product.slug?.current}`}
                  priority={i < 3} // Prioritize loading first 3 images
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
