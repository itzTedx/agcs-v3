import Image from "next/image";

import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { urlFor } from "@/sanity/lib/image";

import { CardContent, Card as CardUi } from "../ui/card";

interface Props {
  alt?: string | null;
  title: string | null;
  image?: SanityImageSource | null;
}

export const Card = ({ image, title, alt }: Props) => {
  return (
    <CardUi>
      <CardContent className="relative">
        {image ? (
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Title>{title}</Title>
            <Image
              src={urlFor(image).url()}
              alt={alt ?? ""}
              fill
              style={{
                objectFit: "cover",
              }}
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
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
    <h4 className="bg-background/50 absolute bottom-3 left-3 z-10 rounded-lg border border-sky-400/40 px-3 py-1 font-semibold backdrop-blur-xl">
      {children}
    </h4>
  );
};
