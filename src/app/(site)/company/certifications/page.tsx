import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import { IconDots, IconMaximize, IconX } from "@tabler/icons-react";

import { FlickeringGrid } from "@/components/animations/flickering-grid";
import { Badge } from "@/components/ui/badge";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getCertifications } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";

import { CERTIFICASTES_QUERYResult } from "../../../../../sanity.types";

export const metadata: Metadata = {
  title:
    "Professional Certifications & Quality Standards | Allied Gulf Construction Services",
  description:
    "Discover AGCS's international certifications and quality standards. ISO certified construction services ensuring compliance with global regulations and industry standards in the Gulf region.",
  keywords:
    "AGCS certifications, construction certifications, ISO certification, quality standards, Gulf construction services",
  openGraph: {
    title:
      "Professional Certifications & Quality Standards | Allied Gulf Construction Services",
    description:
      "Discover AGCS's international certifications and quality standards. ISO certified construction services ensuring compliance with global regulations and industry standards in the Gulf region.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-certifications.jpg", // Make sure to add this image to your public folder
        width: 1200,
        height: 630,
        alt: "AGCS Certifications Overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Certifications & Quality Standards | AGCS",
    description:
      "View our international certifications and compliance with global regulations and directives.",
    images: ["/og-certifications.jpg"],
  },
};

// Add JSON-LD Schema
const certificationSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AGCS Certifications and Quality Standards",
  description:
    "Allied Gulf Construction Services certifications and quality standards documentation.",
  publisher: {
    "@type": "Organization",
    name: "Allied Gulf Construction Services",
    logo: {
      "@type": "ImageObject",
      url: "https://www.agcs.com/logo.png", // Update with actual logo URL
    },
  },
};

function CertificateGrid({
  certificates,
}: {
  certificates: CERTIFICASTES_QUERYResult;
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-12">
      {certificates.map((cert) => (
        <article className="space-y-4" key={cert._id}>
          {cert.image && (
            <div className="relative m-3 aspect-[1/1.414] overflow-hidden border bg-white">
              <Image
                src={urlFor(cert.image).url()}
                alt={`${cert.title} Certificate from Allied Gulf Construction Services`}
                title={cert.title ?? "Certificate"}
                fill
                style={{ objectFit: "cover" }}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                quality={85}
                className="rounded-md transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
              <Dialog>
                <DialogTrigger className="absolute top-3 right-3 z-10" asChild>
                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    className="bg-background/30 backdrop-blur-xl"
                  >
                    <IconMaximize />
                  </Button>
                </DialogTrigger>
                <DialogContent className="border-primary overflow-hidden border p-4">
                  <DialogHeader className="bg-background/40 absolute inset-x-3 top-3 z-10 flex-row items-center justify-between rounded-md px-2 py-1 backdrop-blur-lg">
                    <DialogTitle>{cert.title} Certificate</DialogTitle>
                    <DialogDescription className="sr-only">
                      View the full details of the {cert.title} certificate.
                      This certificate represents our commitment to quality and
                      compliance with international standards.
                    </DialogDescription>
                    <div className="flex items-center gap-2">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <IconDots />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuLabel>Options</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem asChild>
                            <Link
                              href={`${cert.certificate}?dl=${cert.title}-Certificate-AGCS.pdf`}
                            >
                              Download PDF
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link
                              href={`mailto:dummy@dummy.com?body=Certificate-${cert.certificate}&attach=%27${cert.certificate}`}
                            >
                              Share
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href={`${cert.certificate}`} target="_blank">
                              Print
                            </Link>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>

                      <DialogClose asChild>
                        <Button variant="ghost" size="icon">
                          <IconX />
                        </Button>
                      </DialogClose>
                    </div>
                  </DialogHeader>
                  <div className="relative aspect-[1/1.414] overflow-hidden rounded-2xl border bg-white">
                    <Image
                      src={urlFor(cert.image).url()}
                      alt={cert.title ?? "Certificate Image"}
                      title={cert.title ?? "Certificate"}
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                      sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                      quality={100}
                      className=""
                      loading="lazy"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          )}
          <h3 className="text-lg font-medium text-sky-800">{cert.title}</h3>
        </article>
      ))}
    </div>
  );
}

export default async function CertificationPage() {
  const data = await getCertifications();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(certificationSchema),
        }}
      />
      <div className="flex min-h-screen flex-col">
        <header className="bg-navbar relative py-12 md:py-32" role="banner">
          <FlickeringGrid
            className="absolute inset-0 z-0 size-full opacity-25 [mask-image:radial-gradient(75rem_circle_at_left,transparent,white)]"
            squareSize={4}
            gridGap={6}
            color="#0284c7"
            maxOpacity={0.5}
            flickerChance={0.1}
          />
          <div className="container">
            <Badge>Certifications</Badge>
            <h1 className="max-w-4xl text-3xl font-light tracking-tight md:text-5xl">
              Professional Certifications & Quality Standards
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
              Ensuring compliance with international and regional directives
              through comprehensive certification programs.
            </p>
          </div>
        </header>
        <main className="flex-grow" role="main">
          <section
            className="container py-12"
            aria-labelledby="quality-standards"
          >
            <h2
              id="quality-standards"
              className="max-w-3xl pb-4 text-2xl font-bold text-sky-600"
            >
              Industry-Leading Quality Control Standards
            </h2>
            <p className="max-w-3xl pb-3 text-lg font-light">
              These standards are rigorously implemented across all of our
              operations and facilities, as well as our products, which
              regularly undergo testing and are certified by leading
              accreditation bodies.
            </p>
            <p className="max-w-3xl text-lg font-light">
              Health, Safety and Environment are of critical importance in our
              workplace, as the safety of our workers and respect of the
              environment are closely linked to our core values of being an
              actively responsible company.
            </p>
          </section>

          <section
            className="container py-12"
            aria-labelledby="certificates"
            itemScope
            itemType="https://schema.org/ItemList"
          >
            <h2
              id="certificates"
              className="text-4xl font-light"
              itemProp="name"
            >
              Our Professional Certifications
            </h2>
            <Suspense fallback={<div>Loading certificates...</div>}>
              <CertificateGrid certificates={data} />
            </Suspense>
          </section>
        </main>
      </div>
    </>
  );
}
