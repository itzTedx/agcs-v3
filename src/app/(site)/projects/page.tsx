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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <header>
          <h1 className="sr-only">
            AGCS Construction and Development Projects
          </h1>
          <Suspense
            fallback={<div className="bg-muted h-[60vh] animate-pulse" />}
          >
            <ProjectsCarousel data={projectsCarousel} />
          </Suspense>
        </header>

        <section className="bg-popover py-12" aria-label="Featured Projects">
          <Suspense fallback={<div className="bg-muted h-96 animate-pulse" />}>
            <FeaturedCarousel data={featured} />
          </Suspense>
        </section>

        <section className="container py-12" aria-label="All Projects">
          <h2 className="mb-3 text-4xl font-light">
            Our Successful{" "}
            <span className="text-primary font-normal">Projects</span>
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
                    <DialogContent className="border-primary max-w-7xl min-w-4xl border p-6">
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
                        <div className="relative aspect-[16/9] overflow-hidden rounded-lg border bg-white">
                          <Image
                            src={urlFor(project.image)
                              .width(800)
                              .height(450)
                              .quality(85)
                              .url()}
                            alt={project.title ?? "Project Image"}
                            title={project.title ?? "Project"}
                            fill
                            priority={true}
                            style={{
                              objectFit: "cover",
                            }}
                            sizes="(min-width: 1024px) 800px, (min-width: 640px) 600px, 100vw"
                            loading="eager"
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
      </main>
    </>
  );
}
