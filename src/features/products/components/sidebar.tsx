import Link from "next/link";

import { Button } from "@/components/ui/button";

import type { PRODUCTS_CATEGORIES_QUERYResult } from "../../../../sanity.types";

interface Props {
  data: PRODUCTS_CATEGORIES_QUERYResult;
}

export function Sidebar({ data }: Props) {
  return (
    <aside className="sticky top-16 z-10 hidden h-fit rounded-lg px-4 py-2 backdrop-blur-lg max-sm:bg-white/80 md:top-12 md:py-12 lg:block">
      <div className="text-start">
        <p className="font-light">Looking for our other</p>
        <h2 className="text-2xl md:mb-3">Products</h2>
      </div>
      <ul className="space-y-3 pb-3">
        {data.map((cat) => (
          <li key={cat._id}>
            <Button
              className="bg-primary/10 border-primary/60 w-full justify-start shadow-none"
              asChild
            >
              <Link href={`/products/${cat.slug?.current}`}>
                {cat.category}
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
