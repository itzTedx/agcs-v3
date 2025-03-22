import { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

interface HeadingProps extends ComponentPropsWithoutRef<"h1"> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Heading = ({
  level = 2,
  children,
  className,
  ...props
}: HeadingProps) => {
  const headings = {
    1: "h1",
    2: "h2",
    3: "h3",
    4: "h4",
    5: "h5",
    6: "h6",
  } as const;

  const Tag = headings[level];

  return (
    <Tag
      className={cn(
        "pb-3 text-3xl font-medium tracking-wide text-sky-600",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};
