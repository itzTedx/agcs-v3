import { Suspense } from "react";

import type { Metadata, Route } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

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

import type { CERTIFICASTES_QUERYResult } from "../../../../../sanity.types";

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
								alt={`${cert.title} Certificate from Allied Gulf Construction Services`}
								className="rounded-md transition-transform duration-300 hover:scale-105"
								fill
								loading="lazy"
								quality={85}
								sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
								src={urlFor(cert.image).url()}
								style={{ objectFit: "cover" }}
								title={cert.title ?? "Certificate"}
							/>
							<Dialog>
								<DialogTrigger asChild className="absolute top-3 right-3 z-10">
									<Button
										className="bg-background/30 backdrop-blur-xl"
										size="icon"
										type="button"
										variant="ghost"
									>
										<IconMaximize />
									</Button>
								</DialogTrigger>
								<DialogContent className="overflow-hidden border border-primary p-4">
									<DialogHeader className="absolute inset-x-3 top-3 z-10 flex-row items-center justify-between rounded-md bg-background/40 px-2 py-1 backdrop-blur-lg">
										<DialogTitle>{cert.title} Certificate</DialogTitle>
										<DialogDescription className="sr-only">
											View the full details of the {cert.title} certificate.
											This certificate represents our commitment to quality and
											compliance with international standards.
										</DialogDescription>
										<div className="flex items-center gap-2">
											<DropdownMenu>
												<DropdownMenuTrigger asChild>
													<Button size="icon" variant="ghost">
														<IconDots />
													</Button>
												</DropdownMenuTrigger>
												<DropdownMenuContent>
													<DropdownMenuLabel>Options</DropdownMenuLabel>
													<DropdownMenuSeparator />
													<DropdownMenuItem asChild>
														<Link
															href={
																`${cert.certificate}?dl=${cert.title}-Certificate-AGCS.pdf` as Route
															}
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
															href={`${cert.certificate}` as Route}
															target="_blank"
														>
															Print
														</Link>
													</DropdownMenuItem>
												</DropdownMenuContent>
											</DropdownMenu>

											<DialogClose asChild>
												<Button size="icon" variant="ghost">
													<IconX />
												</Button>
											</DialogClose>
										</div>
									</DialogHeader>
									<div className="relative aspect-[1/1.414] overflow-hidden rounded-2xl border bg-white">
										<Image
											alt={cert.title ?? "Certificate Image"}
											className=""
											fill
											loading="lazy"
											quality={100}
											sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
											src={urlFor(cert.image).url()}
											style={{
												objectFit: "cover",
											}}
											title={cert.title ?? "Certificate"}
										/>
									</div>
								</DialogContent>
							</Dialog>
						</div>
					)}
					<h3 className="font-medium text-lg text-sky-800">{cert.title}</h3>
				</article>
			))}
		</div>
	);
}

export default async function CertificationPage() {
	const data = await getCertifications();

	return (
		<>
			<Script type="application/ld+json">
				{JSON.stringify(certificationSchema)}
			</Script>
			<div className="flex min-h-screen flex-col">
				<header className="relative bg-navbar py-12 md:py-32">
					<FlickeringGrid
						className="mask-[radial-gradient(75rem_circle_at_left,transparent,white)] absolute inset-0 z-0 size-full opacity-25"
						color="#0284c7"
						flickerChance={0.1}
						gridGap={6}
						maxOpacity={0.5}
						squareSize={4}
					/>
					<div className="container">
						<Badge>Certifications</Badge>
						<h1 className="max-w-4xl font-light text-3xl tracking-tight md:text-5xl">
							Professional Certifications & Quality Standards
						</h1>
						<p className="mt-4 max-w-2xl text-lg text-muted-foreground">
							Ensuring compliance with international and regional directives
							through comprehensive certification programs.
						</p>
					</div>
				</header>
				<main className="grow">
					<section
						aria-labelledby="quality-standards"
						className="container py-12"
					>
						<h2
							className="max-w-3xl pb-4 font-bold text-2xl text-sky-600"
							id="quality-standards"
						>
							Industry-Leading Quality Control Standards
						</h2>
						<p className="max-w-3xl pb-3 font-light text-lg">
							These standards are rigorously implemented across all of our
							operations and facilities, as well as our products, which
							regularly undergo testing and are certified by leading
							accreditation bodies.
						</p>
						<p className="max-w-3xl font-light text-lg">
							Health, Safety and Environment are of critical importance in our
							workplace, as the safety of our workers and respect of the
							environment are closely linked to our core values of being an
							actively responsible company.
						</p>
					</section>

					<section
						aria-labelledby="certificates"
						className="container py-12"
						itemScope
						itemType="https://schema.org/ItemList"
					>
						<h2
							className="font-light text-4xl"
							id="certificates"
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
