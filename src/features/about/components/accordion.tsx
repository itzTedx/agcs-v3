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
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering) return; // Don't auto-cycle while hovering

    const timer = setTimeout(() => {
      setActiveItem((prev) => (prev + 1) % data.length);
    }, 3000);

    return () => clearTimeout(timer);
  }, [activeItem, data.length, isHovering]);

  return (
    <ShadcnAccor
      type="single"
      collapsible
      className="h-fit w-full space-y-2 overflow-hidden"
      value={data[activeItem].id}
    >
      {data.map((item) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          className={`group`}
          onMouseEnter={() => {
            setIsHovering(true);
            setActiveItem(data.findIndex((d) => d.id === item.id));
          }}
          onMouseLeave={() => {
            setIsHovering(false);
          }}
        >
          <AccordionTrigger
            className={cn(
              "bg-popover [&[data-state=open]]:bg-primary overflow-hidden border px-4 text-base",
              "[&[data-state=open]]:rounded-b-none"
            )}
          >
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="bg-popover overflow-hidden p-4 text-base font-light">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </ShadcnAccor>
  );
}
