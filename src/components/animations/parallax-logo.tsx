"use client";

import Image from "next/image";
import { memo, useRef } from "react";

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

interface ParallaxProps {
  image: string;
  baseVelocity: number;
  alt: string;
  priority?: boolean;
}

export const ParallaxLogo = memo(function ParallaxLogo({
  image,
  alt,
  baseVelocity = 100,
  priority = false,
}: ParallaxProps) {
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

  const x = useTransform(baseX, (v) => `${wrap(0, -100, v)}%`);
  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="w-full">
      <motion.div className="flex" style={{ x }} translate="no">
        {[...Array(4)].map((_, index) => (
          <Image
            key={index}
            src={image}
            height={81}
            width={1077}
            alt={alt}
            title={alt}
            className="h-full w-full object-contain"
            loading={priority ? "eager" : "lazy"}
            priority={priority}
          />
        ))}
      </motion.div>
    </div>
  );
});
