import { WaveSeparator } from "@/assets/wave-separator";

export function Header() {
  return (
    <header className="relative bg-white md:h-[calc(100svh-3rem)]">
      <p className="pt-12 text-center md:pt-20">We're Leading the market</p>
      <h1 className="container pt-2 text-center text-3xl font-light tracking-tight md:text-5xl md:leading-14">
        Providing Quality Construction Service and
        <br className="max-sm:hidden" /> Construction Specialty Materials in
        Middle East.
      </h1>
      <div className="relative z-10 container max-w-7xl space-y-4 py-12 font-light sm:text-lg">
        <p>
          <span className="font-medium">
            Allied Gulf Construction Services W.L.L,
          </span>{" "}
          founded in the Kingdom of Bahrain has grown to become one of the
          leading Civil & Mechanical contracting services company handling
          various prestigious projects and is ranked as a leading General
          Construction service providing company across Middle East. We
          specialize in complex and prestigious construction and infrastructure
          projects.
        </p>
        <p>
          Our portfolio includes construction services for some of the region's
          most iconic landmarks, from super high-rise luxury developments, vital
          infrastructure and oil & gas projects, five star hotels, hospitals and
          intricately sophisticated smart buildings. We have also provides
          construction services for Houses, Shopping Centers, Restaurants,
          Hotels, Exhibition centers, provisioned complete Interior Fit out
          Services, Furniture, Kitchen Equipment, Structural Works, Coating &
          Insulation, Turnkey Restaurant Projects, Shades, Prefab Houses and
          Offices, M.E.P Works, Floorings, Skylight, Portable cabins, Container
          Conversion, Acoustics and General Trading with supply and installation
          of Equipment, Machineries and Specialty Construction Materials.
        </p>

        <p>
          A well experienced management team with a highly skilled and dedicated
          work force, our innovative methods and an exacting standard for
          completion have earned us a competitive edge well recognized in the
          industry. We have exacting HSE and sustainability standards and the
          health and safety of both our employees and the general public is
          given utmost priority.
        </p>

        <p>
          Longstanding and well established relationships with our clients have
          played a significant role in providing outstanding construction
          contracting services to companies and government agencies across the
          Middle East. With our continued commitment to development and change,
          we look forward to the future and all the challenges and opportunities
          that it will offer.
        </p>
      </div>
      <WaveSeparator
        className="pointer-events-auto absolute bottom-0 z-0 h-auto w-full select-none"
        aria-hidden
      />
    </header>
  );
}
