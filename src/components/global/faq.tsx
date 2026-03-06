import { memo, useMemo } from "react";

import Link from "next/link";
import Script from "next/script";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

import type { FAQSection } from "@/data/faq";

import { FlickeringGrid } from "../animations/flickering-grid";

const FAQItem = ({
	question,
	answer,
}: {
	question: string;
	answer: string;
}) => (
	<AccordionItem value={question}>
		<AccordionTrigger className="font-normal md:text-lg">
			<summary className="list-none">{question}</summary>
		</AccordionTrigger>
		<AccordionContent className="font-normal md:text-base">
			{answer}
		</AccordionContent>
	</AccordionItem>
);

const Faqs = ({ section, items }: FAQSection) => (
	<div className="pt-4 md:space-y-2 md:px-12 md:pt-9" key={section}>
		<h3 className="font-semibold md:text-xl">{section}</h3>
		<Accordion
			aria-label={`FAQ section: ${section}`}
			className="w-full"
			collapsible
			type="single"
		>
			{items.map((i) => (
				<FAQItem answer={i.answer} key={i.question} question={i.question} />
			))}
		</Accordion>
	</div>
);

const generateFAQSchema = (data: FAQSection[]) => {
	const faqSchema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		description: "Frequently asked questions about our services and solutions",
		mainEntity: data.flatMap((section) =>
			section.items.map((item) => ({
				"@type": "Question",
				name: item.question,
				acceptedAnswer: {
					"@type": "Answer",
					text: item.answer,
				},
			}))
		),
	};
	return JSON.stringify(faqSchema);
};

export const FAQs = memo(
	({ data }: { data: FAQSection[] }) => {
		const faqSchema = useMemo(() => generateFAQSchema(data), [data]);

		return (
			<section aria-labelledby="faq-title" className="container py-12">
				<Script type="application/ld+json">{JSON.stringify(faqSchema)}</Script>
				<div className="relative rounded-lg bg-primary p-9 lg:p-12">
					<h2 className="font-medium text-xl md:text-3xl" id="faq-title">
						Frequently Asked Questions
					</h2>
					<p className="relative z-10 pt-1 font-light md:text-lg">
						Everything you need to know. Can&apos;t find an answer?{" "}
						<Link
							aria-label="Contact our team for more help"
							className="underline transition-colors hover:text-sky-200"
							href="/contact"
						>
							Chat with our team
						</Link>
					</p>
					<FlickeringGrid
						className="mask-[radial-gradient(75rem_circle_at_left,transparent,white)] absolute inset-0 z-0 size-full"
						color="#0284c7"
						flickerChance={0.1}
						gridGap={6}
						maxOpacity={0.5}
						squareSize={4}
					/>
				</div>
				<section className="grid lg:grid-cols-2 lg:gap-4">
					{data.map((f) => (
						<Faqs key={f.section} {...f} />
					))}
				</section>
			</section>
		);
	},
	(prev, next) => prev.data === next.data
);

FAQs.displayName = "FAQs";
