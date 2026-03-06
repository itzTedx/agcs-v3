import { Fragment, memo } from "react";

import Script from "next/script";

import { HomeIcon } from "lucide-react";

import {
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
	Breadcrumb as ShadRoot,
} from "@/components/ui/breadcrumb";

interface BreadcrumbSegment {
	title: string;
	href?: string;
}

interface BreadcrumbProps {
	segments: BreadcrumbSegment[];
}

const Breadcrumb = memo(({ segments }: BreadcrumbProps) => {
	// Generate structured data for SEO
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: segments.map((segment, index) => ({
			"@type": "ListItem",
			position: index + 2, // +2 because Home is first
			name: segment.title,
			item: segment.href ? `${process.env.SITE_URL}${segment.href}` : undefined,
		})),
	};

	return (
		<>
			<Script type="application/ld+json">
				{JSON.stringify(structuredData)}
			</Script>

			<ShadRoot className="py-6">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink aria-label="Navigate to home page" href="/">
							<HomeIcon aria-hidden="true" size={16} />
							<span className="sr-only">Home</span>
						</BreadcrumbLink>
					</BreadcrumbItem>
					{segments.map((segment, index) => (
						<Fragment key={`${segment.title}-${index + 1}`}>
							<BreadcrumbSeparator aria-hidden="true" />
							<BreadcrumbItem>
								{segment.href ? (
									<BreadcrumbLink
										aria-label={`Navigate to ${segment.title}`}
										href={segment.href}
									>
										{segment.title}
									</BreadcrumbLink>
								) : (
									<BreadcrumbPage aria-current="page">
										{segment.title}
									</BreadcrumbPage>
								)}
							</BreadcrumbItem>
						</Fragment>
					))}
				</BreadcrumbList>
			</ShadRoot>
		</>
	);
});

Breadcrumb.displayName = "Breadcrumb";

export default Breadcrumb;
