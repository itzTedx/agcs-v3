"use client";

import { useRef, useState } from "react";

import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

import { Button } from "../ui/button";

export default function ExpandableCard({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	const [isExpanded, setIsExpanded] = useState(false);
	const contentRef = useRef<HTMLParagraphElement>(null);

	return (
		<div className={cn("flex flex-col items-center", className)}>
			<div className="relative overflow-hidden">
				<h2 className="text-gray-700 text-sm">Description:</h2>
				<motion.div
					animate={{ height: isExpanded ? "auto" : "12rem" }}
					className="relative"
					transition={{
						duration: 0.4,
						ease: [0.04, 0.62, 0.23, 0.98],
					}}
				>
					<div ref={contentRef}>{children}</div>
				</motion.div>

				{!isExpanded && (
					<div className="pointer-events-none absolute right-0 bottom-0 left-0 h-12 bg-linear-to-t from-background to-transparent" />
				)}
			</div>

			<Button
				className="mt-2 gap-1 text-sm"
				onClick={() => setIsExpanded(!isExpanded)}
				variant="ghost"
			>
				{isExpanded ? (
					<>
						<span>Read Less</span>
						<ChevronUp className="size-3.5" />
					</>
				) : (
					<>
						<span>Read More</span>
						<ChevronDown className="size-3.5" />
					</>
				)}
			</Button>
		</div>
	);
}
