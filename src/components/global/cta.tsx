import Link from "next/link";

import { Arrow } from "@/assets/arrow";

import { FlickeringGrid } from "../animations/flickering-grid";
import { Button } from "../ui/button";

export const Cta = () => {
  return (
    <div className="overflow-x" title="Contact Us Section">
      <div
        role="region"
        aria-labelledby="cta-heading"
        className="question text-foreground relative mx-auto w-4/5 rounded-lg bg-gradient-to-r from-[#5ebce6] to-[#3aaee3] px-10 py-7 duration-300 ease-out md:w-[38em] md:shadow-xl"
      >
        <FlickeringGrid
          className="absolute inset-0 z-0 size-full [mask-image:radial-gradient(50rem_circle_at_left,transparent,white)]"
          squareSize={3}
          gridGap={6}
          color="#0284c7"
          maxOpacity={0.5}
          flickerChance={0.1}
        />
        <h4
          id="cta-heading"
          className="max-w-[12em] pb-1 text-4xl font-bold md:max-w-[100%]"
        >
          Have any Questions on Mind?
        </h4>
        <p className="arrow mb-8 font-light">
          Let{`'`}s talk about your project
        </p>
        <div className="relative w-fit">
          <Arrow className="absolute bottom-4 left-[120%]" aria-hidden="true" />
          <Button variant="secondary" size="lg" asChild>
            <Link
              href="/contact"
              className="uppercase"
              prefetch={true}
              aria-label="Contact us to discuss your project"
            >
              Contact us
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
