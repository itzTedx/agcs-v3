import Link from "next/link";
import Script from "next/script";

import { Arrow } from "@/assets/arrow";

import { FlickeringGrid } from "../animations/flickering-grid";
import { Button } from "../ui/button";

export const Cta = () => {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		mainEntity: {
			"@type": "ContactPage",
			name: "Contact Us",
			description:
				"Have questions about your project? Contact us to discuss your requirements.",
			url: "/contact",
		},
	};

	return (
		<section aria-label="Contact Call to Action" className="overflow-x py-12">
			<Script type="application/ld+json">{JSON.stringify(jsonLd)}</Script>
			<div
				className="question relative mx-auto w-4/5 rounded-lg bg-linear-to-r from-primary to-[#3aaee3] px-10 py-7 text-foreground duration-300 ease-out md:w-[38em] md:shadow-xl dark:to-sky-700"
				itemScope
				itemType="https://schema.org/CallToAction"
			>
				<FlickeringGrid
					className="mask-[radial-gradient(50rem_circle_at_left,transparent,white)] absolute inset-0 z-0 size-full"
					color="#0284c7"
					flickerChance={0.1}
					gridGap={6}
					maxOpacity={0.5}
					squareSize={3}
				/>
				<h4
					className="max-w-[12em] pb-1 font-bold text-2xl md:max-w-full md:text-4xl"
					id="cta-heading"
					itemProp="name"
				>
					Have any Questions on Mind?
				</h4>
				<p className="arrow mb-8 font-light" itemProp="description">
					Let{`'`}s talk about your project
				</p>
				<div className="relative w-fit">
					<Arrow aria-hidden="true" className="absolute bottom-4 left-[120%]" />
					<Button asChild size="lg" variant="secondary">
						<Link
							aria-label="Contact us to discuss your project"
							className="uppercase"
							href="/contact"
							itemProp="url"
							prefetch={true}
							rel="nofollow"
							title="Contact us to discuss your project requirements"
						>
							Contact us
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
};
