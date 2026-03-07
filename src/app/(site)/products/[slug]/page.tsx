import { Suspense } from "react";

import type { Metadata, Route } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";

import { Card } from "@/components/global/card";
import Header from "@/components/global/header";

import Breadcrumb from "@/features/products/components/breadcrumb";
import {
	CardSkeleton,
	SidebarSkeleton,
} from "@/features/products/components/loading-skeletons";
import { Sidebar } from "@/features/products/components/sidebar";
import {
	getCategories,
	getProductCategoryBySlug,
	getProductsBySlug,
	getCategoriesStatic,
} from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 1800; // Revalidate every half hour

export default async function ProductsBySlugPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;

	const [products, category, categories] = await Promise.all([
		getProductsBySlug(slug),
		getProductCategoryBySlug(slug),
		getCategories(),
	]);

	if (!products || products.length === 0) return notFound();

	const text = {
		title: "Get the best products at",
		subtext: "Allied Gulf Construction Services W.L.L",
	};

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "ItemList",
		itemListElement: products.map((product, index) => ({
			"@type": "ListItem",
			position: index + 1,
			item: {
				"@type": "Product",
				name: product.title,
				description: product.description,
				image: product.thumbnail && urlFor(product.thumbnail).url(),
				url: `/products/${slug}/${product.slug?.current}`,
				aggregateRating: {
					"@type": "AggregateRating",
					ratingValue: 4.4,
					reviewCount: 89,
				},
			},
		})),
	};

	return (
		<>
			<Script type="application/ld+json">{JSON.stringify(jsonLd)}</Script>
			<div>
				<Header text={text} />

				<main className="container relative">
					<Breadcrumb
						segments={[
							{ title: "Products", href: "/products" },
							{
								title: category?.category || "Products",
							},
						]}
					/>
					<div className="grid gap-12 lg:grid-cols-4">
						<Suspense fallback={<SidebarSkeleton />}>
							<Sidebar data={categories} />
						</Suspense>
						<Suspense fallback={<CardSkeleton />}>
							<div className="grid gap-6 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
								<div className="md:col-span-3">
									<h1 className="font-medium text-4xl text-sky-600">
										{category?.category}
									</h1>
									{category?.description && (
										<p className="font-light text-lg text-muted-foreground">
											{category.description}
										</p>
									)}
								</div>
								{products.map((product, index) => (
									<Card
										alt={`${product.title} - Construction Product by AGCS`}
										className="aspect-square"
										image={product.thumbnail}
										itemType="Product"
										key={product._id}
										link={`/products/${slug}/${product.slug?.current}` as Route}
										priority={index < 3}
										title={product.title}
									/>
								))}
							</div>
						</Suspense>
					</div>
				</main>
			</div>
		</>
	);
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const category = await getProductCategoryBySlug(slug);
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://alliedgulf.me";

	return {
		title: `${category?.category || "Products"} | AGCS`,
		description:
			category?.description || "Browse our wide range of construction products",
		keywords: `${category?.category}, construction products, AGCS, building materials, `,
		robots: "index, follow",
		alternates: {
			canonical: `${baseUrl}/products/${slug}`,
		},
		openGraph: {
			title: `${category?.category || "Products"} | AGCS`,
			description:
				category?.description ||
				"Browse our wide range of construction products",
			type: "website",
			url: `${baseUrl}/products/${slug}`,
		},
	};
}

export async function generateStaticParams() {
	const categories = await getCategoriesStatic();
	return categories.map((category) => ({
		slug: category.slug?.current,
	}));
}
