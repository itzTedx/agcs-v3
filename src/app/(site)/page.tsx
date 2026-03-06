import dynamic from "next/dynamic";

import { SectionLoader } from "@/components/ui/section-loader";

import { HOME_FAQS } from "@/data/faq";
import { HomeSchema } from "@/features/home/schema/home-schema";
import { About } from "@/features/home/sections/about";
import { Hero } from "@/features/home/sections/hero";
import { Products } from "@/features/home/sections/products";
import { Services } from "@/features/home/sections/services";

// Dynamic imports
const Projects = dynamic(
	() =>
		import("@/features/home/sections/projects").then((mod) => ({
			default: mod.Projects,
		})),
	{
		loading: () => <SectionLoader height="400px" />,
	}
);
const FAQs = dynamic(
	() =>
		import("@/components/global/faq").then((mod) => ({
			default: mod.FAQs,
		})),
	{
		loading: () => <SectionLoader height="400px" />,
	}
);

const LogoStrip = dynamic(
	() =>
		import("@/components/global/logo-stripe").then((mod) => ({
			default: mod.LogoStrip,
		})),
	{
		loading: () => <SectionLoader height="100px" />,
	}
);

const Cta = dynamic(
	() => import("@/components/global/cta").then((mod) => ({ default: mod.Cta })),
	{
		loading: () => <SectionLoader height="200px" />,
	}
);

export default function Home() {
	return (
		<div>
			<Hero />
			<About />

			<Services />

			<Products />

			<LogoStrip />

			<Projects />

			<FAQs data={HOME_FAQS} />

			<Cta />

			<HomeSchema />
		</div>
	);
}
