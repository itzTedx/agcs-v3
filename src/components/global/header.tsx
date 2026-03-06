import { ArrowRightIcon, SearchIcon } from "lucide-react";

import { FlickeringGrid } from "../animations/flickering-grid";
import { Input } from "../ui/input";

interface Props {
	text: {
		title: string;
		subtext: string;
	};
}

export default function Header({ text }: Props) {
	return (
		<header className="relative bg-primary py-9 md:py-12">
			<FlickeringGrid
				className="mask-[radial-gradient(1280px_circle_at_center,transparent,white)] absolute inset-0 z-0 size-full"
				color="#0284c7"
				flickerChance={0.1}
				gridGap={6}
				maxOpacity={0.5}
				squareSize={4}
			/>
			<div className="container grid max-w-7xl items-center gap-4 md:grid-cols-3 md:gap-6">
				<div className="md:col-span-2">
					<h1 className="pb-1 font-light text-xl md:text-2xl">
						{text.title}
						<span className="sr-only">{text.subtext}</span>
					</h1>
					<p aria-hidden className="font-medium text-2xl md:pb-4 md:text-3xl">
						{text.subtext}
					</p>
				</div>
				<form className="*:not-first:mt-2">
					<div className="relative">
						<Input
							aria-label="Search"
							className="peer bg-background ps-9 pe-9"
							placeholder="What are you looking for?"
							type="search"
						/>
						<div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
							<SearchIcon size={16} />
						</div>
						<button
							aria-label="Submit search"
							className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md text-muted-foreground/80 outline-none transition-[color,box-shadow] hover:text-foreground focus:z-10 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
							type="submit"
						>
							<ArrowRightIcon aria-hidden="true" size={16} />
						</button>
					</div>
				</form>
			</div>
			<script type="application/ld+json">
				{JSON.stringify({
					"@context": "https://schema.org",
					"@type": "WebSite",
					name: text.title,
					description: text.subtext,
					potentialAction: {
						"@type": "SearchAction",
						target: {
							"@type": "EntryPoint",
							urlTemplate: "/?search={search_term_string}",
						},
						"query-input": "required name=search_term_string",
					},
				})}
			</script>
		</header>
	);
}
