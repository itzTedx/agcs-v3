import { memo } from "react";

import { AuroraText } from "../animations/aurora-text";
import { ParallaxLogo } from "../animations/parallax-logo";

export const LogoStrip = memo(function LogoStrip() {
  const constructionPartners = [
    { src: "/images/logos/forms-surfaces.jpg", alt: "Forms + Surfaces" },
    { src: "/images/logos/mediclinics.png", alt: "mediclinics" },
    { src: "/images/logos/rivedil.png", alt: "rivedil" },
    {
      src: "/images/logos/sna.webp",
      alt: "SNA Sound and Acoustic",
    },
    { src: "/images/logos/bcr.jpg", alt: "BCR UK LTD" },
    { src: "/images/logos/stern.png", alt: "STERN" },
  ];

  const industrialPartners = [
    { src: "/images/logos/pinger.png", alt: "Hauraton" },
    { src: "/images/logos/responsive.jpg", alt: "Hauraton" },
    { src: "/images/logos/ducast.png", alt: "Hauraton" },
    { src: "/images/logos/greenovoc.jpg", alt: "Hauraton" },
    { src: "/images/logos/kimmco.png", alt: "Hauraton" },
    { src: "/images/logos/fipco.png", alt: "Hauraton" },
  ];

  const materialPartners = [
    { src: "/images/logos/acfa.jpg", alt: "Hauraton" },
    { src: "/images/logos/solatube.gif", alt: "Hauraton" },
    { src: "/images/logos/skylux.jpg", alt: "Hauraton" },
    { src: "/images/logos/twe.jpg", alt: "Hauraton" },
    { src: "/images/logos/alstone.jpg", alt: "Hauraton" },
    {
      src: "/images/logos/sna.webp",
      alt: "SNA Sound and Acoustic",
    },
  ];

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
        throughout Middle East.
      </p>
      <div className="pointer-events-none flex flex-col items-center gap-3 py-5 md:gap-6">
        <ParallaxLogo baseVelocity={-4} images={constructionPartners} />
        <ParallaxLogo baseVelocity={4} images={industrialPartners} />
        <ParallaxLogo baseVelocity={-4} images={materialPartners} />
      </div>
    </section>
  );
});
