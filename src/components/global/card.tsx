import Image from "next/image";

import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";

import { CardContent, Card as CardUi } from "../ui/card";

interface Props {
  alt?: string | null;
  title: string | null;
  image?: SanityImageSource | null;
  className?: string;
}

export const Card = ({ image, title, alt, className }: Props) => {
  return (
    <CardUi>
      <CardContent className={cn("relative")}>
        {image ? (
          <div
            className={cn(
              "relative aspect-video overflow-hidden rounded-lg",
              className
            )}
          >
            <Title>{title}</Title>
            <Image
              src={urlFor(image).url()}
              alt={alt ?? ""}
              title={alt ?? ""}
              fill
              style={{
                objectFit: "cover",
              }}
              sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
              quality={100}
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        ) : (
          <Title>{title}</Title>
        )}
      </CardContent>
    </CardUi>
  );
};

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="bg-background/75 absolute bottom-3 left-3 z-10 rounded-lg border border-sky-400/40 px-3 py-1 font-semibold text-sky-700 shadow-2xl backdrop-blur-2xl">
      {children}
    </h3>
  );
};
