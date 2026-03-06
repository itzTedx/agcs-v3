import { Suspense } from "react";

import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

import { IconInfoCircle, IconX } from "@tabler/icons-react";

import { Card } from "@/components/global/card";
import { Cta } from "@/components/global/cta";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

import { FeaturedCarousel } from "@/features/projects/featured-carousel";
import { ProjectsCarousel } from "@/features/projects/projects-carousels";
import {
	getFeaturedProjects,
	getProjects,
	getProjectsCarousel,
} from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";

export async function generateMetadata(): Promise<Metadata> {
	const projects = await getProjects();
	const projectCount = projects.length;

	return {
		title: "Our Projects | Construction & Development Projects | AGCS",
		description: `Explore our ${projectCount + 240}+ successful construction and development projects. View our portfolio of completed works across various sectors.`,
		openGraph: {
			title: "Our Projects | Construction & Development Projects | AGCS",
			description: `Explore our ${projectCount + 240}+ successful construction and development projects. View our portfolio of completed works across various sectors.`,
			type: "website",
			images: [
				{
					url: "/og-projects.jpg",
					width: 1200,
					height: 630,
					alt: "AGCS Projects Portfolio",
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: "Our Projects | AGCS",
			description: `Explore our ${projectCount}+ successful construction and development projects.`,
			images: ["/og-projects.jpg"],
		},
		alternates: {
			canonical: "https://www.alliedgulf.me/projects",
		},
	};
}

export default async function ProjectsPage() {
	const featured = await getFeaturedProjects();
	const projects = await getProjects();
	const projectsCarousel = await getProjectsCarousel();

	const structuredData = {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: "AGCS Construction Projects",
		description: "Portfolio of construction and development projects by AGCS",
		numberOfItems: projects.length,
		itemListElement: projects.map((project, index) => ({
			"@type": "Project",
			"@id": `https://agcs.com/projects#${project._id}`,
			name: project.title,
			description: project.description,
			position: index + 1,
			image: project.image ? urlFor(project.image).url() : undefined,
		})),
	};

	return (
		<>
			<Script type="application/ld+json">
				{JSON.stringify(structuredData)}
			</Script>
			<main>
				<header>
					<h1 className="sr-only">
						AGCS Construction and Development Projects
					</h1>
					<Suspense
						fallback={<div className="h-[60vh] animate-pulse bg-muted" />}
					>
						<ProjectsCarousel data={projectsCarousel} />
					</Suspense>
				</header>

				<section aria-label="Featured Projects" className="bg-popover py-12">
					<Suspense fallback={<div className="h-96 animate-pulse bg-muted" />}>
						<FeaturedCarousel data={featured} />
					</Suspense>
				</section>

				<section aria-label="All Projects" className="container py-12">
					<h2 className="mb-3 font-light text-4xl">
						Our Successful{" "}
						<span className="font-normal text-primary">Projects</span>
					</h2>
					<div className="relative grid grid-cols-1 gap-6 md:grid-cols-2">
						{projects.map((project) => (
							<div className="relative" key={project._id}>
								{project.description && (
									<Dialog>
										<DialogTrigger
											asChild
											className="absolute top-4 right-4 z-10"
										>
											<Button
												aria-label="Show project details"
												className="rounded-full bg-background/30 backdrop-blur-xl"
												size="icon"
												type="button"
												variant="ghost"
											>
												<IconInfoCircle />
											</Button>
										</DialogTrigger>
										<DialogContent className="min-w-4xl max-w-7xl border border-primary p-6">
											<DialogClose
												asChild
												className="absolute -top-3 -right-3 z-10"
											>
												<Button
													className="rounded-full border bg-background/40 backdrop-blur-lg"
													size="icon"
													variant="ghost"
												>
													<IconX />
												</Button>
											</DialogClose>

											{project.image && (
												<div className="relative rounded-lg border bg-white">
													<Image
														alt={project.title ?? "Project Image"}
														height={
															project.image.asset?.metadata?.dimensions
																?.height ?? 350
														}
														priority={true}
														sizes="(min-width: 1024px) 800px, (min-width: 640px) 600px, 100vw"
														src={urlFor(project.image).url()}
														title={project.title ?? "Project"}
														width={
															project.image.asset?.metadata?.dimensions
																?.width ?? 450
														}
													/>
												</div>
											)}

											<DialogHeader>
												<DialogTitle className="text-2xl">
													{project.title}
												</DialogTitle>

												<DialogDescription className="text-lg">
													{project.description}
												</DialogDescription>
											</DialogHeader>
										</DialogContent>
									</Dialog>
								)}
								<Card
									alt={project.title}
									className="aspect-16/7"
									image={project.image}
									title={project.title}
								/>
							</div>
						))}
					</div>
				</section>

				<Suspense>
					<Cta />
				</Suspense>
			</main>
		</>
	);
}
