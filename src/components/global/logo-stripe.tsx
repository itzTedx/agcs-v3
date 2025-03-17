"use client";

import Image from "next/image";
import { useRef } from "react";

import { wrap } from "motion";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";

import { AuroraText } from "../animations/aurora-text";

export function LogoStrip() {
  return (
    <section className="space-y-3 overflow-hidden text-center md:py-6">
      <h5 className="text-4xl font-light">
        Meet Our{" "}
        <AuroraText className="font-medium text-sky-500">Brands</AuroraText>
      </h5>
      <p className="text-sm font-light">
        We&apos;re collaborating with these top brands to fulfils you with best
        quality products distributed in kingdom of bahrain.
      </p>
      <div className="pointer-events-none flex flex-col items-center gap-6 py-5">
        <ParallaxLogo
          baseVelocity={-4}
          alt="Cyberfloor, blucher, liquid rubber, hauraton, yete, responsive, Alunotec"
          image="/images/logos/1.png"
        />
        <ParallaxLogo
          baseVelocity={4}
          alt="Skylux, dekodur, crawford, durable, kauass, eds, oasis Metal, al awazil, warrior, MG steel & iron"
          image="/images/logos/2.png"
        />

        <ParallaxLogo
          baseVelocity={-3}
          alt="celenit kingspan greenovoc speciality coatingsm welcraft miacasa, kimmco, sna, att indx drain"
          image="/images/logos/3.png"
        />
      </div>
    </section>
  );
}

interface ParallaxProps {
  image: string;
  baseVelocity: number;
  alt: string;
}

function ParallaxLogo({ image, alt, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(0, -100, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */

  return (
    <div className="">
      <motion.div className="flex" style={{ x }}>
        <Image
          src={image}
          height={81}
          width={1077}
          alt={alt}
          className="h-full w-full object-contain"
        />
        <Image
          src={image}
          height={81}
          width={1077}
          alt={alt}
          className="h-full w-full object-contain"
        />
        <Image
          src={image}
          height={81}
          width={1077}
          alt={alt}
          className="h-full w-full object-contain"
        />
        <Image
          src={image}
          height={81}
          width={1077}
          alt={alt}
          className="h-full w-full object-contain"
        />
      </motion.div>
    </div>
  );
}
