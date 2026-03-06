import { TextAnimate } from "@/components/animations/text-animate";
import { Badge } from "@/components/ui/badge";

import { WaveSeparator } from "@/assets/wave-separator";

export function Header() {
	return (
		<header className="relative bg-white pt-12 md:h-[calc(100svh-3rem)] md:pt-20 dark:bg-slate-900">
			<div className="container flex flex-col items-center">
				<Badge className="text-center">We're Leading the market</Badge>
				<TextAnimate
					animation="slideUp"
					as="h1"
					by="line"
					className="pt-2 text-center font-light text-3xl tracking-tight md:text-5xl md:leading-14"
					once
				>
					{
						"Providing Quality Construction Service and\nConstruction Specialty Materials in Middle East."
					}
				</TextAnimate>
			</div>
			<div className="container relative z-10 max-w-7xl space-y-4 py-12 font-light sm:text-lg">
				<p>
					<span className="font-medium">
						Allied Gulf Construction Services W.L.L,
					</span>{" "}
					founded in the Kingdom of Bahrain has grown to become one of the
					leading Civil & Mechanical contracting services company handling
					various prestigious projects and is ranked as a leading General
					Construction service providing company across Middle East. We
					specialize in complex and prestigious construction and infrastructure
					projects.
				</p>
				<p>
					Our portfolio includes construction services for some of the region's
					most iconic landmarks, from super high-rise luxury developments, vital
					infrastructure and oil & gas projects, five star hotels, hospitals and
					intricately sophisticated smart buildings. We have also provides
					construction services for Houses, Shopping Centers, Restaurants,
					Hotels, Exhibition centers, provisioned complete Interior Fit out
					Services, Furniture, Kitchen Equipment, Structural Works, Coating &
					Insulation, Turnkey Restaurant Projects, Shades, Prefab Houses and
					Offices, M.E.P Works, Floorings, Skylight, Portable cabins, Container
					Conversion, Acoustics and General Trading with supply and installation
					of Equipment, Machineries and Specialty Construction Materials.
				</p>

				<p>
					A well experienced management team with a highly skilled and dedicated
					work force, our innovative methods and an exacting standard for
					completion have earned us a competitive edge well recognized in the
					industry. We have exacting HSE and sustainability standards and the
					health and safety of both our employees and the general public is
					given utmost priority.
				</p>

				<p>
					Longstanding and well established relationships with our clients have
					played a significant role in providing outstanding construction
					contracting services to companies and government agencies across the
					Middle East. With our continued commitment to development and change,
					we look forward to the future and all the challenges and opportunities
					that it will offer.
				</p>
			</div>
			<WaveSeparator
				aria-hidden
				className="pointer-events-auto absolute -bottom-px z-0 h-auto w-full select-none fill-background"
			/>
		</header>
	);
}
