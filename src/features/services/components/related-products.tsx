import { Route } from "next";

import { Card } from "@/components/global/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

import { RECENTLY_VIEWED_PRODUCTS_QUERYResult } from "../../../../sanity.types";

export const RelatedProducts = ({
	products,
	category,
}: {
	products: RECENTLY_VIEWED_PRODUCTS_QUERYResult;
	category: string;
}) => {
	if (products.length > 4)
		return (
			<Carousel className="w-full">
				<CarouselContent className="-ml-6">
					{products.map((product) => (
						<CarouselItem
							className="pl-6 md:basis-1/3 lg:basis-1/4"
							key={product._id}
						>
							<Card
								alt={product.title}
								className="aspect-square"
								image={product.thumbnail}
								itemType="Product"
								link={`/products/${category}/${product.slug?.current}` as Route}
								title={product.title ?? ""}
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
					alt={product.title}
					className="aspect-square"
					image={product.thumbnail}
					itemType="Product"
					key={product._id}
					link={
						`/products/${product.category}/${product.slug?.current}` as Route
					}
					title={product.title ?? ""}
				/>
			))}
		</div>
	);
};
