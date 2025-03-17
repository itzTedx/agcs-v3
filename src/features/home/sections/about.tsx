import Image from "next/image";

export const About = () => {
  return (
    <section
      id="about"
      className="container grid max-w-7xl gap-12 py-20 md:grid-cols-2"
    >
      <div className="relative aspect-square">
        <Image src="/images/about.png" fill alt="" />
      </div>
      <div className="space-y-2 font-light text-gray-800">
        <h2 className="pb-6 text-5xl font-bold text-sky-700">About us</h2>
        <p>
          <span className="font-bold">
            {" "}
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
          Services, Furniture, Kitchen Equipment, Structural and sub-structural
          fabrication works, Industrial Buildings, Warehouses, Coating &
          Insulation, Turnkey Restaurant Projects, Shades, Prefab Houses and
          Offices, M.E.P Works, Floorings, Skylight, Portable cabins, Container
          Conversion, Acoustics and General Trading with supply and installation
          of Equipment, Machineries and Specialty Construction Materials.
        </p>
      </div>
    </section>
  );
};
