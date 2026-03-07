import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";

import { CardContent, Card as CardUi } from "../ui/card";

interface Props {
	alt?: string | null;
	title: string | null;
	image?: SanityImageSource | null;
	className?: string;
	link?: Route;
	priority?: boolean;
	description?: string | null;
	date?: string;
	/** Schema.org type for JSON-LD. Use "Product" for product/category cards. */
	itemType?: "Article" | "Product";
}

export const Card = ({
	image,
	title,
	alt,
	className,
	link,
	priority,
	description,
	date,
	itemType = "Article",
}: Props) => {
	const isProduct = itemType === "Product";
	const structuredData = isProduct
		? {
				"@context": "https://schema.org",
				"@type": "Product",
				name: title,
				image: image ? urlFor(image).url() : undefined,
				description: description ?? undefined,
				...(link && link !== "#" && { url: link }),
		  }
		: {
				"@context": "https://schema.org",
				"@type": "Article",
				headline: title,
				image: image ? urlFor(image).url() : undefined,
				description: description,
				datePublished: date,
		  };

	return (
		<CardUi className="p-0">
			<Link href={link ?? "#"}>
				<CardContent
					aria-label={isProduct ? `Product: ${title}` : `Article: ${title}`}
					className={cn("relative p-1.5")}
				>
					<Script type="application/ld+json">
						{JSON.stringify(structuredData)}
					</Script>
					{image ? (
						<article
							className={cn(
								"relative aspect-video overflow-hidden rounded-lg",
								className
							)}
						>
							<Title>{title}</Title>
							<Image
								alt={alt ?? title ?? "Article image"}
								className="transition-transform duration-300 hover:scale-105"
								fill
								loading={priority ? "eager" : "lazy"}
								priority={priority}
								quality={100}
								sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
								src={urlFor(image).url()}
								style={{
									objectFit: "cover",
								}}
								title={title ?? ""}
							/>
							{description && <meta content={description} name="description" />}
						</article>
					) : (
						<article>
							<Title>{title}</Title>
							{description && <meta content={description} name="description" />}
						</article>
					)}
				</CardContent>
			</Link>
		</CardUi>
	);
};

const Title = ({ children }: { children: React.ReactNode }) => {
	return (
		<h3 className="absolute bottom-0 left-0 z-10 m-2 rounded-lg border border-sky-400/40 bg-background/75 px-3 py-1 font-medium text-primary-foreground shadow-2xl backdrop-blur-2xl">
			{children}
		</h3>
	);
};
