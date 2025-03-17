import Link from "next/link";

import { Arrow } from "@/assets/arrow";

import { Button } from "../ui/button";

export const Cta = () => {
  return (
    <div className="overflow-x">
      <div className="question text-foreground relative mx-auto w-4/5 rounded-lg bg-radial from-[#5ebce6] to-[#3aaee3] px-10 py-7 duration-500 ease-in-out md:w-[38em] md:shadow-xl">
        <h5 className="max-w-[12em] pb-1 text-4xl font-bold md:max-w-[100%]">
          Have any Questions on Mind?
        </h5>
        <p className="arrow mb-8 font-light">
          Let{`'`}s talk about your project
        </p>
        <div className="relative w-fit">
          <Arrow className="absolute bottom-4 left-[120%]" />
          <Button variant="secondary" size="lg" asChild>
            <Link
              href="/contact"
              className="uppercase"
              aria-label="Just call us now"
            >
              Contact us
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
