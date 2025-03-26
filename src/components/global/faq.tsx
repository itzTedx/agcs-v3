import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/data/faq";

import { FlickeringGrid } from "../animations/flickering-grid";

export function FAQs() {
  return (
    <section className="container">
      <div className="bg-primary relative rounded-lg p-9 md:p-12">
        <h2 className="text-3xl font-medium">Frequently Asked Questions</h2>
        <p className="relative z-10 pt-1 text-lg font-light">
          Everything you need to know. Can't find an answer?{" "}
          <Link href="/contact" className="underline">
            Chat with our team
          </Link>
        </p>
        <FlickeringGrid
          className="absolute inset-0 z-0 size-full [mask-image:radial-gradient(75rem_circle_at_left,transparent,white)]"
          squareSize={4}
          gridGap={6}
          color="#0284c7"
          maxOpacity={0.5}
          flickerChance={0.1}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {FAQS.map((f) => (
          <div className="pt-4 md:space-y-2 md:px-12 md:pt-9">
            <h3 className="text-xl font-semibold">{f.section}</h3>
            <Accordion type="single" collapsible className="w-full">
              {f.items.map((i) => (
                <AccordionItem value={i.question}>
                  <AccordionTrigger className="text-lg font-normal">
                    {i.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base font-normal">
                    {i.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  );
}
