"use client";

import Link from "next/link";

import { IconChevronsDown } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useMediaQuery } from "@/hooks/use-media-query";

import type { PRODUCTS_CATEGORIES_QUERYResult } from "../../../../sanity.types";

interface Props {
  data: PRODUCTS_CATEGORIES_QUERYResult;
}

export function Sidebar({ data }: Props) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  //   Desktop
  if (isDesktop)
    return (
      <aside className="sticky bottom-16 z-10 h-fit rounded-lg px-4 py-2 backdrop-blur-lg max-sm:bg-white/80 md:top-12 md:py-12">
        <div className="text-start">
          <p className="font-light">Looking for our other</p>
          <h2 className="text-2xl md:mb-3">Products</h2>
        </div>
        <ul className="space-y-3 pb-3">
          {data.slice(0, 10).map((cat) => (
            <li key={cat._id}>
              <Button
                className="bg-primary/10 w-full justify-start border-sky-300 shadow-none"
                asChild
              >
                <Link href={`/products/${cat.slug?.current}`}>
                  {cat.category}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
        {data.length > 10 && (
          <Collapsible>
            <CollapsibleContent className="pb-3">
              <ul className="space-y-3">
                {data.slice(10).map((cat) => (
                  <li key={cat._id}>
                    <Button
                      className="bg-primary/10 w-full justify-start border-sky-300 shadow-none"
                      asChild
                    >
                      <Link href={`/products/${cat.slug?.current}`}>
                        {cat.category}
                      </Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
            <CollapsibleTrigger
              className="flex w-full items-center justify-between"
              asChild
            >
              <Button className="bg-primary/10 w-full justify-start border-sky-300 shadow-none">
                Show More
                <IconChevronsDown />
              </Button>
            </CollapsibleTrigger>
          </Collapsible>
        )}
      </aside>
    );
  // Mobile
  return (
    <aside className="order-2 h-fit rounded-lg px-4 py-2 backdrop-blur-lg max-sm:bg-white/80 md:top-12 md:py-12">
      <Collapsible>
        <CollapsibleTrigger className="flex w-full items-center justify-between">
          <div className="text-start">
            <p className="font-light">Looking for our other</p>
            <h2 className="text-2xl md:mb-3">Products</h2>
          </div>
          <IconChevronsDown />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <ul className="space-y-3 pt-3">
            {data.map((cat) => (
              <li key={cat._id}>
                <Button
                  className="bg-primary/10 w-full justify-start border-sky-300 shadow-none"
                  asChild
                >
                  <Link href={`/products/${cat.slug?.current}`}>
                    {cat.category}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </aside>
  );
}
