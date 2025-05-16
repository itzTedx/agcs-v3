import { WaveSeparator } from "@/assets/wave-separator";
import { TextAnimate } from "@/components/animations/text-animate";
import { Badge } from "@/components/ui/badge";

export function Header() {
  return (
    <header className="relative bg-white py-12 md:py-20 dark:bg-slate-900">
      <div className="container flex flex-col items-center">
        <Badge className="text-center">We&apos;re Leading the market</Badge>
        <TextAnimate
          animation="slideUp"
          by="line"
          as="h1"
          once
          className="pt-2 text-center text-3xl font-light tracking-tight md:text-5xl md:leading-14"
        >
          {`Providing Quality Construction Service and\nConstruction Specialty Materials in Middle East.`}
        </TextAnimate>
      </div>
      <article className="prose dark:prose-invert relative z-10 container max-w-7xl space-y-4 py-12 font-light">
        <p>
          <span className="font-medium">
            Gulf Construction Solutions W.L.L,
          </span>{" "}
          established in the{" "}
          <span className="inline-block font-medium">
            Kingdom of Saudi Arabia,
          </span>{" "}
          marks a significant expansion of our operations in the region. As a
          new arm of our well-established presence in the Gulf, Gulf
          Construction Solutions brings with it the legacy, expertise, and
          excellence of our founding company from Bahrain. We are rapidly
          emerging as a leading{" "}
          <span className="font-medium">
            Civil & Mechanical contracting services company
          </span>{" "}
          in Saudi Arabia, delivering high-quality solutions across a wide range
          of prestigious and complex projects.
        </p>
        <p>
          We specialize in{" "}
          <span className="font-medium">
            high-end construction and infrastructure development,
          </span>
          offering services that span the full scope of the built environment.
          Our Saudi operations aim to contribute meaningfully to the Kingdom’s
          Vision 2030 by supporting landmark developments that define modern
          urban and industrial landscapes.
        </p>
        <div className="grid grid-cols-2 gap-9">
          <p className="text-lg">
            Our expanding portfolio in Saudi Arabia includes:
          </p>
          <ul className="capitalize">
            <li>Super high-rise luxury developments</li>
            <li>Strategic infrastructure projects</li>
            <li>Oil & gas sector developments</li>
            <li>Five-star hospitality properties</li>
            <li>World-class health care facilities</li>
            <li>Smart buildings with advanced engineering systems</li>
          </ul>
          <p className="text-lg text-balance">
            In addition, we offer a wide range of specialized construction and
            fit-out services such as:
          </p>
          <ul className="capitalize">
            <li>Residential housing and commercial shopping centers</li>
            <li>Restaurants, hotels, and exhibition centers</li>
            <li>Complete interior fit-out solutions and custom furniture</li>
            <li>Kitchen equipment supply and installation</li>
            <li>Structural works, coatings, and insulation</li>
            <li>Turnkey restaurant projects and custom shade structures</li>
            <li>Prefab houses and modular offices</li>
            <li>MEP (Mechanical, Electrical, Plumbing) works</li>
            <li>Flooring systems, skylights, portable cabins</li>
            <li>Container conversions, acoustics, and soundproofing</li>
            <li>
              General trading, including supply and installation of equipment,
              machinery, and specialty construction materials
            </li>
          </ul>
        </div>
        <p>
          Led by a highly experienced management team and a skilled, dedicated
          workforce,{" "}
          <span className="font-medium">Gulf Construction Solutions W.L.L</span>{" "}
          stands apart through its innovative construction methodologies and
          uncompromising standards for quality and project completion. We uphold
          strict HSE (Health, Safety & Environment) and sustainability
          protocols, ensuring the safety of our workforce and the communities we
          serve.
        </p>
        <p>
          Our strong client relationships and long-term partnerships continue to
          drive our success as a trusted provider for both private enterprises
          and government agencies across the region.
        </p>
        <p>
          As we establish our footprint in Saudi Arabia, we remain committed to
          embracing innovation, sustainability, and excellence—ready to face new
          challenges and seize emerging opportunities.
        </p>
      </article>
      <WaveSeparator
        className="fill-background pointer-events-auto absolute -bottom-px z-0 h-auto w-full select-none"
        aria-hidden
      />
    </header>
  );
}
