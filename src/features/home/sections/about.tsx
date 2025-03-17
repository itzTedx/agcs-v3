import Image from "next/image";

export const About = () => {
  return (
    <section
      id="about"
      aria-label="About Allied Gulf Construction Services"
      className="container grid max-w-7xl gap-12 py-20 md:grid-cols-2"
    >
      <div className="relative aspect-square">
        <Image
          src="/images/about.webp"
          fill
          alt="Allied Gulf Construction Services office building"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <article className="space-y-2 font-light text-gray-800">
        <h2 className="pb-6 text-5xl font-bold text-sky-700">About us</h2>
        <p>
          <span className="font-bold">
            Allied Gulf Construction Services W.L.L,
          </span>{" "}
          founded in the Kingdom of Bahrain, has grown to become one of the
          leading Civil & Mechanical contracting services companies handling
          various prestigious projects and is ranked as a leading General
          Construction service provider across the Middle East. We specialize in
          complex and prestigious construction and infrastructure projects.
        </p>
        <p>
          Our portfolio includes construction services for some of the region's
          most iconic landmarks, from super high-rise luxury developments, vital
          infrastructure and oil & gas projects, five-star hotels, hospitals and
          intricately sophisticated smart buildings. We also provide
          construction services for houses, shopping centers, restaurants,
          hotels, exhibition centers, complete interior fit-out services,
          furniture, kitchen equipment, structural and sub-structural
          fabrication works, industrial buildings, warehouses, coating &
          insulation, turnkey restaurant projects, shades, prefab houses and
          offices, M.E.P works, floorings, skylights, portable cabins, container
          conversion, acoustics and general trading with supply and installation
          of equipment, machinery and specialty construction materials.
        </p>
      </article>
    </section>
  );
};
