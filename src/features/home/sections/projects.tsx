import { AuroraText } from "@/components/animations/aurora-text";
import { Card } from "@/components/global/card";
import { getHomeProjects } from "@/sanity/lib/fetch";

export async function Projects() {
  const projects = await getHomeProjects();

  return (
    <section className="container py-12">
      <p className="text-gray-500 uppercase">Top projects in bahrain</p>
      <h3 className="text-5xl font-light">
        Recent <AuroraText className="font-bold">Projects</AuroraText>
      </h3>
      <div className="grid grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card
            className="aspect-[16/7] text-sm"
            key={project._id}
            title={project.title}
            image={project.image}
            alt={project.title}
          />
        ))}
      </div>
    </section>
  );
}
