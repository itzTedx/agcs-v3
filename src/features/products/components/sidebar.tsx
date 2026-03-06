import { memo } from "react";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import type { PRODUCTS_CATEGORIES_QUERYResult } from "../../../../sanity.types";

interface Props {
	data: PRODUCTS_CATEGORIES_QUERYResult;
}

export const Sidebar = memo(function Sidebar({ data }: Props) {
	return (
		<aside
			aria-label="Products navigation"
			className="sticky top-28 z-10 hidden h-fit rounded-lg px-4 py-2 backdrop-blur-lg max-sm:bg-white/80 md:top-12 lg:block"
			role="navigation"
		>
			<div className="text-start">
				<p className="font-light">Looking for our other</p>
				<h2 className="text-2xl md:mb-3">Products</h2>
			</div>
			<ul className="space-y-3 pb-3" role="menu">
				{data.map((cat) => (
					<li key={cat._id} role="none">
						<Button
							asChild
							className="w-full justify-start border-primary/60 bg-primary/10 shadow-none"
							role="menuitem"
							variant="outline"
						>
							<Link
								aria-label={`View ${cat.category} products`}
								href={`/products/${cat.slug?.current}`}
							>
								{cat.category}
							</Link>
						</Button>
					</li>
				))}
			</ul>
		</aside>
	);
});
