import { Suspense } from "react";

import { AuroraText } from "@/components/animations/aurora-text";
import { Card } from "@/components/global/card";
import { getHomeProjects } from "@/sanity/lib/fetch";

export async function Projects() {
  const projects = await getHomeProjects();

  return (
    <section className="container py-12" aria-labelledby="projects-heading">
      <div className="mb-8">
        <p className="text-gray-600 uppercase" role="doc-subtitle">
          Top projects in bahrain
        </p>
        <h2 id="projects-heading" className="text-5xl font-light">
          Recent <AuroraText className="font-bold">Projects</AuroraText>
        </h2>
      </div>

      <Suspense fallback={<ProjectsSkeleton />}>
        <div className="grid gap-6 md:grid-cols-2" role="list">
          {projects.slice(0, 4).map((project) => (
            <div key={project._id} role="listitem">
              <Card
                className="aspect-[16/7] text-sm"
                title={project.title}
                image={project.image}
                alt={`Project preview for ${project.title}`}
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
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="aspect-[16/7] animate-pulse rounded-lg bg-gray-100"
        />
      ))}
    </div>
  );
}
