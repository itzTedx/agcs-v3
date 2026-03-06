import Link from "next/link";

export function Hero() {
	return (
		<section
			aria-label="Hero Section with Company Showcase Video"
			className="relative overflow-hidden"
		>
			<h1 className="sr-only">Welcome to AGCS - Creative Solutions</h1>
			<Link
				aria-label="Scroll to About section"
				className="scroll-down bottom-3 z-40 hidden hover:cursor-pointer md:block"
				href={"#about"}
			/>
			<div className="pointer-events-none relative w-full touch-none object-cover lg:h-svh">
				<video
					aria-label="AGCS Company Showreel"
					autoPlay
					className="h-full w-full object-cover"
					crossOrigin="anonymous"
					loop
					muted
					playsInline
					poster="/images/video-poster.webp"
					slot="media"
					src="/video/agcs-Showreel.webm"
				/>
			</div>

			<script type="application/ld+json">
				{JSON.stringify({
					"@context": "https://schema.org",
					"@type": "VideoObject",
					name: "AGCS Company Showreel",
					description:
						"Showcase video highlighting AGCS creative solutions and services",
					thumbnailUrl: "/images/video-poster.jpg",
					uploadDate: "2024-01-01T08:00:00+08:00",
				})}
			</script>
		</section>
	);
}
