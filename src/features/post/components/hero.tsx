import Image from "next/image";
import Link from "next/link";

import { Mail } from "lucide-react";

import { urlFor } from "@/sanity/lib/image";

import { POST_QUERYResult } from "../../../../sanity.types";
import PostDate from "./date";

type PostHeroProps = NonNullable<POST_QUERYResult>;

export default function PostHero({
	title,
	image,
	slug,
	_createdAt,
}: PostHeroProps) {
	return (
		<>
			{title && (
				<h1 className="mb-4 font-semibold text-3xl md:mb-6 lg:text-5xl">
					{title}
				</h1>
			)}
			{image && image.asset?._id && (
				<div className="my-4 overflow-hidden rounded-2xl md:my-6">
					<Image
						alt={image.alt || ""}
						blurDataURL={image.asset?.metadata?.lqip || undefined}
						height={image?.asset?.metadata?.dimensions?.height || 630}
						placeholder={image?.asset?.metadata?.lqip ? "blur" : undefined}
						quality={100}
						src={urlFor(image).quality(100).url()}
						width={image.asset?.metadata?.dimensions?.width || 1200}
					/>
				</div>
			)}
			<div className="flex items-center justify-between gap-2 text-sm md:text-base">
				<div className="flex flex-col gap-2 md:flex-row md:items-center">
					<div className="flex items-center gap-2">
						<div>Allied Gulf Construction Services W.L.L.</div>
						<div className="hidden md:block">•</div>
					</div>
					<PostDate date={_createdAt as string} />
				</div>
				<div className="flex flex-col gap-2 md:flex-row">
					<div>Share this post</div>
					<div className="flex gap-2">
						<Link
							aria-label="Share on Facebook"
							className="hover:opacity-70"
							href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.SITE_URL}/posts/${slug?.current}`}
							rel="noopener noreferrer"
							target="_blank"
							title="Share on Facebook"
						>
							<svg
								fill="none"
								height="24"
								viewBox="0 0 24 24"
								width="24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									className="fill-black dark:fill-white"
									d="M22 12.3038C22 6.74719 17.5229 2.24268 12 2.24268C6.47715 2.24268 2 6.74719 2 12.3038C2 17.3255 5.65684 21.4879 10.4375 22.2427V15.2121H7.89844V12.3038H10.4375V10.0872C10.4375 7.56564 11.9305 6.1728 14.2146 6.1728C15.3088 6.1728 16.4531 6.36931 16.4531 6.36931V8.84529H15.1922C13.95 8.84529 13.5625 9.6209 13.5625 10.4166V12.3038H16.3359L15.8926 15.2121H13.5625V22.2427C18.3432 21.4879 22 17.3257 22 12.3038Z"
								/>
							</svg>
						</Link>
						<Link
							aria-label="Share via email"
							className="hover:opacity-70"
							href={`mailto:?subject=${title}&body=${title}%0A%0A${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug?.current}`}
							rel="noopener noreferrer"
							target="_blank"
							title="Share via email"
						>
							<Mail size={24} />
						</Link>
					</div>
				</div>
			</div>
			<hr className="my-4 border-primary/30 md:my-6" />
		</>
	);
}
