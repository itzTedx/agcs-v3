import Image from "next/image";

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

export default async function ProjectsPage() {
  const featured = await getFeaturedProjects();
  const projects = await getProjects();
  const projectsCarousel = await getProjectsCarousel();

  return (
    <div>
      <header>
        <ProjectsCarousel data={projectsCarousel} />
      </header>
      <section className="bg-white py-12">
        <FeaturedCarousel data={featured} />
      </section>
      <section className="container py-12">
        <h2 className="mb-3 text-4xl font-light">
          Our Successful <span className="text-sky-700">Projects</span>
        </h2>
        <div className="relative grid grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project._id} className="relative">
              {project.description && (
                <Dialog>
                  <DialogTrigger
                    className="absolute top-4 right-4 z-10"
                    asChild
                  >
                    <Button
                      type="button"
                      size="icon"
                      variant="ghost"
                      className="bg-background/30 rounded-full backdrop-blur-xl"
                    >
                      <IconInfoCircle />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="border-primary min-w-5xl border p-6">
                    <DialogClose
                      asChild
                      className="absolute -top-3 -right-3 z-10"
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        className="bg-background/40 rounded-full border backdrop-blur-lg"
                      >
                        <IconX />
                      </Button>
                    </DialogClose>

                    {project.image && (
                      <div className="relative aspect-[16/7] overflow-hidden rounded-lg border bg-white">
                        <Image
                          src={urlFor(project.image).url()}
                          alt={project.title ?? "Certificate Image"}
                          title={project.title ?? "Certificate"}
                          fill
                          style={{
                            objectFit: "cover",
                          }}
                          sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                          quality={100}
                          loading="lazy"
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
                className="aspect-[16/7]"
                image={project.image}
                title={project.title}
                alt={project.title}
              />
            </div>
          ))}
        </div>
      </section>
      <Cta />
    </div>
  );
}
