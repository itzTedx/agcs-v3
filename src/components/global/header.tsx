import { ArrowRightIcon, SearchIcon } from "lucide-react";

import { Input } from "../ui/input";

interface Props {
  text: {
    title: string;
    subtext: string;
  };
}

export default function Header({ text }: Props) {
  return (
    <header className="bg-sky-500 py-9 md:py-12">
      <div className="container grid max-w-7xl items-center gap-4 md:grid-cols-3 md:gap-6">
        <div className="md:col-span-2">
          <h1 className="pb-1 text-xl font-light md:text-2xl">
            {text.title} <span className="sr-only">{text.subtext}</span>
          </h1>
          <p aria-hidden className="text-2xl font-medium md:pb-4 md:text-3xl">
            {text.subtext}
          </p>
        </div>
        <div className="*:not-first:mt-2">
          <div className="relative">
            <Input
              className="peer bg-background ps-9 pe-9"
              placeholder="What are you looking for?"
              type="search"
            />
            <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
              <SearchIcon size={16} />
            </div>
            <button
              className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Submit search"
              type="submit"
            >
              <ArrowRightIcon size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
