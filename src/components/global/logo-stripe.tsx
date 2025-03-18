import { memo } from "react";

import { AuroraText } from "../animations/aurora-text";
import { ParallaxLogo } from "../animations/parallax-logo";

export const LogoStrip = memo(function LogoStrip() {
  return (
    <section
      className="space-y-3 overflow-hidden text-center md:py-6"
      aria-label="Our Brand Partners"
    >
      <h4 className="text-4xl font-light">
        Meet Our <span className="sr-only">Brands</span>
        <AuroraText className="font-medium text-sky-500">Brands</AuroraText>
      </h4>
      <p className="text-sm font-light">
        We collaborate with leading brands to provide high-quality products
        throughout the Kingdom of Bahrain.
      </p>
      <div className="pointer-events-none flex flex-col items-center gap-6 py-5">
        <ParallaxLogo
          baseVelocity={-4}
          alt="Construction partners: Cyberfloor, Blucher, Liquid Rubber, Hauraton, Yete, Responsive, Alunotec"
          image="/images/logos/1.png"
          priority
        />
        <ParallaxLogo
          baseVelocity={4}
          alt="Industrial partners: Skylux, Dekodur, Crawford, Durable, Kauass, EDS, Oasis Metal, Al Awazil, Warrior, MG Steel & Iron"
          image="/images/logos/2.png"
        />
        <ParallaxLogo
          baseVelocity={-3}
          alt="Material partners: Celenit, Kingspan, Greenovoc, Specialty Coatings, Welcraft, Miacasa, Kimmco, SNA, ATT, Indx Drain"
          image="/images/logos/3.png"
        />
      </div>
    </section>
  );
});
