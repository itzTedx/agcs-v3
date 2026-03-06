"use client";

import { useEffect, useState } from "react";

import { motion } from "motion/react";

import { MultiStepLoader } from "@/components/animations/multi-step-loader";

const steps = [
	{
		title: "We'll prepare a proposal",
		description: "Required scope, timeline and aprox. price will be included",
	},
	{
		title: "Together we discuss it",
		description:
			"Let's get acquainted and discuss all the possible variants and options.",
	},
	{
		title: "Let's start building",
		description:
			"When the contract is signed and all goals are set we can start the first sprint.",
	},
];

export const NextSteps = () => {
	const [activeSteps, setActiveSteps] = useState<number[]>([]);

	useEffect(() => {
		steps.forEach((_, index) => {
			setTimeout(() => {
				setActiveSteps((prev) => [...prev, index]);
			}, index * 1000);
		});
	}, []);

	return (
		<div className="relative flex gap-8 py-12">
			<MultiStepLoader data={steps} duration={2000} loading={true} />

			<div className="relative h-full w-1 shrink-0 bg-gray-300" />
			<ul className="h-full space-y-6">
				{steps.map((step, index) => (
					<motion.li
						animate={{
							opacity: activeSteps.includes(index) ? 1 : 0.3,
						}}
						className="relative flex items-start gap-4"
						initial={{ opacity: 0.3 }}
						key={step.title}
						transition={{ duration: 0.5 }}
					>
						<div className="flex flex-col gap-2">
							<h3 className="font-semibold text-xl">
								{index + 1} {step.title}
							</h3>
							<p className="font-light text-gray-600 text-lg">
								{step.description}
							</p>
						</div>
					</motion.li>
				))}
			</ul>
		</div>
	);
};
