import { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";

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

export const metadata: Metadata = {
  title: "Our Projects | AGCS",
  description:
    "Explore our successful projects and achievements in construction and development.",
  openGraph: {
    title: "Our Projects | AGCS",
    description:
      "Explore our successful projects and achievements in construction and development.",
    type: "website",
  },
};

export default async function ProjectsPage() {
  const featured = await getFeaturedProjects();
  const projects = await getProjects();
  const projectsCarousel = await getProjectsCarousel();

  return (
    <div>
      <header>
        <Suspense
          fallback={<div className="h-[60vh] animate-pulse bg-gray-100" />}
        >
          <ProjectsCarousel data={projectsCarousel} />
        </Suspense>
      </header>

      <section className="bg-white py-12">
        <Suspense fallback={<div className="h-96 animate-pulse bg-gray-50" />}>
          <FeaturedCarousel data={featured} />
        </Suspense>
      </section>

      <section className="container py-12">
        <h2 className="mb-3 text-4xl font-light">
          Our Successful <span className="text-sky-700">Projects</span>
        </h2>
        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2">
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
                      aria-label="Show project details"
                    >
                      <IconInfoCircle />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="border-primary max-w-4xl border p-6">
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
                          src={urlFor(project.image)
                            .width(800)
                            .height(450)
                            .quality(85)
                            .url()}
                          alt={project.title ?? "Project Image"}
                          title={project.title ?? "Project"}
                          fill
                          priority={false}
                          style={{
                            objectFit: "cover",
                          }}
                          sizes="(min-width: 1024px) 800px, (min-width: 640px) 600px, 100vw"
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
      <Suspense>
        <Cta />
      </Suspense>
    </div>
  );
}
