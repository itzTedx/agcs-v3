import Link from "next/link";
import Script from "next/script";
import { memo } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQSection } from "@/data/faq";

import { FlickeringGrid } from "../animations/flickering-grid";

const FAQItem = memo(
  ({ question, answer }: { question: string; answer: string }) => (
    <AccordionItem value={question}>
      <AccordionTrigger className="text-lg font-normal">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-base font-normal">
        {answer}
      </AccordionContent>
    </AccordionItem>
  )
);
FAQItem.displayName = "FAQItem";

const FAQSection = memo(({ section, items }: FAQSection) => (
  <div className="pt-4 md:space-y-2 md:px-12 md:pt-9" key={section}>
    <h3 className="text-xl font-semibold">{section}</h3>
    <Accordion
      type="single"
      collapsible
      className="w-full"
      aria-label={`FAQ section: ${section}`}
    >
      {items.map((i) => (
        <FAQItem key={i.question} question={i.question} answer={i.answer} />
      ))}
    </Accordion>
  </div>
));
FAQSection.displayName = "FAQSection";

const generateFAQSchema = (data: FAQSection[]) => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.flatMap((section) =>
      section.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      }))
    ),
  };
  return JSON.stringify(faqSchema);
};

export const FAQs = memo(({ data }: { data: FAQSection[] }) => {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: generateFAQSchema(data) }}
      />
      <section className="container py-12" aria-labelledby="faq-title">
        <div className="bg-primary relative rounded-lg p-9 md:p-12">
          <h2 id="faq-title" className="text-3xl font-medium">
            Frequently Asked Questions
          </h2>
          <p className="relative z-10 pt-1 text-lg font-light">
            Everything you need to know. Can't find an answer?{" "}
            <Link
              href="/contact"
              className="underline transition-colors hover:text-sky-200"
              aria-label="Contact our team for more help"
            >
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
        <div
          className="grid gap-4 md:grid-cols-2"
          role="region"
          aria-label="FAQ sections"
        >
          {data.map((f) => (
            <FAQSection key={f.section} {...f} />
          ))}
        </div>
      </section>
    </>
  );
});
FAQs.displayName = "FAQs";
