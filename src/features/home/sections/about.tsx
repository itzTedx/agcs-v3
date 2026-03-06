import Image from "next/image";
import Link from "next/link";

import { IconArrowRight } from "@tabler/icons-react";

import { AuroraText } from "@/components/animations/aurora-text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const About = () => {
	const services = [
		"Shopping Centers",
		"Restaurants",
		"Hotels",
		"Complete Interior Fit-Out Services",
		"Industrial Buildings",
		"Warehouses",
		"Coating & Insulation",
		"Turnkey Restaurant Projects",
		"Shades",
		"Prefab Houses and Offices",
		"M.E.P Works",
		"Floorings",
		"Skylights",
		"Portable Cabins",
		"Container Conversion",
		"Acoustics",
		"Construction Specialty Materials",
		"General Trading with Supply and Installation",
		"Structural and Sub-Structural Fabrication Works",
	];
	return (
		<section
			aria-label="About Allied Gulf Construction Services"
			className="bg-[#e8e8e8] py-12 md:py-20 dark:bg-navbar"
			id="about"
		>
			<div className="container relative grid gap-12 md:grid-cols-2">
				<div className="relative aspect-square md:sticky md:top-16">
					<Image
						alt="Allied Gulf Construction Services office building"
						className="object-contain"
						fill
						priority
						sizes="(max-width: 768px) 100vw, 50vw"
						src="/images/about.webp"
						title="Allied Gulf Construction Services office building"
					/>
				</div>
				<article className="prose dark:prose-invert">
					<h2 className="font-bold text-3xl text-sky-700">
						<AuroraText>About us</AuroraText>
					</h2>
					<p className="text-balance">
						<span className="font-bold">
							Allied Gulf Construction Services W.L.L,
						</span>{" "}
						founded in the Kingdom of Bahrain, has grown to become one of the
						leading Civil & Mechanical contracting services companies handling
						various prestigious projects and is ranked as a leading General
						Construction service provider across the Middle East. We specialize
						in complex and prestigious construction and infrastructure projects.
					</p>
					<p className="">
						Our portfolio includes construction services for some of the
						region's most iconic landmarks, from
					</p>
					<ul className="capitalize">
						<li>super high-rise luxury developments,</li>
						<li>vital infrastructure </li>
						<li>oil & gas projects,</li>
						<li>five-star hotels,</li>
						<li>hospitals,</li>
						<li>intricately sophisticated smart buildings</li>
					</ul>
					<p>We also provide construction services for:</p>
					<div className="flex flex-wrap gap-3 capitalize">
						{services.map((s) => (
							<Badge key={s}>{s}</Badge>
						))}
					</div>
					<div className="mt-9 flex items-center space-x-4">
						<Button
							asChild
							className="rounded-md border border-primary bg-sky-50 font-medium text-primary text-sm tracking-wide no-underline shadow-[-4px_-2px_16px_0px_#ffffff,4px_2px_16px_0px_rgb(95_157_231/48%)] hover:bg-sky-100 hover:text-primary-foreground hover:shadow-[-2px_-1px_8px_0px_#ffffff,2px_1px_8px_0px_rgb(95_157_231/48%)] active:shadow-none"
						>
							<Link className="w-fit" href="/company/about">
								<svg
									aria-hidden="true"
									className="css-i6dzq1"
									fill="none"
									height="24"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									viewBox="0 0 24 24"
									width="24"
								>
									<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
								</svg>{" "}
								Know More
							</Link>
						</Button>
						<Button
							asChild
							className="border-primary text-primary-foreground"
							size="lg"
							variant="ghost"
						>
							<Link href="/contact">
								Contact <IconArrowRight />
							</Link>
						</Button>
					</div>
				</article>
			</div>
		</section>
	);
};
