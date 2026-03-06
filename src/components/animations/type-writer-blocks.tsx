"use client";

import { useEffect, useState } from "react";

import { motion } from "motion/react";

const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;
const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;

const SWAP_DELAY_IN_MS = 5500;

export const TypeWriter = ({
	examples,
	onExampleClick,
}: {
	examples: string[];
	onExampleClick: (example: string) => void;
}) => {
	const [exampleIndex, setExampleIndex] = useState(0);

	// biome-ignore lint/correctness/useExhaustiveDependencies: no need to re-run the effect
	useEffect(() => {
		const intervalId = setInterval(() => {
			setExampleIndex((prev) => (prev + 1) % examples.length);
		}, SWAP_DELAY_IN_MS);

		return () => clearInterval(intervalId);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<span className="line-clamp-1 w-full cursor-pointer text-xs">
			<strong className="text-sky-600"> ✦ Ask about: </strong>
			{examples[exampleIndex].split("").map((l, i) => {
				return (
					<motion.span
						animate={{ opacity: 0 }}
						className="relative text-gray-700"
						initial={{ opacity: 1 }}
						key={l}
						onClick={() => onExampleClick(examples[exampleIndex])}
						transition={{
							delay: FADE_DELAY,
							duration: MAIN_FADE_DURATION,
							ease: "easeInOut",
						}}
					>
						<motion.span
							animate={{ opacity: 1 }}
							initial={{
								opacity: 0,
							}}
							transition={{
								delay: i * LETTER_DELAY,
								duration: 0,
							}}
						>
							{l}
						</motion.span>
						<motion.span
							animate={{ opacity: [0, 1, 0] }}
							className="absolute top-[3px] right-0 bottom-[3px] left-px bg-gray-950"
							initial={{ opacity: 0 }}
							transition={{
								times: [0, 0.1, 1],
								delay: i * LETTER_DELAY,
								duration: BOX_FADE_DURATION,
								ease: "easeInOut",
							}}
						/>
					</motion.span>
				);
			})}
		</span>
	);
};
