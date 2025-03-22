"use client";

import { useEffect, useState } from "react";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Accordion as ShadcnAccor,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

import { AccordionData } from "../sections/vision-mission";

export function Accordion({ data }: AccordionData) {
  const [activeItem, setActiveItem] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveItem((prev) => (prev + 1) % data.length);
    }, 3000); // Change item every 3 seconds

    return () => clearTimeout(timer);
  }, [activeItem, data.length]);

  return (
    <ShadcnAccor
      type="single"
      collapsible
      className="h-fit w-full space-y-2 overflow-hidden"
      value={data[activeItem].id}
    >
      {data.map((item) => (
        <AccordionItem key={item.id} value={item.id} className={`group`}>
          <AccordionTrigger
            className={cn(
              "overflow-hidden border bg-white px-4 text-base [&[data-state=open]]:bg-sky-400",
              "rounded-b-none"
            )}
          >
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="overflow-hidden bg-white p-4 text-base font-light">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </ShadcnAccor>
  );
}
