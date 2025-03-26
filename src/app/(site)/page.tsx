import dynamic from "next/dynamic";
import { Suspense } from "react";

import { SectionLoader } from "@/components/ui/section-loader";
import { HomeSchema } from "@/features/home/schema/home-schema";
import { Hero } from "@/features/home/sections/hero";

// Dynamic imports
const About = dynamic(
  () =>
    import("@/features/home/sections/about").then((mod) => ({
      default: mod.About,
    })),
  {
    loading: () => <SectionLoader height="400px" />,
  }
);

const Services = dynamic(
  () =>
    import("@/features/home/sections/services").then((mod) => ({
      default: mod.Services,
    })),
  {
    loading: () => <SectionLoader height="600px" />,
  }
);

const Products = dynamic(
  () =>
    import("@/features/home/sections/products").then((mod) => ({
      default: mod.Products,
    })),
  {
    loading: () => <SectionLoader height="600px" />,
  }
);

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
      <Suspense fallback={<SectionLoader height="400px" />}>
        <About />
      </Suspense>

      <Suspense fallback={<SectionLoader height="600px" />}>
        <Services />
      </Suspense>

      <Suspense fallback={<SectionLoader height="600px" />}>
        <Products />
      </Suspense>
      <Suspense fallback={<SectionLoader height="100px" />}>
        <LogoStrip />
      </Suspense>
      <Suspense fallback={<SectionLoader height="400px" />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionLoader height="200px" />}>
        <FAQs />
      </Suspense>
      <Suspense fallback={<SectionLoader height="200px" />}>
        <Cta />
      </Suspense>
      <HomeSchema />
    </div>
  );
}
