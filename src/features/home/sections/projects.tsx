import { Suspense } from "react";

import { AuroraText } from "@/components/animations/aurora-text";
import { Card } from "@/components/global/card";

import { getHomeProjects } from "@/sanity/lib/fetch";

export async function Projects() {
	const projects = await getHomeProjects();

	return (
		<section aria-labelledby="projects-heading" className="container py-12">
			<div className="mb-8">
				<p className="text-gray-600 uppercase" role="doc-subtitle">
					Top projects in bahrain
				</p>
				<h2 className="font-light text-5xl" id="projects-heading">
					Recent <AuroraText className="font-bold">Projects</AuroraText>
				</h2>
			</div>

			<Suspense fallback={<ProjectsSkeleton />}>
				<div className="grid gap-6 md:grid-cols-2" role="list">
					{projects.slice(0, 4).map((project) => (
						<div key={project._id} role="listitem">
							<Card
								alt={`Project preview for ${project.title}`}
								className="aspect-16/7 text-sm"
								image={project.image}
								title={project.title}
							/>
						</div>
					))}
				</div>
			</Suspense>
		</section>
	);
}

function ProjectsSkeleton() {
	return (
		<div className="grid gap-6 md:grid-cols-2">
			{[...Array(4)].map((_, index) => (
				<div
					className="aspect-16/7 animate-pulse rounded-lg bg-gray-100"
					key={`project-skeleton-${index + 1}`}
				/>
			))}
		</div>
	);
}
