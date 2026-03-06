"use client";

import { useEffect, useState } from "react";

import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	Accordion as ShadcnAccor,
} from "@/components/ui/accordion";

import { cn } from "@/lib/utils";

import { AccordionData } from "../sections/vision-mission";

export function Accordion({ data }: AccordionData) {
	const [activeItem, setActiveItem] = useState(0);

	// biome-ignore lint/correctness/useExhaustiveDependencies: no need to re-run the effect
	useEffect(() => {
		const timer = setTimeout(() => {
			setActiveItem((prev) => (prev + 1) % data.length);
		}, 3000); // Change item every 3 seconds

		return () => clearTimeout(timer);
	}, [activeItem, data.length]);

	return (
		<ShadcnAccor
			className="h-fit w-full space-y-2 overflow-hidden"
			collapsible
			type="single"
			value={data[activeItem].id}
		>
			{data.map((item) => (
				<AccordionItem className={"group"} key={item.id} value={item.id}>
					<AccordionTrigger
						className={cn(
							"overflow-hidden border bg-popover px-4 text-base data-[state=open]:bg-primary",
							"data-[state=open]:rounded-b-none"
						)}
					>
						{item.title}
					</AccordionTrigger>
					<AccordionContent className="overflow-hidden bg-popover p-4 font-light text-base">
						{item.content}
					</AccordionContent>
				</AccordionItem>
			))}
		</ShadcnAccor>
	);
}
