import Image from "next/image";
import Link from "next/link";

import { IconDots, IconMaximize, IconX } from "@tabler/icons-react";

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

export default async function CertificationPage() {
  const data = await getCertifications();
  return (
    <div>
      <header className="bg-navbar py-32">
        <div className="container">
          <Badge>Certifications</Badge>
          <h1 className="max-w-4xl text-5xl font-light tracking-tight">
            Comply with international and regional directives and regulations
            across the world.
          </h1>
        </div>
      </header>
      <main>
        <section className="container py-12">
          <h2 className="max-w-3xl pb-4 text-2xl font-bold text-sky-600">
            Allied Gulf Construction Services W.L.L adheres to extremely high
            standards of quality control.
          </h2>
          <p className="max-w-3xl pb-3 text-lg font-light">
            These standards are rigorously implemented across all of our
            operations and facilities, as well as our products, which regularly
            undergo testing and are certified by leading accreditation bodies.
          </p>
          <p className="max-w-3xl text-lg font-light">
            Health, Safety and Environment are of critical importance in our
            workplace, as the safety of our workers and respect of the
            environment are closely linked to our core values of being an
            actively responsible company.
          </p>
        </section>

        <section className="container py-12">
          <h2 className="text-4xl font-light">Certificates</h2>

          <div className="grid grid-cols-4 gap-12">
            {data.map((cert) => (
              <article className="space-y-4" key={cert._id}>
                {cert.image && (
                  <div className="relative m-3 aspect-[1/1.414] overflow-hidden border bg-white">
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
                      className="rounded-md transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                    <Dialog>
                      <DialogTrigger
                        className="absolute top-3 right-3 z-10"
                        asChild
                      >
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
                            View the full details of the {cert.title}{" "}
                            certificate. This certificate represents our
                            commitment to quality and compliance with
                            international standards.
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
                                  <Link
                                    href={`${cert.certificate}`}
                                    target="_blank"
                                  >
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
                <h3 className="text-lg font-medium text-sky-800">
                  {cert.title}
                </h3>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
