import { memo } from "react";

import { Route } from "next";
import Link from "next/link";

import { Card } from "@/components/global/card";
import { Button } from "@/components/ui/button";

import { getHomeProducts } from "@/sanity/lib/fetch";

import { HOME_PRODUCTS_QUERYResult } from "../../../../sanity.types";
import { Header } from "../components/header";

const ProductCard = memo(
	({ product }: { product: HOME_PRODUCTS_QUERYResult[number] }) => (
		<div
			className="max-sm:last-of-type:block max-lg:last-of-type:hidden"
			key={product._id}
		>
			<Card
				alt={product.category}
				image={product.image}
				link={`/products/${product.slug?.current}` as Route}
				title={product.category}
			/>
		</div>
	)
);
ProductCard.displayName = "ProductCard";

export const Products = async () => {
	const products = await getHomeProducts();
	return (
		<section
			aria-label="Product Categories"
			className="py-16"
			title="Our Product Categories"
		>
			<Header>Products</Header>
			<div className="container grid grid-cols-1 gap-4 py-12 sm:grid-cols-2 sm:gap-3 md:gap-6 lg:grid-cols-3">
				{products.map((product) => (
					<ProductCard key={product._id} product={product} />
				))}
				<Button
					aria-label="View more products"
					asChild
					className="sm:col-span-2 lg:col-span-1 lg:col-start-2"
				>
					<Link href="/products">View More</Link>
				</Button>
			</div>
		</section>
	);
};
