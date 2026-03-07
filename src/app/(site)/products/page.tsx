import type { Metadata, Route } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";

import { Card } from "@/components/global/card";
import Header from "@/components/global/header";

import Breadcrumb from "@/features/products/components/breadcrumb";
import { getCategories } from "@/sanity/lib/fetch";

export const metadata: Metadata = {
	title:
		"Construction Products & Materials Categories | Allied Gulf Construction Services",
	description:
		"Explore our comprehensive range of specialty construction materials, building supplies, and industrial products. Quality construction materials for contractors and builders in Gulf region.",
	keywords:
		"construction materials, building supplies, construction products, specialty materials, Gulf construction supplies",
	openGraph: {
		title: "Construction Products & Materials | AGCS",
		description:
			"Premium construction materials and building supplies for professional contractors.",
		type: "website",
		locale: "en_US",
		siteName: "Allied Gulf Construction Services",
	},
};

export const revalidate = 1800; // Revalidate every half hour

export default async function ProductsPage() {
	const text = {
		title: "Get the best products at",
		subtext: "Allied Gulf Construction Services W.L.L",
	};
	const products = await getCategories();

	if (!products || products.length === 0) notFound();

	const structuredData = {
		"@context": "https://schema.org",
		"@type": "ItemList",
		itemListElement: products.map((product, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: product.category,
			url: `/products/${product.slug?.current}`,
		})),
	};

	return (
		<>
			<Script type="application/ld+json">
				{JSON.stringify(structuredData)}
			</Script>
			<main>
				<Header text={text} />
				<section aria-label="Product Categories" className="container py-12">
					<Breadcrumb segments={[{ title: "Products" }]} />
					<div className="pb-4 sm:col-span-2 md:col-span-3">
						<p className="font-light text-muted-foreground" role="doc-subtitle">
							Looking for Specialty Materials?
						</p>
						<h2 className="font-light text-4xl">
							<span className="font-medium text-sky-600">Products</span>{" "}
							Categories
						</h2>
					</div>
					<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
						{products.map((product, i) => (
							<Card
								alt={`${product.category} - Construction Materials Category`}
								image={product.image}
								itemType="Product"
								key={product._id}
								link={`/products/${product.slug?.current}` as Route}
								priority={i < 3}
								title={product.category}
							/>
						))}
					</div>
				</section>
			</main>
		</>
	);
}
