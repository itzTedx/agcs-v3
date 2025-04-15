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

interface ParallaxImage {
  src: string;
  alt: string;
  priority?: boolean;
}

interface ParallaxProps {
  images: ParallaxImage[];
  baseVelocity: number;
}

export const ParallaxLogo = memo(function ParallaxLogo({
  images,
  baseVelocity = 100,
}: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5]);

  const x = useTransform(baseX, (v) => `${wrap(0, -100, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((_, delta) => {
    const velocity = velocityFactor.get();
    directionFactor.current = velocity < 0 ? -1 : 1;
    const moveBy =
      directionFactor.current *
      baseVelocity *
      (delta / 1000) *
      (1 + Math.abs(velocity));
    baseX.set(baseX.get() + moveBy);
  });

  const repeatedImages = Array.from({ length: 6 }, () => images).flat();

  return (
    <div className="w-full">
      <motion.div className="flex gap-8" style={{ x }} translate="no">
        {repeatedImages.map((image, index) => (
          <div key={index} className="relative size-16 shrink-0 md:size-28">
            <Image
              src={image.src}
              fill
              alt={image.alt}
              title={image.alt}
              className="h-full w-full overflow-hidden rounded-md object-contain"
              loading={image.priority ? "eager" : "lazy"}
              priority={image.priority}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
});
