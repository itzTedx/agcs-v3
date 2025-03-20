"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

const steps = [
  {
    title: "We'll prepare a proposal",
    description: "Required scope, timeline and aprox. price will be included",
  },
  {
    title: "Together we discuss it",
    description:
      "Let's get acquainted and discuss all the possible variants and options.",
  },
  {
    title: "Let's start building",
    description:
      "When the contract is signed and all goals are set we can start the first sprint.",
  },
];

export const NextSteps = () => {
  const [activeSteps, setActiveSteps] = useState<number[]>([]);

  useEffect(() => {
    steps.forEach((_, index) => {
      setTimeout(() => {
        setActiveSteps((prev) => [...prev, index]);
      }, index * 1000);
    });
  }, []);

  return (
    <div className="relative flex gap-8 py-12">
      <div className="h-full w-1 shrink-0 bg-gray-300"></div>
      <ul className="h-full space-y-6">
        {steps.map((step, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0.5 }}
            animate={{
              opacity: activeSteps.includes(index) ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
            className="relative flex items-start gap-4"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">
                {index + 1} {step.title}
              </h3>
              <p className="text-lg font-light text-gray-600">
                {step.description}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};
