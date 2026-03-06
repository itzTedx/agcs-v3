import { FlickeringGrid } from "@/components/animations/flickering-grid";
import { TextAnimate } from "@/components/animations/text-animate";

import { cn } from "@/lib/utils";

interface Props {
	children: string;
	className?: string;
	id?: string;
}

export const Header = ({ children, className, id }: Props) => {
	return (
		<div className="relative w-full overflow-hidden bg-primary py-9">
			<FlickeringGrid
				className="mask-[radial-gradient(450px_circle_at_center,transparent,white)] absolute inset-0 z-0 size-full"
				color="#0284c7"
				flickerChance={0.1}
				gridGap={6}
				maxOpacity={0.5}
				squareSize={4}
			/>
			<TextAnimate
				animation="slideUp"
				as="h2"
				by="character"
				className={cn(
					"text-center font-bold text-4xl text-primary-foreground uppercase leading-none md:text-[4rem]",
					className
				)}
				id={id}
			>
				{children}
			</TextAnimate>
		</div>
	);
};
